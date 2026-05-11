import type { QuestWalkthrough } from "../types";

export const defenderOfVarrock: QuestWalkthrough = {
  startPoint:
    "Talk to Elias White inside the Jolly Boar Inn (the inn on the road north-east of Varrock, between Varrock and Edgeville).",
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
          text: "Talk to Elias White inside the Jolly Boar Inn (north-east of Varrock).",
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
          text: "Travel to Varrock Palace and find Elias on the ground floor (he's moved into the palace meeting hall) — report your findings.",
        },
        {
          text: "Climb to the second floor of Varrock Palace (top floor) and talk to Captain Rovin.",
        },
        {
          text: "Travel to the Ruins of Camdozaal (the dwarven ruins beneath Asgarnian Ice Mountain — entrance via the trapdoor in the small house south of the mountain peak; also reachable via the Combat Achievement teleport tab post Below Ice Mountain).",
        },
        {
          text: "Talk to Ramarno at the Sacred Forge inside the ruins (the forge is the large central anvil-and-altar setup) about the shield.",
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
          text: "Travel back to Varrock Palace; climb to the second floor and talk to Captain Rovin for the finished shield.",
        },
        {
          text: "Walk to the Varrock Palace library on the ground floor (west wing) and talk to Reldo standing among the bookcases.",
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
          text: "Travel to south-east Varrock and find Dimintheis at his small cottage (south-east of Varrock central square — the same Dimintheis from Family Crest). Talk to him about the lineage.",
        },
        {
          text: "Watch the cutscene, then return to Captain Rovin on the second floor of Varrock Palace and finish the dialogue.",
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
