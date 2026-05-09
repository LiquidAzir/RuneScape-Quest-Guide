import type { QuestWalkthrough } from "../types";

export const grimTales: QuestWalkthrough = {
  startPoint: "Talk to Sylas by the POH portal in Taverley.",
  itemsRequired: [
    "2 Tarromin potion (unfinished) — or 2 vials of water + 2 tarromins",
    "Seed dibber",
    "Watering can (1+ dose)",
    "Any axe",
    "Some food + good armour + weapon",
  ],
  recommended: [
    "Combat 55+",
    "43+ Prayer for Protect from Melee",
    "Falador / Mind Altar teleports",
    "House teleports set to Taverley",
    "Prayer potions",
  ],
  enemies: [
    "Glod (level 138) — boss giant",
    "Mouse (level 95)",
    "Experiment No. 2",
  ],
  sections: [
    {
      title: "Get the griffin's feather",
      steps: [
        { text: "Talk to Sylas." },
        { text: "Travel to the north-east side of White Wolf Mountain." },
        { text: "Talk to Grimgnash the griffin with the specific dialogue." },
        { text: "Steal a feather from his nest." },
        { text: "Return the feather to Sylas." },
      ],
    },
    {
      title: "Rupert's helmet",
      steps: [
        { text: "Go to the stone tower south of the Mind Altar." },
        { text: "Climb the crumbling wall (58 Thieving)." },
        { text: "Talk into the drain pipe twice." },
        { text: "Climb the beard (59 Agility)." },
        { text: "Talk to Rupert." },
        { text: "Talk to Miazrqa for a key." },
      ],
    },
    {
      title: "Miazrqa's pendant",
      steps: [
        { text: "Enter the witch's house basement." },
        { text: "Play piano notes E-F-E-D-C (right) then A-E-G-A (left)." },
        { text: "Search the piano for a shrunk ogleroot." },
        { text: "Add ogleroot to your unfinished potion (52 Herblore) for shrinking potion." },
        { text: "Drink the shrinking potion by the mouse hole." },
        { text: "Navigate the nails to the pendant location." },
        { text: "Return the pendant to Miazrqa." },
      ],
    },
    {
      title: "The beanstalk",
      steps: [
        { text: "Give Rupert's helmet to Sylas." },
        { text: "Plant + water beans south-west of the Taverley tree patch (45 Farming)." },
        { text: "Climb the beanstalk (59 Agility)." },
        { text: "Defeat Glod (level 138) and collect the golden goblin." },
        { text: "Use a shrinking potion on the beanstalk." },
        { text: "Chop the beanstalk (71 Woodcutting)." },
        { text: "Talk to Sylas." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "60,000 Woodcutting experience",
    "25,000 Agility experience",
    "25,000 Thieving experience",
    "15,000 Herblore experience",
    "10,000 Farming experience",
    "5,000 Hitpoints experience",
    "Dwarven helmet",
  ],
};
