import type { QuestWalkthrough } from "../types";

export const fightArena: QuestWalkthrough = {
  startPoint: "Talk to Lady Servil south-west of the Ardougne Monastery.",
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
        { text: "Talk to Lady Servil south-west of the Ardougne Monastery with 'Can I help you?'." },
        { text: "Search the chest in the north-east corner for Khazard armour." },
        { text: "Equip the armour before entering the prison." },
      ],
    },
    {
      title: "Inside the arena",
      steps: [
        { text: "Head to the south-east jail room." },
        { text: "Talk to the Head Guard near the staircase." },
        { text: "Buy a Khali brew from the Khazard Barman for 5gp." },
        { text: "Return to the Khazard guard outside the prison cells for keys." },
        { text: "Use the keys on Sammy's prison door (north-east cell)." },
      ],
    },
    {
      title: "Combat sequence",
      steps: [
        { text: "Defeat the Khazard Ogre." },
        { text: "Talk to your cellmate Hengrad inside the Fight Arena prison cell." },
        { text: "Defeat the Khazard Scorpion." },
        { text: "Defeat Bouncer (level 137)." },
        { text: "Defeat or escape General Khazard." },
        { text: "Return to Lady Servil south-west of the Ardougne Monastery to finish." },
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
