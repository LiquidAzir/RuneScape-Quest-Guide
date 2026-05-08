import type { QuestWalkthrough } from "../types";

export const desertTreasureI: QuestWalkthrough = {
  startPoint: "Talk to Asgarnia Smith at Bedabin Camp (west of the Bandit Camp).",
  itemsRequired: [
    "Several Shantay passes",
    "650 coins",
    "12 magic logs",
    "6 Steel bars",
    "6 Molten glass",
    "Ashes",
    "Charcoal",
    "1 Blood rune",
    "Bones",
    "Silver bar",
    "Garlic powder",
    "Spice",
    "Sweet food (chocolate cake)",
    "Spiked boots",
    "Climbing boots",
    "Facemask / Slayer helmet / Gas mask",
    "Tinderbox",
    "20-50 lockpicks",
  ],
  recommended: [
    "Combat 70+",
    "Sharks/anglers + prayer/super restore potions",
    "Antidote++ or super antipoison",
    "Ice gloves (or Smiths gloves (i)) for Fareed",
    "Stamina potions",
    "Weight-reducing clothing",
    "Ring of dueling, Digsite pendant, Ectophial for fast travel",
  ],
  enemies: [
    "Dessous (level 139) — vampyre, weak to silver",
    "Fareed (level 167) — fire boss, weak to water spells/ranged",
    "Damis (level 103 then 174) — shadow boss, two forms",
    "Kamil (level 154) — ice boss, weak to fire spells only",
    "Ice trolls (level 120-124, x5)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Asgarnia Smith at Bedabin Camp." },
        { text: "Travel to the Digsite Exam Centre and talk to Terry Balando for the translation." },
        { text: "Buy a drink at the Bandit Camp pub for 650gp and ask the bartender about the four diamonds." },
        { text: "Talk to Eblis at the obelisk and deliver the items he requests." },
      ],
    },
    {
      title: "Smoke diamond — Fareed",
      steps: [
        { text: "Equip a facemask and enter the Smoke Dungeon." },
        { text: "Light all 4 standing torches in the corners of the smoke chamber." },
        { text: "Open the chest in the centre before the torches burn out — take the warm key." },
        { text: "Use the warm key on the eastern gate." },
        {
          text: "Defeat Fareed (level 167) using ice gloves + water spells or ranged.",
          notes: ["Fareed sets your weapon ablaze unless you wear ice gloves."],
        },
        { text: "Take the smoke diamond." },
      ],
    },
    {
      title: "Shadow diamond — Damis",
      steps: [
        { text: "Travel to Rasolo (wandering merchant) east of Baxtorian Falls." },
        { text: "Bring 20+ lockpicks and antipoison." },
        { text: "Navigate to the southernmost tent in Bandit Camp." },
        { text: "Pick the 3 locks on the secure chest." },
        { text: "Take the gilded cross to Rasolo for the ring of visibility." },
        { text: "Equip the ring and enter the Shadow Dungeon (Bandit Camp area)." },
        {
          text: "Defeat Damis in both forms.",
          notes: ["His second form is much stronger; bring sharks and prayer potions."],
        },
        { text: "Take the shadow diamond." },
      ],
    },
    {
      title: "Ice diamond — Kamil",
      steps: [
        { text: "Travel to north-west of Trollheim." },
        { text: "Give a piece of sweet food (chocolate cake) to the troll child." },
        { text: "Kill 5 ice trolls along the path." },
        {
          text: "Defeat Kamil (level 154) using FIRE spells only (he's immune to other styles).",
        },
        { text: "Equip spiked boots and follow the icy path." },
        { text: "Thaw the frozen trolls with a fire spell as you go." },
        { text: "Take the ice diamond." },
      ],
    },
    {
      title: "Blood diamond — Dessous",
      steps: [
        { text: "Talk to Malak in the Canifis pub." },
        { text: "Get a silver pot from Ruantun in the Draynor Sewer." },
        { text: "Take the pot to the High Priest on Entrana to be enchanted." },
        { text: "Add spices and garlic powder to the pot." },
        { text: "Pour it on Dessous's tomb in the Morytania Graveyard." },
        {
          text: "Defeat Dessous (level 139). Use silver weapons or you cannot damage him.",
        },
        { text: "Take the blood diamond from Malak." },
      ],
    },
    {
      title: "Ancient Pyramid",
      steps: [
        { text: "Travel to the Ancient Pyramid south-east of the Bedabin Camp." },
        { text: "Place each diamond in the matching obelisks at the corners." },
        { text: "Enter the pyramid and navigate the 4 trap-filled levels." },
        { text: "Defeat any mummies and scarabs along the way." },
        { text: "Talk to Azzanadra at the end." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "20,000 Magic experience",
    "Access to the Ancient Magicks spellbook (ice/blood/smoke/shadow combat spells + Ancient teleports)",
    "Ring of visibility (see invisible NPCs)",
    "Ability to buy and use the Ancient staff",
    "Smoke Dungeon access",
  ],
};
