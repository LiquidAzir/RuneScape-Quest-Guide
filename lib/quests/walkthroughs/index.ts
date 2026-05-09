import type { QuestWalkthrough } from "../types";
import { aKingdomDivided } from "./a-kingdom-divided";
import { aNightAtTheTheatre } from "./a-night-at-the-theatre";
import { aTasteOfHope } from "./a-taste-of-hope";
import { animalMagnetism } from "./animal-magnetism";
import { anotherSliceOfHAM } from "./another-slice-of-h-a-m";
import { beneathCursedSands } from "./beneath-cursed-sands";
import { bigChompyBirdHunting } from "./big-chompy-bird-hunting";
import { aPorcineOfInterest } from "./a-porcine-of-interest";
import { aTailOfTwoCats } from "./a-tail-of-two-cats";
import { atFirstLight } from "./at-first-light";
import { biohazard } from "./biohazard";
import { childrenOfTheSun } from "./children-of-the-sun";
import { clientOfKourend } from "./client-of-kourend";
import { blackKnightsFortress } from "./black-knights-fortress";
import { boneVoyage } from "./bone-voyage";
import { cabinFever } from "./cabin-fever";
import { coldWar } from "./cold-war";
import { contact } from "./contact";
import { cooksAssistant } from "./cooks-assistant";
import { creatureOfFenkenstrain } from "./creature-of-fenkenstrain";
import { darknessOfHallowvale } from "./darkness-of-hallowvale";
import { deathPlateau } from "./death-plateau";
import { deathToTheDorgeshuun } from "./death-to-the-dorgeshuun";
import { defenderOfVarrock } from "./defender-of-varrock";
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
import { elementalWorkshopI } from "./elemental-workshop-i";
import { elementalWorkshopII } from "./elemental-workshop-ii";
import { enakhrasLament } from "./enakhras-lament";
import { ernestTheChicken } from "./ernest-the-chicken";
import { fairytaleIGrowingPains } from "./fairytale-i-growing-pains";
import { fairytaleIICureAQueen } from "./fairytale-ii-cure-a-queen";
import { familyCrest } from "./family-crest";
import { fishingContest } from "./fishing-contest";
import { forgettableTale } from "./forgettable-tale";
import { gardenOfTranquillity } from "./garden-of-tranquillity";
import { gettingAhead } from "./getting-ahead";
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
import { makingFriendsWithMyArm } from "./making-friends-with-my-arm";
import { merlinsCrystal } from "./merlins-crystal";
import { misthalinMystery } from "./misthalin-mystery";
import { monkeyMadnessI } from "./monkey-madness-i";
import { monkeyMadnessII } from "./monkey-madness-ii";
import { mountainDaughter } from "./mountain-daughter";
import { mourningsEndPartI } from "./mournings-end-part-i";
import { mourningsEndPartII } from "./mournings-end-part-ii";
import { murderMystery } from "./murder-mystery";
import { perilousMoons } from "./perilous-moons";
import { natureSpirit } from "./nature-spirit";
import { olafsQuest } from "./olafs-quest";
import { oneSmallFavour } from "./one-small-favour";
import { piratesTreasure } from "./pirates-treasure";
import { plagueCity } from "./plague-city";
import { princeAliRescue } from "./prince-ali-rescue";
import { priestInPeril } from "./priest-in-peril";
import { ratcatchers } from "./ratcatchers";
import { regicide } from "./regicide";
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
import { rumDeal } from "./rum-deal";
import { runeMysteries } from "./rune-mysteries";
import { secretsOfTheNorth } from "./secrets-of-the-north";
import { seaSlug } from "./sea-slug";
import { sheepShearer } from "./sheep-shearer";
import { shiloVillage } from "./shilo-village";
import { sinsOfTheFather } from "./sins-of-the-father";
import { sleepingGiants } from "./sleeping-giants";
import { songOfTheElves } from "./song-of-the-elves";
import { spiritsOfTheElid } from "./spirits-of-the-elid";
import { swanSong } from "./swan-song";
import { taiBwoWannaiTrio } from "./tai-bwo-wannai-trio";
import { taleOfTheRighteous } from "./tale-of-the-righteous";
import { tearsOfGuthix } from "./tears-of-guthix";
import { templeOfTheEye } from "./temple-of-the-eye";
import { theCurseOfArrav } from "./the-curse-of-arrav";
import { theDepthsOfDespair } from "./the-depths-of-despair";
import { theDigSite } from "./the-dig-site";
import { theEyesOfGlouphrie } from "./the-eyes-of-glouphrie";
import { theFeud } from "./the-feud";
import { theFinalDawn } from "./the-final-dawn";
import { theGreatBrainRobbery } from "./the-great-brain-robbery";
import { theFremennikExiles } from "./the-fremennik-exiles";
import { theFremennikIsles } from "./the-fremennik-isles";
import { theFremennikTrials } from "./the-fremennik-trials";
import { theGardenOfDeath } from "./the-garden-of-death";
import { theGiantDwarf } from "./the-giant-dwarf";
import { theGrandTree } from "./the-grand-tree";
import { theHandInTheSand } from "./the-hand-in-the-sand";
import { theHauntedMine } from "./the-haunted-mine";
import { theKnightsSword } from "./the-knights-sword";
import { theLostTribe } from "./the-lost-tribe";
import { theQueenOfThieves } from "./the-queen-of-thieves";
import { theSlugMenace } from "./the-slug-menace";
import { thePathOfGlouphrie } from "./the-path-of-glouphrie";
import { theRestlessGhost } from "./the-restless-ghost";
import { theTouristTrap } from "./the-tourist-trap";
import { throneOfMiscellania } from "./throne-of-miscellania";
import { towerOfLife } from "./tower-of-life";
import { treeGnomeVillage } from "./tree-gnome-village";
import { trollRomance } from "./troll-romance";
import { trollStronghold } from "./troll-stronghold";
import { twilightsPromise } from "./twilights-promise";
import { undergroundPass } from "./underground-pass";
import { vampyreSlayer } from "./vampyre-slayer";
import { watchtower } from "./watchtower";
import { witchsHouse } from "./witchs-house";
import { witchsPotion } from "./witchs-potion";
import { xMarksTheSpot } from "./x-marks-the-spot";
import { zogreFleshEaters } from "./zogre-flesh-eaters";

