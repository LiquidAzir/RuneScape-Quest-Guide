import type { QuestWalkthrough } from "../types";

export const runeMysteries: QuestWalkthrough = {
  startPoint: "Talk to the Duke of Lumbridge on the first floor of Lumbridge Castle.",
  itemsRequired: ["None"],
  recommended: ["Lumbridge home teleport for fast travel", "Some run energy"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Climb the stairs of Lumbridge Castle to the first floor." },
        { text: "Talk to the Duke of Lumbridge." },
        { text: "He hands you the Air talisman and asks you to deliver it to Sedridor at the Wizards' Tower." },
      ],
    },
    {
      title: "Deliver to Sedridor",
      steps: [
        {
          text: "Travel to the Wizards' Tower south-west of Draynor Village.",
          notes: ["Run south from Lumbridge across the southern bridge then west, or use a teleport."],
        },
        { text: "Climb down to the basement of the Wizards' Tower." },
        { text: "Talk to Archmage Sedridor in the Wizards' Tower basement and give him the Air talisman." },
        { text: "He tells you about the Rune essence mystery and asks you to deliver a research package." },
        { text: "He hands you a research package." },
      ],
    },
    {
      title: "Deliver to Aubury",
      steps: [
        { text: "Travel to Varrock and find Aubury's rune shop in the south-east of the city." },
        { text: "Talk to Aubury in his rune shop in south-east Varrock and give him the research package." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Runecrafting (you can now use the Mysterious ruins to enter the Air, Mind, Water etc. altars)",
    "Aubury's teleport to the rune essence mine",
  ],
};
