import type { QuestWalkthrough } from "../types";

export const romeoAndJuliet: QuestWalkthrough = {
  startPoint:
    "Talk to Romeo, who wanders the central square around Varrock's fountain. Varrock Teleport (25 Magic) or a Varrock teleport tab drops you in that square; otherwise run north from Lumbridge along the road and in through Varrock's southern gate.",
  itemsRequired: ["Cadava berries (you'll pick these during the quest)"],
  recommended: ["Teleport to Varrock for fast travel", "Some food if low-level"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Varrock and find Romeo wandering the central square around the fountain.",
          travel:
            "Varrock Teleport (25 Magic) or a Varrock teleport tab puts you in the central square beside the fountain. No teleport: from Lumbridge run north up the road and enter Varrock through the southern gate, then continue north to the square.",
        },
        { text: "Talk to Romeo in Varrock central square. Agree to help him find Juliet." },
      ],
    },
    {
      title: "Talk to Juliet",
      steps: [
        {
          text: "Head west out of Varrock and cross the bridge to Juliet's house.",
          travel:
            "From the square run west along the main road and out through Varrock's west gate, then follow the path a short way west — Juliet's house is the two-storey building on the north side of the road, just past the gate.",
          notes: ["The house is immediately west of the western Varrock gate, on the north side of the path."],
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
        {
          text: "Walk to the Varrock church, the large building in the north-east of the city.",
          travel:
            "From the central square run east along the main road, then north at the crossroads — the church is the big stone building with the stained-glass windows in Varrock's north-east corner, west of the east gate.",
        },
        { text: "Talk to Father Lawrence inside Varrock church. He sends you to the Apothecary." },
      ],
    },
    {
      title: "Get the Cadava potion",
      steps: [
        {
          text: "Walk south-west to the Apothecary's shop in southern Varrock.",
          travel:
            "From the central square run west past Zaff's staff shop, then south — the Apothecary's small house sits on the west side of the road in the south-west of the city, north of the south-west corner of the wall.",
          notes: ["Just south-west of the central square, near the south-west corner of the city."],
        },
        { text: "Talk to the Apothecary in south-west Varrock about the Cadava potion. He needs Cadava berries." },
        {
          text: "Travel south-east of Varrock to the Cadava bushes on the path to the Champions' Guild.",
          travel:
            "Leave Varrock by the southern gate and follow the path south-east toward the Champions' Guild; the two Cadava bushes (red berries) grow beside the path just east of the guild building.",
          notes: ["The bushes sit between Varrock's south gate and the Champions' Guild path."],
        },
        { text: "Pick Cadava berries from the bush." },
        { text: "Return to the Apothecary in south-west Varrock and give him the berries." },
        { text: "He gives you the Cadava potion." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Take the Cadava potion to Juliet's house west of Varrock and give it to her upstairs." },
        { text: "Return to Romeo in Varrock square and tell him the plan." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
  ],
};
