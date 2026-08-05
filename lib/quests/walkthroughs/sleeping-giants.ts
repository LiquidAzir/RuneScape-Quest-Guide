import type { QuestWalkthrough } from "../types";

export const sleepingGiants: QuestWalkthrough = {
  startPoint:
    "Talk to Kovac outside the Giants' Foundry on the Giants' Plateau, east of Al Kharid. Fastest: Minigame Teleport (grouping tab) to Giants' Foundry, which drops you at the door. Otherwise Lumbridge Home Teleport, run north-east through the Al Kharid toll gate, then east past the palace and over the plateau to the foundry building.",
  itemsRequired: [
    "3 Oak logs",
    "1 Wool",
    "10 Nails",
    "Hammer",
    "Chisel",
    "Bucket of water (or ice gloves)",
  ],
  recommended: ["20 free inventory slots for the crate search", "Bank access nearby"],
  sections: [
    {
      title: "Repair the workshop",
      steps: [
        {
          text: "Talk to Kovac outside the Giants' Foundry and accept the quest.",
          travel:
            "Minigame Teleport (grouping tab) to Giants' Foundry puts you at the entrance. No teleport: Lumbridge Home Teleport, north-east through the Al Kharid toll gate, then east past the palace across the Giants' Plateau — Kovac is the giant standing by the foundry doors.",
        },
        { text: "Enter the foundry through the doors behind Kovac." },
        { text: "Repair the polishing wheel, grindstone, and trip hammer using the oak planks, nails and hammer." },
        { text: "Talk to Kovac inside the Giants' Foundry twice." },
        { text: "Search the crate for items." },
        { text: "Deposit all items into the crucible near the bank." },
      ],
    },
    {
      title: "Forge a sword",
      steps: [
        { text: "Learn mould selection from Kovac." },
        { text: "Select the appropriate moulds at the mould jig." },
        { text: "Pour metal into the mould." },
        { text: "Cool the sword with a bucket of water (or ice gloves)." },
        { text: "Heat the preform in the lava pool until red." },
        { text: "Strike with the trip hammer until yellow progress." },
        { text: "Cool in the waterfall until high green." },
        { text: "Use the grindstone until green progress." },
        { text: "Polish with the polishing wheel until complete." },
        { text: "Talk to Kovac at the Giants' Foundry and accept the quest to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "6,000 Smithing experience",
    "Access to Giants' Foundry minigame (best Smithing XP & rewards: blessed bone shards, double ammo mould, etc.)",
  ],
};
