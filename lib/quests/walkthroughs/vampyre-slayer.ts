import type { QuestWalkthrough } from "../types";

export const vampyreSlayer: QuestWalkthrough = {
  startPoint: "Talk to Morgan in the northern house in Draynor Village.",
  itemsRequired: [
    "A hammer",
    "Some coins (the vampyre is in Draynor Manor, no fare required)",
  ],
  recommended: [
    "Decent armour and weapon — the vampyre is level 34",
    "Food (sharks, lobsters, swordfish, etc.)",
    "Strength potion is helpful",
  ],
  enemies: ["Count Draynor (level 34 vampyre)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Draynor Village. Talk to Morgan in the small house in the north of town." },
        { text: "He explains the village is plagued by a vampyre. Agree to slay it." },
        { text: "Travel to the Blue Moon Inn in Varrock and talk to Dr Harlow." },
        { text: "Buy him a beer (1gp from the barman) and give it to him; he tells you to use a stake and a hammer to kill the vampyre." },
        { text: "Dr Harlow hands you a stake." },
      ],
    },
    {
      title: "Slay Count Draynor",
      steps: [
        { text: "Travel to Draynor Manor (north of Draynor Village)." },
        { text: "Go down into the basement using the trapdoor." },
        {
          text: "Equip your weapon and attack Count Draynor. Eat food as needed.",
          notes: ["Pray Protect from Melee if you have it; otherwise just out-tank with food."],
        },
        {
          text: "When his HP runs out, the game uses the stake and hammer in your inventory automatically to finish him.",
          notes: ["You MUST have both the stake and a hammer in your inventory to land the killing blow."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "After Count Draynor crumbles, the quest finishes immediately." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "4,825 Attack experience",
  ],
};
