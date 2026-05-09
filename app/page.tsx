import { getAllQuests, getQuestBySlug } from "@/lib/quests";
import QuestList from "./QuestList";

export default function Home() {
  const quests = getAllQuests().map((quest) => {
    const walkthrough = getQuestBySlug(quest.slug)?.walkthrough;
    const stepCount =
      walkthrough?.sections.reduce(
        (count, section) => count + section.steps.length,
        0,
      ) ?? 0;

    return {
      ...quest,
      hasGuide: Boolean(walkthrough),
      stepCount,
    };
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">All OSRS Quests</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {quests.length} quests, alphabetical. Tap one for the step-by-step
          checklist.
        </p>
      </div>
      <QuestList quests={quests} />
    </div>
  );
}
