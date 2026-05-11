import type { QuestWalkthrough } from "../types";

export const junglePotion: QuestWalkthrough = {
  startPoint: "Talk to Trufitus in his house in Tai Bwo Wannai Village.",
  itemsRequired: [],
  recommended: [
    "Combat 20+",
    "1-2 antidote++ or antipoison",
    "Some food",
    "Stamina potions",
  ],
  enemies: ["Jogre (level 53)", "Harpie Bug Swarms (level 46)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Trufitus north-east of Tai Bwo Wannai." },
        { text: "Pick options 3, then 1, then 1." },
      ],
    },
    {
      title: "Snake weed",
      steps: [
        { text: "Go south-west to find marshy jungle vines." },
        { text: "Search the vines and clean the herb." },
        { text: "Return to Trufitus in his house in Tai Bwo Wannai Village (option 1)." },
      ],
    },
    {
      title: "Ardrigal",
      steps: [
        { text: "Travel north-east from Trufitus to palm trees near Harpie Bug Swarms." },
        { text: "Search palm trees and clean the herb." },
        { text: "Return to Trufitus in his house in Tai Bwo Wannai Village (option 1)." },
      ],
    },
    {
      title: "Sito foil",
      steps: [
        { text: "Go south to the scorched-earth patch." },
        { text: "Search squares next to the fire and clean the herb." },
        { text: "Return to Trufitus in his house in Tai Bwo Wannai Village (option 1)." },
      ],
    },
    {
      title: "Volencia moss",
      steps: [
        { text: "Travel south-east to the Karamja Jungle mine." },
        { text: "Search rocks and clean the herb." },
        { text: "Return to Trufitus in his house in Tai Bwo Wannai Village (option 1)." },
      ],
    },
    {
      title: "Rogue's purse",
      steps: [
        { text: "Return to the Harpie Bug Swarm area; head north-west to the cave." },
        { text: "Enter the cave and travel south." },
        { text: "Search the fungus-covered cavern wall and clean the herb." },
        { text: "Return to Trufitus in his house in Tai Bwo Wannai Village." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "775 Herblore experience"],
};
