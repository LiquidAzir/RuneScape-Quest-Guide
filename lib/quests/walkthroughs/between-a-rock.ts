import type { QuestWalkthrough } from "../types";

export const betweenARock: QuestWalkthrough = {
  startPoint:
    "Talk to Dondakan the Dwarf at the mine on the far west side of Keldagrim, past the river crossing. Take the mine cart from the north-west corner of the Grand Exchange to Keldagrim (the Blast Furnace route), or the mine cart in the Dwarven Mine below Ice Mountain, then head west through the city.",
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
        {
          text: "Travel to Keldagrim and make your way to the ferryman on the River Kelda.",
          travel:
            "Fastest: the mine cart in the north-west corner of the Grand Exchange runs straight to Keldagrim. Alternative: Falador Teleport, run north-east to Ice Mountain, down the trapdoor into the Dwarven Mine and take the dwarves' mine cart. From the Keldagrim cart station head north-west through the city to the river.",
        },
        { text: "Pay the ferryman 2gp to cross (a Ring of Charos gets you across free)." },
        { text: "Head north, cross the bridge, and talk to Dondakan beside the huge rock." },
        {
          text: "Travel to western Keldagrim and find the Dwarven Engineer.",
          travel: "Back over the ferry and south-east into the city; the Engineer is in the workshops of West Keldagrim, on the market side of the river.",
        },
      ],
    },
    {
      title: "Find the schematic pages",
      steps: [
        {
          text: "Talk to Rolad at the dwarven camp outside the Dwarven Mine entrance by Ice Mountain.",
          travel:
            "Falador Teleport, out the north gate and north-east up the road to Ice Mountain — the camp with the dwarves and the mine entrance is at the mountain's south-eastern foot.",
        },
        { text: "Enter the Dwarven Mine via the trapdoor beside Rolad." },
        { text: "Kill Scorpions for page 1; search the mine carts for page 2." },
        { text: "Mine any rock that is not Adamantite or Coal for page 3." },
        { text: "Confirm with Rolad and read the Dwarven Lore book." },
      ],
    },
    {
      title: "Make a golden cannonball",
      steps: [
        {
          text: "Give a gold bar to Dondakan at the mine west of Keldagrim.",
          travel: "Grand Exchange mine cart → Keldagrim, then north-west across the ferry and over the bridge.",
        },
        { text: "Smelt another gold bar into a cannonball at a furnace using the ammo mould." },
        { text: "Use the cannonball on Dondakan to receive a Schematic." },
      ],
    },
    {
      title: "Forge the gold helmet + complete schematics",
      steps: [
        { text: "Read Dwarven Lore to unlock the Base Schematics." },
        { text: "Return to the Dwarven Engineer in western Keldagrim for additional Schematics." },
        { text: "Smith your 3 remaining gold bars into a helmet at an anvil." },
        {
          text: "Talk to Khorvak in the dwarven pub inside White Wolf Mountain.",
          travel:
            "Camelot Teleport then run west to Catherby and up the White Wolf Mountain pass (or Falador Teleport and go north-west through Taverley). The pub is entered through the cave door partway along the mountain path.",
        },
        { text: "Assemble all schematic pieces as illustrated in the wiki guide." },
      ],
    },
    {
      title: "Defeat the Arzinian Avatar",
      steps: [
        { text: "Equip the gold helmet and carry your pickaxe." },
        {
          text: "Talk to Dondakan at the mine west of Keldagrim with the completed schematics.",
          travel: "Grand Exchange mine cart → Keldagrim, then north-west across the ferry and over the bridge to the rock.",
        },
        { text: "Mine 6+ gold ore inside the rock (15 reduces the boss level from 125 to 75)." },
        { text: "Enter the flame barriers and defeat the Arzinian Avatar." },
        { text: "Boss type depends on your highest combat stat." },
        { text: "Return to Dondakan outside the rock." },
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
