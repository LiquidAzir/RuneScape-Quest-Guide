import type { QuestWalkthrough } from "../types";

export const rovingElves: QuestWalkthrough = {
  startPoint: "Talk to Islwyn in the Isafdar woods (west of Lletya or north-east of Tyras Camp).",
  itemsRequired: [
    "Glarial's pebble (from Tree Gnome Village dungeon if missing)",
    "Spade",
    "Rope",
  ],
  recommended: [
    "Combat 60+ for the unarmed Moss Guardian fight",
    "Strong food (sharks)",
    "Antipoison",
    "Prayer potions",
    "Ring of recoil",
    "Skills necklace (Fishing Guild teleport)",
  ],
  enemies: ["Moss Guardian (level 84) — must be killed unarmed"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Tirannwn (charter ship to Port Tyras or via Underground Pass)." },
        { text: "Find Islwyn west of Lletya or north-east of Tyras Camp." },
        { text: "Talk to Islwyn in the forest clearing south-east of Prifddinas and agree to help. He directs you to Eluned." },
        { text: "Talk to Eluned in Tirannwn — she needs a consecration seed from Glarial's tomb." },
      ],
    },
    {
      title: "Get the consecration seed",
      steps: [
        {
          text: "Bank ALL combat equipment, weapons, runes, and even ammo before going to Glarial's tomb.",
          notes: ["The Moss Guardian must be defeated unarmed — armour and weapons disappear from your inventory at the tomb entrance."],
        },
        {
          text: "If you don't have Glarial's pebble, get it from the Tree Gnome Village dungeon (climb down and search the chest).",
        },
        { text: "Travel north-west of the Fishing Guild to Glarial's tombstone." },
        { text: "Use Glarial's pebble on the tombstone to enter the tomb." },
        { text: "Defeat the Moss Guardian (level 84) unarmed." },
        { text: "Pick up the consecration seed it drops." },
        { text: "Return to Eluned in Tirannwn and give her the seed." },
      ],
    },
    {
      title: "Plant the seed in the Waterfall Dungeon",
      steps: [
        { text: "Travel to Baxtorian Falls north of the Fishing Guild." },
        { text: "Board the log raft north of the falls." },
        { text: "Use a rope on the rock by the river, then use it on the dead tree." },
        { text: "Open the door to enter the Waterfall Dungeon." },
        {
          text: "If you don't have a key, search the northernmost crates in the eastern room.",
        },
        { text: "Follow the western path north all the way to the final small room at the dungeon's end." },
        { text: "Use the seed to plant it." },
        { text: "Return to Islwyn in the forest clearing south-east of Prifddinas for your reward." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 Strength experience",
    "Choice of Crystal shield or Crystal bow (each starts with 500 charges)",
  ],
};
