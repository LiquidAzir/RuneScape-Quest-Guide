import type { QuestWalkthrough } from "../types";

export const gardenOfTranquillity: QuestWalkthrough = {
  startPoint: "Talk to Ellamaria in the garden east of Varrock Palace.",
  itemsRequired: [
    "Ring of charos (from Creature of Fenkenstrain)",
    "Rake + seed dibber + spade + secateurs + watering can + gardening trowel",
    "3-6 onion seeds",
    "3-6 cabbage seeds",
    "1 marigold seed",
    "Filled plant pot",
    "Rune or pure essence",
    "Hammer or chisel",
    "Pestle and mortar",
    "2 plant cures",
    "2 buckets of compost (or supercompost)",
    "Fishing rod",
  ],
  recommended: ["Amulet of nature", "Multiple teleports for travel during seed waits"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Ellamaria at the palace garden." },
        { text: "Talk to the Wise Old Man in Draynor Village with the Ring of Charos." },
        { text: "Answer his quiz (7 questions — wiki has the answer key)." },
      ],
    },
    {
      title: "Gather seeds from the gardener NPCs",
      steps: [
        { text: "Talk to Lyra west of Port Phasmatys; grow onions; receive orchid seeds." },
        { text: "Talk to Kragen north of Ardougne; grow cabbages; receive snowdrop seeds." },
        { text: "Talk to Elstan south of Falador; grow marigolds; receive delphinium seeds." },
        { text: "Talk to Dantaera in Catherby; get a white tree cutting from Ice Mountain." },
        {
          text: "Talk to Brother Althric at Edgeville monastery; throw your ring in the well, collect rose seeds, then retrieve the ring.",
        },
      ],
    },
    {
      title: "Cure the vines",
      steps: [
        { text: "Talk to Bernald behind the Burthorpe pub." },
        { text: "Treat diseased vines with plant cure." },
        { text: "Apply rune dust to a second plant cure and treat the vines again." },
        { text: "Receive vine seeds from Bernald." },
      ],
    },
    {
      title: "Move statues",
      steps: [
        { text: "Get a trolley from Ellamaria." },
        { text: "Transport the Lumbridge Castle statue to the eastern plinth." },
        { text: "Transport the Falador statue to the southern plinth." },
      ],
    },
    {
      title: "Plant the garden + finish",
      steps: [
        { text: "Fill plant pots with compost." },
        { text: "Plant all the seeds (10-15 mins to grow)." },
        { text: "Talk to Ellamaria in the garden east of Varrock Palace." },
        { text: "Talk to King Roald in Varrock Palace with the ring equipped." },
        { text: "Watch the cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "5,000 Farming experience",
    "Activated Ring of Charos (charm-influence on more NPCs)",
    "Apple tree seed + Acorn + 5 Guam seeds + 4-dose Compost potion",
    "Access to white tree fruit (regrows periodically)",
  ],
};
