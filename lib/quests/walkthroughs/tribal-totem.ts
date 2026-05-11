import type { QuestWalkthrough } from "../types";

export const tribalTotem: QuestWalkthrough = {
  startPoint: "Talk to Kangai Mau at The Shrimp and Parrot restaurant in Brimhaven.",
  itemsRequired: [],
  recommended: [
    "Brimhaven teleport (or charter ship)",
    "30gp for Captain Barnaby to Ardougne",
    "21 Thieving (boostable)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Kangai Mau at The Shrimp and Parrot restaurant in Brimhaven (options 2 then 1)." },
        { text: "Travel to Ardougne." },
      ],
    },
    {
      title: "GPDT Depot",
      steps: [
        { text: "Head to the depot south of the eastern bank." },
        { text: "Investigate the north-eastern crate for an address label." },
        { text: "Use the label on the crate 2 tiles south." },
        { text: "Talk to the GPDT employee at the Ardougne depot south of the east bank (option 1)." },
      ],
    },
    {
      title: "Wizard's Tower",
      steps: [
        { text: "Talk to Wizard Cromperty north-east of the market (2, 2, 1)." },
        { text: "Enter the house 2 doors west; use password KURT (click slowly)." },
        { text: "Right-click investigate the stairs (21 Thieving) and climb." },
        { text: "Search the chest for the totem; finish the dialogue." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Kangai Mau at The Shrimp and Parrot restaurant in Brimhaven." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,775 Thieving experience",
    "5 Swordfish",
  ],
};
