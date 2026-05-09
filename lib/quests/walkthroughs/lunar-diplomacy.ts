import type { QuestWalkthrough } from "../types";

export const lunarDiplomacy: QuestWalkthrough = {
  startPoint: "Talk to Lokar Searunner at the westernmost dock of Rellekka.",
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
        { text: "Talk to Lokar Searunner at the western Rellekka dock." },
        { text: "Talk to Brundt the Chieftain in the longhall for the seal of passage." },
        { text: "Return to Lokar and board the pirate ship Lady Zay." },
        { text: "Talk to Captain Bentley about sailing to Lunar Isle." },
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
        { text: "Travel to Lunar Isle and find the Oneiromancer." },
        { text: "Kill Suqah until you get a Suqah tooth." },
        { text: "Visit Baba Yaga and brew a potion using guam, marrentill, and ground tooth." },
      ],
    },
    {
      title: "Craft the lunar staff",
      steps: [
        {
          text: "Use your dramen staff on each elemental altar in this order: Air, Fire, Water, Earth.",
        },
        { text: "Return the lunar staff to the Oneiromancer." },
      ],
    },
    {
      title: "Make ceremonial clothing",
      steps: [
        { text: "Mine lunar ore on the island and smelt into bars." },
        { text: "Craft the lunar helm from a bar." },
        { text: "Get a special tiara from Suqah drops." },
        { text: "Collect 4 Suqah hides and have them tanned." },
        { text: "Craft torso, trousers, gloves, and boots from the tanned hides." },
        { text: "Dig at the blue flowers south-west of the city for the lunar ring." },
      ],
    },
    {
      title: "Dream-world trials",
      steps: [
        { text: "Equip the full lunar set and enter the dream." },
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
        { text: "Talk to the Oneiromancer." },
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
