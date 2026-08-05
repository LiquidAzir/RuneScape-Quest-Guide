import type { QuestWalkthrough } from "../types";

export const dragonSlayerII: QuestWalkthrough = {
  startPoint:
    "Talk to Alec Kincade outside the Myths' Guild, at the southern tip of the Brimhaven peninsula on Karamja. Charter ship to Brimhaven (or the 30gp boat from Ardougne's south docks), then run south along the coast road to the guild.",
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
          text: "Talk to Alec Kincade outside the front door of the Myths' Guild on the southern tip of the Brimhaven peninsula.",
          travel:
            "Charter ship to Brimhaven, or take the 30gp boat from the Ardougne south docks. From Brimhaven run south down the coast — the guild is the domed building at the very southern point of the peninsula.",
        },
        {
          text: "Travel to Musa Point on Karamja and talk to Dallas Jones in the small bar in the centre of the settlement.",
          travel:
            "From Brimhaven run east along the northern coast road to Musa Point, or sail from Port Sarim (30gp to the Customs Officer) straight to the Musa Point dock. The bar is the building just inland from the dock.",
        },
        {
          text: "Travel to Crandor and walk into Elvarg's old lair.",
          travel:
            "From Musa Point run north-west to the volcano and climb down the rope into the Karamja volcano dungeon, then take the Crandor crevice shortcut opened by Dragon Slayer I. Elvarg's lair is at the far end.",
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
          text: "Travel to Fossil Island and find Dallas at the Museum Camp on the south coast.",
          travel:
            "Digsite pendant → Fossil Island puts you at the Museum Camp. Otherwise Digsite pendant (or Varrock Teleport then run south-east) to the Digsite and take the barge on the northern river bank across to the island — requires Bone Voyage.",
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
          text: "Bring building supplies (8 oak planks + 12+ steel nails + 10 swamp paste + hammer + saw) to Fossil Island's north-west coast and build a rowboat at the marked construction spot.",
          travel:
            "Digsite pendant → Fossil Island, then run north-west past the Mushroom Forest to the shoreline; the construction spot is on the beach.",
        },
        {
          text: "Talk to Dallas and board the boat to sail to Lithkren, the dragonkin island to the north.",
        },
        {
          text: "On Lithkren, navigate the stairs and trapdoors to the underground vault (follow the quest arrows).",
        },
        {
          text: "Search the skeleton in the underground area and read the diary that drops.",
        },
        {
          text: "Return to Dallas at the Fossil Island Museum Camp to plan the next step.",
          travel: "Sail back on the same rowboat and run south-east across the island to the Museum Camp.",
        },
      ],
    },
    {
      title: "Bob the Cat in the dream",
      steps: [
        {
          text: "Equip a Catspeak amulet and find Bob the Cat, who wanders around Lumbridge.",
          travel:
            "Lumbridge Home Teleport. Bob usually paces between the castle and the general store — use the catspeak amulet's Find option to point you at him.",
        },
        {
          text: "After the cutscene, travel to Sophanem and talk to the Sphinx — she gives you the permanent cat-speak ability.",
          travel:
            "Pharaoh's sceptre → Jaltevas/Necropolis and run south, or magic carpet from Shantay Pass to Pollnivneach then a second carpet to Sophanem. The Sphinx sits in the city.",
        },
      ],
    },
    {
      title: "Defeat Robert the Strong",
      steps: [
        {
          text: "Travel to Lunar Isle with the dream-potion ingredients.",
          travel:
            "Enchanted lyre → Rellekka (or Camelot Teleport and run north-west through the Sinclair Mansion path). On Rellekka's western dock talk to Lokar Searunner for a lift to Pirates' Cove, then talk to Jarvald there to sail on to Lunar Isle. Bring a Seal of passage unless Lunar Diplomacy is fully complete.",
        },
        {
          text: "Talk to the Oneiromancer at the Astral Altar, outside the town wall in the south-east of Lunar Isle.",
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
          text: "Karamja key piece: enter the temple maze near Brimhaven and pick your way past the spike traps and golems to the first piece.",
          travel:
            "Charter ship to Brimhaven (or the 30gp Ardougne boat), then follow the quest marker south-east of town to the temple entrance.",
        },
        {
          text: "Morytania key piece: use the locator orb in Mort Myre swamp — it pulses to point you at the buried piece. Dig it up with a spade.",
          travel:
            "Ectophial → Port Phasmatys, then run west and south into Mort Myre. Alternatively run south out of Canifis into the swamp.",
        },
        {
          text: "Ungael key piece: sail to Ungael, defeat Vorkath (level 392, single-fight version) in the lab basement, then take the piece from the chest.",
          travel:
            "Digsite pendant → Fossil Island, run north-west to the rowboat you built and sail to Ungael, the frozen island north of the coast. Bring ranged gear, anti-venom+ and antifire, and kill the zombified spawn the moment it lands.",
        },
        {
          text: "Kourend key piece: enter the crypt at the Graveyard of Heroes in Shayzien and solve the statue rotation puzzle to reach the chest.",
          travel:
            "Kharedst's memoirs → Shayzien (or Xeric's talisman → Xeric's Glade and run west). The Graveyard of Heroes is the walled cemetery out towards the Shayzien coast; the crypt entrance is inside it.",
        },
      ],
    },
    {
      title: "Reforge the dragon key",
      steps: [
        {
          text: "Travel to the Ancient Cavern beneath Baxtorian Falls.",
          travel:
            "Games necklace → Barbarian Outpost, then run south-west to Otto's Grotto at the top of Baxtorian Falls and dive into the whirlpool in the lake beside Otto's hut. Speak to Otto first if you have never entered before.",
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
          text: "Return to Lithkren and use the dragon key on the ancient doors deep inside the vault.",
          travel:
            "Digsite pendant → Fossil Island, run north-west to the rowboat and sail to Lithkren, then head down into the vault.",
        },
      ],
    },
    {
      title: "Unite the kingdoms",
      steps: [
        {
          text: "Talk to King Roald in the Varrock Palace throne room about the dragon threat.",
          travel:
            "Varrock Teleport to the central square, then run north through the palace gates; the throne room is straight ahead on the ground floor.",
        },
        {
          text: "Talk to Sir Amik Varze on the top floor of the White Knights' Castle in Falador.",
          travel:
            "Falador Teleport, then run north-west to the castle gates and climb the stairs in the western tower to the top.",
        },
        {
          text: "Talk to King Lathas on the first floor of Ardougne Castle.",
          travel:
            "Ardougne Teleport (or Ardougne cloak → Ardougne Monastery and run south-east). The castle is west of the market square; take the staircase up one floor.",
        },
        {
          text: "Talk to Brundt the Chieftain inside the Rellekka longhall.",
          travel:
            "Enchanted lyre → Rellekka, or Camelot Teleport and run north-west. The longhall is the big hall in the middle of the village.",
        },
        {
          text: "Return to the Varrock Palace dining room in the east wing for the war council meeting.",
          travel: "Varrock Teleport, run north into the palace and east through the ground floor to the dining hall.",
        },
      ],
    },
    {
      title: "Final assault",
      steps: [
        {
          text: "Travel back to the Rellekka docks and sail with the assembled fleet.",
          travel:
            "Enchanted lyre → Rellekka, then run west to the dock where Lokar Searunner normally waits.",
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
          travel:
            "Charter ship to Brimhaven (or the 30gp Ardougne boat) and run south down the coast to the guild at the tip of the peninsula.",
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
