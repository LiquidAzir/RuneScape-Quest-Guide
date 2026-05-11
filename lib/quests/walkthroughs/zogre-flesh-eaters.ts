import type { QuestWalkthrough } from "../types";

export const zogreFleshEaters: QuestWalkthrough = {
  startPoint:
    "Talk to Grish in Jiggig — the small ogre village south of Castle Wars and west of Yanille (use the Castle Wars minigame teleport then run south, or fairy ring CIR).",
  itemsRequired: [
    "Knife (a knife spawns inside the ruined backpack in the cave)",
    "Comp ogre bow (or wolf bones + achey logs + axe + bow string to fletch one)",
    "Brutal arrows (or achey logs + nails + hammer + feathers to fletch some)",
  ],
  recommended: [
    "Combat 45+",
    "43+ Prayer for protection prayers vs. Slash Bash",
    "Strength potion + Relicym's balm or Sanfew serum (for disease)",
    "30+ Fletching (boostable) for arrow crafting",
    "Stamina potions for the back-and-forth between Jiggig and Yanille",
  ],
  enemies: [
    "Slash Bash (level 111) — boss inside the Jiggig burial chamber, safespottable; uses both ranged and melee",
    "Zombie (level 39) — wanders the cave under Jiggig",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Jiggig (small ogre village south of Castle Wars and west of Yanille). Talk to Grish standing near the central pit — chat options 2, 4, 1 — and offer help.",
        },
        {
          text: "Receive 2 Super restore potions and 3 cooked chompy birds from Grish.",
        },
        {
          text: "Talk to the Ogre guard at the barricade just south of Grish to ask him to remove the boards blocking the burial pit.",
        },
        {
          text: "Climb over the crushed barricade in the centre of Jiggig and go down the stairs into the cave.",
        },
      ],
    },
    {
      title: "Investigate the cave",
      steps: [
        {
          text: "Travel north-west inside the cave to the blackened/scorched floor area.",
        },
        {
          text: "Search the skeleton on the floor near the broken lectern. A Zombie (level 39) attacks — defeat it.",
        },
        {
          text: "Open the ruined backpack next to the skeleton to take a Dragon Inn tankard and a knife.",
        },
        {
          text: "Search the broken lectern beside the skeleton to find a torn page.",
        },
        {
          text: "Use the knife on the coffin west of the skeleton to pry it open.",
        },
        {
          text: "Open the coffin and search inside for a black prism.",
        },
      ],
    },
    {
      title: "Yanille investigation",
      steps: [
        {
          text: "Travel east to Yanille (use Watchtower teleport, charter ship, or run east from Castle Wars). Enter the Dragon Inn (the pub on the south side of Yanille) and use the Dragon Inn tankard on the bartender behind the counter to get info.",
        },
        {
          text: "Walk to the Wizards' Guild in the south-east corner of Yanille; talk to Zavistic Rarve on the ground floor (chat option 1) about the prism.",
        },
        {
          text: "Travel to the small guest house just north of the Wizards' Guild and talk to Sithik Ints inside (chat option 3).",
        },
        {
          text: "While in the guest house, search the drawers, cupboard, and wardrobe to find 3 books (a necromancy book and a H.A.M. book among them) and a piece of papyrus + charcoal.",
        },
        {
          text: "Read all 3 books, then use each book on Sithik in turn to confront him about each topic.",
        },
        {
          text: "Use papyrus on Sithik (he draws his portrait), then use papyrus on the portrait on his wall — when prompted, choose to use realist charcoal style.",
        },
      ],
    },
    {
      title: "Expose Sithik",
      steps: [
        {
          text: "Return to the Dragon Inn (south Yanille). Use the Dragon Inn tankard and then the portrait on the bartender.",
        },
        {
          text: "The bartender signs the portrait as an affidavit.",
        },
        {
          text: "Travel back to the Wizards' Guild south-east in Yanille and talk to Zavistic Rarve while holding all 4 items: necromancy book, H.A.M. book, tankard, and signed portrait (chat option 3).",
        },
        {
          text: "Zavistic gives you a strange potion. Travel back to the guest house north of the guild and use the potion on the cup of tea on the table in Sithik's bedroom.",
        },
        {
          text: "Talk to Sithik Ints in the guest house again for answers (chat options 1, 2, 3, 4 in order).",
        },
      ],
    },
    {
      title: "Defeat Slash Bash",
      steps: [
        {
          text: "Return to Grish in Jiggig (south of Castle Wars) and report your findings (chat option 1).",
        },
        {
          text: "Receive the Ogre gate key from Grish.",
        },
        {
          text: "Ask Grish about easier Zogre killing methods (chat option 2) — he tells you to use ogre bows + brutal arrows.",
        },
        {
          text: "Prepare for the Slash Bash fight (equip your comp ogre bow + brutal arrows, bring food and prayer potions).",
        },
        {
          text: "Go through the two sets of doors south of Grish (use the gate key on the locked one) and descend the stairs into the burial chamber.",
        },
        {
          text: "Search the stand in the centre of the chamber to summon Slash Bash (level 111). Defeat him — he can be safespotted from behind the chamber pillars with ranged.",
        },
        {
          text: "Collect Zogre bones and the Ogre artefact from his corpse.",
        },
        {
          text: "Return to Grish in Jiggig to finish the quest.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3 Ourg bones + 2 Zogre bones",
    "2,000 Fletching experience",
    "2,000 Ranged experience",
    "2,000 Herblore experience",
    "Ability to make Relicym's balm (cures disease)",
    "Ability to fletch comp ogre bows + brutal arrows",
    "Ability to wear inoculation bracelets (so zogres can be hit with regular weapons)",
  ],
};
