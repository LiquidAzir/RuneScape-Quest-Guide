import type { QuestWalkthrough } from "../types";

export const rfdLumbridgeGuide: QuestWalkthrough = {
  startPoint: "Inspect the Lumbridge Guide in the Lumbridge Castle dining room.",
  itemsRequired: ["Bucket of milk", "Egg", "Pot of flour", "Cake tin"],
  recommended: ["Wizards' Tower teleport (or run from Lumbridge)", "Necklace of passage / fairy ring"],
  sections: [
    {
      title: "Start the subquest",
      steps: [
        { text: "Inspect the Lumbridge Guide and confirm you can make a cake." },
      ],
    },
    {
      title: "Enchant the egg",
      steps: [
        { text: "Travel to the Wizards' Tower (south-west of Draynor)." },
        { text: "Climb to the first floor and talk to Wizard Traiborn." },
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
        { text: "Complete his memory test to enchant the flour." },
      ],
    },
    {
      title: "Bake and serve",
      steps: [
        { text: "Combine the milk, flour, egg, and cake tin into a raw cake." },
        { text: "Cook the cake on a range." },
        { text: "Give the finished cake to the Lumbridge Guide." },
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
