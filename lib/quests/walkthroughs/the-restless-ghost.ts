import type { QuestWalkthrough } from "../types";

export const theRestlessGhost: QuestWalkthrough = {
  startPoint: "Talk to Father Aereck in the Lumbridge church (east side of Lumbridge Castle).",
  itemsRequired: ["None to start"],
  recommended: [
    "Some food if you're a low-level character (a level 13 skeleton attacks during the quest)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Enter the Lumbridge church, just east of Lumbridge Castle." },
        { text: "Talk to Father Aereck in the Lumbridge church (east side of Lumbridge Castle). He'll mention a ghost in the graveyard." },
        { text: "Agree to help him deal with it." },
        { text: "He directs you to Father Urhney." },
      ],
    },
    {
      title: "Get the Amulet of Ghostspeak",
      steps: [
        {
          text: "Walk south-west into Lumbridge Swamp to Father Urhney's small house.",
          notes: ["His shack sits in the middle of the swamp, west of the candle-maker."],
        },
        { text: "Talk to Father Urhney. He gives you the Amulet of Ghostspeak." },
        { text: "Wear the Amulet of Ghostspeak." },
      ],
    },
    {
      title: "Find and return the ghost's skull",
      steps: [
        { text: "Return to the Lumbridge church graveyard and search the coffin near the ghost." },
        { text: "Talk to the ghost in Lumbridge graveyard (with the amulet equipped). He says his skull is missing." },
        {
          text: "Travel to the Wizards' Tower, south-west of Lumbridge across the river.",
          notes: ["Cross the bridge south of Draynor or use the south-west exit out of Lumbridge."],
        },
        { text: "Climb down to the basement of the Wizards' Tower." },
        {
          text: "Search the altar to find the ghost's skull.",
          notes: ["A level 13 skeleton appears and attacks. Kill it or flee — either works."],
        },
        { text: "Return to the coffin in Lumbridge graveyard and use the skull on the coffin." },
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
