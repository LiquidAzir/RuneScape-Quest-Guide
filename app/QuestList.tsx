"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Difficulty, QuestMeta } from "@/lib/quests";

type QuestProgress = {
  completedSteps: number;
  complete: boolean;
};

export type QuestRow = QuestMeta & {
  hasGuide: boolean;
  stepCount: number;
  /** Deduplicated bag of words from the walkthrough, for free-text search. */
  searchText: string;
  /** Proper nouns (NPCs, towns, dungeons) so we can show why a quest matched. */
  keywords: string[];
};

type Filter =
  | "all"
  | "f2p"
  | "members"
  | "in-progress"
  | "completed"
  | "not-started";

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Novice: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Intermediate: "bg-sky-500/15 text-sky-300 ring-sky-500/30",
  Experienced: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Master: "bg-rose-500/15 text-rose-300 ring-rose-500/30",
  Grandmaster: "bg-fuchsia-500/15 text-fuchsia-300 ring-fuchsia-500/30",
  Special: "bg-zinc-500/15 text-zinc-300 ring-zinc-500/30",
};

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "in-progress", label: "In progress" },
  { id: "not-started", label: "Not started" },
  { id: "completed", label: "Completed" },
  { id: "f2p", label: "F2P" },
  { id: "members", label: "Members" },
];

export default function QuestList({
  quests,
  commonWords,
}: {
  quests: QuestRow[];
  /** Words dropped from the index for appearing in nearly every quest. */
  commonWords: string[];
}) {
  const common = useMemo(() => new Set(commonWords), [commonWords]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [progressBySlug, setProgressBySlug] = useState<
    Record<string, QuestProgress>
  >({});

  // Hydrate progress state from localStorage. Reading localStorage during
  // SSR isn't possible, so we sync into client state after mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const progress: Record<string, QuestProgress> = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (!key || !key.startsWith("quest:")) continue;
      try {
        const value = JSON.parse(window.localStorage.getItem(key) ?? "{}");
        if (value && typeof value === "object") {
          progress[key.slice("quest:".length)] = {
            completedSteps: Object.values(value.steps ?? {}).filter(Boolean)
              .length,
            complete: Boolean(value.complete),
          };
        }
      } catch {
        // ignore corrupt entries
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgressBySlug(progress);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    // A term that got pruned for being everywhere can't narrow anything down,
    // so it's treated as already satisfied rather than as an impossible match.
    const terms = q
      .split(/\s+/)
      .filter(Boolean)
      .filter((term) => !common.has(term));

    return quests
      .filter((quest) => {
        const progress = progressBySlug[quest.slug];
        const completedSteps = progress?.completedSteps ?? 0;
        const complete = Boolean(progress?.complete);

        if (filter === "f2p" && quest.members) return false;
        if (filter === "members" && !quest.members) return false;
        if (filter === "in-progress" && (complete || completedSteps === 0)) {
          return false;
        }
        if (filter === "completed" && !complete) return false;
        if (filter === "not-started" && (complete || completedSteps > 0)) {
          return false;
        }
        if (terms.length === 0) return true;

        const name = quest.name.toLowerCase();
        // Every term has to appear somewhere: the title, or anywhere in the
        // walkthrough. That's what makes "gillie groats" find Ides of Milk.
        return terms.every(
          (term) => name.includes(term) || quest.searchText.includes(term),
        );
      })
      .map((quest) => {
        const nameMatch = terms.every((term) =>
          quest.name.toLowerCase().includes(term),
        );
        // When a quest matched on its contents rather than its title, show the
        // NPC or place that caused the hit so the result isn't a mystery.
        const hint =
          terms.length > 0 && !nameMatch
            ? (quest.keywords.find((keyword) => {
                const lower = keyword.toLowerCase();
                return terms.every((term) => lower.includes(term));
              }) ??
              quest.keywords.find((keyword) => {
                const lower = keyword.toLowerCase();
                return terms.some((term) => lower.includes(term));
              }) ??
              null)
            : null;
        return { quest, hint };
      });
  }, [quests, progressBySlug, query, filter, common]);

  const completedCount = quests.filter((quest) =>
    progressBySlug[quest.slug]?.complete,
  ).length;

  return (
    <div>
      <div className="sticky top-[57px] z-10 -mx-4 mb-4 space-y-2.5 bg-zinc-950/95 px-4 pb-3 pt-1 backdrop-blur">
        <input
          type="search"
          inputMode="search"
          placeholder="Search quests, NPCs or places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`flex-none rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                filter === f.id
                  ? "bg-emerald-500 font-medium text-emerald-950"
                  : "bg-zinc-800 text-zinc-300 active:bg-zinc-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between px-0.5 text-xs text-zinc-500">
        <span>
          {query.trim()
            ? `${results.length} match${results.length === 1 ? "" : "es"}`
            : `${results.length} quests`}
        </span>
        <span>{completedCount} completed</span>
      </div>

      <ul className="divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        {results.map(({ quest, hint }) => {
          const progress = progressBySlug[quest.slug];
          const done = Boolean(progress?.complete);
          const completedSteps = progress?.completedSteps ?? 0;
          const inProgress = !done && completedSteps > 0;
          return (
            <li key={quest.slug}>
              <Link
                href={`/quest/${quest.slug}`}
                className="flex items-center gap-3 px-4 py-3.5 active:bg-zinc-800"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                    done
                      ? "bg-emerald-500 text-emerald-950"
                      : inProgress
                        ? "border-2 border-emerald-500/60"
                        : "border border-zinc-700"
                  }`}
                >
                  {done ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">
                    {quest.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">
                    {hint ? (
                      <span className="text-amber-300/80">{hint}</span>
                    ) : quest.hasGuide ? (
                      `${completedSteps} / ${quest.stepCount} steps`
                    ) : (
                      "No guide yet"
                    )}
                  </span>
                </span>
                <span className="flex flex-none items-center gap-1.5 text-[11px]">
                  {quest.members ? (
                    <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300 ring-1 ring-amber-500/30">
                      P2P
                    </span>
                  ) : (
                    <span className="rounded bg-zinc-700/60 px-1.5 py-0.5 text-zinc-300 ring-1 ring-zinc-600/50">
                      F2P
                    </span>
                  )}
                  <span
                    className={`rounded px-1.5 py-0.5 ring-1 ${DIFFICULTY_COLORS[quest.difficulty]}`}
                  >
                    {quest.difficulty}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
        {results.length === 0 ? (
          <li className="px-4 py-8 text-center text-sm text-zinc-500">
            Nothing matches &ldquo;{query.trim()}&rdquo;.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
