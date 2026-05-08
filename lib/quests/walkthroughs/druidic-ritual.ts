import type { QuestWalkthrough } from "../types";

export const druidicRitual: QuestWalkthrough = {
  startPoint: "Talk to Kaqemeex in the centre of the Taverley stone circle.",
  itemsRequired: ["None to start"],
  recommended: [
    "Combat level 10+ — the dark wizards in Varrock cellar are level 7 each, can be tough at low levels",
    "Some food",
    "Weapon and basic armour",
  ],
  enemies: ["4 Dark wizards (level 7 each) in Varrock palace cellar"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Taverley (west of Falador).",
          notes: ["Use the Falador teleport then walk west across the bridge."],
        },
        { text: "Find Kaqemeex at the stone circle in the centre of Taverley and talk to him." },
        { text: "He sends you to talk to Sanfew in the building to the south." },
        { text: "Talk to Sanfew. He explains the altar in Varrock palace cellar has been corrupted." },
      ],
    },
    {
      title: "Cleanse the altar in Varrock palace cellar",
      steps: [
        { text: "Travel to Varrock palace." },
        {
          text: "Enter the kitchen, then go down the trapdoor near the cooking range to enter the cellar.",
          notes: ["The trapdoor is in the south-eastern corner of the palace kitchen."],
        },
        { text: "Find the altar in the cellar." },
        {
          text: "Use raw beef AND raw bear meat on the altar (both are available in the cellar — pick them up nearby).",
          notes: ["The cellar contains spawns of raw beef and raw bear meat in barrels and on the floor."],
        },
        {
          text: "Four dark wizards (level 7) appear and attack. Defeat them one at a time.",
          notes: ["Use Protect from Magic if you have it; otherwise just out-DPS or eat through."],
        },
        { text: "Pick up the cleansed Enchanted bone from the altar." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Kaqemeex at the Taverley stone circle." },
        { text: "Talk to him to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "250 Herblore experience",
    "Ability to train Herblore",
  ],
};
