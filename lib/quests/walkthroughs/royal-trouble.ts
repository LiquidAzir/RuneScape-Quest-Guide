import type { QuestWalkthrough } from "../types";

export const royalTrouble: QuestWalkthrough = {
  startPoint:
    "Talk to Advisor Ghrim on the ground floor of Miscellania Castle (after Throne of Miscellania). Get to Miscellania by taking the boat from Rellekka's western pier — enchanted lyre or Fremennik boat to Rellekka first — or with fairy ring CIP if you have one.",
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
        {
          text: "Talk to Advisor Ghrim on the ground floor of Miscellania Castle, choosing dialogue options 2 then 1.",
          travel:
            "Enchanted lyre (or the Rellekka boat from Port Sarim) to Rellekka, then walk to the pier on the west side of town and take the ferry to Miscellania. Fairy ring CIP lands on the island directly. From the Miscellania dock follow the path north to the castle — Ghrim stands on the ground floor beside the throne room.",
        },
        { text: "Talk to Princess Astrid or Prince Brand inside Miscellania Castle and watch the cutscene." },
        { text: "Talk to King Vargas on the first floor of Miscellania Castle to confirm." },
        {
          text: "Talk to Gardener Gunnhild out at the Miscellania flax field.",
          travel: "Leave the castle by the main gate and follow the path to the blue flax plants growing just outside the castle grounds — Gunnhild works the field there.",
        },
        {
          text: "Travel north-east to Etceteria Castle and talk to Queen Sigrid in her throne room.",
          travel:
            "From Miscellania Castle run north-east across the bridge into Etceteria; the castle is the building straight ahead, with the bank just outside its door. Sigrid is in the throne room on the ground floor.",
        },
        {
          text: "Talk to Matilda in the southern building of Etceteria.",
          travel: "Leave Etceteria Castle and walk south — Matilda is inside the house nearest the Miscellania border.",
        },
        { text: "Return to Queen Sigrid inside Etceteria Castle (option 2 dialogue)." },
        {
          text: "Bank at Etceteria and equip combat gear + antipoison.",
          travel: "The Etceteria bank is the small building right beside the castle entrance, a few steps from Sigrid.",
        },
      ],
    },
    {
      title: "The dungeon",
      steps: [
        {
          text: "Talk to King Vargas, then Advisor Ghrim back in Miscellania Castle.",
          travel: "Run back south-west over the bridge from Etceteria into Miscellania and into the castle; Vargas is upstairs, Ghrim on the ground floor.",
        },
        {
          text: "Talk to the Sailor at Miscellania docks.",
          travel: "Head south from the castle down to the shore — the docks are the pier you arrived at from Rellekka.",
        },
        { text: "Return to King Vargas on the first floor of Miscellania Castle with 1 free inventory slot for a scroll." },
        {
          text: "Enter the dungeon via the ladder in the castle's southern courtyard.",
          travel: "The ladder is in the walled courtyard on the south side of Miscellania Castle — climb down to reach the tunnels.",
        },
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
        { text: "Talk to Armod in the dungeon under Miscellania after the cutscene." },
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
        { text: "Climb the rope shortcut back up to Etceteria castle." },
        { text: "Talk to Queen Sigrid inside Etceteria Castle for a letter and 20,000gp." },
        {
          text: "Talk to King Vargas on the first floor of Miscellania Castle to complete the quest.",
          travel: "Run south-west from Etceteria over the bridge into Miscellania, into the castle and up the stairs to Vargas.",
        },
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
