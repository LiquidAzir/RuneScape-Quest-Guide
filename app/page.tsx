import { getAllQuests, getQuestBySlug } from "@/lib/quests";
import { buildWordSet, extractKeywords, toSearchTexts } from "@/lib/quests/search";
import QuestList, { type QuestRow } from "./QuestList";

export default function Home() {
  const entries = getAllQuests().map((quest) => {
    const walkthrough = getQuestBySlug(quest.slug)?.walkthrough;
    const stepCount =
      walkthrough?.sections.reduce(
        (count, section) => count + section.steps.length,
        0,
      ) ?? 0;

    return {
      quest,
      walkthrough,
      stepCount,
      words: buildWordSet(walkthrough, [
        quest.name,
        quest.shortDescription ?? "",
        quest.series ?? "",
      ]),
    };
  });

  // Pruning happens across the whole corpus, so it has to be done once all the
  // word sets exist rather than per quest.
  const { searchTexts, commonWords } = toSearchTexts(
    entries.map((entry) => entry.words),
  );

  const quests: QuestRow[] = entries.map((entry, idx) => ({
    ...entry.quest,
    hasGuide: Boolean(entry.walkthrough),
    stepCount: entry.stepCount,
    keywords: entry.walkthrough ? extractKeywords(entry.walkthrough) : [],
    searchText: searchTexts[idx],
  }));

  const withGuides = quests.filter((quest) => quest.hasGuide).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">All OSRS Quests</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {withGuides} step-by-step guides. Search by quest, NPC or place.
        </p>
      </div>
      <QuestList quests={quests} commonWords={commonWords} />
    </div>
  );
}
