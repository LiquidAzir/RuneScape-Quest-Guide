import type { QuestWalkthrough } from "../types";

export const murderMystery: QuestWalkthrough = {
  startPoint:
    "Talk to a guard at the Sinclair Mansion gates, north of Seers' Village. Camelot Teleport lands you outside Camelot Castle — run east into Seers' Village, then north up the road toward the coal trucks; the mansion is the walled estate on the west side of that road.",
  itemsRequired: ["Pot"],
  recommended: ["16 free inventory slots", "Weight-reducing clothing"],
  sections: [
    {
      title: "Investigate the murder",
      steps: [
        {
          text: "Talk to the guard standing at the Sinclair Mansion entrance.",
          travel:
            "Camelot Teleport, run east through Seers' Village and then north along the road out of town; the Sinclair Mansion grounds are on the left (west) side. On foot from Ardougne, take the north road past the Fishing Guild and keep going north-east.",
        },
        {
          text: "Collect 4 flypapers from the sacks in the outbuilding in the mansion grounds.",
          travel:
            "The shed is inside the mansion's walled garden, a few steps from the entrance gate — search the sacks repeatedly until you have 4 flypapers.",
        },
        {
          text: "Go inside the mansion and take the pungent pot and the criminal's dagger from the ground floor.",
        },
        {
          text: "Step outside to the smashed window on the mansion's east wall and search it for the criminal's thread.",
        },
      ],
    },
    {
      title: "Match fingerprints",
      steps: [
        {
          text: "Based on the thread colour, identify the suspect pair: red (Bob/Carol), green (Anna/David), blue (Elizabeth/Frank).",
        },
        { text: "Search those two siblings' bedroom barrels inside the mansion for 2 silver items." },
        { text: "Fill your pot with flour from the barrel in the mansion kitchen." },
        { text: "Dust each silver item and the dagger with flour and flypaper." },
        { text: "Compare the silver-item prints against the dagger print to identify the killer." },
      ],
    },
    {
      title: "Gather evidence",
      steps: [
        { text: "Talk to Gossip, the man loitering just outside the mansion gates, and ask for his suspicion." },
        {
          text: "Question the poison salesman in the Seers' Village pub about who bought poison from him.",
          travel:
            "Run south from the mansion back into Seers' Village — the Forester's Arms pub is on the west side of the village, south-west of the bank. The salesman is inside by the bar.",
        },
        { text: "Return to the mansion and confront the matched suspect about their poison purchase." },
        { text: "Search the spot in the mansion grounds they claim to have used the poison on." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Drop the silver necklace if you took one (from Anna's barrel) before final dialogue." },
        { text: "Talk to the guard inside Sinclair Mansion and select 'I know who did it!' with the right name." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["3 Quest Points", "1,406 Crafting experience", "2,000 coins"],
};
