import type { QuestWalkthrough } from "../types";

export const sheepShearer: QuestWalkthrough = {
  startPoint:
    "Talk to Fred the Farmer in the small house north-west of Lumbridge, beside the sheep field near the windmill. Lumbridge Home Teleport, then run north out of the castle courtyard past the general store and follow the road north-west.",
  itemsRequired: ["Shears (he gives you a pair if you don't have them)"],
  recommended: ["Empty inventory if you plan to carry 20 wool at once"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Fred the Farmer's house north-west of Lumbridge, next to the sheep field by the windmill.",
          travel:
            "Lumbridge Home Teleport puts you in the castle courtyard. Run north past the general store and church, then north-west up the path — Fred's small house sits beside the fenced sheep field, a short walk from the Lumbridge windmill.",
        },
        { text: "Talk to Fred the Farmer and agree to bring him 20 balls of wool." },
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
        {
          text: "Travel back to Lumbridge Castle and climb to the top floor spinning wheel.",
          travel:
            "Run south-east back down the road to Lumbridge Castle (or use Lumbridge Home Teleport if it is off cooldown), then take the staircase up two floors — the spinning wheel is in the room at the top.",
        },
        { text: "Use each piece of wool on the spinning wheel to make a ball of wool." },
        {
          text: "Repeat until all 20 wool are spun into balls of wool.",
          notes: ["Tip: you can buy shears, wool or balls of wool from the Grand Exchange to skip this step."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Fred the Farmer north-west of Lumbridge with 20 balls of wool in your inventory.",
          travel: "Back north-west up the road from Lumbridge Castle, past the general store, to the house beside the sheep field.",
        },
        { text: "Talk to Fred the Farmer and hand over the balls of wool." },
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
