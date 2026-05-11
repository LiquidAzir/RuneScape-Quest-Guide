import type { QuestWalkthrough } from "../types";

export const monkeyMadnessI: QuestWalkthrough = {
  startPoint: "Talk to King Narnode Shareen at the Grand Tree (after The Grand Tree + Tree Gnome Village).",
  itemsRequired: [
    "Gold bar",
    "Ball of wool",
    "Monkey bones (any) — drops from monkeys near Karamja shipyard",
    "5 bananas",
    "Lockpick",
  ],
  recommended: [
    "Combat 65+",
    "43+ Prayer (Protect from Magic for the boss)",
    "Antipoison/Antidote++",
    "Prayer potions",
    "Sharks or other high-heal food",
    "Stamina potions",
    "Ring of dueling for fast banking",
    "200,000 coins to skip the slide puzzle (optional)",
  ],
  enemies: ["Jungle Demon (level 195) — boss, vulnerable to Protect from Magic"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to King Narnode at the Grand Tree. He gives you the gnome royal seal." },
        { text: "Take the glider from the Grand Tree to Gandius (Karamja shipyard)." },
        { text: "Kill a monkey nearby for monkey bones if you don't have any." },
        { text: "Enter the shipyard and talk to G.L.O. Caranock." },
        { text: "Return to King Narnode inside the Grand Tree for orders." },
        { text: "Talk to Daero in the Grand Tree bar (2 floors down)." },
        {
          text: "Solve the sliding puzzle in the hangar to fly out — or pay 200k coins to skip.",
          notes: ["The slide puzzle solution is on the wiki; brute force it tile by tile."],
        },
        { text: "Watch the cutscene and fly with Waydar to Crash Island." },
        { text: "Talk to Lumdo on Crash Island to sail to Ape Atoll." },
      ],
    },
    {
      title: "Get arrested and meet Garkor",
      steps: [
        { text: "Walk into the village — you'll be arrested and jailed." },
        { text: "Pick the lock to escape, dodging the patrolling monkey guards." },
        { text: "Follow the path to Garkor (10th squad leader)." },
        { text: "Talk to Garkor in the Ape Atoll jungle south of the city gate and listen to the briefing." },
      ],
    },
    {
      title: "Get the M'amulet mould and dentures",
      steps: [
        { text: "Enter the U-shaped building (Marimbo temple area)." },
        { text: "Search the stacked crates on the light-brown floor for monkey dentures." },
        { text: "Search the south-east crate to fall into a cave below." },
        { text: "Down here, search the north-west crates for the M'amulet mould." },
        { text: "Teleport away and bank to resupply with combat gear and food." },
      ],
    },
    {
      title: "Make the M'speak amulet",
      steps: [
        { text: "Return to Ape Atoll and enter the Ape Atoll dungeon." },
        { text: "Run through the dungeon using Protect from Melee prayer." },
        { text: "Talk to Zooknock at the end of the Ape Atoll Dungeon and use the dentures, mould, and a gold bar on him." },
        { text: "He gives you an enchanted gold bar." },
        { text: "Teleport out and bank again." },
        { text: "Return to the Temple of Marimbo." },
        { text: "Use the enchanted bar on the wall of flames in the temple." },
        { text: "Use a ball of wool on the resulting amulet to make the M'speak amulet." },
      ],
    },
    {
      title: "Get a karamjan greegree",
      steps: [
        { text: "Walk to the monkey child's house, dodging the Monkey's Aunt." },
        { text: "Equip the M'speak amulet and talk to the monkey child." },
        { text: "Pick 5 bananas from the trees in his garden." },
        { text: "Give the 5 bananas to the monkey child for the monkey talisman." },
        { text: "Return to Zooknock at the end of the Ape Atoll Dungeon with the talisman + monkey bones." },
        { text: "Use both on Zooknock to receive the karamjan monkey greegree." },
      ],
    },
    {
      title: "Recruit Awowogei and defeat the Jungle Demon",
      steps: [
        { text: "At Ardougne Zoo, equip the greegree, capture a monkey using the M'speak amulet." },
        { text: "Travel to the Grand Tree and back to Ape Atoll via Daero → Waydar → Lumdo." },
        { text: "Equip the greegree and amulet to walk freely past the guards." },
        { text: "Talk to Garkor in the Ape Atoll jungle, the Elder Guard outside the palace, Kruk near the palace, then King Awowogei inside the palace to receive the 10th Squad Sigil." },
        { text: "Equip the sigil, fight the Jungle Demon (level 195) with Protect from Magic." },
        { text: "Return to King Narnode at the Grand Tree." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "10,000 coins + 3 diamonds",
    "Pick: 35,000 XP in Attack/Defence OR Strength/Hitpoints (2 of those skills get 35k each, the other two get 20k)",
    "Ability to wield the Dragon scimitar — best 1H melee weapon for many slayer tasks",
    "Access to Ape Atoll and the karamja monkey greegree",
  ],
};
