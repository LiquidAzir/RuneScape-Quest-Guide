import type { QuestWalkthrough } from "../types";

export const theHandInTheSand: QuestWalkthrough = {
  startPoint: "Talk to Bert in Yanille (near the south-west sand pit).",
  itemsRequired: [
    "Beer (2gp from the Yanille pub)",
    "~150 coins",
    "1 empty vial",
    "Redberries",
    "White berries",
    "Lantern lens",
    "5 Earth runes",
    "Bucket of sand",
  ],
  recommended: [
    "Extra vials for repeat trips",
    "Yanille teleport (Watchtower)",
    "Brimhaven and Port Sarim teleports / charter ship",
  ],
  sections: [
    {
      title: "Sandy hand",
      steps: [
        { text: "Talk to Bert in Yanille (near the south-west sand pit) and get the Sandy hand." },
        { text: "Buy a beer at the Dragon Inn." },
        { text: "Give the beer to the Guard Captain near the Wizards' Guild." },
        { text: "Ring the bell at the Wizards' Guild door (or enter directly with 66 Magic)." },
        { text: "Hand the Sandy hand to Zavistic Rarve inside." },
      ],
    },
    {
      title: "Sandy the slavedriver",
      steps: [
        { text: "Get Bert's rota from Bert in Yanille." },
        { text: "Travel to Brimhaven and find Sandy in the building near the Karamja docks." },
        { text: "Search Sandy's desk for Sandy's rota." },
        { text: "Pickpocket Sandy until you obtain a bucket of sand." },
      ],
    },
    {
      title: "Make truth serum",
      steps: [
        { text: "Return to Yanille and talk to Bert in the house west of the sandpit for a magic scroll." },
        { text: "Get a magical orb from Zavistic Rarve in the Wizards' Guild." },
        { text: "Accept the teleport to Port Sarim." },
        { text: "Talk to Betty in her magic shop for bottled water." },
        { text: "Add redberries, then white berries to make pink dye." },
        { text: "Dye the lantern lens with pink dye to make a rose-tinted lens." },
        { text: "Stand in the doorway and use the lens on the counter for a truth serum." },
        { text: "Talk to Betty again with the bucket of sand in your inventory." },
      ],
    },
    {
      title: "Interrogate Sandy",
      steps: [
        { text: "Travel to Brimhaven. Distract Sandy with the absurd statements suggested." },
        { text: "Use the truth serum on Sandy's coffee mug." },
        { text: "Activate the magical orb and question Sandy about all 3 topics." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Yanille and ring the Wizards' Guild bell." },
        { text: "Travel to Entrana and get the wizard's head from Mazion." },
        { text: "Return to Yanille, ring the Wizards' Guild bell again, and finish with Zavistic Rarve in the Wizards' Guild." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Thieving experience",
    "9,000 Crafting experience",
    "Daily delivery of 84 buckets of sand from Bert (claim each in-game day) — invaluable for Crafting",
    "Access to the Wizards' Guild rune shop",
    "Ability to buy pink dye from Betty",
  ],
};
