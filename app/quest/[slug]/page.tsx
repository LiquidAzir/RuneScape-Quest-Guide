import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getQuestBySlug } from "@/lib/quests";
import QuestChecklist from "./QuestChecklist";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quest = getQuestBySlug(slug);
  if (!quest) return { title: "Quest not found" };
  return {
    title: `${quest.name} - OSRS Quest Guide`,
    description: `Step-by-step walkthrough for ${quest.name} in Old School RuneScape, with exact directions to every NPC and location.`,
  };
}

export default async function QuestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quest = getQuestBySlug(slug);
  if (!quest) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-5">
      <Link
        href="/"
        className="-ml-1 mb-3 inline-flex items-center gap-1.5 rounded-lg px-1 py-1 text-sm text-zinc-400 active:bg-zinc-800"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        All quests
      </Link>

      <header className="mb-5">
        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {quest.name}
        </h1>
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
          <span
            className={
              "rounded px-2 py-0.5 ring-1 " +
              (quest.members
                ? "bg-amber-500/10 text-amber-300 ring-amber-500/30"
                : "bg-zinc-700/60 text-zinc-300 ring-zinc-600/50")
            }
          >
            {quest.members ? "Members" : "Free-to-play"}
          </span>
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 ring-1 ring-zinc-700">
            {quest.difficulty}
          </span>
          {quest.length ? (
            <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 ring-1 ring-zinc-700">
              {quest.length}
            </span>
          ) : null}
          {quest.wikiUrl ? (
            <a
              href={quest.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 ring-1 ring-zinc-700 active:bg-zinc-700"
            >
              Wiki
            </a>
          ) : null}
        </div>
      </header>

      {quest.walkthrough ? (
        <QuestChecklist slug={quest.slug} walkthrough={quest.walkthrough} />
      ) : (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Walkthrough coming soon</h2>
          <p className="mt-2 text-sm text-zinc-400">
            We haven&apos;t written a step-by-step guide for this quest yet.
            Until we do, the official OSRS Wiki has a thorough walkthrough.
          </p>
          {quest.wikiUrl ? (
            <a
              href={quest.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-emerald-950 active:bg-emerald-400"
            >
              Open wiki walkthrough
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
