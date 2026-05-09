import type { QuestWalkthrough } from "../types";

export const theDepthsOfDespair: QuestWalkthrough = {
  startPoint: "Talk to Lord Kandur Hosidius at his home in Hosidius (north-west of the Vinery).",
  itemsRequired: [],
  recommended: [
    "Combat 15+",
    "Skills necklace, Xeric's talisman, Stamina potions",
    "Some food at low levels",
    "Arceuus Library Teleport",
    "Fairy ring access",
  ],
  enemies: ["Sand Snake (level 36)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Lord Kandur in his Hosidius house." },
        { text: "Talk to Chef Olivia in his kitchen." },
        { text: "Travel to the Arceuus Library and talk to Galana — get the location of the Varlamore envoy book." },
        { text: "Read the Varlamore envoy book." },
      ],
    },
    {
      title: "Crabclaw Caves",
      steps: [
        { text: "Enter the Crabclaw Caves south of the Woodcutting Guild." },
        { text: "Navigate to the tunnel at the cave's end and climb down." },
        { text: "Talk to Artur Hosidius." },
        { text: "Defeat the Sand Snake (level 36)." },
        { text: "Search the chest." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Lord Kandur Hosidius." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,500 Agility experience",
    "4,000 coins",
    "'Lunch by the Lancalliums' page added to Kharedst's memoirs",
    "Hosidius graceful outfit recolour",
  ],
};
