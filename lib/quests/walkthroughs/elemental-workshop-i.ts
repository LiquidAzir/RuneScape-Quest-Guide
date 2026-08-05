import type { QuestWalkthrough } from "../types";

export const elementalWorkshopI: QuestWalkthrough = {
  startPoint:
    "Search the eastern bookcase inside the small house next to the anvil in south-east Seers' Village. Getting there: Camelot Teleport drops you at the Camelot castle gates — run south-east past the Seers' Village bank and the anvil building is the small one just south-east of it. No Camelot teleport: take the Catherby/Seers' boat or run north from Ardougne along the coast road, or use a Games necklace to Barbarian Outpost and run south-east through the Seers' Village gate.",
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
          text: "Enter the small house beside the anvil in south-east Seers' Village.",
          travel:
            "Camelot Teleport, then run south-east through Seers' Village past the bank. The anvil sits outdoors on the east side of the village; the house you want is the small one immediately south of it. Without the teleport, use a Games necklace to Barbarian Outpost and run south-east, or a Skills necklace to the Fishing Guild and run east.",
        },
        {
          text: "Search the eastern bookcase inside the house to take the battered book.",
        },
        {
          text: "Use a knife (or any slash weapon) on the battered book to slash it open and find the battered key inside.",
        },
        {
          text: "Walk north to the odd-looking wall just north of the anvil and use the battered key on it to reveal a hidden door.",
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
          text: "Turn the water control valve on the east side of the broken water wheel in the northern room.",
          travel:
            "From the bottom of the entry stairs, follow the corridor north into the room dominated by the stalled water wheel.",
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
          text: "Use needle + thread + leather on the broken bellows in the eastern room to repair them.",
          travel:
            "Head back south out of the water wheel room and take the east passage; the bellows are the large sagging leather machine against the east wall.",
        },
        {
          text: "Pull the lever next to the now-repaired bellows to fire them up.",
        },
        {
          text: "Search the boxes in the workshop until you find a stone bowl.",
        },
        {
          text: "Use the stone bowl on the lava trough at the south end of the workshop to fill it.",
          travel: "The lava trough runs along the southern wall of the workshop, below the furnace room.",
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
          text: "Mine an elemental rock in the western room with your pickaxe.",
          travel:
            "From the central furnace room take the west passage — the elemental rocks are the pale glowing rocks along the far west wall.",
        },
        {
          text: "An Earth elemental (level 35) appears when you mine — defeat it, then pick up the elemental ore.",
        },
        {
          text: "Take the elemental ore + 4 coal to the central furnace and use them on it to smelt an elemental bar.",
        },
        {
          text: "Use the elemental bar and the slashed battered book on the workbench on the south side of the workshop to smith an elemental shield.",
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
