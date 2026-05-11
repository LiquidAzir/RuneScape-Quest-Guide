import type { QuestWalkthrough } from "../types";

export const plagueCity: QuestWalkthrough = {
  startPoint:
    "Talk to Edmond outside his small house just east of the West Ardougne wall, north of Ardougne Castle (East Ardougne side — north of the Ardougne lighthouse path, beside the small mud yard).",
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
        {
          text: "Talk to Jethick wandering the West Ardougne town square (just north-east of where the pipe drops you in). He gives you a book.",
        },
        {
          text: "Travel to the Rehnison family's small house in northern West Ardougne (just west of the West Ardougne well). Talk to Martha or Ted on the ground floor, then climb the stairs and talk to Milli (their daughter) upstairs.",
        },
        {
          text: "Milli tells you Elena was taken to a Mourner-marked house in southern West Ardougne — look for the house with red Xs on its doors.",
        },
      ],
    },
    {
      title: "Get Bravek's warrant",
      steps: [
        {
          text: "Walk to the West Ardougne Civic Office — the large central building north of the manhole, with the West Ardougne council's flag outside.",
        },
        {
          text: "Talk to the Clerk on the ground floor and ask to see Bravek (the city governor).",
        },
        {
          text: "Climb the stairs and talk to Bravek upstairs. Use the hangover cure on him.",
        },
        {
          text: "He gives you a search warrant for the Mourner house.",
        },
      ],
    },
    {
      title: "Free Elena",
      steps: [
        {
          text: "Walk south in West Ardougne to the Mourner house with red Xs on its doors (the small house in southern West Ardougne). Use the warrant on the door to enter.",
        },
        {
          text: "Inside the house, search the barrel just west of the staircase for a small key.",
        },
        {
          text: "Climb down the stairs into the basement, unlock Elena's cell with the small key, and talk to Elena.",
        },
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
