import type { QuestWalkthrough } from "../types";

export const xMarksTheSpot: QuestWalkthrough = {
  startPoint: "Talk to Veos in The Sheared Ram in Lumbridge.",
  itemsRequired: ["Spade (regular spade only — Eastfloor spade doesn't work)"],
  recommended: [
    "Energy or stamina potions (members)",
    "Amulet of glory for fast travel to Draynor (members)",
  ],
  sections: [
    {
      title: "Treasure hunt",
      steps: [
        { text: "Talk to Veos and accept the quest." },
        {
          text: "Dig north-west of Bob's Brilliant Axes shop window, one tile west of the wall plant.",
        },
        {
          text: "Dig behind Lumbridge Castle, outside the kitchen door, south-west of the large crate.",
        },
        { text: "Travel to Draynor Village." },
        { text: "Dig north-west of the jail by the wheat farm, 4 tiles north of the bush." },
        { text: "Dig in the pig pen near Martin the Master Gardener." },
        { text: "Use the ancient casket on Veos at Port Sarim docks, south of the Rusty Anchor Inn." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "200 coins",
    "Antique lamp (300 XP in chosen skill)",
    "Access to scroll boxes",
    "Beginner scroll box",
    "+1 cap on all clue scroll tiers",
  ],
};
