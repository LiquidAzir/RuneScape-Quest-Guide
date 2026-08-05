import type { QuestWalkthrough } from "../types";

export const gloriousMemories: QuestWalkthrough = {
  startPoint:
    "Talk to Brundt the Chieftain in the Rellekka longhall (the big hall in the north of the village). Enchanted lyre or Fremennik sea boots teleport straight to Rellekka; otherwise Camelot teleport and run north-west past the Sinclair Mansion. Requires Mountain Daughter, The Fremennik Trials and The Fremennik Isles.",
  itemsRequired: [
    "Coal",
    "Iron ore",
    "Tin ore",
    "Copper ore",
    "Mithril ore",
    "Silver ore",
    "Gold ore",
    "Adamantite ore",
    "Runite ore",
    "Bear fur (for the deathcoat)",
    "Coloured beads (red, yellow, green, blue, purple, white, black)",
    "Yew logs",
    "An untreated pile of Mort myre fungi",
  ],
  recommended: [
    "Combat 60+",
    "Many teleports — this quest sends you all over Gielinor",
    "Stamina potions",
    "Fairy ring access",
  ],
  enemies: [],
  sections: [
    {
      title: "Recover lost memories",
      steps: [
        {
          text: "Talk to Brundt in the Rellekka longhall — he wants to remember missing pieces of his past.",
          travel:
            "Play an enchanted lyre (or rub Fremennik sea boots 3+) to teleport to Rellekka. Without either: Camelot teleport, run north-west along the road past the Sinclair Mansion and over the river into Rellekka, or fairy ring CJR (east of Sinclair Mansion) then north-west. The longhall is the large timber hall in the north of the village.",
        },
        {
          text: "Visit the four other Fremennik chieftains on Jatizso, Neitiznot, Miscellania and around Rellekka.",
          travel:
            "For Jatizso and Neitiznot, talk to Maria Gunnars at the north-eastern Rellekka pier and pick the island you want. For Miscellania, take the sailor's boat from the northern Rellekka dock. Everything else is inside Rellekka itself.",
        },
        { text: "Complete the small task each chieftain sets to recover a lost memory." },
      ],
    },
    {
      title: "Brundt's deathcoat",
      steps: [
        {
          text: "Bring Brundt's wife the bear fur, beads and yew logs so she can make the ceremonial deathcoat.",
          travel:
            "She is in the Rellekka longhall with Brundt — enchanted lyre back to Rellekka and run north into the hall.",
        },
        { text: "Return the finished deathcoat to Brundt in the longhall." },
      ],
    },
    {
      title: "Forge the talismans",
      steps: [
        {
          text: "Smelt and combine the ores into the Sigmund symbols at the Fremennik forge.",
          travel:
            "The furnace and anvils are in Rellekka itself, a short run from the longhall — if you would rather use a bank-side furnace, Edgeville or Al Kharid are quicker for repeat trips.",
        },
        { text: "Use the finished symbols on Brundt's altar in the longhall." },
      ],
    },
    {
      title: "Final ritual",
      steps: [
        {
          text: "Brew the memory potion with the Mort myre fungi at the strange altar south of Rellekka.",
          travel:
            "From the longhall run south out of Rellekka past the market and the fishing spots; the altar sits on the open ground below the village. Pick the Mort myre fungi beforehand in Mort Myre swamp (fairy ring BKR, with a silver sickle (b) to bloom the rotting logs).",
        },
        { text: "Drink the potion in the Rellekka longhall to witness the final memory cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Significant Fremennik experience (Crafting + combat skills)",
    "Required for The Fremennik Exiles",
  ],
};
