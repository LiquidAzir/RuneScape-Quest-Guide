import type { QuestWalkthrough } from "../types";

export const witchsPotion: QuestWalkthrough = {
  startPoint: "Talk to Hetty the witch in her house in Rimmington.",
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
          notes: ["Walk west from the Falador south gate, or use a Falador teleport and run south."],
        },
        { text: "Enter Hetty's house and talk to her." },
        { text: "Agree to help her brew a magic potion." },
      ],
    },
    {
      title: "Gather the four ingredients",
      steps: [
        {
          text: "Get an Eye of newt: buy from Betty's Magic Emporium in Port Sarim or any magic shop.",
        },
        {
          text: "Get an Onion: pick one from the field east of Rimmington (south of Falador) or near Lumbridge.",
        },
        {
          text: "Get a Rat's tail: kill rats until one drops a tail.",
          notes: ["Rats spawn in many starter areas — Lumbridge cellar, Varrock sewers, etc."],
        },
        {
          text: "Get Burnt meat: cook raw meat on a fire or range at low Cooking levels until it burns, or buy directly.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Hetty's house in Rimmington with all four ingredients in your inventory." },
        { text: "Talk to Hetty in her Rimmington house — she brews the potion and asks you to drink it." },
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
