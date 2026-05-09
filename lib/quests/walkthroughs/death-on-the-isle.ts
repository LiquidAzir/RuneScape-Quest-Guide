import type { QuestWalkthrough } from "../types";

export const deathOnTheIsle: QuestWalkthrough = {
  startPoint: "Talk to Patzi by the Villa Lucens entrance (fairy ring CKQ, walk east).",
  itemsRequired: [],
  recommended: ["Combat 40+"],
  enemies: ["Adala (level 49)", "Naiatli (final confrontation)"],
  sections: [
    {
      title: "Get a butler disguise",
      steps: [
        { text: "Break into the house south of Patzi via the window; wait for the guard." },
        { text: "Take the uniform from the wardrobe; talk to Patzi." },
        { text: "Equip the uniform; talk to the Head Butler to enter the villa." },
        { text: "Interview the suspects: Constantinius, Cozyac, Pavo, Xocotla." },
      ],
    },
    {
      title: "Investigate the cellar",
      steps: [
        { text: "Investigate the antique wine; check the man on the south end." },
        { text: "Examine: jug by stairs, small box, broken stool, pottery, Livius's body." },
        { text: "Discuss clues with guards Stradius and Hutza." },
        { text: "Pickpocket all suspects and guards for evidence." },
      ],
    },
    {
      title: "First accusation",
      steps: [
        { text: "Inspect the wine labels, threatening note, shipping contract, and flask." },
        { text: "Accuse Adala (level 49) and fight her." },
      ],
    },
    {
      title: "Final showdown",
      steps: [
        { text: "Access backstage via the cliff shortcut." },
        { text: "Search the crate (poison), bookshelf (passage), and costume rack." },
        { text: "Question the Costumer about actors / passage / costume / poison." },
        { text: "Accuse Naiatli, confront her, and attack on stage." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "10,000 Thieving experience",
    "7,500 Agility experience",
    "5,000 Crafting experience",
    "Costume needle + Butler's tray + masks",
    "Pendant of Ates teleport unlock",
  ],
};
