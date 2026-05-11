import type { QuestWalkthrough } from "../types";

export const desertTreasureII: QuestWalkthrough = {
  startPoint:
    "Talk to Asgarnia Smith outside the Ancient Vault, north-east of Nardah in the Kharidian Desert (Pharaoh's sceptre → Necropolis, then run east; or magic carpet to Nardah and walk north-east). Requires Beneath Cursed Sands and Secrets of the North complete.",
  itemsRequired: [
    "Ancient Magicks unlocked (Desert Treasure I)",
    "Runes for Blood Burst, Ice Burst, Smoke Burst, Shadow Burst",
    "Ring of visibility (from Desert Treasure I)",
    "Tinderbox + Pestle and mortar + Pickaxe",
    "Facemask, Slayer helmet, or Masked earmuffs (Whisperer fight)",
  ],
  recommended: [
    "Combat 100+",
    "Best magic gear available (Ancestral robes, Sang staff, Trident of the swamp; or Virtus + Tumeken's shadow at endgame)",
    "Sharks/anglers + super combat + prayer potions",
    "Stamina potions + desert heat protection (waterskins or Desert amulet 4)",
    "Digsite teleport + Pharaoh's sceptre (Necropolis/Jaltevas) for Nardah",
  ],
  enemies: [
    "Ancient Guardian (level 153) — fought in the Digsite excavation",
    "Vardorvis (level 572) — slash-weak; The Stranglewood",
    "The Leviathan (level 593) — Ranged + Shadow weak; The Scar",
    "Duke Sucellus (level 538) — Ghorrock Prison",
    "The Whisperer (level 587) — Lassar Undercity",
    "Wight clones in the Ancient Vault: Forsaken Assassin (252), Ketla (236), Kasonde (221), Persten (264)",
  ],
  sections: [
    {
      title: "Familiar faces",
      steps: [
        {
          text: "Travel to the Ancient Vault north-east of Nardah and inspect the four statues + the central plaque to start.",
        },
        {
          text: "Talk to Asgarnia Smith just outside the Ancient Vault.",
        },
        {
          text: "Travel to the Exam Centre south of the Digsite (south-east of Varrock — use Digsite pendant or Varrock teleport then walk south-east). Talk to Terry Balando inside.",
        },
        {
          text: "Walk north into the Digsite proper and operate the western winch to descend into the dig.",
        },
        {
          text: "At the bottom, talk to Dr Banikan, then mine the rocks he points to when ready.",
        },
      ],
    },
    {
      title: "Ancient Guardian",
      steps: [
        {
          text: "After the cutscene, fight the Ancient Guardian (level 153, 200 HP) in the Digsite excavation. Melee only damages him; dodge falling rocks during the fight.",
        },
        {
          text: "Talk to Dr Banikan in the Digsite Exam Centre after the fight.",
        },
        {
          text: "Inspect the golem machine inside the underground room and search the crates for uncharged cells.",
        },
        {
          text: "Cast each Burst spell (Blood, Ice, Smoke, Shadow) on the matching coloured totem to charge cells.",
        },
        {
          text: "Charge the cells at the central altar and place them in the golem control panel to solve the puzzle.",
        },
        {
          text: "Search the four named locations the golem opens (north, south, east, west niches) for clue items.",
        },
        {
          text: "Exit the dig and talk to Elissa at the Exam Centre.",
        },
      ],
    },
    {
      title: "Vardorvis (Carnifex Maximus) — The Stranglewood",
      steps: [
        {
          text: "Visit the Burning Man pub in central Lovakengj (Kourend). Talk to Barus inside.",
        },
        {
          text: "Search the desk at the back of the pub for a strange potion and a note.",
        },
        {
          text: "Walk to the boat dock just south of Lovakengj and sail with the captain to The Stranglewood (the cursed jungle south of Kourend).",
        },
        {
          text: "Defend Kasonde for 3 in-game minutes from waves of ranged enemies — use the barricades scattered around the camp and throw satchel charges at incoming waves.",
        },
        {
          text: "After the defence, gather korbal herb (purple flowers along the path) and argian berries (red bushes) from the Stranglewood jungle.",
        },
        {
          text: "Make the strangler serum at the brewing table at Kasonde's camp and drink it to gain access to the boss area.",
        },
        {
          text: "Defeat Vardorvis (level 572) — slash-weak; bring Soulreaper axe, Scythe, Saeldor or Whip. Avoid axe spinners on the floor.",
        },
        {
          text: "Defeat Kasonde (the boss persona) inside the Stranglewood inner sanctum after Vardorvis dies.",
        },
        {
          text: "Place Vardorvis's medallion on the matching statue inside the Ancient Vault near Nardah.",
        },
      ],
    },
    {
      title: "The Leviathan (Praefectus Classis) — The Scar",
      steps: [
        {
          text: "Travel to the Guardians of the Rift temple (Temple of the Eye, north of Al Kharid). Talk to the Catalytic Guardian inside the central altar room and ask to enter The Scar.",
        },
        {
          text: "Inside The Scar, complete the 3 puzzle passages: Axon Terminal (electrical wiring puzzle), Nerve Endings (timing puzzle), Summoning Circle (rune-arrangement puzzle).",
        },
        {
          text: "Collect the tinderbox, gunpowder, slimy key, and stone tablet from the partially-buried shipwrecks scattered around The Scar.",
        },
        {
          text: "Burn the marked ship sections with the gunpowder + tinderbox.",
        },
        {
          text: "Defeat The Leviathan (level 593) — pray Protect from Missiles, attack with Ranged or Shadow spells (Sang staff with Shadow runes, Tumeken's shadow, etc.).",
        },
        {
          text: "Place Perseriya's medallion on the matching statue at the Ancient Vault.",
        },
      ],
    },
    {
      title: "Duke Sucellus — Ghorrock",
      steps: [
        {
          text: "Travel to Ghorrock Prison far north of the Wilderness (use Ice Mountain teleport from the Wintertodt area, or Ghorrock Teleport on the Ancient spellbook). Navigate the prison maze.",
        },
        {
          text: "Solve the cell puzzle in the central wing: find the letter on the corpse, the knife in the chest, and a lockpick under the bed.",
        },
        {
          text: "Talk to the assassin contact in the Lassar Undercity (south of Ghorrock — descend the rope) and complete the path puzzles she gives you.",
        },
        {
          text: "Collect the sapphire, emerald, ruby, and diamond keys from the four marked rooms in the prison.",
        },
        {
          text: "Survive Jhallan's encounter using the firecrackers from the supply chest as a distraction.",
        },
        {
          text: "Prepare arder-musca poison at the alchemy bench using mushrooms and salt collected from the prison kitchen.",
        },
        {
          text: "Defeat Duke Sucellus (level 538) — pray Protect from Melee, dodge his hammer slams, then poison him with the arder-musca to kill him fully.",
        },
        {
          text: "Place his medallion on the matching statue at the Ancient Vault.",
        },
      ],
    },
    {
      title: "The Whisperer — Lassar Undercity",
      steps: [
        {
          text: "Return to the Lassar Undercity (rope down from Ghorrock) and access the deeper levels.",
        },
        {
          text: "Collect 5 shadow keys (green, purple, blue, white, red) from the Whispered districts.",
        },
        {
          text: "Build shadow blockers, torches, and anima portals at the marked construction spots — each district needs a different setup.",
        },
        {
          text: "Complete the Shadow Realm puzzles in 5 districts (the Whisperer's voice guides you).",
        },
        {
          text: "Gather the icon segments from each district and combine them into the strange icon at the central altar.",
        },
        {
          text: "Defeat The Whisperer (level 587) — pray Protect from Magic, equip Slayer helm / facemask, attack with Ranged.",
        },
      ],
    },
    {
      title: "The final showdown — Ancient Vault",
      steps: [
        {
          text: "Return to the Ancient Vault near Nardah with all 4 medallions placed on their statues.",
        },
        {
          text: "Inspect the central plaque to unlock the inner cell.",
        },
        {
          text: "Defeat the Mysterious Figure who confronts you inside.",
        },
        {
          text: "Fight the 4 Wight clones in sequence: Forsaken Assassin (252) → Ketla (236) → Kasonde (221) → Persten (264). Each uses one of the 4 boss styles.",
        },
        {
          text: "Talk to Azzanadra inside the Ancient Vault to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "Three ancient lamps (100,000 XP each in combat / magic / prayer skills)",
    "Access to The Scar essence mine (Dark essence)",
    "Ring of shadows (Ancient Vault / Forgotten Four teleport ring)",
    "Ability to forge ancient rings (Ultor, Magus, Venator, Bellator) at the Ancient Vault forge",
    "Ability to challenge the Forgotten Four as repeatable bosses (drops include Virtus armour, Soulreaper axe, Awakener's orbs, Tumeken's shadow shards)",
  ],
};
