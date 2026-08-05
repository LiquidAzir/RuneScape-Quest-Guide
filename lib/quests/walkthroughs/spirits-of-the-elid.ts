import type { QuestWalkthrough } from "../types";

export const spiritsOfTheElid: QuestWalkthrough = {
  startPoint:
    "Talk to Awusah the Mayor in his house in northern Nardah. Get to Nardah with a Desert amulet (Nardah teleport), fairy ring DLQ then run south, or the magic carpet chain from Shantay Pass to Pollnivneach and on to Nardah. Bring waterskins — the desert drains run energy.",
  itemsRequired: [
    "Air rune + Law rune (for Telekinetic Grab)",
    "Needle (regular, not costume needle)",
    "1-2 thread",
    "Crush, stab, AND slash weapons (a Hasta or Bladed Staff covers all 3)",
    "Light source",
    "Knife",
    "Rope",
    "Pickaxe",
    "Ranged or magic attack",
  ],
  recommended: [
    "Combat 40+",
    "Desert robes and waterskins",
    "Nardah teleport (or magic carpet)",
    "Some food",
  ],
  enemies: [
    "White golem (level 75) — weak to stab",
    "Grey golem (level 75) — weak to slash",
    "Black golem (level 75) — weak to crush",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Awusah the Mayor in his house in northern Nardah.",
          travel:
            "Desert amulet (Nardah teleport) drops you in the town square; fairy ring DLQ then run south also works. No teleports: Shantay Pass, magic carpet to Pollnivneach, then a second carpet to Nardah. Awusah's is the large house in the north of town.",
        },
        {
          text: "Talk to Ghaslor the Elder in his house in Nardah and accept the ballad.",
          travel: "Ghaslor lives in the small house in the south-west of Nardah, near the general store.",
        },
        { text: "Search the north-west cupboard in Ghaslor's house for the torn robe top and bottom." },
        { text: "Mend the robes with needle and thread; equip them." },
        { text: "Use Telekinetic Grab on the ancestral key on the table." },
      ],
    },
    {
      title: "Water Ravine Dungeon",
      steps: [
        {
          text: "Follow the River Elid north-west out of Nardah to the waterfall cave entrance.",
          travel:
            "Leave Nardah by the north-west gate and hug the river upstream; the entrance is the gap beside the waterfall where a root hangs over the ledge, roughly halfway between Nardah and the Water Ravine.",
        },
        { text: "Use a rope on the root to descend." },
        { text: "Equip the robes and use the ancestral key on the door." },
        { text: "Kill the white golem (stab) and clear the channel via Thieving." },
        { text: "Kill the grey golem (slash) and clear the channel with a pickaxe." },
        { text: "Kill the black golem (crush) and clear the channel with ranged or magic." },
        { text: "Talk to the spirit in the Elid cave and confirm you have freed the river." },
        {
          text: "Return to the town centre in Nardah, by the mayor's house.",
          travel: "Climb back out of the dungeon and run south-east along the river to Nardah, or teleport in with a Desert amulet / fairy ring DLQ.",
        },
      ],
    },
    {
      title: "Genie quest",
      steps: [
        { text: "Talk to Awusah the Mayor in Nardah again." },
        { text: "Take the shoes by his door and cut them with a knife to get the sole." },
        {
          text: "Run west out of Nardah from the general store to the crevice in the desert sand.",
          travel: "From Nardah's general store head due west out of the town gate; the crevice is a short run across the open sand, marked by a small rocky opening.",
        },
        { text: "Use a rope on the crevice to descend, then go through the door at the bottom." },
        { text: "Talk to the Genie in the cave below the crevice." },
        { text: "Talk to the Genie again to receive the Elidinis statuette." },
        {
          text: "Place the statuette on the plinth in the Shrine to Elidinis in Nardah.",
          travel: "Climb out of the crevice and run east back into Nardah; the shrine is the domed building on the east side of town, past the fountain.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Prayer experience",
    "1,000 Thieving experience",
    "1,000 Magic experience",
    "Access to the Nardah fountain (recharge water orbs)",
    "Robe of Elidinis",
  ],
};
