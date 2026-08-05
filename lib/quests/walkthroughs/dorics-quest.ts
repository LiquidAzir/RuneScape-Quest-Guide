import type { QuestWalkthrough } from "../types";

export const doricsQuest: QuestWalkthrough = {
  startPoint:
    "Talk to Doric at his outdoor anvils just north of Falador. Falador Teleport, leave by the north gate and follow the road north — Doric's hut and anvils are on the west side of the road, just before the path forks towards Taverley and the Dwarven Mine.",
  itemsRequired: [
    "6 Clay",
    "4 Copper ore",
    "2 Iron ore",
  ],
  recommended: ["Buy the ores from the Grand Exchange to skip mining"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Doric's hut, on the road running north out of Falador towards Taverley.",
          travel:
            "Falador Teleport lands you in the centre of Falador; run north out of the north gate and follow the road. Doric stands outside a small hut with two anvils on the west side of the road, before the Taverley/Dwarven Mine fork. No teleport: run west from Draynor Village along the road, or north from Port Sarim through Falador.",
        },
        { text: "Talk to Doric at his anvils and agree to fetch ore for him." },
      ],
    },
    {
      title: "Gather the ores",
      steps: [
        {
          text: "Get 6 clay, 4 copper ore and 2 iron ore.",
          travel:
            "Fastest: Varrock Teleport and walk north-west to the Grand Exchange, and buy all 12 ores for a few hundred coins. Mining instead: clay and copper are in the Falador south-east mine (out of Falador's east gate then south), and iron is in the Al Kharid mine (Lumbridge Home Teleport, cross the toll gate east, mine is north-east of the town) or the Dwarven Mine right beside Doric.",
          notes: [
            "Easiest: trade them on the Grand Exchange.",
            "If mining: clay and copper are at the south Falador mine; iron ore is at Al Kharid mine or the Dwarven Mine under Ice Mountain.",
          ],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Doric at his anvils north of Falador with all the ore in your inventory.",
          travel:
            "Falador Teleport, then north out of the north gate and up the road to the hut on the west side.",
        },
        { text: "Talk to Doric to hand over the ore." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,300 Mining experience",
    "180 coins",
    "Use of Doric's anvils",
  ],
};
