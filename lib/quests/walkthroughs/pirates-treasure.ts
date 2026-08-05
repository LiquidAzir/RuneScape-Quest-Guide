import type { QuestWalkthrough } from "../types";

export const piratesTreasure: QuestWalkthrough = {
  startPoint:
    "Talk to Redbeard Frank by the Rusty Anchor Inn on the Port Sarim waterfront. Falador Teleport and run south out of the south gate straight down the road to Port Sarim, or amulet of glory to Draynor Village and run west along the coast road.",
  itemsRequired: [
    "60 coins (for boat fare)",
    "1 Karamja rum (you'll buy it on Karamja)",
    "Spade",
  ],
  recommended: ["Some coins for trips"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Port Sarim and find Redbeard Frank by the Rusty Anchor Inn on the waterfront.",
          travel:
            "Falador Teleport, leave by the south gate and follow the road south into Port Sarim. Amulet of glory to Draynor Village then running west works too, as does the free Lumbridge-to-Port Sarim run west past Draynor.",
        },
        { text: "Talk to Redbeard Frank. He wants a bottle of Karamja rum from the island." },
      ],
    },
    {
      title: "Smuggle the Karamja rum",
      steps: [
        {
          text: "Walk to the southern jetty on Port Sarim's docks and pay 30gp to the Customs Officer to sail to Karamja.",
          travel:
            "The customs jetty is the southernmost of the Port Sarim docks, below the Entrana monks' boat. The trip lands you at Musa Point on Karamja's north-east coast.",
        },
        {
          text: "On Karamja, buy a Karamja rum from the bar in Musa Point.",
          travel:
            "From the Musa Point dock walk a few steps north-east — the bar is the first building you meet, just inland from the jetty.",
        },
        {
          text: "You can't simply carry rum back — customs will confiscate it. Instead, walk south from the bar to the banana plantation.",
          travel:
            "Follow the path south-east out of Musa Point past the general store; the fenced plantation and its hut are a short run south.",
        },
        { text: "Talk to Luthas at the plantation hut and agree to fill a crate with bananas for him." },
        { text: "Pick bananas and put them in the crate. Hide the rum in the crate before the last banana." },
        { text: "Talk to Luthas at the plantation hut to claim your pay." },
        {
          text: "Sail back to Port Sarim.",
          travel: "Return north to the Musa Point dock and pay the Customs Officer 30gp for the trip back.",
        },
      ],
    },
    {
      title: "Recover the rum and return to Frank",
      steps: [
        {
          text: "Talk to Wydin in his food shop in Port Sarim and ask for a job.",
          travel:
            "Wydin's Food Store is on Port Sarim's main street just up from the docks — look for the shop sign with the fruit on it.",
        },
        { text: "Enter the back room of the shop and search the crate to recover your hidden rum." },
        { text: "Return to Redbeard Frank on the Port Sarim waterfront and give him the Karamja rum." },
        { text: "He gives you the key to a chest containing a treasure map." },
      ],
    },
    {
      title: "Follow the treasure map",
      steps: [
        {
          text: "Use the key on the chest upstairs in the Blue Moon Inn in Varrock.",
          travel:
            "Varrock Teleport to the central square, then run a short way west — the Blue Moon Inn is the large pub on the south side of the main east-west road. Climb the stairs and the chest is in the upstairs room.",
        },
        { text: "Read the treasure map." },
        {
          text: "Travel to Falador Park and dig at the spot shown on the map.",
          travel:
            "Falador Teleport, then run north-east to the walled park in the north-east of the city. The dig spot is the patch of white flowers in the centre of the park — use a spade while standing on it.",
          notes: ["Use a spade in the white-flowered area in the centre of Falador Park."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Pick up the treasure chest from the dig spot." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "450 coins",
    "1 Gold ring",
    "1 Emerald",
    "2 Gold bars",
  ],
};
