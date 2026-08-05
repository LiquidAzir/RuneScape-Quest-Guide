import type { QuestWalkthrough } from "../types";

export const scorpionCatcher: QuestWalkthrough = {
  startPoint:
    "Talk to Thormac on the top floor of the Sorcerer's Tower (south-east of the Ranging Guild, south of Seers' Village). Camelot Teleport, then run south down the road out of Seers' Village and follow it south-west to the tower; climb all the staircases to the top.",
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
        {
          text: "Talk to Thormac on the top floor of the Sorcerer's Tower.",
          travel:
            "Camelot Teleport (45 Magic) lands you at Camelot; run west into Seers' Village, then south down the road and south-west across the fields to the lone tower. Combat bracelet to the Ranging Guild also works — the tower is a short run south-east from there. Climb the tower's staircases to the top floor for Thormac.",
        },
        {
          text: "Visit a Seer in the seers' house in Seers' Village (wait for the mirror check).",
          travel: "Run north-east back to Seers' Village — the seers' house is the building beside the Seers' Village bank, with three seers inside.",
        },
        { text: "Confirm you'll catch the scorpions." },
      ],
    },
    {
      title: "Scorpion 1 — Taverley Dungeon",
      steps: [
        {
          text: "Enter Taverley Dungeon and get a dusty key if your Agility is under 70 (kill the Jailer in the jail cells past the Black Knights).",
          travel:
            "Falador Teleport, then run west out of Falador's west gate and through the wall gate into Taverley; the dungeon entrance is the ladder inside the small fenced pen at the south-west edge of the village. Bring an anti-dragon shield — the deep section is full of blue dragons.",
        },
        { text: "Navigate to the poison spider area of the dungeon (through the dusty key door, or the pipe shortcut if you have the Agility)." },
        { text: "Search the old wall near the poison spiders to reveal the scorpion." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Scorpion 2 — Barbarian Outpost",
      steps: [
        {
          text: "Travel to the Barbarian Outpost north-west of Seers' Village.",
          travel:
            "Games necklace teleports straight to the Barbarian Outpost (right by the Agility course gate). No necklace: Camelot Teleport, run west through Seers' Village and then north-west along the coast road past Baxtorian Falls.",
        },
        { text: "Enter the fenced area near the Agility course entrance." },
        { text: "Go to the building in the north-east corner of the outpost." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Scorpion 3 — Edgeville Monastery",
      steps: [
        {
          text: "Travel to the Edgeville Monastery between Edgeville and Falador.",
          travel:
            "Combat bracelet teleports directly to the Monastery. No bracelet: amulet of glory to Edgeville and run west along the road past the Black Knights' Fortress turn-off — the Monastery is the walled church south of the road at the foot of Ice Mountain. You need 31 Prayer to get in.",
        },
        { text: "Climb the eastern ladder inside the monastery (say you want to join if a monk stops you)." },
        { text: "Go to the east side of the upper floor." },
        { text: "Use the scorpion cage on the Kharid Scorpion." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return the full scorpion cage to Thormac at the top of the Sorcerer's Tower.",
          travel: "Camelot Teleport, run west into Seers' Village then south-west across the fields to the tower, and climb to the top floor.",
        },
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
