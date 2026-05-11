import type { QuestWalkthrough } from "../types";

export const gloriousMemories: QuestWalkthrough = {
  startPoint: "Talk to Brundt the Chieftain in the Rellekka longhall (after Mountain Daughter, The Fremennik Trials, The Fremennik Isles, etc).",
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
        { text: "Talk to Brundt in the Rellekka longhall — he wants to remember missing pieces of his past." },
        {
          text: "Visit each of the four other Fremennik chieftains across Rellekka, Jatizso, Neitiznot, and Miscellania.",
        },
        { text: "Each chieftain gives you a small task to recover a lost memory." },
      ],
    },
    {
      title: "Brundt's deathcoat",
      steps: [
        { text: "Bring Brundt's wife the bear fur, beads and yew logs to make the ceremonial deathcoat." },
        { text: "Return the deathcoat to Brundt." },
      ],
    },
    {
      title: "Forge the talismans",
      steps: [
        {
          text: "Smelt and combine the various ores into the Sigmund symbols at the Fremennik forge.",
        },
        { text: "Use the symbols on Brundt's altar." },
      ],
    },
    {
      title: "Final ritual",
      steps: [
        {
          text: "Use the Mort myre fungi to brew the memory potion at the strange altar south of Rellekka.",
        },
        { text: "Drink the potion in the longhall to witness the final memory cutscene." },
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
