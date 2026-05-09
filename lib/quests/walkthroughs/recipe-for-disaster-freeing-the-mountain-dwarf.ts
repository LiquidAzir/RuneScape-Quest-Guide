import type { QuestWalkthrough } from "../types";

export const rfdMountainDwarf: QuestWalkthrough = {
  startPoint: "Inspect the frozen Mountain Dwarf in the Lumbridge Castle dining room.",
  itemsRequired: [
    "Bucket of milk",
    "Pot of flour",
    "Egg",
    "Bowl of water",
    "4 Asgarnian ales",
    "306 coins (200 for Emily, 100 for ales conversion)",
    "Ice gloves (or alternative — see below)",
  ],
  recommended: [
    "Falador, Lumbridge, Taverley teleports",
    "Telekinetic Grab runes (alternative to ice gloves)",
  ],
  enemies: ["Icefiend (level 13) — only if you don't have ice gloves"],
  sections: [
    {
      title: "Start and learn the recipe",
      steps: [
        { text: "Inspect the dwarf in the Lumbridge Castle dining room to start." },
        { text: "Travel to the Rising Sun Inn in Falador." },
        { text: "Pay Emily or Kaylee 200 coins to learn the Asgoldian ale recipe." },
        { text: "Use coins on 4 Asgarnian ales to convert them into Asgoldian ale." },
      ],
    },
    {
      title: "Make the rock cake",
      steps: [
        { text: "Travel to the White Wolf Mountain underground bar." },
        { text: "Give Asgoldian ales to Rohak until he agrees to make a Dwarven rock cake." },
        { text: "Wait — the cake comes out hot." },
        {
          text: "Pick the cake up using ice gloves to cool it. (No ice gloves? Defeat an Icefiend on Ice Mountain or use Telekinetic Grab.)",
        },
      ],
    },
    {
      title: "Free the Mountain Dwarf",
      steps: [
        { text: "Return to the dwarf in Lumbridge Castle and give him the cool dwarven rock cake." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Cooking experience",
    "1,000 Slayer experience",
    "Mountain Dwarf freed; Culinaromancer's Chest expanded",
    "Permanent ability to buy Dwarven rock cakes from Rohak",
  ],
};
