import type { QuestWalkthrough } from "../types";

export const theRibbitingTale: QuestWalkthrough = {
  startPoint: "Talk to Marcellus at the Locus Oasis (Varlamore).",
  itemsRequired: ["Any axe (bronze axe available in-quest)"],
  recommended: [],
  enemies: ["Cuthbert, Lord of Dread (level 1) — recoil-killable"],
  sections: [
    {
      title: "Frog politics",
      steps: [
        { text: "Talk to Marcellus at the Locus Oasis." },
        { text: "Talk to the blue frogs (Gary/Sue) north-east of the pond." },
        { text: "Return to Marcellus at the Locus Oasis, then choose a frog leader." },
        { text: "Go south to the yellow frogs; chop the orange tree to distract them." },
        { text: "Sabotage the lily pad near the yellow frogs." },
        { text: "Start the election with your chosen frog leader." },
        { text: "Talk to Marcellus again at the Locus Oasis (Varlamore)." },
        { text: "Blame the flies with your frog leader." },
      ],
    },
    {
      title: "Defeat Cuthbert",
      steps: [
        { text: "Open Marcellus's chest with combination NALIA." },
        { text: "Plant the plushy in Capybara Dung to the east." },
        { text: "Defeat Cuthbert (1 HP)." },
        { text: "Report back to Marcellus." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Woodcutting experience",
    "Access to the Hardwood Farming patch in Varlamore",
  ],
};
