import type { QuestWalkthrough } from "../types";

export const theGolem: QuestWalkthrough = {
  startPoint: "Talk to the clay golem in the ruins of Uzer (east of Shantay Pass).",
  itemsRequired: [
    "Vial",
    "Pestle and mortar",
    "Papyrus",
    "4 soft clay (or bracelet of clay + pickaxe)",
    "Phoenix feather",
    "Desert access",
  ],
  recommended: [
    "Desert robes + waterskins",
    "Stamina/energy potions",
    "Necklace of passage / Digsite pendant / Varrock Teleport",
    "Hammer + chisel for optional gems",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the Uzer ruins." },
        { text: "Pick up and read the letter west of the golem." },
        { text: "Talk to the golem at the Uzer ruins; pick 'Shall I try to repair you?'." },
        { text: "Use 4 soft clay on the golem." },
        { text: "Talk again; pick 'How do I open the portal?'." },
      ],
    },
    {
      title: "Get the statuette",
      steps: [
        { text: "Pick a black mushroom near the stairs east of the golem." },
        { text: "Grind the mushroom with pestle and mortar for black dye." },
        { text: "Climb down the ruins stairs." },
        { text: "Take the strange implement from the north-western room." },
        { text: "Visit the Digsite and talk to Elissa about the letter." },
        { text: "Search the bookcase in the Exam Centre for Varmen's notes." },
        { text: "Visit the Varrock Museum and pickpocket the curator for a display cabinet key." },
        {
          text: "Unlock the second-most western case in the northern row to get the statuette.",
        },
      ],
    },
    {
      title: "Open the portal",
      steps: [
        { text: "Return to the Uzer ruins." },
        { text: "Go downstairs and place the statuette in the empty alcove." },
        { text: "Turn all statues to point north." },
        { text: "Go through the double doors north." },
        { text: "Optional: chisel gems from the throne, then return south." },
      ],
    },
    {
      title: "Reactivate the golem",
      steps: [
        { text: "Go upstairs and talk to the golem." },
        { text: "Use a phoenix feather on the black dye to make a phoenix quill pen." },
        { text: "Use the quill pen on papyrus to make the golem program." },
        { text: "Use the strange implement on the golem, then quickly use the golem program." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Thieving + Crafting experience each",
    "2 cut rubies, emeralds, and sapphires (from the throne)",
    "Carpet ride from Shantay Pass to Uzer",
  ],
};
