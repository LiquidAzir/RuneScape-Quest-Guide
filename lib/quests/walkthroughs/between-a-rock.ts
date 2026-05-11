import type { QuestWalkthrough } from "../types";

export const betweenARock: QuestWalkthrough = {
  startPoint: "Talk to Dondakan the Dwarf at the south-west Keldagrim mine.",
  itemsRequired: [
    "Pickaxe",
    "4 gold bars",
    "Hammer",
    "Ammo mould (or double ammo mould)",
    "~830 coins",
  ],
  recommended: [
    "Combat 50+",
    "Combat gear",
    "Falador / Camelot teleports",
    "Combat bracelet",
    "Ring of Charos (a)",
    "Lunar/dramen staff",
    "Stamina potion",
  ],
  enemies: [
    "Scorpions (level 14)",
    "Arzinian Being of Bordanzan (level 75-125 — depends on gold ore mined)",
  ],
  sections: [
    {
      title: "The Rock",
      steps: [
        { text: "Travel to the Dwarven Ferryman (fairy ring DKS or boat)." },
        { text: "Pay the ferryman 2gp (or use Ring of Charos)." },
        { text: "Head north, cross the bridge, talk to Dondakan." },
        { text: "Travel to Western Keldagrim and find the Dwarven Engineer." },
      ],
    },
    {
      title: "Find the schematic pages",
      steps: [
        { text: "Visit Ice Mountain entrance and talk to Rolad." },
        { text: "Enter the Dwarven Mine via trapdoor." },
        { text: "Kill Scorpions for page 1; search mine carts for page 2." },
        { text: "Mine non-Adamantite/Coal rocks for page 3." },
        { text: "Confirm with Rolad and read the Dwarven Lore book." },
      ],
    },
    {
      title: "Make a golden cannonball",
      steps: [
        { text: "Give a gold bar to Dondakan." },
        { text: "Smelt another gold bar into a cannonball at the furnace." },
        { text: "Use the cannonball on Dondakan to receive a Schematic." },
      ],
    },
    {
      title: "Forge the gold helmet + complete schematics",
      steps: [
        { text: "Read Dwarven Lore to unlock the Base Schematics." },
        { text: "Return to the Dwarven Engineer in western Keldagrim for additional Schematics." },
        { text: "Smith 3 remaining gold bars into a helmet at the anvil." },
        { text: "Travel to the White Wolf Mountain pub." },
        { text: "Talk to Khorvak in the White Wolf Mountain pub." },
        { text: "Assemble all schematic pieces as illustrated in the wiki guide." },
      ],
    },
    {
      title: "Defeat the Arzinian Avatar",
      steps: [
        { text: "Equip the gold helmet + pickaxe." },
        { text: "Talk to Dondakan at the south-west Keldagrim mine with the completed schematics." },
        { text: "Mine 6+ gold ore (15 reduces the boss level from 125 to 75)." },
        { text: "Enter the flame barriers and defeat the Arzinian Avatar." },
        { text: "Boss type depends on your highest combat stat." },
        { text: "Return to Dondakan at the south-west Keldagrim mine." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "5,000 Defence + Mining + Smithing experience each",
    "Rune pickaxe",
    "Gold helmet (cosmetic with stats)",
    "Access to the Arzinian Mine (gold rocks)",
    "Ring of Wealth teleport to the rock",
  ],
};
