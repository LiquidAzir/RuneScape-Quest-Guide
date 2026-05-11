import type { QuestWalkthrough } from "../types";

export const monksFriend: QuestWalkthrough = {
  startPoint: "Talk to Brother Omad at the Ardougne Monastery south of East Ardougne.",
  itemsRequired: ["Jug of water", "Logs or a plank"],
  recommended: ["Ardougne cloak / teleport / spirit tree / fairy ring"],
  sections: [
    {
      title: "Retrieve the blanket",
      steps: [
        { text: "Talk to Brother Omad at the Ardougne Monastery south of East Ardougne." },
        { text: "Travel west to the stone circle near the Clock Tower." },
        { text: "Enter the circle and descend the ladder." },
        { text: "Follow the south path and pick up the Child's blanket." },
      ],
    },
    {
      title: "Help organise Brother Cedric's party",
      steps: [
        { text: "Return to Brother Omad at the Ardougne Monastery south of East Ardougne and talk twice." },
        { text: "Travel north to Brother Cedric near Ardougne Zoo." },
        { text: "Give him a jug of water." },
        { text: "Give him logs (or a plank) on the next interaction." },
        { text: "Return to Brother Omad at the Ardougne Monastery south of East Ardougne." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "2,000 Woodcutting experience", "8 Law runes"],
};
