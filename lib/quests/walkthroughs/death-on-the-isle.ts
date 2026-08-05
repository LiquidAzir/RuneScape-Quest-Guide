import type { QuestWalkthrough } from "../types";

export const deathOnTheIsle: QuestWalkthrough = {
  startPoint:
    "Talk to Patzi by the entrance to Villa Lucens on Aldarin, in south-west Varlamore. Fairy ring CKQ lands you at Aldarin — run east to the villa gates. Alternatives: the Mastering Mixology minigame teleport (Herblore 60), or Antonia's boat from the Sunset Coast for 20 coins.",
  itemsRequired: [],
  recommended: ["Combat 40+"],
  enemies: ["Adala (level 49)", "Naiatli (final confrontation)"],
  sections: [
    {
      title: "Get a butler disguise",
      steps: [
        {
          text: "Talk to Patzi by the Villa Lucens entrance, then break into the house south of her via the window and wait for the guard to pass.",
          travel:
            "Fairy ring CKQ (Aldarin), then run east to the villa entrance. No fairy ring: Mastering Mixology minigame teleport, or sail with Antonia from the Sunset Coast (20gp). The house is the first one south of where Patzi stands.",
        },
        { text: "Take the uniform from the wardrobe; talk to Patzi." },
        { text: "Equip the uniform; talk to the Head Butler at the villa doors to get inside." },
        { text: "Interview the suspects inside the villa: Constantinius, Cozyac, Pavo, Xocotla." },
      ],
    },
    {
      title: "Investigate the cellar",
      steps: [
        {
          text: "Head down into the villa cellar, investigate the antique wine and check the man at the south end.",
          travel: "The cellar stairs are inside Villa Lucens — take them down from the ground floor of the villa.",
        },
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
        {
          text: "Reach the theatre backstage via the cliff shortcut.",
          travel:
            "From the villa head south down the steps that wind around the cliffs; take the 'loose rocks' agility shortcut, then follow the guards' directions to the backstage door.",
        },
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
