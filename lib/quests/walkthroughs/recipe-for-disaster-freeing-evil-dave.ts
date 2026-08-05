import type { QuestWalkthrough } from "../types";

export const rfdEvilDave: QuestWalkthrough = {
  startPoint:
    "Inspect Evil Dave frozen in the Lumbridge Castle dining room — Lumbridge Home Teleport, walk into the castle and go to the long banquet hall on the ground floor, just east of the kitchen.",
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
        {
          text: "Inspect Evil Dave in the Lumbridge Castle dining room to start.",
          travel:
            "Lumbridge Home Teleport, then into the castle — the dining room is the long banquet hall on the ground floor immediately east of the kitchen, where the frozen guests sit around the table.",
        },
        {
          text: "Talk to Doris, Evil Dave's mother, in her house west of the Edgeville bank.",
          travel:
            "Amulet of glory → Edgeville, or Varrock teleport then run west along the road out of the west gate. Doris's house is on the south side of the road a few steps west of the Edgeville bank.",
        },
        {
          text: "Climb down the ladder inside Doris's house into the basement and talk to Evil Dave.",
        },
        { text: "Climb back up the ladder and talk to Doris again." },
      ],
    },
    {
      title: "Catch hellrats and find the right spices",
      steps: [
        { text: "Back in the basement, use your cat on the hellrats to make it hunt them and bring you spices." },
        { text: "You'll get 4 colours of spice: yellow, orange, red, brown." },
        {
          text: "Test each colour individually with stews (1, 2 or 3 doses) by giving them to Evil Dave in the basement.",
          notes: ["Note which dose he approves for each colour. The combinations are randomised per player."],
        },
        { text: "Once you know all 4 doses, combine all 4 colours at the right amounts into one stew." },
      ],
    },
    {
      title: "Free Evil Dave",
      steps: [
        {
          text: "Give the final spicy stew to the frozen Evil Dave in the Lumbridge Castle dining room.",
          travel:
            "Lumbridge Home Teleport, into the castle and east into the ground-floor dining hall where the frozen guests are seated.",
        },
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
