import type { QuestWalkthrough } from "../types";

export const rfdGoblinGenerals: QuestWalkthrough = {
  startPoint:
    "Inspect a goblin general in the Lumbridge Castle dining room. Lumbridge Home Teleport to the castle courtyard, in through the north door to the kitchen (north-west room, ground floor), down the cellar staircase and through the dining-room doors.",
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
        {
          text: "Inspect one of the frozen goblin generals in the Lumbridge Castle dining room.",
          travel:
            "Lumbridge Home Teleport, into the castle by the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        {
          text: "Travel to Goblin Village and climb down the ladder in the hut just south of the generals.",
          travel:
            "A Goblin Village sphere (from Another Slice of H.A.M.) drops you straight into the village. Otherwise Falador Teleport to Falador square, leave by the north gate and follow the path north past Doric's hut — the valley's only entrance is at its south end.",
        },
        {
          text: "Talk to Mudknuckles, the goblin cook, in the Goblin Village basement (dialogue option 2, then 1).",
        },
      ],
    },
    {
      title: "Make the slop of compromise",
      steps: [
        {
          text: "Give charcoal to Mudknuckles and survive the cauldron explosion cutscene.",
          notes: [
            "Charcoal is sold at Jiminua's Jungle Store in Tai Bwo Wannai and Gunslik's Assorted Items in Shilo Village.",
          ],
        },
        {
          text: "Use a knife on an orange to make orange slices, then use blue, black, green, or purple dye on them.",
          notes: [
            "Red, yellow, orange and pink dyes will not work.",
            "Aggie in Draynor Village makes blue, red and yellow dye; a purple dye spawns directly east of the spirit tree on the Khazard Battlefield, south of Ardougne Castle.",
          ],
        },
        { text: "Use spice on fishing bait to make spicy maggots." },
        { text: "Use a bucket of water on bread to make soggy bread." },
        { text: "Give all three ingredients to Mudknuckles in the Goblin Village basement to get the slop of compromise." },
      ],
    },
    {
      title: "Free the generals",
      steps: [
        {
          text: "Use the slop of compromise on the goblin generals in the Lumbridge Castle dining room.",
          travel:
            "Lumbridge Home Teleport to the castle courtyard, in the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "1,000 Cooking / Farming / Crafting experience each", "Generals freed"],
};
