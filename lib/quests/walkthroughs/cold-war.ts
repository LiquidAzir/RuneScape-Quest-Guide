import type { QuestWalkthrough } from "../types";

export const coldWar: QuestWalkthrough = {
  startPoint:
    "Talk to Larry by the penguin enclosure in Ardougne Zoo. Fairy ring BIS lands you inside the zoo; otherwise Ardougne Teleport to the market square and run south-east — the zoo is the walled park in the south-east of East Ardougne.",
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
        {
          text: "Talk to Larry by the penguin enclosure in Ardougne Zoo with all required items.",
          travel:
            "Fairy ring BIS puts you in Ardougne Zoo. Otherwise Ardougne Teleport and run south-east across the city to the zoo gates; Larry stands watching the penguin pen.",
        },
        { text: "Travel to the iceberg with Larry (he arranges the trip from the zoo)." },
        { text: "Build a hut using oak planks + steel nails on the build spot." },
        { text: "Cover the hut in snow with your spade." },
        { text: "Enter the bird hide and watch the penguin emotes." },
        {
          text: "Return to Rellekka and read the clockwork book Larry gave you at the dock west of town.",
          travel:
            "Leaving the iceberg drops you back near Rellekka. If you need to return later: enchanted lyre teleports straight to Rellekka, or Camelot Teleport and run north past the Sinclair Mansion, or fairy ring AJR and run north-west.",
        },
      ],
    },
    {
      title: "Clockwork penguin and reconnaissance",
      steps: [
        {
          text: "Visit your player-owned house and use the crafting table to make a clockwork mechanism.",
          travel: "Cast Teleport to House (or use a house teleport tablet), then enter the workshop.",
        },
        { text: "Use the clockwork to make a clockwork penguin toy." },
        {
          text: "Bring the penguin to Larry at Ardougne Zoo.",
          travel: "Fairy ring BIS, or Ardougne Teleport and run south-east to the zoo.",
        },
        {
          text: "Travel to the Lumbridge sheep pen with Larry, disguised in the penguin suit.",
          travel:
            "Lumbridge Home Teleport, then run north-west out of town along the Draynor road — the sheep field is the fenced pasture west of the river, beside Fred the Farmer's house.",
        },
        { text: "Greet the disguised penguins with the right emotes." },
        { text: "Get info from Fred the Farmer about penguin activity at his farmhouse beside the sheep pen." },
        {
          text: "Pick up the cowbell from the Lumbridge cow field and 5 feathers from the chicken pens.",
          travel:
            "Cross the bridge east of Lumbridge Castle: the cow field is straight ahead, and the chicken coops are just north of it.",
        },
        {
          text: "Return to the Rellekka dock and talk to Larry to sail back to the iceberg north of Rellekka.",
          travel: "Enchanted lyre to Rellekka (or Camelot Teleport and run north), then head to the dock on the west side of town.",
        },
      ],
    },
    {
      title: "Infiltrate the outpost",
      steps: [
        { text: "Equip the penguin suit and approach the KGP Agent north-west of Larry on the iceberg." },
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
        {
          text: "Talk to Larry by the penguin enclosure in Ardougne Zoo to finish the quest.",
          travel: "Fairy ring BIS straight into the zoo, or Ardougne Teleport and run south-east across the city.",
        },
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
