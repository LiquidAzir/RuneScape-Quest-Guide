import type { QuestWalkthrough } from "../types";

export const theFremennikTrials: QuestWalkthrough = {
  startPoint:
    "Talk to Brundt the Chieftain inside the Rellekka longhall (the large central building in Rellekka). Camelot teleport and run north-west past the Sinclair Mansion, or fairy ring AJR (slayer cave south-east of Rellekka) and run north-west.",
  itemsRequired: [
    "5,250 coins (5,000 for Askeladden + 250 for the low-alcohol keg)",
    "Beer (or buy one at the Rellekka pub for 2gp)",
    "Tinderbox",
    "Raw shark / manta ray / sea turtle (high-tier raw fish for the lyre enchant)",
    "Materials for an unstrung lyre OR drop one from a Fremennik warrior in Rellekka",
  ],
  recommended: [
    "Combat 40+ for the warrior trial vs. Koschei",
    "48 Agility (boostable) for the seer trial water puzzle",
    "25 Fletching, 40 Woodcutting, 40 Crafting if making a lyre yourself",
    "Camelot teleport for fast travel to/from Rellekka",
    "Some food and prayer potions for the warrior trial",
  ],
  enemies: [
    "Koschei the Deathless (3 forms, levels 49 / 89 / 121) — fought unarmed in the warrior trial",
    "The Draugen (level 69) — the hunter-trial target hidden as a butterfly",
    "Optional Fremennik warriors (level 48) when killing for an unstrung lyre",
  ],
  sections: [
    {
      title: "Trials introduction",
      steps: [
        {
          text: "Travel to Rellekka and enter the longhall in the village centre.",
          travel:
            "Camelot teleport, then run north-west out of Seers' Village past the Sinclair Mansion and over the Fremennik border. Fairy ring AJR (slayer cave south-east of Rellekka) then north-west also works; after this quest the enchanted lyre teleports straight into the village.",
        },
        {
          text: "Talk to Brundt the Chieftain inside the longhall to begin.",
        },
        {
          text: "Talk to Manni the Reveller (also inside the longhall, sitting at the head table) and lose his drinking contest — buys you time to prepare.",
        },
        {
          text: "Talk to Sigli the Huntsman standing outside just south of the longhall entrance to receive the hunters' talisman.",
        },
        {
          text: "Walk east of the longhall to Olaf the Bard's hut and talk to him about the lyre.",
          travel: "Leave the longhall by the front door and head a short way east — his is the small hut nearest the longhall.",
        },
      ],
    },
    {
      title: "Bard trial — make and enchant a lyre",
      steps: [
        {
          text: "Either craft an unstrung lyre yourself (25 Fletching using maple/yew logs + bow string and a knife, plus 40 Woodcutting + 40 Crafting requirements) or kill a Fremennik warrior in the Rellekka village square for one.",
        },
        {
          text: "Trade Lalli the troll his veggies (potato, onion, dwellberries) plus a pet rock for a golden fleece.",
          travel:
            "Leave Rellekka by the east entrance and follow the path to the Swaying Tree; Lalli's little camp is just south-east of it, on the way up to the Mountain Camp.",
        },
        {
          text: "Spin the golden fleece into golden wool on the spinning wheel upstairs in the house south-west of the Seers' Village bank.",
          travel:
            "Camelot teleport, run east to the Seers' Village bank, then take the house south-west of it and climb the staircase to the wheel.",
        },
        {
          text: "Use the golden wool on the unstrung lyre to make a finished lyre.",
        },
        {
          text: "While in Seers' Village, buy a Low alcohol keg from the Poison Salesman in the Seers' Village pub for 250gp.",
          travel: "The pub is the building just north of the Seers' Village bank; the salesman stands inside.",
        },
        {
          text: "Travel back to Rellekka and use a beer on the council workman blocking the south bridge — he passes out so you can cross.",
          travel: "Camelot teleport and run north-west again; the bridge is on the southern edge of Rellekka.",
        },
        {
          text: "Cross the bridge and follow the narrow spit of land into the water to the strange altar, then use a high-tier raw fish (raw shark / manta ray / sea turtle) on it to enchant the lyre.",
          travel: "South-west of Rellekka — the altar sits beside the giant rib cage sticking out of the shallows.",
        },
      ],
    },
    {
      title: "Hunter trial + finishing Bard",
      steps: [
        {
          text: "Equip the hunters' talisman; it makes the Draugen visible. The Draugen disguises itself as a colourful butterfly somewhere outside the Rellekka longhall — find and kill it.",
          travel: "Run back north into Rellekka; the butterfly flits around the open ground surrounding the longhall.",
        },
        {
          text: "Light a 'strange object' (gathered earlier in the trials) with a tinderbox and use it on the longhall pipe on the outside south wall to smoke Manni's drinking contestants out.",
        },
        {
          text: "Enter the longhall back door, climb on the stage at the back, and play the enchanted lyre.",
        },
        {
          text: "Switch beer kegs at Manni's table — give him the low alcohol keg in place of his strong one — then beat him in the drinking contest.",
        },
      ],
    },
    {
      title: "Merchant trial",
      steps: [
        {
          text: "Talk to all the council members around Rellekka about the merchant's trial to gather information (Sigli, Olaf, Manni, Thorvald, Peer, Swensen, Askeladden's father).",
        },
        {
          text: "Find Askeladden loitering just outside the longhall entrance and pay him 5,000 coins to learn the merchant's secret.",
        },
      ],
    },
    {
      title: "Warrior trial — Koschei",
      steps: [
        {
          text: "BANK ALL weapons, armour, and combat runes — Thorvald's chamber strips them.",
        },
        {
          text: "Bring a dramen branch or celastrus bark — these technically aren't classified as weapons so they pass the strip check, but you can wield them inside.",
        },
        {
          text: "Talk to Thorvald the Warrior in his hut just north of the longhall, then descend into his chamber.",
        },
        {
          text: "Equip your dramen branch as a makeshift weapon.",
        },
        {
          text: "Fight Koschei the Deathless and beat his first 3 forms (each form is tougher).",
        },
        {
          text: "On his fourth form, either let him kill you (you respawn safely outside) or fight him out — both finish the trial.",
        },
        {
          text: "Talk to Thorvald the Warrior in his hut north of the longhall to claim the trial.",
        },
      ],
    },
    {
      title: "Seer trial — Peer's puzzle",
      steps: [
        {
          text: "Talk to Peer the Seer in his house south-west of the Rellekka market. He deposits your inventory before you start.",
          travel: "From the longhall head west to the market stalls, then south-west — his is the house with the green bed.",
        },
        {
          text: "Inside the puzzle: gather a bucket, disks, jug and red herring from the various containers around his house.",
        },
        {
          text: "Use the red herring on the cooking range to make sticky red goop.",
        },
        {
          text: "Solve the water-filling puzzle: use the bucket and jug at the water barrel to measure out exactly the required amount (use disks to control the flow).",
        },
        {
          text: "Use the goop to freeze the sealed vase, then use the frozen key on the cooking range to thaw it.",
        },
        {
          text: "Exit Peer's house through the front door to complete the trial.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Brundt the Chieftain inside the Rellekka longhall.",
          travel: "North-east from Peer's house, back to the big building in the middle of the village.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "2,812 experience in 10 different skills (Attack, Strength, Defence, Magic, Crafting, Fletching, Thieving, Woodcutting, Agility, Fishing)",
    "Access to Miscellania, Etceteria, Neitiznot, and Jatizso (the Fremennik islands)",
    "Ability to wear Fremennik blade and Fremennik helms",
    "Use of the enchanted lyre as a Rellekka teleport (rechargeable at the strange altar with raw fish)",
  ],
};
