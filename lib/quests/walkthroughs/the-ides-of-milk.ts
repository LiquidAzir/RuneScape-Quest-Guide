import type { QuestWalkthrough } from "../types";

export const theIdesOfMilk: QuestWalkthrough = {
  startPoint:
    "Talk to Cassius by the small pond north-west of Lumbridge. Use Lumbridge Home Teleport, leave the castle by the north gate, cross the River Lum bridge west and follow the riverbank north — Cassius is standing at the pond just off the road.",
  itemsRequired: [],
  recommended: ["Combat 15+"],
  enemies: ["Brutus the Bull"],
  sections: [
    {
      title: "Investigate the cows",
      steps: [
        {
          text: "Talk to Cassius by the pond north-west of Lumbridge.",
          travel:
            "Lumbridge Home Teleport (or ring of dueling → Castle Wars is far — the home teleport is fastest). From the castle courtyard head north past the general store, cross the River Lum bridge to the west bank and run north; Cassius is at the pond beside the road.",
        },
        {
          text: "Talk to Gillie Groats, the milkmaid at the Lumbridge cow field, about cow productivity.",
          travel:
            "Head back east over the Lum bridge and follow the road north-east out of Lumbridge. The cow field is the fenced pasture on the west side of the road, just south of the Lumbridge windmill — Gillie stands by the dairy cow pen.",
        },
        {
          text: "Talk to Seth Groats inside the farmhouse at the north end of the Lumbridge cow field.",
        },
        {
          text: "Search the shelves in Seth's farmhouse for The Groats Principles book.",
        },
        {
          text: "Return the book to Cassius at the pond north-west of Lumbridge for a milk sample.",
          travel:
            "Run back south-west down the road, cross the River Lum bridge north of Lumbridge Castle, and follow the west bank north to the pond.",
        },
      ],
    },
    {
      title: "Test the milk",
      steps: [
        { text: "Drink the milk sample in front of Cassius." },
        {
          text: "Take a second milk sample to Duke Horacio on the first floor of Lumbridge Castle.",
          travel:
            "Run south-east back over the Lum bridge into Lumbridge and enter the castle. Climb the staircase in the north-west corner of the courtyard — the Duke is in the room at the top.",
        },
        {
          text: "Talk to Gillie Groats again at the Lumbridge cow field.",
          travel:
            "Leave the castle and follow the road north-east out of Lumbridge to the fenced pasture south of the windmill.",
        },
        { text: "Drink the milk sample in front of Gillie to receive a permit." },
      ],
    },
    {
      title: "Defeat Brutus",
      steps: [
        { text: "Open the pen in the north-east corner of the cow field." },
        { text: "Defeat the bull (Brutus)." },
        { text: "Talk to Gillie Groats at the cow field." },
        {
          text: "Talk to Cassius by the pond north-west of Lumbridge.",
          travel:
            "Run south-west down the road into Lumbridge, cross the River Lum bridge north of the castle, and follow the west bank north to the pond.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Brutus (cow boss for re-fights)",
    "Cowbell amulet",
    "Magic lamp (1,000 XP in any combat skill)",
  ],
};
