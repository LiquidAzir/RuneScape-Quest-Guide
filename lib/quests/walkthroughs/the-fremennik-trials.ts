import type { QuestWalkthrough } from "../types";

export const theFremennikTrials: QuestWalkthrough = {
  startPoint: "Talk to Brundt the Chieftain in the Rellekka longhall.",
  itemsRequired: [
    "5,250 coins",
    "Beer (or buy one in Rellekka)",
    "Tinderbox",
    "Raw shark / manta ray / sea turtle (high-tier raw fish for the lyre enchant)",
    "Materials for an unstrung lyre OR drop one from a Fremennik warrior",
  ],
  recommended: [
    "Combat 40+",
    "48 Agility (boostable)",
    "25 Fletching, 40 Woodcutting, 40 Crafting if making a lyre yourself",
    "Camelot teleport for fast travel",
    "Some food and prayer potions for the warrior trial",
  ],
  enemies: [
    "Koschei the Deathless (3 forms in the warrior trial)",
    "The Draugen (level 69)",
    "Optional Fremennik warriors (level 48) when getting a lyre",
  ],
  sections: [
    {
      title: "Trials introduction",
      steps: [
        { text: "Talk to Brundt the Chieftain in the Rellekka longhall." },
        { text: "Talk to Manni the Reveller (also in the longhall) and lose his drinking contest." },
        { text: "Talk to Sigli the Huntsman outside to get the hunters' talisman." },
        { text: "Talk to Olaf the Bard east of the longhall about the lyre." },
      ],
    },
    {
      title: "Bard trial — make and enchant a lyre",
      steps: [
        {
          text: "Either craft an unstrung lyre (25 Fletching, 40 Woodcutting, 40 Crafting) or kill a Fremennik warrior for one.",
        },
        {
          text: "Make a golden fleece via Lalli's stew (gather his veggies + a pet rock and bring to him).",
        },
        { text: "Spin the golden fleece into golden wool at Seers' Village." },
        { text: "Use the golden wool on the unstrung lyre to make a lyre." },
        { text: "Buy a Low alcohol keg from the Poison Salesman in the Seers' Village pub for 250gp." },
        { text: "Use a beer on the council workman by the Rellekka bridge." },
        { text: "Find the strange altar south of the bridge and use a high-tier raw fish on it to enchant the lyre." },
      ],
    },
    {
      title: "Hunter + Bard trials",
      steps: [
        { text: "Use the hunters' talisman to find and kill The Draugen (which appears as a butterfly at first)." },
        { text: "Light a strange object with a tinderbox and use it on the longhall pipe outside to drive Manni's contestants away." },
        { text: "Enter the longhall back door, climb on stage, and play the enchanted lyre." },
        { text: "Switch beer kegs (give Manni the low alcohol keg) and beat him in the drinking contest." },
      ],
    },
    {
      title: "Merchant trial",
      steps: [
        { text: "Talk to all council members about the merchant's trial to gather information." },
        { text: "Pay Askeladden 5,000 coins to learn the secret." },
      ],
    },
    {
      title: "Warrior trial — Koschei",
      steps: [
        {
          text: "BANK all weapons, armour and combat runes — none allowed in Thorvald's chamber.",
          notes: ["Bring a dramen branch or celastrus bark — these count as 'not weapons' but you can wield them."],
        },
        { text: "Descend into Thorvald's chamber and equip your branch as a weapon." },
        { text: "Fight Koschei the Deathless and beat his first three forms." },
        { text: "Either let his fourth form kill you (you'll wake up unhurt) or kill it yourself." },
        { text: "Talk to Thorvald to finish this trial." },
      ],
    },
    {
      title: "Seer trial — Peer's puzzle",
      steps: [
        { text: "Talk to Peer the Seer to deposit your inventory." },
        {
          text: "Solve the riddle: gather a bucket, disks, jug and red herring from various containers.",
        },
        { text: "Use the red herring on the cooking range for sticky red goop." },
        {
          text: "Solve the precise water-filling puzzle with the bucket and jug to get exactly the required amount.",
        },
        { text: "Freeze the sealed vase, then use the frozen key on the cooking range." },
        { text: "Exit Peer's house to complete the trial." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Brundt the Chieftain in the longhall." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "2,812 experience in 10 different skills",
    "Access to Miscellania, Etceteria, Neitiznot and Jatizso",
    "Ability to wear Fremennik blade and helms",
    "Use of the enchanted lyre as Rellekka teleport",
  ],
};
