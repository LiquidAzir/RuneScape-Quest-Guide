import type { QuestWalkthrough } from "../types";

export const theGardenOfDeath: QuestWalkthrough = {
  startPoint:
    "Search the small tent at the campsite in the southern Kebos Lowlands to start. Fairy ring BLS (south of Mount Quidamortem) then run south-east to the camp; without a fairy ring, take the Lovakengj minecart to Mount Quidamortem and run south-east.",
  itemsRequired: ["Secateurs (a pair spawns in the camping equipment at the start)"],
  recommended: [
    "Combat 20+ (no mandatory fights, but jungle can have aggressive Lizardmen)",
    "Antipoison",
    "Book of the Dead or Kharedst's memoirs (for Kourend city teleports)",
    "Fairy ring access (BLS for the campsite, DJR for Lake Molch)",
    "Stamina/energy potions",
  ],
  sections: [
    {
      title: "Find the journal at the campsite",
      steps: [
        {
          text: "Search the small tent at the Kebos campsite for Kasonde's journal and read it.",
          travel:
            "Fairy ring BLS (south of Mount Quidamortem), then run south-east to the camp on the edge of the jungle. No fairy ring: Lovakengj minecart to Mount Quidamortem and run south-east on foot.",
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
          text: "Go to the Molch dock on Lake Molch, talk to Boaty and pay to sail to Molch Island in the centre of the lake.",
          travel:
            "Fairy ring DJR (Chasm of Fire) and run west to the lake shore. Alternatives: Rada's blessing 3/4 to Mount Karuulm and run south-east, or Xeric's talisman to Xeric's Glade and run south. Boaty waits on the wooden jetty at Molch.",
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
          text: "Travel to Xeric's Shrine, the stone-arched ruin on the hillside above the lizardman caves.",
          travel:
            "Board Boaty on Molch Island and select Molch to get back to the mainland dock, then run west and then south up to the shrine.",
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
          text: "Travel to the Ruins of Morra, the ruined settlement south-west of Shayzien.",
          travel:
            "Easiest is Boaty at the Molch dock — pick the Shayzien destination, then run south to the ruins. Otherwise Kharedst's memoirs / Book of the Dead to Shayzien and run south, or Xeric's talisman to Xeric's Look-out and run south-west.",
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
