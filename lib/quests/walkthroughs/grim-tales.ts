import type { QuestWalkthrough } from "../types";

export const grimTales: QuestWalkthrough = {
  startPoint:
    "Talk to Sylas just south of the player-owned-house portal in Taverley. Teleport to house (if your POH is in Taverley), or Falador teleport and run west out of the west gate, over the bridge and through the Taverley gate.",
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
        {
          text: "Talk to Sylas by the house portal in Taverley.",
          travel:
            "Teleport to house with your POH in Taverley and step outside. Otherwise Falador teleport, run west out of Falador's west gate, across the bridge and through the Taverley gate — the house portal is in the south of the village and Sylas stands just south of it.",
        },
        {
          text: "Travel to Grimgnash's cave on the north-east side of White Wolf Mountain.",
          travel:
            "Gnome glider to Sindarpos lands you on top of White Wolf Mountain — run north-east down the slope to the cave entrance. On foot: leave Taverley to the north-west and take the mountain pass up (the same pass that runs through to Catherby), then bear north-east.",
        },
        { text: "Talk to Grimgnash the griffin at his nest and pick the dialogue that gets him to sleep." },
        { text: "Steal a feather from his nest while he sleeps." },
        {
          text: "Return the feather to Sylas in Taverley.",
          travel: "Teleport to house (Taverley) or run back down the mountain pass south-east into the village.",
        },
      ],
    },
    {
      title: "Rupert's helmet",
      steps: [
        {
          text: "Go to Miazrqa's stone tower just south of the Mind altar.",
          travel:
            "A Mind altar teleport tablet drops you at the mysterious ruins — run south to the tower. No tablet: Falador teleport, run north out of the north gate past Doric's hut, then north-east towards Ice Mountain; the tower stands between the Captured Temple and Ice Mountain.",
        },
        { text: "Climb over the crumbling wall on the east side of the tower (58 Thieving)." },
        { text: "Talk into the drain pipe at the base of the tower twice." },
        { text: "Climb the beard that Rupert lowers (59 Agility)." },
        { text: "Talk to Rupert at the top of the tower." },
        { text: "Talk to Miazrqa in the tower for the key to her cellar." },
      ],
    },
    {
      title: "Miazrqa's pendant",
      steps: [
        {
          text: "Enter the basement of the witch's house in Taverley.",
          travel:
            "Teleport back to Taverley (house teleport, or Falador teleport and west through the Taverley gate). The witch's house is the building right next to the house portal — go inside and down to the basement.",
        },
        { text: "Play the piano notes E-F-E-D-C on the right side, then A-E-G-A on the left." },
        { text: "Search the piano for a shrunk ogleroot." },
        { text: "Add the ogleroot to an unfinished tarromin potion (52 Herblore) to make a shrinking potion." },
        { text: "Drink the shrinking potion beside the mouse hole in the basement." },
        { text: "Follow the nails through the wall cavity to reach the pendant." },
        {
          text: "Return the pendant to Miazrqa at her tower.",
          travel: "Mind altar teleport then run south to the tower, or Falador teleport and run north-east past Doric's hut towards Ice Mountain.",
        },
      ],
    },
    {
      title: "The beanstalk",
      steps: [
        {
          text: "Give Rupert's helmet to Sylas in Taverley.",
          travel: "House teleport to Taverley, or Falador teleport and run west through the Taverley gate to the house portal.",
        },
        {
          text: "Plant and water the magic beans in the plot south-west of the Taverley tree patch (45 Farming).",
          travel:
            "From the house portal run north-west through Taverley to the tree patch beside the herb patch; the bare plot is immediately south-west of it.",
        },
        { text: "Climb the beanstalk (59 Agility)." },
        { text: "Defeat Glod (level 138) and collect the golden goblin." },
        { text: "Use a shrinking potion on the beanstalk." },
        { text: "Chop down the shrunken beanstalk (71 Woodcutting)." },
        { text: "Talk to Sylas by the house portal in Taverley to finish." },
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
