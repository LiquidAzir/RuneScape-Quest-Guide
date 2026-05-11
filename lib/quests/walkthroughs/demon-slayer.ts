import type { QuestWalkthrough } from "../types";

export const demonSlayer: QuestWalkthrough = {
  startPoint:
    "Talk to Aris in the small fortune-teller's tent in Varrock central square (the small striped tent in the middle of the square, between the fountain and the market stalls).",
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
          text: "Travel to Varrock central square and find Aris's small striped fortune-teller tent in the middle of the square. Talk to Aris inside.",
        },
        {
          text: "She tells you the demon Delrith is returning and only Silverlight can banish him.",
        },
        {
          text: "Walk north to Varrock Palace (north side of the central square). Find Sir Prysin on the ground floor of the palace courtyard. Talk to him.",
        },
        {
          text: "Sir Prysin explains he hid the three Silverlight keys in different places.",
        },
      ],
    },
    {
      title: "Recover the three keys",
      steps: [
        {
          text: "Key 1 — Captain Rovin's key: climb to the top floor of Varrock Palace (stairs in the central tower) and talk to Captain Rovin until he hands over his key.",
        },
        {
          text: "Key 2 — Drain key: walk to the palace kitchen (south-west side of the palace ground floor). Use a bucket of water on the manhole in the south-west corner of the kitchen, then exit the palace and walk south to the city sewer drain. Search the drain to retrieve the key.",
        },
        {
          text: "Key 3 — Wizards' Tower key: travel to the Wizards' Tower south of Draynor Village (south-west of Lumbridge across the river). Climb the stairs to the second floor and find Wizard Traiborn — he has the key.",
        },
        {
          text: "Bring 25 bones (any normal bones — pile up cow bones from Lumbridge cow field) to Wizard Traiborn on the second floor of the Wizards' Tower. He gives you the third key in exchange.",
        },
      ],
    },
    {
      title: "Get Silverlight",
      steps: [
        {
          text: "Return to Sir Prysin in Varrock Palace's courtyard with all three keys.",
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
          text: "Travel south of Varrock to the stone circle (just south of Varrock's south gate, in the field between the city and the road to Lumbridge).",
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
