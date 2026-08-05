import type { QuestWalkthrough } from "../types";

export const blackKnightsFortress: QuestWalkthrough = {
  startPoint:
    "Talk to Sir Amik Varze on the top floor of the western tower of the White Knights' Castle in Falador. Falador Teleport (Magic 37) drops you in the city centre — run west to the castle gates, go in, and take the staircase in the western tower up twice.",
  itemsRequired: [
    "Iron chainbody",
    "Bronze medium helm",
    "Cabbage (must NOT be a Draynor Manor cabbage — those are rejected; the Edgeville Monastery patch is closest to the fortress)",
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
        {
          text: "Enter the White Knights' Castle in Falador and climb the western tower to the top floor.",
          travel:
            "Falador Teleport lands you by the central fountain; the castle is the huge walled building immediately west. Alternative: ring of wealth to Falador Park then run west, or run north from Port Sarim / east from Taverley.",
        },
        { text: "Talk to Sir Amik Varze at the top of the tower." },
        { text: "Agree to spy on the Black Knights." },
      ],
    },
    {
      title: "Get a cabbage",
      steps: [
        {
          text: "Pick a cabbage from the patch in the Edgeville Monastery garden (or the Falador farm patch south of Falador).",
          travel:
            "Combat bracelet teleports straight to the Monastery, which is on the road east of Falador below Ice Mountain; the cabbage patch is in the grounds just outside the building. This is deliberately on the way — the fortress is a short run north-west of the Monastery.",
          notes: [
            "Cabbages picked at Draynor Manor are specifically rejected by this quest — do not use one.",
          ],
        },
      ],
    },
    {
      title: "Disguise as a Black Knight and infiltrate",
      steps: [
        { text: "Equip the iron chainbody and bronze medium helm BEFORE entering the fortress." },
        {
          text: "Travel to the Black Knights' Fortress and enter through the southern door.",
          travel:
            "The fortress is north-east of Falador: leave by Falador's north gate and run north-east, or run north-west from the Edgeville Monastery. It sits north-east of the Dwarven Mine and the Oracle on Ice Mountain, and north-west of the Monastery — a square walled keep. The disguise gets you through the southern door.",
          notes: ["Do not bank the chainbody and helm — the guards check them at the door."],
        },
        { text: "Climb the ladder upstairs and find the wooden grill in the room with the witch and the captain." },
        {
          text: "Listen at the grill to overhear their plan involving an invincibility potion.",
        },
      ],
    },
    {
      title: "Sabotage the potion",
      steps: [
        { text: "Climb up to the room above the cauldron, one floor higher on the far side of the fortress." },
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
        {
          text: "Return to Sir Amik Varze on the top floor of the White Knights' Castle's western tower in Falador.",
          travel:
            "Run south-west back to Falador's north gate (or teleport to Falador), then west across the city to the castle and up the western tower twice.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "2,500 coins",
  ],
};
