import type { QuestWalkthrough } from "../types";

export const dragonSlayerII: QuestWalkthrough = {
  startPoint:
    "Talk to Alec Kincade outside the Myths' Guild on the small peninsula south-west of Brimhaven (the guild building sits at the southern tip of the Brimhaven peninsula on Karamja).",
  itemsRequired: [
    "Pickaxe + Axe + Hammer + Saw + Spade + Glassblowing pipe + Tinderbox + Pestle and mortar + Machete",
    "8 Oak planks + 12+ Steel nails + 10 Swamp paste",
    "Catspeak amulet + Ghostspeak amulet",
    "Goutweed + Cut dragonstone + 2 Molten glass",
    "Astral rune + Seal of passage (for Lunar Isle access)",
    "Runes for 3 Fire Wave (or Fire Surge) spells",
  ],
  recommended: [
    "Combat 100+",
    "75+ Ranged for Vorkath (one-fight version in this quest)",
    "Anti-dragon shield + antifire potions",
    "Anti-venom+ or Serpentine helm for Vorkath spawns",
    "High-tier melee + ranged gear for Galvek (4-phase final boss)",
    "Insulated boots, lots of food (sharks/anglers), prayer potions",
  ],
  enemies: [
    "Spawn (level 100) — Crandor mural fight",
    "Vorkath (level 392) — single-fight version in the Ungael lab basement",
    "Robert the Strong (level 224) — fought in the Lunar Isle dream",
    "Various dragons throughout the final ship-defence assault",
    "Galvek (level 608) — 4-phase final boss aboard the ship",
  ],
  sections: [
    {
      title: "Investigate Crandor",
      steps: [
        {
          text: "Travel to the Myths' Guild on the south-west tip of the Brimhaven peninsula on Karamja (charter ship to Brimhaven, then run south-west). Talk to Alec Kincade outside the front door.",
        },
        {
          text: "Travel back to Musa Point on Karamja and find Dallas Jones at the small bar in the centre of Musa Point. Talk to him.",
        },
        {
          text: "Travel to Crandor (Karamja volcano dungeon shortcut) and walk into Elvarg's old lair under the volcano.",
        },
        {
          text: "Use a pickaxe on the cracked northern wall of Elvarg's lair to dig through into a hidden tunnel.",
        },
        {
          text: "Inside the tunnel, investigate the Ancient Mural on the wall. The Spawn (level 100) attacks — defeat it.",
        },
        {
          text: "Investigate the mural again, then talk to Dallas Jones (he meets you there).",
        },
      ],
    },
    {
      title: "Solve the map at Fossil Island",
      steps: [
        {
          text: "Travel to Fossil Island (sail with Dallas via the Museum Camp ferry, or use the Fossil Island Teleport tablet) and find Dallas at the Museum Camp on the south coast.",
        },
        {
          text: "Collect 24 map pieces from various landmarks across Fossil Island (Mushroom Forest, Hardwood grove, Tar Swamp, Volcanic Mine, etc. — the quest shows you each location).",
        },
        {
          text: "Solve the map puzzle at the Museum Camp by rotating and positioning the pieces in the wooden frame on Dallas's table.",
        },
        {
          text: "Talk to Dallas at the Museum Camp once the map is complete.",
        },
        {
          text: "Talk to Jardric (the elder museum researcher) at the same camp.",
        },
      ],
    },
    {
      title: "Travel to Lithkren",
      steps: [
        {
          text: "Bring building supplies (8 oak planks + 12+ steel nails + 10 swamp paste + hammer + saw) to the western coast of Fossil Island. Build a rowboat at the marked construction spot on the coast.",
        },
        {
          text: "Talk to Dallas and board the boat to sail to Lithkren (the dragonkin island far east).",
        },
        {
          text: "On Lithkren, navigate the stairs and trapdoors to the underground vault (follow the quest arrows).",
        },
        {
          text: "Search the skeleton in the underground area and read the diary that drops.",
        },
        {
          text: "Return to Dallas at the Fossil Island Museum Camp to plan the next step.",
        },
      ],
    },
    {
      title: "Bob the Cat in the dream",
      steps: [
        {
          text: "Equip a Catspeak amulet and find Bob the Cat (he wanders in Lumbridge near the bank — locate via the catspeak amulet's Find option).",
        },
        {
          text: "After the cutscene, travel to Sophanem (Pharaoh's sceptre or Necropolis teleport) and talk to the Sphinx outside the city — she gives you the permanent cat-speak ability.",
        },
      ],
    },
    {
      title: "Defeat Robert the Strong",
      steps: [
        {
          text: "Travel to Lunar Isle (boat from Rellekka's western dock; need a Seal of passage if Lunar Diplomacy isn't fully done) with the dream-potion ingredients.",
        },
        {
          text: "Talk to the Oneiromancer at the Astral Altar in the centre of Lunar Isle.",
        },
        {
          text: "Use a hammer on an astral rune to crush it, then use a pestle and mortar on the shards.",
        },
        {
          text: "Combine the ground astral rune with goutweed in a vial of water (made via the Oneiromancer) to brew the dream potion.",
        },
        {
          text: "Light the brazier in the Oneiromancer's chamber and drink the dream potion to enter the dream.",
        },
        {
          text: "Defeat Robert the Strong (level 224) inside the dream using melee.",
        },
      ],
    },
    {
      title: "Collect the four dragon key pieces",
      steps: [
        {
          text: "Karamja key piece: enter the Karamja temple maze (deep in Brimhaven dungeon area), avoiding spike traps and golems, to collect the first piece.",
        },
        {
          text: "Morytania key piece: use the locator orb (received from the Karamja maze) in the Mort Myre swamp — it pulses to point you to the buried piece. Dig with a spade.",
        },
        {
          text: "Ungael key piece: travel to Ungael (small island west of Lunar Isle, sailed via the Lithkren ferry from Fossil Island). Defeat Vorkath (level 392, single-fight version) inside the lab basement, then retrieve the piece from the chest. Equip ranged + anti-venom + antifire and kill spawns the moment they appear.",
        },
        {
          text: "Kourend key piece: travel to the Graveyard of Heroes in Shayzien (south-west Kourend). Enter the crypt and solve the statue rotation puzzle to access the chest holding the piece.",
        },
      ],
    },
    {
      title: "Reforge the dragon key",
      steps: [
        {
          text: "Travel to the Ancient Cavern under Baxtorian Falls (north of the Fishing Guild — board the log raft, use a rope on the rock + dead tree, then enter the door behind the falls).",
        },
        {
          text: "Use the ancient key (assembled from your 4 pieces) on the mithril door inside the cavern.",
        },
        {
          text: "Cast Fire Wave on each of the 4 dragon-head braziers in the forge room to heat them.",
        },
        {
          text: "Forge the dragon key at the anvil in the centre of the room.",
        },
        {
          text: "Return to Lithkren via Fossil Island and use the dragon key on the ancient doors deep inside the vault to unlock the next area.",
        },
      ],
    },
    {
      title: "Unite the kingdoms",
      steps: [
        {
          text: "Talk to King Roald in the Varrock Palace throne room about the dragon threat.",
        },
        {
          text: "Talk to Sir Amik Varze on the top floor of the White Knights' Castle in Falador.",
        },
        {
          text: "Talk to King Lathas (or Thoros) on the first floor of Ardougne Castle.",
        },
        {
          text: "Talk to Brundt the Chieftain inside the Rellekka longhall.",
        },
        {
          text: "Return to the Varrock Palace dining room (east wing of the palace) for the war council meeting.",
        },
      ],
    },
    {
      title: "Final assault",
      steps: [
        {
          text: "Travel back to the Rellekka docks (west dock) and sail with the assembled fleet to Ungael.",
        },
        {
          text: "During the voyage, defend the ship by alternately fixing leaks, putting out fires, repairing masts, and healing crew with bandages — the captain calls out tasks.",
        },
        {
          text: "Fight waves of dragons on the deck: red, iron, brutal green, blue dragons in early waves.",
        },
        {
          text: "Continue through waves: black, steel, brutal red dragons.",
        },
        {
          text: "Then mithril, adamant, rune dragons in the final waves.",
        },
        {
          text: "Fight Galvek through 4 phases. Phases 1-3: he flies above the ship — use ranged + dodge his fireballs. Phase 4: melee duel on the wreckage. Use ranged-tank gear and bring your absolute best food.",
        },
        {
          text: "Return to Alec Kincade outside the Myths' Guild on Karamja to finish.",
        },
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
    "Access to the Myths' Guild + Mythical cape teleport",
    "Access to adamant + rune dragons + the Wrath altar in Myths' Guild basement",
    "Ability to make Ava's assembler (best ranged cape)",
    "Ability to make super antifire potions (95 Herblore)",
    "Reforged dragon platebody / kiteshield (smithing recipe)",
    "Locator orb (treasure-hunt tool)",
  ],
};
