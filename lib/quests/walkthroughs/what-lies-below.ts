import type { QuestWalkthrough } from "../types";

export const whatLiesBelow: QuestWalkthrough = {
  startPoint: "Talk to Rat Burgiss south of Varrock.",
  itemsRequired: [
    "Empty bowl",
    "15 Chaos runes",
    "Access to the Chaos altar (talisman, tiara, or via Abyss)",
  ],
  recommended: [
    "Combat 30+",
    "42 Mining (boostable)",
    "Some food + weapon + armour",
    "Bronze pickaxe",
    "Fast travel teleports",
  ],
  enemies: [
    "5 Outlaws (level 32)",
    "King Roald (level 47) — must reduce to 2 HP",
  ],
  sections: [
    {
      title: "Recover the documents",
      steps: [
        { text: "Talk to Rat Burgiss using dialogue option 3." },
        { text: "Kill 5 Outlaws west of the Grand Exchange." },
        { text: "Collect the rat's paper drops." },
        { text: "Fill the folder with papers." },
        { text: "Return the folder to Rat Burgiss." },
      ],
    },
    {
      title: "Investigate Surok",
      steps: [
        { text: "Talk to Surok Magis in the Varrock Palace library." },
        { text: "Read Sin'keth's diary." },
        { text: "Visit the Chaos altar with the wand and 15 chaos runes." },
        { text: "Use the wand on the altar to infuse it." },
      ],
    },
    {
      title: "Confrontation",
      steps: [
        { text: "Return to Surok with the infused wand and an empty bowl." },
        { text: "Deliver the letter to Rat Burgiss." },
        { text: "Meet Zaff and report back." },
        { text: "Reduce King Roald to 2 HP or less." },
        { text: "Operate the Beacon ring to summon Zaff." },
        { text: "Talk to Rat Burgiss south of Varrock." },
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
