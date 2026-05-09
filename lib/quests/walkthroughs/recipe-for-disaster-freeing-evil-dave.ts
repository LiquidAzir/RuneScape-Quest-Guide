import type { QuestWalkthrough } from "../types";

export const rfdEvilDave: QuestWalkthrough = {
  startPoint: "Inspect Evil Dave in the Lumbridge Castle dining room.",
  itemsRequired: ["A cat (NOT overgrown)", "Up to 9 bowls of stew"],
  recommended: [
    "25 Cooking (boostable) for stew making",
    "Lumbridge teleport",
    "Fast travel to Edgeville",
    "Fish or buckets of milk to keep your cat happy",
  ],
  sections: [
    {
      title: "Find Evil Dave",
      steps: [
        { text: "Inspect Evil Dave to start." },
        { text: "Talk to Doris, his mother, west of the Edgeville bank." },
        { text: "Go down into the Edgeville basement and talk to Evil Dave." },
        { text: "Return upstairs to Doris." },
      ],
    },
    {
      title: "Catch hellrats and find the right spices",
      steps: [
        { text: "In the basement, use your cat to catch hellrats and obtain spices." },
        { text: "You'll get 4 colours of spice: yellow, orange, red, brown." },
        {
          text: "Test each colour individually with stews (1, 2 or 3 doses) by giving them to Evil Dave.",
          notes: ["Note which dose he approves for each colour. The combinations are randomised per player."],
        },
        { text: "Once you know all 4 doses, combine all 4 colours at the right amounts into one stew." },
      ],
    },
    {
      title: "Free Evil Dave",
      steps: [
        { text: "Give the final spicy stew to Evil Dave in Lumbridge." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "7,000 Cooking experience",
    "Ability to catch hellrats and feed them to your cat to make a hellcat",
    "Spicy stew skill-boosting cooking unlock",
    "Evil Dave freed",
  ],
};
