import type { QuestWalkthrough } from "../types";

export const theQueenOfThieves: QuestWalkthrough = {
  startPoint: "Talk to Tomas Lawry outside the Port Piscarilius bank.",
  itemsRequired: ["Stew (or raw beef + potato + bowl to make one)"],
  recommended: ["Stamina potion", "Some coins", "Kourend Castle Teleport"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Tomas Lawry by the Port Piscarilius bank." },
        { text: "Travel south and talk to Robert O'Reilly west of the bridge." },
        { text: "Give Robert a stew." },
      ],
    },
    {
      title: "Underground exploration",
      steps: [
        { text: "Enter the manhole east of Robert's house." },
        { text: "Cross the bridge and head west." },
        { text: "Talk to Devan Rutter near the fish stall." },
      ],
    },
    {
      title: "Confront Conrad and meet the Queen",
      steps: [
        { text: "Return to the surface and find Conrad King on the dock." },
        { text: "Confront Conrad King (no fight)." },
        { text: "Return underground and enter the tent." },
        { text: "Talk to the Queen of Thieves." },
      ],
    },
    {
      title: "Find the letter",
      steps: [
        { text: "Travel to Kingstown, south-west from the sewers." },
        { text: "Enter the house north of the entrance." },
        { text: "Climb upstairs." },
        { text: "Pick the lock on the chest to obtain a letter." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Tomas Lawry outside the Port Piscarilius bank with the letter." },
        { text: "Return to the Queen of Thieves (Lady Shauna Piscarilius)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Thieving experience",
    "2,000 coins",
    "The fisher's flute (Port Piscarilius teleport)",
    "Port Piscarilius graceful outfit recolour",
  ],
};
