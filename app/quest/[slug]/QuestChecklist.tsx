"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { QuestStep, QuestWalkthrough } from "@/lib/quests";

type SavedState = {
  steps: Record<string, boolean>;
  items: Record<string, boolean>;
  complete: boolean;
};

type Mode = "list" | "focus";

type FlatStep = {
  id: string;
  index: number;
  sectionIdx: number;
  sectionTitle: string;
  stepNumberInSection: number;
  step: QuestStep;
};

const EMPTY: SavedState = { steps: {}, items: {}, complete: false };

const MODE_KEY = "quest-guide:mode";

function storageKey(slug: string) {
  return `quest:${slug}`;
}

function load(slug: string): SavedState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<SavedState>;
    if (!parsed || typeof parsed !== "object") return EMPTY;
    return {
      steps: parsed.steps ?? {},
      items: parsed.items ?? {},
      complete: Boolean(parsed.complete),
    };
  } catch {
    return EMPTY;
  }
}

function save(slug: string, state: SavedState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(slug), JSON.stringify(state));
}

export default function QuestChecklist({
  slug,
  walkthrough,
}: {
  slug: string;
  walkthrough: QuestWalkthrough;
}) {
  const [state, setState] = useState<SavedState>(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const [mode, setMode] = useState<Mode>("list");
  const [collapsedOverride, setCollapsedOverride] = useState<
    Record<number, boolean>
  >({});
  const stepRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const didAutoScroll = useRef(false);

  useEffect(() => {
    // localStorage is browser-only; sync into state after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(load(slug));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(window.localStorage.getItem(MODE_KEY) === "focus" ? "focus" : "list");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, [slug]);

  const flatSteps = useMemo(() => {
    const flat: FlatStep[] = [];
    walkthrough.sections.forEach((section, sectionIdx) => {
      section.steps.forEach((step, stepIdx) => {
        flat.push({
          id: `${sectionIdx}.${stepIdx}`,
          index: flat.length,
          sectionIdx,
          sectionTitle: section.title,
          stepNumberInSection: stepIdx + 1,
          step,
        });
      });
    });
    return flat;
  }, [walkthrough]);

  const total = flatSteps.length;
  const completedCount = flatSteps.filter((s) => state.steps[s.id]).length;
  const allDone = total > 0 && completedCount === total;

  // The step the player is on: the first one they haven't ticked.
  const current = flatSteps.find((s) => !state.steps[s.id]) ?? null;

  const persist = useCallback(
    (updater: (prev: SavedState) => SavedState) => {
      setState((prev) => {
        const next = updater(prev);
        save(slug, next);
        return next;
      });
    },
    [slug],
  );

  const setStep = useCallback(
    (id: string, value: boolean) => {
      persist((prev) => ({
        ...prev,
        steps: { ...prev.steps, [id]: value },
        complete: value ? prev.complete : false,
      }));
    },
    [persist],
  );

  const setItem = useCallback(
    (id: string, value: boolean) => {
      persist((prev) => ({ ...prev, items: { ...prev.items, [id]: value } }));
    },
    [persist],
  );

  const markQuestComplete = useCallback(
    (value: boolean) => {
      persist((prev) => ({ ...prev, complete: value }));
    },
    [persist],
  );

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm(
        "Reset all checked steps and items for this quest?",
      );
      if (!confirmed) return;
    }
    setCollapsedOverride({});
    persist(() => ({ ...EMPTY }));
  }, [persist]);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "focus" ? "list" : "focus";
      window.localStorage.setItem(MODE_KEY, next);
      return next;
    });
  }, []);

  const scrollToCurrent = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      if (!current) return;
      // Make sure the section holding it is open before we scroll.
      setCollapsedOverride((prev) => ({ ...prev, [current.sectionIdx]: false }));
      requestAnimationFrame(() => {
        stepRefs.current[current.id]?.scrollIntoView({
          behavior,
          block: "center",
        });
      });
    },
    [current],
  );

  // On first load of a quest already in progress, drop the player back where
  // they left off instead of at the top of a long list.
  useEffect(() => {
    if (!hydrated || didAutoScroll.current || mode !== "list") return;
    didAutoScroll.current = true;
    if (!current || current.index === 0) return;
    requestAnimationFrame(() => {
      stepRefs.current[current.id]?.scrollIntoView({
        behavior: "auto",
        block: "center",
      });
    });
  }, [hydrated, mode, current]);

  return (
    <div className="pb-24">
      <ItemsPanel
        walkthrough={walkthrough}
        checked={state.items}
        onToggle={setItem}
        hydrated={hydrated}
        // Focus mode exists to put the current step on screen immediately, so
        // the prep panels fold away behind a toggle there.
        collapsible={mode === "focus"}
      />

      {mode === "focus" ? (
        <FocusView
          flatSteps={flatSteps}
          current={current}
          completedCount={completedCount}
          total={total}
          onCheck={setStep}
        />
      ) : (
        <ListView
          walkthrough={walkthrough}
          flatSteps={flatSteps}
          checkedSteps={state.steps}
          currentId={current?.id ?? null}
          collapsedOverride={collapsedOverride}
          setCollapsedOverride={setCollapsedOverride}
          onCheck={setStep}
          stepRefs={stepRefs}
          completedCount={completedCount}
          total={total}
          hydrated={hydrated}
          onReset={reset}
        />
      )}

      <CompletionPanel
        walkthrough={walkthrough}
        complete={state.complete}
        allDone={allDone}
        onToggle={markQuestComplete}
      />

      <StepBar
        mode={mode}
        onToggleMode={toggleMode}
        completedCount={completedCount}
        total={total}
        hydrated={hydrated}
        currentIndex={current?.index ?? null}
        onJump={() => scrollToCurrent()}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Step rendering                                                             */
/* -------------------------------------------------------------------------- */

function TravelBlock({ travel }: { travel: string }) {
  return (
    <div className="mt-2 flex gap-2 rounded-md border border-amber-500/25 bg-amber-500/10 p-2.5">
      <PinIcon className="mt-0.5 h-4 w-4 flex-none text-amber-400" />
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-400/90">
          Getting there
        </p>
        <p className="mt-0.5 text-sm leading-snug text-amber-100/90">{travel}</p>
      </div>
    </div>
  );
}

function StepBody({
  step,
  large = false,
  struck = false,
}: {
  step: QuestStep;
  large?: boolean;
  struck?: boolean;
}) {
  return (
    <>
      <p
        className={`${large ? "text-xl leading-relaxed" : "text-base leading-snug"} ${
          struck ? "text-zinc-500 line-through" : ""
        }`}
      >
        {step.text}
      </p>
      {step.travel && !struck ? <TravelBlock travel={step.travel} /> : null}
      {step.notes && step.notes.length > 0 && !struck ? (
        <ul className="mt-2 space-y-1 text-sm text-zinc-400">
          {step.notes.map((note, idx) => (
            <li key={idx} className="flex gap-2">
              <span aria-hidden="true" className="select-none text-zinc-600">
                &bull;
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* List view                                                                  */
/* -------------------------------------------------------------------------- */

function ListView({
  walkthrough,
  flatSteps,
  checkedSteps,
  currentId,
  collapsedOverride,
  setCollapsedOverride,
  onCheck,
  stepRefs,
  completedCount,
  total,
  hydrated,
  onReset,
}: {
  walkthrough: QuestWalkthrough;
  flatSteps: FlatStep[];
  checkedSteps: Record<string, boolean>;
  currentId: string | null;
  collapsedOverride: Record<number, boolean>;
  setCollapsedOverride: React.Dispatch<
    React.SetStateAction<Record<number, boolean>>
  >;
  onCheck: (id: string, value: boolean) => void;
  stepRefs: React.RefObject<Record<string, HTMLLIElement | null>>;
  completedCount: number;
  total: number;
  hydrated: boolean;
  onReset: () => void;
}) {
  return (
    <div className="mt-6">
      <div className="mb-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-400">
          <span>
            {hydrated ? `${completedCount} / ${total} steps` : `${total} steps`}
          </span>
          <button
            type="button"
            onClick={onReset}
            className="px-1 py-0.5 text-zinc-500 hover:text-zinc-300"
          >
            Reset
          </button>
        </div>
        <ProgressBar value={completedCount} max={total} />
      </div>

      <ol className="space-y-5">
        {walkthrough.sections.map((section, sectionIdx) => {
          const sectionSteps = flatSteps.filter(
            (s) => s.sectionIdx === sectionIdx,
          );
          const sectionDone =
            sectionSteps.length > 0 &&
            sectionSteps.every((s) => checkedSteps[s.id]);
          // Finished sections fold away so the list stays short on a phone,
          // unless the player has explicitly opened one back up.
          const collapsed = collapsedOverride[sectionIdx] ?? sectionDone;

          return (
            <li key={sectionIdx}>
              <button
                type="button"
                onClick={() =>
                  setCollapsedOverride((prev) => ({
                    ...prev,
                    [sectionIdx]: !collapsed,
                  }))
                }
                className="flex w-full items-center gap-2 py-1.5 text-left"
              >
                <ChevronIcon
                  className={`h-4 w-4 flex-none text-zinc-500 transition-transform ${
                    collapsed ? "" : "rotate-90"
                  }`}
                />
                <h2 className="flex-1 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                  {sectionIdx + 1}. {section.title}
                </h2>
                {sectionDone ? (
                  <span className="flex-none rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    Done
                  </span>
                ) : (
                  <span className="flex-none text-[11px] text-zinc-500">
                    {sectionSteps.filter((s) => checkedSteps[s.id]).length}/
                    {sectionSteps.length}
                  </span>
                )}
              </button>

              {collapsed ? null : (
                <ul className="mt-1 space-y-2">
                  {sectionSteps.map((flat) => {
                    const checked = Boolean(checkedSteps[flat.id]);
                    const isCurrent = hydrated && flat.id === currentId;
                    return (
                      <li
                        key={flat.id}
                        ref={(el) => {
                          stepRefs.current[flat.id] = el;
                        }}
                        className="scroll-mt-20"
                      >
                        <label
                          className={`flex cursor-pointer select-none items-start gap-3 rounded-xl border p-3.5 transition-colors active:bg-zinc-800 ${
                            checked
                              ? "border-zinc-800/70 bg-zinc-900/40 opacity-60"
                              : isCurrent
                                ? "border-emerald-500/60 bg-zinc-900 ring-1 ring-emerald-500/30"
                                : "border-zinc-800 bg-zinc-900"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => onCheck(flat.id, e.target.checked)}
                            className="mt-0.5 h-6 w-6 flex-none cursor-pointer accent-emerald-500"
                          />
                          <div className="min-w-0 flex-1">
                            {isCurrent ? (
                              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
                                You are here
                              </p>
                            ) : null}
                            <StepBody step={flat.step} struck={checked} />
                          </div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Focus view — one step at a time, for playing side-by-side with the game     */
/* -------------------------------------------------------------------------- */

function FocusView({
  flatSteps,
  current,
  completedCount,
  total,
  onCheck,
}: {
  flatSteps: FlatStep[];
  current: FlatStep | null;
  completedCount: number;
  total: number;
  onCheck: (id: string, value: boolean) => void;
}) {
  const previous =
    current && current.index > 0 ? flatSteps[current.index - 1] : null;
  const lastStep = flatSteps[flatSteps.length - 1] ?? null;

  return (
    <div className="mt-6">
      <div className="mb-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-400">
          <span>
            {current
              ? `Step ${current.index + 1} of ${total}`
              : `${total} of ${total} steps`}
          </span>
          <span>{Math.round((completedCount / Math.max(total, 1)) * 100)}%</span>
        </div>
        <ProgressBar value={completedCount} max={total} />
      </div>

      {current ? (
        <div className="rounded-2xl border border-emerald-500/40 bg-zinc-900 p-5 ring-1 ring-emerald-500/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            {current.sectionIdx + 1}. {current.sectionTitle}
          </p>
          <div className="mt-3">
            <StepBody step={current.step} large />
          </div>
          <button
            type="button"
            onClick={() => onCheck(current.id, true)}
            className="mt-6 w-full rounded-xl bg-emerald-500 px-4 py-4 text-base font-semibold text-emerald-950 active:bg-emerald-400"
          >
            Done &mdash; next step
          </button>
          {previous ? (
            <button
              type="button"
              onClick={() => onCheck(previous.id, false)}
              className="mt-2 w-full rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-400 active:bg-zinc-800"
            >
              Back a step
            </button>
          ) : null}
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-500/40 bg-zinc-900 p-6 text-center">
          <p className="text-lg font-semibold text-emerald-300">
            Every step ticked off
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Mark the quest complete below to log it.
          </p>
          {lastStep ? (
            <button
              type="button"
              onClick={() => onCheck(lastStep.id, false)}
              className="mt-4 rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-400 active:bg-zinc-800"
            >
              Back a step
            </button>
          ) : null}
        </div>
      )}

      {previous ? (
        <div className="mt-4 rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-3.5 opacity-70">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            Just finished
          </p>
          <p className="mt-1 text-sm leading-snug text-zinc-400">
            {previous.step.text}
          </p>
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Chrome                                                                     */
/* -------------------------------------------------------------------------- */

function ProgressBar({ value, max }: { value: number; max: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
      <div
        className="h-full rounded-full bg-emerald-500 transition-[width] duration-200"
        style={{ width: max > 0 ? `${(value / max) * 100}%` : "0%" }}
      />
    </div>
  );
}

function StepBar({
  mode,
  onToggleMode,
  completedCount,
  total,
  hydrated,
  currentIndex,
  onJump,
}: {
  mode: Mode;
  onToggleMode: () => void;
  completedCount: number;
  total: number;
  hydrated: boolean;
  currentIndex: number | null;
  onJump: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-800 bg-zinc-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur supports-[backdrop-filter]:bg-zinc-900/85">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-zinc-400">
            {hydrated && currentIndex !== null
              ? `On step ${currentIndex + 1} of ${total}`
              : `${completedCount} / ${total} steps`}
          </p>
          <div className="mt-1">
            <ProgressBar value={completedCount} max={total} />
          </div>
        </div>
        {mode === "list" && currentIndex !== null ? (
          <button
            type="button"
            onClick={onJump}
            className="flex-none rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-300 active:bg-zinc-800"
          >
            Jump to step
          </button>
        ) : null}
        <button
          type="button"
          onClick={onToggleMode}
          aria-pressed={mode === "focus"}
          className={`flex-none rounded-lg px-3 py-2 text-xs font-semibold ${
            mode === "focus"
              ? "bg-emerald-500 text-emerald-950"
              : "border border-zinc-700 text-zinc-300 active:bg-zinc-800"
          }`}
        >
          Focus
        </button>
      </div>
    </div>
  );
}

function ItemsPanel({
  walkthrough,
  checked,
  onToggle,
  hydrated,
  collapsible,
}: {
  walkthrough: QuestWalkthrough;
  checked: Record<string, boolean>;
  onToggle: (id: string, value: boolean) => void;
  hydrated: boolean;
  collapsible: boolean;
}) {
  const [open, setOpen] = useState(false);
  const items = walkthrough.itemsRequired ?? [];
  const packed = items.filter((_, idx) => checked[`i${idx}`]).length;

  const extras = [
    { label: "Recommended", items: walkthrough.recommended ?? [] },
    { label: "Enemies", items: walkthrough.enemies ?? [] },
  ].filter((b) => b.items.length > 0);

  const hasAnything =
    Boolean(walkthrough.startPoint) || items.length > 0 || extras.length > 0;
  if (!hasAnything) return null;

  if (collapsible && !open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-3 text-left active:bg-zinc-800"
      >
        <ChevronIcon className="h-4 w-4 flex-none text-zinc-500" />
        <span className="flex-1 text-sm font-medium text-zinc-300">
          Start point, items &amp; prep
        </span>
        {items.length > 0 && hydrated ? (
          <span className="flex-none text-xs text-zinc-500">
            {packed}/{items.length} packed
          </span>
        ) : null}
      </button>
    );
  }

  return (
    <div className="space-y-3">
      {collapsible ? (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex w-full items-center gap-2 py-1 text-left text-sm font-medium text-zinc-400"
        >
          <ChevronIcon className="h-4 w-4 flex-none rotate-90 text-zinc-500" />
          Hide prep
        </button>
      ) : null}
      {walkthrough.startPoint ? (
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
            Start point
          </p>
          <p className="mt-1 text-sm leading-snug text-zinc-200">
            {walkthrough.startPoint}
          </p>
        </div>
      ) : null}

      {items.length > 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3.5">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Bank checklist
            </p>
            <span className="text-[11px] text-zinc-500">
              {hydrated ? `${packed} / ${items.length} packed` : null}
            </span>
          </div>
          <ul className="mt-2 space-y-1.5">
            {items.map((item, idx) => {
              const id = `i${idx}`;
              const isChecked = Boolean(checked[id]);
              return (
                <li key={id}>
                  <label className="flex cursor-pointer select-none items-start gap-3 rounded-lg py-1 active:bg-zinc-800/60">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => onToggle(id, e.target.checked)}
                      className="mt-0.5 h-5 w-5 flex-none cursor-pointer accent-emerald-500"
                    />
                    <span
                      className={`text-sm leading-snug ${
                        isChecked ? "text-zinc-500 line-through" : "text-zinc-200"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {extras.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {extras.map((block) => (
            <div
              key={block.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-3.5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {block.label}
              </p>
              <ul className="mt-1.5 space-y-1 text-sm text-zinc-200">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span aria-hidden="true" className="select-none text-zinc-600">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CompletionPanel({
  walkthrough,
  complete,
  allDone,
  onToggle,
}: {
  walkthrough: QuestWalkthrough;
  complete: boolean;
  allDone: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-medium">Mark quest complete</p>
          <p className="text-xs text-zinc-400">
            {complete
              ? "Marked complete on this device."
              : allDone
                ? "All steps checked - ready to mark."
                : "Save your progress for later."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onToggle(!complete)}
          className={`flex-none rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
            complete
              ? "bg-zinc-700 text-zinc-100 active:bg-zinc-600"
              : "bg-emerald-500 text-emerald-950 active:bg-emerald-400"
          }`}
        >
          {complete ? "Mark incomplete" : "Mark complete"}
        </button>
      </div>
      {walkthrough.rewards && walkthrough.rewards.length > 0 ? (
        <div className="mt-4 border-t border-zinc-800 pt-3">
          <p className="text-sm font-semibold text-zinc-300">Rewards</p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-400">
            {walkthrough.rewards.map((reward, idx) => (
              <li key={idx} className="flex gap-2">
                <span aria-hidden="true" className="select-none text-emerald-400">
                  &bull;
                </span>
                <span>{reward}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
