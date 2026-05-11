import type { QuestWalkthrough } from "../types";

export const waterfallQuest: QuestWalkthrough = {
  startPoint: "Talk to Almera north-east of Baxtorian Falls.",
  itemsRequired: [
    "Rope",
    "6 Air runes",
    "6 Earth runes",
    "6 Water runes",
  ],
  recommended: [
    "Combat 25+",
    "12+ Hitpoints",
    "Some food",
    "Games necklace / Spirit tree / fairy ring",
  ],
  sections: [
    {
      title: "Read the book",
      steps: [
        { text: "Talk to Almera north-east of Baxtorian Falls." },
        { text: "Board the raft west of her house." },
        { text: "Talk to Hudon on the small island in Baxtorian Falls (go through all dialogue)." },
        { text: "Swim in the water at the south end of the island." },
        { text: "Enter the large building and go upstairs." },
        { text: "Search the southernmost bookcase for the Book on Baxtorian and read it." },
      ],
    },
    {
      title: "Get Glarial's pebble",
      steps: [
        { text: "Enter Tree Gnome Village maze." },
        { text: "Enter the dungeon at the maze end." },
        { text: "Search the off-coloured crate for a key." },
        { text: "Open the gate." },
        { text: "Talk to Golrie in the Tree Gnome Village dungeon to receive Glarial's pebble." },
      ],
    },
    {
      title: "Glarial's tomb",
      steps: [
        { text: "Bank everything except the pebble + food + transport." },
        { text: "Travel to Glarial's Tombstone east of the waterfall." },
        { text: "Use the pebble on the tombstone to enter." },
        { text: "Search the chest for Glarial's amulet." },
        { text: "Search the tomb for Glarial's urn." },
      ],
    },
    {
      title: "Baxtorian's treasure",
      steps: [
        { text: "Collect runes, rope, food, amulet, and urn from the bank." },
        { text: "Board the raft and use a rope on the rock, then on the dead tree." },
        { text: "Wear the amulet and enter the doorway." },
        { text: "Retrieve the key from the northernmost crates on the right path." },
        { text: "Use the key on the left-side door." },
        { text: "Place 1 air, 1 water, and 1 earth rune on each pillar." },
        { text: "Place the amulet on the statue." },
        { text: "Use the urn on the chalice (5 free inventory slots needed)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "13,750 Strength experience",
    "13,750 Attack experience",
    "2 Diamonds + 2 Gold bars + 40 Mithril seeds",
  ],
};
