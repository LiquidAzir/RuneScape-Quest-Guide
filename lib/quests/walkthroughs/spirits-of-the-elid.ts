import type { QuestWalkthrough } from "../types";

export const spiritsOfTheElid: QuestWalkthrough = {
  startPoint: "Talk to Awusah the Mayor in Nardah.",
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
        { text: "Talk to Awusah the Mayor in Nardah." },
        { text: "Talk to Ghaslor the Elder and accept the ballad." },
        { text: "Search the north-west cupboard for torn robe top and bottom." },
        { text: "Mend the robes with needle and thread; equip them." },
        { text: "Use Telekinetic Grab on the ancestral key on the table." },
      ],
    },
    {
      title: "Water Ravine Dungeon",
      steps: [
        { text: "Travel north along the river to the waterfall cave entrance." },
        { text: "Use a rope on the root to descend." },
        { text: "Equip the robes and use the ancestral key on the door." },
        { text: "Kill the white golem (stab) and clear the channel via Thieving." },
        { text: "Kill the grey golem (slash) and clear the channel with a pickaxe." },
        { text: "Kill the black golem (crush) and clear the channel with ranged or magic." },
        { text: "Talk to the spirit and confirm." },
        { text: "Return to Nardah." },
      ],
    },
    {
      title: "Genie quest",
      steps: [
        { text: "Talk to Awusah again." },
        { text: "Take the shoes by his door and cut them with a knife to get the sole." },
        { text: "Travel west from the General Store to the crevice." },
        { text: "Use a rope to descend, then enter the door." },
        { text: "Talk to the Genie." },
        { text: "Talk to the Genie again to get the statuette." },
        { text: "Place the statuette on the plinth in the Shrine to Elidinis." },
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
