import type { QuestWalkthrough } from "../types";

export const gettingAhead: QuestWalkthrough = {
  startPoint: "Talk to Gordon on his farm south of the Farming Guild.",
  itemsRequired: [
    "Pot of flour",
    "Soft clay (or pickaxe to mine clay)",
    "Hammer + Saw",
    "2 planks + 6+ nails",
    "Knife",
    "Red dye",
    "Needle + thread",
    "Bear fur or grey wolf fur",
  ],
  recommended: ["Combat 45+", "Combat gear and food for the Headless Beast"],
  enemies: ["Headless Beast (level 82)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Gordon south of the Farming Guild." },
        { text: "Talk to Mary inside the main building." },
      ],
    },
    {
      title: "Track and slay the Headless Beast",
      steps: [
        { text: "Use a pot of flour on the southern gate by the cow pen." },
        { text: "Follow the flour trail north into the Kebos Lowlands mine." },
        { text: "Defeat the Headless Beast (level 82)." },
        { text: "Return to Gordon on his farm south of the Farming Guild." },
      ],
    },
    {
      title: "Make the fake head",
      steps: [
        { text: "Use a knife on soft clay to make a clay head." },
        { text: "Use bear fur with needle + thread to make a fur head." },
        { text: "Apply red dye for a bloody look." },
        { text: "Mount the head on the wall using planks + nails." },
        { text: "Talk to Gordon on his farm south of the Farming Guild to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 coins",
    "4,000 Crafting experience",
    "3,200 Construction experience",
    "Access to the Kebos Lowlands tannery",
  ],
};
