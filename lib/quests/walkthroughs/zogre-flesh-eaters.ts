import type { QuestWalkthrough } from "../types";

export const zogreFleshEaters: QuestWalkthrough = {
  startPoint: "Talk to Grish in Jiggig (south of Castle Wars).",
  itemsRequired: [
    "Knife (in-quest)",
    "Comp ogre bow (or wolf bones + achey logs + axe + bow string to make one)",
    "Brutal arrows (or achey logs + nails + hammer + feathers to make some)",
  ],
  recommended: [
    "Combat 45+",
    "43+ Prayer for protection prayers",
    "Strength potion + Relicym's balm or Sanfew serum",
    "30+ Fletching (boostable)",
  ],
  enemies: [
    "Slash Bash (level 111) — boss, safespottable; uses ranged + melee",
    "Zombie (level 39)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Grish in Jiggig, south of Castle Wars, (chat: 2, 4, 1) and offer help." },
        { text: "Receive 2 Super restore potions and 3 cooked chompy birds." },
        { text: "Talk to the Ogre guard at the Jiggig barricade to remove it." },
        { text: "Climb over the crushed barricade and go down the stairs." },
      ],
    },
    {
      title: "The cave",
      steps: [
        { text: "Travel north-west to the blackened floor area." },
        { text: "Search the skeleton by the broken lectern; defeat a zombie." },
        { text: "Open the ruined backpack for a Dragon inn tankard and a knife." },
        { text: "Search the broken lectern for a torn page." },
        { text: "Use the knife on the coffin west of the skeleton." },
        { text: "Open the coffin and search for a black prism." },
      ],
    },
    {
      title: "Yanille investigation",
      steps: [
        { text: "Go to the Dragon Inn; use the tankard on the bartender." },
        { text: "Talk to Zavistic Rarve in the Wizards' Guild (chat: 1)." },
        { text: "Visit Sithik Ints in the guest house north of the guild (chat: 3)." },
        { text: "Search drawers, cupboard, and wardrobe for books and items." },
        { text: "Read all 3 books and use them on Sithik." },
        { text: "Use papyrus on Sithik then on the portrait (specify realist charcoal)." },
      ],
    },
    {
      title: "Expose Sithik",
      steps: [
        { text: "Return to the Dragon Inn; use the tankard then the portrait on the bartender." },
        { text: "He signs the portrait as an affidavit." },
        {
          text: "Talk to Zavistic while holding the necromancy book, H.A.M. book, tankard, and signed portrait (chat: 3).",
        },
        { text: "Receive a strange potion; use it on a cup of tea in Sithik's bedroom." },
        { text: "Talk to Sithik Ints in the Dragon Inn in Yanille again for answers (chat: 1, 2, 3, 4)." },
      ],
    },
    {
      title: "Defeat Slash Bash",
      steps: [
        { text: "Return to Grish; report findings (chat: 1)." },
        { text: "Receive the Ogre gate key." },
        { text: "Ask Grish about easier Zogre killing methods (chat: 2)." },
        { text: "Prepare for the Slash Bash fight (use ogre bow + brutal arrows)." },
        { text: "Go through the two sets of doors and down the stairs." },
        { text: "Search the stand and defeat Slash Bash (level 111)." },
        { text: "Collect Zogre bones and an Ogre artefact." },
        { text: "Return to Grish in Jiggig (south of Castle Wars) to complete the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3 Ourg bones + 2 Zogre bones",
    "2,000 Fletching + Ranged + Herblore experience each",
    "Ability to make Relicym's balm (cures disease)",
    "Ability to fletch comp ogre bows + brutal arrows",
    "Ability to wear inoculation bracelets (zogre kills with regular weapons)",
  ],
};
