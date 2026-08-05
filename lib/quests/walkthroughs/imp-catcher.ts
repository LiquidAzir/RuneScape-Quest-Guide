import type { QuestWalkthrough } from "../types";

export const impCatcher: QuestWalkthrough = {
  startPoint:
    "Talk to Wizard Mizgog on the top floor of the Wizards' Tower, on the island south of Draynor Village. Amulet of glory to Draynor Village then run south over the bridge, or Lumbridge Home Teleport and run west along the south side of the swamp.",
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
          text: "Travel to the Wizards' Tower on the island south of Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village, then run south from the bank down the path and across the bridge to the tower. No glory: Lumbridge Home Teleport and run west along the south edge of the swamp, or Falador teleport and run south-east past Draynor.",
        },
        { text: "Climb the tower's staircases up to the top floor." },
        { text: "Talk to Wizard Mizgog on the top floor and agree to recover his beads." },
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
        {
          text: "Return to Wizard Mizgog on the top floor of the Wizards' Tower with all four beads in your inventory.",
          travel:
            "Amulet of glory to Draynor Village and run south across the bridge to the tower, then up the stairs to the top floor.",
        },
        { text: "Talk to Wizard Mizgog to hand the beads in." },
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
