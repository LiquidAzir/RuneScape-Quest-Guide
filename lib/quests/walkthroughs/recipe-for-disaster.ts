import type { QuestWalkthrough } from "../types";

export const recipeForDisaster: QuestWalkthrough = {
  startPoint: "Talk to the Cook in Lumbridge Castle's kitchen.",
  itemsRequired: [
    "Pot of cream",
    "Eye of newt",
    "Greater demon ashes",
    "Egg",
    "Pot of flour",
    "Bucket of milk",
  ],
  recommended: [
    "Combat 30+ for the lesser demon (or safespot)",
    "Lumbridge teleport",
  ],
  enemies: ["A lesser demon (level 82) appears at the end — safespot or fight"],
  sections: [
    {
      title: "Start the chain",
      steps: [
        { text: "Talk to the Cook in the Lumbridge Castle kitchen — the dinner party went sideways." },
        { text: "Listen as he explains the Culinaromancer has frozen the Lumbridge Guide's friends in time." },
      ],
    },
    {
      title: "Bake the Gnome Child a cake",
      steps: [
        {
          text: "Bring the Cook: pot of cream, eye of newt, greater demon ashes, egg, pot of flour, and bucket of milk.",
        },
        { text: "He bakes a special enchanted gnome cake — give it to the Gnome Child to release her." },
      ],
    },
    {
      title: "Defeat the lesser demon and finish",
      steps: [
        { text: "A lesser demon (level 82) appears once you free the Gnome Child." },
        { text: "Defeat it (range/magic safespot from outside the kitchen window works at low levels)." },
        {
          text: "Quest complete — but you've only freed one of 10 trapped guests. Each subquest in the Recipe for Disaster series releases another.",
        },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Cooking experience",
    "Access to the Culinaromancer's Chest (free F2P bank under the Lumbridge Cellar — expanded with each subquest)",
    "Each subquest unlocks a new piece of the Cooking gauntlets and more chest space",
  ],
};
