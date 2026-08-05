import type { QuestWalkthrough } from "../types";

export const theEyesOfGlouphrie: QuestWalkthrough = {
  startPoint:
    "Talk to Brimstail in his cave in the south-west corner of the Tree Gnome Stronghold, down by the river. Spirit tree to the Tree Gnome Stronghold (or Royal seed pod / gnome glider to the Grand Tree), then run south-west past the Gnome Agility Course to the far south-west corner — the cave is the rock entrance beside the water.",
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
        {
          text: "Talk to Brimstail in his cave in the south-west corner of the Tree Gnome Stronghold.",
          travel:
            "Spirit tree to the Tree Gnome Stronghold, or Royal seed pod / gnome glider to the Grand Tree. Without either: Ardougne teleport, leave by the north gate and follow the road north-west to the Stronghold's south-east gate. From the Grand Tree run south-west past the Gnome Agility Course to the far south-west corner of the Stronghold; Brimstail's cave is the rock entrance beside the river.",
        },
        { text: "Inspect the singing bowl in the western part of the cave." },
        { text: "Try to use Oaknock's Machine in the northern part of the cave (it's broken)." },
        { text: "Return to Brimstail in the same cave. He sends you to Hazelmere." },
      ],
    },
    {
      title: "Hazelmere's memories",
      steps: [
        {
          text: "Travel to Hazelmere's hut on the small island east of Yanille.",
          travel:
            "Fairy ring CLS drops you right beside his hut. No fairy ring: Watchtower Teleport (or a house/Nightmare Zone teleport) to Yanille, then run east out of the city to the island hut.",
        },
        {
          text: "Climb the ladder in Hazelmere's hut and talk to Hazelmere upstairs — watch the cutscenes about King Healthorg and the white spirit tree.",
        },
        { text: "He gives you a violet pentagon." },
        {
          text: "Return to Brimstail in his cave in the south-west of the Tree Gnome Stronghold and report what you saw.",
          travel:
            "Spirit tree or Royal seed pod back to the Tree Gnome Stronghold, then run to the south-west corner cave by the river.",
        },
        {
          text: "Pick up the bucket of sap outside Brimstail's cave.",
          travel:
            "It is a ground spawn on the grass immediately outside the cave mouth — grab it on your way in or out.",
        },
      ],
    },
    {
      title: "Repair Oaknock's machine",
      steps: [
        { text: "Use a pestle and mortar on a mud rune to grind it." },
        { text: "Use the ground mud rune on the bucket of sap to make magic glue." },
        { text: "Use the glue on Oaknock's machine in the north of Brimstail's cave twice to repair it." },
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
          travel:
            "All six are inside the Stronghold. Start at Brimstail's cave in the south-west, then work north-east: the south-east gate, the Gnome Agility Course entrance, the Grand Tree base, the Grand Tree's top floor, and the tortoise pen north-west of the Grand Tree.",
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
        {
          text: "Talk to King Narnode Shareen at the base of the Grand Tree.",
          travel:
            "From Brimstail's cave run north-east across the Stronghold to the Grand Tree; Narnode stands on the ground floor at the tree's base, by the entrance ladder.",
        },
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
