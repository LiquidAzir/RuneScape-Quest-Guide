import type { QuestWalkthrough } from "../types";

export const plagueCity: QuestWalkthrough = {
  startPoint: "Talk to Edmond just outside the wall of West Ardougne, north of Ardougne Castle.",
  itemsRequired: [
    "Spade",
    "Rope",
    "4 Buckets of water",
    "Dwellberries",
    "Chocolate dust + Bucket of milk + Snape grass (to brew the hangover cure)",
    "Picture of Elena (taken during quest)",
  ],
  recommended: [
    "Skills necklace for Fishing Guild teleport",
    "Spirit tree to Tree Gnome Village",
    "Energy/stamina potion",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Make the hangover cure: use chocolate dust on a bucket of milk, then add snape grass." },
        { text: "Travel to East Ardougne and find Edmond's house north of Ardougne Castle." },
        { text: "Talk to Edmond, then talk to his wife Alrena inside the house." },
        { text: "Pick up the Picture of Elena from the table." },
        { text: "Talk to Edmond again at his house in East Ardougne." },
      ],
    },
    {
      title: "Dig and climb into West Ardougne",
      steps: [
        { text: "Use 4 buckets of water on the mud patch behind Edmond's house to soften it." },
        { text: "Use a spade on the soft ground." },
        { text: "Climb down and follow the sewer south to the furthest pipe." },
        { text: "Use a rope on the grill above the pipe to climb up." },
        { text: "Talk to Edmond, then put on the gas mask he gives you and climb up the pipe into West Ardougne." },
      ],
    },
    {
      title: "Find Elena",
      steps: [
        { text: "Talk to Jethick (wandering nearby) — he'll give you a book." },
        { text: "Travel to the Rehnison family's house and talk to the family inside (Martha or Ted on the ground floor, then Milli upstairs)." },
        {
          text: "She tells you Elena was taken to a Mourner house with red Xs on its doors — find that building south.",
        },
      ],
    },
    {
      title: "Get Bravek's warrant",
      steps: [
        { text: "Walk to the Civic Office (the large central building north of the manhole)." },
        { text: "Talk to the Clerk in the East Ardougne civic office and ask to see Bravek." },
        { text: "Talk to Bravek in the East Ardougne civic office and use the hangover cure on him." },
        { text: "He gives you a search warrant." },
      ],
    },
    {
      title: "Free Elena",
      steps: [
        { text: "Return to the Mourner house with the X on the doors and use the warrant to enter." },
        { text: "Search the barrel west of the staircase for a small key." },
        { text: "Go downstairs, unlock the cell, and talk to Elena." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Climb back out via the manhole in the town square." },
        { text: "Return to Edmond at his house in East Ardougne." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,425 Mining experience",
    "An Ardougne teleport scroll (gives one cast of Ardougne Teleport)",
    "Gas mask (used in many later quests)",
  ],
};
