import type { QuestWalkthrough } from "../types";

export const defenderOfVarrock: QuestWalkthrough = {
  startPoint:
    "Talk to Elias White inside the Jolly Boar Inn, the roadside inn north-east of Varrock. Varrock Teleport, leave by the north-east gate and follow the road north-east past the Varrock east mine — the inn is the lone building at the junction below the Wilderness ditch.",
  itemsRequired: [
    "Chaos core (in-quest)",
    "Barronite deposit (or pickaxe to mine one)",
  ],
  recommended: [
    "Combat 65+",
    "Multiple Varrock teleports",
    "Mind Altar / Lassar teleports",
    "43 Prayer (Protect from Melee)",
    "Salve amulet",
    "Sharks/anglers + prayer potions",
  ],
  enemies: [
    "Armoured Zombies (level 85) — ~6 kills required",
    "Multiple Chaos Golems (level 70)",
  ],
  sections: [
    {
      title: "Investigate the zombies",
      steps: [
        {
          text: "Talk to Elias White inside the Jolly Boar Inn north-east of Varrock.",
          travel:
            "Varrock Teleport to the central square, run east then north-east out of the city gate and follow the road past the Varrock east mine. The Jolly Boar Inn is the isolated building at the road junction, south of the Wilderness ditch.",
        },
        {
          text: "Walk outside the inn and inspect the suspicious plant just outside the front door; follow the trail west.",
        },
        {
          text: "Inspect the marked rocks along the trail; follow it south and inspect another plant.",
        },
        {
          text: "Follow the trail east; inspect the spiny bush for a grubby key (you take some damage from the spines).",
        },
        {
          text: "Continue east through the gate; inspect the green bush on the other side.",
        },
        {
          text: "Follow the trail east; inspect a small bush further along.",
        },
        {
          text: "Follow the trail north to a hidden trapdoor in the ground.",
        },
        {
          text: "Climb down the trapdoor into the dungeon; talk to Elias inside to finish the dialogue.",
        },
        {
          text: "Kill 3 armoured zombies (level 85) in the dungeon; collect the red mist they release in glass bottles (search the supply table for bottles).",
        },
        {
          text: "Open the west door (use the grubby key) to find Arrav's chamber.",
        },
        {
          text: "Kill 3 more armoured zombies; collect more red mist.",
        },
        {
          text: "Open the east door and view the balcony cutscene with Zemouregal.",
        },
        {
          text: "Leave the dungeon via the trapdoor.",
        },
      ],
    },
    {
      title: "Sacred Forge",
      steps: [
        {
          text: "Report your findings to Elias, who has moved into the meeting hall on the ground floor of Varrock Palace.",
          travel:
            "Varrock Teleport to the central square, then run north through the palace gates and in the main doors. Elias is on the ground floor.",
        },
        {
          text: "Climb to the top floor of Varrock Palace's north-west tower and talk to Captain Rovin.",
          travel:
            "Same building — take the staircase in the north-west corner of the ground floor and climb it to the top of the tower.",
        },
        {
          text: "Travel to the Ruins of Camdozaal, the dwarven ruins beneath Ice Mountain (requires Below Ice Mountain).",
          travel:
            "Amulet of glory → Edgeville, then run west along the road and south-west up Ice Mountain; the Camdozaal cave entrance is set into the western slope, a little below and west of the Oracle. Alternative: Falador Teleport and run north-east past Doric's hut and the Dwarven Mine to the foot of the mountain.",
        },
        {
          text: "Talk to Ramarno at the Sacred Forge inside the ruins (the large central anvil-and-altar setup) about the shield.",
        },
        {
          text: "Use a chaos core (collected during the previous quest from Zemouregal's chamber) on a barronite deposit (mined from the rocks just north of the forge).",
        },
        {
          text: "Use the imbued barronite on the Sacred Forge to start the shield-forging process.",
        },
      ],
    },
    {
      title: "True descendant",
      steps: [
        {
          text: "Return to Captain Rovin at the top of Varrock Palace's north-west tower for the finished shield.",
          travel:
            "Varrock Teleport, run north into the palace, then up the north-west corner staircase twice.",
        },
        {
          text: "Walk to the Varrock Palace library in the west wing on the ground floor and talk to Reldo among the bookcases.",
          travel:
            "Back down the tower stairs and west through the palace — the library is the long book-lined room on the west side of the ground floor.",
        },
        {
          text: "Search the scrolls scattered near the flipped table inside the library for the List of elders.",
        },
        {
          text: "Read the List of elders and the Varrock Census (also in the library).",
        },
        {
          text: "Talk to the named librarian candidates listed in the Census (each is a Varrock NPC) until one mentions the Fitzharmon family lineage.",
        },
        {
          text: "Talk to Dimintheis about the lineage at his cottage in south-east Varrock.",
          travel:
            "From the palace run south through the central square and then south-east past the Varrock east bank; Dimintheis's small house is the one tucked in the south-east corner of the city, the same one used in Family Crest.",
        },
        {
          text: "Watch the cutscene, then return to Captain Rovin at the top of the Varrock Palace north-west tower and finish the dialogue.",
          travel: "Run back north through the square into the palace and up the north-west tower stairs.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "15,000 Smithing experience",
    "15,000 Hunter experience",
    "Access to Zemouregal's Base",
    "5 Kudos + Antique lamp (5,000 XP in any 30+ skill) from Historian Minas",
  ],
};
