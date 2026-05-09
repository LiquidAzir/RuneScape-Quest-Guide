import type { QuestWalkthrough } from "../types";

export const ragAndBoneManI: QuestWalkthrough = {
  startPoint: "Talk to the Odd Old Man in Silvarea, north-east of Varrock.",
  itemsRequired: ["8 coins for vinegar jugs", "8 pots", "8 logs (any) or an axe", "Tinderbox"],
  recommended: [
    "Combat 15+",
    "Varrock + Lumbridge teleports",
    "Digsite pendant",
    "Amulet of glory",
    "Dramen staff for fairy rings",
    "Balloon transport access",
  ],
  enemies: [
    "Giant rat / Unicorn / Bear / Ram / Goblin / Big frog / Monkey / Giant bat",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to the Odd Old Man in Silvarea — he wants 8 specific bones boiled in vinegar." },
      ],
    },
    {
      title: "Gather the bones",
      steps: [
        {
          text: "Kill 8 monsters to collect: giant rat bone, unicorn bone, bear ribs, ram skull, goblin skull, big frog leg, monkey paw, giant bat wing.",
        },
      ],
    },
    {
      title: "Polish the bones",
      steps: [
        { text: "Buy 8 jugs of vinegar from Fortunato in Draynor." },
        { text: "Combine jugs with pots to create pots of vinegar." },
        { text: "Combine bones with pots of vinegar." },
        { text: "Return to the Odd Old Man with logs." },
        {
          text: "For each bone: place logs on the pot-boiler, use bone-in-vinegar, light the logs, wait 12 seconds, remove the pot.",
        },
        { text: "Talk to the Odd Old Man." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "500 Cooking experience",
    "500 Prayer experience",
  ],
};
