import type { QuestWalkthrough } from "../types";

export const contact: QuestWalkthrough = {
  startPoint: "Talk to the High Priest of Icthlarin in Sophanem.",
  itemsRequired: [
    "A reliable light source (Bullseye lantern or better — Kandarin headgear/Firemaking cape/Bruma torch ideal)",
    "Tinderbox (unless using a non-extinguishable light)",
    "Combat gear and food",
    "Antipoison",
    "Desert robes + Waterskins",
    "Shantay pass",
    "Pharaoh's sceptre or Nardah teleport for return trip",
  ],
  recommended: [
    "Combat 70+",
    "50 Agility and Thieving for shortcuts",
    "40-43 Prayer + Prayer potions",
    "Ring of dueling or Amulet of glory",
    "Emergency teleport in case the boss kills you",
  ],
  enemies: [
    "Giant Scarab (level 191) — boss",
    "Locust riders (level 68)",
    "Scarab Mages (level 119 / 66)",
  ],
  sections: [
    {
      title: "Initial dialogue",
      steps: [
        { text: "Talk to the High Priest in Sophanem (option 1 or 4)." },
        { text: "Walk to the north-eastern building and talk to Jex." },
        { text: "Pick option 2 — 'Better get down there'." },
      ],
    },
    {
      title: "Navigate the dungeon",
      steps: [
        { text: "Climb down the ladder, then the trapdoor in the building." },
        {
          text: "Follow the red line on the map to the next ladder, avoiding the scarab trap (don't step under it).",
        },
        {
          text: "Carefully navigate floor traps, wall traps, crusher blocks, and sand pits.",
          notes: ["Turn off auto-retaliate to avoid being pulled into traps."],
        },
      ],
    },
    {
      title: "Gather information",
      steps: [
        { text: "Search Kaleef's body deep in the dungeon." },
        { text: "Read the parchment you find." },
        { text: "Talk to Maisa west of the dungeon (option 2 or 3)." },
        { text: "Talk to Osman at Al Kharid Palace (option 2 or 3)." },
        { text: "Return to Sophanem and talk to Osman outside the gates (option 3)." },
      ],
    },
    {
      title: "Defeat the Giant Scarab",
      steps: [
        { text: "Navigate the tunnels back to the boss ladder." },
        { text: "Fight the Giant Scarab (level 191)." },
        {
          text: "Use Protect from Missiles or Melee depending on its attack style.",
          notes: ["Scarab Mages and Locust riders spawn during the fight — kill or run from them."],
        },
        { text: "Defeat the boss." },
        { text: "Talk to Osman." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Pick up the Keris dagger (drops from the boss; needed for Desert Hard Diary)." },
        { text: "Return to Sophanem and talk to the High Priest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "7,000 Thieving experience",
    "Combat lamp (2 × 7,000 XP in chosen combat skill)",
    "Keris dagger (huge bonus damage vs. kalphites)",
    "Access to Sophanem shops",
  ],
};
