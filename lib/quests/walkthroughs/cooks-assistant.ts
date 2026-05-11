import type { QuestWalkthrough } from "../types";

export const cooksAssistant: QuestWalkthrough = {
  startPoint: "Talk to the Cook in Lumbridge Castle's kitchen (ground floor).",
  itemsRequired: ["Pot of flour", "Bucket of milk", "Egg"],
  recommended: ["A few coins for the Grand Exchange if you'd rather just buy the items"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Enter Lumbridge Castle and head to the kitchen on the ground floor (north-west corner)." },
        { text: "Talk to the Cook. He needs ingredients to bake the Duke's birthday cake." },
        { text: "Agree to help him." },
      ],
    },
    {
      title: "Get an egg",
      steps: [
        {
          text: "Head to the chicken coop just east of Lumbridge Castle (across the river, north of the cow field).",
          notes: ["Cross the bridge east of Lumbridge and look for the small fenced coop."],
        },
        { text: "Pick up an egg from the ground inside the coop." },
      ],
    },
    {
      title: "Get a bucket of milk",
      steps: [
        { text: "Pick up a bucket from the dairy churn building just north of the chicken coop (or take one from the Lumbridge Castle kitchen if needed)." },
        { text: "Walk one screen north to the cow field." },
        { text: "Use the bucket on a dairy cow (the ones with udders) to fill it with milk." },
      ],
    },
    {
      title: "Get a pot of flour",
      steps: [
        { text: "Pick up a pot from a shelf in the Lumbridge Castle kitchen (or buy one)." },
        { text: "Travel north-west to the Wheat Field next to the windmill in Lumbridge." },
        { text: "Pick wheat from the field." },
        { text: "Climb the windmill to the top floor." },
        { text: "Use the wheat on the hopper, then operate the hopper controls." },
        { text: "Go down one floor and collect the flour from the flour bin into your empty pot." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Cook in Lumbridge Castle's kitchen." },
        { text: "Talk to the Cook in Lumbridge Castle's kitchen to give him the egg, bucket of milk, and pot of flour." },
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
