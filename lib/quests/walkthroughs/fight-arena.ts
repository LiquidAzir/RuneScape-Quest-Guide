import type { QuestWalkthrough } from "../types";

export const fightArena: QuestWalkthrough = {
  startPoint:
    "Talk to Lady Servil in the small camp south-west of the Ardougne Monastery, north of the Khazard battlefield. Getting there: Ardougne cloak teleport goes straight to the monastery — run south-west from it and she is sitting with her two children by the road. No cloak: Ardougne Teleport and run south past the Clocktower road, or spirit tree to Tree Gnome Village and run east across the battlefield.",
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
          text: "Talk to Lady Servil south-west of the Ardougne Monastery and choose 'Can I help you?'.",
          travel:
            "Ardougne cloak teleport to the monastery, then run south-west down the road — Lady Servil and her children are camped beside it. Without the cloak, Ardougne Teleport and run south out of the city, or spirit tree to Tree Gnome Village and run east across the Khazard battlefield.",
        },
        {
          text: "Search the Khazard armour chest in the north-east corner of the prison courtyard for the disguise.",
          travel:
            "From Lady Servil run west to the walled Khazard prison beside the battlefield. Go in through the courtyard entrance and head to the chest in the north-east corner.",
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
          text: "Walk south-east inside the prison to the cell block.",
          travel: "From the armour chest cut south-east across the courtyard — the cells are the barred rooms on that side.",
        },
        {
          text: "Talk to the Head Guard standing near the staircase by the cell block.",
        },
        {
          text: "Buy a Khali brew for 5gp from the Khazard Barman in the small bar room at the south end of the prison.",
          travel: "Head south from the cell block; the bar is the room with the counter in the prison's southern range.",
        },
        {
          text: "Return to the Khazard guard by the prison cells; he hands you the cell keys.",
        },
        {
          text: "Use the keys on Sammy's prison door in the north-east corner of the cell block.",
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
          text: "Return to Lady Servil at her camp south-west of the Ardougne Monastery to finish.",
          travel:
            "Leave the arena and run north-east back up the road from the battlefield, or teleport out with an Ardougne cloak to the monastery and run south-west to her camp.",
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
