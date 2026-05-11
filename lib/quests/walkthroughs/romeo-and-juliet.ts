import type { QuestWalkthrough } from "../types";

export const romeoAndJuliet: QuestWalkthrough = {
  startPoint: "Talk to Romeo in Varrock central square.",
  itemsRequired: ["Cadava berries (you'll pick these during the quest)"],
  recommended: ["Teleport to Varrock for fast travel", "Some food if low-level"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Varrock and find Romeo wandering the central square." },
        { text: "Talk to Romeo in Varrock central square. Agree to help him find Juliet." },
      ],
    },
    {
      title: "Talk to Juliet",
      steps: [
        {
          text: "Head west out of Varrock and cross the bridge to Juliet's house.",
          notes: ["The house is just west of the western Varrock gate, on the south side of the path."],
        },
        { text: "Climb the ladder upstairs and talk to Juliet." },
        { text: "She gives you a message for Romeo. Take it." },
        { text: "Return to Romeo in Varrock central square and give him the message." },
      ],
    },
    {
      title: "Visit Father Lawrence",
      steps: [
        { text: "Romeo asks you to find Father Lawrence." },
        { text: "Walk to the Varrock church (north-east of the central square)." },
        { text: "Talk to Father Lawrence inside Varrock church. He sends you to the Apothecary." },
      ],
    },
    {
      title: "Get the Cadava potion",
      steps: [
        {
          text: "Walk south-west to the Apothecary's shop in southern Varrock.",
          notes: ["Just south of the central square, near the south-west gate."],
        },
        { text: "Talk to the Apothecary in south-west Varrock about the Cadava potion. He needs Cadava berries." },
        {
          text: "Travel south to the Cadava bushes south-east of Varrock.",
          notes: ["The bushes are between Varrock and the Champions' Guild path."],
        },
        { text: "Pick Cadava berries from the bush." },
        { text: "Return to the Apothecary in south-west Varrock and give him the berries." },
        { text: "He gives you the Cadava potion." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Take the Cadava potion to Juliet's house and give it to her upstairs." },
        { text: "Return to Romeo in Varrock square and tell him the plan." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
  ],
};
