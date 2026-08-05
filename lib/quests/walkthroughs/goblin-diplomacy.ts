import type { QuestWalkthrough } from "../types";

export const goblinDiplomacy: QuestWalkthrough = {
  startPoint:
    "Talk to Generals Bentnoze and Wartface in the largest hut in Goblin Village, north of Falador. Falador teleport, then run north out of the north gate and follow the path past Doric's hut; the village is in the valley just west of the path.",
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
          text: "Travel to Goblin Village north of Falador.",
          travel:
            "Falador teleport, then north out of the north gate and up the path past Doric's hut; turn west through the wooden gate into the goblin valley. Alternative: amulet of glory to Edgeville, then run south-west past the Monastery and Ice Mountain.",
        },
        { text: "Talk to Generals Bentnoze and Wartface inside the largest hut in the village." },
        { text: "Listen to their argument about armour colour." },
      ],
    },
    {
      title: "Get the orange and blue goblin mail",
      steps: [
        { text: "Take the brown goblin mail that spawns inside one of the Goblin Village huts." },
        {
          text: "To dye it orange: use 3 redberries and 2 onions on a pot of flour to make orange dye, then use the dye on the mail.",
          notes: ["Aggie the witch in Draynor Village can also make dye for a small fee if you bring the materials."],
        },
        {
          text: "To dye blue: take 2 woad leaves to Aggie in her house on the west side of Draynor Village and ask her to make blue dye, then use the dye on a goblin mail.",
          travel:
            "Amulet of glory to Draynor Village drops you at the bank; run south-west past the market square to the small house on the western edge of the village. No glory: run west from Lumbridge along the south bank of the river.",
        },
        {
          text: "Easier option: buy orange goblin mail and blue goblin mail directly from the Grand Exchange.",
          travel:
            "Ring of wealth teleport, or Varrock teleport and run north-west out of the city through the gate by the Cooks' Guild road.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Generals Bentnoze and Wartface in the largest hut in Goblin Village with both the orange and blue goblin mail.",
          travel:
            "Falador teleport then north past Doric's hut and west into the valley; from the Grand Exchange you can instead run west out of Varrock and south-west past the Barbarian Village and Ice Mountain.",
        },
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
