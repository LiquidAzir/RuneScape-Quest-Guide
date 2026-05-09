import type { QuestWalkthrough } from "../types";

export const enlightenedJourney: QuestWalkthrough = {
  startPoint: "Talk to Auguste on Entrana, north of the Herblore shop.",
  itemsRequired: [
    "Trip 1: 3 papyrus, ball of wool, unlit candle, sack of potatoes, yellow dye, red dye, 10 silk, 8 empty sacks, bowl",
    "Trip 2: 10 logs, tinderbox, 12 willow branches",
  ],
  recommended: [
    "Additional noted logs to unlock balloon routes after the quest",
    "Ring of the elements / Amulet of glory / Minigame teleport",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Entrana via the Port Sarim monks." },
        { text: "Talk to Auguste 3 times with specific dialogue choices." },
        { text: "Use papyrus on a ball of wool." },
        { text: "Use an unlit candle on the balloon structure." },
        { text: "Fill 8 sacks with sand south of Auguste." },
        {
          text: "Give Auguste: yellow dye, red dye, 10 silk, bowl, 8 sandbags.",
        },
      ],
    },
    {
      title: "Build the balloon",
      steps: [
        { text: "Leave Entrana to gather tinderbox + 10 logs + 12 willow branches." },
        { text: "Return and attach the willow branches to the balloon frame." },
        { text: "Talk to Auguste to proceed." },
      ],
    },
    {
      title: "Pilot the balloon",
      steps: [
        {
          text: "Screen 1: Drop sandbag, burn log, relax 9x, pull red rope, relax 2x, pull brown rope, relax 5x.",
        },
        {
          text: "Screen 2: Burn log, relax, burn log, relax 10x, burn log, relax 5x.",
        },
        {
          text: "Screen 3: Relax 7x, pull red rope, pull brown rope, relax 3x, burn log, relax 4x, pull brown rope.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Auguste." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Crafting experience",
    "3,000 Farming experience",
    "1,500 Woodcutting experience",
    "4,000 Firemaking experience",
    "Bomber jacket and cap",
    "Access to the balloon transport network (Castle Wars, Crafting Guild, Varrock, Grand Tree, Taverley)",
  ],
};
