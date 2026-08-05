import type { QuestWalkthrough } from "../types";

export const whatLiesBelow: QuestWalkthrough = {
  startPoint:
    "Talk to Rat Burgiss on the road south of Varrock. Varrock Teleport into the square, run south out of the city's south gate and follow the road south-west — Rat stands beside his cart with two mercenary guards, on the stretch of road before the Champions' Guild.",
  itemsRequired: [
    "Empty bowl",
    "15 Chaos runes",
    "Access to the Chaos altar (talisman, tiara, or via the Abyss)",
  ],
  recommended: [
    "Combat 30+",
    "42 Mining (boostable)",
    "Some food + weapon + armour",
    "Bronze pickaxe",
    "Varrock teleports — you bounce around the city a lot",
  ],
  enemies: [
    "5 Outlaws (level 32)",
    "King Roald (level 47) — must reduce to 2 HP",
  ],
  sections: [
    {
      title: "Recover the documents",
      steps: [
        {
          text: "Talk to Rat Burgiss on the road south of Varrock using dialogue option 3.",
          travel:
            "Varrock Teleport, then run south through the city and out the south gate. Follow the road south-west; Rat and his two guards are stopped on the roadside before you reach the Champions' Guild.",
        },
        {
          text: "Kill 5 Outlaws in the open ground west of the Grand Exchange.",
          travel:
            "From Rat, run north back through Varrock to the Grand Exchange (or Varrock Teleport and run north-west). Leave the GE by its west exit and continue west onto the grass towards the Edgeville road — the outlaws camp out there.",
        },
        { text: "Pick up the papers the outlaws drop." },
        { text: "Use the papers on the folder to fill it." },
        {
          text: "Return the folder to Rat Burgiss on the road south of Varrock.",
          travel: "Varrock Teleport and run south out of the south gate, then south-west along the road again.",
        },
      ],
    },
    {
      title: "Investigate Surok",
      steps: [
        {
          text: "Talk to Surok Magis in the Varrock Palace library.",
          travel:
            "Varrock Teleport, run north into the palace grounds and round to the palace's north-east side. The library is the long hall attached there — Surok is at its southern end among the bookshelves.",
        },
        { text: "Read Sin'keth's diary that Surok gives you." },
        {
          text: "Take the wand and 15 chaos runes to the Chaos altar.",
          travel:
            "Bring a chaos talisman or wear a chaos tiara. Run north out of Edgeville, cross the Wilderness ditch and head north-west — the mysterious ruins sit around level 10 Wilderness, west of the lever house. The Abyss (Mage of Zamorak north of Edgeville) also works but skulls you.",
        },
        { text: "Use the wand on the altar to infuse it." },
      ],
    },
    {
      title: "Confrontation",
      steps: [
        {
          text: "Return to Surok Magis in the Varrock Palace library with the infused wand and an empty bowl.",
          travel: "Leave the Wilderness south to Edgeville, then Varrock Teleport and run north to the palace's north-east library.",
        },
        {
          text: "Deliver Surok's letter to Rat Burgiss on the road south of Varrock.",
          travel: "Run south through the city and out the south gate, then south-west along the road to Rat's cart.",
        },
        {
          text: "Meet Zaff in his staff shop on the west side of Varrock square, then report back to Rat.",
          travel: "Head back north into Varrock — Zaff's is the staff shop on the main road just west of the central square.",
        },
        {
          text: "Attack King Roald in the Varrock Palace throne room and reduce him to 2 HP or less.",
          travel: "Varrock Teleport and run north into the palace; the throne room is the big hall straight in from the main entrance.",
        },
        { text: "Operate the Beacon ring to summon Zaff." },
        {
          text: "Talk to Rat Burgiss on the road south of Varrock to finish.",
          travel: "Out of the palace, south through the city and out the south gate, then south-west along the road.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "8,000 Runecraft experience",
    "2,000 Defence experience",
    "Beacon ring",
    "Chaos altar shortcut access",
    "5 Kudos at the Varrock Museum",
    "5 battlestaves added to Zaff's daily stock",
  ],
};
