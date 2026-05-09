"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { QuestWalkthrough } from "@/lib/quests";

type SavedState = {
  steps: Record<string, boolean>;
  complete?: boolean;
};

const EMPTY: SavedState = { steps: {} };

function storageKey(slug: string) {
  return `quest:${slug}`;
}

function load(slug: string): SavedState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as SavedState;
    if (!parsed || typeof parsed !== "object") return EMPTY;
    return { steps: parsed.steps ?? {}, complete: Boolean(parsed.complete) };
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

  useEffect(() => {
    // localStorage is browser-only; sync into state after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(load(slug));
    setHydrated(true);
  }, [slug]);

  const stepIds = useMemo(() => {
    const ids: string[] = [];
    walkthrough.sections.forEach((section, sIdx) => {
      section.steps.forEach((_, stepIdx) => {
        ids.push(`${sIdx}.${stepIdx}`);
      });
    });
    return ids;
  }, [walkthrough]);

  const completedCount = stepIds.filter((id) => state.steps[id]).length;
  const total = stepIds.length;
  const allDone = total > 0 && completedCount === total;

  const setStep = useCallback(
    (id: string, value: boolean) => {
      setState((prev) => {
        const nextSteps = { ...prev.steps, [id]: value };
        const nextComplete = prev.complete && value;
        const next: SavedState = {
          steps: nextSteps,
          complete: nextComplete ?? false,
        };
        save(slug, next);
        return next;
      });
    },
    [slug],
  );

  const markQuestComplete = useCallback(
    (value: boolean) => {
      setState((prev) => {
        const next: SavedState = { steps: prev.steps, complete: value };
        save(slug, next);
        return next;
      });
    },
    [slug],
  );

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm(
        "Reset all checked steps for this quest?",
      );
      if (!confirmed) return;
    }
    const next: SavedState = { steps: {}, complete: false };
    save(slug, next);
    setState(next);
  }, [slug]);

  return (
    <div>
      {/* Quest meta sidebar - full-width on mobile, before steps */}
      <MetaPanels walkthrough={walkthrough} />

      {/* Progress bar */}
      <div className="mb-4 mt-6">
        <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-400">
          <span>
            {hydrated ? `${completedCount} / ${total} steps` : `${total} steps`}
          </span>
          <button
            type="button"
            onClick={reset}
            className="text-zinc-500 hover:text-zinc-300"
          >
            Reset
          </button>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full bg-emerald-500 transition-[width] duration-200"
            style={{
              width: total > 0 ? `${(completedCount / total) * 100}%` : "0%",
            }}
          />
        </div>
      </div>

      {/* Sections + steps */}
      <ol className="space-y-6">
        {walkthrough.sections.map((section, sIdx) => (
          <li key={sIdx}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-400">
              {sIdx + 1}. {section.title}
            </h2>
            <ul className="space-y-1.5">
              {section.steps.map((step, stepIdx) => {
                const id = `${sIdx}.${stepIdx}`;
                const checked = Boolean(state.steps[id]);
                return (
                  <li key={id}>
                    <label
                      className={`flex cursor-pointer select-none items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3 transition-colors active:bg-zinc-800 ${
                        checked ? "opacity-60" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setStep(id, e.target.checked)}
                        className="mt-1 h-5 w-5 flex-none cursor-pointer accent-emerald-500"
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-base leading-snug ${
                            checked ? "line-through text-zinc-500" : ""
                          }`}
                        >
                          {step.text}
                        </p>
                        {step.notes && step.notes.length > 0 ? (
                          <ul className="mt-1.5 space-y-1 text-sm text-zinc-400">
                            {step.notes.map((note, nIdx) => (
                              <li key={nIdx} className="flex gap-2">
                                <span className="select-none text-zinc-600">
                                  -
                                </span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>

      {/* Complete toggle + rewards */}
      <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-medium">Mark quest complete</p>
            <p className="text-xs text-zinc-400">
              {state.complete
                ? "Marked complete on this device."
                : allDone
                  ? "All steps checked - ready to mark."
                  : "Save your progress for later."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => markQuestComplete(!state.complete)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              state.complete
                ? "bg-zinc-700 text-zinc-100 hover:bg-zinc-600"
                : "bg-emerald-500 text-emerald-950 hover:bg-emerald-400"
            }`}
          >
            {state.complete ? "Mark incomplete" : "Mark complete"}
          </button>
        </div>
        {walkthrough.rewards && walkthrough.rewards.length > 0 ? (
          <div className="mt-4 border-t border-zinc-800 pt-3">
            <p className="text-sm font-semibold text-zinc-300">Rewards</p>
            <ul className="mt-1 space-y-1 text-sm text-zinc-400">
              {walkthrough.rewards.map((reward, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="select-none text-emerald-400">*</span>
                  <span>{reward}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MetaPanels({ walkthrough }: { walkthrough: QuestWalkthrough }) {
  const blocks = [
    { label: "Start point", items: walkthrough.startPoint ? [walkthrough.startPoint] : [] },
    { label: "Items required", items: walkthrough.itemsRequired ?? [] },
    { label: "Recommended", items: walkthrough.recommended ?? [] },
    { label: "Enemies", items: walkthrough.enemies ?? [] },
  ].filter((b) => b.items.length > 0);

  if (blocks.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="rounded-lg border border-zinc-800 bg-zinc-900 p-3"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {block.label}
          </p>
          <ul className="mt-1 space-y-0.5 text-sm text-zinc-200">
            {block.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
