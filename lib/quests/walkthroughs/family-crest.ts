import type { QuestWalkthrough } from "../types";

export const familyCrest: QuestWalkthrough = {
  startPoint: "Talk to Dimintheis in south-east Varrock.",
  itemsRequired: [
    "Cooked shrimps, salmon, tuna, bass, swordfish (one each)",
    "Adamant or rune pickaxe",
    "2 cut rubies",
    "Ring mould + Necklace mould",
    "Antipoison potion",
    "Runes for Wind, Water, Earth, and Fire Blast spells",
  ],
  recommended: [
    "Combat 55+",
    "Extra antipoison",
    "Teleports for Varrock, Camelot, Ardougne, Falador, Edgeville, Al Kharid",
  ],
  enemies: ["Chronozon (level 170 demon) — safespottable"],
  sections: [
    {
      title: "Find the brothers",
      steps: [
        { text: "Talk to Dimintheis in south-east Varrock — he wants his family crest reassembled from his three sons." },
        { text: "Travel to Catherby and give the cooked fish to Caleb." },
        { text: "Talk to him about the remaining crest parts — he gives you his piece." },
        { text: "Travel to the Al Kharid Gem Trader and talk to him." },
        { text: "Find Avan at the scorpion mining pit north of the Gem Trader." },
      ],
    },
    {
      title: "Make perfect jewellery",
      steps: [
        { text: "Enter the Dwarven Mine and talk to Boot." },
        { text: "Travel to the Witchaven Dungeon east of Ardougne." },
        { text: "Solve the lever puzzles to access the hellhound chamber." },
        { text: "Mine 2 perfect gold ore." },
        { text: "Smelt them at a furnace (Lumbridge is closest)." },
        { text: "Craft 1 perfect ruby necklace and 1 perfect ruby ring." },
        { text: "Return the jewellery to Avan — he gives you his piece." },
      ],
    },
    {
      title: "Defeat Chronozon",
      steps: [
        { text: "Travel to the Jolly Boar Inn and use antipoison on Johnathon." },
        { text: "Enter the Edgeville Dungeon (via Edgeville or the hut west of Varrock)." },
        { text: "Navigate past thugs, druids and poison spiders to Chronozon." },
        { text: "Safespot Chronozon between the southern rocks." },
        {
          text: "Cast each blast spell (Wind, Water, Earth, Fire Blast) on him — he must be hit by all four.",
        },
        { text: "Defeat Chronozon and pick up the final crest piece." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Combine the three pieces to assemble the Family Crest." },
        { text: "Return to Dimintheis in Varrock." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Steel gauntlets — can be enchanted by the brothers (Cooking, Goldsmith, or Chaos gauntlets) for 25k coins",
  ],
};
