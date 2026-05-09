import type { QuestWalkthrough } from "../types";

export const desertTreasureII: QuestWalkthrough = {
  startPoint: "Talk to Asgarnia Smith near the Ancient Vault north-east of Nardah (after Beneath Cursed Sands and Secrets of the North).",
  itemsRequired: [
    "Ancient Magicks unlocked (Desert Treasure I)",
    "Runes for Blood Burst, Ice Burst, Smoke Burst, Shadow Burst",
    "Ring of visibility",
    "Tinderbox + Pestle and mortar + Pickaxe",
    "Facemask or Slayer helmet",
  ],
  recommended: [
    "Combat 100+",
    "Best-in-slot magic gear (Ancestral, Sang staff, Trident of the swamp, etc.)",
    "Sharks/anglers + super combat + prayer potions",
    "Stamina potions + desert heat protection",
    "Digsite teleport + Nardah teleport (Pharaoh's sceptre)",
  ],
  enemies: [
    "Ancient Guardian (level 153)",
    "Vardorvis (level 572) — slash-weak",
    "The Leviathan (level 593) — Ranged + Shadow",
    "Duke Sucellus (level 538)",
    "The Whisperer (level 587)",
    "Wight clones: Forsaken Assassin (252), Ketla (236), Kasonde (221), Persten (264)",
  ],
  sections: [
    {
      title: "Familiar faces",
      steps: [
        { text: "Enter the Ancient Vault and inspect the statues + plaque." },
        { text: "Talk to Asgarnia Smith." },
        { text: "Visit the Exam Centre and talk to Terry Balando." },
        { text: "Operate the winch at the Digsite." },
        { text: "Talk to Dr Banikan and mine the rocks when ready." },
      ],
    },
    {
      title: "Ancient Guardian",
      steps: [
        { text: "Defeat the Ancient Guardian (200 HP, melee-only — dodge falling rocks)." },
        { text: "Talk to Dr Banikan." },
        { text: "Inspect the golem machine and search crates for uncharged cells." },
        { text: "Cast Burst spells on matching totems." },
        { text: "Charge cells at the altar and solve the golem puzzle." },
        { text: "Search the four named locations." },
        { text: "Exit and talk to Elissa." },
      ],
    },
    {
      title: "Vardorvis (Carnifex Maximus)",
      steps: [
        { text: "Visit the Burning Man in Lovakengj and talk to Barus." },
        { text: "Search the desk for the strange potion and note." },
        { text: "Boat to The Stranglewood." },
        { text: "Defend Kasonde for 3 minutes using barricades and satchels." },
        { text: "Gather korbal herb and argian berries." },
        { text: "Make strangler serum and drink it." },
        { text: "Defeat Vardorvis (level 572) — slash-weak." },
        { text: "Defeat Kasonde (the boss persona)." },
        { text: "Place Vardorvis's medallion on the vault statue." },
      ],
    },
    {
      title: "The Leviathan (Praefectus Classis)",
      steps: [
        { text: "Travel to the Guardians of the Rift area." },
        { text: "Talk to the Catalytic Guardian and enter The Scar." },
        { text: "Complete 3 puzzle passages: Axon Terminal, Nerve Endings, Summoning Circle." },
        { text: "Collect tinderbox, gunpowder, slimy key, and tablet from shipwrecks." },
        { text: "Burn the ship sections." },
        { text: "Defeat The Leviathan (level 593) using Ranged + Shadow spells." },
        { text: "Place Perseriya's medallion on the vault statue." },
      ],
    },
    {
      title: "Duke Sucellus",
      steps: [
        { text: "Navigate the Ghorrock Prison maze." },
        { text: "Solve the cell puzzle; find the letter, knife, and lockpick." },
        { text: "Talk to the assassin and complete path puzzles." },
        { text: "Collect sapphire, emerald, ruby, and diamond keys." },
        { text: "Survive Jhallan with firecracker defence." },
        { text: "Prepare arder-musca poison using mushrooms and salt." },
        { text: "Defeat Duke Sucellus (level 538)." },
        { text: "Place his medallion on the vault statue." },
      ],
    },
    {
      title: "The Whisperer",
      steps: [
        { text: "Access the Lassar Undercity via rope descent." },
        { text: "Collect 5 shadow keys (green, purple, blue, white, red)." },
        { text: "Build shadow blockers, torches, and anima portals." },
        { text: "Complete Shadow Realm puzzles in multiple districts." },
        { text: "Gather icon segments and create the strange icon." },
        { text: "Defeat The Whisperer (level 587)." },
      ],
    },
    {
      title: "The final showdown",
      steps: [
        { text: "Return all four medallions and unlock the inner cell." },
        { text: "Defeat the Mysterious Figure." },
        { text: "Fight 4 wight clones sequentially: Forsaken Assassin → Ketla → Kasonde → Persten." },
        { text: "Talk to Azzanadra to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "Three ancient lamps (100,000 XP each in combat / magic / prayer skills)",
    "Access to The Scar essence mine",
    "Ring of shadows (multi-teleport)",
    "Ability to forge ancient rings (Ultor, Magus, Venator, Bellator)",
    "Ability to challenge the Forgotten Four as repeatable bosses (best in-game items: Virtus, Soulreaper axe, Awakener's orb)",
  ],
};
