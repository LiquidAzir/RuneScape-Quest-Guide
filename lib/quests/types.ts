export type Difficulty =
  | "Novice"
  | "Intermediate"
  | "Experienced"
  | "Master"
  | "Grandmaster"
  | "Special";

export type Length =
  | "Very short"
  | "Short"
  | "Medium"
  | "Long"
  | "Very long";

export interface SkillRequirement {
  skill: string;
  level: number;
  boostable?: boolean;
}

export interface QuestRequirements {
  quests?: string[];
  skills?: SkillRequirement[];
  other?: string[];
}

export interface QuestStep {
  /** Short imperative text shown next to the checkbox. */
  text: string;
  /**
   * Exact route to the place this step happens: the fastest teleport or
   * transport, then the walk from where it drops you. Rendered as a
   * highlighted "Getting there" line so it can be scanned at a glance.
   * Only set it when the step sends you somewhere new.
   */
  travel?: string;
  /** Optional sub-bullets or hints rendered under the step. */
  notes?: string[];
}

export interface QuestSection {
  title: string;
  steps: QuestStep[];
}

export interface QuestWalkthrough {
  startPoint?: string;
  recommended?: string[];
  itemsRequired?: string[];
  enemies?: string[];
  sections: QuestSection[];
  rewards?: string[];
}

export interface QuestMeta {
  slug: string;
  name: string;
  members: boolean;
  difficulty: Difficulty;
  length?: Length;
  series?: string;
  releaseOrder?: number;
  shortDescription?: string;
  requirements?: QuestRequirements;
  wikiUrl?: string;
}

export interface Quest extends QuestMeta {
  walkthrough?: QuestWalkthrough;
}
