import type { QuestWalkthrough } from "../types";

export const lunarDiplomacy: QuestWalkthrough = {
  startPoint:
    "Talk to Lokar Searunner on the westernmost pier of Rellekka. Enchanted lyre or Fremennik sea boots 3 teleport straight to Rellekka; otherwise Camelot Teleport and run north past Sinclair Mansion and the coal trucks, then north-west into the village.",
  itemsRequired: [
    "Tinderbox",
    "Bullseye lantern (lit)",
    "Guam leaf + Marrentill",
    "Pestle and mortar",
    "Hammer",
    "Needle + 2 thread",
    "Axe",
    "Pickaxe",
    "Spade",
    "All four elemental talismans (Air, Fire, Water, Earth) — or Abyss access",
    "Dramen staff",
    "Combat gear",
    "~1,000 coins",
  ],
  recommended: [
    "Combat 50+",
    "Enchanted lyre for fast Rellekka return",
    "Spare dramen staves in case",
  ],
  enemies: [
    "Multiple Suqah (level 111) — kill until you get a tooth and 4 hides",
    "Me (level 79) — final dream-world fight",
  ],
  sections: [
    {
      title: "Get the seal of passage",
      steps: [
        {
          text: "Talk to Lokar Searunner on the westernmost pier of Rellekka.",
          travel:
            "Enchanted lyre (or Fremennik sea boots 3) teleports to Rellekka. Otherwise Camelot Teleport, run north up the road past Sinclair Mansion and the coal trucks, then north-west into Rellekka. Lokar is on the western shore, on the far pier past the fish stalls.",
        },
        {
          text: "Talk to Brundt the Chieftain in the Rellekka longhall for the seal of passage.",
          travel:
            "The longhall is the large hall in the middle of Rellekka, a short run east of the docks — Brundt stands inside near the head of the hall.",
        },
        { text: "Return to Lokar on the pier and board the pirate ship Lady Zay." },
        { text: "Talk to Captain Bentley on the Lady Zay about sailing to Lunar Isle." },
      ],
    },
    {
      title: "Investigate the ship",
      steps: [
        {
          text: "Talk to crew in this order: Eagle-eye Shultz → Cabin boy → Beefy Burns → Lecherous Lee → Davey-boy → Cabin boy again.",
        },
        { text: "Use an emerald lens on the bullseye lantern and light it." },
        { text: "Examine 5 hidden locations with the lantern to reveal hidden symbols." },
      ],
    },
    {
      title: "Make the Sleep potion",
      steps: [
        {
          text: "Sail to Lunar Isle and talk to the Oneiromancer at the Astral Altar outside the city.",
          travel:
            "Bentley sails you from the Lady Zay to the Lunar Isle dock. From the dock, run through the city and out to the south-east — the Oneiromancer stands beside the Astral Altar just outside the city walls.",
        },
        { text: "Kill Suqah roaming the island outside the city until you get a Suqah tooth." },
        {
          text: "Visit Baba Yaga in her walking house and brew a potion using guam, marrentill, and ground Suqah tooth.",
          travel:
            "Baba Yaga's house is the chicken-legged hut on the western side of the Lunar Isle city — head back in through the gate and follow the path west.",
        },
      ],
    },
    {
      title: "Craft the lunar staff",
      steps: [
        {
          text: "Use your dramen staff on each elemental altar in this order: Air, Fire, Water, Earth.",
          travel:
            "Air: Falador Teleport, run south-west toward the Crafting Guild — ruins on the left. Fire: ring of dueling to the Duel Arena, run north-east of Al Kharid. Water: Lumbridge Home Teleport, run south-west into the marsh past Lumbridge Swamp. Earth: Varrock Teleport, run east out of the east gate toward the Lumber Yard — the ruins are just south of it. Use the matching talisman on each ruin (or use the Abyss).",
        },
        {
          text: "Return the lunar staff to the Oneiromancer at the Astral Altar on Lunar Isle.",
          travel:
            "Rellekka via enchanted lyre, then Lokar's boat/Bentley to Lunar Isle; run south-east out of the city to the Astral Altar.",
        },
      ],
    },
    {
      title: "Make ceremonial clothing",
      steps: [
        { text: "Mine lunar ore in the Lunar Isle mine and smelt it into bars at the island furnace." },
        { text: "Craft the lunar helm from a bar." },
        { text: "Get a special tiara from Suqah drops." },
        { text: "Collect 4 Suqah hides and have them tanned in the city." },
        { text: "Craft torso, trousers, gloves, and boots from the tanned hides." },
        { text: "Dig with a spade at the blue flowers south-west of the city for the lunar ring." },
      ],
    },
    {
      title: "Dream-world trials",
      steps: [
        { text: "Equip the full lunar set and enter the dream at the Oneiromancer's bed." },
        {
          text: "Complete 6 challenges: dice game, number sequences, logging race, platforming, race course, emote copying.",
        },
        { text: "Defeat Me (level 79) in the final fight." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Read the lectern to return to Lunar Isle." },
        { text: "Talk to the Oneiromancer at the Astral Altar just south-east of the Lunar Isle city walls." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "5,000 Magic experience",
    "5,000 Runecraft experience",
    "Access to Lunar Isle, the Lunar spellbook, and the Astral Altar",
    "50 Astral runes",
    "Seal of passage (free travel between Rellekka and Lunar Isle)",
  ],
};
