import type { QuestWalkthrough } from "../types";

export const observatoryQuest: QuestWalkthrough = {
  startPoint: "Talk to the Observatory professor in the Observatory Reception Room north of Castle Wars.",
  itemsRequired: ["3 normal planks", "Bronze bar", "Molten glass"],
  recommended: [
    "Combat 20+",
    "Antipoison",
    "Some food + armour",
    "Stamina/energy potions",
    "Ring of dueling / fairy ring BKP",
  ],
  enemies: ["Goblin guard (level 42) — optional, can be safespotted"],
  sections: [
    {
      title: "Fix the observatory",
      steps: [
        { text: "Talk to the Observatory professor about the quest." },
        { text: "Deliver 3 planks, a bronze bar, and molten glass in separate conversations." },
        { text: "Talk to the assistant." },
        { text: "Go upstairs and descend into the dungeon." },
        { text: "Search chests to find the goblin kitchen key." },
        { text: "Travel north then west to the kitchen gate." },
        { text: "Prod the sleeping guard; defeat or trap them." },
        { text: "Inspect the goblin stove for the lens mould." },
        { text: "Return to the professor with the mould." },
        { text: "Use molten glass on the lens mould." },
        { text: "Give the lens and mould to the professor." },
        { text: "Return to the dungeon and climb the south stairs (don't click during cutscene)." },
      ],
    },
    {
      title: "View the constellation",
      steps: [
        { text: "Talk to the professor upstairs and view the telescope." },
        { text: "Identify your constellation." },
        { text: "Talk to the professor with your answer." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,250 Crafting experience",
    "Uncut sapphire",
    "Constellation-specific reward (varies by sign observed)",
    "Access to the Spirit of Scorpius (unholy symbol moulds)",
    "Grappling shortcut access outside the Observatory",
    "5 Kudos at the Varrock Museum",
  ],
};
