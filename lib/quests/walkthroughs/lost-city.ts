import type { QuestWalkthrough } from "../types";

export const lostCity: QuestWalkthrough = {
  startPoint:
    "Talk to the Warrior at the small adventurers' campsite north-west of Lumbridge Swamp (the campfire and tents in the woods just north-west of the swamp's wheat field). Lumbridge Home Teleport, then run south-west out of the castle grounds and across the field into the trees.",
  itemsRequired: [
    "Knife",
    "Woodcutting axe (a bronze axe drops from the zombies in the Entrana dungeon — leave yours at the bank if you forget)",
  ],
  recommended: [
    "Combat 45+ recommended for the Tree Spirit fight",
    "No weapons or armour are allowed on Entrana — bring food, runes (Crumble Undead works great), and prayer potions only",
    "Weight-reducing clothing and stamina/energy potions",
    "Teleport tablet for fast escape from Entrana",
  ],
  enemies: [
    "Zombies (level 25) — Entrana dungeon, drop a bronze axe",
    "Greater demons (level 92) — Entrana dungeon; can be safespotted/avoided",
    "Tree Spirit (level 101) — spawns when you try to chop the Dramen tree",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to the Warrior beside the fire at the adventurers' campsite north-west of Lumbridge Swamp.",
          travel:
            "Lumbridge Home Teleport, then run west across the River Lum bridge and south-west into the woods — the camp is the small clearing with a fire and four NPCs, just north-west of the swamp's wheat field.",
        },
        {
          text: "Talk to the other adventurers around the fire — the Monk, the Leprechaun, and Shamus the Dwarf. Keep going through dialogue until the Leprechaun mentions the magical tree nearby.",
        },
        {
          text: "Find the small tree right next to the campfire (the smaller tree closest to the fire, north of the camp). Right-click it and use the 'Chop' option (NOT 'Chop down') — Shamus appears.",
        },
        {
          text: "Talk to Shamus by the tree to learn about the entrance to Zanaris.",
        },
      ],
    },
    {
      title: "Prepare for Entrana",
      steps: [
        {
          text: "Bank ALL weapons and armour — the Monks of Entrana strip them on landing. Jewellery, runes, and food are allowed.",
        },
        {
          text: "Sail to Entrana by talking to the Monk of Entrana on the gangplank at the Port Sarim docks.",
          travel:
            "Falador Teleport then run south down the road to Port Sarim, or amulet of glory to Draynor Village and run west. The Entrana ship is the northernmost of the three piers, north of the fishing and food shops — monks stand on the gangplank.",
        },
      ],
    },
    {
      title: "Get a Dramen branch",
      steps: [
        {
          text: "On Entrana, run north-east from the dock and climb down the ladder into the Entrana dungeon.",
          travel:
            "From the boat, head north-east across the island past the church and the herb patch — the dungeon ladder is in the north-eastern corner of the island, beyond the river crossing.",
        },
        {
          text: "Inside the dungeon, kill zombies until one drops a bronze axe (~40% drop rate) — this is the only axe you can use here.",
        },
        {
          text: "Carefully run south-east through the dungeon, past the greater demons, to the lone Dramen tree at the south-east corner of the dungeon.",
        },
        {
          text: "Try to chop the Dramen tree — the Tree Spirit (level 101) spawns and attacks. Defeat it (safespot behind the southern fungus growth; Crumble Undead works great if Magic 39+).",
        },
        {
          text: "Once the Tree Spirit is dead, chop the Dramen tree with the bronze axe to get a Dramen branch.",
        },
        {
          text: "Teleport out (Lumbridge home teleport) or run back to the dungeon ladder, exit the cave, and sail back to Port Sarim.",
        },
      ],
    },
    {
      title: "Open the Zanaris portal",
      steps: [
        {
          text: "Use a knife on the Dramen branch to whittle it into a Dramen staff.",
        },
        {
          text: "Travel to the isolated tool shed in the middle of Lumbridge Swamp.",
          travel:
            "Lumbridge Home Teleport, then run south out of the castle grounds past the church and into the swamp — the shed is a tiny one-room wooden hut standing alone in the centre of the swamp, west of the swamp's mining site.",
        },
        {
          text: "Equip the Dramen staff and click the shed door — you're teleported into Zanaris.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Access to Zanaris (the fairy realm — cosmic altar, fairy ring network, Puro-Puro implings)",
    "Ability to wield Dragon longswords and Dragon daggers (with 60 Attack)",
  ],
};
