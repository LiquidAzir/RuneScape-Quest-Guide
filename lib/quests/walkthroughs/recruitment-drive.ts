import type { QuestWalkthrough } from "../types";

export const recruitmentDrive: QuestWalkthrough = {
  startPoint:
    "Talk to Sir Amik Varze on the top floor of the western tower of the White Knights' Castle, Falador (after Black Knights' Fortress and Druidic Ritual). Falador Teleport (or a Falador teleport tab) drops you by the central fountain — run west through the castle's east gate, cross the courtyard to the tower in the north-west corner and climb its staircases to the top.",
  itemsRequired: ["None — bank everything before starting"],
  recommended: ["Combat 10+", "5+ Strength for the warhammer fight"],
  enemies: ["Sir Leye (level 20)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Sir Amik Varze on the top floor of the western tower of the White Knights' Castle in Falador and pick 'Yes please'.",
          travel:
            "Falador Teleport (37 Magic) or a Falador teleport tab lands you at the central fountain; run west into the White Knights' Castle courtyard, then climb the staircases of the north-west tower to the top floor. No teleport: run west from Varrock along the main road past Barbarian Village, or north from Port Sarim through Draynor Manor's road.",
        },
        {
          text: "Bank ALL your equipped items and inventory before continuing.",
          travel:
            "Falador has two banks: the west bank a short run north of the White Knights' Castle, and the east bank beside the eastern city gate. The west bank is the shorter walk from Sir Amik.",
          notes: ["Anything you bring will be confiscated. You must complete the quest with only the tools the rooms give you."],
        },
      ],
    },
    {
      title: "Begin the trial",
      steps: [
        {
          text: "Talk to Sir Tiffy Cashien on the bench in Falador Park.",
          travel:
            "From the White Knights' Castle leave by the east gate, run east past the fountain and then north — Falador Park is the walled garden in the north-east of the city. Sir Tiffy is the white knight sitting on the park bench in the middle of the lawn.",
        },
        { text: "Pick 'Yes, let's go!' to start the puzzle test." },
      ],
    },
    {
      title: "Puzzle rooms",
      steps: [
        {
          text: "Complete 5 of 7 randomly-selected puzzle rooms.",
          notes: [
            "Possible rooms: combat (Sir Leye), statue puzzle, riddles, logic puzzles, bookshelf room, fox/grain/chicken crossing.",
            "You always fight Sir Leye — pick up the steel warhammer and equip it before attacking.",
          ],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "After completing the trial, you graduate as a Temple Knight initiate." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Prayer / Herblore / Agility experience each",
    "3,000 coins",
    "Access to Initiate armour (+5 Prayer bonus melee armour)",
    "The Gaze of Saradomin (respawn at Falador instead of Lumbridge)",
    "Title of Initiate in the Order of Temple Knights",
  ],
};
