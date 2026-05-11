import type { QuestWalkthrough } from "../types";

export const hazeelCult: QuestWalkthrough = {
  startPoint: "Talk to Ceril Carnillean in central Ardougne, south of King Lathas's castle.",
  itemsRequired: [],
  recommended: [
    "Combat 10+",
    "Weight-reducing clothing + stamina potions",
    "Ardougne cloak / teleport / fairy ring",
  ],
  enemies: ["Alomone (level 13) — only if siding with Ceril"],
  sections: [
    {
      title: "Path A: side with Carnilleans",
      steps: [
        { text: "Talk to Ceril at the house." },
        { text: "Enter Ardougne Sewers east of the clocktower." },
        { text: "Talk to Clivet in the Ardougne Sewers east of the Clock Tower and refuse to help." },
        { text: "Adjust valves: 1-RIGHT, 2-RIGHT, 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft, defeat Alomone, loot the Carnillean armour." },
        { text: "Return to Ceril at the house." },
        { text: "Search the cupboard upstairs for evidence." },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Path B: side with Hazeel Cult",
      steps: [
        { text: "Talk to Ceril at the house." },
        { text: "Enter the Ardougne Sewers." },
        { text: "Talk to Clivet in the Ardougne Sewers east of the Clock Tower and agree to help." },
        { text: "Adjust valves: 1-RIGHT, 2-RIGHT." },
        { text: "Use poison on the cooking range in the Carnillean basement." },
        { text: "Talk to Ceril at the house and Clivet again." },
        { text: "Adjust the remaining valves: 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft; talk to Alomone." },
        { text: "Return to the house and talk to Butler Jones." },
        { text: "Find the chest key in a basement crate." },
        { text: "Unlock the chest upstairs; retrieve the scroll." },
        { text: "Return the scroll to Alomone." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,500 Thieving experience",
    "2,000 coins (5 extra if siding with Carnilleans)",
    "Either Hazeel's mark or Carnillean armour (depending on path)",
    "5 Kudos at the Varrock Museum",
  ],
};
