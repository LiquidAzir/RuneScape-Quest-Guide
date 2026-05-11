import type { QuestWalkthrough } from "../types";

export const sheepShearer: QuestWalkthrough = {
  startPoint: "Talk to Fred the Farmer in the small house just north of Lumbridge.",
  itemsRequired: ["Shears (he gives you a pair if you don't have them)"],
  recommended: ["Empty inventory if you plan to carry 20 wool at once"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Fred the Farmer's house, north of Lumbridge near the windmill." },
        { text: "Talk to Fred. Agree to bring him 20 balls of wool." },
        { text: "Take a pair of shears from his house if you don't have any." },
      ],
    },
    {
      title: "Shear and spin 20 wool",
      steps: [
        { text: "Enter the sheep pen next to Fred's house." },
        {
          text: "Use the shears on sheep with full coats to collect wool. Repeat until you have 20.",
          notes: ["Sheep with no wool look pink/skinny — wait for them to regrow or use a different one."],
        },
        { text: "Travel south-west to the Lumbridge windmill." },
        { text: "Climb to the top floor and use each piece of wool on the spinning wheel to make a ball of wool." },
        {
          text: "Repeat until all 20 wool are spun into balls of wool.",
          notes: ["Tip: you can buy shears, wool or balls of wool from the Grand Exchange to skip this step."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Fred the Farmer in the small house just north of Lumbridge with 20 balls of wool in your inventory." },
        { text: "Talk to Fred the Farmer in the small house north of Lumbridge and hand over the balls of wool." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "150 Crafting experience",
    "60 coins",
  ],
};
