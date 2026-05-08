import type { QuestWalkthrough } from "../types";

export const demonSlayer: QuestWalkthrough = {
  startPoint: "Talk to Aris in the small fortune-teller's tent in Varrock central square.",
  itemsRequired: ["Bucket of water", "A bell (drops from a Wizards' Tower wizard)"],
  recommended: [
    "Decent armour and a weapon — Delrith is level 27 and you must beat him with the Silverlight sword",
    "Food, especially at low combat levels",
  ],
  enemies: ["Delrith (level 27 demon)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Find Aris's tent in Varrock central square and talk to her." },
        { text: "She tells you the demon Delrith is returning and you must kill him with Silverlight." },
        { text: "Travel to Sir Prysin in Varrock Palace and talk to him." },
        { text: "Sir Prysin explains he hid the three Silverlight keys in different places." },
      ],
    },
    {
      title: "Recover the three keys",
      steps: [
        {
          text: "Key 1 — Captain Rovin's key: climb to the top floor of Varrock Palace and talk to Captain Rovin until he gives it up.",
        },
        {
          text: "Key 2 — Drain key: use a bucket of water on the manhole in the south-west corner of the palace kitchen, then search the drain to retrieve the key.",
        },
        {
          text: "Key 3 — Wizards' Tower key: travel to the Wizards' Tower south-west of Draynor.",
          notes: ["Talk to Traiborn on the second floor and bring him 25 bones."],
        },
        {
          text: "Bring 25 bones to Traiborn (any normal bones work). He gives you the third key.",
        },
      ],
    },
    {
      title: "Get Silverlight",
      steps: [
        { text: "Return to Sir Prysin with all three keys." },
        { text: "He hands you Silverlight." },
      ],
    },
    {
      title: "Defeat Delrith",
      steps: [
        { text: "Travel to the stone circle south of Varrock." },
        { text: "Wait for the cutscene then attack Delrith with Silverlight equipped." },
        {
          text: "Use the in-quest dialog: when prompted to read out the incantation, choose the words in this order: Carlem, Aber, Camerinthum, Purchai, Gabindo.",
          notes: ["You'll be given a list of words and must put them in order to banish Delrith. The order may shuffle for you — pick the words listed in your scroll if displayed."],
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Silverlight (a sword effective against demons)",
  ],
};
