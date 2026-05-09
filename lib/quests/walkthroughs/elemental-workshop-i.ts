import type { QuestWalkthrough } from "../types";

export const elementalWorkshopI: QuestWalkthrough = {
  startPoint: "Search the bookcase in the small house south-west of the bank in Seers' Village.",
  itemsRequired: [
    "Knife or any slash weapon",
    "Pickaxe",
    "Needle + thread + leather",
    "Hammer",
    "4 coal",
  ],
  recommended: ["Combat 15+", "Camelot teleport", "Some food at low levels"],
  enemies: ["Earth elemental (level 35)"],
  sections: [
    {
      title: "Find the workshop",
      steps: [
        { text: "Enter the house south of the anvil in Seers' Village." },
        { text: "Search the eastern bookcase for the battered book." },
        { text: "Use a knife on the book to find the battered key." },
        { text: "Open the odd-looking wall north of the anvil with the key." },
        { text: "Descend the stairs." },
      ],
    },
    {
      title: "Repair the workshop",
      steps: [
        { text: "Enter the northern room and turn the water controls east." },
        { text: "Turn the water controls west of the water wheel." },
        { text: "Pull the lever by the water wheel." },
        { text: "Search crates for leather and a needle if needed." },
        { text: "Use needle + thread + leather to fix the bellows in the eastern room." },
        { text: "Pull the lever by the bellows." },
        { text: "Search the boxes for a stone bowl." },
        { text: "Use the stone bowl on the lava trough." },
        { text: "Use the bowl of lava on the furnace." },
      ],
    },
    {
      title: "Forge the elemental shield",
      steps: [
        { text: "Mine an elemental rock in the western room." },
        { text: "Defeat the Earth elemental and pick up the ore." },
        { text: "Use the elemental ore + 4 coal on the furnace." },
        { text: "Smith the elemental shield at the workbench (use slashed book)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Crafting experience",
    "5,000 Smithing experience",
    "Access to the Elemental Workshop and the ability to make elemental shields",
  ],
};
