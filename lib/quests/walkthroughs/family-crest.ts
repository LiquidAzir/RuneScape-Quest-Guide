import type { QuestWalkthrough } from "../types";

export const familyCrest: QuestWalkthrough = {
  startPoint:
    "Talk to Dimintheis at his small house in south-east Varrock (the small cottage just south-east of Varrock central square, near the cooks' guild road).",
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
          text: "Talk to Dimintheis at his cottage in south-east Varrock — he wants his family crest reassembled from his three sons.",
        },
        {
          text: "Travel to Catherby (south-east of Camelot, on the coast) and find Caleb at his small house in central Catherby (the western part of the village near the fishing spots). Give him the cooked fish (shrimps, salmon, tuna, bass, swordfish — one of each).",
        },
        {
          text: "Talk to Caleb again about the remaining crest parts — he gives you his piece.",
        },
        {
          text: "Travel to Al Kharid market square and find Avan's brother (the Gem Trader) at the gem stall in the centre of the Al Kharid market. Talk to him.",
        },
        {
          text: "Walk north of the Gem Trader to the scorpion mining pit just outside Al Kharid (north of the city, surrounded by scorpions). Talk to Avan there about his crest piece.",
        },
      ],
    },
    {
      title: "Make perfect jewellery",
      steps: [
        {
          text: "Travel to the Dwarven Mine (under Asgarnian Ice Mountain — south entrance is a trapdoor in Falador east of the bank, or via the Mining Guild). Find Boot the dwarf wandering the mine and talk to him about Avan's request.",
        },
        {
          text: "Travel to the Witchaven Dungeon east of Ardougne (the small dungeon entrance just outside Witchaven; descend the trapdoor inside the small house in central Witchaven).",
        },
        {
          text: "Inside the dungeon, solve the lever puzzles to access the perfect-gold rocks chamber (puzzle: pull levers in a sequence — see wiki for the per-area reset).",
        },
        {
          text: "Mine 2 perfect gold ore from the perfect-gold rocks chamber.",
        },
        {
          text: "Smelt the perfect gold ore at a furnace (the closest furnace is in Lumbridge or Al Kharid — bring the ring mould + necklace mould).",
        },
        {
          text: "At the same furnace, craft 1 perfect ruby ring and 1 perfect ruby necklace (use cut ruby + perfect gold bar + the right mould).",
        },
        {
          text: "Return the jewellery to Avan at the scorpion pit north of Al Kharid — he gives you his crest piece.",
        },
      ],
    },
    {
      title: "Defeat Chronozon",
      steps: [
        {
          text: "Travel to the Jolly Boar Inn (the inn on the road north-east of Varrock, between Varrock and Edgeville). Find Johnathon inside and use an antipoison potion on him.",
        },
        {
          text: "Enter the Edgeville Dungeon (descend the trapdoor in the small house just east of the Edgeville bank, or via the trapdoor in the hut west of Varrock).",
        },
        {
          text: "Navigate west through the dungeon past thugs, druids, and poison spiders to reach Chronozon's chamber in the south.",
        },
        {
          text: "Safespot Chronozon (level 170 demon) from behind the southern rocks in his chamber.",
        },
        {
          text: "Cast each Blast spell on him in turn (Wind Blast, Water Blast, Earth Blast, Fire Blast) — he must be hit by all 4 elements.",
        },
        {
          text: "Defeat Chronozon and pick up the final crest piece from his body.",
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
