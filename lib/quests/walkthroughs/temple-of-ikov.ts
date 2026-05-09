import type { QuestWalkthrough } from "../types";

export const templeOfIkov: QuestWalkthrough = {
  startPoint: "Talk to Lucien at the Flying Horse Inn in north-west East Ardougne.",
  itemsRequired: [
    "Yew bow or better (to shoot ice arrows)",
    "20 unnoted limpwurt roots",
    "Boots of lightness or graceful (weight reduction)",
    "Light source + slash weapon (for boots of lightness)",
    "Pendant of Lucien (Lucien gives you one)",
  ],
  recommended: [
    "Combat 45+",
    "43 Prayer for protection prayers",
    "Sharks/anglers + ranged armour",
    "Ava's accumulator",
  ],
  enemies: [
    "Fire Warrior of Lesarkus (level 84)",
    "Guardian of Armadyl (level 43) — only on Lucien's path",
    "Lucien (level 14) — only on Guardians' path",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Lucien at the Flying Horse Inn." },
        { text: "Pick the dialogue about retrieving the artifact." },
      ],
    },
    {
      title: "Temple exploration",
      steps: [
        { text: "Enter the temple south of the Ranging Guild via the ladder." },
        { text: "Get Boots of lightness from the western area." },
        { text: "Equip the Pendant of Lucien and cross the north gate." },
        { text: "Cross the lava bridge (weight must be -1kg or less)." },
        { text: "Take the lever from the large door; attach to bracket near the entrance." },
        { text: "Pull the lever to activate machinery." },
        { text: "Search chests along the icy path for ice arrows (16+ recommended)." },
      ],
    },
    {
      title: "Defeat the Fire Warrior",
      steps: [
        { text: "Return through the north gate with Pendant equipped." },
        { text: "Find the lever room to the north; search for traps (42 Thieving)." },
        { text: "Pull the lever and proceed west then north." },
        { text: "Kill the Fire Warrior using ice arrows + Protect from Magic." },
        { text: "Give Winelda 20 unnoted limpwurt roots — she teleports you across." },
      ],
    },
    {
      title: "Final choice — Good (Guardians of Armadyl)",
      steps: [
        { text: "Remove the Pendant of Lucien." },
        { text: "Talk to Guardian of Armadyl; pick righteous dialogue." },
        { text: "Receive an Armadyl pendant." },
        { text: "Travel to the building west of the Grand Exchange." },
        { text: "Defeat Lucien (level 14) wearing the Armadyl pendant." },
      ],
    },
    {
      title: "Final choice — Evil (Lucien)",
      steps: [
        { text: "Take the Staff of Armadyl from the table." },
        { text: "Defeat Guardian of Armadyl if blocking (safespottable)." },
        { text: "Travel to Lucien at the building west of the Grand Exchange." },
        { text: "Give the Staff of Armadyl to Lucien." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,500 Ranged experience",
    "8,000 Fletching experience",
    "Armadyl pendant (good path) OR Pendant of Lucien (evil path) — door access",
    "Boots of lightness (weight reducer)",
    "5 Kudos at the Varrock Museum",
  ],
};
