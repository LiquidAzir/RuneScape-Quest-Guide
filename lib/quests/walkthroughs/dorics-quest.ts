import type { QuestWalkthrough } from "../types";

export const doricsQuest: QuestWalkthrough = {
  startPoint: "Talk to Doric in his house north of Falador.",
  itemsRequired: [
    "6 Clay",
    "4 Copper ore",
    "2 Iron ore",
  ],
  recommended: ["Buy the ores from the Grand Exchange to skip mining"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Doric's house, north of Falador on the path to Taverley.",
          notes: ["Use a Falador teleport and run north, or follow the path north out of Falador."],
        },
        { text: "Talk to Doric and agree to fetch ore for him." },
      ],
    },
    {
      title: "Gather the ores",
      steps: [
        {
          text: "Get 6 clay, 4 copper ore and 2 iron ore.",
          notes: [
            "Easiest: trade them on the Grand Exchange.",
            "If mining: clay and copper are at the south Falador mine; iron ore is at Al Kharid mine or Dwarven mine.",
          ],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Doric with all the ore in your inventory." },
        { text: "Talk to him to hand it over." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,300 Mining experience",
    "180 coins",
    "Use of Doric's anvils",
  ],
};
