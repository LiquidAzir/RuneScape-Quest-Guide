import type { QuestWalkthrough } from "../types";

export const theGreatBrainRobbery: QuestWalkthrough = {
  startPoint: "Talk to Brother Tranquility on Mos Le'Harmless near the dock.",
  itemsRequired: [
    "Fishbowl helmet + diving apparatus (or Medallion of the deep)",
    "10 wooden cats",
    "Holy symbol",
    "Ring of Charos",
    "4 planks (14 if crafting wooden cats)",
    "10 fur (if crafting wooden cats)",
    "Hammer (NOT Imcando)",
    "~100 nails",
    "8 normal planks",
  ],
  recommended: [
    "Combat 60+",
    "Ectophial / Port Phasmatys teleport",
    "Glory amulet or Fenkenstrain teleport runes",
    "Ranged or magic for safespotting Barrelchest",
    "Sharks/anglers + prayer potions",
  ],
  enemies: [
    "Barrelchest (level 190) — drains prayer; safespottable",
    "4 Sorebones (level 57)",
  ],
  sections: [
    {
      title: "Scout Harmony Island",
      steps: [
        { text: "Talk to Brother Tranquility on Mos Le'Harmless near the dock and complete the dialogue." },
        { text: "Head north, pull the statue, climb down." },
        { text: "Equip diving gear and descend underwater." },
        { text: "Repair the stairs and climb up." },
        { text: "Climb a ladder and peer through the peephole." },
        { text: "Return to Brother Tranquility for transport back." },
      ],
    },
    {
      title: "The prayer book",
      steps: [
        { text: "Go to Edgeville Monastery; search the SW bookcase for the prayer book." },
        { text: "Read the book." },
        { text: "Equip a holy symbol and return to Mos Le'Harmless." },
        { text: "Talk to Brother Tranquility on Mos Le'Harmless near the dock to return to Harmony Island." },
        { text: "Right-click the book and recite the prayer in the windmill." },
        { text: "Talk to Brother Tranquility on Mos Le'Harmless near the dock." },
      ],
    },
    {
      title: "Smuggle Fenkenstrain",
      steps: [
        { text: "Talk to Dr Fenkenstrain in his castle jail (top floor)." },
        { text: "Equip the Ring of Charos." },
        { text: "Talk to Rufus in the Canifis food store for a wolf whistle and crate part." },
        { text: "Craft 10 wooden cats on the clockmaker's bench." },
        { text: "Build a crate with false bottom next to the doctor." },
        { text: "Blow the wolf whistle; receive shipping order from Rufus." },
        { text: "Place the shipping order on the crate." },
      ],
    },
    {
      title: "Make medical transplants",
      steps: [
        { text: "Return to Harmony Island and enter the windmill basement." },
        { text: "Talk to Dr Fenkenstrain in his castle jail (top floor)." },
        { text: "Go north to the shipwreck (in diving gear)." },
        { text: "Search the locker for fuse; climb the ladder for tinderbox + keg." },
        { text: "Go south to the monastery; use keg + fuse on the door; light the fuse." },
        { text: "Kill 4 Sorebones for medical tools." },
        { text: "Return and talk to Dr Fenkenstrain and Brother Tranquility." },
      ],
    },
    {
      title: "Defeat Barrelchest",
      steps: [
        { text: "Confront Mi-Gor at the monastery to fight Barrelchest." },
        { text: "Wear underwater breathing gear during the fight." },
        { text: "Re-enable prayer after each hit to avoid drain damage (or safespot from the entrance)." },
        { text: "Talk to Brother Tranquility on Mos Le'Harmless near the dock to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "6,000 Prayer experience",
    "3,000 Crafting experience",
    "2,000 Construction experience",
    "Blessed lamp (5,000 XP in any skill 30+)",
    "Barrelchest anchor (massive 2H weapon)",
    "Prayer book + Harmony Island Teleport",
  ],
};
