import type { QuestWalkthrough } from "../types";

export const waterfallQuest: QuestWalkthrough = {
  startPoint:
    "Talk to Almera in her log cabin on the north bank of the river just east of Baxtorian Falls. Rub a games necklace and pick Barbarian Outpost, then run south down the hill to the river — the cabin is the only building there.",
  itemsRequired: [
    "Rope",
    "6 Air runes",
    "6 Earth runes",
    "6 Water runes",
  ],
  recommended: [
    "Combat 25+",
    "12+ Hitpoints recommended (one room damages you to 1 HP if you are not careful)",
    "Some food",
    "Games necklace (Barbarian Outpost) for the falls, skills necklace (Fishing Guild) for Glarial's tomb",
    "Ring of dueling (Castle Wars) for the Tree Gnome Village trip",
  ],
  sections: [
    {
      title: "Read the Book on Baxtorian",
      steps: [
        {
          text: "Travel to Almera's log cabin on the north bank of the river east of Baxtorian Falls.",
          travel:
            "Games necklace to Barbarian Outpost, then run south down the hill to the riverside — Almera's cabin is right there. Without a games necklace, skills necklace to the Fishing Guild and run north along the river bank, or run north from Ardougne past Hemenster.",
        },
        {
          text: "Talk to Almera; she asks you to find her son Hudon.",
        },
        {
          text: "Board the log raft tied up west of the cabin — you float downstream onto a small island in the falls.",
        },
        {
          text: "On the island, talk to Hudon by the riverbank and exhaust all his dialogue.",
        },
        {
          text: "Swim south from the southern tip of the island — you wash ashore at the base of the cliff.",
        },
        {
          text: "Climb up and enter Baxtorian's longhall above the cliff, then take the stairs to the upper floor.",
        },
        {
          text: "Search the southernmost bookcase upstairs for the Book on Baxtorian and read it for the chamber instructions.",
        },
      ],
    },
    {
      title: "Get Glarial's pebble",
      steps: [
        {
          text: "Travel to Tree Gnome Village, north-east of Castle Wars.",
          travel:
            "Ring of dueling to Castle Wars, then run north-east along the road to the tall hedge maze. Talk to Elkoy at the maze entrance and let him walk you through to the village centre — solving the maze on foot is slow.",
        },
        {
          text: "From the village centre, find the dungeon ladder near King Bolren's spirit tree and climb down.",
        },
        {
          text: "Search the off-coloured (lighter-shaded) crate near the dungeon entrance for a small key.",
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
          text: "Bank everything except Glarial's pebble, food and your fast-travel items — you cannot carry weapons or armour into the tomb.",
        },
        {
          text: "Travel to Glarial's Tombstone in the woods east of the waterfall, north of the Fishing Guild.",
          travel:
            "Skills necklace to the Fishing Guild is fastest — leave by the guild's north side and run north into the woods; the tombstone stands in a clearing there (moss giants roam nearby). Coming from Almera's cabin instead, just follow the river bank south-east.",
        },
        {
          text: "Use Glarial's pebble on the tombstone to descend into the tomb.",
        },
        {
          text: "Inside the tomb, search the chest in the central room for Glarial's amulet.",
        },
        {
          text: "Search the sarcophagus in the alcove on the west side for Glarial's urn.",
        },
      ],
    },
    {
      title: "Baxtorian's treasure",
      steps: [
        {
          text: "Bank Glarial's pebble (do not bring it into the chamber). Take 6 air runes, 6 water runes, 6 earth runes, 1 rope, food, Glarial's amulet and Glarial's urn.",
        },
        {
          text: "Board the raft west of Almera's cabin again. As you ride down, use the rope on the rock at the river bend, then quickly use the rope on the dead tree above the falls before you go over.",
          travel:
            "Games necklace to Barbarian Outpost and run south to the cabin, then walk west along the bank to the moored raft.",
        },
        {
          text: "Equip Glarial's amulet and enter the doorway behind the waterfall.",
        },
        {
          text: "Inside Baxtorian's chamber, take the key from the northernmost crates on the right-hand path.",
        },
        {
          text: "Use the key on the left-side door.",
        },
        {
          text: "In the rune room, place 1 air rune + 1 water rune + 1 earth rune on each of the 6 pillars.",
        },
        {
          text: "Place Glarial's amulet on the statue at the back of the room.",
        },
        {
          text: "Use Glarial's urn on the chalice that appears (keep at least 5 free inventory slots for the rewards).",
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
