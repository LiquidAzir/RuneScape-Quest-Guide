import type { QuestWalkthrough } from "../types";

export const theKnightsSword: QuestWalkthrough = {
  startPoint: "Talk to the Squire in the courtyard of the White Knights' Castle in Falador.",
  itemsRequired: [
    "Pickaxe (any kind)",
    "Redberry pie (you'll bake one or buy one)",
    "2 Iron bars",
    "Blurite ore (you'll mine it)",
  ],
  recommended: [
    "Mining level 10 (required to mine blurite)",
    "Armour & food: ice giants in the dungeon are level 53",
    "Combat bracelet, falador teleport, etc. for fast travel",
  ],
  enemies: ["Ice giants (level 53) — usually can be avoided", "Ice warriors (level 57)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Falador and find the Squire in the courtyard of the White Knights' Castle." },
        { text: "Talk to the Squire in the White Knights' Castle courtyard. He's lost Sir Vyvin's ceremonial sword and asks you to replace it." },
        { text: "He says you'll need to find an Imcando dwarf to forge a new one." },
      ],
    },
    {
      title: "Find the Imcando dwarf",
      steps: [
        {
          text: "Travel to south of Rimmington, on the beach.",
          notes: ["Walk west from Rimmington and follow the coast south to the small camp."],
        },
        { text: "Talk to Thurgo, the Imcando dwarf. He won't help you." },
        { text: "Bring him a redberry pie (he'll talk to you after eating it)." },
        {
          text: "He explains he needs blurite ore to forge a sword and a picture to copy.",
        },
      ],
    },
    {
      title: "Get the sword picture",
      steps: [
        { text: "Return to the White Knights' Castle and talk to the Squire again." },
        { text: "Ask if he has a picture of the sword. He says his brother Reldo (in Varrock library) might." },
        {
          text: "Travel to Varrock palace library and talk to Reldo.",
          notes: ["The library is on the ground floor of the palace, west wing."],
        },
        { text: "He gives you a portrait/picture of the sword." },
      ],
    },
    {
      title: "Mine blurite ore",
      steps: [
        {
          text: "Travel to the ice dungeon under the Asgarnian Ice Mountain (entrance south-east of the mountain).",
          notes: ["The trapdoor is just south of the mountain — close to where Wyson the gardener stands."],
        },
        { text: "Climb down and navigate carefully past ice warriors and ice giants to the blurite room (south end)." },
        { text: "Mine 1 blurite ore (more if you fear failure — you only need 1)." },
        { text: "Climb back out." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Thurgo with the picture, blurite ore, and 2 iron bars." },
        { text: "Talk to Thurgo at his beach hut south of Port Sarim to forge the sword." },
        { text: "Take the sword back to the Squire in Falador." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "12,725 Smithing experience (one of the best early Smithing rewards)",
    "Permission to forge blurite items via Thurgo (used in later content)",
  ],
};
