import type { QuestWalkthrough } from "../types";

export const rfdKingAwowogei: QuestWalkthrough = {
  startPoint: "Inspect King Awowogei in the Lumbridge Castle dining room.",
  itemsRequired: [
    "M'speak amulet",
    "Karamjan monkey greegree",
    "3 monkey talismans (buy from rune shop) — used to make new greegrees",
    "Rope",
    "Knife or slashing weapon",
    "Pestle and mortar",
    "Bananas + monkey nuts",
  ],
  recommended: [
    "Combat 65+",
    "Antipoison + stamina + prayer potions",
    "Sharks/anglers",
    "Ranged or magic for the snake fight",
    "70 Cooking for the final stuffed snake",
  ],
  enemies: [
    "Big Snakes (level 84) on Crash Island",
    "Zombie monkey (level 82/129)",
    "Monkey guard (level 167)",
    "Monkey archer (level 86)",
  ],
  sections: [
    {
      title: "Talk to Awowogei on Ape Atoll",
      steps: [
        { text: "Travel to Ape Atoll with the karamjan monkey greegree + M'speak amulet." },
        { text: "Talk to King Awowogei in his palace." },
        { text: "Talk to 3 monkeys in the temple's north-west corner." },
        { text: "Use a banana and monkey nuts on them as needed." },
      ],
    },
    {
      title: "Make new greegrees",
      steps: [
        {
          text: "Buy 3 blank monkey talismans from the rune shop.",
        },
        { text: "Kill a monkey archer, monkey guard, and zombie monkey for their bones." },
        { text: "Bring the bones + talismans to Zooknock in the dungeon — he makes the 3 new greegrees." },
      ],
    },
    {
      title: "Catch big snakes",
      steps: [
        { text: "Travel to Crash Island via the Daero/Waydar route." },
        { text: "Activate Protect from Melee." },
        { text: "Kill at least 3 Big Snakes (level 84) for snake corpses." },
      ],
    },
    {
      title: "Stuff the snake",
      steps: [
        { text: "Use the gorilla greegree and pick red bananas." },
        { text: "Use the ninja monkey greegree to navigate the agility course and collect tchiki nuts." },
        { text: "Grind the tchiki nuts; slice the red banana with a knife." },
        { text: "Combine red banana, ground tchiki nuts and snake corpse to stuff the snake." },
        { text: "Cook the stuffed snake on the dungeon range (70 Cooking)." },
      ],
    },
    {
      title: "Deliver",
      steps: [
        { text: "Wear the M'speak amulet and deliver the stuffed snake to King Awowogei." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 Cooking experience",
    "10,000 Agility experience",
    "Ape Atoll Teleport spell unlock",
    "King Awowogei freed",
  ],
};
