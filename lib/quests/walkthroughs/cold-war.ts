import type { QuestWalkthrough } from "../types";

export const coldWar: QuestWalkthrough = {
  startPoint: "Talk to Larry at Ardougne Zoo (near the penguin enclosure).",
  itemsRequired: [
    "10 Oak planks",
    "10 Steel nails",
    "Hammer",
    "Spade",
    "Clockwork (made on a House crafting table) or steel bar to make one",
    "Plank, silk, swamp tar",
    "5 Feathers",
    "Mahogany plank",
    "Leather",
    "Cowbell (from the Lumbridge cow field)",
    "Raw cod (or a Ring of Charos (a))",
  ],
  recommended: [
    "Combat 30+",
    "Construction 34+ for the clockwork crafting table",
    "Player-owned house with crafting table",
    "Teleports for fast travel between Lumbridge, Rellekka, Ardougne",
  ],
  enemies: ["Icelord (level 51) — defeat 1-3 in the war room"],
  sections: [
    {
      title: "Penguin spotting",
      steps: [
        { text: "Talk to Larry at Ardougne Zoo with all required items." },
        { text: "Travel to the iceberg with Larry." },
        { text: "Build a hut using oak planks + steel nails on the build spot." },
        { text: "Cover the hut in snow with your spade." },
        { text: "Enter the bird hide and watch the penguin emotes." },
        { text: "Return to Rellekka near the dock west of town and read the clockwork book Larry gave you." },
      ],
    },
    {
      title: "Clockwork penguin and reconnaissance",
      steps: [
        { text: "Visit your player-owned house and use the crafting table to make a clockwork mechanism." },
        { text: "Use the clockwork to make a clockwork penguin toy." },
        { text: "Bring the penguin to Larry." },
        { text: "Travel to the Lumbridge sheep pen disguised in the penguin suit with Larry." },
        { text: "Greet the disguised penguins with the right emotes." },
        { text: "Get info from Fred the Farmer about penguin activity." },
        { text: "Pick up the cowbell and 5 feathers from the Lumbridge area." },
        { text: "Return to the iceberg north of Rellekka by talking to Larry at the Rellekka dock." },
      ],
    },
    {
      title: "Infiltrate the outpost",
      steps: [
        { text: "Equip the penguin suit and approach the KGP Agent north-west of Larry." },
        { text: "Greet him and meet Noodle." },
        { text: "Get the ID card and mission report from Noodle." },
        { text: "Enter the avalanche gateway and head west." },
      ],
    },
    {
      title: "Penguin agility course",
      steps: [
        { text: "Climb down the steps and navigate the water, avoiding ice." },
        { text: "Cross stepping stones to the ice platform." },
        { text: "Tread softly across the icicle shelves." },
        { text: "Climb the ice walls and slide down the hill." },
        { text: "Talk to the Agility Instructor at the bottom." },
      ],
    },
    {
      title: "Bongos and final fight",
      steps: [
        { text: "Re-enter the suit and talk to the KGP Agent at the control panel." },
        { text: "Craft penguin bongos from a mahogany plank + leather." },
        { text: "Give the bongos to Ping or Pong in the east room." },
        { text: "Use the control panel to access the war room." },
        { text: "Defeat the icicle-wielding Icelord." },
        { text: "Exit via the western door and return to the surface." },
        { text: "Talk to Larry at Ardougne Zoo (near the penguin enclosure) to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Agility experience",
    "2,000 Crafting experience",
    "1,500 Construction experience",
    "Penguin suit (wear and walk among penguins)",
    "Access to the penguin agility course",
  ],
};
