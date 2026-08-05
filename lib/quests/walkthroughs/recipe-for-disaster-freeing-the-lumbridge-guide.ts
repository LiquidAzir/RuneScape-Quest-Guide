import type { QuestWalkthrough } from "../types";

export const rfdLumbridgeGuide: QuestWalkthrough = {
  startPoint:
    "Inspect the Lumbridge Guide in the Lumbridge Castle dining room. Lumbridge Home Teleport to the castle courtyard, go in the north door into the kitchen (north-west room, ground floor), take the staircase down to the cellar and walk through the dining-room doors.",
  itemsRequired: ["Bucket of milk", "Egg", "Pot of flour", "Cake tin"],
  recommended: ["Wizards' Tower teleport (or run from Lumbridge)", "Necklace of passage / fairy ring"],
  sections: [
    {
      title: "Start the subquest",
      steps: [
        {
          text: "Inspect the frozen Lumbridge Guide in the castle dining room and confirm you can make a cake.",
          travel:
            "Lumbridge Home Teleport, into the castle by the north door, left into the kitchen, down the cellar stairs and through the dining-room doors. The Culinaromancer's Chest in the same room sells all four cake ingredients.",
        },
      ],
    },
    {
      title: "Enchant the egg",
      steps: [
        {
          text: "Travel to the Wizards' Tower south-west of Draynor Village.",
          travel:
            "Fairy ring DIS drops you just south of the tower — walk north to the door. No fairy ring: a necklace of passage (Wizards' Tower option) lands you outside the tower, or the Minigame Teleport to Guardians of the Rift puts you in the tower basement (leave through the portal, climb the north ladder). On foot from Lumbridge, run west along the north bank of the river past Draynor, then south over the bridge onto the tower's island.",
        },
        {
          text: "Climb the staircase one flight to the 1st floor and talk to Wizard Traiborn in his room.",
        },
        { text: "Identify 3 mystery NPCs from his visual descriptions to enchant the egg." },
      ],
    },
    {
      title: "Enchant the milk",
      steps: [
        { text: "Talk to Wizard Traiborn on the 1st floor of the Wizards' Tower again." },
        { text: "Answer his trivia questions about RuneScape lore to enchant the milk." },
      ],
    },
    {
      title: "Enchant the flour",
      steps: [
        { text: "Talk to Wizard Traiborn on the 1st floor of the Wizards' Tower a third time." },
        {
          text: "Complete his memory test to enchant the flour.",
          notes: [
            "Don't close the interface with ESC between questions — it resets that portion of the test.",
          ],
        },
      ],
    },
    {
      title: "Bake and serve",
      steps: [
        { text: "Use any of the enchanted ingredients on the cake tin to combine the milk, flour, and egg into a raw cake." },
        {
          text: "Cook the cake on the range in the Lumbridge Castle kitchen.",
          travel:
            "Lumbridge Home Teleport back to the castle courtyard; the range is in the kitchen, the north-west room on the ground floor.",
        },
        {
          text: "Give the finished cake of guidance to the frozen Lumbridge Guide in the castle dining room.",
          travel:
            "Straight down the staircase in the kitchen and through the dining-room doors in the cellar.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,500 Cooking experience",
    "2,500 Magic experience",
    "Lumbridge Guide freed",
  ],
};
