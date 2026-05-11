import type { QuestWalkthrough } from "../types";

export const rfdPiratePete: QuestWalkthrough = {
    startPoint:
      "Inspect Pirate Pete frozen in time inside the Lumbridge Castle dining room (the long banquet hall on the ground floor of Lumbridge Castle, just east of the kitchen — Pete is the pirate at the long table with the other guests).",
  itemsRequired: [
    "Raw cod",
    "Bread",
    "Knife",
    "Pestle and mortar",
    "Empty fishbowl",
    "Needle",
    "3 bronze wires",
  ],
  recommended: [
    "Spare raw cod, bread, kelp, crab meat (in case the fishcake burns)",
    "Graceful or weight-reducing clothing (must be < 27kg underwater)",
    "Combat gear and food",
  ],
  enemies: ["5 Mudskippers (level 30/31)", "1 Crab (level 21/23)"],
  sections: [
    {
      title: "Get the recipe",
      steps: [
        {
          text: "Inspect Pirate Pete in the Lumbridge Castle dining room.",
        },
        {
          text: "Walk west to the Lumbridge Castle kitchen (next room over) and talk to the Cook about protecting Pirate Pete.",
        },
        {
          text: "Read all 5 chat options with the Cook about each ingredient (cod, bread, kelp, crab meat, fishbowl helmet) to learn the full fishcake recipe.",
        },
        {
          text: "Use a pestle and mortar on raw cod to make ground cod.",
        },
        {
          text: "Use a knife on bread to make breadcrumbs.",
        },
      ],
    },
    {
      title: "Diving in Port Khazard",
      steps: [
        {
          text: "Travel to Port Khazard (south of East Ardougne, on the south coast — Charter ship from any port, fairy ring AKQ + run east, or Khazard teleport tab from Pet Shop). Walk to the docks on the east side of Port Khazard and find Murphy at the diving boat.",
        },
        { text: "Agree to go diving with him." },
        { text: "Make the fishbowl helmet (use needle + 3 bronze wires + empty fishbowl)." },
        { text: "Equip the fishbowl helmet and diving apparatus (must be under 27kg)." },
        { text: "Once underwater, collect 3+ kelp." },
        { text: "Talk to Nung in the Mogre Camp underwater cave." },
        { text: "Gather 5 rocks and enter the cave." },
        { text: "Kill 5 mudskippers for hides." },
        { text: "Talk to Nung in the Mogre Camp underwater cave twice." },
        { text: "Enter the crab pen, defeat a crab, and collect 3+ crab meat." },
        { text: "Use pestle and mortar on kelp and crab meat to grind them." },
      ],
    },
    {
      title: "Make and serve the fishcake",
      steps: [
        { text: "Teleport (or climb the anchor) to exit the underwater area." },
        { text: "Return to the Lumbridge Cook." },
        { text: "Combine all ingredients into raw fishcake and cook it on a range." },
        { text: "Use the cooked fishcake on Pirate Pete." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Cooking / Crafting / Fishing / Smithing experience each",
    "Ability to dive at Port Khazard",
    "Pirate Pete freed",
  ],
};
