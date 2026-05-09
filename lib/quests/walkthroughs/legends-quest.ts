import type { QuestWalkthrough } from "../types";

export const legendsQuest: QuestWalkthrough = {
  startPoint: "Talk to Legends' Guard east of Ardougne (50 QP requirement to start).",
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
        { text: "Talk to the Legends' Guard (3, 1, 2)." },
        { text: "Talk to Radimus at the Legends' Guild." },
        { text: "Accept the quest challenge." },
      ],
    },
    {
      title: "Map the Kharazi Jungle",
      steps: [
        { text: "Travel to the Kharazi Jungle south of Shilo Village." },
        { text: "Map all 3 jungle sections using Radimus's notes." },
        { text: "Trade the notes to the Jungle forester for a bullroarer." },
        { text: "Summon Gujuo with the bullroarer at the totem pole." },
        { text: "Search the mossy rock and crawl inside (50 Agility)." },
        { text: "Investigate the Fire Wall." },
      ],
    },
    {
      title: "Sacred pool",
      steps: [
        { text: "Smith a golden bowl from 2 gold bars." },
        { text: "Have Gujuo enchant it (42 Prayer)." },
        { text: "Collect reeds and fill the bowl with sacred water." },
        { text: "Navigate the Viyeldi caves using lockpick + mining." },
        { text: "Use runes on the marked wall (Soul, Mind, Earth, Law, Law)." },
        { text: "Place cut gems on the carved rocks per the map." },
        { text: "Collect the binding book." },
      ],
    },
    {
      title: "First Nezikchened fight",
      steps: [
        { text: "Use the golden bowl (sacred water) on the fire around Ungadulu." },
        { text: "Use the binding book on Ungadulu." },
        { text: "Defeat Nezikchened (level 187)." },
      ],
    },
    {
      title: "Restore the pool",
      steps: [
        { text: "Collect ardrigal + snake weed; brew bravery potion." },
        { text: "Navigate the cave with rope to the lower chamber." },
        { text: "Kill 3 skeleton variants (Ranalph, Irvig, San Tojalon)." },
        {
          text: "Pick path: evil (pick up the hat, fight Viyeldi) or good (skip the hat, use dark dagger).",
        },
        { text: "Defeat Nezikchened again." },
      ],
    },
    {
      title: "Yommi tree + final fight",
      steps: [
        { text: "Plant germinated seeds on fertile soil." },
        { text: "Use sacred water on the yommi bush to grow the tree." },
        { text: "Chop the tree and carve a totem." },
        { text: "Use the totem on the old totem pole." },
        { text: "Defeat 3 skeletons + Nezikchened (final time)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Radimus with the gilded totem and notes." },
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
