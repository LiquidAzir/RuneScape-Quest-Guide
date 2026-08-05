import type { QuestWalkthrough } from "../types";

export const theRestlessGhost: QuestWalkthrough = {
  startPoint:
    "Talk to Father Aereck in the Lumbridge church, the small chapel immediately east of Lumbridge Castle. Lumbridge Home Teleport, leave the castle courtyard by the east gate and cross the road — the church door faces west.",
  itemsRequired: ["None to start"],
  recommended: [
    "Some food if you're a low-level character (a level 13 skeleton attacks during the quest)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Father Aereck inside the Lumbridge church, just east of Lumbridge Castle — he'll mention a ghost haunting the graveyard.",
          travel:
            "Lumbridge Home Teleport. From the castle courtyard walk out the east gate and across the road; the church is the chapel with the graveyard behind it, and Father Aereck stands by the altar.",
        },
        { text: "Agree to help him deal with it." },
        { text: "He directs you to Father Urhney, who has moved out into Lumbridge Swamp." },
      ],
    },
    {
      title: "Get the Amulet of Ghostspeak",
      steps: [
        {
          text: "Talk to Father Urhney in his one-room shack in Lumbridge Swamp — he gives you the Amulet of Ghostspeak.",
          travel:
            "From Lumbridge Castle run south past the general store and down into the swamp, then head west along the south bank of the river. Urhney's shack is the lone small house out in the middle of the swamp, west of the swamp caves entrance and the candle maker's road.",
        },
        { text: "Wear the Amulet of Ghostspeak." },
      ],
    },
    {
      title: "Find and return the ghost's skull",
      steps: [
        {
          text: "Return to the Lumbridge church graveyard and search the coffin next to the ghost.",
          travel:
            "Run back north-east out of the swamp to Lumbridge and round the castle to the east — the graveyard is the fenced plot directly north of the church.",
        },
        { text: "Talk to the ghost in the graveyard with the amulet equipped — he says his skull is missing." },
        {
          text: "Travel to the Wizards' Tower, on the peninsula south-west of Lumbridge across the River Lum.",
          travel:
            "From Lumbridge run south-west out of town and cross the bridge over the Lum at the north edge of the swamp, then follow the path west and south to the tower. Alternative: amulet of glory to Draynor Village and run south-east along the coast.",
          notes: ["No entry requirements — just walk in the front door."],
        },
        { text: "Climb down the ladder to the basement of the Wizards' Tower." },
        {
          text: "Search the altar in the basement to find the ghost's skull.",
          notes: ["A level 13 skeleton appears and attacks. Kill it or run for the ladder — either works."],
        },
        {
          text: "Return to the coffin in the Lumbridge graveyard and use the skull on it.",
          travel:
            "Back out of the tower, east over the Lum bridge and north into Lumbridge, then round the castle to the graveyard north of the church.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to the ghost in Lumbridge graveyard one final time to free his spirit." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,125 Prayer experience",
    "Keep the Amulet of Ghostspeak (useful for several future quests)",
  ],
};
