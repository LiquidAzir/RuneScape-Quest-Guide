import type { QuestWalkthrough } from "../types";

export const childrenOfTheSun: QuestWalkthrough = {
  startPoint: "Talk to Noah or Alina east of Varrock Square (Varlamore delegation).",
  itemsRequired: [],
  recommended: [
    "Varrock teleport",
    "Chronicle / Skills necklace for fast travel",
  ],
  sections: [
    {
      title: "Initial dialogue",
      steps: [
        { text: "Talk to Noah or Alina east of Varrock Square." },
        { text: "Ask about the delegation arrival." },
      ],
    },
    {
      title: "Follow the suspicious guard",
      steps: [
        {
          text: "Tail the guard around Varrock — wait inside Lowe's Archery Emporium first.",
        },
        { text: "Hide behind the northern wall of the building south of the archery shop." },
        { text: "Walk to the south-east corner of that building." },
        { text: "Hide behind the western wall of Old Man Yarlo's house." },
        { text: "Hide inside Yarlo's house or near the building south of Aubury's Rune Shop." },
      ],
    },
    {
      title: "Identify the bandits",
      steps: [
        { text: "Return to Varrock Square by the castle wall and talk to Sergeant Tobyn by the castle wall." },
        {
          text: "Identify the 4 bandits dressed as guards by their tells:",
          notes: [
            "Outside Aris's tent — hands on hips, no weapon",
            "Near Benny's news stand — no helmet",
            "Outside Lowe's Archery Emporium (east path) — arms crossed, no weapon",
            "Between archery shop and east bank — wields a mace (regular guards use spears)",
          ],
        },
        { text: "Talk to Sergeant Tobyn again." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Varlamore via the Quetzal Transport System and fairy rings",
  ],
};
