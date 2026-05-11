import type { QuestWalkthrough } from "../types";

export const theFremennikExiles: QuestWalkthrough = {
  startPoint:
    "Talk to Brundt the Chieftain inside the Rellekka longhall (the large central building in Rellekka — the Fremennik capital, north-west of Camelot).",
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
        },
        {
          text: "Talk to Brundt the Chieftain inside the Rellekka longhall to start.",
        },
        {
          text: "Walk south of the longhall to the Rellekka sandpit (the large open sand area on the south side of Rellekka). Talk to Freygerd standing on the south side of the pit.",
        },
        {
          text: "Equip your mirror shield (basilisks petrify without it) and kill a basilisk youngling inside the sandpit.",
        },
        {
          text: "Collect the unsealed letter, basilisk fang, and venom gland from the youngling's body.",
        },
        {
          text: "Return all 3 items to Freygerd south of the sandpit.",
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
          text: "Get a Fremennik shield — kill dagannoths in Waterbirth Island dungeon, or kill Fremennik warriors in Rellekka, or buy one from Bardur (the dungeon traveller in Rellekka's longhall).",
        },
        {
          text: "Travel to Lunar Isle (boat from Rellekka western dock; need a Seal of passage). Walk to Baba Yaga's hut on the south-west side of the village; talk to her and use molten glass on her cauldron to start the lunar glass.",
        },
        {
          text: "Mine 3 lunar ore at the lunar mine north-east of Lunar Isle town.",
        },
        {
          text: "Travel to the Astral Altar (centre of Lunar Isle) with 100 astral runes; use the molten glass on the altar to craft lunar glass.",
        },
        {
          text: "Smelt the 3 lunar bars at the furnace just south of Baba Yaga's hut.",
        },
        {
          text: "Smith the V sigil at the anvil beside the furnace.",
        },
        {
          text: "Travel south of Rellekka (use enchanted lyre or fairy ring CIP) to the strange altar in the woods. Talk to Fossegrimen at the altar to enchant the V sigil.",
        },
        {
          text: "Travel to the Mountain Camp (north-east of Rellekka). Use a pet rock on the Large Geyser at the centre of the camp.",
        },
        {
          text: "Return to Rellekka and talk to Peer the Seer at his house in the north of Rellekka.",
        },
        {
          text: "Travel back to the Mountain Camp Geyser. Equip ice gloves and pick up the polishing rock from the geyser's bed.",
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
          text: "Walk south-east of Rellekka to find Brundt outside the city near the basilisk-infested area. Talk to him.",
        },
        {
          text: "Return to the Rellekka longhall and talk to Brundt again.",
        },
        {
          text: "Equip V's shield and fight basilisks in the marketplace area until your kill counter reaches 100%.",
        },
        {
          text: "Walk to the Rellekka western dock and board the Fremennik boat to the Island of Stone (a one-time captain takes you).",
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
