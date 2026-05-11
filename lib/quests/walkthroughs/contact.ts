import type { QuestWalkthrough } from "../types";

export const contact: QuestWalkthrough = {
  startPoint:
    "Talk to the High Priest of Icthlarin inside the Temple of Icthlarin in central Sophanem (the desert city south of Pollnivneach — Pharaoh's sceptre → Sophanem, or magic carpet from Shantay Pass to Pollnivneach + walk south). The temple is the large stone-pillared building in the centre of the city.",
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
        {
          text: "Talk to the High Priest inside the Temple of Icthlarin in central Sophanem (chat option 1 or 4).",
        },
        {
          text: "Walk to the building in the north-east corner of Sophanem (the small house in the north-east — Jex's house, the only building with a trapdoor in the floor). Talk to Jex inside.",
        },
        {
          text: "Pick option 2 — 'Better get down there'.",
        },
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
        {
          text: "In the deep western chamber of the dungeon, search Kaleef's body on the floor for a parchment.",
        },
        {
          text: "Read the parchment.",
        },
        {
          text: "Travel west of Sophanem to Maisa's small camp just outside the city walls (north-west of Sophanem near the Menaphos canyon). Talk to Maisa (option 2 or 3).",
        },
        {
          text: "Travel to Al Kharid Palace and talk to Osman in the central market square just south-west of the palace (the hooded NPC). Pick option 2 or 3.",
        },
        {
          text: "Return to Sophanem and talk to Osman, who now stands outside the north gate of the city (option 3).",
        },
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
        { text: "Talk to Osman at Al Kharid Palace (option 2 or 3)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Pick up the Keris dagger (drops from the boss; needed for Desert Hard Diary).",
        },
        {
          text: "Climb back out of the dungeon and return to Sophanem. Talk to the High Priest inside the Temple of Icthlarin to finish.",
        },
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
