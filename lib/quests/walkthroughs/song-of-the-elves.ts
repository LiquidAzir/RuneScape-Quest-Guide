import type { QuestWalkthrough } from "../types";

export const songOfTheElves: QuestWalkthrough = {
  startPoint: "Talk to Edmond at his home in East Ardougne, north of the Flying Horse Inn (after Mourning's End Part II and Making Friends with My Arm).",
  itemsRequired: [
    "Steel full helm + platebody + platelegs (to dye into Ardougne knight armour)",
    "Red dye + Purple dye + Silk",
    "Mourner gear + Gas mask",
    "Rope + Tinderbox",
    "Nature rune + Flowers / Irit leaf",
    "Adamant chainbody + Wine of Zamorak (or Zamorak brew)",
    "Black knife/dagger + Cabbage",
    "Cadantine seed + Seed dibber",
    "Vial of water + Pestle and mortar",
    "Hammer + Saw + Pickaxe + Axe + Spade",
    "8 Limestone bricks",
  ],
  recommended: [
    "Combat 95+",
    "80+ Magic for the Fragment of Seren (best magic gear)",
    "40+ Prayer for protection prayers",
    "Monkfish or sharks; stamina; weight-reducing clothing",
    "Crystal teleport seeds, Iorwerth camp + Zul-Andra teleports",
  ],
  enemies: [
    "21 Mourners (mixed levels 24/51/106)",
    "Paladins (49/118)",
    "Ardougne knights (27/53)",
    "Iorwerth Archers + Warriors (90/108)",
    "Arianwyn (level 212)",
    "Essyllt (level 236)",
    "Fragment of Seren (level 494) — final boss, magic only",
  ],
  sections: [
    {
      title: "Free Elena from the castle",
      steps: [
        { text: "Talk to Edmond at his home in East Ardougne, north of the Flying Horse Inn (after Mourning's End Part II and Making Friends with My Arm) and accept the quest." },
        { text: "Talk to King Lathas in Ardougne Castle." },
        { text: "Dye the steel helm red; have Alrena make a tabard with purple dye + silk; combine with the steel platebody." },
        { text: "Wear Ardougne knight armour, go to the castle basement, talk to Elena." },
        { text: "Get the clear liquid from Elena's house cabinet." },
        { text: "Return to the castle and give Elena the liquid." },
      ],
    },
    {
      title: "Cause an insurrection",
      steps: [
        { text: "Go to the Rehnison household in West Ardougne and search the bed." },
        { text: "Complete the dialogue with Elena and Councillor Halgrive." },
        { text: "Equip mourner gear and complete West Ardougne tasks (burn grain sacks, etc.)." },
        { text: "Switch to Ardougne knight armour for East Ardougne tasks (talk to merchants about taxes)." },
        { text: "Battle of West Ardougne: defeat 10 mourners at the headquarters." },
        { text: "Defeat 11 more mourners in the basement via the trapdoor." },
        { text: "Battle of East Ardougne: defeat 15 knights and paladins in the castle." },
        { text: "Talk to King Lathas; watch the cutscene." },
      ],
    },
    {
      title: "Arianwyn's plan and Baxtorian Falls",
      steps: [
        { text: "Talk to Arianwyn in Lletya." },
        { text: "Read 'Ode to Eternity' at the Waterfall Dungeon." },
        {
          text: "Solve the pillar puzzle using each item: Nature rune, flowers, black knife, Wine of Zamorak, adamant chainbody, cabbage.",
        },
      ],
    },
    {
      title: "Prepare to enter Prifddinas",
      steps: [
        { text: "Plant a Cadantine seed in the Lletya farming patch." },
        { text: "Get a crystal seed from Baxtorian (ask about Lord Amlodd and Lady Trahaearn)." },
        { text: "Have Eluned enchant the seed." },
        { text: "Break the crevice in the Underground Pass; fix the elderly elf with a hammer + runite bar." },
        { text: "Meet Lady Trahaearn; rub the crystal seed to reach the Enchanted Valley." },
        { text: "Return with Lord Amlodd; get elder cadantine from Elena." },
        { text: "Make an inversion potion (crystal dust + elder cadantine in a vial)." },
      ],
    },
    {
      title: "The Grand Library seal puzzles",
      steps: [
        { text: "Talk to Lord Amlodd; enter the Grand Library." },
        { text: "Touch the Seal of the Forgotten." },
        {
          text: "Complete 7 seal puzzles using hand mirrors and crystals (Ithell, Cadarn, Crwys, Amlodd, Meilyr, Hefin, Trahaearn, Iorwerth).",
        },
      ],
    },
    {
      title: "Find clan leaders + the orb",
      steps: [
        { text: "Find Lady Hefin (the Elf Hermit) via the poison waste stepping stones." },
        { text: "Chop the dead tree near Iorwerth Camp to meet Lord Crwys." },
        { text: "Kill an Iorwerth Archer + Warrior in the northern cave at the camp." },
        { text: "Search the chest for the orb of light." },
      ],
    },
    {
      title: "Build the statue + dig clues",
      steps: [
        { text: "Find 5 glowing symbols in Lletya; build the statue at the centre." },
        { text: "Meet Lady Ithell at the statue." },
        {
          text: "Dig at three locations: south Isafdar swamp, north of Zul-Andra STASH, outside Prifddinas's southern gate.",
        },
        { text: "Spin outside the western Underground Pass entrance." },
      ],
    },
    {
      title: "Defend the dwarf camp + defeat Seren's Fragment",
      steps: [
        { text: "Enter the Underground Pass; reach the dwarven camp via the Well of Voyage." },
        { text: "Fill 7 holes with explosive potions." },
        { text: "Defend the dwarf camp for 4 minutes against waves of elves." },
        { text: "Defeat Essyllt (level 236)." },
        {
          text: "Enter the Temple of Light. Defeat the Fragment of Seren (level 494) using MAGIC ONLY — physical damage kills you.",
          notes: ["Use prayer potions liberally and bring your best magic setup."],
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "40,000 XP each in Agility, Construction, Farming, Herblore, Hunter, Mining, Smithing, Woodcutting (320,000 XP total)",
    "Access to Prifddinas (with banks, altar, fairy ring, anvils, etc.)",
    "Access to Zalcano boss and The Gauntlet (Crystal armour seeds)",
    "Trahaearn Mine + Iorwerth Dungeon",
    "Ability to craft and corrupt crystal equipment + brew Divine potions",
  ],
};
