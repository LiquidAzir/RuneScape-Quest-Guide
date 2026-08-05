import type { QuestWalkthrough } from "../types";

export const monksFriend: QuestWalkthrough = {
  startPoint:
    "Talk to Brother Omad at the Ardougne Monastery south of East Ardougne (east of the Clock Tower). An Ardougne cloak teleports straight to the monastery; otherwise Ardougne Teleport and run south out of the city.",
  itemsRequired: ["Jug of water", "Logs or a plank"],
  recommended: ["Ardougne cloak / teleport / spirit tree / fairy ring"],
  sections: [
    {
      title: "Retrieve the blanket",
      steps: [
        {
          text: "Talk to Brother Omad in the Ardougne Monastery south of East Ardougne.",
          travel:
            "Ardougne cloak teleport drops you at the monastery door. Without one: Ardougne Teleport to the market square, then run south out of the city and follow the road down past the Clock Tower turn-off — the monastery is the walled chapel building, and Omad is inside near the beds.",
        },
        {
          text: "Travel west to the stone circle near the Clock Tower.",
          travel:
            "Leave the monastery by the west gate and run west along the road toward the Clock Tower — the stone circle is the ring of standing stones just short of it.",
        },
        { text: "Enter the circle and climb down the ladder in its centre." },
        { text: "Follow the south path underground and pick up the Child's blanket." },
      ],
    },
    {
      title: "Help organise Brother Cedric's party",
      steps: [
        {
          text: "Return to Brother Omad at the Ardougne Monastery and talk to him twice.",
          travel: "Climb back up the ladder and run east along the road to the monastery (or use an Ardougne cloak teleport).",
        },
        {
          text: "Travel north to Brother Cedric by the lake near Ardougne Zoo.",
          travel:
            "From the monastery, run north up the road toward East Ardougne — Cedric is standing by the small lake on the south side of the city, near the zoo fence.",
        },
        { text: "Give him a jug of water." },
        { text: "Give him logs (or a plank) on the next interaction." },
        {
          text: "Return to Brother Omad at the Ardougne Monastery.",
          travel: "Run back south down the road, or use an Ardougne cloak teleport.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "2,000 Woodcutting experience", "8 Law runes"],
};
