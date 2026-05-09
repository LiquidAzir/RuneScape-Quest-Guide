import type { QuestWalkthrough } from "../types";

export const theGardenOfDeath: QuestWalkthrough = {
  startPoint: "Search the tent at the campsite east of the chasm at the southern end of the Kebos Lowlands.",
  itemsRequired: ["Secateurs (in-quest)"],
  recommended: [
    "Combat 20+",
    "Antipoison",
    "Book of the Dead or Kharedst's memoirs",
    "Fairy ring teleports",
    "Stamina/energy potions",
  ],
  sections: [
    {
      title: "Find the journal",
      steps: [
        { text: "Search the tent for Kasonde's journal and read it." },
        { text: "Collect secateurs from the camping equipment." },
        { text: "Climb down the hole nearby." },
      ],
    },
    {
      title: "First stone tablet",
      steps: [
        { text: "Search the stone table for the first tablet." },
        { text: "Read the tablet and the word translations scroll." },
        { text: "Input words: Island, Water, Time, Vessel, North." },
      ],
    },
    {
      title: "Lake Molch Island",
      steps: [
        { text: "Travel to Molch Island via Boaty." },
        { text: "Enter the hole and inspect the vines for a dirty note." },
        { text: "Cut the vines and squeeze through." },
        { text: "Search the stone table for the second tablet." },
        { text: "Input words: West, Poison, Body, Food, Earth." },
      ],
    },
    {
      title: "Xeric's Shrine",
      steps: [
        { text: "Travel to Xeric's Shrine." },
        { text: "Enter the hole and search the stone table for the third tablet." },
        { text: "Input words: Make, Yes, No, Move, Arrive, East, South." },
      ],
    },
    {
      title: "Ruins of Morra",
      steps: [
        { text: "Travel to the Ruins of Morra." },
        { text: "Search the stone table for the final tablet." },
        { text: "Input words: Few, Big, Sun, Moon, Life, Death, Mind, Home, Air, Fire." },
        { text: "Read the warning note." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "10,000 Farming experience", "Sets up The Garden of Death lore for Desert Treasure 2"],
};
