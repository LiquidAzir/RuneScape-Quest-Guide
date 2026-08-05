import type { QuestWalkthrough } from "../types";

export const childrenOfTheSun: QuestWalkthrough = {
  startPoint:
    "Talk to Noah or Alina, the Varlamore delegation standing just east of Varrock Square. Varrock Teleport (Magic 25) drops you in the square itself — walk a few steps east along the main road.",
  itemsRequired: [],
  recommended: [
    "Varrock teleport",
    "Chronicle / Skills necklace for fast travel",
  ],
  sections: [
    {
      title: "Initial dialogue",
      steps: [
        {
          text: "Talk to Noah or Alina, the Varlamore delegates just east of Varrock Square.",
          travel:
            "Varrock Teleport lands you in the middle of Varrock Square. The delegation is set up a few paces east along the main east-west road. Alternatives: Chronicle teleport to Champions' Guild and run north, or the Grand Exchange spirit tree and run south.",
        },
        { text: "Ask about the delegation arrival." },
      ],
    },
    {
      title: "Follow the suspicious guard",
      steps: [
        {
          text: "Start the tail by waiting inside Lowe's Archery Emporium.",
          travel:
            "Lowe's Archery Emporium is in central Varrock just east of the square, on the main road — the shop with the bow-and-arrow icon on the minimap.",
        },
        { text: "Hide behind the northern wall of the building south of the archery shop." },
        { text: "Walk to the south-east corner of that building." },
        {
          text: "Hide behind the western wall of Old Man Yarlo's house in south-east Varrock.",
          travel:
            "Keep heading south-east from the archery shop; Yarlo's house is the small house in south-east Varrock, near Aubury's Rune Shop.",
        },
        { text: "Hide inside Yarlo's house or behind the building south of Aubury's Rune Shop." },
      ],
    },
    {
      title: "Identify the bandits",
      steps: [
        {
          text: "Return to Varrock Square and talk to Sergeant Tobyn by the castle wall.",
          travel:
            "Run back north-west to the square, then north to the palace wall — Tobyn stands against the castle wall on the north side of the square.",
        },
        {
          text: "Identify the 4 bandits dressed as guards by their tells:",
          notes: [
            "Outside Aris's tent — hands on hips, no weapon",
            "Near Benny's news stand — no helmet",
            "Outside Lowe's Archery Emporium (east path) — arms crossed, no weapon",
            "Between archery shop and east bank — wields a mace (regular guards use spears)",
          ],
        },
        { text: "Talk to Sergeant Tobyn again by the castle wall." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Varlamore via the Quetzal Transport System and fairy rings",
  ],
};
