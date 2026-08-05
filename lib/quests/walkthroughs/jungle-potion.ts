import type { QuestWalkthrough } from "../types";

export const junglePotion: QuestWalkthrough = {
  startPoint:
    "Talk to Trufitus in his house north-east of Tai Bwo Wannai Village on Karamja. Fairy ring CKR lands just south of the village — run north into it. No fairy ring: take the boat from Port Sarim to Musa Point (30 coins) or a charter ship to Brimhaven, then follow the jungle road south-east.",
  itemsRequired: [],
  recommended: [
    "Combat 20+",
    "1-2 antidote++ or antipoison",
    "Some food",
    "Stamina potions",
  ],
  enemies: ["Jogre (level 53)", "Harpie Bug Swarms (level 46)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Trufitus in his house north-east of Tai Bwo Wannai Village.",
          travel:
            "Fairy ring CKR puts you just south of Tai Bwo Wannai — run north through the village and Trufitus's hut is at its north-east edge. Otherwise sail Port Sarim to Musa Point (30 coins) and run south-east through the jungle, or charter to Brimhaven and run south. Bring antipoison for the jungle spiders on the way.",
        },
        { text: "Pick dialogue options 3, then 1, then 1 to accept the quest." },
      ],
    },
    {
      title: "Snake weed",
      steps: [
        {
          text: "Go south-west of Tai Bwo Wannai to the marshy jungle vines.",
          travel:
            "From Trufitus's hut run south-west past the village to the marshy ground; the target plants are the green and yellow vines labelled 'marshy jungle vine'.",
        },
        { text: "Search the marshy jungle vines for snake weed and clean the herb." },
        { text: "Return to Trufitus in his house north-east of Tai Bwo Wannai (option 1)." },
      ],
    },
    {
      title: "Ardrigal",
      steps: [
        {
          text: "Travel north-east from Trufitus to the palm trees where the Harpie Bug Swarms live.",
          travel:
            "Head north-east out of the village along the jungle path until you reach the stand of palm trees — the level 46 Harpie Bug Swarms here are aggressive, so bring food or run past them.",
        },
        { text: "Search the palm trees for ardrigal and clean the herb." },
        { text: "Return to Trufitus in his house north-east of Tai Bwo Wannai (option 1)." },
      ],
    },
    {
      title: "Sito foil",
      steps: [
        {
          text: "Go directly south of Tai Bwo Wannai Village to the patch of scorched earth.",
          travel:
            "Run south from Trufitus straight through the village and out the far side; the burnt clearing with a fire in it is a short way south.",
        },
        { text: "Search the scorched-earth squares next to the fire for sito foil and clean the herb." },
        { text: "Return to Trufitus in his house north-east of Tai Bwo Wannai (option 1)." },
      ],
    },
    {
      title: "Volencia moss",
      steps: [
        {
          text: "Travel south-east from Trufitus to the Karamja Jungle mine.",
          travel:
            "Run south-east from the village until the pickaxe icon appears on your minimap — that's the jungle mine. Watch for the level 53 Jogres in this area.",
        },
        { text: "Search the rocks at the mine for volencia moss and clean the herb." },
        { text: "Return to Trufitus in his house north-east of Tai Bwo Wannai (option 1)." },
      ],
    },
    {
      title: "Rogue's purse",
      steps: [
        {
          text: "Go back to the Harpie Bug Swarm area and head north-west to the cave entrance.",
          travel:
            "North-east from Trufitus to the palm trees again, then north-west to the cave mouth in the hillside.",
        },
        { text: "Enter the cave and follow it south." },
        { text: "Search the green 'Fungus covered cavern wall' for rogue's purse and clean the herb." },
        { text: "Return to Trufitus in his house north-east of Tai Bwo Wannai." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "775 Herblore experience"],
};
