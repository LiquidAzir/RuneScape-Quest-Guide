import type { QuestWalkthrough } from "../types";

export const rumDeal: QuestWalkthrough = {
  startPoint:
    "Talk to Pirate Pete on the dock on the coast north of Port Phasmatys. Empty the Ectophial to land at the Ectofuntus north-west of the town, then run south-east into Port Phasmatys and out to the northern dock; without it, teleport to Canifis and run east along the road (you need Ghosts Ahoy done or 2 ecto-tokens to pass the town gate).",
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
        {
          text: "Sail to Braindeath Island with Pirate Pete, then get a rake and seed dibber from the Tool Leprechaun beside the blindweed patch.",
          travel:
            "Ectophial to the Ectofuntus, run south-east through Port Phasmatys and out to the northern dock, and ask Pirate Pete to take you to Braindeath Island. On the island, walk south-east from the landing point to the fenced farming patch — the Tool Leprechaun stands right beside it.",
        },
        { text: "Talk to Pirate Pete at the Braindeath Island dock; decline his money." },
        {
          text: "Finish the dialogue with Captain Braindeath inside the Braindeath Island brewery.",
          travel: "The brewery is the big building in the centre of the island — follow the path uphill from the dock. Captain Braindeath is on the ground floor by the brewing vats.",
        },
        { text: "Plant blindweed in the south-east patch." },
        { text: "Wait ~5 minutes for it to grow." },
        { text: "Pick the blindweed and talk to Captain Braindeath inside the brewery." },
        { text: "Place the blindweed in the hopper." },
      ],
    },
    {
      title: "Stagnant water",
      steps: [
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery." },
        {
          text: "Head west from the brewery to the bridge and open the gate north of 50% Luke.",
          travel: "Leave the brewery by the west door and follow the path west to the bridge; 50% Luke stands beside it, and the gate you want is just north of him.",
        },
        { text: "Fill the bucket at the water source past the gate." },
        { text: "Return to the brewery and add the water to the hopper." },
      ],
    },
    {
      title: "Fish sluglings",
      steps: [
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery." },
        {
          text: "Fish 5 sluglings from the water beside the farming patch.",
          travel: "Run back south-east from the brewery to the blindweed patch — the fishing spots are on the shoreline right next to it.",
        },
        { text: "Place the sluglings in the pressure barrel." },
        { text: "Pull the lever." },
      ],
    },
    {
      title: "Defeat the Evil Spirit",
      steps: [
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery." },
        { text: "Talk to Davey in the bunk bed room of the brewery." },
        { text: "Use the holy wrench on the brewing control." },
        { text: "Defeat the Evil Spirit (level 150) — safespot if needed." },
      ],
    },
    {
      title: "Spider carcass",
      steps: [
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery." },
        { text: "Climb down the ladder to the cellar where the fever spiders live." },
        { text: "Kill a Fever Spider (wear a spiny helm)." },
        { text: "Carry the body back up and place it in the hopper." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery." },
        { text: "Collect Unsanitary Swill from the output tap." },
        { text: "Give it to Captain Donnie outside the brewery." },
        { text: "Talk to Captain Braindeath inside the Braindeath Island brewery one final time." },
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
