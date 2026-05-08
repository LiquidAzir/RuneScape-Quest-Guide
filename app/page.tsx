import { getAllQuests, hasWalkthrough } from "@/lib/quests";
import QuestList from "./QuestList";

export default function Home() {
  const quests = getAllQuests().map((quest) => ({
    ...quest,
    hasGuide: hasWalkthrough(quest.slug),
  }));

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
