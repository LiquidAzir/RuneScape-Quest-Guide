import type { QuestWalkthrough } from "../types";

export const theIdesOfMilk: QuestWalkthrough = {
  startPoint: "Talk to Cassius by the pond north-west of Lumbridge.",
  itemsRequired: [],
  recommended: ["Combat 15+"],
  enemies: ["Brutus the Bull"],
  sections: [
    {
      title: "Investigate the cows",
      steps: [
        { text: "Talk to Cassius by the pond." },
        { text: "Talk to Gillie Groats about cow productivity." },
        { text: "Talk to Seth Groats." },
        { text: "Search the shelves in Seth's farmhouse for The Groats Principles book." },
        { text: "Return the book to Cassius for a milk sample." },
      ],
    },
    {
      title: "Test the milk",
      steps: [
        { text: "Drink the milk sample in front of Cassius." },
        { text: "Take a second milk sample to Duke Horacio in Lumbridge Castle." },
        { text: "Talk to Gillie Groats again." },
        { text: "Drink the milk sample in front of Gillie to receive a permit." },
      ],
    },
    {
      title: "Defeat Brutus",
      steps: [
        { text: "Open the pen in the north-east corner of the cow farm." },
        { text: "Defeat the bull (Brutus)." },
        { text: "Talk to Gillie Groats." },
        { text: "Talk to Cassius." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Brutus (cow boss for re-fights)",
    "Cowbell amulet",
    "Magic lamp (1,000 XP in any combat skill)",
  ],
};
