import type { QuestWalkthrough } from "../types";

export const theFremennikExiles: QuestWalkthrough = {
  startPoint:
    "Talk to Brundt the Chieftain inside the Rellekka longhall (the large central building in Rellekka). Enchanted lyre or Fremennik sea boots teleport straight there; otherwise fairy ring AJR and run north-west, or Camelot teleport and run north past the Sinclair Mansion.",
  itemsRequired: [
    "Mirror shield (for the basilisks)",
    "2 Kegs of beer (buy from Thora)",
    "1 Molten glass",
    "100 Astral runes",
    "Pet rock",
    "Fishing rod",
    "Fremennik shield",
    "Ice gloves (or Smiths gloves (i))",
    "Hammer",
    "Glassblowing pipe",
    "3 Lunar bars (mine + smelt them on the spot)",
    "Seal of passage (if you don't have Elite Fremennik diary)",
  ],
  recommended: [
    "Combat 80+",
    "Stamina/energy potions",
    "Moonclan teleport tablets",
    "Monkfish or better food",
    "Enchanted lyre or Fremennik sea boots for fast Rellekka return",
  ],
  enemies: [
    "Basilisks (levels 53/61/135)",
    "Typhor (level 218)",
    "The Jormungand (level 363) — final boss",
  ],
  sections: [
    {
      title: "Disturbance in Rellekka",
      steps: [
        {
          text: "Buy 2 kegs of beer from Thora behind the bar of the Rellekka longhall.",
          travel:
            "Enchanted lyre or Fremennik sea boots teleport to Rellekka. Without either: fairy ring AJR (slayer cave south-east of Rellekka) and run north-west, or Camelot teleport and run north past the Sinclair Mansion. The longhall is the big building in the middle of the village; Thora is behind the bar inside.",
        },
        {
          text: "Talk to Brundt the Chieftain at the far end of the same longhall to start.",
        },
        {
          text: "Walk north of the longhall to the Rellekka sandpit and talk to Freygerd standing beside it.",
          travel: "Leave the longhall and head north through the village — the sandpit is the large open sand area on the northern side.",
        },
        {
          text: "Equip your mirror shield (basilisks petrify without it) and kill a basilisk youngling in the sandpit.",
        },
        {
          text: "Collect the unsealed letter, basilisk fang, and venom gland from the youngling's body.",
        },
        {
          text: "Return all 3 items to Freygerd at the sandpit.",
        },
        {
          text: "Report back to Brundt in the longhall for the cutscene; receive his note.",
        },
      ],
    },
    {
      title: "Build V's shield",
      steps: [
        {
          text: "Get a Fremennik shield — kill dagannoths in the Waterbirth Island dungeon, kill Fremennik warriors in Rellekka, or buy one from Bardur (the dungeon traveller in the Rellekka longhall).",
          travel:
            "For Waterbirth: talk to Jarvald on the Rellekka north-west dock for the boat. Fremennik warriors wander the village square just outside the longhall.",
        },
        {
          text: "Travel to Lunar Isle, walk to Baba Yaga's hut on the south-west side of the village, talk to her and use molten glass on her cauldron to start the lunar glass.",
          travel:
            "Moonclan teleport (or a Moonclan teleport tablet) lands you in Lunar Isle town. Otherwise talk to Lokar Searunner on the Rellekka north-west dock to sail to Pirates' Cove, then Captain Bentley on to Lunar Isle. You need a seal of passage unless you have the elite Fremennik Diary. Baba Yaga's hut is the mushroom-shaped house in the south-west of the town.",
        },
        {
          text: "Mine 3 lunar ore from the stalagmites at the Lunar Isle mine north-east of the town.",
          travel: "From Baba Yaga's hut run north-east past the town to the mine entrance in the island's north-east.",
        },
        {
          text: "Take 100 astral runes to the Astral Altar north-east of Lunar Isle town and use the molten glass on the altar to craft lunar glass.",
          travel: "The altar is a short run further north-east from the mine, in the island's north-eastern corner.",
        },
        {
          text: "Smelt the 3 lunar bars at a furnace — Rellekka's is the most convenient.",
          travel: "Enchanted lyre or Fremennik sea boots back to Rellekka; the furnace and anvils are on the west side of the village.",
        },
        {
          text: "Smith the V sigil on an anvil beside the furnace.",
        },
        {
          text: "Travel to the strange altar south-west of Rellekka and summon Fossegrimen to enchant the V sigil.",
          travel:
            "From the longhall run south out of Rellekka and over the south bridge, then follow the narrow spit of land running south-west into the water — the altar sits beside the giant rib cage in the shallows.",
        },
        {
          text: "Travel to the Mountain Camp east of Rellekka and use a pet rock on the Large Geyser just north of the camp.",
          travel:
            "Head east out of Rellekka past the Swaying Tree and follow the mountain path up and east into the camp; the geyser is on the northern edge.",
        },
        {
          text: "Return to Rellekka and talk to Peer the Seer in his house south-west of the Rellekka market.",
          travel: "Enchanted lyre back to Rellekka; his is the house with the green bed, south-west of the market stalls.",
        },
        {
          text: "Travel back to the Mountain Camp geyser, equip ice gloves and pick up the polishing rock from the geyser's bed.",
          travel: "East out of Rellekka and up the mountain path again to the geyser north of the camp.",
        },
        {
          text: "Use the lunar glass + sigil + polishing rock + Fremennik shield with a glassblowing pipe to assemble V's shield.",
        },
      ],
    },
    {
      title: "Basilisks in the market",
      steps: [
        {
          text: "Walk out of Rellekka to find Brundt waiting near the basilisk-infested ground outside the village and talk to him.",
          travel: "Follow the quest marker out of the village gates — he stands just beyond the palisade with a group of Fremenniks.",
        },
        {
          text: "Return to the Rellekka longhall and talk to Brundt again.",
        },
        {
          text: "Equip V's shield and fight basilisks in the Rellekka marketplace until your kill counter reaches 100%.",
        },
        {
          text: "Walk to the Rellekka western pier and board the Fremennik boat to the Island of Stone.",
          travel: "From the longhall run west through the village to the pier on the west coast; the captain sails you across once.",
        },
      ],
    },
    {
      title: "Island of Stone",
      steps: [
        {
          text: "On the Island of Stone, walk north to the cave entrance. Inspect the cave door — it presents a Mastermind-style puzzle.",
        },
        {
          text: "Solve the puzzle using feedback (red = wrong position, green = correct).",
        },
        { text: "Enter the cave with V's shield equipped." },
        { text: "Fight Typhor (level 218) — pray against magic or melee depending on its style." },
        { text: "(Optional) Resupply via Haskell at the western pier between fights." },
        {
          text: "Fight The Jormungand (level 363).",
          notes: [
            "Avoid the red-screen attack by facing AWAY from her.",
            "Break free from rock traps by attacking repeatedly.",
            "Pray Protect from Magic and use crush attacks.",
          ],
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "V's shield",
    "Access to the Island of Stone",
    "Basilisk Knights as Slayer task (Basilisk jaws drop = Neitiznot faceguard)",
    "Ability to craft Neitiznot faceguard",
    "50,000 Slayer experience",
    "50,000 Crafting experience",
    "30,000 Runecraft experience",
  ],
};
