import type { QuestWalkthrough } from "../types";

export const rovingElves: QuestWalkthrough = {
  startPoint:
    "Talk to Islwyn, who wanders a clearing in the Isafdar woods with Eluned (between Lletya and Tyras Camp). Get to Tirannwn with a charter ship to Port Tyras (unlocked by Regicide) and run north-east through the forest, or go back through the Underground Pass from West Ardougne.",
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
        {
          text: "Travel to Tirannwn and find Islwyn in the Isafdar forest clearing.",
          travel:
            "Fastest: any charter ship (Port Sarim, Catherby, Brimhaven, Port Khazard) to Port Tyras, then run north-east through Isafdar — bring antipoison, the forest traps hit and poison. No charter access: Ardougne Teleport, into West Ardougne through Edmond's tunnel, then west to Koftik's cave and all the way through the Underground Pass to the Well of Voyage.",
        },
        { text: "Talk to Islwyn in the forest clearing and agree to help. He directs you to Eluned." },
        {
          text: "Talk to Eluned — she wanders the same clearing as Islwyn — and she asks for a consecration seed from Glarial's tomb.",
        },
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
          text: "If you don't have Glarial's pebble, get it from the chest in the Tree Gnome Village dungeon.",
          travel:
            "Tree Gnome Village: spirit tree to the village if you have Tree Gnome Village done, otherwise run south-west from East Ardougne past the Khazard battlefield to the hedge maze and ask Elkoy at the entrance to guide you through. The dungeon ladder is inside the village; follow the tunnel to the chest and search it for the pebble.",
        },
        {
          text: "Travel to Glarial's tombstone in the clearing north-west of the Fishing Guild.",
          travel:
            "Skills necklace to the Fishing Guild, leave by the north gate and follow the riverbank north-west — the lone tombstone stands in the grass between the guild and Baxtorian Falls. No necklace: Camelot Teleport to Seers' Village, then run west/south-west to the guild and on north-west.",
        },
        { text: "Use Glarial's pebble on the tombstone to enter the tomb." },
        { text: "Defeat the Moss Guardian (level 84) unarmed." },
        { text: "Pick up the consecration seed it drops." },
        {
          text: "Return to Eluned in the Isafdar clearing and give her the seed.",
          travel:
            "Back to Tirannwn: charter ship to Port Tyras then north-east through Isafdar, or the crystal teleport seed / Underground Pass route if you have it.",
        },
      ],
    },
    {
      title: "Plant the seed in the Waterfall Dungeon",
      steps: [
        {
          text: "Travel to Baxtorian Falls north of the Fishing Guild.",
          travel:
            "Games necklace to the Barbarian Outpost, then run south-east down to the river at Baxtorian Falls. No necklace: skills necklace to the Fishing Guild and run north along the river, or Camelot Teleport and run west.",
        },
        { text: "Board the log raft on the river north of the falls." },
        { text: "Use a rope on the rock by the river, then use it on the dead tree to swing down to the ledge." },
        { text: "Open the door to enter the Waterfall Dungeon." },
        {
          text: "If you don't have a key, search the northernmost crates in the eastern room.",
        },
        { text: "Follow the western path north all the way to the final small room at the dungeon's end." },
        { text: "Use the seed to plant it." },
        {
          text: "Return to Islwyn in the Isafdar clearing for your reward.",
          travel: "Charter ship to Port Tyras and run north-east through Isafdar to the clearing where Islwyn and Eluned wander.",
        },
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
