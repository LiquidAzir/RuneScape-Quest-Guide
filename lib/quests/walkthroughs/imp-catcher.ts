import type { QuestWalkthrough } from "../types";

export const impCatcher: QuestWalkthrough = {
  startPoint: "Talk to Wizard Mizgog on the second floor of the Wizards' Tower.",
  itemsRequired: [
    "Red bead",
    "Yellow bead",
    "Black bead",
    "White bead",
  ],
  recommended: [
    "Buy the four beads from the Grand Exchange to skip the imp-killing grind",
    "Some food if you intend to fight imps",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Wizards' Tower south of Draynor Village.",
          notes: ["Use the home teleport to Lumbridge then run south-west, or take a charter ship."],
        },
        { text: "Climb the stairs to the second floor." },
        { text: "Talk to Wizard Mizgog on the second floor of the Wizards' Tower and agree to recover his beads." },
      ],
    },
    {
      title: "Get the four beads",
      steps: [
        {
          text: "Kill imps until you have one red, one yellow, one black, and one white bead.",
          notes: [
            "Imps are level 7 and roam the wilderness, around Falador, Wizards' Tower and many low-level zones.",
            "Drops are random, so this can take a while. Trading the beads from the Grand Exchange is much faster.",
          ],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Wizard Mizgog on the second floor of the Wizards' Tower with all four beads in your inventory." },
        { text: "Talk to Wizard Mizgog on the top floor of the Wizards' Tower to hand the beads in." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "875 Magic experience (a huge early-game boost)",
    "Amulet of accuracy",
  ],
};
