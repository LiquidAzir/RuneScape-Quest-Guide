import type { QuestWalkthrough } from "../types";

export const theKnightsSword: QuestWalkthrough = {
  startPoint:
    "Talk to the Squire in the courtyard of the White Knights' Castle in Falador (the courtyard inside the central castle keep — climb the steps to the open courtyard with the soldiers training).",
  itemsRequired: [
    "Pickaxe (any kind — to mine blurite)",
    "Redberry pie (bake one or buy from the Grand Exchange / Aubury's bakery)",
    "2 Iron bars",
    "Blurite ore (mined in-quest from the ice dungeon)",
  ],
  recommended: [
    "Mining 10 (required to mine blurite ore)",
    "Armour and food: ice giants in the dungeon are level 53 and aggressive",
    "Combat bracelet, Falador teleport for fast travel",
  ],
  enemies: [
    "Ice giants (level 53) — wander the south end of the ice dungeon; usually avoidable around the walls",
    "Ice warriors (level 57) — also in the ice dungeon",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Falador (Falador teleport) and enter the White Knights' Castle in the centre of the city. Climb the steps into the central courtyard.",
        },
        {
          text: "Talk to the Squire — a young soldier wandering the courtyard between the training dummies. He's lost Sir Vyvin's ceremonial sword and asks you to replace it.",
        },
        {
          text: "He says the only person who can forge a replacement is an Imcando dwarf — they live south of Rimmington.",
        },
      ],
    },
    {
      title: "Find the Imcando dwarf",
      steps: [
        {
          text: "Travel to Rimmington (south-west of Falador) and walk south down the coast. Thurgo's small camp sits on the beach a short way south of Rimmington (the only inhabited camp on that southern beach).",
        },
        {
          text: "Talk to Thurgo at his beach hut — he refuses to help you initially.",
        },
        {
          text: "Bring him a redberry pie (he loves them). Hand it over and he becomes friendlier.",
        },
        {
          text: "Talk to Thurgo again — he explains he needs blurite ore and a picture of the original sword to forge a replica.",
        },
      ],
    },
    {
      title: "Get the sword picture",
      steps: [
        {
          text: "Return to the White Knights' Castle in Falador and talk to the Squire in the courtyard.",
        },
        {
          text: "Ask if he has a picture of the sword. He suggests his brother Reldo, the librarian at Varrock Palace, might have one.",
        },
        {
          text: "Travel to Varrock Palace (Varrock teleport, then walk into the palace). The library is on the ground floor of the palace, in the west wing. Talk to Reldo standing among the bookcases.",
        },
        {
          text: "Reldo gives you a picture of the sword.",
        },
      ],
    },
    {
      title: "Mine blurite ore",
      steps: [
        {
          text: "Travel to the ice dungeon — the trapdoor is on the south side of Asgarnian Ice Mountain (north of Falador, near where Wyson the gardener stands). The trapdoor is just south of the mountain peak.",
        },
        {
          text: "Climb down. Navigate carefully past the ice warriors and ice giants — hug the western wall to avoid most aggressive enemies.",
        },
        {
          text: "The blurite room is at the south end of the dungeon — small chamber with the distinctive blurite rocks.",
        },
        {
          text: "Mine 1 blurite ore (mine 2-3 spares in case of failure or ice giant interference).",
        },
        {
          text: "Climb back out via the trapdoor.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Thurgo at his beach hut south of Rimmington with the picture, blurite ore, and 2 iron bars.",
        },
        {
          text: "Talk to Thurgo — he forges the sword.",
        },
        {
          text: "Take the new sword back to the Squire in the White Knights' Castle courtyard in Falador.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "12,725 Smithing experience (one of the best early Smithing rewards in OSRS)",
    "Permission to forge blurite items via Thurgo (used in later quests like Knight's Sword's spin-off content)",
  ],
};
