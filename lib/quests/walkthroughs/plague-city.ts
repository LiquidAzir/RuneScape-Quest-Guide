import type { QuestWalkthrough } from "../types";

export const plagueCity: QuestWalkthrough = {
  startPoint:
    "Talk to Edmond outside his house in the north-west corner of East Ardougne, right against the wall to West Ardougne and just north of Ardougne Castle. Ardougne Teleport (51 Magic) or an Ardougne teleport tab drops you in the market square — run west past the castle. Without magic: skills necklace to the Fishing Guild and run south, or the Tree Gnome Village spirit tree and run north-east.",
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
        {
          text: "Travel to East Ardougne and find Edmond's house in the north-west of the city, just north of Ardougne Castle.",
          travel:
            "Ardougne Teleport to the market square, then run west past Ardougne Castle until you hit the wall dividing East and West Ardougne — Edmond is digging in the mud yard beside his house. Alternatives: Ardougne cloak to the Monastery and run south-west, or skills necklace to the Fishing Guild and run south.",
        },
        { text: "Talk to Edmond, then go inside and talk to his wife Alrena." },
        { text: "Pick up the Picture of Elena from the table inside the house." },
        { text: "Talk to Edmond again outside." },
      ],
    },
    {
      title: "Dig and climb into West Ardougne",
      steps: [
        { text: "Use 4 buckets of water on the mud patch behind Edmond's house to soften it." },
        { text: "Use a spade on the soft ground to open the tunnel." },
        { text: "Climb down and follow the sewer south to the furthest pipe." },
        { text: "Use a rope on the grill above the pipe to climb up." },
        { text: "Talk to Edmond, then put on the gas mask he gives you and climb up the pipe into West Ardougne." },
      ],
    },
    {
      title: "Find Elena",
      steps: [
        {
          text: "Talk to Jethick wandering the West Ardougne town square — he gives you a book.",
          travel:
            "You surface from the pipe at the manhole in the middle of West Ardougne; Jethick paces around the open square just north-east of it.",
        },
        {
          text: "Go to the Rehnison family's house in northern West Ardougne. Talk to Martha or Ted on the ground floor, then climb the stairs and talk to their daughter Milli upstairs.",
          travel:
            "From the manhole square run north — the Rehnisons' house is the small one just west of the West Ardougne well.",
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
          text: "Walk to the West Ardougne Civic Office, the large central building north of the manhole.",
          travel:
            "From the town square head north a short way — the civic office is the big building with the council flag outside, on the main street.",
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
          text: "Walk to the Mourner house with red Xs on its doors in southern West Ardougne and use the warrant on the door.",
          travel:
            "From the civic office run south past the manhole square and keep going to the bottom of the town — the marked house is the small one on the south side, near the southern wall.",
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
        { text: "Climb back out via the manhole in the West Ardougne town square." },
        {
          text: "Return to Edmond at his house in north-west East Ardougne.",
          travel:
            "Drop back down the manhole, follow the sewer north and climb out behind Edmond's house — or Ardougne Teleport and run west past the castle.",
        },
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
