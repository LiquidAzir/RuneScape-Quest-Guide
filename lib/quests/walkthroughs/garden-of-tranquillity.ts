import type { QuestWalkthrough } from "../types";

export const gardenOfTranquillity: QuestWalkthrough = {
  startPoint:
    "Talk to Ellamaria in the garden east of Varrock Palace. Getting there: Varrock Teleport to the square, then run north-east to the palace and round to the walled garden behind its east wall — Ellamaria is the woman standing among the flower beds.",
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
        {
          text: "Talk to Ellamaria in the garden east of Varrock Palace.",
          travel:
            "Varrock Teleport to the square, then north-east to the palace and around to the walled garden on its east side.",
        },
        {
          text: "Talk to the Wise Old Man in Draynor Village while wearing the Ring of Charos.",
          travel:
            "Amulet of glory to Draynor Village. His house is directly south of the Draynor bank, on the corner facing the market — he is usually upstairs or wandering outside.",
        },
        { text: "Answer his quiz (7 questions — wiki has the answer key)." },
      ],
    },
    {
      title: "Gather seeds from the gardener NPCs",
      steps: [
        {
          text: "Talk to Lyra at the allotments west of Port Phasmatys, grow onions for her, and collect the orchid seeds.",
          travel:
            "Ectophial to the Port Phasmatys ectofuntus, then run south and west out of the city gate — the allotment patches are just outside on the road west.",
        },
        {
          text: "Talk to Kragen at the Ardougne allotments, grow cabbages for him, and collect the snowdrop seeds.",
          travel:
            "Ardougne Teleport (or Ardougne cloak to the monastery and run north), then head north-east out of East Ardougne to the fenced farming patches.",
        },
        {
          text: "Talk to Elstan at the Falador allotments, grow marigolds for him, and collect the delphinium seeds.",
          travel: "Falador Teleport, then run south out of the south gate — the allotments are the fenced patches just south-west of the gate by the park.",
        },
        {
          text: "Talk to Dantaera at the Catherby allotments, then cut a white tree cutting on Ice Mountain with your secateurs.",
          travel:
            "Camelot Teleport and run south-east downhill into Catherby; the patches are east of the bank. For the white tree: Falador Teleport and run north-east up Ice Mountain — the white tree stands at the summit.",
        },
        {
          text: "Talk to Brother Althric at the Edgeville Monastery, throw your ring into the well, collect the rose seeds, then retrieve the ring.",
          travel:
            "Amulet of glory to Edgeville, then run south-west down the road — the monastery is the walled chapel between Edgeville and Ice Mountain. Althric is on the ground floor.",
        },
      ],
    },
    {
      title: "Cure the vines",
      steps: [
        {
          text: "Talk to Bernald behind the Burthorpe pub.",
          travel:
            "Games necklace to Burthorpe, then walk to the Toad and Chicken pub — Bernald tends the diseased vines in the plot right behind it.",
        },
        { text: "Treat the diseased vines with a plant cure." },
        { text: "Grind rune essence and add the dust to a second plant cure, then treat the vines again." },
        { text: "Receive vine seeds from Bernald." },
      ],
    },
    {
      title: "Move statues",
      steps: [
        {
          text: "Get a trolley from Ellamaria in the Varrock Palace garden.",
          travel: "Varrock Teleport, then north-east to the palace and round to the east garden.",
        },
        {
          text: "Wheel the Lumbridge Castle statue back to the eastern plinth in the garden.",
          travel: "Lumbridge Home Teleport — the statue stands in the castle courtyard. Push the trolley back north to Varrock (or teleport with it) and place it on the eastern plinth.",
        },
        {
          text: "Wheel the Falador statue back to the southern plinth in the garden.",
          travel: "Falador Teleport — the statue is in the middle of Falador's central square, then return to the Varrock Palace garden.",
        },
      ],
    },
    {
      title: "Plant the garden + finish",
      steps: [
        { text: "Fill the plant pots with compost." },
        { text: "Plant all the seeds in the garden beds (10-15 minutes to grow)." },
        { text: "Talk to Ellamaria in the garden east of Varrock Palace." },
        {
          text: "Talk to King Roald inside Varrock Palace with the Ring of Charos equipped.",
          travel: "Walk west from the garden into the palace — King Roald is in the throne room on the ground floor.",
        },
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
