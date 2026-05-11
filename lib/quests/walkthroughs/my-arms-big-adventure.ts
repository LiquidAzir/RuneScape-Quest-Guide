import type { QuestWalkthrough } from "../types";

export const myArmsBigAdventure: QuestWalkthrough = {
  startPoint: "Talk to Burntmeat in the Troll Stronghold kitchen.",
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
        { text: "Travel to the Troll Stronghold kitchen." },
        { text: "Talk to Burntmeat in the Troll Stronghold kitchen." },
        { text: "Talk to My Arm (east of Burntmeat)." },
      ],
    },
    {
      title: "Get the goutweed",
      steps: [
        { text: "Travel to Death Plateau." },
        { text: "Use a bucket on the cooking pot to obtain a goutweedy lump." },
        { text: "Return to the Troll Stronghold." },
        { text: "Apply ugthanki dung + supercompost to the soil patch." },
        { text: "Talk to Captain Barnaby for boat passage." },
      ],
    },
    {
      title: "Get the tubers",
      steps: [
        { text: "Meet My Arm at Tai Bwo Wannai." },
        { text: "Talk to Murcaily (need 60% favour)." },
        { text: "Watch the cutscene; return to Ardougne." },
      ],
    },
    {
      title: "Defeat the rocs",
      steps: [
        { text: "Bring combat gear for two boss fights." },
        { text: "Climb to the Troll Stronghold roof." },
        { text: "Provide farming tools to My Arm." },
        { text: "Defeat Baby Roc and Giant Roc." },
        { text: "Return to Burntmeat in the Troll Stronghold kitchen with the final spade." },
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
