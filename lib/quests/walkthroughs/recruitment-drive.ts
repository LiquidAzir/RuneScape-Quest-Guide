import type { QuestWalkthrough } from "../types";

export const recruitmentDrive: QuestWalkthrough = {
  startPoint: "Talk to Sir Amik Varze on the top floor of the western tower in the White Knights' Castle, Falador (after Black Knights' Fortress and Druidic Ritual).",
  itemsRequired: ["None — bank everything before starting"],
  recommended: ["Combat 10+", "5+ Strength for the warhammer fight"],
  enemies: ["Sir Leye (level 20)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Sir Amik Varze and pick 'Yes please'." },
        {
          text: "Bank ALL your equipped items and inventory before continuing.",
          notes: ["Anything you bring will be confiscated. You must complete the quest with only the tools the rooms give you."],
        },
      ],
    },
    {
      title: "Begin the trial",
      steps: [
        { text: "Talk to Sir Tiffy Cashien in Falador Park." },
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
