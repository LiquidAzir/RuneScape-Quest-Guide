import type { QuestWalkthrough } from "../types";

export const theHandInTheSand: QuestWalkthrough = {
  startPoint:
    "Talk to Bert in his small house just west of the Yanille sand pit (south-west corner of Yanille — the sand pit is a large pit just outside the south-west wall, and Bert's house is the small wooden cottage right beside it).",
  itemsRequired: [
    "Beer (2gp from the Dragon Inn in Yanille)",
    "~150 coins for misc items",
    "1 empty vial",
    "Redberries (pick from bushes north of Varrock or south of Falador)",
    "White berries (pick from white-berry bushes in Brimhaven jungle, Lletya, etc.)",
    "Lantern lens (made by using molten glass on a glassblowing pipe)",
    "5 Earth runes",
    "Bucket of sand (Bert sells these post-quest; for now, take from Bert or from Brimhaven)",
  ],
  recommended: [
    "Extra vials in case of repeat trips",
    "Watchtower teleport (Yanille)",
    "Karamja gloves / charter ship for Brimhaven; Falador / Port Sarim teleports",
  ],
  sections: [
    {
      title: "Sandy hand",
      steps: [
        {
          text: "Travel to Bert's house just west of the Yanille sand pit (south-west corner of Yanille). Talk to him; he gives you the Sandy hand he found in the pit.",
        },
        {
          text: "Walk to the Dragon Inn (the pub on the south side of Yanille) and buy a beer for 2gp.",
        },
        {
          text: "Give the beer to the Guard Captain standing at the Wizards' Guild front gate (south-east corner of Yanille); he wanders off, letting you ring the bell.",
        },
        {
          text: "Ring the bell at the Wizards' Guild door (or enter directly with 66 Magic).",
        },
        {
          text: "Hand the Sandy hand to Zavistic Rarve on the ground floor of the Wizards' Guild — he investigates it and asks you to find more.",
        },
      ],
    },
    {
      title: "Sandy the slavedriver",
      steps: [
        {
          text: "Return to Bert's house in Yanille; ask for his work rota (he's been working for Sandy the slavedriver).",
        },
        {
          text: "Travel to Brimhaven on Karamja (charter ship from Port Sarim/Catherby/Yanille, or fairy ring CIQ + walk).",
        },
        {
          text: "Find Sandy's office in the small building just south of the Brimhaven docks (the wooden hut beside the cargo crates near the loading docks).",
        },
        {
          text: "Search Sandy's desk inside his office for Sandy's rota.",
        },
        {
          text: "Pickpocket Sandy repeatedly until you obtain a bucket of sand.",
        },
      ],
    },
    {
      title: "Make the truth serum",
      steps: [
        {
          text: "Return to Yanille and talk to Bert in his house west of the sand pit; he gives you a magic scroll for Zavistic.",
        },
        {
          text: "Take the scroll to Zavistic Rarve in the Wizards' Guild (south-east Yanille) — he hands you a magical orb in return.",
        },
        {
          text: "Accept Zavistic's teleport, which drops you in Port Sarim outside Betty's Magic Emporium.",
        },
        {
          text: "Talk to Betty inside the Magic Emporium; ask for bottled water — she sells you a vial of bottled water.",
        },
        {
          text: "Use redberries on the bottled water, then white berries on it to make pink dye.",
        },
        {
          text: "Use the pink dye on a lantern lens to make a rose-tinted lens.",
        },
        {
          text: "Stand in the doorway of Betty's shop (so the lens triggers properly) and use the lens on the counter — Betty mixes a truth serum.",
        },
        {
          text: "Talk to Betty again with the bucket of sand in your inventory.",
        },
      ],
    },
    {
      title: "Interrogate Sandy",
      steps: [
        {
          text: "Travel back to Brimhaven and re-enter Sandy's office south of the docks.",
        },
        {
          text: "Distract Sandy with the absurd dialogue prompts the quest journal lists (e.g. compliment his clothes, ramble about weather).",
        },
        {
          text: "While he's distracted, use the truth serum on Sandy's coffee mug on the desk.",
        },
        {
          text: "Activate the magical orb (Zavistic's gift) and question Sandy about all 3 topics he avoids — record his answers.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Yanille and ring the bell at the Wizards' Guild door again to enter.",
        },
        {
          text: "Travel to Entrana (boat from Port Sarim — bank weapons/armour first) and find Mazion, who gives you the wizard's head needed for evidence.",
        },
        {
          text: "Return to Yanille, ring the Wizards' Guild bell, and finish with Zavistic Rarve on the ground floor of the guild.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Thieving experience",
    "9,000 Crafting experience",
    "Daily delivery of 84 buckets of sand from Bert (claim each in-game day from his house in Yanille) — invaluable for Crafting glass items",
    "Access to the Wizards' Guild rune shop in Yanille",
    "Ability to buy pink dye from Betty in Port Sarim",
  ],
};
