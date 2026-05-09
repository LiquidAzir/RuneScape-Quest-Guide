"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Difficulty, QuestMeta } from "@/lib/quests";

type QuestProgress = {
  completedSteps: number;
  complete: boolean;
};

type QuestRow = QuestMeta & { hasGuide: boolean; stepCount: number };

type Filter =
  | "all"
  | "f2p"
  | "members"
  | "with-guide"
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
  { id: "f2p", label: "F2P" },
  { id: "members", label: "Members" },
  { id: "with-guide", label: "Has guide" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
  { id: "not-started", label: "Not started" },
];

export default function QuestList({ quests }: { quests: QuestRow[] }) {
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return quests.filter((quest) => {
      const progress = progressBySlug[quest.slug];
      const completedSteps = progress?.completedSteps ?? 0;
      const complete = Boolean(progress?.complete);

      if (filter === "f2p" && quest.members) return false;
      if (filter === "members" && !quest.members) return false;
      if (filter === "with-guide" && !quest.hasGuide) return false;
      if (filter === "in-progress" && (complete || completedSteps === 0)) {
        return false;
      }
      if (filter === "completed" && !complete) return false;
      if (filter === "not-started" && (complete || completedSteps > 0)) {
        return false;
      }
      if (q && !quest.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [quests, progressBySlug, query, filter]);

  const completedCount = quests.filter((quest) =>
    progressBySlug[quest.slug]?.complete,
  ).length;

  return (
    <div>
      <div className="mb-4 space-y-3">
        <div className="relative">
          <input
            type="search"
            inputMode="search"
            placeholder="Search quests..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filter === f.id
                  ? "bg-emerald-500 text-emerald-950 font-medium"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-zinc-500">
            {completedCount} / {quests.length} completed
          </span>
        </div>
      </div>

      <ul className="divide-y divide-zinc-800 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
        {filtered.map((quest) => {
          const progress = progressBySlug[quest.slug];
          const done = Boolean(progress?.complete);
          const completedSteps = progress?.completedSteps ?? 0;
          return (
            <li key={quest.slug}>
              <Link
                href={`/quest/${quest.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 active:bg-zinc-800"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs ${
                    done
                      ? "bg-emerald-500 text-emerald-950"
                      : "border border-zinc-700"
                  }`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">
                    {quest.name}
                  </span>
                  {quest.hasGuide ? (
                    <span className="mt-0.5 block text-xs text-zinc-500">
                      {completedSteps} / {quest.stepCount} steps
                    </span>
                  ) : null}
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  {quest.members ? (
                    <span className="rounded px-1.5 py-0.5 ring-1 bg-amber-500/10 text-amber-300 ring-amber-500/30">
                      P2P
                    </span>
                  ) : (
                    <span className="rounded px-1.5 py-0.5 ring-1 bg-zinc-700/60 text-zinc-300 ring-zinc-600/50">
                      F2P
                    </span>
                  )}
                  <span
                    className={`rounded px-1.5 py-0.5 ring-1 ${DIFFICULTY_COLORS[quest.difficulty]}`}
                  >
                    {quest.difficulty}
                  </span>
                  {quest.hasGuide ? (
                    <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-300 ring-1 ring-emerald-500/30">
                      Guide
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
        {filtered.length === 0 ? (
          <li className="px-4 py-6 text-center text-sm text-zinc-500">
            No quests match your search.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
