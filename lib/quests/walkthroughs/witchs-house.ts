import type { QuestWalkthrough } from "../types";

export const witchsHouse: QuestWalkthrough = {
  startPoint:
    "Talk to the boy standing on the path outside the Witch's house, on the road between Falador and Taverley. Cast Falador Teleport, run west out of Falador's west gate and follow the road — the walled house on the south side of the road just before Taverley's gate is the Witch's.",
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
        {
          text: "Talk to the boy on the path outside the Witch's house, by Taverley's eastern gate. He has lost his ball over the garden wall — agree to fetch it.",
          travel:
            "Falador Teleport, then run west out of Falador's west gate and along the road towards Taverley. The Witch's house is the walled property on the south side of that road just short of the Taverley gate, and the boy is standing right outside it. Without runes, walk north from Port Sarim or west from Draynor Village to Falador first.",
        },
      ],
    },
    {
      title: "Enter the witch's house",
      steps: [
        { text: "Walk around to the front door of the witch's house." },
        { text: "Search under the potted plant beside the front door for the door key." },
        { text: "Enter the house and read the diary on the table." },
        { text: "Climb down the ladder in the kitchen." },
        {
          text: "Equip leather gloves before going through the gate in the basement (the gate shocks bare hands).",
          notes: ["If you do not have any, search the boxes in this basement to find a pair."],
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
          notes: ["The mouse runs to the garden and hits a switch that opens the shed."],
        },
        { text: "Go out into the garden and walk to the shed in the south-east, weaving between the hedges so the witch does not spot you." },
        { text: "Search the shed to provoke the Witch's experiment." },
        {
          text: "Defeat the experiment in all 4 forms (it transforms each time).",
          notes: ["Forms get tougher each time. Eat aggressively — you cannot bank between forms."],
        },
        { text: "Pick up the ball from inside the shed." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return the ball to the boy on the path outside the house." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["4 Quest Points", "6,325 Hitpoints experience"],
};
