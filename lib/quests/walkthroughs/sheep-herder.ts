import type { QuestWalkthrough } from "../types";

export const sheepHerder: QuestWalkthrough = {
  startPoint: "Talk to Councillor Halgrive outside the East Ardougne church.",
  itemsRequired: ["100 coins"],
  recommended: ["Energy restoring items", "Ardougne teleport / Skills necklace / Spirit tree"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Councillor Halgrive outside East Ardougne church (1 free inventory slot needed)." },
        { text: "Talk to Doctor Orbon in the church and accept the plague suit." },
      ],
    },
    {
      title: "Cull the sheep",
      steps: [
        { text: "Equip the plague jacket and trousers." },
        { text: "Travel to the enclosure north-west of Ardougne north bank." },
        { text: "Pick up and wield the cattleprod near the incinerator." },
        { text: "Prod 1 sheep of each colour (blue, yellow, green, red) through the gate." },
        { text: "Feed sheep feed to each sheep until deceased." },
        { text: "Collect the bones and use them on the incinerator." },
      ],
    },
    {
      title: "Finish",
      steps: [
        { text: "Return to Councillor Halgrive." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["4 Quest Points", "3,100 coins"],
};
