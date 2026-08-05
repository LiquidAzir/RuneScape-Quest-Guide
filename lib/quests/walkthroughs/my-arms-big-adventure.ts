import type { QuestWalkthrough } from "../types";

export const myArmsBigAdventure: QuestWalkthrough = {
  startPoint:
    "Talk to Burntmeat in the Troll Stronghold kitchen. Trollheim Teleport (61 Magic) drops you on the mountain — run north-west and down to the stronghold's main door. Without the spell: Games necklace to Burthorpe, buy climbing boots from Tenzing's hut west of town, run east up the Death Plateau path, then east across the plateau and up Trollheim to the stronghold entrance.",
  itemsRequired: [
    "Climbing boots (or 12gp from Tenzing)",
    "3 Ugthanki dung",
    "7 Supercompost",
    "Spade + Rake + Seed dibber",
    "Plant cure",
    "Empty bucket",
  ],
  recommended: [
    "Combat 55+",
    "43+ Prayer for protection prayers",
    "61+ Magic for Trollheim Teleport",
    "Stamina/energy potions",
    "Some food + armour",
  ],
  enemies: [
    "Baby Roc (level 75)",
    "Giant Roc (level 172)",
  ],
  sections: [
    {
      title: "Help My Arm",
      steps: [
        {
          text: "Travel to the Troll Stronghold and go through to the kitchen.",
          travel:
            "Trollheim Teleport, then run north-west off the peak and down to the stronghold's main door. No teleport: Games necklace to Burthorpe, grab climbing boots at Tenzing's hut, take the Death Plateau path east, then cross to Trollheim. Inside the stronghold, head north-west through the main hall past the prison to the kitchen.",
        },
        { text: "Talk to Burntmeat, the troll cook standing at the kitchen's cooking pot." },
        { text: "Talk to My Arm, the small troll standing just east of Burntmeat in the same kitchen." },
      ],
    },
    {
      title: "Get the goutweed",
      steps: [
        {
          text: "Travel to Death Plateau, west of Trollheim.",
          travel:
            "Leave the stronghold by the main door and run west down the mountain, or Games necklace to Burthorpe and run east past Tenzing's hut up the Death Plateau path. Climbing boots are required for the rocks either way.",
        },
        { text: "Use a bucket on the troll cooking pot to obtain a goutweedy lump." },
        {
          text: "Return to the Troll Stronghold kitchen.",
          travel:
            "Run back east across Death Plateau and up Trollheim to the stronghold door, or Trollheim Teleport and drop down north-west.",
        },
        { text: "Apply ugthanki dung + supercompost to the soil patch on the stronghold roof." },
        {
          text: "Talk to Captain Barnaby at the Ardougne docks for boat passage to Karamja (30gp).",
          travel:
            "Ardougne Teleport to the East Ardougne market square, then run south-west to the docks on the city's west shore — Barnaby stands beside his ship.",
        },
      ],
    },
    {
      title: "Get the tubers",
      steps: [
        {
          text: "Meet My Arm at Tai Bwo Wannai on Karamja.",
          travel:
            "Barnaby's boat lands you at Brimhaven; run south-east along the jungle path to Tai Bwo Wannai village. If you've done Shilo Village, Hajedy's cart at the Brimhaven dock will take you south instead.",
        },
        {
          text: "Talk to Murcaily by the hardwood grove south-east of Tai Bwo Wannai (need 60% village favour).",
          travel:
            "From the centre of Tai Bwo Wannai follow the path south-east to the fenced hardwood grove; Murcaily stands outside the grove gates.",
        },
        { text: "Watch the cutscene; you are returned to Ardougne afterwards." },
      ],
    },
    {
      title: "Defeat the rocs",
      steps: [
        { text: "Bring combat gear for two boss fights." },
        {
          text: "Climb to the Troll Stronghold roof where My Arm's herb patch is.",
          travel:
            "Trollheim Teleport, drop down north-west to the stronghold door, then take the stairs up from inside the stronghold to the roof patch.",
        },
        { text: "Provide the farming tools (spade, rake, seed dibber, plant cure) to My Arm." },
        { text: "Defeat Baby Roc, then the Giant Roc when it lands on the roof." },
        {
          text: "Return to Burntmeat in the Troll Stronghold kitchen with the final spade.",
          travel: "Head back down the stronghold stairs and north-west into the kitchen.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 Herblore experience",
    "5,000 Farming experience",
    "Disease-free herb patch on the Troll Stronghold roof",
    "Agility shortcut unlock",
  ],
};
