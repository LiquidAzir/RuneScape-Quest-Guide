import type { QuestWalkthrough } from "../types";

export const royalTrouble: QuestWalkthrough = {
  startPoint: "Talk to Advisor Ghrim in Miscellania castle (after Throne of Miscellania).",
  itemsRequired: [
    "5 coal (mineable in the dungeon)",
    "2 ropes",
    "1 plank (obtained in dungeon)",
  ],
  recommended: [
    "Combat 50+",
    "Pickaxe (any)",
    "Antipoison or Superantipoison",
    "43 Prayer + prayer potions",
    "Stamina/energy potions",
    "Food (sharks)",
  ],
  enemies: ["Giant Sea Snake (level 149) — boss, weak to ranged"],
  sections: [
    {
      title: "Investigate the Etceteria thefts",
      steps: [
        { text: "Talk to Advisor Ghrim in Miscellania castle, choosing dialogue options 2 then 1." },
        { text: "Talk to Princess Astrid or Prince Brand and watch the cutscene." },
        { text: "Talk to King Vargas to confirm." },
        { text: "Talk to Gardener Gunnhild by the flax patch." },
        { text: "Travel to Etceteria castle and talk to Queen Sigrid." },
        { text: "Talk to Matilda in the southern building." },
        { text: "Return to Queen Sigrid (option 2 dialogue)." },
        { text: "Bank at Etceteria and equip combat gear + antipoison." },
      ],
    },
    {
      title: "The dungeon",
      steps: [
        { text: "Talk to King Vargas, then Advisor Ghrim back in Miscellania." },
        { text: "Talk to the Sailor at Miscellania docks." },
        { text: "Return to King Vargas with 1 free inventory slot for a scroll." },
        { text: "Enter the dungeon via the ladder in the southern courtyard." },
        { text: "Talk to Donal in the pub and accept the monster challenge." },
      ],
    },
    {
      title: "Build the lift",
      steps: [
        { text: "Take a pickaxe, mine 5 coal from the crevice." },
        { text: "Collect engine, 2 beams, 3 pulley beams, and 2 ropes from crates." },
        { text: "Combine beams with pulley beams to make longer versions." },
        { text: "Assemble the broken scaffold using the pulley beams and rope." },
        { text: "Add a beam to the platform and place the engine on the engine platform." },
        { text: "Add coal to the engine and use the lift to retrieve a plank." },
      ],
    },
    {
      title: "Cross to the boss",
      steps: [
        { text: "Use a rope on the rock in the tunnel and continue eastward." },
        { text: "Retrieve the diary from the fire remains and pick up all diary pages." },
        { text: "Cross the rocks with the plank, avoiding steam vents." },
        { text: "Proceed through the crevice." },
        { text: "Talk to Armod after the cutscene." },
      ],
    },
    {
      title: "Fight the Giant Sea Snake",
      steps: [
        { text: "Follow the passage north and enter the crevice at the end." },
        {
          text: "Kill the Giant Sea Snake (level 149) using Protect from Missiles and ranged or magic from distance.",
        },
        { text: "Take the heavy box after the kill." },
        { text: "Climb the rope shortcut back to Etceteria castle." },
        { text: "Talk to Queen Sigrid for a letter and 20,000gp." },
        { text: "Talk to King Vargas to complete the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "20,000 coins",
    "5,000 Agility experience",
    "5,000 Slayer experience",
    "5,000 Hitpoints experience",
    "Increased rewards from Managing Miscellania",
  ],
};
