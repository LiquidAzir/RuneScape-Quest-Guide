import type { QuestWalkthrough } from "../types";

export const contact: QuestWalkthrough = {
  startPoint:
    "Talk to the High Priest of Icthlarin inside the Temple of Icthlarin in central Sophanem, the desert city far south of Pollnivneach. Pharaoh's sceptre teleports to Jalsavrah inside Sophanem itself; otherwise take the magic carpet from Shantay Pass to Pollnivneach and run south along the river past the Agility Pyramid to Sophanem's north gate. The temple is the large stone-pillared building in the middle of the city.",
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
          travel:
            "Pharaoh's sceptre to Jalsavrah drops you in Sophanem. On foot: Shantay Pass (south of Al Kharid), magic carpet to Pollnivneach, then run south along the eastern bank of the river past the Agility Pyramid and in through Sophanem's north gate. Carry waterskins and desert robes — the desert drains run energy fast.",
        },
        {
          text: "Talk to Jex inside the small house in the north-east corner of Sophanem (the only building with a trapdoor in its floor).",
          travel: "From the temple in the middle of the city, run north-east to the corner house against the city wall.",
        },
        {
          text: "Pick option 2 — 'Better get down there'.",
        },
      ],
    },
    {
      title: "Navigate the dungeon",
      steps: [
        { text: "Climb down the trapdoor in Jex's house, then the ladder below." },
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
          text: "Talk to Maisa at her small camp just outside Sophanem's walls (option 2 or 3).",
          travel:
            "Climb back out of the dungeon and leave Sophanem by the north gate, then run west along the outside of the wall — Maisa's camp is the cluster of tents north-west of the city, by the Menaphos canyon.",
        },
        {
          text: "Talk to Osman outside Al Kharid Palace (option 2 or 3).",
          travel:
            "Amulet of glory to Al Kharid, or ring of dueling to the Duel Arena then run north-west. Osman is the hooded figure standing in the market just south-west of the palace gates.",
        },
        {
          text: "Return to Sophanem — Osman now stands outside the city's north gate (option 3).",
          travel: "Pharaoh's sceptre to Jalsavrah then run out the north gate, or retrace the Pollnivneach carpet + southern desert run.",
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
        {
          text: "Talk to Osman outside Al Kharid Palace (option 2 or 3).",
          travel: "Amulet of glory to Al Kharid, or ring of dueling to the Duel Arena and run north-west to the palace market.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Pick up the Keris dagger (drops from the boss; needed for Desert Hard Diary).",
        },
        {
          text: "Return to Sophanem and talk to the High Priest inside the Temple of Icthlarin to finish.",
          travel: "Pharaoh's sceptre to Jalsavrah, then walk to the pillared temple in the centre of the city.",
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
