import type { QuestWalkthrough } from "../types";

export const defenderOfVarrock: QuestWalkthrough = {
  startPoint: "Talk to Elias White in the Jolly Boar Inn (north-east of Varrock).",
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
        { text: "Talk to Elias White at the Jolly Boar Inn." },
        { text: "Inspect the plant outside the inn; follow the trail west." },
        { text: "Inspect rocks; follow the southern trail; inspect another plant." },
        { text: "Follow the eastern trail; inspect the spiny bush for a grubby key." },
        { text: "Continue east through the gate; inspect the green bush." },
        { text: "Follow the eastern trail; inspect a small bush." },
        { text: "Follow the northern trail to a trapdoor." },
        { text: "Enter the dungeon; finish dialogue with Elias." },
        { text: "Kill 3 armoured zombies; collect red mist in bottles." },
        { text: "Open the west door to find Arrav." },
        { text: "Kill 3 more armoured zombies; collect more red mist." },
        { text: "Open the east door and view the balcony cutscene." },
        { text: "Leave the dungeon." },
      ],
    },
    {
      title: "Sacred Forge",
      steps: [
        { text: "Report findings to Elias at Varrock Palace." },
        { text: "Talk to Captain Rovin on the 2nd floor of Varrock Palace." },
        { text: "Travel to the Ruins of Camdozaal." },
        { text: "Talk to Ramarno at the Sacred Forge about the shield." },
        { text: "Use a chaos core on a barronite deposit." },
        { text: "Use the imbued barronite on the Sacred Forge." },
      ],
    },
    {
      title: "True descendant",
      steps: [
        { text: "Go to Varrock Palace; talk to Captain Rovin for the shield." },
        { text: "Visit the library; talk to Reldo." },
        { text: "Search the scrolls near the flipped table for the elder list." },
        { text: "Read the List of elders and the Varrock Census." },
        { text: "Talk to the Varrock Palace librarian candidates until one mentions the Fitzharmon family." },
        { text: "Travel to south-east Varrock; talk to Dimintheis." },
        { text: "Watch the cutscene and finish dialogue with Captain Rovin." },
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
