import type { QuestWalkthrough } from "../types";
import { cooksAssistant } from "./cooks-assistant";
import { sheepShearer } from "./sheep-shearer";
import { theRestlessGhost } from "./the-restless-ghost";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { impCatcher } from "./imp-catcher";
import { witchsPotion } from "./witchs-potion";
import { doricsQuest } from "./dorics-quest";
import { goblinDiplomacy } from "./goblin-diplomacy";
import { ernestTheChicken } from "./ernest-the-chicken";
import { demonSlayer } from "./demon-slayer";
import { princeAliRescue } from "./prince-ali-rescue";
import { piratesTreasure } from "./pirates-treasure";
import { vampyreSlayer } from "./vampyre-slayer";
import { blackKnightsFortress } from "./black-knights-fortress";
import { theKnightsSword } from "./the-knights-sword";
import { runeMysteries } from "./rune-mysteries";
import { dragonSlayerI } from "./dragon-slayer-i";
import { druidicRitual } from "./druidic-ritual";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "cooks-assistant": cooksAssistant,
  "sheep-shearer": sheepShearer,
  "the-restless-ghost": theRestlessGhost,
  "romeo-and-juliet": romeoAndJuliet,
  "imp-catcher": impCatcher,
  "witchs-potion": witchsPotion,
  "dorics-quest": doricsQuest,
  "goblin-diplomacy": goblinDiplomacy,
  "ernest-the-chicken": ernestTheChicken,
  "demon-slayer": demonSlayer,
  "prince-ali-rescue": princeAliRescue,
  "pirates-treasure": piratesTreasure,
  "vampyre-slayer": vampyreSlayer,
  "black-knights-fortress": blackKnightsFortress,
  "the-knights-sword": theKnightsSword,
  "rune-mysteries": runeMysteries,
  "dragon-slayer-i": dragonSlayerI,
  "druidic-ritual": druidicRitual,
};

export function getWalkthrough(slug: string): QuestWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}
