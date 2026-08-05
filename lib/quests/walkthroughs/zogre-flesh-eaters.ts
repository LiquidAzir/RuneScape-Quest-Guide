import type { QuestWalkthrough } from "../types";

export const zogreFleshEaters: QuestWalkthrough = {
  startPoint:
    "Talk to Grish beside the central burial pit in Jiggig, the ruined ogre village south of Castle Wars and west of Yanille. Fairy ring CIR lands you right in Jiggig; otherwise ring of dueling to Castle Wars and run south.",
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
    "Fairy ring access (CIR) — you shuttle between Jiggig and Yanille several times",
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
          text: "Talk to Grish near the central burial pit in Jiggig — chat options 2, 4, 1 — and offer to help.",
          travel:
            "Fairy ring CIR drops you at Jiggig's doorstep. No fairy ring: ring of dueling to Castle Wars and run south to the ruined ogre village, or run west out of Yanille and follow the path.",
        },
        {
          text: "Take the 2 Super restore potions and 3 cooked chompy birds Grish gives you.",
        },
        {
          text: "Talk to the Ogre guard at the barricade just south of Grish and ask him to remove the boards blocking the burial pit.",
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
          text: "Head north-west inside the cave to the blackened, scorched floor area.",
        },
        {
          text: "Search the skeleton on the floor near the broken lectern. A Zombie (level 39) attacks — defeat it.",
        },
        {
          text: "Open the ruined backpack next to the skeleton and take the Dragon Inn tankard and the knife.",
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
          text: "Travel to Yanille and use the Dragon Inn tankard on the bartender behind the counter of the Dragon Inn.",
          travel:
            "Leave the Jiggig cave and run east along the path — Yanille's west wall is a short run away. Coming back from elsewhere, a charter ship to Port Khazard and a run south, or Watchtower Teleport once you have it, also reach Yanille.",
        },
        {
          text: "Walk to the Wizards' Guild in southern Yanille and talk to Zavistic Rarve on the ground floor (chat option 1) about the prism.",
        },
        {
          text: "Go to the small guest house just north of the Wizards' Guild and talk to Sithik Ints inside (chat option 3).",
        },
        {
          text: "While in the guest house, search the drawers, cupboard and wardrobe for 3 books (a necromancy book and a H.A.M. book among them) plus a piece of papyrus and charcoal.",
        },
        {
          text: "Read all 3 books, then use each book on Sithik in turn to confront him about each topic.",
        },
        {
          text: "Use the papyrus on Sithik so he draws his portrait, then use papyrus on the portrait on his wall — choose the realist charcoal style when prompted.",
        },
      ],
    },
    {
      title: "Expose Sithik",
      steps: [
        {
          text: "Return to the Dragon Inn and use the Dragon Inn tankard and then the portrait on the bartender.",
          travel: "Walk north from the guest house back through Yanille to the pub.",
        },
        {
          text: "The bartender signs the portrait as an affidavit.",
        },
        {
          text: "Take all 4 items — necromancy book, H.A.M. book, tankard and signed portrait — to Zavistic Rarve in the Wizards' Guild (chat option 3).",
          travel: "Run back south through Yanille to the Wizards' Guild.",
        },
        {
          text: "Zavistic gives you a strange potion. Go back to the guest house north of the guild and use the potion on the cup of tea on the table in Sithik's bedroom.",
        },
        {
          text: "Talk to Sithik Ints again for answers (chat options 1, 2, 3, 4 in order).",
        },
      ],
    },
    {
      title: "Defeat Slash Bash",
      steps: [
        {
          text: "Return to Grish in Jiggig and report your findings (chat option 1).",
          travel:
            "Fairy ring CIR is the fastest way back to Jiggig. Otherwise leave Yanille by the west side and run west along the path, or ring of dueling to Castle Wars and run south.",
        },
        {
          text: "Take the Ogre gate key from Grish.",
        },
        {
          text: "Ask Grish about easier Zogre killing methods (chat option 2) — he tells you to use ogre bows and brutal arrows.",
        },
        {
          text: "Prepare for the Slash Bash fight: equip your comp ogre bow and brutal arrows, and bring food and prayer potions.",
        },
        {
          text: "Go through the two sets of doors south of Grish (use the gate key on the locked one) and descend the stairs into the burial chamber.",
        },
        {
          text: "Search the stand in the centre of the chamber to summon Slash Bash (level 111) and defeat him — he can be safespotted from behind the chamber pillars with ranged.",
        },
        {
          text: "Collect the Zogre bones and the Ogre artefact from his corpse.",
        },
        {
          text: "Return to Grish at the burial pit in Jiggig to finish the quest.",
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
