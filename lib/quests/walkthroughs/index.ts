import type { QuestWalkthrough } from "../types";
import { animalMagnetism } from "./animal-magnetism";
import { bigChompyBirdHunting } from "./big-chompy-bird-hunting";
import { biohazard } from "./biohazard";
import { blackKnightsFortress } from "./black-knights-fortress";
import { cooksAssistant } from "./cooks-assistant";
import { deathPlateau } from "./death-plateau";
import { demonSlayer } from "./demon-slayer";
import { doricsQuest } from "./dorics-quest";
import { dragonSlayerI } from "./dragon-slayer-i";
import { druidicRitual } from "./druidic-ritual";
import { dwarfCannon } from "./dwarf-cannon";
import { eaglesPeak } from "./eagles-peak";
import { ernestTheChicken } from "./ernest-the-chicken";
import { fishingContest } from "./fishing-contest";
import { goblinDiplomacy } from "./goblin-diplomacy";
import { heroesQuest } from "./heroes-quest";
import { impCatcher } from "./imp-catcher";
import { lostCity } from "./lost-city";
import { monkeyMadnessI } from "./monkey-madness-i";
import { mountainDaughter } from "./mountain-daughter";
import { natureSpirit } from "./nature-spirit";
import { piratesTreasure } from "./pirates-treasure";
import { plagueCity } from "./plague-city";
import { princeAliRescue } from "./prince-ali-rescue";
import { priestInPeril } from "./priest-in-peril";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { rovingElves } from "./roving-elves";
import { runeMysteries } from "./rune-mysteries";
import { sheepShearer } from "./sheep-shearer";
import { theEyesOfGlouphrie } from "./the-eyes-of-glouphrie";
import { theGrandTree } from "./the-grand-tree";
import { theKnightsSword } from "./the-knights-sword";
import { thePathOfGlouphrie } from "./the-path-of-glouphrie";
import { theRestlessGhost } from "./the-restless-ghost";
import { treeGnomeVillage } from "./tree-gnome-village";
import { vampyreSlayer } from "./vampyre-slayer";
import { witchsHouse } from "./witchs-house";
import { witchsPotion } from "./witchs-potion";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "animal-magnetism": animalMagnetism,
  "big-chompy-bird-hunting": bigChompyBirdHunting,
  "biohazard": biohazard,
  "black-knights-fortress": blackKnightsFortress,
  "cooks-assistant": cooksAssistant,
  "death-plateau": deathPlateau,
  "demon-slayer": demonSlayer,
  "dorics-quest": doricsQuest,
  "dragon-slayer-i": dragonSlayerI,
  "druidic-ritual": druidicRitual,
  "dwarf-cannon": dwarfCannon,
  "eagles-peak": eaglesPeak,
  "ernest-the-chicken": ernestTheChicken,
  "fishing-contest": fishingContest,
  "goblin-diplomacy": goblinDiplomacy,
  "heroes-quest": heroesQuest,
  "imp-catcher": impCatcher,
  "lost-city": lostCity,
  "monkey-madness-i": monkeyMadnessI,
  "mountain-daughter": mountainDaughter,
  "nature-spirit": natureSpirit,
  "pirates-treasure": piratesTreasure,
  "plague-city": plagueCity,
  "prince-ali-rescue": princeAliRescue,
  "priest-in-peril": priestInPeril,
  "romeo-and-juliet": romeoAndJuliet,
  "roving-elves": rovingElves,
  "rune-mysteries": runeMysteries,
  "sheep-shearer": sheepShearer,
  "the-eyes-of-glouphrie": theEyesOfGlouphrie,
  "the-grand-tree": theGrandTree,
  "the-knights-sword": theKnightsSword,
  "the-path-of-glouphrie": thePathOfGlouphrie,
  "the-restless-ghost": theRestlessGhost,
  "tree-gnome-village": treeGnomeVillage,
  "vampyre-slayer": vampyreSlayer,
  "witchs-house": witchsHouse,
  "witchs-potion": witchsPotion,
};

export function getWalkthrough(slug: string): QuestWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}
