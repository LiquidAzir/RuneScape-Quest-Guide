import type { QuestWalkthrough } from "../types";

export const ernestTheChicken: QuestWalkthrough = {
  startPoint: "Talk to Veronica outside Draynor Manor, north of Draynor Village.",
  itemsRequired: ["None to start (you'll find everything inside the manor)"],
  recommended: ["Some food if you're worried about the level 22 skeletons in the basement"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Draynor Manor (north of Draynor Village)." },
        { text: "Talk to Veronica at the front gate. She wants you to find her fiance Ernest." },
        { text: "Enter the manor and talk to Professor Oddenstein on the top floor." },
        { text: "He explains he's accidentally turned Ernest into a chicken and needs three items to fix him." },
      ],
    },
    {
      title: "Get the Pressure Gauge",
      steps: [
        {
          text: "Go down to the basement. Pick up a fish food from a shelf and a poison bottle from the table.",
          notes: ["Watch for level 22 skeletons — flee or kill as needed."],
        },
        { text: "Use the poison on the fish food to make poisoned fish food." },
        { text: "Go up to the kitchen on the ground floor." },
        { text: "Use the poisoned fish food on the fountain (in the courtyard between the front and the manor)." },
        { text: "Search the fountain to retrieve the pressure gauge." },
      ],
    },
    {
      title: "Get the Rubber Tube",
      steps: [
        { text: "Enter the room on the ground floor with the strange machine (south-east room)." },
        { text: "Take the rubber tube from the chemistry apparatus." },
      ],
    },
    {
      title: "Get the Oil Can",
      steps: [
        { text: "On the first floor, navigate the maze of rooms to find a key." },
        {
          text: "Search the bookcases, drawers, and crates as needed to pick up: a key for the room with the oil can, and the oil can itself.",
          notes: [
            "The exact rooms vary by where you start — open every drawer, bookcase and chest until you have the oil can.",
            "Spider webs in the corridors can be slashed with a weapon to pass.",
          ],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Professor Oddenstein on the top floor with the pressure gauge, rubber tube, and oil can." },
        { text: "Talk to Professor Oddenstein on the top floor of Draynor Manor to finish his repair." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "300 coins",
  ],
};
