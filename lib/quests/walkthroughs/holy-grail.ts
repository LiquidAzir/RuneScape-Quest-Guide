import type { QuestWalkthrough } from "../types";

export const holyGrail: QuestWalkthrough = {
  startPoint:
    "Talk to King Arthur in the throne room on the ground floor of Camelot Castle, north of Seers' Village. Camelot teleport drops you at the castle's front gate; without it, take the Seers' Village canoe or the Catherby route and run north. Requires Merlin's Crystal complete.",
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
          text: "Talk to King Arthur on his throne in the central throne room of Camelot Castle.",
          travel:
            "Camelot teleport lands you just outside the castle courtyard — walk north through the front doors into the throne room. No Camelot teleport: canoe up the river to Seers' Village (or Ardougne teleport and run north-east) then run north to the castle.",
        },
        {
          text: "Go up the main staircase to the first floor and into the eastern room with the cauldron to find Merlin.",
        },
        {
          text: "Talk to Merlin — he sends you off to seek the Grail.",
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
          text: "Sail to Entrana and talk to the High Priest in the chapel in the centre of the island for Grail clues.",
          travel:
            "Falador teleport, then run south down the road to Port Sarim and talk to the monk at the northernmost dock to sail to Entrana. From the Entrana landing, follow the path north-west into the middle of the island to the chapel.",
        },
        {
          text: "Travel to Sir Galahad's house west of McGrubor's Wood.",
          travel:
            "Fairy ring ALS puts you inside McGrubor's Wood — leave by the west side and his house is the lone cottage just beyond the trees. No fairy ring: combat bracelet to the Ranging Guild and run north, or run north-west from Seers' Village around the wood.",
        },
        {
          text: "Talk to Galahad in his house to receive the holy table napkin.",
        },
        {
          text: "Go to the top floor of Draynor Manor and take the 2 magic whistles from the table in the southern-most room.",
          travel:
            "Amulet of glory to Draynor Village, then run north up the path to the manor gates and in through the front door. Climb both staircases to the top floor and head to the room at the south end.",
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
          text: "Travel to the north-western peninsula of Karamja, north-west of Brimhaven, and stand under the ruined tower.",
          travel:
            "Take Captain Barnaby's boat from the Ardougne docks to Brimhaven (30 coins), or a charter ship to Brimhaven. From the Brimhaven docks run north-west up the coast to the spit of land with the tower on it.",
        },
        {
          text: "Blow a magic whistle under the tower — you are teleported to the Fisher Realm.",
        },
        {
          text: "Defeat the Black Knight Titan (level 120) by the bridge — land the killing blow with Excalibur equipped, or he simply resets.",
        },
        {
          text: "Talk to the fisherman by the river about entering the castle.",
        },
        {
          text: "Pick up the Grail bell beside the river and ring it at the castle bricks blocking the entrance.",
        },
        {
          text: "Go down the stairs into the castle and talk to the Fisher King on his throne.",
        },
      ],
    },
    {
      title: "Find Sir Percival",
      steps: [
        {
          text: "Return to Camelot Castle with one free inventory slot.",
          travel: "Camelot teleport straight to the castle gates; walk north into the throne room.",
        },
        {
          text: "Talk to King Arthur on his throne — he gives you a magic gold feather.",
        },
        {
          text: "Open the sacks in the house on the east side of Goblin Village to find Sir Percival hiding inside.",
          travel:
            "Falador teleport, run north out of the north gate and up the path past Doric's hut, then west through the wooden gate into the goblin valley. Percival is in the eastern hut.",
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
          text: "Return to the peninsula north-west of Brimhaven and blow your last magic whistle.",
          travel:
            "Captain Barnaby's boat from the Ardougne docks (or a charter ship) to Brimhaven, then run north-west along the coast to the tower on the peninsula.",
        },
        {
          text: "Climb the stairs to the top floor of the eastern tower of the Fisher Realm castle.",
        },
        {
          text: "Take the Holy Grail from the top of the tower.",
        },
        {
          text: "Return to King Arthur in the Camelot Castle throne room.",
          travel: "Camelot teleport to the castle gates, then north into the throne room.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "11,000 Prayer experience", "15,300 Defence experience", "Access to the Fisher Realm"],
};
