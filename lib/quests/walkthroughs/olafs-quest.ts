import type { QuestWalkthrough } from "../types";

export const olafsQuest: QuestWalkthrough = {
  startPoint: "Talk to Olaf Hradson at his small camp west of fairy ring DKS (north-east of Rellekka).",
  itemsRequired: [
    "Woodcutting axe",
    "Tinderbox",
    "Spade",
    "6 Ropes",
    "Combat gear and food",
  ],
  recommended: [
    "Combat 50+",
    "50+ Agility",
    "Stamina/agility potions",
    "Prayer potions",
  ],
  enemies: [
    "Skeleton Fremennik (level 40)",
    "Ulfric (level 100) — boss, safespottable on dirt north of his gravestone",
  ],
  sections: [
    {
      title: "Help Olaf",
      steps: [
        { text: "Talk to Olaf Hradson west of fairy ring DKS." },
        { text: "Chop the windswept tree east and north of the fairy ring." },
        { text: "Bring the logs back to Olaf." },
        { text: "Travel to Rellekka and talk to Ingrid Hradson by the well." },
        { text: "Talk to Volf Olafson outside the helmet shop." },
        { text: "Return to Olaf at his camp west of fairy ring DKS and use the damp planks on his fire pit." },
        { text: "Talk to Olaf again at his camp west of fairy ring DKS." },
      ],
    },
    {
      title: "Treasure trail",
      steps: [
        { text: "Return to the windswept tree and dig next to it with a spade." },
        { text: "Travel east then north through the tunnel." },
        { text: "Defeat a Skeleton Fremennik (level 40) and take its key." },
        {
          text: "Search the picture wall and input the pattern: East, North, West, South, then Confirm.",
        },
        { text: "Search the wall again to pass through." },
        { text: "Pick up 2 rotten barrels and 6 ropes from the next room." },
        { text: "Use the barrels on the bridge to cross." },
        { text: "Open the gate by matching its key shape." },
      ],
    },
    {
      title: "Defeat Ulfric",
      steps: [
        { text: "Search the chest in the old ship — Ulfric (level 100) appears." },
        { text: "Defeat Ulfric (safespot at the dirt patch north of the gravestone)." },
        { text: "Search the chest again to claim the treasure." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "12,000 Defence experience",
    "20,000 coins + 4 cut rubies",
    "Access to the Brine Rat Cavern (Slayer dungeon)",
  ],
};
