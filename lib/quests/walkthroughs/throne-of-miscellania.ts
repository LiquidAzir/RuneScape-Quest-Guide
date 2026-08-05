import type { QuestWalkthrough } from "../types";

export const throneOfMiscellania: QuestWalkthrough = {
  startPoint:
    "Talk to King Vargas in Miscellania Castle, on the island north of Rellekka. Fairy ring CIP lands on Miscellania itself — run south to the castle. Otherwise play the enchanted lyre (or Camelot Teleport and run north past the Sinclair Mansion) to reach Rellekka, then take the longboat from the dock on the north-west shore and talk to the Sailor aboard to sail to Miscellania.",
  itemsRequired: [
    "Iron bar",
    "A common gold ring (silver doesn't work)",
    "Logs",
    "1,875 coins (for flowers) OR an axe (45 WC) / rake (10 Farming) / pickaxe (35 Mining) / harpoon or lobster pot (35 Fishing) — for the public-support phase",
  ],
  recommended: [
    "Cake (for Prince Brand)",
    "Bow (for Princess Astrid)",
    "Stamina/energy potions",
    "Dramen/Lunar staff for fairy ring travel",
  ],
  sections: [
    {
      title: "Win royal support",
      steps: [
        {
          text: "Travel to the island of Miscellania, north of Rellekka.",
          travel:
            "Fairy ring CIP puts you on Miscellania directly. No fairy ring: enchanted lyre to Rellekka (or Camelot Teleport then run north through the mountain pass past the Sinclair Mansion), walk to the dock on Rellekka's north-west shore and talk to the Sailor on the longboat to sail across.",
        },
        {
          text: "Buy flowers from the Flower Girl in Etceteria if you plan to woo with flowers.",
          travel:
            "Etceteria is the eastern island — from Miscellania Castle run east over the connecting bridge; the Flower Girl stands by her stall in the village outside Etceteria Castle.",
        },
        {
          text: "Talk to King Vargas on the first floor of Miscellania Castle in the west of the island.",
          travel:
            "From the fairy ring / longboat landing, run south-west to the castle, go in the main door and take the staircase up one floor to the throne room.",
        },
        {
          text: "Woo Princess Astrid in the castle: use flowers, the dance emote, the blow kiss emote, then the gold ring.",
          notes: ["OR woo Prince Brand: use clap/cheer emote, flowers, cake, blow kiss emote, ring."],
        },
      ],
    },
    {
      title: "Get the treaty",
      steps: [
        {
          text: "Talk to Queen Sigrid in Etceteria Castle on the eastern island.",
          travel:
            "Leave Miscellania Castle and run east across the bridge into Etceteria, then into the castle at the east of the village — Queen Sigrid is in the throne room.",
        },
        {
          text: "Return to King Vargas in Miscellania Castle.",
          travel: "Run back west over the bridge and into Miscellania Castle, then upstairs to the throne room.",
        },
        { text: "Talk to Queen Sigrid inside Etceteria Castle again." },
        { text: "Get the Awful anthem from Prince Brand in Miscellania Castle." },
        { text: "Give the anthem to Advisor Ghrim, also in Miscellania Castle — he turns it into the Good anthem." },
        { text: "Trade the Good anthem to Queen Sigrid in Etceteria for the Treaty." },
        { text: "Return the Treaty to King Vargas in Miscellania Castle." },
      ],
    },
    {
      title: "Make the giant pen",
      steps: [
        {
          text: "Talk to Derrik the dwarf at the anvil with an iron bar in your inventory.",
          travel:
            "From Miscellania Castle run north to the anvil icon on the minimap — Derrik is the dwarf standing beside it.",
        },
        { text: "Receive the giant nib." },
        { text: "Combine the giant nib with logs to make a Giant pen." },
      ],
    },
    {
      title: "Earn 75% public support",
      steps: [
        {
          text: "Earn approval around the two islands: buy 125 flowers (1,875gp) from the Etceteria Flower Girl, or chop maples, mine coal, fish, and rake herbs/flax around Miscellania and Etceteria.",
        },
        { text: "Check your progress periodically with Advisor Ghrim in Miscellania Castle." },
        { text: "Once you reach 75% approval, talk to King Vargas upstairs in Miscellania Castle to be crowned regent." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Managing Miscellania (a passive daily-resource minigame — gold/herbs/flax/coal/maple logs daily)",
    "10,000 coins in Miscellania coffers to start",
    "Ring of wealth teleport to Miscellania",
  ],
};
