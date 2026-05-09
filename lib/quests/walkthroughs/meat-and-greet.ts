import type { QuestWalkthrough } from "../types";

export const meatAndGreet: QuestWalkthrough = {
  startPoint: "Talk to Emelio at his home in Outer Fortis (Varlamore).",
  itemsRequired: [],
  recommended: [
    "Combat 60+",
    "43+ Prayer (Protect from Melee + Magic)",
    "Stamina/energy potions",
    "Combat gear + sharks/anglers",
  ],
  enemies: [
    "Dire Wolf Alpha (level 113) — multicombat",
    "Minotaur (level 193) — final boss, switches melee/magic",
  ],
  sections: [
    {
      title: "Initial setup",
      steps: [
        { text: "Talk to Emelio and confirm." },
        { text: "Talk to the Spice Merchant at the Bazaar about the missing delivery." },
        { text: "Open the box with code 2546." },
        { text: "Talk to Alba north of Ortus Farm." },
      ],
    },
    {
      title: "Wolf fight",
      steps: [
        { text: "Travel west to the wolf den." },
        { text: "Defeat the Dire Wolf Alpha (multicombat — bring food)." },
      ],
    },
    {
      title: "Make the kebab",
      steps: [
        { text: "Return to Alba." },
        { text: "Return to Emelio." },
        { text: "Provide the recipe: 4 meat, 2 salad, 1 spice, 3 sauce." },
        { text: "Give the test kebab to Vincens, Renata, or Lucas." },
      ],
    },
    {
      title: "Defeat the Minotaur",
      steps: [
        { text: "Talk to Emelio." },
        { text: "Visit Lelia at the Fortis Colosseum (southern room)." },
        { text: "Use Protect from Melee; switch to Magic when it says 'Moo!'." },
        { text: "Defeat the Minotaur (level 193)." },
        { text: "Talk to Lelia and Emelio." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "8,000 Cooking experience",
    "Access to Emelio's Kebab Shop (Varlamore food source)",
  ],
};
