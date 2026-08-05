import type { QuestWalkthrough } from "../types";

export const deathPlateau: QuestWalkthrough = {
  startPoint:
    "Talk to Denulth in the Imperial Guard tent in Burthorpe — the large tent south of the Burthorpe Games Room and directly south-east of the Warriors' Guild. Games necklace teleports straight to Burthorpe; otherwise Falador Teleport and run north-west through Taverley and up the road.",
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
        {
          text: "Talk to Denulth in the Imperial Guard tent in Burthorpe and ask about a quest.",
          travel:
            "Games necklace to Burthorpe drops you by the Games Room; the big soldier tent is just south of it, south-east of the Warriors' Guild. On foot: Falador Teleport, run west out of the city, then north through Taverley and up the road to Burthorpe.",
        },
        {
          text: "Talk to Eohric on the top floor of Burthorpe Castle.",
          travel: "The castle is the keep in the north-east of Burthorpe — go in and climb the stairs to the top floor.",
        },
        {
          text: "He says Harold the bartender was off duty — talk to Harold upstairs in the Toad and Chicken pub.",
          travel: "The Toad and Chicken is the pub in central Burthorpe, west of the castle. Climb the stairs and Harold is in the western room.",
        },
        {
          text: "Return to Eohric on the top floor of Burthorpe Castle to confirm Harold's story.",
          travel: "Run back east to the castle and up the stairs.",
        },
      ],
    },
    {
      title: "Get the storage room combination from Harold",
      steps: [
        {
          text: "Buy or bring an Asgarnian ale and give it to Harold upstairs in the Toad and Chicken.",
          travel: "The pub bar downstairs sells Asgarnian ale — buy one there and carry it up to Harold.",
        },
        {
          text: "Either give Harold a Blurberry special / Premade blurb' sp. for an automatic win, OR keep gambling with him until he goes broke.",
        },
        { text: "Read the IOU note he gives you to learn the combination of coloured balls." },
        {
          text: "Go to the Burthorpe Castle storage room and place the 5 coloured balls on the table in the order shown by the IOU.",
          travel: "The storage room is on the ground floor of Burthorpe Castle, off the main corridor.",
          notes: ["Each player's combination is randomised — follow YOUR IOU."],
        },
      ],
    },
    {
      title: "Find a route up Death Plateau",
      steps: [
        {
          text: "Talk to Saba in his cave about another way up Death Plateau.",
          travel: "From Burthorpe Castle head north-west up the path towards Death Plateau; Saba's cave mouth is on the left of the trail.",
        },
        {
          text: "Talk to Tenzing the sherpa in his house and accept his trade for spiked climbing boots.",
          travel: "Leave Saba's cave and take the southern path west — Tenzing's cabin is the lone house at the foot of the mountain.",
        },
      ],
    },
    {
      title: "Make the spiked boots",
      steps: [
        {
          text: "Walk to Dunstan the smith at his anvil in north-east Burthorpe.",
          travel: "Run back east into Burthorpe; Dunstan stands by the anvil north-east of the castle (anvil icon on the minimap).",
        },
        {
          text: "Return to Denulth in the Imperial Guard tent to get a certificate authorising Dunstan to use Imperial Guard equipment.",
          travel: "The tent is south of the Games Room, a short run south-west of Dunstan's anvil.",
        },
        { text: "Bring Dunstan the climbing boots (bought from Tenzing), the certificate, and an iron bar — he forges spiked boots." },
      ],
    },
    {
      title: "Scout the alternate path",
      steps: [
        {
          text: "Return to Tenzing in his cabin with 10 bread, 10 cooked trout, and the spiked boots.",
          travel: "Head north-west out of Burthorpe past Saba's cave, then take the southern path west to the cabin.",
        },
        { text: "Equip the spiked boots and exit through the north door of his cabin." },
        { text: "Climb the stile and follow the trail north and east past the second mountain goat." },
        { text: "Continue along the path until the message 'I think this is far enough' appears." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Denulth in the Imperial Guard tent in Burthorpe with the alternate-route info and combination.",
          travel: "Games necklace to Burthorpe, then walk south from the Games Room to the big soldier tent.",
        },
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
