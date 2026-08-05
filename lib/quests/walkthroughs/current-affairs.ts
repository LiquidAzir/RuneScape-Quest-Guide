import type { QuestWalkthrough } from "../types";

export const currentAffairs: QuestWalkthrough = {
  startPoint:
    "Talk to Arhein at the northern end of the Catherby docks. Camelot Teleport (Magic 45) then run south-east down the hill past the Catherby bank to the shore; a charter ship also stops at Catherby.",
  itemsRequired: ["Charcoal (in-quest)", "50 coins"],
  recommended: ["A boat docked at Catherby (highly recommended for the end of the quest)"],
  sections: [
    {
      title: "Animal workers",
      steps: [
        {
          text: "Talk to Arhein at the northern end of the Catherby docks.",
          travel:
            "Camelot Teleport drops you north of Camelot castle — run east then south-east down the path into Catherby, then straight south to the waterfront. Alternatives: charter ship to Catherby, or the Seers' Village teleport (Camelot tab) and run east.",
        },
        {
          text: "Visit Councillor Catherine in the council office in north-east Catherby.",
          travel: "From the docks run north-east through the village — the office is just north of the archery shop.",
        },
        { text: "Complete form cr-4p with any info — remember your choices." },
        { text: "Search the nearby cabinet if you need charcoal." },
        { text: "Report back to Councillor Catherine in the council office." },
      ],
    },
    {
      title: "Fish mayor",
      steps: [
        {
          text: "Talk to Arhein at the Catherby docks about finding the Mayor.",
          travel: "Run back south-west from the council office to the northern end of the docks.",
        },
        {
          text: "Visit Harry at his fishing shop, the easternmost building in Catherby.",
          travel: "From the docks head east along the shore — Harry's shop is the last building on the east side of the village, near the fishing spots.",
        },
        { text: "Buy a mayoral fishbowl + tiny net for 50gp." },
        { text: "Fish in the aquarium to catch a mayorfish." },
        { text: "Return to Arhein at the northern end of the Catherby docks for his mayoral chain." },
        { text: "Match your earlier form answers with Councillor Catherine in the north-east council office." },
        { text: "Have the Mayor sign form 7r4-5h." },
        { text: "Return the signed form to Catherine." },
        { text: "Collect the current duck from Arhein at the docks." },
      ],
    },
    {
      title: "Current duck",
      steps: [
        {
          text: "Board your boat at Catherby and sail east toward the Obelisk of Water.",
          travel: "Your boat docks at the Catherby waterfront; sail east along the coast until the Obelisk of Water island comes into view.",
        },
        { text: "Locate the small water ripple just west of the Obelisk of Water and deploy the current duck." },
        { text: "Follow the duck to the shore where Holgart is waiting and retrieve it." },
        {
          text: "Report completion to Arhein at the northern end of the Catherby docks.",
          travel: "Sail back west to Catherby, or Camelot Teleport and run south-east to the shore.",
        },
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
