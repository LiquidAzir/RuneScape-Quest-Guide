import type { QuestWalkthrough } from "../types";

export const songOfTheElves: QuestWalkthrough = {
  startPoint:
    "Talk to Edmond at his home in north-west East Ardougne, north of the Flying Horse Inn (requires Mourning's End Part II and Making Friends with My Arm). Get there with Ardougne Teleport (51 Magic) to the market square then run north-west, or fairy ring BLR at Ardougne zoo and run south-east into the city.",
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
        {
          text: "Talk to Edmond in his house in north-west East Ardougne and accept the quest.",
          travel:
            "Ardougne Teleport (51 Magic) to the market square, then run north-west past the Flying Horse Inn — Edmond's house is the small building beside the well that tunnels under the city wall. No spell: fairy ring BLR at Ardougne zoo and run south-east, or Ardougne cloak to the Monastery and run east.",
        },
        {
          text: "Talk to King Lathas on the upper floor of Ardougne Castle.",
          travel: "Run south from Edmond's to the castle in the middle of East Ardougne, then up the stairs to Lathas's throne room on the first floor.",
        },
        { text: "Dye the steel full helm red, have Alrena in East Ardougne make a tabard from the purple dye and silk, then combine it with the steel platebody." },
        {
          text: "Wear the Ardougne knight armour and talk to Elena in the Ardougne Castle basement.",
          travel: "Back inside Ardougne Castle, take the staircase down on the ground floor to reach the basement cells.",
        },
        {
          text: "Search the cabinet in Elena's house for the clear liquid.",
          travel: "Elena's house is a short run north from the castle, in north-west East Ardougne right beside Edmond and Alrena's.",
        },
        { text: "Return to the castle basement and give Elena the liquid." },
      ],
    },
    {
      title: "Cause an insurrection",
      steps: [
        {
          text: "Go to the Rehnison household in north-east West Ardougne and search the bed upstairs.",
          travel:
            "West Ardougne Teleport (Arceuus, 72 Magic) drops you in the city. Otherwise climb down the well beside Edmond's house in East Ardougne and follow the tunnel west. The Rehnisons live in the two-storey house in the north-east corner of West Ardougne.",
        },
        { text: "Complete the dialogue with Elena and Councillor Halgrive." },
        { text: "Equip the mourner gear and gas mask and complete the West Ardougne sabotage tasks (burn the grain sacks, etc.)." },
        {
          text: "Switch to the Ardougne knight armour and complete the East Ardougne tasks, talking to the market merchants about taxes.",
          travel: "Head back east through the wall tunnel (or the city gate) to the East Ardougne market square, where the stall owners stand.",
        },
        {
          text: "Battle of West Ardougne: defeat 10 mourners at the Mourner headquarters.",
          travel: "Return to West Ardougne and run to the north-west corner — the Mourner HQ is the fenced compound by the city's north-west wall.",
        },
        { text: "Go down the trapdoor in the headquarters and defeat 11 more mourners in the basement." },
        {
          text: "Battle of East Ardougne: defeat 15 knights and paladins inside Ardougne Castle.",
          travel: "Cross back to East Ardougne and enter the castle in the centre of the city; the fight runs through the ground floor and courtyard.",
        },
        { text: "Talk to King Lathas upstairs in Ardougne Castle and watch the cutscene." },
      ],
    },
    {
      title: "Arianwyn's plan and Baxtorian Falls",
      steps: [
        {
          text: "Talk to Arianwyn in the centre of Lletya.",
          travel:
            "Rub a charged teleport crystal (or crystal seed charged by Eluned) and choose Lletya. No crystal: charter ship to Port Tyras, then run north-east through the trap-filled Isafdar woods to the hidden Lletya entrance.",
        },
        {
          text: "Read the 'Ode to Eternity' book in the Waterfall Dungeon under Baxtorian Falls.",
          travel:
            "Games necklace to Barbarian Outpost, then run south to Baxtorian Falls. Tie a rope to the dead tree on the north bank, climb down, cross the ledge and enter the dungeon behind the falls.",
        },
        {
          text: "Solve the pillar puzzle using each item: Nature rune, flowers, black knife, Wine of Zamorak, adamant chainbody, cabbage.",
        },
      ],
    },
    {
      title: "Prepare to enter Prifddinas",
      steps: [
        {
          text: "Plant the Cadantine seed in the herb patch in Lletya.",
          travel: "Teleport crystal to Lletya; the herb patch is in the north-east of the village, past the seamstress and general store.",
        },
        {
          text: "Ask Baxtorian for a crystal seed, questioning him about Lord Amlodd and Lady Trahaearn.",
          travel: "Games necklace to Barbarian Outpost, run south to Baxtorian Falls, rope down the dead tree and go through the Waterfall Dungeon to his throne room.",
        },
        { text: "Have Eluned in Lletya enchant the crystal seed for you." },
        {
          text: "Break open the crevice in the Underground Pass and repair the elderly elf's machine with a hammer and runite bar.",
          travel:
            "West Ardougne Teleport (Arceuus, 72 Magic), or the well tunnel beside Edmond's house. Leave West Ardougne by the west gate and follow the path to the Underground Pass entrance, the ladder in the west guarded by Koftik.",
        },
        { text: "Meet Lady Trahaearn, then rub the crystal seed to reach the Enchanted Valley and find Lord Amlodd." },
        {
          text: "Return with Lord Amlodd, then collect the elder cadantine from Elena in Ardougne.",
          travel: "Ardougne Teleport to the market square, then head to Ardougne Castle where Elena is waiting.",
        },
        { text: "Make an inversion potion (crystal dust + elder cadantine in a vial)." },
      ],
    },
    {
      title: "The Grand Library seal puzzles",
      steps: [
        {
          text: "Talk to Lord Amlodd and enter the Grand Library beneath Prifddinas.",
          travel: "Drink the inversion potion where Amlodd tells you — it phases you through the Prifddinas wall and into the ruined city, and the library stairs are just inside.",
        },
        { text: "Touch the Seal of the Forgotten." },
        {
          text: "Complete 7 seal puzzles using hand mirrors and crystals (Ithell, Cadarn, Crwys, Amlodd, Meilyr, Hefin, Trahaearn, Iorwerth).",
        },
      ],
    },
    {
      title: "Find clan leaders + the orb",
      steps: [
        {
          text: "Find Lady Hefin, the Elf Hermit, on the island across the poison waste stepping stones.",
          travel:
            "Teleport crystal to Lletya, then run south through Isafdar to the poison waste in the far south-east. Cross the stepping stones (Agility) on to the island — bring antipoison, the waste damages you.",
        },
        {
          text: "Chop the dead tree beside Iorwerth Camp to meet Lord Crwys.",
          travel: "From Lletya head south-west through Isafdar to Iorwerth Camp on the west coast; the dead tree stands just outside the camp's tents.",
        },
        { text: "Kill an Iorwerth Archer and an Iorwerth Warrior in the cave at the north end of the camp." },
        { text: "Search the chest for the orb of light." },
      ],
    },
    {
      title: "Build the statue + dig clues",
      steps: [
        {
          text: "Find the 5 glowing symbols around Lletya and build the statue in the village centre.",
          travel: "Teleport crystal to Lletya — the symbols are scattered around the village, and the statue site is the clearing in the middle.",
        },
        { text: "Meet Lady Ithell at the finished statue." },
        {
          text: "Dig at the three clue locations: the southern Isafdar swamp, north of the Zul-Andra STASH unit, and outside Prifddinas's southern gate.",
          travel:
            "All three are in Tirannwn: from Lletya run south for the swamp, continue south-east to the Zul-Andra path for the STASH, then north up the coast road to the Prifddinas south gate. Bring a spade and antipoison.",
        },
        {
          text: "Perform the spin emote outside the western Underground Pass entrance.",
          travel: "The west exit of the Underground Pass, on the Isafdar side — run north-east from Lletya to the tunnel mouth where Koftik's rope bridge comes out.",
        },
      ],
    },
    {
      title: "Defend the dwarf camp + defeat Seren's Fragment",
      steps: [
        {
          text: "Enter the Underground Pass and reach the dwarven camp via the Well of Voyage.",
          travel:
            "West Ardougne Teleport (Arceuus, 72 Magic) or the well tunnel by Edmond's house, out the west gate to Koftik at the Underground Pass ladder, then follow the pass to the Well of Voyage and climb through.",
        },
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