export const WALKTHROUGHS: Record<string, QuestWalkthrough> = {
  "a-kingdom-divided": aKingdomDivided,
  "a-night-at-the-theatre": aNightAtTheTheatre,
  "a-taste-of-hope": aTasteOfHope,
  "animal-magnetism": animalMagnetism,
  "another-slice-of-h-a-m": anotherSliceOfHAM,
  "beneath-cursed-sands": beneathCursedSands,
  "big-chompy-bird-hunting": bigChompyBirdHunting,
  "a-porcine-of-interest": aPorcineOfInterest,
  "a-tail-of-two-cats": aTailOfTwoCats,
  "at-first-light": atFirstLight,
  "biohazard": biohazard,
  "children-of-the-sun": childrenOfTheSun,
  "client-of-kourend": clientOfKourend,
  "black-knights-fortress": blackKnightsFortress,
  "bone-voyage": boneVoyage,
  "cabin-fever": cabinFever,
  "cold-war": coldWar,
  "contact": contact,
  "cooks-assistant": cooksAssistant,
  "creature-of-fenkenstrain": creatureOfFenkenstrain,
  "darkness-of-hallowvale": darknessOfHallowvale,
  "death-plateau": deathPlateau,
  "death-to-the-dorgeshuun": deathToTheDorgeshuun,
  "defender-of-varrock": defenderOfVarrock,
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
  "elemental-workshop-i": elementalWorkshopI,
  "elemental-workshop-ii": elementalWorkshopII,
  "enakhras-lament": enakhrasLament,
  "ernest-the-chicken": ernestTheChicken,
  "fairytale-i-growing-pains": fairytaleIGrowingPains,
  "fairytale-ii-cure-a-queen": fairytaleIICureAQueen,
  "family-crest": familyCrest,
  "fishing-contest": fishingContest,
  "forgettable-tale": forgettableTale,
  "garden-of-tranquillity": gardenOfTranquillity,
  "getting-ahead": gettingAhead,
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
  "making-friends-with-my-arm": makingFriendsWithMyArm,
  "merlins-crystal": merlinsCrystal,
  "misthalin-mystery": misthalinMystery,
  "monkey-madness-i": monkeyMadnessI,
  "monkey-madness-ii": monkeyMadnessII,
  "mountain-daughter": mountainDaughter,
  "mournings-end-part-i": mourningsEndPartI,
  "mournings-end-part-ii": mourningsEndPartII,
  "murder-mystery": murderMystery,
  "nature-spirit": natureSpirit,
  "olafs-quest": olafsQuest,
  "one-small-favour": oneSmallFavour,
  "perilous-moons": perilousMoons,
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
  "regicide": regicide,
  "romeo-and-juliet": romeoAndJuliet,
  "rum-deal": rumDeal,
  "roving-elves": rovingElves,
  "royal-trouble": royalTrouble,
  "rune-mysteries": runeMysteries,
  "sea-slug": seaSlug,
  "secrets-of-the-north": secretsOfTheNorth,
  "sheep-shearer": sheepShearer,
  "shilo-village": shiloVillage,
  "sins-of-the-father": sinsOfTheFather,
  "sleeping-giants": sleepingGiants,
  "song-of-the-elves": songOfTheElves,
  "spirits-of-the-elid": spiritsOfTheElid,
  "swan-song": swanSong,
  "tai-bwo-wannai-trio": taiBwoWannaiTrio,
  "tale-of-the-righteous": taleOfTheRighteous,
  "tears-of-guthix": tearsOfGuthix,
  "temple-of-the-eye": templeOfTheEye,
  "the-curse-of-arrav": theCurseOfArrav,
  "the-depths-of-despair": theDepthsOfDespair,
  "the-dig-site": theDigSite,
  "the-eyes-of-glouphrie": theEyesOfGlouphrie,
  "the-feud": theFeud,
  "the-final-dawn": theFinalDawn,
  "the-fremennik-exiles": theFremennikExiles,
  "the-fremennik-isles": theFremennikIsles,
  "the-fremennik-trials": theFremennikTrials,
  "the-garden-of-death": theGardenOfDeath,
  "the-giant-dwarf": theGiantDwarf,
  "the-grand-tree": theGrandTree,
  "the-great-brain-robbery": theGreatBrainRobbery,
  "the-hand-in-the-sand": theHandInTheSand,
  "the-haunted-mine": theHauntedMine,
  "the-knights-sword": theKnightsSword,
  "the-lost-tribe": theLostTribe,
  "the-path-of-glouphrie": thePathOfGlouphrie,
  "the-queen-of-thieves": theQueenOfThieves,
  "the-slug-menace": theSlugMenace,
  "the-restless-ghost": theRestlessGhost,
  "the-tourist-trap": theTouristTrap,
  "throne-of-miscellania": throneOfMiscellania,
  "tower-of-life": towerOfLife,
  "tree-gnome-village": treeGnomeVillage,
  "troll-romance": trollRomance,
  "troll-stronghold": trollStronghold,
  "twilights-promise": twilightsPromise,
  "underground-pass": undergroundPass,
  "vampyre-slayer": vampyreSlayer,
  "watchtower": watchtower,
  "witchs-house": witchsHouse,
  "witchs-potion": witchsPotion,
  "x-marks-the-spot": xMarksTheSpot,
  "zogre-flesh-eaters": zogreFleshEaters,
};

export function getWalkthrough(slug: string): QuestWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}
