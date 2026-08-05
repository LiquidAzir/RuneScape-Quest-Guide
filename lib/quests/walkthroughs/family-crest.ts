import type { QuestWalkthrough } from "../types";

export const familyCrest: QuestWalkthrough = {
  startPoint:
    "Talk to Dimintheis in his small house in south-east Varrock. Getting there: Varrock Teleport to the square, then run south-east past the Varrock Museum turn-off — his cottage is the little house tucked in the far south-east corner of the city, near the road out to the Champions' Guild.",
  itemsRequired: [
    "Cooked shrimps, salmon, tuna, bass, swordfish (one of each)",
    "Adamant or rune pickaxe",
    "2 cut rubies",
    "Ring mould + Necklace mould",
    "Antipoison potion",
    "Runes for Wind, Water, Earth, and Fire Blast spells",
  ],
  recommended: [
    "Combat 55+",
    "Extra antipoison (poison spiders in Edgeville Dungeon)",
    "Teleports for Varrock, Camelot, Ardougne, Falador, Edgeville, Al Kharid",
  ],
  enemies: ["Chronozon (level 170 demon) — fought in Edgeville Dungeon; safespottable from behind the rocks"],
  sections: [
    {
      title: "Find the brothers",
      steps: [
        {
          text: "Talk to Dimintheis in his cottage in south-east Varrock — he wants his family crest reassembled from his three sons.",
          travel:
            "Varrock Teleport to the square, then run south and east to the far south-east corner of the city. His cottage is the small building by the wall, on the road toward the Champions' Guild gate.",
        },
        {
          text: "Give Caleb the cooked shrimps, salmon, tuna, bass and swordfish at his house in Catherby.",
          travel:
            "Camelot Teleport, then run south-east down the hill into Catherby. Caleb's house is in the middle of the village, west of the bank and just up from the fishing spots on the shore.",
        },
        {
          text: "Talk to Caleb again about the remaining crest parts — he gives you his piece.",
        },
        {
          text: "Talk to the Gem Trader at the gem stall in the centre of the Al Kharid market for word of Avan.",
          travel:
            "Ring of dueling to Emir's Arena and run north-west into Al Kharid (or Lumbridge Home Teleport and run north-east through the toll gate for 10gp). The gem stall is in the market square just north of the Al Kharid bank.",
        },
        {
          text: "Talk to Avan at the scorpion mining pit north-east of Al Kharid about his crest piece.",
          travel:
            "From the Al Kharid market run north past the palace and then east — the mine is the open pit crawling with scorpions just outside the city's north-east wall. Avan is the man standing among the rocks.",
        },
      ],
    },
    {
      title: "Make perfect jewellery",
      steps: [
        {
          text: "Talk to Boot the dwarf in the Dwarven Mine about Avan's request.",
          travel:
            "Falador Teleport, then run north out of the city and north-east to the staircase down at the foot of Ice Mountain (the mine entrance on the Falador side). Boot wanders the tunnels near the Mining Guild doors — follow the main passage east from the ladder.",
        },
        {
          text: "Travel to Witchaven and descend the trapdoor into the dungeon beneath the village.",
          travel:
            "Ardougne Teleport (or Ardougne cloak to the monastery and run north-east), then head east out of East Ardougne along the road to the coastal village of Witchaven. The dungeon entrance is the trapdoor inside the small house in the north of the village.",
        },
        {
          text: "Inside the dungeon, solve the lever puzzles to reach the perfect-gold rocks chamber.",
          notes: ["The levers reset per area — pull them in sequence; the wiki has the diagram."],
        },
        {
          text: "Mine 2 perfect gold ore from the perfect-gold rocks chamber.",
        },
        {
          text: "Smelt the perfect gold ore into bars at a furnace, bringing the ring mould and necklace mould.",
          travel:
            "Closest furnace to the next step is Al Kharid's, in the building west of the bank (ring of dueling to Emir's Arena, then run north-west). Lumbridge's furnace by the castle courtyard also works.",
        },
        {
          text: "At the same furnace, craft 1 perfect ruby ring and 1 perfect ruby necklace from cut ruby + perfect gold bar + the matching mould.",
        },
        {
          text: "Return the jewellery to Avan at the scorpion pit north-east of Al Kharid — he gives you his crest piece.",
          travel: "From the Al Kharid furnace run north past the palace and then east to the scorpion mine.",
        },
      ],
    },
    {
      title: "Defeat Chronozon",
      steps: [
        {
          text: "Use an antipoison potion on Johnathon in the Jolly Boar Inn north-east of Varrock.",
          travel:
            "Varrock Teleport, then out of the east gate and north-east up the road past the Varrock east mine. The Jolly Boar Inn is the roadside pub just south of the Wilderness ditch; Johnathon is inside.",
        },
        {
          text: "Enter the Edgeville Dungeon.",
          travel:
            "Amulet of glory to Edgeville, then a few steps south-east of the bank to the small hut — the trapdoor inside leads down into the dungeon. Alternative entrance: the trapdoor in the hut on the road west of Varrock.",
        },
        {
          text: "Navigate west and south through the dungeon past the thugs, chaos druids and poison spiders to Chronozon's chamber.",
        },
        {
          text: "Safespot Chronozon (level 170 demon) from behind the rocks in his chamber.",
        },
        {
          text: "Cast each Blast spell on him in turn (Wind Blast, Water Blast, Earth Blast, Fire Blast) — he must be hit by all 4 elements.",
        },
        {
          text: "Defeat Chronozon and pick up the final crest piece from his remains.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Combine the three crest pieces (Caleb's, Avan's, and Chronozon's) to assemble the Family Crest.",
        },
        {
          text: "Return to Dimintheis at his cottage in south-east Varrock with the assembled crest.",
          travel: "Varrock Teleport, then run south-east across the city to his house in the far south-east corner.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Steel gauntlets — can be enchanted by the brothers (Cooking gauntlets from Caleb in Catherby, Goldsmith gauntlets from Avan north of Al Kharid, or Chaos gauntlets from Johnathon at Jolly Boar Inn) for 25k coins per swap",
  ],
};
