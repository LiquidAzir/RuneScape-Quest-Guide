import type { QuestWalkthrough } from "../types";

export const cooksAssistant: QuestWalkthrough = {
  startPoint:
    "Talk to the Cook in Lumbridge Castle's kitchen. Lumbridge Home Teleport drops you in the castle courtyard — walk into the castle and the kitchen is the ground-floor room in the north-west corner, marked by the cooking-pot icon on the minimap.",
  itemsRequired: ["Pot of flour", "Bucket of milk", "Egg"],
  recommended: ["A few coins for the Grand Exchange if you'd rather just buy the items"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Enter Lumbridge Castle and go to the kitchen on the ground floor (north-west corner).",
          travel:
            "Lumbridge Home Teleport lands you in the castle courtyard. Go in through the main doors and turn left — the kitchen is the north-west ground-floor room with the range and the cooking-pot minimap icon.",
        },
        { text: "Talk to the Cook in Lumbridge Castle's kitchen. He needs ingredients to bake the Duke's birthday cake." },
        { text: "Agree to help him." },
      ],
    },
    {
      title: "Get an egg",
      steps: [
        {
          text: "Head to the chicken coop north-east of Lumbridge Castle.",
          travel:
            "Leave the castle east, cross the bridge over the River Lum, then run north past the cow field. The chickens are in the small fenced coop north of the cows, beside the farmhouse.",
        },
        { text: "Pick up an egg from the ground inside the coop." },
      ],
    },
    {
      title: "Get a bucket of milk",
      steps: [
        { text: "Pick up a bucket from the dairy churn building just north of the chicken coop (or take one from the Lumbridge Castle kitchen shelves)." },
        {
          text: "Walk south to the cow field between the coop and the river.",
          travel: "The dairy cows are in the fenced field just south of the chicken coop, straight across the bridge east of Lumbridge Castle.",
        },
        { text: "Use the bucket on a dairy cow (the ones with udders) to fill it with milk." },
      ],
    },
    {
      title: "Get a pot of flour",
      steps: [
        { text: "Pick up a pot from a shelf in the Lumbridge Castle kitchen (or buy one)." },
        {
          text: "Travel north-west of Lumbridge to the wheat field beside the windmill.",
          travel:
            "From Lumbridge Castle run north-west along the Draynor road, past Fred the Farmer's sheep field — the windmill is the tall round building beyond it, with the wheat field right at its foot.",
        },
        { text: "Pick wheat from the field." },
        { text: "Climb the windmill's ladders to the top floor." },
        { text: "Use the wheat on the hopper, then operate the hopper controls." },
        { text: "Go down one floor and collect the flour from the flour bin into your empty pot." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to the Cook in Lumbridge Castle's kitchen.",
          travel: "Lumbridge Home Teleport back to the courtyard, then into the castle and left to the north-west kitchen.",
        },
        { text: "Talk to the Cook to give him the egg, bucket of milk, and pot of flour." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "300 Cooking experience",
    "Permission to use the Cook's range (a chef-hat-and-apron stamp on your record)",
  ],
};
