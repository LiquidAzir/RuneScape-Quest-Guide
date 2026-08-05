import type { QuestWalkthrough } from "../types";

export const recipeForDisaster: QuestWalkthrough = {
  startPoint:
    "Talk to the Cook in Lumbridge Castle's kitchen. Lumbridge Home Teleport (or a Lumbridge teleport tab) drops you in the castle courtyard — go in through the north door and take the first room on your left; the kitchen is the north-west room of the ground floor.",
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
        {
          text: "Talk to the Cook in the Lumbridge Castle kitchen — the dinner party went sideways.",
          travel:
            "Lumbridge Home Teleport lands you in the Lumbridge Castle courtyard. Enter the castle by the north door and turn left into the north-west room — the Cook stands between the range and the sink.",
        },
        { text: "Listen as he explains the Culinaromancer has frozen the Lumbridge Guide's friends in time." },
      ],
    },
    {
      title: "Bake the Gnome Child a cake",
      steps: [
        {
          text: "Bring the Cook: pot of cream, eye of newt, greater demon ashes, egg, pot of flour, and bucket of milk.",
          notes: [
            "Everything on this list can be bought from the Culinaromancer's Chest once you have access to it.",
          ],
        },
        {
          text: "He bakes a special enchanted gnome cake — give it to the frozen Gnome Child in the dining room to release her.",
          travel:
            "The frozen guests sit in the dining room off the Lumbridge Castle cellar: take the staircase down from the castle kitchen and go through the dining-room doors. The Culinaromancer's Chest bank sits in the same room.",
        },
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
