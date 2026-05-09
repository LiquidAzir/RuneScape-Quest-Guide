import type { QuestWalkthrough } from "../types";

export const rfdGoblinGenerals: QuestWalkthrough = {
  startPoint: "Inspect a goblin general in Lumbridge Castle dining room.",
  itemsRequired: [
    "Bread",
    "Orange (or orange slices — use a knife on an orange)",
    "Blue, black, green, or purple dye",
    "Spice or gnome spice",
    "Fishing bait",
    "Bucket of water",
    "Charcoal (or ground charcoal)",
  ],
  recommended: ["Falador and Lumbridge teleports", "Goblin village sphere if you have one"],
  sections: [
    {
      title: "Start the subquest",
      steps: [
        { text: "Inspect a goblin general in the dining room." },
        { text: "Travel to Goblin Village and climb down the ladder in the north-east building." },
        { text: "Talk to the Goblin Cook (option 2 then 1)." },
      ],
    },
    {
      title: "Make the slop of compromise",
      steps: [
        { text: "Give charcoal to the Goblin Cook." },
        { text: "Use a knife on an orange to make orange slices, then dye them with the goblin-acceptable colour." },
        { text: "Use spice on fishing bait to make spicy maggots." },
        { text: "Use a bucket of water on bread to make soggy bread." },
        { text: "Talk to the Goblin Cook again with all 3 ingredients to combine them." },
      ],
    },
    {
      title: "Free the generals",
      steps: [
        { text: "Use the slop of compromise on the goblin generals in Lumbridge." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "1,000 Cooking / Farming / Crafting experience each", "Generals freed"],
};
