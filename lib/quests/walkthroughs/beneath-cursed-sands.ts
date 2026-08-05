import type { QuestWalkthrough } from "../types";

export const beneathCursedSands: QuestWalkthrough = {
  startPoint:
    "Talk to Jamila at her stall in Sophanem, the walled city in the far south of the Kharidian Desert. Pharaoh's sceptre → Jalsavrah puts you in the Sophanem pyramid — walk out into the city. Otherwise take the magic carpet from Shantay Pass to Pollnivneach, then the Sophanem carpet. Bring waterskins or a Desert amulet 4.",
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
        {
          text: "Talk to Jamila at her stall in Sophanem to receive a message.",
          travel:
            "Pharaoh's sceptre → Jalsavrah lands you inside the Sophanem pyramid; walk out into the city. No sceptre: magic carpet from Shantay Pass to Pollnivneach, then the carpet to Sophanem. Carry waterskins for the desert heat.",
        },
        {
          text: "Talk to Maisa at the campsite east of Sophanem, north of the mining site.",
          travel:
            "Leave Sophanem by the east gate and follow the sand track east into the Necropolis approach — the tents are on the rise north of the quarry workings.",
        },
        { text: "Inspect the blocked entry at the Jaltevas Pyramid just south of the camp." },
        { text: "Defeat the Head Menaphite Guard (level 174) that ambushes you." },
        { text: "Return and talk to Maisa at the camp." },
      ],
    },
    {
      title: "Ruins of Ullek",
      steps: [
        { text: "Pick up a tinderbox and spade from Maisa's camp if you need them." },
        {
          text: "Travel east to the Ruins of Ullek and climb down the stairs into the ruined city.",
          travel:
            "From Maisa's camp head south around the cliffs then north-east along the coast — Ullek is the ruined city on the desert's south-east shore. Fairy ring AKP (unlocked by this quest) is the quick way back for return trips.",
        },
        { text: "Ignite the furnace in the ruins with coal + tinderbox." },
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
        { text: "Talk to the Spirit in the Scabaras tomb room and take the rusty key from the urn." },
      ],
    },
    {
      title: "Champion of Scabaras",
      steps: [
        { text: "Return to the Scarab Mage room and unlock the door with the rusty key." },
        { text: "Defeat the Champion (level 379) using Ranged + Protect from Magic." },
        { text: "Destroy the Shadow Rifts quickly when they appear." },
        { text: "Kill scarab swarms before they spawn fire." },
        { text: "Talk to the High Priest of Scabaras in the tomb room afterwards." },
      ],
    },
    {
      title: "Cure the Menaphites",
      steps: [
        {
          text: "Travel to Nardah and talk to Maisa or Zahur.",
          travel:
            "Magic carpet: Shantay Pass to Pollnivneach, then Pollnivneach to Nardah. Zahur runs the herb shop on the west side of Nardah, near the fountain.",
        },
        { text: "Buy raw beef from the Nardah general store if you did not bring meat." },
        {
          text: "Head west out of Nardah to the River Elid and the lily island.",
          travel: "Leave Nardah by the west gate and run west to the riverbank; the island is out in the middle of the River Elid.",
        },
        { text: "Jump the stepping stones across and throw the meat to the crocodile." },
        { text: "Pick a Lily of the Elid." },
        {
          text: "Return to Zahur in her Nardah herb shop to warm the chemistry equipment.",
          travel: "Cross back over the stepping stones and run east into Nardah.",
        },
        {
          text: "Collect the cure crate and deliver it to the High Priest in Sophanem.",
          travel:
            "Magic carpet from Nardah back to Pollnivneach, then the Sophanem carpet (or Pharaoh's sceptre → Jalsavrah). The High Priest is in the temple in the centre of Sophanem.",
        },
      ],
    },
    {
      title: "Defeat the Menaphite Akh",
      steps: [
        {
          text: "Travel to the Necropolis east of Sophanem and talk to Maisa.",
          travel:
            "Fairy ring AKP drops you in the Necropolis. Otherwise leave Sophanem by the east gate and follow the sand track east past Maisa's old camp.",
        },
        { text: "Defeat the Menaphite Akh (level 351) using melee — avoid the lightning by stepping to the side." },
        { text: "Kill the Menaphite Shadows quickly to prevent her switching." },
        {
          text: "Return to Sophanem Palace and talk to Maisa or the High Priest.",
          travel: "Pharaoh's sceptre → Jalsavrah, or run west back through the Sophanem east gate; the palace is the large building in the north of the city.",
        },
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
