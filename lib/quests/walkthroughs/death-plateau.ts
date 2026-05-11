import type { QuestWalkthrough } from "../types";

export const deathPlateau: QuestWalkthrough = {
  startPoint: "Talk to Denulth in the soldier tent in Burthorpe.",
  itemsRequired: [
    "Asgarnian ale",
    "10 unnoted bread",
    "10 unnoted cooked trout",
    "Iron bar",
    "Climbing boots (Tenzing gives you the chance to obtain them)",
    "60 coins (extra recommended for gambling)",
  ],
  recommended: [
    "A Premade blurb' sp. (or Blurberry special) — guarantees the auto-win against Harold",
    "Stamina or energy potions",
    "Games necklace for fast travel back to Burthorpe later",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Burthorpe and talk to Denulth in the soldier tent. Ask about a quest." },
        { text: "Walk to the castle and talk to Eohric (in the castle)." },
        { text: "He says Harold (the bartender) was off duty — go talk to Harold upstairs in the bar." },
        { text: "Return to Eohric to confirm Harold's story." },
      ],
    },
    {
      title: "Get the storage room combination from Harold",
      steps: [
        { text: "Buy or bring an Asgarnian ale and give it to Harold." },
        {
          text: "Either give Harold a Blurberry special / Premade blurb' sp. for an automatic win, OR keep gambling with him until he goes broke.",
        },
        { text: "Read the IOU note he gives you to learn the combination of coloured balls." },
        {
          text: "Go to the castle storage room and place the 5 coloured balls on the table in the order shown by the IOU.",
          notes: ["Each player's combination is randomised — follow YOUR IOU."],
        },
      ],
    },
    {
      title: "Find a route up Death Plateau",
      steps: [
        { text: "Walk north-west of Burthorpe and enter Saba's cave." },
        { text: "Talk to Saba about another way up Death Plateau." },
        { text: "Continue west then south to Tenzing's house." },
        { text: "Talk to Tenzing the sherpa and accept his trade for spiked climbing boots." },
      ],
    },
    {
      title: "Make the spiked boots",
      steps: [
        { text: "Walk to Dunstan the smith in north-east Burthorpe (by the anvil)." },
        { text: "Return to Denulth in the soldier tent in Burthorpe to get a certificate authorising Dunstan to use Imperial Guard equipment." },
        { text: "Bring Dunstan: climbing boots (Tenzing sells them), the certificate, and an iron bar — he forges spiked boots." },
      ],
    },
    {
      title: "Scout the alternate path",
      steps: [
        { text: "Return to Tenzing with 10 bread, 10 cooked trout, and the spiked boots." },
        { text: "Equip the spiked boots and exit through the north door of his cabin." },
        { text: "Climb the stile and follow the trail north and east past the second mountain goat." },
        { text: "Continue along the path until the message 'I think this is far enough' appears." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Denulth in Burthorpe with the alternate-route info and combination." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 Attack experience",
    "Steel claws",
    "Ability to wear climbing boots (key shortcut for the Troll quest chain)",
  ],
};
