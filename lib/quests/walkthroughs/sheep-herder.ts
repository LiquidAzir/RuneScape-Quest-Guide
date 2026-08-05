import type { QuestWalkthrough } from "../types";

export const sheepHerder: QuestWalkthrough = {
  startPoint:
    "Talk to Councillor Halgrive, who paces outside the East Ardougne church. Ardougne Teleport (51 Magic) drops you in the market square — the church is the large building just north-east of it.",
  itemsRequired: ["100 coins"],
  recommended: ["Energy restoring items", "Ardougne teleport / Skills necklace / Spirit tree"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Councillor Halgrive outside East Ardougne church (1 free inventory slot needed).",
          travel:
            "Ardougne Teleport or an Ardougne teleport tab into the market square, then run north-east to the church — Halgrive walks up and down outside its main door. No teleport: skills necklace to the Fishing Guild and run south, or spirit tree to the Tree Gnome Village and run north-east.",
        },
        { text: "Talk to Doctor Orbon inside the church and accept the plague suit." },
      ],
    },
    {
      title: "Cull the sheep",
      steps: [
        { text: "Equip the plague jacket and trousers." },
        {
          text: "Travel to the fenced sheep enclosure north-west of Ardougne's north bank.",
          travel:
            "From the church run west then north through East Ardougne past the north bank, then continue north-west out of the city — the plague pen is the fenced field with the incinerator inside it.",
        },
        { text: "Pick up and wield the cattleprod near the incinerator." },
        { text: "Prod 1 sheep of each colour (blue, yellow, green, red) through the gate." },
        { text: "Feed sheep feed to each sheep until deceased." },
        { text: "Collect the bones and use them on the incinerator." },
      ],
    },
    {
      title: "Finish",
      steps: [
        {
          text: "Return to Councillor Halgrive outside the East Ardougne church.",
          travel: "Run back south-east through the city to the church north-east of the market square.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["4 Quest Points", "3,100 coins"],
};
