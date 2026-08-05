import type { QuestWalkthrough } from "../types";

export const templeOfIkov: QuestWalkthrough = {
  startPoint:
    "Talk to Lucien upstairs in the Flying Horse Inn in north-west East Ardougne. Ardougne Teleport (51 Magic) to the market square then run north-west, or fairy ring BLR at Ardougne zoo and run south-east into the city.",
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
        {
          text: "Talk to Lucien upstairs in the Flying Horse Inn in north-west East Ardougne.",
          travel:
            "Ardougne Teleport to the market square, then run north-west — the inn is the two-storey pub near Edmond's house. No spell: fairy ring BLR at Ardougne zoo and run south-east, or Ardougne cloak to the Monastery and run east.",
        },
        { text: "Pick the dialogue about retrieving the artifact and take the Pendant of Lucien." },
      ],
    },
    {
      title: "Temple exploration",
      steps: [
        {
          text: "Climb down the ladder into the Temple of Ikov, directly south of the Ranging Guild.",
          travel:
            "Combat bracelet to the Ranging Guild, then run a few steps south to the ladder in the grass. Alternatives: skills necklace to the Fishing Guild and run south-west, or fairy ring BLR at Ardougne zoo and run north-east.",
        },
        { text: "Slash the webs in the western area with a knife and take the Boots of lightness — a light source is required down there." },
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
        { text: "Give Winelda all 20 unnoted limpwurt roots at once — she teleports you across the lava." },
      ],
    },
    {
      title: "Final choice — Good (Guardians of Armadyl)",
      steps: [
        { text: "Remove the Pendant of Lucien." },
        { text: "Talk to the Guardian of Armadyl inside the Temple of Ikov; pick righteous dialogue." },
        { text: "Receive an Armadyl pendant." },
        {
          text: "Travel to Lucien in the small building just west of the Grand Exchange in Varrock.",
          travel:
            "Varrock Teleport, then run north-west through the city to the Grand Exchange; Lucien is inside the house on its western edge, beside the road to Edgeville.",
        },
        { text: "Defeat Lucien (level 14) while wearing the Armadyl pendant." },
      ],
    },
    {
      title: "Final choice — Evil (Lucien)",
      steps: [
        { text: "Take the Staff of Armadyl from the table." },
        { text: "Defeat Guardian of Armadyl if blocking (safespottable)." },
        {
          text: "Travel to Lucien in the small building just west of the Grand Exchange in Varrock.",
          travel:
            "Varrock Teleport, then run north-west through the city to the Grand Exchange; Lucien is inside the house on its western edge, beside the road to Edgeville.",
        },
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
