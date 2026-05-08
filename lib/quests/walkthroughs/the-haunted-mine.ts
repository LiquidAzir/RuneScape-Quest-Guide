import type { QuestWalkthrough } from "../types";

export const theHauntedMine: QuestWalkthrough = {
  startPoint: "Talk to the Zealot at the abandoned mines in Morytania (just north of the path to Mort'ton).",
  itemsRequired: ["Chisel (one drops in the dungeon)"],
  recommended: [
    "Combat 50+",
    "15+ Agility for shortcuts",
    "40+ Prayer (Protect from Missiles is helpful for the boss)",
    "2 free inventory slots",
    "Magic spells or a special-attack weapon (DDS spec) for the boss",
    "Prayer potions, stamina potion, food",
  ],
  enemies: ["Treus Dayth (level 95) — boss, harder than his level suggests"],
  sections: [
    {
      title: "Get into the mines",
      steps: [
        { text: "Talk to the Zealot outside the abandoned mine." },
        { text: "Pickpocket him for the Zealot's key." },
        { text: "Climb over the cart to the south." },
        { text: "Crawl down the cart tunnel." },
      ],
    },
    {
      title: "Navigate the cave levels",
      steps: [
        { text: "On level 1, run west and crawl through the cart tunnel." },
        { text: "Re-enter via the southern entrance and descend the ladder." },
        { text: "On level 2, descend the eastern ladder." },
        { text: "On level 3, dodge mine carts using the alcove cover, moving south." },
      ],
    },
    {
      title: "Mine cart puzzle (level 4)",
      steps: [
        { text: "Pick a glowing fungus and keep it (it lights your path)." },
        { text: "Place a fungus in the searchable cart to the north-west." },
        {
          text: "Check the point-settings board to learn the lever configuration.",
          notes: ["The configuration is randomised per player — read your board."],
        },
        { text: "Pull levers A-E (south-east), then F-K (north-west) to match the configuration." },
        { text: "Return and click 'start' at the point settings." },
      ],
    },
    {
      title: "Retrieve the cart and open the water valve",
      steps: [
        { text: "Navigate back through the caves to the cart tunnel entrance." },
        { text: "Climb down the ladders to find the cart and retrieve your fungus." },
        { text: "Climb up and head east, then south past the moving cart." },
        { text: "Use the Zealot's key on the water valve." },
        { text: "Run to the lift and descend." },
      ],
    },
    {
      title: "Defeat Treus Dayth",
      steps: [
        { text: "Go through the door and pick up the innocent-looking key." },
        {
          text: "Defeat Treus Dayth (level 95) using Protect from Missiles and ranged tactics.",
          notes: ["He summons skeletons. Kill them or run them off, then keep DPSing."],
        },
        { text: "Pick up the key after victory." },
        { text: "Return east, then go down the western stairs (use a fungus for light)." },
        { text: "Use a chisel on the crystal outcrop to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "22,000 Strength experience",
    "Ability to craft the Salve amulet (huge bonus vs. undead)",
    "Access to Tarn's Lair",
  ],
};
