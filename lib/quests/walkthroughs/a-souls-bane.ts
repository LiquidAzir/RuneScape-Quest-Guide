import type { QuestWalkthrough } from "../types";

export const aSoulsBane: QuestWalkthrough = {
  startPoint:
    "Talk to Launa beside Tolna's rift east of Varrock, near the Earth altar ruins. Varrock Teleport, then run east out of the east gate and keep following the road towards the Digsite — the rift is the swirling hole just north of the road. A Digsite pendant teleport and a short run north-west also works.",
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
        {
          text: "Enter the rift, then equip weapons from the rack in the first chamber to match the enemy types you face.",
          travel:
            "Varrock Teleport, run east out of the Varrock east gate and follow the road east toward the Digsite; the rift is the swirling hole on the north side of the road by the Earth altar ruins. Tie your rope to it and climb down (Digsite pendant then run north-west is the alternative).",
        },
        { text: "Kill monsters until the rage bar fills." },
        { text: "Proceed through the east door after the cutscene." },
      ],
    },
    {
      title: "Room 2 — Fear",
      steps: [
        { text: "Search the dark holes around the room clockwise to flush out Fear reapers." },
        { text: "Defeat 5-6 reapers." },
        { text: "Enter the western black hole after the cutscene." },
      ],
    },
    {
      title: "Room 3 — Confusion",
      steps: [
        { text: "Attack the confusion beasts to find the real one." },
        { text: "Fake beasts vanish after 8 hits." },
        { text: "Use a fast weapon (bronze darts) to expedite." },
        { text: "Enter the remaining door after the cutscene." },
      ],
    },
    {
      title: "Room 4 — Hopelessness",
      steps: [
        { text: "Defeat all Hopeless creatures 3 times each." },
        { text: "Cross the bridge that forms at the far end of the room." },
      ],
    },
    {
      title: "Defeat Tolna",
      steps: [
        { text: "Complete the final dialogue before attacking." },
        { text: "Kill the 3 heads using protection prayers." },
        { text: "Talk to Tolna twice at the end of the rift east of Varrock." },
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
