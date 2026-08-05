import type { QuestWalkthrough } from "../types";

export const rfdKingAwowogei: QuestWalkthrough = {
  startPoint:
    "Inspect King Awowogei frozen in the Lumbridge Castle dining room — Lumbridge Home Teleport, walk into the castle and go to the long banquet hall on the ground floor, just east of the kitchen.",
  itemsRequired: [
    "M'speak amulet",
    "Karamjan monkey greegree",
    "3 monkey talismans (buy from rune shop) — used to make new greegrees",
    "Rope",
    "Knife or slashing weapon",
    "Pestle and mortar",
    "Bananas + monkey nuts",
  ],
  recommended: [
    "Combat 65+",
    "Antipoison + stamina + prayer potions",
    "Sharks/anglers",
    "Ranged or magic for the snake fight",
    "70 Cooking for the final stuffed snake",
  ],
  enemies: [
    "Big Snakes (level 84) on Crash Island",
    "Zombie monkey (level 82/129)",
    "Monkey guard (level 167)",
    "Monkey archer (level 86)",
  ],
  sections: [
    {
      title: "Talk to Awowogei on Ape Atoll",
      steps: [
        {
          text: "Travel to Ape Atoll carrying the Karamjan monkey greegree and M'speak amulet.",
          travel:
            "Spirit tree to the Tree Gnome Stronghold (or a gnome glider, or the Grand Tree agility shortcut) and go to the Grand Tree. Climb down into the hangar tunnel beneath it and talk to Daero — he blindfolds you, then Waydar flies you to Crash Island. On Crash Island talk to Lumdo at the dock and he sails you to Ape Atoll. Lumdo lands you on the island's north-west shore; equip the greegree before you leave the beach or the monkeys will attack.",
        },
        {
          text: "Run east into the walled city of Marim and talk to King Awowogei in his palace.",
          travel:
            "From the landing beach head east through Marim's gate; the palace is the large building in the north-east of the city — Awowogei is on the throne inside.",
        },
        {
          text: "Talk to the 3 monkeys in the north-west corner of the Temple of Marimbo in Marim.",
          travel:
            "Leave the palace and run south-west through Marim to the temple; the three monkeys you need are clustered in its north-west corner.",
        },
        { text: "Use a banana and monkey nuts on them as needed." },
      ],
    },
    {
      title: "Make new greegrees",
      steps: [
        {
          text: "Buy 3 blank monkey talismans from the rune shop in Marim.",
          travel: "The rune shop is one of the small stalls inside Marim, a short run from the temple.",
        },
        { text: "Kill a monkey archer, a monkey guard and a zombie monkey around Marim and the temple for their bones." },
        {
          text: "Bring the bones and talismans to Zooknock deep in the Ape Atoll Dungeon — he makes the 3 new greegrees.",
          travel:
            "The dungeon entrance is the cave in the north-west of Ape Atoll, near where Lumdo drops you. Bring a light source and follow the winding tunnel to its far end; Zooknock stands there beside the cooking range you will need later.",
        },
      ],
    },
    {
      title: "Catch big snakes",
      steps: [
        {
          text: "Travel back to Crash Island and hunt the Big Snakes there.",
          travel:
            "Return to Ape Atoll's dock and talk to Lumdo — he sails you back to Crash Island. The Big Snakes roam the jungle in the middle of the island, just inland from the dock.",
        },
        { text: "Activate Protect from Melee." },
        { text: "Kill at least 3 Big Snakes (level 84) for snake corpses." },
      ],
    },
    {
      title: "Stuff the snake",
      steps: [
        {
          text: "Back on Ape Atoll, wield the gorilla greegree and pick red bananas from the banana trees outside Marim.",
          travel: "Sail back with Lumdo from Crash Island; the banana trees are in the plantation just outside Marim's walls.",
        },
        {
          text: "Wield the ninja monkey greegree, run the Ape Atoll Agility Course and collect tchiki monkey nuts.",
          travel: "The agility course starts at the tree by Marim's north-western wall; the tchiki nut bushes are reached along it.",
        },
        { text: "Grind the tchiki nuts with a pestle and mortar; slice the red banana with a knife." },
        { text: "Combine red banana, ground tchiki nuts and snake corpse to stuff the snake." },
        {
          text: "Cook the stuffed snake on the range in Zooknock's dungeon chamber (70 Cooking).",
          travel: "Re-enter the Ape Atoll Dungeon through the cave in the island's north-west and follow the tunnel back to Zooknock — the range is next to him.",
        },
      ],
    },
    {
      title: "Deliver",
      steps: [
        {
          text: "Wear the M'speak amulet and deliver the stuffed snake to King Awowogei in his Marim palace.",
          travel: "Out of the dungeon, east into Marim and north-east to the palace throne room.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 Cooking experience",
    "10,000 Agility experience",
    "Ape Atoll Teleport spell unlock",
    "King Awowogei freed",
  ],
};
