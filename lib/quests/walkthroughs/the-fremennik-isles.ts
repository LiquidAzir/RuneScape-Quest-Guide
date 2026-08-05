import type { QuestWalkthrough } from "../types";

export const theFremennikIsles: QuestWalkthrough = {
  startPoint:
    "Talk to Mord Gunnars at the northernmost dock of Rellekka. Enchanted lyre or Fremennik sea boots teleport to Rellekka; otherwise fairy ring AJR and run north-west, or Camelot teleport and run north. From the longhall head north-west through the village to the docks — Mord stands on the northern one.",
  itemsRequired: [
    "Raw tuna (for King Sorvott's cat)",
    "Tin/coal/mithril ore (depends on your Mining level — bring enough for the king's tax demand)",
    "9 ropes",
    "Knife",
    "8 split logs (chop arctic pine logs and split them)",
    "Materials for yak-hide armour and Helm of Neitiznot (or buy/craft)",
    "Combat gear and food",
  ],
  recommended: [
    "Combat 50+",
    "Agility 40+ (boostable)",
    "43 Prayer for Protect from Melee on the Ice Troll King",
    "Catspeak amulet (helpful but optional)",
    "Prayer potions and high-tier food",
  ],
  enemies: [
    "10 Ice trolls (level 74-82)",
    "Ice Troll King (level 122) — boss, weak to melee",
  ],
  sections: [
    {
      title: "Get the jester outfit",
      steps: [
        {
          text: "Take the boat from Rellekka to Jatizso by talking to Mord Gunnars on the northernmost Rellekka dock.",
          travel:
            "Enchanted lyre or Fremennik sea boots to Rellekka (fairy ring AJR then north-west, or Camelot teleport then north, if you have neither). Walk north-west through the village to the waterfront and take the northern dock — Mord is the sailor standing on it.",
        },
        {
          text: "Talk to King Gjuki Sorvott IV in his throne room (the chequered-floor room in the building west of the Jatizso bank).",
          travel: "From the Jatizso dock, follow the path west and up into the city; the king's hall is the large building just west of the bank.",
        },
        { text: "Use raw tuna on the king's cat to distract it." },
        { text: "Give the king the ores he demands (varies with your Mining level)." },
        { text: "Take all 4 pieces of the jester outfit from the chest behind the throne." },
      ],
    },
    {
      title: "Spy on Neitiznot for Slug",
      steps: [
        {
          text: "Sail to Neitiznot by talking to Maria Gunnars on the Jatizso docks.",
          travel: "Head back east down to the Jatizso waterfront — Maria stands on the dock right next to where Mord dropped you off.",
        },
        { text: "Equip the full jester outfit." },
        {
          text: "Talk to Slug Hemligssen just north of the Neitiznot bank.",
          travel: "From the Neitiznot dock, run west into the village; the bank is by the main square and Slug loiters immediately north of it.",
        },
        {
          text: "Talk to Mawnis Burowgar in the Neitiznot longhall and follow his cutscene commands (perform jester antics).",
          travel: "The longhall is the large building on the north side of the Neitiznot village square.",
        },
        { text: "Return to Slug Hemligssen north of the Neitiznot bank for 2,500 coins." },
      ],
    },
    {
      title: "Repair the bridges",
      steps: [
        { text: "Unequip your weapon and shield (keep the jester outfit on)." },
        { text: "Talk to Mawnis Burowgar in the Neitiznot longhall for bridge instructions." },
        { text: "Bring 8 ropes and 8 split logs (chop arctic pines on the island and split them with a knife)." },
        {
          text: "Cross the rope bridge north of Neitiznot village and repair the broken east and west bridges, praying Protect from Missiles against the troll archers.",
          travel: "From the longhall run north out of the village and over the rope bridge; the two broken bridges are on the east and west sides of the isle beyond it.",
        },
        { text: "Return to Mawnis Burowgar in the Neitiznot longhall." },
      ],
    },
    {
      title: "Tax collector duty for Sorvott",
      steps: [
        {
          text: "Travel back to Jatizso via Maria Gunnars on the Neitiznot dock.",
          travel: "Run back east through the village to the dock; Maria ferries you both ways.",
        },
        { text: "Talk to King Gjuki Sorvott IV in the hall west of the Jatizso bank." },
        { text: "Collect taxes from the four shopkeepers around Jatizso (the amounts vary)." },
        { text: "Collect smaller taxes from five other NPCs around the island." },
        { text: "Report back to the king." },
      ],
    },
    {
      title: "Defeat the Ice Troll King",
      steps: [
        {
          text: "Return to the Neitiznot longhall and equip the jester outfit for another performance for Mawnis.",
          travel: "Maria Gunnars on the Jatizso dock back to Neitiznot, then west into the village to the longhall.",
        },
        {
          text: "Get a royal decree from King Sorvott on Jatizso.",
          travel: "Maria's boat back to Jatizso, then up to the king's hall west of the bank.",
        },
        { text: "Equip yak-hide armour and a Neitiznot shield (the shield heavily reduces the boss's damage)." },
        {
          text: "Travel to the northern ice caves with full combat gear.",
          travel:
            "Back to Neitiznot, run north out of the village over the rope bridge and across the repaired bridges to the farthest north isle; the cave entrance is on its eastern side. It is multicombat, so pray Protect from Melee on the way in.",
        },
        { text: "Defeat the 10 ice trolls then the Ice Troll King (level 122) with melee." },
        { text: "Decapitate the troll king's corpse." },
        {
          text: "Return to Mawnis Burowgar in the Neitiznot longhall.",
          travel: "Run back south over the bridges into Neitiznot village; the longhall is on the north side of the square.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Construction experience",
    "5,000 Crafting experience",
    "10,000 Woodcutting experience",
    "20,000 split combat experience (Strength/Attack/Defence/Hitpoints)",
    "Helm of Neitiznot (+3 Prayer, equivalent to Berserker helm)",
    "Access to arctic pines, runite/coal rocks island and Jatizso adamantite mine",
    "Ability to craft yak-hide armour and Neitiznot shields",
  ],
};
