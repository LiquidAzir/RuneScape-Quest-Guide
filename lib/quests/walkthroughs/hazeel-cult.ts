import type { QuestWalkthrough } from "../types";

export const hazeelCult: QuestWalkthrough = {
  startPoint:
    "Talk to Ceril Carnillean on the ground floor of the Carnillean mansion, the large house just south-west of East Ardougne castle. Ardougne teleport lands you in the market square in the north-east of the city — run south-west past the castle to the mansion.",
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
        {
          text: "Talk to Ceril Carnillean on the ground floor of the Carnillean mansion, south-west of East Ardougne castle.",
          travel:
            "Ardougne teleport drops you in the market square in the north-east of East Ardougne; run south-west past Ardougne Castle to the walled mansion. No teleport: fairy ring BIS (Ardougne Zoo) and run north-west, or Ardougne cloak to the Monastery and run south.",
        },
        {
          text: "Enter the Ardougne Sewers through the manhole east of the Clock Tower, south of the city.",
          travel:
            "From the mansion run south out of East Ardougne and follow the road towards the tall white Clock Tower; the manhole is on the ground a short way east of the tower. Climb down it.",
        },
        { text: "Talk to Clivet in the sewers and refuse to help him." },
        { text: "Adjust the valves along the sewer tunnels: 1-RIGHT, 2-RIGHT, 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft in the Hazeel Cult cave; defeat Alomone (level 13) on the other side and loot the Carnillean armour." },
        {
          text: "Return to Ceril Carnillean at the mansion.",
          travel:
            "Climb back out of the sewers by the Clock Tower and run north into East Ardougne, then west past the castle to the mansion (an Ardougne teleport then a south-west run is faster if you have one).",
        },
        { text: "Climb the stairs in the mansion and search the cupboard in the room upstairs east of the staircase for the evidence." },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Path B: side with Hazeel Cult",
      steps: [
        {
          text: "Talk to Ceril Carnillean on the ground floor of the Carnillean mansion, south-west of East Ardougne castle.",
          travel:
            "Ardougne teleport to the market square, then run south-west past Ardougne Castle to the walled mansion. Fallback: fairy ring BIS (Ardougne Zoo) and run north-west.",
        },
        {
          text: "Enter the Ardougne Sewers through the manhole east of the Clock Tower, south of the city.",
          travel:
            "Run south out of East Ardougne along the road to the white Clock Tower; the manhole sits on the ground just east of it.",
        },
        { text: "Talk to Clivet in the sewers and agree to help him." },
        { text: "Adjust the first two valves: 1-RIGHT, 2-RIGHT." },
        { text: "Climb back up to the mansion, go down the ladder to the basement and use the poison on the cooking range there." },
        { text: "Talk to Ceril at the mansion, then go back down to Clivet in the sewers." },
        { text: "Adjust the remaining valves: 3-LEFT, 4-RIGHT, 5-RIGHT." },
        { text: "Board the raft in the Hazeel Cult cave and talk to Alomone on the other side." },
        {
          text: "Return to the Carnillean mansion and talk to Butler Jones in the entrance hall.",
          travel:
            "Back out of the sewers at the Clock Tower and run north into East Ardougne, then west past the castle — or Ardougne teleport and run south-west.",
        },
        { text: "Climb down to the mansion basement and search the crates there for the chest key." },
        { text: "Go back up to the east room upstairs, knock on the wall, climb the ladder and use the chest key on the chest to take the scroll." },
        {
          text: "Return the scroll to Alomone in the Hazeel Cult cave.",
          travel:
            "Run south to the Clock Tower manhole, down into the sewers, back through the valve tunnels and across on the raft.",
        },
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
