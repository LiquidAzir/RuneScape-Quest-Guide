import type { QuestWalkthrough } from "../types";

export const waterfallQuest: QuestWalkthrough = {
  startPoint:
    "Talk to Almera in her log cabin north-east of Baxtorian Falls (the giant waterfall north of the Fishing Guild — the cabin sits on the cliffside above the river, just east of the waterfall itself).",
  itemsRequired: [
    "Rope",
    "6 Air runes",
    "6 Earth runes",
    "6 Water runes",
  ],
  recommended: [
    "Combat 25+",
    "12+ Hitpoints recommended (one room damages you to 1 HP if you're not careful)",
    "Some food",
    "Games necklace (Barbarian Outpost teleport) or Spirit tree (Tree Gnome Stronghold) for fast travel; fairy ring AJR drops you near Tree Gnome Village",
  ],
  sections: [
    {
      title: "Read the Book on Baxtorian",
      steps: [
        {
          text: "Travel to Almera's log cabin north-east of Baxtorian Falls (north-east of the Fishing Guild, on the cliffs above the river).",
        },
        {
          text: "Talk to Almera; she asks you to find her son Hudon.",
        },
        {
          text: "Board the log raft tied up west of the cabin (you'll float downstream onto a small island in the falls).",
        },
        {
          text: "On the island, talk to Hudon and exhaust all his dialogue (he's by the riverbank).",
        },
        {
          text: "After dialogue, swim south in the water at the southern tip of the island — you'll wash ashore at the base of the cliff.",
        },
        {
          text: "Enter the large building above the cliff (Baxtorian's longhall) and climb the stairs to the upper floor.",
        },
        {
          text: "Search the southernmost bookcase upstairs for the Book on Baxtorian; read it for the chamber instructions.",
        },
      ],
    },
    {
      title: "Get Glarial's pebble",
      steps: [
        {
          text: "Travel to Tree Gnome Village (south-west of Castle Wars; spirit tree teleport, fairy ring BLP, or run from Castle Wars).",
        },
        {
          text: "Enter the maze around the village (let Elkoy at the entrance lead you through, or walk it manually) and find the dungeon ladder near the village centre.",
        },
        {
          text: "Climb down into the Tree Gnome Village dungeon.",
        },
        {
          text: "Search the off-coloured (lighter-shaded) crate near the entrance for a small key.",
        },
        {
          text: "Use the key on the gate inside the dungeon.",
        },
        {
          text: "Walk to Golrie at the back of the dungeon and talk to him to receive Glarial's pebble.",
        },
      ],
    },
    {
      title: "Glarial's tomb",
      steps: [
        {
          text: "Bank everything except Glarial's pebble + food + your fast-travel items (the next area strips most equipment).",
        },
        {
          text: "Travel to Glarial's Tombstone — it stands in the woods east of the waterfall, north of the Fishing Guild (between Almera's house and the river).",
        },
        {
          text: "Use Glarial's pebble on the tombstone to descend into the tomb.",
        },
        {
          text: "Inside the tomb, search the chest in the central room for Glarial's amulet.",
        },
        {
          text: "Search the tomb (the sarcophagus / urn alcove on the west side) for Glarial's urn.",
        },
      ],
    },
    {
      title: "Baxtorian's treasure",
      steps: [
        {
          text: "Bank Glarial's pebble (don't bring it into the chamber). Collect from your bank: 6 air runes, 6 water runes, 6 earth runes, 1 rope, food, Glarial's amulet, and Glarial's urn.",
        },
        {
          text: "Board the raft west of Almera's cabin again. As you ride down, use a rope on the rock at the river bend, then quickly use the rope on the dead tree above the falls before you go over (timing skill check).",
        },
        {
          text: "Equip Glarial's amulet and enter the doorway behind the waterfall.",
        },
        {
          text: "Inside Baxtorian's chamber, retrieve the key from the northernmost crates on the right-hand path.",
        },
        {
          text: "Use the key on the left-side door.",
        },
        {
          text: "Inside the rune room, place 1 air rune + 1 water rune + 1 earth rune on each of the 6 pillars (use 1 of each per pillar).",
        },
        {
          text: "Place Glarial's amulet on the statue at the back of the room.",
        },
        {
          text: "Use Glarial's urn on the chalice that appears (you need at least 5 free inventory slots for the rewards).",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "13,750 Strength experience",
    "13,750 Attack experience",
    "2 Diamonds + 2 Gold bars + 40 Mithril seeds (drops from the chalice)",
  ],
};
