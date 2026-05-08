import type { QuestWalkthrough } from "../types";

export const witchsHouse: QuestWalkthrough = {
  startPoint: "Talk to the boy outside the gates of Taverley.",
  itemsRequired: ["Cheese", "Leather gloves (or any gloves)"],
  recommended: [
    "Combat 35+ for the experiment fight",
    "Decent food (lobsters or better)",
    "Weapon and armour",
    "Full energy or stamina potion",
  ],
  enemies: ["Witch's experiment — fights you in 4 forms (level 19, 30, 42, 53)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Taverley (west of Falador) and find the boy near the eastern gate." },
        { text: "Talk to him. He's lost his ball over the Witch's garden wall — agree to retrieve it." },
      ],
    },
    {
      title: "Enter the witch's house",
      steps: [
        { text: "Walk west then north to the front of the witch's house." },
        { text: "Search under the potted plant by the front door for the door key." },
        { text: "Enter and read the diary on the table." },
        { text: "Climb down the ladder in the kitchen." },
        {
          text: "Equip leather gloves before going through the gate (the gate shocks bare hands).",
          notes: ["If you don't have any, search the boxes in this basement to find a pair."],
        },
        { text: "Go through the gate and search the cupboard to get a magnet." },
      ],
    },
    {
      title: "Get the ball",
      steps: [
        { text: "Climb back upstairs and enter the small south-eastern room with the mouse hole." },
        {
          text: "Drop a piece of cheese on the floor near the hole and quickly use the magnet on the mouse when it appears.",
          notes: ["The mouse will run to the garden and hit a switch that opens the shed."],
        },
        { text: "Walk through the garden to the shed in the south-east — sneak between the hedges to avoid the witch spotting you." },
        { text: "Search the shed to provoke the Witch's experiment." },
        {
          text: "Defeat the experiment in all 4 forms (it transforms each time).",
          notes: ["Forms get tougher each time. Eat aggressively — you can't bank between forms."],
        },
        { text: "Pick up the ball from inside the shed." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the boy outside Taverley with the ball." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["4 Quest Points", "6,325 Hitpoints experience"],
};
