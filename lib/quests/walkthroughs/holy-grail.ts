import type { QuestWalkthrough } from "../types";

export const holyGrail: QuestWalkthrough = {
  startPoint: "Talk to King Arthur in Camelot (after Merlin's Crystal).",
  itemsRequired: ["Excalibur"],
  recommended: [
    "Combat 50+",
    "Melee armour and weapon",
    "Antipoison (if combat <41)",
    "Some food",
    "Camelot teleport",
  ],
  enemies: ["Black Knight Titan (level 120) — must be finished with Excalibur"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to King Arthur in Camelot and accept the quest." },
        { text: "Find Merlin in the eastern room on the first floor." },
        { text: "Talk to Merlin for guidance." },
      ],
    },
    {
      title: "Search for the Grail",
      steps: [
        { text: "Bank ALL weapons and armour." },
        { text: "Travel to Entrana and talk to the High Priest." },
        { text: "Travel to Galahad's house west of McGrubor's Wood." },
        { text: "Talk to Galahad to receive the holy table napkin." },
        { text: "Travel to the second floor of Draynor Manor and pick up 2 magic whistles from the south-room table." },
      ],
    },
    {
      title: "Enter the Fisher Realm",
      steps: [
        { text: "Re-equip combat gear, Excalibur, and bring some food." },
        { text: "Travel north-west of Brimhaven to the small peninsula." },
        { text: "Blow a magic whistle to teleport to the Fisher Realm." },
        { text: "Defeat the Black Knight Titan — finish him with Excalibur." },
        { text: "Talk to the fisherman about entering the castle." },
        { text: "Pick up the Grail bell and ring it at the castle bricks." },
        { text: "Descend the stairs and talk to the Fisher King." },
      ],
    },
    {
      title: "Find Sir Percival",
      steps: [
        { text: "Return to Camelot with one free inventory slot." },
        { text: "Talk to King Arthur — he gives you a magic gold feather." },
        { text: "Travel to Goblin Village and open the sacks in the eastern house to find Sir Percival." },
        { text: "Give him your second magic whistle." },
      ],
    },
    {
      title: "Get the Grail and finish",
      steps: [
        { text: "Return to the Fisher Realm using the remaining whistle." },
        { text: "Climb to the top floor of the eastern tower." },
        { text: "Take the Holy Grail." },
        { text: "Return to King Arthur in Camelot." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "11,000 Prayer experience", "15,300 Defence experience", "Access to the Fisher Realm"],
};
