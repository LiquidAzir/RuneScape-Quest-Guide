import type { QuestWalkthrough } from "../types";

export const olafsQuest: QuestWalkthrough = {
  startPoint:
    "Talk to Olaf Hradson at his small camp on the snowy coast north-east of Rellekka (just west of fairy ring DKS). Get to Rellekka with an enchanted lyre or Fremennik sea boots 3; otherwise Camelot Teleport and run north-west along the road, then north through the mountain pass into Rellekka. From the village head north-east along the coast to Olaf's camp fire.",
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
        {
          text: "Talk to Olaf Hradson at his camp north-east of Rellekka.",
          travel:
            "Enchanted lyre (or Fremennik sea boots 3) teleports straight to Rellekka; otherwise Camelot Teleport, run north-west up the road and through the mountain pass into the village. From Rellekka run north-east along the snowy coast to the camp fire — fairy ring DKS is just east of it.",
        },
        { text: "Chop the lone windswept tree east and north of Olaf's camp for damp planks." },
        { text: "Bring the logs back to Olaf at the camp." },
        {
          text: "Travel to Rellekka and talk to Ingrid Hradson by the well in the centre of the village.",
          travel:
            "Run south-west back down the coast into Rellekka, or use an enchanted lyre. The well is in the middle of the village, north of the market stalls.",
        },
        {
          text: "Talk to Volf Olafson outside the helmet shop in eastern Rellekka.",
          travel:
            "From the well walk east to Skulgrimen's Battle Gear — Volf loiters outside the shop door.",
        },
        {
          text: "Return to Olaf at his camp and use the damp planks on his fire pit.",
          travel: "Run north-east out of Rellekka along the coast back to the camp.",
        },
        { text: "Talk to Olaf again at his camp." },
      ],
    },
    {
      title: "Treasure trail",
      steps: [
        {
          text: "Return to the windswept tree east and north of the camp and dig next to it with a spade.",
        },
        { text: "Travel east then north through the tunnel you open up." },
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
