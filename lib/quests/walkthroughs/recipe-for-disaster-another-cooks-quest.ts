import type { QuestWalkthrough } from "../types";

export const rfdAnotherCooksQuest: QuestWalkthrough = {
  startPoint: "Talk to the Cook in Lumbridge Castle's kitchen.",
  itemsRequired: [
    "Eye of newt",
    "Greenman's ale",
    "Rotten tomato",
    "Ashes",
    "Fruit blast (not premade)",
  ],
  recommended: ["Lumbridge teleport"],
  sections: [
    {
      title: "Start the chain",
      steps: [
        { text: "Talk to the Cook in Lumbridge Castle and start the quest." },
        { text: "He gives you 100 coins to buy supplies." },
      ],
    },
    {
      title: "Make the dirty blast",
      steps: [
        { text: "Get an eye of newt, a Greenman's ale, a rotten tomato, and a fruit blast." },
        { text: "Use ashes on the fruit blast to make a dirty blast." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return all 4 items to the Cook." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Invitation to the feast (lets you start the next subquests)",
    "Access to the Culinaromancer's Chest after watching the feast cutscene",
  ],
};
