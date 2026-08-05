import type { QuestWalkthrough } from "../types";

export const theRibbitingTale: QuestWalkthrough = {
  startPoint:
    "Talk to Marcellus at the Locus Oasis in western Varlamore, the palm-ringed pond a short run south-east of the Hunter Guild. Fastest: quetzal whistle → Hunter Guild, then run south-east to the water. Without a whistle, cast Civitas illa Fortis Teleport (54 Magic) or use a Fortis tablet and follow the western road out of the city toward the Hunter Guild.",
  itemsRequired: ["Any axe (bronze axe available in-quest)"],
  recommended: ["Quetzal whistle (any tier) for the Varlamore transport network"],
  enemies: ["Cuthbert, Lord of Dread (level 1) — recoil-killable"],
  sections: [
    {
      title: "Frog politics",
      steps: [
        {
          text: "Talk to Marcellus at the Locus Oasis in western Varlamore.",
          travel:
            "Quetzal whistle → Hunter Guild, then run south-east to the palm-ringed oasis pond. No whistle: Civitas illa Fortis Teleport (54 Magic) or a Fortis tablet, then follow the road west out of the city toward the Hunter Guild until you reach the water.",
        },
        { text: "Talk to the blue frogs (Gary and Sue) on the lily pads north-east of the oasis pond." },
        { text: "Return to Marcellus at the oasis, then choose a frog leader." },
        { text: "Go south along the oasis shore to the yellow frogs and chop the orange tree there to distract them." },
        { text: "Sabotage the lily pad next to the yellow frogs." },
        { text: "Start the election with your chosen frog leader." },
        { text: "Talk to Marcellus again at the Locus Oasis." },
        { text: "Blame the flies with your frog leader." },
      ],
    },
    {
      title: "Defeat Cuthbert",
      steps: [
        { text: "Open Marcellus's chest at the oasis camp with the combination NALIA." },
        { text: "Plant the plushy in the pile of Capybara Dung a short way east of the oasis." },
        { text: "Defeat Cuthbert (1 HP — a recoil ring or one hit does it)." },
        { text: "Report back to Marcellus at the Locus Oasis." },
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
