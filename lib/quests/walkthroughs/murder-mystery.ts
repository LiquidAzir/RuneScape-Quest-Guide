import type { QuestWalkthrough } from "../types";

export const murderMystery: QuestWalkthrough = {
  startPoint: "Talk to a guard at Sinclair Mansion (north of Seers' Village on the path to Camelot).",
  itemsRequired: ["Pot"],
  recommended: ["16 free inventory slots", "Weight-reducing clothing"],
  sections: [
    {
      title: "Investigate the murder",
      steps: [
        { text: "Talk to the guard at the mansion entrance." },
        { text: "Collect 4 flypapers from sacks in the shed." },
        { text: "Inside the mansion, take the pungent pot and the criminal's dagger." },
        { text: "Find the criminal's thread at the smashed eastern window." },
      ],
    },
    {
      title: "Match fingerprints",
      steps: [
        {
          text: "Based on the thread colour, identify the suspect pair: red (Bob/Carol), green (Anna/David), blue (Elizabeth/Frank).",
        },
        { text: "Search those siblings' barrels for 2 silver items." },
        { text: "Fill your pot with flour from the kitchen barrel." },
        { text: "Dust each silver item and the dagger with flour and flypaper." },
        { text: "Compare the silver-item prints against the dagger print to identify the killer." },
      ],
    },
    {
      title: "Gather evidence",
      steps: [
        { text: "Ask Gossip outside the mansion gates for his suspicion." },
        { text: "Question the poison salesman in the Seers' Village pub about purchases." },
        { text: "Confront the matched suspect about their poison purchase." },
        { text: "Search the location they claim to have used the poison." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Drop the silver necklace if you took one (from Anna's barrel) before final dialogue." },
        { text: "Talk to the guard and select 'I know who did it!' with the right name." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["3 Quest Points", "1,406 Crafting experience", "2,000 coins"],
};
