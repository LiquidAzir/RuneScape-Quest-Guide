import type { QuestWalkthrough } from "../types";

export const meatAndGreet: QuestWalkthrough = {
  startPoint:
    "Talk to Emelio at his home in Outer Fortis, the district on the outskirts of Civitas illa Fortis next to the Fortis Colosseum. Use the Civitas illa Fortis Teleport spell (54 Magic, unlocked by Children of the Sun) or ride a quetzal to Civitas illa Fortis, then head out of the city to Outer Fortis.",
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
        {
          text: "Talk to Emelio at his home in Outer Fortis and agree to help.",
          travel:
            "Civitas illa Fortis Teleport (54 Magic, needs Children of the Sun), or take a quetzal to Civitas illa Fortis. From the city, follow the road out to Outer Fortis beside the Fortis Colosseum — Emelio's house is among the shacks there.",
        },
        {
          text: "Talk to the Spice Merchant at his stall in the Civitas illa Fortis Bazaar about the missing delivery.",
          travel:
            "Run back into Civitas illa Fortis — the Bazaar is the covered market in the middle of the city, right by where the teleport lands you.",
        },
        { text: "Open the delivery box with code 2546." },
        {
          text: "Talk to Alba north of Ortus Farm.",
          travel:
            "Head north-east out of Civitas illa Fortis to Ortus Farm, then continue north past the farm buildings — Alba is out in the fields beyond them.",
        },
      ],
    },
    {
      title: "Wolf fight",
      steps: [
        {
          text: "Travel west from Alba to the wolf den.",
          travel: "Follow the trail west from Alba into the hills — the den mouth is at the end of the path.",
        },
        { text: "Defeat the Dire Wolf Alpha (multicombat — bring food)." },
      ],
    },
    {
      title: "Make the kebab",
      steps: [
        { text: "Return to Alba north of Ortus Farm." },
        {
          text: "Return to Emelio at his home in Outer Fortis.",
          travel:
            "Civitas illa Fortis Teleport back to the city, then out to Outer Fortis by the Colosseum.",
        },
        { text: "Provide the recipe: 4 meat, 2 salad, 1 spice, 3 sauce." },
        { text: "Give the test kebab to Vincens, Renata, or Lucas nearby." },
      ],
    },
    {
      title: "Defeat the Minotaur",
      steps: [
        { text: "Talk to Emelio at his home in Outer Fortis." },
        {
          text: "Visit Lelia in the southern room of the Fortis Colosseum.",
          travel:
            "The Colosseum is the huge arena right next to Outer Fortis — walk in through the main entrance and take the southern side room.",
        },
        { text: "Use Protect from Melee; switch to Protect from Magic when it says 'Moo!'." },
        { text: "Defeat the Minotaur (level 193)." },
        {
          text: "Talk to Lelia and Emelio at Ortus Farm.",
          travel: "Leave the Colosseum and run north-east past Civitas illa Fortis to Ortus Farm.",
        },
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
