import type { QuestWalkthrough } from "../types";

export const ernestTheChicken: QuestWalkthrough = {
  startPoint:
    "Talk to Veronica at the gates of Draynor Manor, north of Draynor Village. Getting there: Amulet of glory to Draynor Village, then run north past the willow trees and up the path to the manor gates. No glory: Lumbridge Home Teleport and run west along the south river road to Draynor, then north.",
  itemsRequired: ["None to start (you'll find everything inside the manor)"],
  recommended: ["Some food if you're worried about the level 22 skeletons in the basement"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Veronica at the Draynor Manor front gate — she wants you to find her fiance Ernest.",
          travel:
            "Amulet of glory to Draynor Village, then run north out of the village past the willow trees and up the dirt path to the manor gates. Veronica is standing outside the gates. Without a glory: Lumbridge Home Teleport, run west along the river road to Draynor, then north.",
        },
        {
          text: "Enter the manor and climb the staircases to the top floor to talk to Professor Oddenstein.",
          travel:
            "Through the gates, past the fountain in the courtyard, in the manor's front door. Take the staircase up twice — Oddenstein is in the lit laboratory at the top.",
        },
        { text: "He explains he's accidentally turned Ernest into a chicken and needs three items to fix him." },
      ],
    },
    {
      title: "Get the Pressure Gauge",
      steps: [
        {
          text: "Go down to the manor basement and pick up the fish food from a shelf and the poison bottle from the table.",
          travel:
            "Back down to the ground floor, then take the stairs down into the basement. Level 22 skeletons roam down there — run past them rather than fighting if you are low level.",
          notes: ["Watch for level 22 skeletons — flee or kill as needed."],
        },
        { text: "Use the poison on the fish food to make poisoned fish food." },
        { text: "Climb back up out of the basement to the ground floor." },
        {
          text: "Use the poisoned fish food on the fountain in the courtyard in front of the manor.",
          travel: "Out the manor's front door — the fountain is in the walled courtyard between the front door and Veronica's gate.",
        },
        { text: "Search the fountain to retrieve the pressure gauge." },
      ],
    },
    {
      title: "Get the Rubber Tube",
      steps: [
        {
          text: "Enter the ground-floor room with the chemistry apparatus (the south-east room of the manor).",
          travel: "Back inside the manor's front door, take the doorway to the south-east — the room is full of glassware and a strange machine.",
        },
        { text: "Take the rubber tube from the chemistry apparatus." },
      ],
    },
    {
      title: "Get the Oil Can",
      steps: [
        {
          text: "Go up to the first floor and work through the maze of connected rooms to find the key.",
          travel:
            "Take the manor staircase up one level. The first floor is a ring of small rooms joined by doors and levers; slash any spider webs in the corridors with a weapon to pass.",
        },
        {
          text: "Search the bookcases, drawers and crates until you have the key for the locked room and the oil can inside it.",
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
        {
          text: "Return to Professor Oddenstein on the manor's top floor with the pressure gauge, rubber tube and oil can.",
          travel: "Climb the manor staircases back up to the top-floor laboratory.",
        },
        { text: "Talk to Professor Oddenstein to finish his repair." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "300 coins",
  ],
};
