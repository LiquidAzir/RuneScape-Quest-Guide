import type { QuestWalkthrough } from "../types";

export const aSoulsBane: QuestWalkthrough = {
  startPoint: "Talk to Launa east of Varrock, near the Earth Altar.",
  itemsRequired: ["Rope", "Weapon"],
  recommended: [
    "Combat 30+",
    "Some food",
    "Digsite pendant or teleport",
    "3-4 antidote++ or antipoison",
    "Armour",
    "Ranged or magic attack option",
    "Fast-attack weapon (bronze darts)",
  ],
  enemies: [
    "Angry creatures (level 40+) — unicorn, bear, giant rat, goblin",
    "Fear reapers (level 40+)",
    "Confusion beasts (level 40+)",
    "Hopeless creatures (level 40+)",
    "Tolna's three heads (level 46 each) — final boss",
  ],
  sections: [
    {
      title: "Room 1 — Anger",
      steps: [
        { text: "Equip weapons from the rack matching the enemy types." },
        { text: "Kill monsters until the rage bar fills." },
        { text: "Proceed east after the cutscene." },
      ],
    },
    {
      title: "Room 2 — Fear",
      steps: [
        { text: "Search dark holes clockwise for Fear reapers." },
        { text: "Defeat 5-6 reapers." },
        { text: "Enter the western black hole after the cutscene." },
      ],
    },
    {
      title: "Room 3 — Confusion",
      steps: [
        { text: "Attack confusion beasts to find the real one." },
        { text: "Fake beasts vanish after 8 hits." },
        { text: "Use a fast weapon (bronze darts) to expedite." },
        { text: "Enter the remaining door after the cutscene." },
      ],
    },
    {
      title: "Room 4 — Hopelessness",
      steps: [
        { text: "Defeat all Hopeless creatures 3 times each." },
        { text: "Cross the bridge." },
      ],
    },
    {
      title: "Defeat Tolna",
      steps: [
        { text: "Complete the final dialogue before attacking." },
        { text: "Kill 3 heads using protection prayers." },
        { text: "Talk to Tolna twice." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "500 Defence experience",
    "500 Hitpoints experience",
    "500 coins",
    "Access to Tolna's rift for combat training",
  ],
};
