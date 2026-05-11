import type { QuestWalkthrough } from "../types";

export const holyGrail: QuestWalkthrough = {
  startPoint:
    "Talk to King Arthur on the ground floor of Camelot Castle (north of Seers' Village; use Camelot teleport). Requires Merlin's Crystal complete.",
  itemsRequired: ["Excalibur (from Merlin's Crystal — kept in your bank)"],
  recommended: [
    "Combat 50+",
    "Melee armour and weapon",
    "Antipoison (if combat <41 — Black Knight Titan poisons)",
    "Some food",
    "Camelot teleport tablet (instant return to Camelot)",
  ],
  enemies: ["Black Knight Titan (level 120) — must be finished off with Excalibur, otherwise he respawns"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Camelot Castle (north of Seers' Village; Camelot teleport drops you at the front gate). Talk to King Arthur sitting on his throne in the central throne room.",
        },
        {
          text: "Climb the stairs to the first floor of Camelot Castle and find Merlin in the eastern room (the small library/study east of the central staircase).",
        },
        {
          text: "Talk to Merlin in the first-floor eastern room for guidance — he sends you to seek the Grail.",
        },
      ],
    },
    {
      title: "Search for the Grail",
      steps: [
        {
          text: "Bank ALL weapons and armour (Entrana strips them on landing).",
        },
        {
          text: "Travel to Entrana (boat from Port Sarim docks) and talk to the High Priest in the centre of the island for grail clues.",
        },
        {
          text: "Travel to Galahad's small house just west of McGrubor's Wood (north-west of Seers' Village; cross the bridge then walk into the woods).",
        },
        {
          text: "Talk to Galahad in his house to receive the holy table napkin.",
        },
        {
          text: "Travel to Draynor Manor (north of Draynor Village). Climb to the second floor (top floor) and pick up 2 magic whistles from the small table in the south-most room.",
        },
      ],
    },
    {
      title: "Enter the Fisher Realm",
      steps: [
        {
          text: "Re-equip combat gear, Excalibur, and bring some food.",
        },
        {
          text: "Travel north-west of Brimhaven on Karamja to the small peninsula (the small spit of land north-west of Brimhaven, accessible by walking north along the western coast).",
        },
        {
          text: "Stand on the peninsula and blow a magic whistle — you teleport to the Fisher Realm.",
        },
        {
          text: "Defeat the Black Knight Titan (level 120) — finish him off with Excalibur equipped (any other final blow makes him reset).",
        },
        {
          text: "Talk to the fisherman by the river about entering the castle.",
        },
        {
          text: "Pick up the Grail bell from beside the river and ring it at the castle bricks (the wall blocking the entrance).",
        },
        {
          text: "Descend the stairs into the castle and talk to the Fisher King on his throne.",
        },
      ],
    },
    {
      title: "Find Sir Percival",
      steps: [
        {
          text: "Return to Camelot Castle (Camelot teleport) with one free inventory slot.",
        },
        {
          text: "Talk to King Arthur on his throne — he gives you a magic gold feather.",
        },
        {
          text: "Travel to Goblin Village north of Falador (follow the path north from Falador past Doric's house). Open the sacks in the eastern building of the village to find Sir Percival hiding inside.",
        },
        {
          text: "Give Sir Percival your second magic whistle — he uses it to travel to the Fisher Realm.",
        },
      ],
    },
    {
      title: "Get the Grail and finish",
      steps: [
        {
          text: "Return to the small peninsula north-west of Brimhaven and blow your last magic whistle to teleport back to the Fisher Realm.",
        },
        {
          text: "Climb the stairs to the top floor of the eastern tower of the Fisher Realm castle.",
        },
        {
          text: "Take the Holy Grail from the top of the tower.",
        },
        {
          text: "Return to King Arthur in the Camelot Castle throne room.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "11,000 Prayer experience", "15,300 Defence experience", "Access to the Fisher Realm"],
};
