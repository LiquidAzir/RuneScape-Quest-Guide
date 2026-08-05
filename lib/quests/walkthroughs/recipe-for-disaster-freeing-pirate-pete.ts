import type { QuestWalkthrough } from "../types";

export const rfdPiratePete: QuestWalkthrough = {
  startPoint:
    "Inspect Pirate Pete frozen in time inside the Lumbridge Castle dining room (the long banquet hall on the ground floor, just east of the kitchen — Pete is the pirate at the long table with the other guests). Lumbridge Home Teleport drops you at the castle door.",
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
          travel:
            "Lumbridge Home Teleport, walk in the castle's main door and go to the long banquet hall on the ground floor east of the kitchen — Pete is frozen at the table with the other guests.",
        },
        {
          text: "Walk west into the Lumbridge Castle kitchen (the next room over) and talk to the Cook about protecting Pirate Pete.",
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
          text: "Travel to Port Khazard and find Murphy at the diving boat on the eastern docks.",
          travel:
            "Charter ship to Port Khazard from any charter port is the direct option. Otherwise Ardougne teleport to the market square, then run south past the Ardougne Zoo, out of the south gate and follow the coast road south-east into Port Khazard. Murphy stands beside the small boat at the eastern dockside, near the Khazard general store.",
        },
        { text: "Agree to go diving with him." },
        { text: "Make the fishbowl helmet (use needle + 3 bronze wires + empty fishbowl)." },
        { text: "Equip the fishbowl helmet and diving apparatus (must be under 27kg)." },
        { text: "Once underwater, collect 3+ kelp from the seaweed around the sea floor." },
        {
          text: "Follow the sea floor east to the Mogre Camp cave mouth and talk to Nung outside it.",
        },
        { text: "Gather 5 rocks from the sea floor and enter the cave." },
        { text: "Kill 5 mudskippers for their hides." },
        { text: "Talk to Nung in the Mogre Camp twice." },
        { text: "Enter the crab pen, defeat a crab and collect 3+ crab meat." },
        { text: "Use the pestle and mortar on kelp and crab meat to grind them." },
      ],
    },
    {
      title: "Make and serve the fishcake",
      steps: [
        {
          text: "Teleport out (or climb the anchor rope) to leave the underwater area.",
        },
        {
          text: "Return to the Cook in the Lumbridge Castle kitchen.",
          travel:
            "Lumbridge Home Teleport, into the castle and through to the ground-floor kitchen in the north-west corner where the Cook and the range are.",
        },
        { text: "Combine all the ingredients into a raw fishcake and cook it on the kitchen range." },
        { text: "Use the cooked fishcake on Pirate Pete in the dining room next door." },
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
