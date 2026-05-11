import type { QuestWalkthrough } from "../types";

export const theFeud: QuestWalkthrough = {
  startPoint:
    "Talk to Ali Morrisane standing just east of the Gem Trader's stall in the Al Kharid market square (the open-air market in central Al Kharid).",
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
        {
          text: "Talk to Ali Morrisane in the Al Kharid market square (east of the Gem Trader).",
        },
        {
          text: "Buy a Kharidian headpiece and a fake beard from his stall; combine the two into a desert disguise.",
        },
      ],
    },
    {
      title: "Pollnivneach groundwork",
      steps: [
        {
          text: "Travel to Pollnivneach (magic carpet from Shantay Pass to Pollnivneach, ~200gp). It's the desert village south of the Shantay Pass entrance.",
        },
        {
          text: "Find Drunken Ali sitting just outside the central Pollnivneach pub (Ali the Barman's bar in the village centre). Use 3 beers on Drunken Ali in turn (buy more beer from Ali the Barman inside the pub if needed).",
        },
        {
          text: "Talk to the bandits near the Pollnivneach general store (south end of the village).",
        },
        {
          text: "Question the Menaphite Thugs in the area just west of the central pub (they wander the alley west of the bar).",
        },
      ],
    },
    {
      title: "Buy two camels",
      steps: [
        {
          text: "Walk north-west of the central pub to the camel paddock. Talk to Ali the Camel Man at the paddock fence.",
        },
        {
          text: "Buy 2 camels from Ali the Camel Man for 500gp each (you receive 2 camel receipts).",
        },
        {
          text: "Give one camel receipt to a Menaphite Thug west of the bar, and the other to a bandit south near the general store.",
        },
      ],
    },
    {
      title: "Join the Menaphite gang and steal jewels",
      steps: [
        {
          text: "Walk to the large purple tent in south-west Pollnivneach (south of the camel paddock); enter and talk to Ali the Operator. Join his gang.",
        },
        {
          text: "Pickpocket any villager (level 2 villagers wander the streets), then return and consult Ali the Operator inside the purple tent.",
        },
        {
          text: "Find a street urchin (the small kid wandering the streets) and pay 10gp for advice on which villager to target.",
        },
        {
          text: "Pickpocket the marked villager (the urchin tells you who).",
        },
        {
          text: "Equip the oak blackjack Ali the Operator gives you. Use it to knock out a villager and then pickpocket them.",
        },
        {
          text: "Wear the desert disguise (Kharidian headpiece + fake beard) + leather gloves before approaching the mayor's house.",
        },
        {
          text: "Hide behind a cactus next to the mayor's house (the large house in northern Pollnivneach) until the guards turn away.",
        },
        {
          text: "Use the stolen keys on the mayor's house door, then climb the stairs to the upper floor.",
        },
        {
          text: "Inside the upper bedroom, search the landscape painting hanging on the wall near the bed.",
        },
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
        {
          text: "Buy special sauce from the kebab seller in central Pollnivneach (his stall is north-west of the village well).",
        },
        {
          text: "Walk behind the camel paddock north-west of the bar and use the special sauce on the food trough — the camels eat it and produce extra dung.",
        },
        {
          text: "Wait at the camel paddock and use a bucket on the camel dung pile to collect Ugthanki dung (need 1+).",
        },
      ],
    },
    {
      title: "Capture a snake",
      steps: [
        {
          text: "Walk to the snake charmer Ali sitting south of the central bar and use a coin on his money pot — he gives you a snake charm + snake basket.",
        },
        {
          text: "Find the desert snake just north of the Menaphite tent (the purple-coloured tent in central Pollnivneach) and use the snake charm on it to capture it in the basket.",
        },
        {
          text: "Take the basketed snake to Ali the Hag (the old woman in the small house just north-west of the kebab seller).",
        },
        {
          text: "Trade the snake basket + Ugthanki dung to Ali the Hag for her poison.",
        },
      ],
    },
    {
      title: "Final fights",
      steps: [
        {
          text: "Walk into the central Pollnivneach bar and use the hag's poison on the beer on the bar table (the front bar's centre table).",
        },
        {
          text: "Defeat Tough Guy (level 75) inside the bar — safespot behind the bush near the door if needed.",
        },
        {
          text: "Defeat the Bandit champion (level 70) — he attacks after Tough Guy. Safespot behind a bar chair.",
        },
        {
          text: "Return to Ali Morrisane in the Al Kharid market square (east of the Gem Trader) to finish.",
        },
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
