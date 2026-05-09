import type { QuestWalkthrough } from "../types";

export const throneOfMiscellania: QuestWalkthrough = {
  startPoint: "Talk to King Vargas in Miscellania Castle (longboat from Rellekka or fairy ring CIP).",
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
        { text: "Travel to Miscellania (longboat from Rellekka)." },
        { text: "Buy flowers from the Flower Girl in Etceteria if needed." },
        { text: "Talk to King Vargas on the first floor of the south-west castle." },
        {
          text: "Woo Princess Astrid: use flowers, dance emote, blow kiss emote, then the gold ring.",
          notes: ["OR woo Prince Brand: use clap/cheer emote, flowers, cake, blow kiss emote, ring."],
        },
      ],
    },
    {
      title: "Get the treaty",
      steps: [
        { text: "Talk to Queen Sigrid in the east castle." },
        { text: "Return to King Vargas." },
        { text: "Talk to the Queen again." },
        { text: "Get the Awful anthem from Prince Brand." },
        { text: "Give the anthem to Advisor Ghrim — he turns it into the Good anthem." },
        { text: "Trade the Good anthem to the Queen for the Treaty." },
        { text: "Return the Treaty to King Vargas." },
      ],
    },
    {
      title: "Make the giant pen",
      steps: [
        { text: "Travel north to the anvil symbol." },
        { text: "Talk to Derrik with an iron bar in your inventory." },
        { text: "Receive the giant nib." },
        { text: "Combine the giant nib with logs to make a Giant pen." },
      ],
    },
    {
      title: "Earn 75% public support",
      steps: [
        {
          text: "Earn approval by performing tasks: buy 125 flowers (1,875gp), or chop maples, mine coal, fish, rake herbs/flax around the islands.",
        },
        { text: "Check progress periodically with Advisor Ghrim." },
        { text: "Once you reach 75% approval, talk to King Vargas to be crowned regent." },
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
