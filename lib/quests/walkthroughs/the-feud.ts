import type { QuestWalkthrough } from "../types";

export const theFeud: QuestWalkthrough = {
  startPoint: "Talk to Ali Morrisane east of the Gem Trader in Al Kharid.",
  itemsRequired: [
    "501+ coins",
    "Gloves (specific types only — leather is fine)",
    "Kharidian headpiece + fake beard (combine into desert disguise)",
    "3 beers",
    "Bucket(s) for Ugthanki dung",
    "Snake basket (you'll get the snake charm in-quest)",
  ],
  recommended: [
    "Combat 40+",
    "Stamina/energy potions",
    "Some food",
    "Ring of dueling or Amulet of glory for fast travel",
    "Magic carpet to Pollnivneach",
    "Ring of Charos (a) for cheaper camels",
  ],
  enemies: [
    "Tough Guy (level 75) — safespot behind the bush",
    "Bandit champion (level 70) — safespot behind a chair",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Ali Morrisane in Al Kharid." },
        { text: "Buy a Kharidian headpiece and a fake beard from him; combine into a desert disguise." },
      ],
    },
    {
      title: "Pollnivneach groundwork",
      steps: [
        { text: "Travel to Pollnivneach (magic carpet from Shantay Pass)." },
        { text: "Use 3 beers on Drunken Ali (buy more from Ali the Barman if needed)." },
        { text: "Talk to bandits near the general store." },
        { text: "Question the Menaphite Thugs west of the bar." },
      ],
    },
    {
      title: "Buy two camels",
      steps: [
        { text: "Visit the camel store north-west of the bar." },
        { text: "Buy 2 camels from Ali the Camel Man for 500gp each." },
        { text: "Give a camel receipt to a Menaphite and to a bandit." },
      ],
    },
    {
      title: "Join the Menaphite gang and steal jewels",
      steps: [
        { text: "Go to the purple tent in the south-west and join Ali the Operator's gang." },
        { text: "Pickpocket a villager once; consult Ali the Operator." },
        { text: "Pay a street urchin 10gp for advice." },
        { text: "Pickpocket the marked villager." },
        { text: "Equip the oak blackjack Ali gives you. Knock out a villager and pickpocket them." },
        { text: "Wear the desert disguise + gloves." },
        { text: "Hide behind a cactus near the mayor's house." },
        { text: "Use the keys on the door, go upstairs." },
        { text: "Search the landscape painting near the bed." },
        {
          text: "Input the dial code: 1, 1, 2, 3, 5, 8 (Fibonacci).",
        },
        { text: "Take the jewels and give them to Ali the Operator." },
      ],
    },
    {
      title: "Identify the traitor",
      steps: [
        { text: "Talk to Ali the Operator in Pollnivneach, then a Menaphite Thug in Pollnivneach." },
        { text: "Talk to Ali the Barman in the Pollnivneach bar about Traitorous Ali." },
        { text: "Buy special sauce from the kebab seller (north-west of the well)." },
        { text: "Use the sauce on the trough behind the camel shop." },
        { text: "Collect Ugthanki dung in a bucket(s)." },
      ],
    },
    {
      title: "Capture a snake",
      steps: [
        { text: "Use a coin on the snake charmer's money pot south of the bar to get a snake charm + snake basket." },
        { text: "Use the snake charm on the desert snake north of the Menaphite tent." },
        { text: "Take the snake to Ali the Hag (north-west of the kebab seller)." },
        { text: "Trade the snake basket and Ugthanki dung for the hag's poison." },
      ],
    },
    {
      title: "Final fights",
      steps: [
        { text: "Poison the beer on the bar table." },
        { text: "Defeat Tough Guy (level 75)." },
        { text: "Defeat the Bandit champion (level 70)." },
        { text: "Return to Ali Morrisane in Al Kharid." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "15,000 Thieving experience",
    "500 coins",
    "Oak blackjack + Willow blackjack",
    "Adamant scimitar",
    "Desert disguise (free passage)",
    "Ability to pickpocket Pollnivneach villagers, bandits and Menaphite thugs",
  ],
};
