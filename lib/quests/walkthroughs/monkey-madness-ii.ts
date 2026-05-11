import type { QuestWalkthrough } from "../types";

export const monkeyMadnessII: QuestWalkthrough = {
  startPoint:
    "Talk to King Narnode Shareen at the base of the Grand Tree (Tree Gnome Stronghold north-west of Ardougne — spirit tree teleport, gnome glider, or run from Ardougne north-west).",
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
          text: "Climb to the top of the Grand Tree and use the gnome balloon to fly to Entrana. Talk to Auguste at the balloon landing site about Assistant Le Smith.",
        },
        {
          text: "Return to King Narnode at the Grand Tree.",
        },
      ],
    },
    {
      title: "Chapter II — Kruk's Dungeon",
      steps: [
        {
          text: "Teleport to Ape Atoll using the monkey/gorilla greegree from Monkey Madness I.",
        },
        {
          text: "Walk south of Ape Atoll village to Garkor's clearing in the southern jungle and talk to him, then walk north into the Ape Atoll palace and talk to King Awowogei in the throne room.",
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
          text: "Take the paw to Zooknock at the end of the original Ape Atoll Dungeon (the wizard who carved your first greegree). He carves the Kruk monkey greegree for you.",
        },
      ],
    },
    {
      title: "Chapter III — Recruit allies",
      steps: [
        {
          text: "Travel to the Troll Stronghold (Trollheim teleport, then run north into the stronghold). Find Kob inside one of the central chambers and defeat him — safespot from the doorway with ranged.",
        },
        {
          text: "Travel to Gu'Tanoth (the ogre city west of Yanille — Watchtower teleport then run west). Find Keef wandering the city; defeat him by safespotting behind a tree.",
        },
        {
          text: "Travel to Marim (the Ape Atoll village). Equip the small/medium ninja monkey greegree to climb the rooftops; find Assistant Le Smith on the rooftops (4 possible spawn locations — patrol the rooftops).",
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
          text: "Return to King Narnode at the base of the Grand Tree, then travel to the Stronghold Slayer Cave (north-west part of the Tree Gnome Stronghold) and talk to Nieve outside the cave entrance.",
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
