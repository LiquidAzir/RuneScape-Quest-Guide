import type { QuestWalkthrough } from "../types";

export const monkeyMadnessII: QuestWalkthrough = {
  startPoint:
    "Talk to King Narnode Shareen at the base of the Grand Tree (Tree Gnome Stronghold north-west of Ardougne). Spirit tree to the Tree Gnome Stronghold or a gnome glider to Ta Quir Priw; otherwise Ardougne Teleport and run north-west past the Outpost.",
  itemsRequired: [
    "Lemon + Grapes + Pestle and mortar",
    "Logs + Tinderbox + Light source",
    "M'speak amulet + Monkey talisman + Ninja monkey greegree (small or medium)",
    "Slash weapon",
    "Translation book (from Narnode)",
  ],
  recommended: [
    "Combat 90+",
    "Anti-poison + Serpentine helm",
    "Stamina + prayer potions + monkfish or better food",
    "Best magic + ranged gear available",
    "Emergency teleport",
  ],
  enemies: [
    "Kruk (level 207) — boss",
    "Keef (level 178) and Kob (level 185) — recruit fights",
    "Tortured gorillas (level 141-142)",
    "Demonic gorillas (level 275)",
    "Glough (level 431) — final boss",
  ],
  sections: [
    {
      title: "Chapter I — Investigation",
      steps: [
        {
          text: "Talk to King Narnode Shareen at the base of the Grand Tree to start.",
          travel:
            "Spirit tree to the Tree Gnome Stronghold, or gnome glider to Ta Quir Priw and climb down the Grand Tree. Without gnome transport, Ardougne Teleport and run north-west out of the city along the road past the Outpost.",
        },
        {
          text: "Walk south to Glough's house (the small house south of the Grand Tree, on the path to the gnome ball field). Search the house for a handkerchief, then investigate the tree outside.",
        },
        {
          text: "Talk to Anita just north of the gnome ball field (south-east of the Grand Tree).",
        },
        {
          text: "Return to Glough's house. Search for the book of spyology, a brush, and a mysterious note hidden inside.",
        },
        {
          text: "Use a pestle and mortar on a lemon, then on grapes, to make invisible-ink juice.",
        },
        {
          text: "Apply the juice with the brush on the mysterious note to reveal the hidden text.",
        },
        {
          text: "Return to King Narnode at the base of the Grand Tree; he gives you the translation book. Use it on the note to translate.",
        },
        {
          text: "Fly to Entrana and talk to Auguste about Assistant Le Smith.",
          travel:
            "Climb to the top of the Grand Tree and use the gnome balloon to Entrana (Enlightened Journey and the right logs required) — Auguste is at the balloon landing site. No balloon: bank all weapons and armour, then take the monks' boat from the northern Port Sarim dock and run north-east to the balloon field.",
        },
        {
          text: "Return to King Narnode at the base of the Grand Tree.",
          travel: "Balloon back to the Grand Tree, or spirit tree to the Tree Gnome Stronghold.",
        },
      ],
    },
    {
      title: "Chapter II — Kruk's Dungeon",
      steps: [
        {
          text: "Travel to Ape Atoll and talk to Garkor in the southern jungle clearing.",
          travel:
            "Ape Atoll Teleport (64 Magic, requires Monkey Madness I) with a greegree equipped, or the long route: Grand Tree → down two floors to Daero → Waydar to Crash Island → Lumdo's boat.",
        },
        {
          text: "Walk north into the Ape Atoll palace and talk to King Awowogei in the throne room.",
        },
        {
          text: "Follow the gorilla tracks west of the palace until you find a trapdoor in the jungle grass.",
        },
        {
          text: "Climb down the trapdoor into Kruk's Dungeon. Navigate via the agility pathway (faster) or the tank/combat pathway (easier) — use the small ninja monkey greegree to fit through narrow gaps.",
        },
        {
          text: "Collect a bronze key from a crate in the dungeon (or combat keys by killing the appropriate guards if you take the tank route).",
        },
        {
          text: "Mid-dungeon, find the broken wall and open the shortcut back to the entrance for future banking trips.",
        },
        {
          text: "Defeat Kruk (level 207) in his arena at the end of the dungeon.",
        },
        {
          text: "Collect Kruk's paw from his body.",
        },
        {
          text: "Take the paw to Zooknock at the end of the original Ape Atoll Dungeon — he carves the Kruk monkey greegree.",
          travel:
            "Leave Kruk's Dungeon, return to Marim and rope down the hole at the south-east edge of the village, then run the dungeon to Zooknock at the far end (Protect from Melee helps).",
        },
      ],
    },
    {
      title: "Chapter III — Recruit allies",
      steps: [
        {
          text: "Travel to the Troll Stronghold and defeat Kob in one of the central chambers — safespot from the doorway with ranged.",
          travel:
            "Trollheim Teleport, then run north-west across the plateau to the stronghold door. No Trollheim Teleport: games necklace to Burthorpe and climb the Death Plateau path east.",
        },
        {
          text: "Travel to Gu'Tanoth, the ogre city north-west of Yanille, and defeat Keef — safespot him behind a tree.",
          travel:
            "Watchtower Teleport (58 Magic, needs Watchtower) then run west across the bridge into Gu'Tanoth. Otherwise house teleport to Yanille (or Ardougne Teleport and run south) and head north-west out of the city.",
        },
        {
          text: "Travel to Marim on Ape Atoll, climb the rooftops with the small/medium ninja monkey greegree and find Assistant Le Smith (4 possible spawn spots — patrol the rooftops).",
          travel:
            "Ape Atoll Teleport with a greegree equipped, or Grand Tree → Daero → Waydar → Lumdo, then run north into the village.",
        },
        {
          text: "After talking to Le Smith, descend and talk to a monkey guard at the airship platform south of Marim. Board the airship platform.",
        },
        {
          text: "Navigate the airship interior maze, avoiding the patrolling ninja monkeys (use agility shortcuts).",
        },
        {
          text: "Collect 6 explosive satchels from the supply tables and fill each with explosives at the workbench.",
        },
        {
          text: "Place an explosive at each of the 6 weakened structures around the airship interior (marked with bright cracks).",
        },
        {
          text: "Defeat the stunted demonic gorilla in the central chamber.",
        },
        {
          text: "Tamper with the engine device in the central chamber using a chisel and a charged onyx.",
        },
      ],
    },
    {
      title: "Chapter IV — Gather forces",
      steps: [
        {
          text: "Return to King Narnode at the base of the Grand Tree, then talk to Nieve outside the Stronghold Slayer Cave.",
          travel:
            "Spirit tree or gnome glider (Ta Quir Priw) to the Tree Gnome Stronghold. From the Grand Tree, run north-west across the stronghold — Nieve stands at the cave entrance by the stronghold's north-western wall.",
        },
        {
          text: "Inside the Stronghold Slayer Cave, kill 4 tortured gorillas (level 141-142) — they roam the gorilla section of the cave.",
        },
        {
          text: "Meet Garkor in the north-west area of the cave.",
        },
        {
          text: "Enter the demonic gorilla cave (the marked cave entrance just past Garkor). Defeat 2 tortured gorillas and 2 demonic gorillas inside.",
        },
        {
          text: "Restock supplies between fights as needed (use Royal seed pod if available for fast Tree Gnome Stronghold teleport).",
        },
      ],
    },
    {
      title: "Chapter V — Defeat Glough",
      steps: [
        {
          text: "Inside the demonic gorilla cave's deepest chamber, attack Glough in the first room (a safespot exists behind the central pillar).",
        },
        {
          text: "Lure Glough through to the second room and safespot him with ranged or magic from behind the wall corner.",
        },
        {
          text: "In the final room, defeat Glough (level 431) — use Protect from Magic when he casts magic and Protect from Melee when he transforms into the gorilla form.",
        },
        {
          text: "Talk to Zooknock (he appears at the end of the fight) for a teleport back to the Grand Tree.",
        },
        {
          text: "Report to King Narnode at the base of the Grand Tree to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "80,000 Slayer experience",
    "60,000 Agility experience",
    "50,000 Thieving / Hunter experience each",
    "2× 50,000 XP in choice of Magic/Ranged/Attack/Defence/Strength/Hitpoints",
    "Royal seed pod (unlimited Grand Tree teleports)",
    "Access to demonic gorillas (zenyte shard drops) and maniacal monkeys (Hunter)",
    "Heavy ballista wielding ability",
    "Ape Atoll bank + Javelin store + non-aggressive village",
  ],
};
