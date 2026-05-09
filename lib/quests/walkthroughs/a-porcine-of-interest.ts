import type { QuestWalkthrough } from "../types";

export const aPorcineOfInterest: QuestWalkthrough = {
  startPoint: "Read the noticeboard behind the wine shop in Draynor Village market.",
  itemsRequired: ["Rope", "Knife or any slash weapon (no whip/tentacle/halberd/claws)"],
  recommended: [
    "Combat 20+",
    "Stamina/energy potions",
    "Some food + combat gear",
    "Amulet of glory",
    "31+ Agility for shortcut",
  ],
  enemies: ["Sourhog (level 37) — resistant to slash and magic"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Check the noticeboard in Draynor Village market." },
        { text: "Talk to Sarah at South Falador Farm about the bounty." },
        { text: "Travel to the crossroads north of Draynor Village." },
      ],
    },
    {
      title: "Cave exploration",
      steps: [
        { text: "Follow the trail of vegetables north-east toward a strange hole." },
        { text: "Use a rope on the hole and climb down." },
        { text: "Follow the cave to a skeleton and investigate." },
        { text: "Talk to Spria — she gives you reinforced goggles." },
      ],
    },
    {
      title: "Defeat the Sourhog",
      steps: [
        { text: "Equip the goggles and return to the hole." },
        { text: "Defeat the Sourhog (level 37) with stab/crush." },
        { text: "Remove a foot from the dead Sourhog." },
        { text: "Return to Sarah for the reward." },
        { text: "Return to Spria to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 coins",
    "1,000 Slayer experience",
    "30 Slayer reward points",
    "Access to Sourhog Cave + Sourhog as a slayer task",
    "Reinforced goggles (used for the slayer helmet)",
  ],
};
