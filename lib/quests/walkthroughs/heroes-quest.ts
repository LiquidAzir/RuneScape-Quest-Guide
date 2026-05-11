import type { QuestWalkthrough } from "../types";

export const heroesQuest: QuestWalkthrough = {
  startPoint: "Talk to Achietties outside the Heroes' Guild (between Taverley and Burthorpe). You need 55 QP and to be in either the Phoenix or Black Arm Gang.",
  itemsRequired: [
    "Fishing rod",
    "Fishing bait",
    "Harralander potion (unfinished)",
    "Pickaxe",
    "Hammer",
    "Combat gear and food for Ice Queen",
    "If Black Arm: full black armour set",
    "If Phoenix: ranged or magic for the Phoenix Mansion run",
  ],
  recommended: [
    "Combat 50+",
    "Anti-dragon shield + antifire (if running through blue dragons in Taverley)",
    "Stamina potions",
    "Skills necklace, Combat bracelet, Camelot/Brimhaven teleports",
    "A partner from the opposite gang to swap items with — coordinate before starting",
  ],
  enemies: [
    "Ice Queen (level 111) — boss",
    "Entrana firebird (level 2)",
    "Grip (level 22) — Phoenix Gang only",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the Heroes' Guild and talk to Achietties." },
        { text: "Choose either the Phoenix or Black Arm Gang (whichever you joined during Shield of Arrav)." },
        { text: "She tells you to bring her a lava eel, a fire feather, and a thieves' armband." },
      ],
    },
    {
      title: "The lava eel",
      steps: [
        { text: "Talk to Gerrant in the Port Sarim fish shop. Get an eel and a blamish snail slime hint." },
        { text: "Make blamish oil: use blamish snail slime on a harralander potion (unfinished)." },
        { text: "Use the blamish oil on a fishing rod to make an oily fishing rod." },
        {
          text: "Travel to Taverley dungeon and navigate past the blue dragons to the lava pool in the south-west.",
          notes: ["Use anti-dragon shield. Pick up the dusty key from Velrak the explorer if you don't have one — but for the lava eel spot you don't actually need to go through the locked gate."],
        },
        { text: "Fish a lava eel with the oily rod and fishing bait." },
      ],
    },
    {
      title: "The thieves' armband",
      steps: [
        { text: "Find a partner from the opposite gang (the candlestick objective requires teamwork)." },
        {
          text: "Black Arm path: speak to Katrine in Varrock, then Trobert in Brimhaven. Wear full black armour to enter the Phoenix mansion in Brimhaven and steal the candlestick.",
        },
        {
          text: "Phoenix path: speak to Straven in Varrock. Travel to Brimhaven and pickpocket the candlestick from Carnillean's house (your partner must be inside fighting).",
        },
        { text: "Trade candlesticks with your partner — each gang needs the OPPOSITE gang's candlestick to clear the quest." },
        { text: "Return your candlestick to Katrine (Black Arm) or Straven (Phoenix) for the thieves' armband." },
      ],
    },
    {
      title: "The fire feather (and ice gloves)",
      steps: [
        {
          text: "Mine the rockslide on the Death Plateau path west of Burthorpe (50 Mining required).",
          notes: ["This leads into the Ice Queen's lair."],
        },
        { text: "Navigate the tunnels to the Ice Queen and defeat her (level 111)." },
        { text: "Pick up the ice gloves from her body." },
        { text: "Equip the ice gloves and travel to Entrana (no weapons/armour allowed except gloves)." },
        { text: "Find the firebird near the Law altar on Entrana, kill it, and pick up the fire feather (gloves prevent burning)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Achietties outside the Heroes' Guild (between Taverley and Burthorpe) with the lava eel, fire feather, and thieves' armband." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to the Heroes' Guild (and the Dragon battleaxe)",
    "Big experience dump across many skills (~3,000 in each combat skill, 2,725 Fishing, 2,825 Cooking, 2,575 Mining, 2,275 Smithing, etc.)",
    "Use of the Fountain of Heroes for charging amulets of glory",
  ],
};
