import type { QuestWalkthrough } from "../types";

export const observatoryQuest: QuestWalkthrough = {
  startPoint:
    "Talk to the Observatory professor inside the Observatory Reception building (the small house north-east of Castle Wars and west of Tree Gnome Stronghold — fairy ring BKP drops you very close, or run north-west from Castle Wars).",
  itemsRequired: ["3 normal planks", "Bronze bar", "Molten glass"],
  recommended: [
    "Combat 20+",
    "Antipoison",
    "Some food + armour",
    "Stamina/energy potions",
    "Ring of dueling (Castle Wars teleport) or fairy ring BKP",
  ],
  enemies: ["Goblin guard (level 42) — patrols the kitchen; can be safespotted or trapped"],
  sections: [
    {
      title: "Fix the observatory",
      steps: [
        {
          text: "Travel to the Observatory Reception building north-east of Castle Wars. Talk to the Observatory Professor inside about the quest.",
        },
        {
          text: "Hand him 3 planks, a bronze bar, and molten glass — give each in separate dialogue conversations.",
        },
        {
          text: "Talk to the Observatory Assistant (also in the reception building) for the next instruction.",
        },
        {
          text: "Climb the stairs in the reception building to the upper floor, then descend through the trapdoor into the goblin dungeon below.",
        },
        {
          text: "In the dungeon, search the chests in the south-east corner until you find the goblin kitchen key.",
        },
        {
          text: "Travel north then west through the dungeon to the kitchen gate. Use the key on the gate.",
        },
        {
          text: "Inside the kitchen, prod the sleeping Goblin guard (level 42) at the stove. Defeat or trap him.",
        },
        {
          text: "Inspect the goblin stove on the north wall of the kitchen for the lens mould.",
        },
        {
          text: "Return through the dungeon to the reception building. Give the lens mould to the Observatory Professor.",
        },
        {
          text: "Use a piece of molten glass on the lens mould (you may need to make one at a furnace if you've used your spare).",
        },
        {
          text: "Give the lens AND the empty mould to the Professor.",
        },
        {
          text: "Return down the trapdoor into the dungeon and climb the south-side stairs into the observatory tower (don't click anywhere during the cutscene).",
        },
      ],
    },
    {
      title: "View the constellation",
      steps: [
        {
          text: "On top of the observatory tower, talk to the Professor and use the telescope to view a random constellation.",
        },
        {
          text: "Identify the constellation (Capricorn, Sagittarius, etc. — you're given multiple-choice).",
        },
        {
          text: "Climb back down to the reception building and tell the Professor your answer to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,250 Crafting experience",
    "Uncut sapphire",
    "Constellation-specific reward (varies by sign observed — XP lamp, runes, etc.)",
    "Access to the Spirit of Scorpius shrine (south-west of the Observatory — used to make unholy symbols)",
    "Grappling shortcut access between the Observatory and the river south-west",
    "5 Kudos at the Varrock Museum",
  ],
};
