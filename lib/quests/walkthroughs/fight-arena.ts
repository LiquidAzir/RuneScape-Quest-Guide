import type { QuestWalkthrough } from "../types";

export const fightArena: QuestWalkthrough = {
  startPoint:
    "Talk to Lady Servil in the small clearing south-west of the Ardougne Monastery (south of East Ardougne, between the monastery and the Khazard battlefield — she's sitting beside her two children near a small camp).",
  itemsRequired: ["5 coins for Khali brew"],
  recommended: [
    "Combat 50+",
    "Some food + combat gear",
    "Ranged/magic/halberd for safespotting",
    "Ardougne cloak / fairy ring / Spirit tree",
  ],
  enemies: [
    "Khazard Ogre (level 63)",
    "Khazard Scorpion (level 44)",
    "Bouncer (level 137)",
    "General Khazard (level 142) — optional",
  ],
  sections: [
    {
      title: "Get into the prison",
      steps: [
        {
          text: "Talk to Lady Servil south-west of the Ardougne Monastery with 'Can I help you?'.",
        },
        {
          text: "Walk west to the Khazard prison (the large fortress just west of the Khazard battlefield). The Khazard armour chest is in the north-east corner of the prison courtyard — search it for the disguise.",
        },
        {
          text: "Equip the full Khazard armour before walking through the prison gate.",
        },
      ],
    },
    {
      title: "Inside the arena",
      steps: [
        {
          text: "Walk south-east inside the prison to the jail rooms (the cell block on the south-east side of the courtyard).",
        },
        {
          text: "Talk to the Head Guard standing near the staircase by the cell block.",
        },
        {
          text: "Walk south to the Khazard Barman in the small bar room (south end of the prison) and buy a Khali brew from him for 5gp.",
        },
        {
          text: "Return to the Khazard guard outside the prison cells; he hands you the cell keys.",
        },
        {
          text: "Use the keys on Sammy's prison door (the locked cell in the north-east corner of the cell block).",
        },
      ],
    },
    {
      title: "Combat sequence",
      steps: [
        {
          text: "You're thrown into the arena automatically. Defeat the Khazard Ogre (level 63) first.",
        },
        {
          text: "After the ogre, talk to your cellmate Hengrad in the holding cell between fights.",
        },
        {
          text: "Defeat the Khazard Scorpion (level 44) in the next round.",
        },
        {
          text: "Defeat Bouncer (level 137 dog-creature) in the next round.",
        },
        {
          text: "Defeat or escape General Khazard (level 142) in the final round (you can flee — no kill required).",
        },
        {
          text: "Walk back south-west of the Ardougne Monastery and talk to Lady Servil at her camp to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "12,175 Attack experience",
    "2,175 Thieving experience",
    "1,000 coins",
    "Khazard armour set",
  ],
};
