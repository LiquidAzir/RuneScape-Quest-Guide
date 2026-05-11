import type { QuestWalkthrough } from "../types";

export const theEyesOfGlouphrie: QuestWalkthrough = {
  startPoint: "Talk to Brimstail in his cave south-west of the Tree Gnome Stronghold.",
  itemsRequired: [
    "Bucket of sap",
    "Mud rune",
    "Maple logs",
    "Oak logs",
    "Hammer",
    "Saw",
    "Pestle and mortar",
  ],
  recommended: [
    "8+ free inventory slots",
    "Spirit tree to the Tree Gnome Stronghold for fast travel",
    "Fairy ring CLS for Hazelmere",
  ],
  enemies: ["6 evil creatures (1 HP each)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Brimstail in his small cave west of the Tree Gnome Stronghold." },
        { text: "Inspect the singing bowl in the western part of the cave." },
        { text: "Try to use Oaknock's Machine to the north (it's broken)." },
        { text: "Return to Brimstail in his cave south-west of the Tree Gnome Stronghold. He sends you to Hazelmere." },
      ],
    },
    {
      title: "Hazelmere's memories",
      steps: [
        { text: "Travel to Hazelmere's house (fairy ring CLS)." },
        { text: "Talk to Brimstail in his cave south-west of the Tree Gnome Stronghold — watch the cutscenes about King Healthorg and the white spirit tree." },
        { text: "He gives you a violet pentagon." },
        { text: "Return to Brimstail in his cave south-west of the Tree Gnome Stronghold and report what you saw." },
        { text: "Pick up the bucket of sap outside Brimstail's cave." },
      ],
    },
    {
      title: "Repair Oaknock's machine",
      steps: [
        { text: "Use a pestle and mortar on a mud rune to grind it." },
        { text: "Use the ground mud rune on the bucket of sap to make magic glue." },
        { text: "Use the glue on Oaknock's machine twice to repair it." },
        { text: "Tell Brimstail the machine is fixed." },
      ],
    },
    {
      title: "Solve the disc puzzle",
      steps: [
        { text: "Talk to Brimstail twice to receive coloured shape discs." },
        {
          text: "Open Oaknock's machine and insert discs whose total values match the green target number for each slot.",
          notes: [
            "There are 3 puzzles in a row: 1 slot, then 2, then 3.",
            "Trade tokens with Brimstail as needed for missing values.",
          ],
        },
      ],
    },
    {
      title: "Kill the 6 evil creatures",
      steps: [
        {
          text: "Find and kill an evil creature (1 HP) at each of these locations in the Tree Gnome Stronghold:",
          notes: [
            "Next to Brimstail in his cave.",
            "Outside the main south-east stronghold gate.",
            "By the Gnome Agility Course entrance.",
            "Next to King Narnode at the Grand Tree base.",
            "Top floor of the Grand Tree, by the prison.",
            "North-west of the Grand Tree in the gnome tortoise pen.",
          ],
        },
        { text: "Wait for each death animation to fully play before moving on." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to King Narnode in the Grand Tree." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "12,000 Magic experience",
    "6,000 Runecraft experience",
    "2,500 Woodcutting experience",
    "250 Construction experience",
    "Crystal saw seed (combine with the singing bowl for the crystal saw — Construction +3 boost)",
  ],
};
