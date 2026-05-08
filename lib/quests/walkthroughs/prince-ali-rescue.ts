import type { QuestWalkthrough } from "../types";

export const princeAliRescue: QuestWalkthrough = {
  startPoint: "Talk to Hassan in the Al Kharid Palace.",
  itemsRequired: [
    "3 balls of wool",
    "Pink skirt",
    "Yellow dye (or 2 onions to make some)",
    "Redberries (for red dye)",
    "Soft clay (or clay + a jug of water)",
    "Bronze bar",
    "Pot of flour",
    "Ashes",
    "Around 700 coins for various NPCs",
    "Beer (for the bartender)",
  ],
  recommended: [
    "Skip the most fiddly steps by buying ready-made items (wig, paste, etc.) from other players or the GE",
    "Keep extra coins on hand for tips and bribes",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Al Kharid Palace and talk to Hassan." },
        { text: "He explains that Prince Ali has been kidnapped by Lady Keli and held in Draynor Village." },
        { text: "Speak to Osman in Al Kharid market for the plan." },
      ],
    },
    {
      title: "Make the wig",
      steps: [
        { text: "Travel to Draynor Village and talk to Ned. Give him 3 balls of wool to make a rope (and later a wig)." },
        {
          text: "Get blonde hair: in Draynor Village, talk to Lady Keli's servant or use yellow dye on the rope/wool depending on your route — most players just bring 3 balls of wool plus the dye and have Ned make the wig.",
          notes: ["Ned makes the wig once you supply the wool and yellow dye."],
        },
      ],
    },
    {
      title: "Make the skin paste",
      steps: [
        { text: "Travel to Aggie the witch in Draynor Village." },
        {
          text: "Bring her a pot of flour, ashes, redberries, and a small payment.",
          notes: ["Aggie produces the skin paste used to disguise Ali."],
        },
      ],
    },
    {
      title: "Get the key impression and the key",
      steps: [
        { text: "Talk to Lady Keli in her house in Draynor Village. Ask to see the key — keep talking until she shows it." },
        {
          text: "Use soft clay on the key while she's holding it to make a key print.",
          notes: ["You may need to ask Leela (Osman's daughter) outside Keli's house for help."],
        },
        { text: "Take the key print and a bronze bar to Osman in Al Kharid." },
        { text: "Osman makes a copy of the key for you." },
      ],
    },
    {
      title: "Distract the guard",
      steps: [
        { text: "Buy a beer in the Asgarnia/local pub if you don't already have one." },
        { text: "Talk to Joe, the guard outside Lady Keli's house." },
        { text: "Give him the beer to put him to sleep." },
      ],
    },
    {
      title: "Free the Prince",
      steps: [
        { text: "Take the wig, the pink skirt, the skin paste, the key, and a rope to Lady Keli's house." },
        { text: "Talk to Prince Ali inside the cell." },
        { text: "Give him the disguise items so he can escape past the guards." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Hassan in Al Kharid Palace." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "700 coins",
    "Free passage through the Al Kharid toll gate forever",
  ],
};
