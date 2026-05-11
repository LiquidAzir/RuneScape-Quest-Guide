import type { QuestWalkthrough } from "../types";

export const dragonSlayerII: QuestWalkthrough = {
  startPoint: "Talk to Alec Kincade outside the Myths' Guild (south-west of Brimhaven peninsula).",
  itemsRequired: [
    "Pickaxe + Axe + Hammer + Saw + Spade + Glassblowing pipe + Tinderbox + Pestle and mortar + Machete",
    "8 Oak planks + 12+ Nails + 10 Swamp paste",
    "Catspeak amulet + Ghostspeak amulet",
    "Goutweed + Cut dragonstone + 2 Molten glass",
    "Astral rune + Seal of passage",
    "Runes for 3 Fire Wave (or Fire Surge) spells",
  ],
  recommended: [
    "Combat 100+",
    "75+ Ranged for Vorkath",
    "Anti-dragon shield + antifire potions",
    "Anti-venom+ or Serpentine helm for Vorkath spawns",
    "High-tier melee + ranged gear for Galvek",
    "Insulated boots / lots of food (sharks/anglers) / prayer pots",
  ],
  enemies: [
    "Spawn (level 100)",
    "Vorkath (level 392) — single-fight version in this quest",
    "Robert the Strong (level 224)",
    "Various dragons throughout",
    "Galvek (level 608) — final boss with 4 phases",
  ],
  sections: [
    {
      title: "Investigate Crandor",
      steps: [
        { text: "Talk to Alec Kincade outside the Myths' Guild." },
        { text: "Talk to Dallas Jones at the Karamja pub in Musa Point." },
        { text: "Travel to Crandor and enter Elvarg's lair under the volcano." },
        { text: "Use a pickaxe on the northern wall to enter a hidden tunnel." },
        { text: "Investigate the Ancient Mural and defeat the Spawn (level 100)." },
        { text: "Investigate the mural again and talk to Dallas." },
      ],
    },
    {
      title: "Solve the map at Fossil Island",
      steps: [
        { text: "Travel to Fossil Island and talk to Dallas Jones." },
        { text: "Collect 24 map pieces from various locations across the island." },
        { text: "Solve the map puzzle by rotating and positioning pieces." },
        { text: "Talk to Dallas and complete the map." },
        { text: "Talk to Jardric at the museum camp." },
      ],
    },
    {
      title: "Travel to Lithkren",
      steps: [
        { text: "Bring building supplies to the western coast and build a rowboat." },
        { text: "Talk to Dallas and board the boat." },
        { text: "Navigate stairs and trapdoors to the underground area." },
        { text: "Search the skeleton and read the diary." },
        { text: "Talk to Dallas to plan the next step." },
      ],
    },
    {
      title: "Bob the Cat in the dream",
      steps: [
        { text: "Find Bob the Cat using the Catspeak amulet." },
        { text: "Travel to Sophanem and talk to the Sphinx — get the perma-cat-speak ability." },
      ],
    },
    {
      title: "Defeat Robert the Strong",
      steps: [
        { text: "Travel to Lunar Isle with the dream-potion ingredients." },
        { text: "Talk to the Oneiromancer." },
        { text: "Crush an astral rune and grind the shards." },
        { text: "Make the dream potion." },
        { text: "Light the brazier and drink the potion to enter the dream." },
        { text: "Defeat Robert the Strong (level 224) with melee." },
      ],
    },
    {
      title: "Collect the four dragon key pieces",
      steps: [
        {
          text: "Karamja: navigate the temple maze, avoiding traps and golems.",
        },
        {
          text: "Morytania: use the locator orb to find the buried key piece in Mort Myre.",
        },
        {
          text: "Ungael: defeat Vorkath (level 392) — the single-fight version. Retrieve the piece from the chest.",
          notes: ["Equip ranged + anti-venom + antifire. Use the spawn-killing strategy from any Vorkath guide."],
        },
        {
          text: "Kourend: solve the statue puzzle in the crypt at the Graveyard of Heroes.",
        },
      ],
    },
    {
      title: "Reforge the dragon key",
      steps: [
        { text: "Travel to the Ancient Cavern (under Baxtorian Falls)." },
        { text: "Use the ancient key to open the mithril door." },
        { text: "Cast Fire Wave on the dragon heads to forge." },
        { text: "Forge the dragon key at the anvil." },
        { text: "Return to Lithkren and open the ancient doors." },
      ],
    },
    {
      title: "Unite the kingdoms",
      steps: [
        { text: "Talk to King Roald in Varrock about the dragon threat." },
        { text: "Talk to Sir Amik Varze in Falador." },
        { text: "Talk to King Lathas (or Thoros) in Ardougne." },
        { text: "Talk to Brundt in Rellekka." },
        { text: "Return to Varrock dining room for the war meeting." },
      ],
    },
    {
      title: "Final assault",
      steps: [
        { text: "Return to Rellekka and sail to Ungael." },
        { text: "Defend the ship by fixing leaks, fires, masts and healing crew." },
        { text: "Fight waves of dragons (red, iron, brutal green, blue)." },
        { text: "Continue through black, steel, brutal red." },
        { text: "Then mithril, adamant, rune dragons." },
        {
          text: "Defeat Galvek through 4 phases — avoid mechanics specific to each phase.",
          notes: [
            "Phase 1-3: dragon flight on the sea. Phase 4: melee fight.",
            "Use range-tank gear; bring your absolute best food.",
          ],
        },
        { text: "Return to Alec Kincade outside the Myths' Guild (south-west of Brimhaven peninsula) to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "80,000 Smithing experience",
    "60,000 Mining experience",
    "50,000 Agility experience",
    "50,000 Thieving experience",
    "Permanent ability to speak to cats without an amulet",
    "Access to the Myths' Guild (and the corresponding cape teleport)",
    "Access to adamant + rune dragons and the Wrath altar",
    "Ability to make Ava's assembler (best ranged cape)",
    "Ability to make super antifire potions",
    "Reforged dragon platebody / kiteshield",
    "Locator orb",
  ],
};
