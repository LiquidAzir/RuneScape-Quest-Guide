import type { QuestWalkthrough } from "../types";
import { aNightAtTheTheatre } from "./a-night-at-the-theatre";
import { aTasteOfHope } from "./a-taste-of-hope";
import { animalMagnetism } from "./animal-magnetism";
import { beneathCursedSands } from "./beneath-cursed-sands";
import { bigChompyBirdHunting } from "./big-chompy-bird-hunting";
import { biohazard } from "./biohazard";
import { blackKnightsFortress } from "./black-knights-fortress";
import { boneVoyage } from "./bone-voyage";
import { coldWar } from "./cold-war";
import { contact } from "./contact";
import { cooksAssistant } from "./cooks-assistant";
import { creatureOfFenkenstrain } from "./creature-of-fenkenstrain";
import { darknessOfHallowvale } from "./darkness-of-hallowvale";
import { deathPlateau } from "./death-plateau";
import { demonSlayer } from "./demon-slayer";
import { desertTreasureI } from "./desert-treasure-i";
import { desertTreasureII } from "./desert-treasure-ii-the-fallen-empire";
import { doricsQuest } from "./dorics-quest";
import { dragonSlayerI } from "./dragon-slayer-i";
import { dragonSlayerII } from "./dragon-slayer-ii";
import { dreamMentor } from "./dream-mentor";
import { druidicRitual } from "./druidic-ritual";
import { dwarfCannon } from "./dwarf-cannon";
import { eaglesPeak } from "./eagles-peak";
import { enakhrasLament } from "./enakhras-lament";
import { ernestTheChicken } from "./ernest-the-chicken";
import { familyCrest } from "./family-crest";
import { fishingContest } from "./fishing-contest";
import { ghostsAhoy } from "./ghosts-ahoy";
import { goblinDiplomacy } from "./goblin-diplomacy";
import { heroesQuest } from "./heroes-quest";
import { holyGrail } from "./holy-grail";
import { icthlarinsLittleHelper } from "./icthlarins-little-helper";
import { impCatcher } from "./imp-catcher";
import { inAidOfTheMyreque } from "./in-aid-of-the-myreque";
import { inSearchOfTheMyreque } from "./in-search-of-the-myreque";
import { kingsRansom } from "./kings-ransom";
import { lostCity } from "./lost-city";
import { lunarDiplomacy } from "./lunar-diplomacy";
import { merlinsCrystal } from "./merlins-crystal";
import { monkeyMadnessII } from "./monkey-madness-ii";
import { murderMystery } from "./murder-mystery";
import { monkeyMadnessI } from "./monkey-madness-i";
import { mountainDaughter } from "./mountain-daughter";
import { natureSpirit } from "./nature-spirit";
import { olafsQuest } from "./olafs-quest";
import { oneSmallFavour } from "./one-small-favour";
import { piratesTreasure } from "./pirates-treasure";
import { plagueCity } from "./plague-city";
import { princeAliRescue } from "./prince-ali-rescue";
import { priestInPeril } from "./priest-in-peril";
import { ratcatchers } from "./ratcatchers";
import { recipeForDisaster } from "./recipe-for-disaster";
import { rfdAnotherCooksQuest } from "./recipe-for-disaster-another-cooks-quest";
import { rfdCulinaromancer } from "./recipe-for-disaster-defeating-the-culinaromancer";
import { rfdEvilDave } from "./recipe-for-disaster-freeing-evil-dave";
import { rfdKingAwowogei } from "./recipe-for-disaster-freeing-king-awowogei";
import { rfdPiratePete } from "./recipe-for-disaster-freeing-pirate-pete";
import { rfdSirAmikVarze } from "./recipe-for-disaster-freeing-sir-amik-varze";
import { rfdSkrachUglogwee } from "./recipe-for-disaster-freeing-skrach-uglogwee";
import { rfdGoblinGenerals } from "./recipe-for-disaster-freeing-the-goblin-generals";
import { rfdLumbridgeGuide } from "./recipe-for-disaster-freeing-the-lumbridge-guide";
import { rfdMountainDwarf } from "./recipe-for-disaster-freeing-the-mountain-dwarf";
import { recruitmentDrive } from "./recruitment-drive";
import { romeoAndJuliet } from "./romeo-and-juliet";
import { rovingElves } from "./roving-elves";
import { royalTrouble } from "./royal-trouble";
import { runeMysteries } from "./rune-mysteries";
import { sheepShearer } from "./sheep-shearer";
import { sinsOfTheFather } from "./sins-of-the-father";
import { songOfTheElves } from "./song-of-the-elves";
import { spiritsOfTheElid } from "./spirits-of-the-elid";
import { swanSong } from "./swan-song";
import { taiBwoWannaiTrio } from "./tai-bwo-wannai-trio";
import { theDigSite } from "./the-dig-site";
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
import { throneOfMiscellania } from "./throne-of-miscellania";
import { treeGnomeVillage } from "./tree-gnome-village";
import { trollRomance } from "./troll-romance";
import { trollStronghold } from "./troll-stronghold";
import { vampyreSlayer } from "./vampyre-slayer";
import { watchtower } from "./watchtower";
import { witchsHouse } from "./witchs-house";
import { witchsPotion } from "./witchs-potion";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "a-night-at-the-theatre": aNightAtTheTheatre,
  "a-taste-of-hope": aTasteOfHope,
  "animal-magnetism": animalMagnetism,
  "beneath-cursed-sands": beneathCursedSands,
  "big-chompy-bird-hunting": bigChompyBirdHunting,
  "biohazard": biohazard,
  "black-knights-fortress": blackKnightsFortress,
  "bone-voyage": boneVoyage,
  "cold-war": coldWar,
  "contact": contact,
  "cooks-assistant": cooksAssistant,
  "creature-of-fenkenstrain": creatureOfFenkenstrain,
  "darkness-of-hallowvale": darknessOfHallowvale,
  "death-plateau": deathPlateau,
  "demon-slayer": demonSlayer,
  "desert-treasure-i": desertTreasureI,
  "desert-treasure-ii-the-fallen-empire": desertTreasureII,
  "dorics-quest": doricsQuest,
  "dragon-slayer-i": dragonSlayerI,
  "dragon-slayer-ii": dragonSlayerII,
  "dream-mentor": dreamMentor,
  "druidic-ritual": druidicRitual,
  "dwarf-cannon": dwarfCannon,
  "eagles-peak": eaglesPeak,
  "enakhras-lament": enakhrasLament,
  "ernest-the-chicken": ernestTheChicken,
  "family-crest": familyCrest,
  "fishing-contest": fishingContest,
  "ghosts-ahoy": ghostsAhoy,
  "goblin-diplomacy": goblinDiplomacy,
  "heroes-quest": heroesQuest,
  "holy-grail": holyGrail,
  "icthlarins-little-helper": icthlarinsLittleHelper,
  "imp-catcher": impCatcher,
  "in-aid-of-the-myreque": inAidOfTheMyreque,
  "in-search-of-the-myreque": inSearchOfTheMyreque,
  "kings-ransom": kingsRansom,
  "lost-city": lostCity,
  "lunar-diplomacy": lunarDiplomacy,
  "merlins-crystal": merlinsCrystal,
  "murder-mystery": murderMystery,
  "monkey-madness-i": monkeyMadnessI,
  "monkey-madness-ii": monkeyMadnessII,
  "mountain-daughter": mountainDaughter,
  "nature-spirit": natureSpirit,
  "olafs-quest": olafsQuest,
  "one-small-favour": oneSmallFavour,
  "pirates-treasure": piratesTreasure,
  "plague-city": plagueCity,
  "prince-ali-rescue": princeAliRescue,
  "priest-in-peril": priestInPeril,
  "ratcatchers": ratcatchers,
  "recipe-for-disaster": recipeForDisaster,
  "recipe-for-disaster-another-cooks-quest": rfdAnotherCooksQuest,
  "recipe-for-disaster-defeating-the-culinaromancer": rfdCulinaromancer,
  "recipe-for-disaster-freeing-evil-dave": rfdEvilDave,
  "recipe-for-disaster-freeing-king-awowogei": rfdKingAwowogei,
  "recipe-for-disaster-freeing-pirate-pete": rfdPiratePete,
  "recipe-for-disaster-freeing-sir-amik-varze": rfdSirAmikVarze,
  "recipe-for-disaster-freeing-skrach-uglogwee": rfdSkrachUglogwee,
  "recipe-for-disaster-freeing-the-goblin-generals": rfdGoblinGenerals,
  "recipe-for-disaster-freeing-the-lumbridge-guide": rfdLumbridgeGuide,
  "recipe-for-disaster-freeing-the-mountain-dwarf": rfdMountainDwarf,
  "recruitment-drive": recruitmentDrive,
  "romeo-and-juliet": romeoAndJuliet,
  "roving-elves": rovingElves,
  "royal-trouble": royalTrouble,
  "rune-mysteries": runeMysteries,
  "sheep-shearer": sheepShearer,
  "sins-of-the-father": sinsOfTheFather,
  "song-of-the-elves": songOfTheElves,
  "spirits-of-the-elid": spiritsOfTheElid,
  "swan-song": swanSong,
  "tai-bwo-wannai-trio": taiBwoWannaiTrio,
  "the-dig-site": theDigSite,
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
  "throne-of-miscellania": throneOfMiscellania,
  "tree-gnome-village": treeGnomeVillage,
  "troll-romance": trollRomance,
  "troll-stronghold": trollStronghold,
  "vampyre-slayer": vampyreSlayer,
  "watchtower": watchtower,
  "witchs-house": witchsHouse,
  "witchs-potion": witchsPotion,
};

export function getWalkthrough(slug: string): QuestWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}
