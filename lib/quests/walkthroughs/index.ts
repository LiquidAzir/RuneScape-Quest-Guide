import type { QuestWalkthrough } from "../types";
import { animalMagnetism } from "./animal-magnetism";
import { bigChompyBirdHunting } from "./big-chompy-bird-hunting";
import { biohazard } from "./biohazard";
import { blackKnightsFortress } from "./black-knights-fortress";
import { coldWar } from "./cold-war";
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
import { olafsQuest } from "./olafs-quest";
import { piratesTreasure } from "./pirates-treasure";
import { plagueCity } from "./plague-city";
import { princeAliRescue } from "./prince-ali-rescue";
import { priestInPeril } from "./priest-in-peril";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { rovingElves } from "./roving-elves";
import { royalTrouble } from "./royal-trouble";
import { runeMysteries } from "./rune-mysteries";
import { sheepShearer } from "./sheep-shearer";
import { taiBwoWannaiTrio } from "./tai-bwo-wannai-trio";
import { theEyesOfGlouphrie } from "./the-eyes-of-glouphrie";
import { theFremennikIsles } from "./the-fremennik-isles";
import { theFremennikTrials } from "./the-fremennik-trials";
import { theGrandTree } from "./the-grand-tree";
import { theKnightsSword } from "./the-knights-sword";
import { thePathOfGlouphrie } from "./the-path-of-glouphrie";
import { theRestlessGhost } from "./the-restless-ghost";
import { treeGnomeVillage } from "./tree-gnome-village";
import { trollRomance } from "./troll-romance";
import { trollStronghold } from "./troll-stronghold";
import { vampyreSlayer } from "./vampyre-slayer";
import { witchsHouse } from "./witchs-house";
import { witchsPotion } from "./witchs-potion";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "animal-magnetism": animalMagnetism,
  "big-chompy-bird-hunting": bigChompyBirdHunting,
  "biohazard": biohazard,
  "black-knights-fortress": blackKnightsFortress,
  "cold-war": coldWar,
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
  "olafs-quest": olafsQuest,
  "pirates-treasure": piratesTreasure,
  "plague-city": plagueCity,
  "prince-ali-rescue": princeAliRescue,
  "priest-in-peril": priestInPeril,
  "romeo-and-juliet": romeoAndJuliet,
  "roving-elves": rovingElves,
  "royal-trouble": royalTrouble,
  "rune-mysteries": runeMysteries,
  "sheep-shearer": sheepShearer,
  "tai-bwo-wannai-trio": taiBwoWannaiTrio,
  "the-eyes-of-glouphrie": theEyesOfGlouphrie,
  "the-fremennik-isles": theFremennikIsles,
  "the-fremennik-trials": theFremennikTrials,
  "the-grand-tree": theGrandTree,
  "the-knights-sword": theKnightsSword,
  "the-path-of-glouphrie": thePathOfGlouphrie,
  "the-restless-ghost": theRestlessGhost,
  "tree-gnome-village": treeGnomeVillage,
  "troll-romance": trollRomance,
  "troll-stronghold": trollStronghold,
  "vampyre-slayer": vampyreSlayer,
  "witchs-house": witchsHouse,
  "witchs-potion": witchsPotion,
};

export function getWalkthrough(slug: string): QuestWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}
