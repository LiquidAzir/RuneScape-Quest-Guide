import type { QuestWalkthrough } from "../types";

export const theKnightsSword: QuestWalkthrough = {
  startPoint:
    "Talk to the Squire in the courtyard of the White Knights' Castle in central Falador. Falador Teleport (37 Magic) or a Falador tablet lands you at the central fountain — run west to the castle gates, then climb the steps into the open courtyard where the soldiers train. Without the teleport, take the boat/walk from Port Sarim or run north-west from Draynor Village.",
  itemsRequired: [
    "Pickaxe (any kind — to mine blurite)",
    "Redberry pie (bake one or buy from the Grand Exchange)",
    "2 Iron bars",
    "Blurite ore (mined in-quest from the Asgarnian Ice Dungeon)",
  ],
  recommended: [
    "Mining 10 (required to mine blurite ore)",
    "Armour and food: ice giants in the dungeon are level 53 and aggressive",
    "Falador teleports and a Port Sarim/Rimmington teleport for fast travel",
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
          text: "Talk to the Squire in the White Knights' Castle courtyard in Falador — he's lost Sir Vyvin's ceremonial sword and asks you to replace it.",
          travel:
            "Falador Teleport (37 Magic) or a Falador tablet drops you at the central fountain. Run west to the White Knights' Castle gates in the middle of the city, cross the entrance hall and climb the steps into the training courtyard — the Squire is the young soldier wandering between the training dummies.",
        },
        {
          text: "Continue the dialogue: the only smith who can forge a replacement is an Imcando dwarf, and they live on the coast south of Rimmington.",
        },
      ],
    },
    {
      title: "Find the Imcando dwarf",
      steps: [
        {
          text: "Talk to Thurgo at his hut on the south Asgarnian beach — he refuses to help you at first.",
          travel:
            "Fairy ring AIQ (Mudskipper Point) then run a short way west along the beach. No fairy ring: leave Falador by the south gate, follow the road south-west past Port Sarim to Rimmington, then run south down to the coast — Thurgo's hut is the only building on that southern beach, beside the Imcando anvil.",
        },
        {
          text: "Give Thurgo a redberry pie (he loves them) — he becomes friendly.",
        },
        {
          text: "Talk to Thurgo again — he needs blurite ore and a picture of the original sword to forge a replica.",
        },
      ],
    },
    {
      title: "Get the sword picture",
      steps: [
        {
          text: "Return to the Squire in the White Knights' Castle courtyard in Falador and ask about a picture of the sword.",
          travel:
            "Falador Teleport (37 Magic) or a Falador tablet, then run west to the White Knights' Castle and up into the training courtyard. Walking: head north from Rimmington through Port Sarim and take the road north-east to Falador's south gate.",
        },
        {
          text: "He suggests his brother Reldo, the librarian at Varrock Palace, might have one.",
        },
        {
          text: "Talk to Reldo among the bookcases in the Varrock Palace library.",
          travel:
            "Varrock Teleport (25 Magic) or a Varrock tablet to Varrock Square, then run north up the main street to the palace. The library is the big room in the palace's west wing on the ground floor — enter through the palace's western door and Reldo is pacing between the bookcases.",
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
          text: "Climb down the trapdoor into the Asgarnian Ice Dungeon on the south Asgarnian coast.",
          travel:
            "Fairy ring AIQ (Mudskipper Point), then run east along the coast — the trapdoor is on the shoreline a short way north-east of Thurgo's hut, south of Port Sarim. No fairy ring: run south out of Port Sarim along the coastal path and keep going until you spot the lone trapdoor near the water.",
        },
        {
          text: "Navigate carefully past the ice warriors and ice giants — hug the western wall to avoid most of the aggressive ones.",
        },
        {
          text: "The blurite room is the small chamber at the far south end of the dungeon, past the ice giants.",
        },
        {
          text: "Mine 1 blurite ore (grab 2-3 spares in case of interference).",
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
          text: "Return to Thurgo at his beach hut with the picture, blurite ore, and 2 iron bars.",
          travel:
            "From the ice dungeon trapdoor, run west/south-west along the beach — the hut is only a short run away. From elsewhere: fairy ring AIQ to Mudskipper Point and run west along the shore.",
        },
        {
          text: "Talk to Thurgo — he forges the sword.",
        },
        {
          text: "Take the new sword back to the Squire in the White Knights' Castle courtyard in Falador.",
          travel:
            "Falador Teleport (37 Magic) or a Falador tablet, then run west to the castle and up into the training courtyard. Walking: north through Rimmington and Port Sarim, then north-east to Falador's south gate.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "12,725 Smithing experience (one of the best early Smithing rewards in OSRS)",
    "Ability to have Thurgo smith blurite items for you",
  ],
};
