import type { QuestWalkthrough } from "../types";

export const theGardenOfDeath: QuestWalkthrough = {
  startPoint:
    "Travel to the campsite at the southern end of the Kebos Lowlands, just east of the chasm leading down to the Lizardman caves (south of Mount Karuulm). Search the small tent at the campsite to start.",
  itemsRequired: ["Secateurs (a pair spawns in the camping equipment at the start)"],
  recommended: [
    "Combat 20+ (no mandatory fights, but jungle can have aggressive Lizardmen)",
    "Antipoison",
    "Book of the Dead or Kharedst's memoirs (for Kourend city teleports)",
    "Fairy ring access (CKR = Kebos near Molch)",
    "Stamina/energy potions",
  ],
  sections: [
    {
      title: "Find the journal at the campsite",
      steps: [
        {
          text: "Search the small tent at the Kebos campsite (south Kebos Lowlands, east of the chasm) for Kasonde's journal and read it.",
        },
        {
          text: "Take the secateurs from the camping equipment beside the tent.",
        },
        {
          text: "Climb down the hole in the ground next to the tent.",
        },
      ],
    },
    {
      title: "First stone tablet (under the campsite)",
      steps: [
        {
          text: "In the cave below the campsite, search the stone table at the centre to read the first tablet.",
        },
        {
          text: "Read the word translations scroll Kasonde left near the table.",
        },
        {
          text: "Input the words on the tablet pedestal in this order: Island, Water, Time, Vessel, North.",
        },
      ],
    },
    {
      title: "Lake Molch Island — second tablet",
      steps: [
        {
          text: "Travel to Molch in the Kebos Lowlands (fairy ring CKR, then run south to Molch). On the dock, talk to Boaty and pay 50gp to sail to Molch Island in the centre of the lake.",
        },
        {
          text: "On the island, walk to the central rock formation and enter the hole. Inspect the vines blocking the next chamber for a dirty note.",
        },
        {
          text: "Use the secateurs to cut the vines, then squeeze through.",
        },
        {
          text: "Search the stone table inside for the second tablet.",
        },
        {
          text: "Input the words: West, Poison, Body, Food, Earth.",
        },
      ],
    },
    {
      title: "Xeric's Shrine — third tablet",
      steps: [
        {
          text: "Travel to Xeric's Shrine (south-east Kebos, on the cliffside above the Lizardmen caves; teleport with Xeric's talisman → Inferno or → Heart, then run). The shrine is a stone-arched ruin on the hillside.",
        },
        {
          text: "Enter the hole inside the shrine and search the stone table for the third tablet.",
        },
        {
          text: "Input the words: Make, Yes, No, Move, Arrive, East, South.",
        },
      ],
    },
    {
      title: "Ruins of Morra — final tablet",
      steps: [
        {
          text: "Travel to the Ruins of Morra (the small ruined village on the western edge of Kebos Lowlands, west of Molch on the coast).",
        },
        {
          text: "Search the stone table inside the ruins for the final tablet.",
        },
        {
          text: "Input the words: Few, Big, Sun, Moon, Life, Death, Mind, Home, Air, Fire.",
        },
        {
          text: "Read the warning note that drops when you finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 Farming experience",
    "Sets up the lore for Desert Treasure II — The Fallen Empire (Kasonde returns there)",
  ],
};
