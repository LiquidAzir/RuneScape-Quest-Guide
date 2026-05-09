import type { QuestWalkthrough } from "../types";

export const rumDeal: QuestWalkthrough = {
  startPoint: "Talk to Pirate Pete at the dock north of Port Phasmatys.",
  itemsRequired: ["Rake", "Seed dibber", "Bucket", "47+ Prayer points"],
  recommended: [
    "Combat 50+",
    "Ranged or magic for safespotting",
    "Ectophial",
    "Stamina potions",
  ],
  enemies: [
    "Evil Spirit (level 150) — safespottable",
    "Fever Spider (level 49) — wear spiny helm to avoid disease",
  ],
  sections: [
    {
      title: "Plant blindweed",
      steps: [
        { text: "Get a rake and seed dibber from the leprechaun." },
        { text: "Talk to Pirate Pete; decline his money." },
        { text: "Finish the dialogue with Captain Braindeath." },
        { text: "Plant blindweed in the south-east patch." },
        { text: "Wait ~5 minutes for it to grow." },
        { text: "Pick the blindweed and talk to Captain Braindeath." },
        { text: "Place the blindweed in the hopper." },
      ],
    },
    {
      title: "Stagnant water",
      steps: [
        { text: "Talk to Captain Braindeath." },
        { text: "Head west to the bridge; open the gate north of 50% Luke." },
        { text: "Fill the bucket at the water source." },
        { text: "Return and add the water to the hopper." },
      ],
    },
    {
      title: "Fish sluglings",
      steps: [
        { text: "Talk to Captain Braindeath." },
        { text: "Fish 5 sluglings near the farming patch." },
        { text: "Place the sluglings in the pressure barrel." },
        { text: "Pull the lever." },
      ],
    },
    {
      title: "Defeat the Evil Spirit",
      steps: [
        { text: "Talk to Captain Braindeath." },
        { text: "Talk to Davey in the bunk bed room." },
        { text: "Use the holy wrench on the brewing control." },
        { text: "Defeat the Evil Spirit (level 150) — safespot if needed." },
      ],
    },
    {
      title: "Spider carcass",
      steps: [
        { text: "Talk to Captain Braindeath." },
        { text: "Climb down the ladder." },
        { text: "Kill a Fever Spider (wear a spiny helm)." },
        { text: "Place the body in the hopper." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Captain Braindeath." },
        { text: "Collect Unsanitary Swill from the output tap." },
        { text: "Give it to Captain Donnie outside." },
        { text: "Talk to Captain Braindeath one final time." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "7,000 Fishing + Prayer + Farming experience each",
    "Holy wrench (extra prayer points from prayer potions when carried)",
    "Access to Braindeath Island",
  ],
};
