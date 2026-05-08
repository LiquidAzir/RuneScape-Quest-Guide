import type { QuestWalkthrough } from "../types";

export const lostCity: QuestWalkthrough = {
  startPoint: "Talk to the Warrior at the campsite north-west of Lumbridge Swamp.",
  itemsRequired: ["Knife", "Woodcutting axe (a bronze axe drops in the dungeon)"],
  recommended: [
    "Combat 45+ recommended for the Tree Spirit fight",
    "No weapons or armour are allowed on Entrana — bring food, runes (Crumble Undead is great), and prayer potions only",
    "Weight-reducing clothing and stamina/energy potions",
    "Teleport for fast escape",
  ],
  enemies: [
    "Zombies (level 25) in Entrana dungeon",
    "Greater demons (level 92) — can be safespotted/avoided",
    "Tree Spirit (level 101)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the campsite north-west of Lumbridge Swamp and talk to the Warrior." },
        { text: "Talk to the other adventurers (Monk, Leprechaun, Shamus) — keep going through dialogue until the Leprechaun mentions the tree." },
        {
          text: "Find the small tree near the camp (the one closest to the fire) and use the Chop option (not Chop down).",
          notes: ["This makes Shamus appear."],
        },
        { text: "Talk to Shamus to learn about the entrance to Zanaris." },
      ],
    },
    {
      title: "Prepare for Entrana",
      steps: [
        {
          text: "Bank ALL weapons and armour (you cannot land on Entrana with any combat gear).",
          notes: ["Jewellery and runes are allowed. Food is essential."],
        },
        { text: "Take the boat to Entrana from Port Sarim docks (talk to the Monk of Entrana)." },
      ],
    },
    {
      title: "Get a Dramen branch",
      steps: [
        { text: "On Entrana, head north-east, cross the bridge, then west to the Cave entrance and climb down the ladder." },
        {
          text: "Kill zombies until one drops a bronze axe (~40% drop rate).",
          notes: ["This axe is the only one you'll be able to use here since you couldn't bring one in."],
        },
        { text: "Carefully run south-east past the greater demons to the lone Dramen tree." },
        {
          text: "Try to chop the tree to spawn the Tree Spirit (level 101) and defeat it.",
          notes: [
            "You can safespot the spirit behind the southern fungus growth.",
            "Crumble Undead spell is highly effective if you have Magic 39+.",
          ],
        },
        { text: "Chop the Dramen tree to get a Dramen branch." },
        { text: "Teleport out (or run back to the surface and sail back to the mainland)." },
      ],
    },
    {
      title: "Open the Zanaris portal",
      steps: [
        { text: "Use a knife on the Dramen branch to make a Dramen staff." },
        { text: "Travel to the Lumbridge Swamp and find the small tool shed in the centre of the swamp." },
        { text: "Equip the Dramen staff and enter the shed door — you're teleported into Zanaris." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Access to Zanaris (and the cosmic altar, fairy ring network, Puro-Puro)",
    "Ability to wield Dragon longswords and Dragon daggers (with 60 Attack)",
  ],
};
