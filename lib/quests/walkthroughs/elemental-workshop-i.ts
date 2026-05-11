import type { QuestWalkthrough } from "../types";

export const elementalWorkshopI: QuestWalkthrough = {
  startPoint:
    "Search the eastern bookcase inside the small house south of the anvil in Seers' Village (the anvil is on the east side of the village; the house is the small one immediately south of it). The book triggers the quest.",
  itemsRequired: [
    "Knife (or any slash weapon)",
    "Pickaxe (any — used to mine elemental ore)",
    "Needle + thread + leather (to repair the bellows)",
    "Hammer",
    "4 coal",
  ],
  recommended: [
    "Combat 15+",
    "Camelot teleport (puts you next door to Seers' Village)",
    "Some food at low levels",
  ],
  enemies: ["Earth elemental (level 35) — spawns when you mine elemental ore in the workshop"],
  sections: [
    {
      title: "Find the workshop",
      steps: [
        {
          text: "Travel to Seers' Village (Camelot teleport, then walk one screen east) and enter the small house south of the anvil on the east side of the village.",
        },
        {
          text: "Search the eastern bookcase inside the house to take the battered book.",
        },
        {
          text: "Use a knife (or any slash weapon) on the battered book to slash it open and find the battered key inside.",
        },
        {
          text: "Walk north to the odd-looking wall just north of the anvil. Use the battered key on it to reveal a hidden door.",
        },
        {
          text: "Open the door and descend the stairs into the Elemental Workshop.",
        },
      ],
    },
    {
      title: "Repair the workshop",
      steps: [
        {
          text: "Walk into the northern room (with the broken water wheel). Turn the water control valve on the east side of the wheel.",
        },
        {
          text: "Walk to the second water control valve west of the water wheel and turn it as well.",
        },
        {
          text: "Pull the lever next to the water wheel to start it spinning.",
        },
        {
          text: "If you don't have leather, a needle, and thread, search the crates around the workshop floor — leather and needles spawn in the workshop crates.",
        },
        {
          text: "Walk to the eastern room (with the broken bellows). Use needle + thread + leather on the broken bellows to repair them.",
        },
        {
          text: "Pull the lever next to the now-repaired bellows to fire them up.",
        },
        {
          text: "Search the boxes in the workshop until you find a stone bowl.",
        },
        {
          text: "Use the stone bowl on the lava trough at the south end of the workshop to fill it.",
        },
        {
          text: "Use the bowl of lava on the furnace in the central workshop room to fuel it.",
        },
      ],
    },
    {
      title: "Forge the elemental shield",
      steps: [
        {
          text: "Walk to the western room and mine an elemental rock there with your pickaxe.",
        },
        {
          text: "An Earth elemental (level 35) appears when you mine — defeat it. Pick up the elemental ore.",
        },
        {
          text: "Take the elemental ore + 4 coal to the central furnace and use them on it to smelt an elemental bar.",
        },
        {
          text: "Walk to the workbench in the workshop (south side) and use the elemental bar on the workbench together with the slashed (opened) battered book to smith an elemental shield.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Crafting experience",
    "5,000 Smithing experience",
    "Access to the Elemental Workshop (lets you craft additional elemental shields)",
  ],
};
