import type { QuestWalkthrough } from "../types";

export const legendsQuest: QuestWalkthrough = {
  startPoint:
    "Talk to the Legends' Guard outside the Legends' Guild, north-east of East Ardougne (50 QP required to start). Ardougne Teleport to the market square, then run east out of the city and follow the road north-east up the hill to the walled guild.",
  itemsRequired: [
    "Machete",
    "2 Gold bars",
    "Hammer + Rope",
    "Rune (or better) axe",
    "2 Lockpicks",
    "Pickaxe",
    "Vial of water + Ardrigal + Snake weed",
    "Cut sapphire + emerald + ruby + diamond + opal + jade + red topaz",
    "Soul rune + Mind rune + 2 Law runes + Earth rune",
    "Unpowered orb",
    "2-3 Charcoal + 3-5 Papyrus",
  ],
  recommended: [
    "Combat 65+",
    "Super restore + Botanical/Summer pies (skill boosts)",
    "Sharks + prayer potions",
    "Ardougne teleport / fairy rings",
  ],
  enemies: [
    "Ranalph Devere (level 92), Irvig Senay (level 100), San Tojalon (level 106) — fight twice each",
    "Nezikchened (level 187) — fight 3 times",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to the Legends' Guard at the Legends' Guild gate and answer 3, 1, 2.",
          travel:
            "Ardougne Teleport lands in the East Ardougne market square — run east out of the city gate, then follow the road north-east up the hill. The guard stands at the guild's front gate.",
        },
        { text: "Talk to Radimus Erkle inside the Legends' Guild ground floor." },
        { text: "Accept the quest challenge and take Radimus's notes." },
      ],
    },
    {
      title: "Map the Kharazi Jungle",
      steps: [
        {
          text: "Travel to the Kharazi Jungle on the southern coast of Karamja, south of Shilo Village.",
          travel:
            "Fairy ring CKR lands in the north-east of the Kharazi Jungle. Without a fairy ring: boat from Port Sarim to Musa Point, walk to Brimhaven, take Vigroy's cart to Shilo Village (Shilo Village quest required), then run south and hack through the jungle vines with your machete.",
        },
        { text: "Map all 3 jungle sections (west, centre, east) using Radimus's notes." },
        { text: "Trade the completed notes to a Jungle forester chopping trees along the jungle's northern edge." },
        { text: "Blow the bullroarer beside the totem pole in the jungle to summon Gujuo." },
        { text: "Search the mossy rock in the south-west of the jungle and crawl inside (50 Agility)." },
        { text: "Investigate the Fire Wall in the cave below." },
      ],
    },
    {
      title: "Sacred pool",
      steps: [
        { text: "Smith a golden bowl from 2 gold bars at any furnace." },
        { text: "Have Gujuo enchant the bowl at the sacred pool (42 Prayer)." },
        { text: "Collect reeds and fill the bowl with sacred water from the pool." },
        { text: "Navigate the Viyeldi caves using your lockpick and pickaxe." },
        { text: "Use runes on the marked wall (Soul, Mind, Earth, Law, Law)." },
        { text: "Place the cut gems on the carved rocks per the map." },
        { text: "Collect the binding book." },
      ],
    },
    {
      title: "First Nezikchened fight",
      steps: [
        { text: "Use the golden bowl of sacred water on the fire surrounding Ungadulu." },
        { text: "Use the binding book on Ungadulu." },
        { text: "Defeat Nezikchened (level 187)." },
      ],
    },
    {
      title: "Restore the pool",
      steps: [
        { text: "Collect ardrigal and snake weed from the jungle palms and vines, then brew the bravery potion." },
        { text: "Tie your rope to the rocks and climb down to the lower chamber." },
        { text: "Kill the 3 skeleton champions (Ranalph Devere, Irvig Senay, San Tojalon)." },
        {
          text: "Pick path: evil (pick up the hat, fight Viyeldi) or good (skip the hat, use dark dagger).",
        },
        { text: "Defeat Nezikchened again." },
      ],
    },
    {
      title: "Yommi tree + final fight",
      steps: [
        { text: "Plant the germinated seeds on the fertile soil patch in the jungle." },
        { text: "Use sacred water on the yommi bush to grow the tree." },
        { text: "Chop the tree with a rune axe and carve a totem." },
        { text: "Use the totem on the old totem pole." },
        { text: "Defeat the 3 skeletons and Nezikchened one final time." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Radimus Erkle in the Legends' Guild with the gilded totem and notes.",
          travel:
            "Fairy ring CKR back out of the jungle, then Ardougne Teleport and run east out of the city and north-east up the road to the guild. Radimus is on the ground floor.",
        },
        { text: "Choose 4 skills for 30,000 XP each." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "Access to the Legends' Guild (highest-tier early shop)",
    "Dragon sq shield unlock",
    "120,000 XP across 4 chosen skills",
    "Ability to recharge Skills necklace + Combat bracelet at the Fountain of Heroes",
  ],
};
