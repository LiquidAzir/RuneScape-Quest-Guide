import type { QuestWalkthrough } from "../types";

export const theFeud: QuestWalkthrough = {
  startPoint:
    "Talk to Ali Morrisane standing just east of the Gem Trader's stall in the Al Kharid market square. Amulet of glory (Al Kharid option) or ring of dueling to the Duel Arena then run north-west; otherwise Lumbridge Home Teleport and run north-east through the Al Kharid toll gate (10gp).",
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
          travel:
            "Amulet of glory to Al Kharid lands you at the Al Kharid bank; the market is the open stall area immediately west of it. Ring of dueling to the Duel Arena and run north-west also works, as does running east from Lumbridge through the toll gate (10gp).",
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
          text: "Travel to Pollnivneach, the desert village on the road south of Shantay Pass.",
          travel:
            "Run south from the Al Kharid market through Shantay Pass, then talk to the Rug merchant just inside the pass and pay 200gp for the magic carpet to Pollnivneach. No coins: follow the desert road south on foot from Shantay Pass — bring waterskins and desert robes, the heat drains run energy. The carpet sets you down at the north end of the village.",
        },
        {
          text: "Find Drunken Ali sitting just outside the central Pollnivneach pub and use 3 beers on him in turn.",
          travel:
            "From the carpet landing at the north end, run south down the main street to the middle of the village; the pub is the large building in the centre. Drunken Ali slumps against its outside wall. Buy more beer from Ali the Barman inside if you run short.",
        },
        {
          text: "Talk to the bandits near the Pollnivneach general store (south end of the village).",
          travel: "Continue south down the main street past the well; the general store is at the far south end.",
        },
        {
          text: "Question the Menaphite Thugs in the alley just west of the central pub.",
          travel: "Head back north to the pub and take the side street running west — the thugs patrol that alley.",
        },
      ],
    },
    {
      title: "Buy two camels",
      steps: [
        {
          text: "Talk to Ali the Camel Man at the camel paddock fence north-west of the central pub.",
          travel: "From the pub, run north-west; the paddock is the fenced enclosure with camels inside it.",
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
          text: "Enter the large purple Menaphite tent in south-west Pollnivneach and talk to Ali the Operator; join his gang.",
          travel: "From the camel paddock, run south along the western side of the village — the tent is the big purple one.",
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
          text: "Hide behind the cactus next to the mayor's house in northern Pollnivneach until the guards turn away.",
          travel:
            "Run back north up the main street to the large walled house at the north end of the village — the cactus is against its outer wall.",
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
        {
          text: "Take the jewels and give them to Ali the Operator in the purple tent.",
          travel: "Back south-west across the village to the big purple Menaphite tent.",
        },
      ],
    },
    {
      title: "Identify the traitor",
      steps: [
        { text: "Talk to Ali the Operator in the purple tent, then a Menaphite Thug in the alley west of the pub." },
        { text: "Talk to Ali the Barman inside the central Pollnivneach pub about Traitorous Ali." },
        {
          text: "Buy special sauce from the kebab seller in central Pollnivneach (his stall is north-west of the village well).",
          travel: "Step out of the pub and look north-west of the well in the middle of the village for his stall.",
        },
        {
          text: "Use the special sauce on the food trough behind the camel paddock north-west of the bar — the camels eat it and produce extra dung.",
          travel: "North-west from the pub to the camel paddock; the trough is against the far side of the fence.",
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
          text: "Use a coin on the snake charmer Ali's money pot — he gives you a snake charm + snake basket.",
          travel: "He sits cross-legged in the street a short way south of the central pub, with a basket in front of him.",
        },
        {
          text: "Find the desert snake just north of the purple Menaphite tent and use the snake charm on it to capture it in the basket.",
        },
        {
          text: "Take the basketed snake to Ali the Hag in the small house just north-west of the kebab seller.",
          travel: "From the kebab stall by the well, run north-west a few squares — hers is the small house with the cauldron.",
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
          text: "Walk into the central Pollnivneach pub and use the hag's poison on the beer on the front bar's centre table.",
          travel: "Back to the big building in the middle of the village; the table is in the front room by the bar.",
        },
        {
          text: "Defeat Tough Guy (level 75) inside the bar — safespot behind the bush near the door if needed.",
        },
        {
          text: "Defeat the Bandit champion (level 70) — he attacks after Tough Guy. Safespot behind a bar chair.",
        },
        {
          text: "Return to Ali Morrisane in the Al Kharid market square (east of the Gem Trader) to finish.",
          travel:
            "Take the magic carpet from the north end of Pollnivneach back to Shantay Pass and run north into Al Kharid, or use an amulet of glory (Al Kharid) / ring of dueling to the Duel Arena.",
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
