import type { QuestWalkthrough } from "../types";

export const beneathCursedSands: QuestWalkthrough = {
  startPoint: "Talk to Jamila at her stall in Sophanem.",
  itemsRequired: [
    "Coal",
    "Iron bar",
    "Tinderbox (obtainable in-quest)",
    "Spade (obtainable in-quest)",
    "Any cooked or raw meat",
  ],
  recommended: [
    "Combat 85+",
    "Desert heat protection (waterskins or Desert amulet 4)",
    "Antipoison",
    "Dramen staff for fairy ring AKP",
    "Pharaoh's sceptre",
    "Sharks/anglers; melee + ranged combat gear",
    "Stamina potions",
  ],
  enemies: [
    "Head Menaphite Guard (level 174) — do NOT use Protect from Melee",
    "2 Scarab Mages (level 119)",
    "Champion of Scabaras (level 379) — ranged + Protect from Magic",
    "Menaphite Akh (level 351) — melee + lightning + summons",
  ],
  sections: [
    {
      title: "Entranced Menaphites",
      steps: [
        { text: "Talk to Jamila at her stall in Sophanem to receive a message." },
        { text: "Travel east of Sophanem to the campsite north of the mining site." },
        { text: "Talk to Maisa at the camp." },
        { text: "Inspect the blocked entry at the Jaltevas Pyramid." },
        { text: "Defeat the Head Menaphite Guard (level 174)." },
        { text: "Return and talk to Maisa." },
      ],
    },
    {
      title: "Ruins of Ullek",
      steps: [
        { text: "Return to Maisa's camp and pick up a tinderbox + spade if needed." },
        { text: "Head south then north to the Ruins of Ullek stairs." },
        { text: "Ignite the furnace with coal + tinderbox." },
        { text: "Search the well for a stone tablet and read it." },
        { text: "Dig in front of the southernmost ritual pillar." },
        { text: "Open the chest with passcode 1118513." },
        { text: "Craft a scarab emblem at the furnace." },
        { text: "Insert the emblem into the pillar; rotate the scarab downward." },
        { text: "Defeat 2 Scarab Mages (level 119)." },
        { text: "Navigate the trap corridor by pulling levers within the time limit." },
        { text: "Disable the traps and proceed west." },
      ],
    },
    {
      title: "Riddle of the tomb",
      steps: [
        { text: "Inspect the south-western plaque to obtain 4 emblems." },
        { text: "Read the north-western plaque for the riddle clues." },
        { text: "Place the emblems in the urns according to the (randomised) riddle solution." },
        { text: "Pull the lever and continue." },
        { text: "Talk to the Spirit and take the rusty key from the urn." },
      ],
    },
    {
      title: "Champion of Scabaras",
      steps: [
        { text: "Return to the Scarab Mage room and unlock the door with the rusty key." },
        { text: "Defeat the Champion (level 379) using Ranged + Protect from Magic." },
        { text: "Destroy the Shadow Rifts quickly when they appear." },
        { text: "Kill scarab swarms before they spawn fire." },
        { text: "Talk to the High Priest of Scabaras." },
      ],
    },
    {
      title: "Cure the Menaphites",
      steps: [
        { text: "Travel to Nardah and talk to Maisa or Zahur." },
        { text: "Buy raw beef if needed from the Nardah General Store." },
        { text: "Head west to the River Elid and the lily island." },
        { text: "Jump stepping stones; throw meat to the crocodile." },
        { text: "Pick a Lily of the Elid." },
        { text: "Return to Zahur to warm the chemistry equipment." },
        { text: "Collect the cure crate and deliver to the High Priest in Sophanem." },
      ],
    },
    {
      title: "Defeat the Menaphite Akh",
      steps: [
        { text: "Travel to the necropolis and talk to Maisa." },
        { text: "Defeat the Menaphite Akh (level 351) using melee — avoid lightning by moving to the side." },
        { text: "Kill the Menaphite Shadows quickly to prevent her switching." },
        { text: "Return to Sophanem and talk to Maisa or the High Priest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "50,000 Agility experience",
    "Access to Tombs of Amascut raid",
    "Keris partisan (huge bonus damage vs. kalphites)",
    "Circlet of water (untradeable helm with waterskin function)",
    "Fairy ring AKP unlocked",
    "Jaltevas teleport on the Pharaoh's sceptre",
  ],
};
