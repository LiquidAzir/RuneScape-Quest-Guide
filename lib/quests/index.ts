import { QUESTS, QUESTS_ALPHABETICAL } from "./data";
import { getWalkthrough, WALKTHROUGHS } from "./walkthroughs";
import type { Quest, QuestMeta } from "./types";

export * from "./types";
export { QUESTS, QUESTS_ALPHABETICAL, WALKTHROUGHS };

export function getAllQuests(): QuestMeta[] {
  return QUESTS_ALPHABETICAL;
}

export function getQuestBySlug(slug: string): Quest | undefined {
  const meta = QUESTS.find((quest) => quest.slug === slug);
  if (!meta) return undefined;
  return { ...meta, walkthrough: getWalkthrough(slug) };
}

export function getAllSlugs(): string[] {
  return QUESTS.map((quest) => quest.slug);
}

export function hasWalkthrough(slug: string): boolean {
  return Boolean(WALKTHROUGHS[slug]);
}
