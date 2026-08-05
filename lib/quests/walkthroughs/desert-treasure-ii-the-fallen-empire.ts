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
          travel:
            "Magic carpet from Shantay Pass to Pollnivneach, then a second carpet from Pollnivneach to Nardah, and run north-east out of town into the cliffs — the vault entrance is cut into the rock face. Pharaoh's sceptre → Necropolis and running south-east also works. Bring waterskins or a Desert amulet.",
        },
        {
          text: "Talk to Asgarnia Smith just outside the Ancient Vault.",
        },
        {
          text: "Talk to Terry Balando inside the Exam Centre, the walled building just south of the Digsite.",
          travel:
            "Digsite pendant → Digsite, then run south to the Exam Centre. No pendant: Varrock Teleport, leave by the east gate and follow the road south-east along the river.",
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
          text: "Talk to Barus inside the Burning Man pub in central Lovakengj.",
          travel:
            "Kharedst's memoirs → Lovakengj drops you in the settlement. Otherwise Xeric's talisman → Xeric's Glade (or Skills necklace → Woodcutting Guild) and take the minecart network from Kourend Castle to the Lovakengj stop. The pub is the building in the middle of town.",
        },
        {
          text: "Search the desk at the back of the pub for a strange potion and a note.",
        },
        {
          text: "Walk to the boat dock on the coast south of Lovakengj and sail with the captain to The Stranglewood, the cursed jungle south of Kourend.",
          travel:
            "From the Burning Man pub head south out of Lovakengj to the shoreline and follow the quest marker to the moored boat; talk to the captain to sail.",
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
          travel:
            "Pharaoh's sceptre → Necropolis and run south-east, or magic carpet Shantay Pass → Pollnivneach → Nardah then run north-east into the cliffs to the vault entrance.",
        },
      ],
    },
    {
      title: "The Leviathan (Praefectus Classis) — The Scar",
      steps: [
        {
          text: "Talk to the Catalytic Guardian in the central altar room of the Temple of the Eye and ask to enter The Scar.",
          travel:
            "Minigame teleport → Guardians of the Rift puts you in the temple. Otherwise talk to Apprentice Tamara on the ground floor of the Wizards' Tower south of Draynor Village (Necklace of passage → Wizards' Tower) and ask to be sent to the temple.",
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
          travel:
            "Pharaoh's sceptre → Necropolis then south-east, or magic carpet to Nardah and run north-east into the cliffs.",
        },
      ],
    },
    {
      title: "Duke Sucellus — Ghorrock",
      steps: [
        {
          text: "Travel to the frozen fortress of Ghorrock in the far north and navigate the prison maze.",
          travel:
            "Icy basalt → Weiss (Making Friends with My Arm), then head west across the ice to the fortress. Without it: Trollheim Teleport, run north through the Troll Stronghold and out onto the northern ice fields. Once the quest is done the Ancient Magicks Ghorrock Teleport takes you straight there.",
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
          travel:
            "Pharaoh's sceptre → Necropolis then south-east, or magic carpet to Nardah and run north-east into the cliffs.",
        },
      ],
    },
    {
      title: "The Whisperer — Lassar Undercity",
      steps: [
        {
          text: "Return to the Lassar Undercity and descend to the deeper levels.",
          travel:
            "Same trip as Duke Sucellus — Icy basalt → Weiss then west across the ice to Ghorrock (or Ghorrock Teleport if you have it), then take the rope down into the Undercity.",
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
          travel:
            "Pharaoh's sceptre → Necropolis and run south-east, or magic carpet Shantay Pass → Pollnivneach → Nardah then north-east into the cliffs. Bank for a long fight before you go in.",
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
