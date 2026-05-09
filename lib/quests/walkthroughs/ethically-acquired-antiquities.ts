import type { QuestWalkthrough } from "../types";

export const ethicallyAcquiredAntiquities: QuestWalkthrough = {
  startPoint: "Inspect the empty display case in the Grand Museum's north-east corner, Civitas illa Fortis (Varlamore).",
  itemsRequired: [],
  recommended: [
    "3,000 coins for the charter ship to Port Sarim (or Ring of Charos for discount)",
    "Explorer's ring 2+",
    "Varrock Teleport",
    "Civitas illa Fortis Teleport",
  ],
  sections: [
    {
      title: "Investigate the museum",
      steps: [
        { text: "Inspect the empty display case." },
        { text: "Talk to Curator Herminius about the display." },
        { text: "Investigate the tools behind the case." },
        { text: "Inspect the display case again." },
        { text: "Question citizens, academics, and tourists until suspicious activity is mentioned." },
      ],
    },
    {
      title: "Track the thief",
      steps: [
        { text: "Talk to Regulus Cento about suspicious individuals." },
        { text: "Chat with the Trader Crewmember about a man with a case." },
        { text: "Get the sail repaired by Artima at the crafting shop." },
        { text: "Return to the Crewmember for updated info." },
        { text: "Question Trader Stan and crew at Port Sarim's south dock." },
        { text: "Talk to Betty at the Port Sarim runeshop for the critical lead." },
      ],
    },
    {
      title: "Recover the artefact",
      steps: [
        { text: "Visit Varrock Museum curator Haig Halen." },
        { text: "Pickpocket the storeroom key from him." },
        { text: "Search crates in the museum's north-east storeroom." },
        { text: "Return to Haig Halen with the recovered item." },
        { text: "Pick the shaming dialogue options." },
        { text: "Report findings to Curator Herminius." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "6,000 Thieving experience",
    "5,000 coins",
  ],
};
