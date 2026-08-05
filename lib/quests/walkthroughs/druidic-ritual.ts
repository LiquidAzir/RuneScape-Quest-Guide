import type { QuestWalkthrough } from "../types";

export const druidicRitual: QuestWalkthrough = {
  startPoint:
    "Talk to Kaqemeex at the Taverley stone circle. Falador Teleport, leave by the west gate and follow the road west into Taverley, then head north-west to the ring of standing stones on the edge of the village.",
  itemsRequired: ["None to start"],
  recommended: [
    "Combat level 10+ — the dark wizards in Varrock cellar are level 7 each, can be tough at low levels",
    "Some food",
    "Weapon and basic armour",
  ],
  enemies: ["4 Dark wizards (level 7 each) in Varrock palace cellar"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the stone circle on the north-west edge of Taverley and talk to Kaqemeex.",
          travel:
            "Falador Teleport, run west out of Falador's west gate and over the bridge into Taverley, then north-west past the houses to the ring of standing stones. Kaqemeex is the druid standing in the middle of the circle.",
          notes: ["Members-only area — you must pass through the Taverley gate west of Falador."],
        },
        {
          text: "Talk to Sanfew in the building south of the stone circle (upstairs in the Taverley herblore shop).",
          travel:
            "Walk south from the stone circle into the village; Sanfew is on the upper floor of Jatix's Herblore Shop.",
        },
        { text: "Hear Sanfew explain that the altar in the Varrock palace cellar has been corrupted." },
      ],
    },
    {
      title: "Cleanse the altar in Varrock palace cellar",
      steps: [
        {
          text: "Travel to Varrock Palace and go down the trapdoor in the palace kitchen into the cellar.",
          travel:
            "Varrock Teleport to the central square, run north through the palace gates and into the palace, then west to the kitchen (the room with the cooking range).",
          notes: ["The trapdoor is on the kitchen floor — climb down it to reach the cellar."],
        },
        { text: "Find the altar at the far end of the cellar." },
        {
          text: "Use raw beef AND raw bear meat on the altar.",
          notes: ["The cellar contains spawns of raw beef and raw bear meat — pick them up on the way in."],
        },
        {
          text: "Four dark wizards (level 7) appear and attack. Defeat them one at a time.",
          notes: ["Use Protect from Magic if you have it; otherwise just out-DPS or eat through."],
        },
        { text: "Pick up the cleansed Enchanted bone from the altar." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Kaqemeex at the Taverley stone circle.",
          travel:
            "Climb out of the cellar, then Falador Teleport and run west through the Taverley gate and north-west to the stone circle.",
        },
        { text: "Talk to Kaqemeex to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "250 Herblore experience",
    "Ability to train Herblore",
  ],
};
