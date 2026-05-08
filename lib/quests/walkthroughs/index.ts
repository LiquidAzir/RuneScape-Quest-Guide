import type { QuestWalkthrough } from "../types";
import { aTasteOfHope } from "./a-taste-of-hope";
import { animalMagnetism } from "./animal-magnetism";
import { bigChompyBirdHunting } from "./big-chompy-bird-hunting";
import { biohazard } from "./biohazard";
import { blackKnightsFortress } from "./black-knights-fortress";
import { coldWar } from "./cold-war";
import { contact } from "./contact";
import { cooksAssistant } from "./cooks-assistant";
import { creatureOfFenkenstrain } from "./creature-of-fenkenstrain";
import { darknessOfHallowvale } from "./darkness-of-hallowvale";
import { deathPlateau } from "./death-plateau";
import { demonSlayer } from "./demon-slayer";
import { desertTreasureI } from "./desert-treasure-i";
import { doricsQuest } from "./dorics-quest";
import { dragonSlayerI } from "./dragon-slayer-i";
import { druidicRitual } from "./druidic-ritual";
import { dwarfCannon } from "./dwarf-cannon";
import { eaglesPeak } from "./eagles-peak";
import { enakhrasLament } from "./enakhras-lament";
import { ernestTheChicken } from "./ernest-the-chicken";
import { fishingContest } from "./fishing-contest";
import { ghostsAhoy } from "./ghosts-ahoy";
import { goblinDiplomacy } from "./goblin-diplomacy";
import { heroesQuest } from "./heroes-quest";
import { icthlarinsLittleHelper } from "./icthlarins-little-helper";
import { impCatcher } from "./imp-catcher";
import { inAidOfTheMyreque } from "./in-aid-of-the-myreque";
import { inSearchOfTheMyreque } from "./in-search-of-the-myreque";
import { lostCity } from "./lost-city";
import { monkeyMadnessI } from "./monkey-madness-i";
import { mountainDaughter } from "./mountain-daughter";
import { natureSpirit } from "./nature-spirit";
import { olafsQuest } from "./olafs-quest";
import { piratesTreasure } from "./pirates-treasure";
import { plagueCity } from "./plague-city";
import { princeAliRescue } from "./prince-ali-rescue";
import { priestInPeril } from "./priest-in-peril";
import { ratcatchers } from "./ratcatchers";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { rovingElves } from "./roving-elves";
import { royalTrouble } from "./royal-trouble";
import { runeMysteries } from "./rune-mysteries";
import { sheepShearer } from "./sheep-shearer";
import { sinsOfTheFather } from "./sins-of-the-father";
import { taiBwoWannaiTrio } from "./tai-bwo-wannai-trio";
import { theEyesOfGlouphrie } from "./the-eyes-of-glouphrie";
import { theFeud } from "./the-feud";
import { theFremennikIsles } from "./the-fremennik-isles";
import { theFremennikTrials } from "./the-fremennik-trials";
import { theGrandTree } from "./the-grand-tree";
import { theHandInTheSand } from "./the-hand-in-the-sand";
import { theHauntedMine } from "./the-haunted-mine";
import { theKnightsSword } from "./the-knights-sword";
import { thePathOfGlouphrie } from "./the-path-of-glouphrie";
import { theRestlessGhost } from "./the-restless-ghost";
import { theTouristTrap } from "./the-tourist-trap";
import { treeGnomeVillage } from "./tree-gnome-village";
import { spiritsOfTheElid } from "./spirits-of-the-elid";
import { trollRomance } from "./troll-romance";
import { trollStronghold } from "./troll-stronghold";
import { vampyreSlayer } from "./vampyre-slayer";
import { witchsHouse } from "./witchs-house";
import { witchsPotion } from "./witchs-potion";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "a-taste-of-hope": aTasteOfHope,
  "animal-magnetism": animalMagnetism,
  "big-chompy-bird-hunting": bigChompyBirdHunting,
  "biohazard": biohazard,
  "black-knights-fortress": blackKnightsFortress,
  "cold-war": coldWar,
  "contact": contact,
  "cooks-assistant": cooksAssistant,
  "creature-of-fenkenstrain": creatureOfFenkenstrain,
  "darkness-of-hallowvale": darknessOfHallowvale,
  "death-plateau": deathPlateau,
  "demon-slayer": demonSlayer,
  "desert-treasure-i": desertTreasureI,
  "dorics-quest": doricsQuest,
  "dragon-slayer-i": dragonSlayerI,
  "druidic-ritual": druidicRitual,
  "dwarf-cannon": dwarfCannon,
  "eagles-peak": eaglesPeak,
  "enakhras-lament": enakhrasLament,
  "ernest-the-chicken": ernestTheChicken,
  "fishing-contest": fishingContest,
  "ghosts-ahoy": ghostsAhoy,
  "goblin-diplomacy": goblinDiplomacy,
  "heroes-quest": heroesQuest,
  "icthlarins-little-helper": icthlarinsLittleHelper,
  "imp-catcher": impCatcher,
  "in-aid-of-the-myreque": inAidOfTheMyreque,
  "in-search-of-the-myreque": inSearchOfTheMyreque,
  "lost-city": lostCity,
  "monkey-madness-i": monkeyMadnessI,
  "mountain-daughter": mountainDaughter,
  "nature-spirit": natureSpirit,
  "olafs-quest": olafsQuest,
  "pirates-treasure": piratesTreasure,
  "plague-city": plagueCity,
  "prince-ali-rescue": princeAliRescue,
  "priest-in-peril": priestInPeril,
  "ratcatchers": ratcatchers,
  "romeo-and-juliet": romeoAndJuliet,
  "roving-elves": rovingElves,
  "royal-trouble": royalTrouble,
  "rune-mysteries": runeMysteries,
  "sheep-shearer": sheepShearer,
  "sins-of-the-father": sinsOfTheFather,
  "spirits-of-the-elid": spiritsOfTheElid,
  "tai-bwo-wannai-trio": taiBwoWannaiTrio,
  "the-eyes-of-glouphrie": theEyesOfGlouphrie,
  "the-feud": theFeud,
  "the-fremennik-isles": theFremennikIsles,
  "the-fremennik-trials": theFremennikTrials,
  "the-grand-tree": theGrandTree,
  "the-hand-in-the-sand": theHandInTheSand,
  "the-haunted-mine": theHauntedMine,
  "the-knights-sword": theKnightsSword,
  "the-path-of-glouphrie": thePathOfGlouphrie,
  "the-restless-ghost": theRestlessGhost,
  "the-tourist-trap": theTouristTrap,
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
