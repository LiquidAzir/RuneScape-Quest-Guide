import type { QuestWalkthrough } from "../types";

export const hazeelCult: QuestWalkthrough = {
  startPoint:
    "Talk to Ceril Carnillean at Carnillean Mansion in central East Ardougne (the large mansion just south of the central market square — the building used during Heroes' Quest).",
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
        { text: "Talk to Ceril Carnillean inside the Carnillean Mansion in central East Ardougne (just south of the market square)." },
        { text: "Enter the Ardougne Sewers via the manhole east of the Clock Tower in southern East Ardougne." },
        { text: "Talk to Clivet in the Ardougne Sewers east of the Clock Tower and refuse to help." },
        { text: "Adjust valves: 1-RIGHT, 2-RIGHT, 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft in the Hazeel Cult cave; defeat Alomone (level 13) on the other side and loot the Carnillean armour." },
        { text: "Return to Ceril at the house." },
        { text: "Climb the stairs in the Carnillean Mansion to the first floor and search the cupboard in the master bedroom for evidence." },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Path B: side with Hazeel Cult",
      steps: [
        { text: "Talk to Ceril Carnillean inside the Carnillean Mansion in central East Ardougne (just south of the market square)." },
        { text: "Enter the Ardougne Sewers via the manhole east of the Clock Tower in southern East Ardougne." },
        { text: "Talk to Clivet in the Ardougne Sewers east of the Clock Tower and agree to help." },
        { text: "Adjust valves: 1-RIGHT, 2-RIGHT." },
        { text: "Climb back up to the Carnillean Mansion and descend to the basement (trapdoor in the kitchen). Use poison on the cooking range there." },
        { text: "Talk to Ceril at the house and Clivet again." },
        { text: "Adjust the remaining valves: 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft in the Hazeel Cult cave; talk to Alomone on the other side." },
        { text: "Return to Carnillean Mansion in central East Ardougne and talk to Butler Jones (the butler in the entrance hall)." },
        { text: "Climb down to the basement and search the crates there for the chest key." },
        { text: "Climb back up to the master bedroom upstairs and use the chest key on the chest there to retrieve the scroll." },
        { text: "Return the scroll to Alomone in the Hazeel Cult cave (back through the Ardougne Sewers)." },
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
