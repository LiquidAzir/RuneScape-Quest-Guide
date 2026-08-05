import type { QuestWalkthrough } from "../types";

export const misthalinMystery: QuestWalkthrough = {
  startPoint:
    "Talk to Abigale in the south-eastern corner of Lumbridge Swamp, by the fishing spots on the shore. Lumbridge Home Teleport, then run south past the church and keep going south-east through the swamp to the water's edge.",
  itemsRequired: [
    "Bucket (in-quest)",
    "Tinderbox (in-quest)",
    "Knife (in-quest)",
  ],
  recommended: [],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Abigale by the fishing spots in the south-eastern corner of Lumbridge Swamp and offer to help.",
          travel:
            "Lumbridge Home Teleport, run south out of the castle grounds past the church, then south-east across the swamp to the shoreline — Abigale stands beside her rowboat next to the fishing spots.",
        },
        {
          text: "Board Abigale's boat to sail south to the manor island.",
          travel: "The boat is right beside Abigale — it drops you at the island's dock, north of the manor.",
        },
        { text: "Fill a bucket at the fountain in the manor grounds if you don't have one." },
        { text: "Walk around to the west side of the manor." },
        { text: "Use the bucket on the rainwater barrel to empty it." },
        { text: "Take the manor key from the bottom of the barrel." },
        { text: "Enter the manor through the front door." },
      ],
    },
    {
      title: "Riddle 1 — explosion",
      steps: [
        { text: "Pick up the knife from the table if needed." },
        { text: "Try the pink-knobbed door." },
        { text: "Read the note on the ground." },
        { text: "Use a knife on the gloomy valley painting in the south-west room; search it for the ruby key." },
        { text: "Take the tinderbox from the south-east room." },
        { text: "Light all 4 unlit candles with the tinderbox." },
        { text: "Light the barrel with the fuse." },
        { text: "Exit to trigger the explosion." },
      ],
    },
    {
      title: "Riddle 2 — piano",
      steps: [
        { text: "Re-enter the south-east room and climb the damaged wall." },
        { text: "Head north then west; observe the tree near Lacey." },
        { text: "Choose any response to the Killer." },
        { text: "Read the note." },
        { text: "Play D-E-A-D on the north-eastern piano." },
        { text: "Search the piano for the emerald key." },
      ],
    },
    {
      title: "Riddle 3 — fireplace gems",
      steps: [
        { text: "Climb back via the damaged wall." },
        { text: "Open the green-knobbed door north of the entrance." },
        { text: "Try the door near the Bandos godsword." },
        { text: "Read the note." },
        { text: "Use a knife on the unlit fireplace." },
        { text: "Enter gems in order: Sapphire, Diamond, Zenyte, Emerald, Onyx, Ruby." },
        { text: "Search the fireplace for the sapphire key." },
      ],
    },
    {
      title: "Showdown",
      steps: [
        { text: "Open the blue-knobbed door in the painting room." },
        { text: "Watch for black shadows showing the killer's wardrobe." },
        { text: "Push the mirror to face the wardrobe before knives are thrown — repeat until cutscene." },
        { text: "Take and wield the killer's knife." },
        { text: "Attack Abigale (she's the killer)." },
        { text: "Try to exit the room." },
        { text: "Talk to Mandy outside the manor." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "Uncut ruby + emerald + sapphire", "600 Crafting experience"],
};
