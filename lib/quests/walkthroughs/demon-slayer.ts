import type { QuestWalkthrough } from "../types";

export const demonSlayer: QuestWalkthrough = {
  startPoint:
    "Talk to Aris in the small striped fortune-teller's tent in Varrock central square. Varrock Teleport (or the Grand Exchange lodestone-free route: run east from the GE) drops you in the square — the tent sits among the market stalls a few steps from the fountain.",
  itemsRequired: [
    "Bucket of water",
    "25 bones (any normal bones — kill cows, chickens, or rats)",
  ],
  recommended: [
    "Decent armour and a melee weapon — Delrith is level 27 and you must finish him with the Silverlight sword",
    "Food, especially at low combat levels",
  ],
  enemies: ["Delrith (level 27 demon) — fought at the stone circle south of Varrock"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Aris inside her small striped fortune-teller's tent in Varrock central square.",
          travel:
            "Varrock Teleport lands you in the central square beside the fountain; the striped tent is right there among the market stalls. Without runes, run north from Lumbridge along the main road, or east from the Grand Exchange through the city.",
        },
        {
          text: "Hear her out — the demon Delrith is returning and only Silverlight can banish him.",
        },
        {
          text: "Walk north into Varrock Palace and talk to Sir Prysin, who stands on the ground floor near the palace entrance.",
          travel:
            "From the central square run north through the palace gates and in through the main doors. Sir Prysin is the knight standing in the entrance hall on the ground floor.",
        },
        {
          text: "Listen as Sir Prysin explains he hid the three Silverlight keys in different places.",
        },
      ],
    },
    {
      title: "Recover the three keys",
      steps: [
        {
          text: "Key 1 — climb to the top of Varrock Palace's north-west tower and pester Captain Rovin until he hands over his key.",
          travel:
            "Stay in the palace: take the staircase in the north-west corner of the ground floor and climb it twice to the top of the tower. Rovin is alone up there.",
        },
        {
          text: "Key 2 — use a bucket of water on the drain in the Varrock Palace kitchen to flush Sir Prysin's key into the sewers below.",
          travel:
            "The kitchen is on the west side of the palace's ground floor — the room with the cooking range and the sink. The drain is on the floor there.",
        },
        {
          text: "Climb down into the Varrock Sewers and search the drain pipe to recover the washed-through key.",
          travel:
            "Leave the palace and take the manhole just outside the palace grounds to the north-east (the same entrance used for the Varrock Sewers). Climb down, then follow the tunnel to the drain pipe below the kitchen and search it.",
        },
        {
          text: "Key 3 — travel to the Wizards' Tower south of Draynor Village and climb one flight of stairs to find Wizard Traiborn.",
          travel:
            "Necklace of passage → Wizards' Tower puts you at the front door. Otherwise amulet of glory → Draynor Village and run south over the bridge to the tower on its little island, or run south-west from Lumbridge along the river road. Traiborn is up the first staircase.",
        },
        {
          text: "Hand Wizard Traiborn 25 normal bones and he gives you the third key.",
          notes: ["Cow bones from the Lumbridge cow field north-west of the castle are the quickest 25 bones in the game."],
        },
      ],
    },
    {
      title: "Get Silverlight",
      steps: [
        {
          text: "Return to Sir Prysin on the ground floor of Varrock Palace with all three keys.",
          travel:
            "Varrock Teleport to the central square, then run north through the palace gates and in the main doors.",
        },
        {
          text: "He hands you Silverlight.",
        },
      ],
    },
    {
      title: "Defeat Delrith",
      steps: [
        {
          text: "Travel to the stone circle south of Varrock, in the field between the city's south gate and the Lumbridge road.",
          travel:
            "From the central square run south out of Varrock's south gate and keep going south-west — the ring of standing stones is in the open field on the west side of the road, just past the city wall.",
        },
        {
          text: "Wait for the cutscene to play, then attack Delrith with Silverlight equipped.",
        },
        {
          text: "When prompted to read the incantation, choose the words in this order: Carlem, Aber, Camerinthum, Purchai, Gabindo. (Word ORDER may shuffle in the choice list — but the correct sequence is always those 5 words in that order.)",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Silverlight (a sword highly effective against demons)",
  ],
};
