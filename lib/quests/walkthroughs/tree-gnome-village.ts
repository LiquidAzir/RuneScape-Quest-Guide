import type { QuestWalkthrough } from "../types";

export const treeGnomeVillage: QuestWalkthrough = {
  startPoint: "Enter the Tree Gnome Village maze (south of Castle Wars) and follow the path to King Bolren in the centre.",
  itemsRequired: ["6 Normal logs", "Combat gear", "Food"],
  recommended: [
    "Combat 45+ recommended (Khazard warlord is level 112)",
    "Range or magic for safespotting the warlord",
    "Stamina potion",
    "Castle Wars or Spirit tree teleport for fast travel later",
  ],
  enemies: [
    "Khazard warlord (level 112) — the boss, can be safespotted",
    "Khazard troopers (level 33) and commanders (level 48) — usually avoidable",
  ],
  sections: [
    {
      title: "Start the quest and meet the gnomes",
      steps: [
        {
          text: "Enter the Tree Gnome Village maze and follow the path to King Bolren in the centre.",
          notes: ["The maze entrance is on the north side. Talk to Elkoy at the entrance — he can lead you through."],
        },
        { text: "Talk to King Bolren in the centre of Tree Gnome Village and agree to help the gnomes." },
        { text: "Have Elkoy guide you back out of the maze." },
        { text: "Walk south-west to the Khazard battlefield." },
        { text: "Talk to Commander Montai at the gnome encampment on the western edge." },
        { text: "Give him 6 normal logs to fortify the camp." },
      ],
    },
    {
      title: "Find the three tracker gnomes",
      steps: [
        {
          text: "Find Tracker gnome 1 wandering north-west of the Khazard stronghold.",
        },
        {
          text: "Find Tracker gnome 2 inside one of the small buildings east of the stronghold.",
        },
        {
          text: "Find Tracker gnome 3 in the south-west corner of the battlefield. He gives you the ballista coordinates.",
        },
        {
          text: "Operate the ballista in the south-west battlefield using the coordinates the gnome gave you.",
        },
      ],
    },
    {
      title: "Recover the orb of protection",
      steps: [
        { text: "Walk north to the Khazard stronghold and climb over the crumbled wall the ballista breached." },
        { text: "Climb the ladder and search the chest for the orb of protection." },
        { text: "Leave through the front door and return to King Bolren in the village (Elkoy can guide you)." },
      ],
    },
    {
      title: "Defeat the Khazard warlord",
      steps: [
        { text: "Talk to King Bolren in the centre of Tree Gnome Village — he tells you the warlord stole the other two orbs." },
        { text: "Travel back to the Khazard battlefield and find the warlord." },
        {
          text: "Defeat the Khazard warlord (level 112) and pick up both orbs.",
          notes: ["Safespot with range/magic from behind the fence to make this trivial at low levels."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return both orbs to King Bolren." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "11,450 Attack experience",
    "Access to spirit tree fast travel network (Tree Gnome Village + others)",
    "Gnome amulet",
  ],
};
