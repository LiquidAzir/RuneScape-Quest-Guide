import type { QuestWalkthrough } from "../types";

export const theFremennikIsles: QuestWalkthrough = {
  startPoint: "Talk to Mord Gunnars at the northernmost dock of Rellekka.",
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
        { text: "Take the boat from Rellekka to Jatizso with Mord Gunnars." },
        { text: "Talk to King Gjuki Sorvott IV in the throne room (checkered floor)." },
        { text: "Use raw tuna on the king's cat to distract it." },
        { text: "Give the king the ores he demands (varies with your Mining level)." },
        { text: "Take all 4 pieces of the jester outfit from the chest." },
      ],
    },
    {
      title: "Spy on Neitiznot for Slug",
      steps: [
        { text: "Travel to Neitiznot via Maria Gunnars from the docks." },
        { text: "Equip the full jester outfit." },
        { text: "Talk to Slug Hemligssen north of the bank." },
        { text: "Talk to Mawnis Burowgar in the Neitiznot longhall and follow his cutscene commands (perform jester antics)." },
        { text: "Return to Slug Hemligssen north of the Neitiznot bank for 2,500 coins." },
      ],
    },
    {
      title: "Repair the bridges",
      steps: [
        { text: "Unequip your weapon and shield (keep the jester outfit on)." },
        { text: "Talk to Mawnis Burowgar for bridge instructions." },
        { text: "Bring 8 ropes and 8 split logs (chop arctic pines and split with a knife)." },
        { text: "Use Protect from Missiles while repairing the east and west bridges." },
        { text: "Return to Mawnis Burowgar in the Neitiznot longhall." },
      ],
    },
    {
      title: "Tax collector duty for Sorvott",
      steps: [
        { text: "Travel back to Jatizso." },
        { text: "Talk to King Gjuki Sorvott IV in the western building." },
        { text: "Collect taxes from the four shopkeepers (the amounts vary)." },
        { text: "Collect smaller taxes from five other NPCs around the island." },
        { text: "Report back to the king." },
      ],
    },
    {
      title: "Defeat the Ice Troll King",
      steps: [
        { text: "Return to Neitiznot longhall and equip the jester outfit for another performance for Mawnis." },
        { text: "Get a royal decree from King Sorvott on Jatizso." },
        { text: "Equip yak-hide armour and a Neitiznot shield." },
        { text: "Travel to the northern ice caves with full combat gear." },
        { text: "Defeat the 10 ice trolls then the Ice Troll King (level 122) with melee." },
        { text: "Decapitate the troll king's corpse." },
        { text: "Return to Mawnis Burowgar in the Neitiznot longhall." },
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
