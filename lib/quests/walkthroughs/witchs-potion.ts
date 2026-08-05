import type { QuestWalkthrough } from "../types";

export const witchsPotion: QuestWalkthrough = {
  startPoint:
    "Talk to Hetty the witch in her house in Rimmington. Cast Falador Teleport and run south-west past the Crafting Guild, or take a charter ship to Port Sarim and run west — once in Rimmington, Hetty's house is the one marked with the quest-start icon on the minimap.",
  itemsRequired: [
    "Eye of newt (buy from a magic shop)",
    "Onion",
    "Rat's tail",
    "Burnt meat (cook any raw meat until it burns)",
  ],
  recommended: ["A bronze axe and tinderbox if you want to make burnt meat from scratch"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Rimmington, south-west of Falador.",
          travel:
            "Falador Teleport, then run out of Falador's south gate and follow the road south-west past the Crafting Guild into Rimmington. Alternatives: amulet of glory to Draynor Village and run west along the coast road, or a charter ship to Port Sarim and a short run west.",
        },
        { text: "Enter Hetty's house in Rimmington and talk to her." },
        { text: "Agree to help her brew a magic potion." },
      ],
    },
    {
      title: "Gather the four ingredients",
      steps: [
        {
          text: "Get an Eye of newt from Betty's Magic Emporium in Port Sarim (or any magic shop).",
          travel:
            "From Rimmington run east along the road into Port Sarim. Betty's Magic Emporium is the shop with the star sign on the main north-south road, a short way north of the docks.",
        },
        {
          text: "Pick an Onion from a vegetable patch.",
          travel:
            "The reliable patch is behind Fred the Farmer's house north-west of Lumbridge (Lumbridge Home Teleport, run north-west past the sheep pen). There are also onions in the fields on the road between Rimmington and Falador if you would rather not leave the area.",
        },
        {
          text: "Get a Rat's tail by killing rats until one drops a tail.",
          notes: ["Rats spawn in many starter areas — the Lumbridge Castle cellar, the Varrock sewers, and the Port Sarim jail yard."],
        },
        {
          text: "Get Burnt meat: cook raw meat on a fire or range at a low Cooking level until it burns.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Hetty's house in Rimmington with all four ingredients in your inventory.",
          travel: "Falador Teleport and run south-west past the Crafting Guild, or run west along the road from Port Sarim.",
        },
        { text: "Talk to Hetty — she brews the potion and asks you to drink it." },
        { text: "Drink the potion when prompted." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "325 Magic experience",
  ],
};
