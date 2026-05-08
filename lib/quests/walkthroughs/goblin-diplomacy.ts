import type { QuestWalkthrough } from "../types";

export const goblinDiplomacy: QuestWalkthrough = {
  startPoint: "Talk to Generals Bentnoze and Wartface in Goblin Village, north of Falador.",
  itemsRequired: [
    "Orange goblin mail",
    "Blue goblin mail",
    "(A brown goblin mail spawns inside Goblin Village — do NOT pick it up before talking to them or you'll need an extra)",
  ],
  recommended: [
    "Bring 3 woad leaves + 3 redberries + 2 onions + 3 empty pots if you intend to dye your own mail (alternatively buy already-dyed mail)",
    "Pestle and mortar",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel north of Falador to Goblin Village.",
          notes: ["Follow the path north from Falador past Doric's house, then west through the goblin gate."],
        },
        { text: "Inside the largest hut, talk to Generals Bentnoze and Wartface." },
        { text: "Listen to their argument about armour colour." },
      ],
    },
    {
      title: "Get the orange and blue goblin mail",
      steps: [
        { text: "Take the brown goblin mail from inside the village (it spawns in one of the huts)." },
        {
          text: "To dye it orange: use 3 redberries and 2 onions on a pot of flour to make orange dye, then use the dye on the mail.",
          notes: ["Aggie the witch in Draynor Village can also make dye for a small fee if you bring the materials."],
        },
        {
          text: "To dye blue: get 2 woad leaves, take them to Aggie in Draynor Village, ask her to make blue dye for you, then use the dye on a goblin mail.",
        },
        {
          text: "Easier option: buy orange goblin mail and blue goblin mail directly from the Grand Exchange.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Generals Bentnoze and Wartface with both the orange and blue goblin mail." },
        { text: "Show them each colour. They both dislike them." },
        { text: "Then show them the brown goblin mail to settle the argument." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "200 Crafting experience",
    "Gold bar",
  ],
};
