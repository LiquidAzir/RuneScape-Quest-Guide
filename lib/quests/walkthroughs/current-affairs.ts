import type { QuestWalkthrough } from "../types";

export const currentAffairs: QuestWalkthrough = {
  startPoint: "Talk to Arhein on the Catherby docks.",
  itemsRequired: ["Charcoal (in-quest)", "50 coins"],
  recommended: ["A boat docked at Catherby (highly recommended for the end of the quest)"],
  sections: [
    {
      title: "Animal workers",
      steps: [
        { text: "Talk to Arhein at Catherby docks." },
        { text: "Visit Councillor Catherine in the council office (north-east Catherby)." },
        { text: "Complete form cr-4p with any info — remember your choices." },
        { text: "Search the nearby cabinet if you need charcoal." },
        { text: "Report back to Councillor Catherine." },
      ],
    },
    {
      title: "Fish mayor",
      steps: [
        { text: "Talk to Arhein at Catherby docks about finding the Mayor." },
        { text: "Visit Harry at the fishing shop in east Catherby." },
        { text: "Buy a mayoral fishbowl + tiny net for 50gp." },
        { text: "Fish in the aquarium to catch a mayorfish." },
        { text: "Return to Arhein at Catherby docks for his mayoral chain." },
        { text: "Match your earlier form answers with Councillor Catherine." },
        { text: "Have the Mayor sign form 7r4-5h." },
        { text: "Return the signed form to Catherine." },
        { text: "Collect the current duck from Arhein." },
      ],
    },
    {
      title: "Current duck",
      steps: [
        { text: "Board your boat and sail east toward the Obelisk of Water." },
        { text: "Locate the small water ripple and deploy the current duck." },
        { text: "Follow the duck to the shore near Holgart and retrieve it." },
        { text: "Report completion to Arhein." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,400 Sailing experience",
    "1,000 Fishing experience",
    "Sea-charting Current ability",
    "Current duck item + Mayor of Catherby NPC",
    "25 sawmill coupons (oak plank)",
  ],
};
