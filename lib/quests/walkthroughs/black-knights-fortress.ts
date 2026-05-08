import type { QuestWalkthrough } from "../types";

export const blackKnightsFortress: QuestWalkthrough = {
  startPoint: "Talk to Sir Amik Varze on the top floor of the White Knights' Castle in Falador.",
  itemsRequired: [
    "Iron chainbody",
    "Bronze medium helm",
    "Cabbage (specifically a Draynor Manor cabbage)",
  ],
  recommended: [
    "Combat level 20+ recommended (Black Knights are level 33)",
    "Food, especially for low-combat players",
    "Weapon and armour for the trip in",
  ],
  enemies: ["Black Knights (level 33) — can usually be avoided"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Falador and enter the White Knights' Castle." },
        { text: "Climb to the top floor and talk to Sir Amik Varze." },
        { text: "Agree to spy on the Black Knights." },
      ],
    },
    {
      title: "Get a Draynor cabbage",
      steps: [
        {
          text: "Travel to Draynor Manor.",
          notes: ["The Black Knights' Fortress quest specifically requires a cabbage from the Draynor Manor patch."],
        },
        { text: "Pick a cabbage from the small patch on the south side of the manor." },
      ],
    },
    {
      title: "Disguise as a Black Knight and infiltrate",
      steps: [
        { text: "Equip iron chainbody and bronze medium helm BEFORE entering the fortress." },
        {
          text: "Travel north of Falador to the Black Knights' Fortress.",
          notes: ["Roughly between Falador and the wilderness, surrounded by a wall."],
        },
        { text: "Enter the fortress through the front door (the disguise lets you in)." },
        { text: "Climb upstairs and find the wooden grill in the room with the witch and the captain." },
        {
          text: "Listen at the grill to overhear their plan involving an invincibility potion.",
        },
      ],
    },
    {
      title: "Sabotage the potion",
      steps: [
        { text: "Find the room one floor up containing the cauldron." },
        {
          text: "Push the boulder onto the cauldron grate (operate the boulder).",
          notes: ["You may need to climb a ladder to reach the room above the cauldron."],
        },
        { text: "Use the cabbage on the hole/grate to drop it into the potion below." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Escape the fortress (you can run past the knights or fight your way out)." },
        { text: "Return to Sir Amik Varze in Falador." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "2,500 coins",
  ],
};
