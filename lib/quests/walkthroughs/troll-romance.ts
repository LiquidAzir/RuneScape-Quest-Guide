import type { QuestWalkthrough } from "../types";

export const trollRomance: QuestWalkthrough = {
  startPoint: "Talk to Ug in the south-west corner of the Troll Stronghold's middle level.",
  itemsRequired: [
    "Iron bar",
    "Maple or yew logs",
    "Rope",
    "Climbing boots",
    "Bucket of wax (or use bee hives near Catherby)",
    "Cake tin",
    "Swamp tar",
  ],
  recommended: [
    "Combat 50+",
    "Trollheim teleport",
    "Stamina/energy potions",
    "Some food and prayer potions for Arrg",
  ],
  enemies: ["Arrg (level 113) — boss"],
  sections: [
    {
      title: "Talk to the trolls",
      steps: [
        { text: "Talk to Ug in the south-west of the Troll Stronghold middle level." },
        { text: "Talk to Aga in the room to the north about her demands." },
        { text: "Return to Ug — he wants Trollweiss flowers, sledding gear, and Arrg's defeat." },
      ],
    },
    {
      title: "Make a sled",
      steps: [
        { text: "Travel to Tenzing west of the Warriors' Guild in Burthorpe." },
        { text: "Ask Tenzing about Trollweiss and what's needed for a sled." },
        { text: "Talk to Dunstan at the anvil in north-east Burthorpe." },
        { text: "Bring Dunstan an iron bar, maple/yew logs, rope and a cake tin to forge a sled." },
        { text: "Combine swamp tar with a bucket of wax to make wax." },
        { text: "Apply the wax to the sled." },
      ],
    },
    {
      title: "Pick the Trollweiss",
      steps: [
        { text: "Teleport to Trollheim and travel north-west toward the troll family cave." },
        { text: "Enter the cave to the north-west, bypassing the icy gate." },
        { text: "Run past ice trolls to the north-western exit." },
        { text: "Exit through the crevasse." },
        { text: "Equip your sled and click to slide down the slope." },
        { text: "After the cutscene, pick the Trollweiss flowers to the west." },
      ],
    },
    {
      title: "Defeat Arrg",
      steps: [
        { text: "Return to Ug with the Trollweiss." },
        { text: "Talk to Arrg and pick the combat option." },
        { text: "Defeat Arrg (level 113) in the arena." },
        { text: "Return to Ug to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Agility experience",
    "4,000 Strength experience",
    "1 uncut diamond, 2 uncut rubies, 4 uncut emeralds",
    "Reusable sled",
  ],
};
