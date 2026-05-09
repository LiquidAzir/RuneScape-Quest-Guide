import type { QuestWalkthrough } from "../types";

export const scorpionCatcher: QuestWalkthrough = {
  startPoint: "Talk to Thormac at the top floor of the Sorcerer's Tower (south-east of the Ranging Guild).",
  itemsRequired: [
    "Scorpion cage (Thormac gives you one)",
    "Dusty key (if Agility < 70)",
  ],
  recommended: [
    "Combat 40+",
    "Anti-dragon shield + antifire potion",
    "Antipoison",
    "Some food + armour",
    "Stamina/energy potions",
  ],
  enemies: ["Jailer (level 47) — optional, drops dusty key"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Thormac at the Sorcerer's Tower." },
        { text: "Visit a Seer in Seers' Village (wait for the mirror check)." },
        { text: "Confirm you'll catch the scorpions." },
      ],
    },
    {
      title: "Scorpion 1 — Taverley Dungeon",
      steps: [
        { text: "Get a dusty key (kill the Jailer or grab one from the dungeon)." },
        { text: "Enter Taverley Dungeon and navigate to the poison spider area." },
        { text: "Search the old wall south of the level 80 Agility shortcut." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Scorpion 2 — Barbarian Outpost",
      steps: [
        { text: "Travel to the Barbarian Outpost." },
        { text: "Enter the fenced area near the Agility course entrance." },
        { text: "Go to the building in the north-east corner." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Scorpion 3 — Edgeville Monastery",
      steps: [
        { text: "Travel to Edgeville Monastery." },
        { text: "Climb the eastern ladder (say you want to join if stopped)." },
        { text: "Go to the east side of the floor." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return the full scorpion cage to Thormac." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "6,625 Strength experience",
    "Access to Thormac's battlestaff enchanting service (40,000gp)",
  ],
};
