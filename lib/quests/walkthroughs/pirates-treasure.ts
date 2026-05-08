import type { QuestWalkthrough } from "../types";

export const piratesTreasure: QuestWalkthrough = {
  startPoint: "Talk to Redbeard Frank in the Port Sarim pub.",
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
        { text: "Travel to Port Sarim and enter the Rusty Anchor Inn." },
        { text: "Talk to Redbeard Frank. He wants a bottle of Karamja rum from the island." },
      ],
    },
    {
      title: "Smuggle the Karamja rum",
      steps: [
        { text: "Walk to Port Sarim's docks and pay 30gp to Customs Officer Seman to sail to Karamja." },
        { text: "On Karamja, buy a Karamja rum from the bar (Zambo's bar in the village)." },
        {
          text: "You can't simply carry rum back — customs will confiscate it. Instead, go to the banana plantation south of the bar.",
        },
        { text: "Talk to Luthas at the plantation hut and agree to fill a crate with bananas for him." },
        { text: "Pick bananas and put them in the crate. Hide the rum in the crate before the last banana." },
        { text: "Talk to Luthas to claim your pay." },
        { text: "Sail back to Port Sarim." },
      ],
    },
    {
      title: "Recover the rum and return to Frank",
      steps: [
        { text: "Talk to Wydin in his food shop in Port Sarim and ask for a job." },
        { text: "Enter the back room of the shop and search the crate to recover your hidden rum." },
        { text: "Return to Redbeard Frank and give him the Karamja rum." },
        { text: "He gives you the key to a chest containing a treasure map." },
      ],
    },
    {
      title: "Follow the treasure map",
      steps: [
        { text: "Use the key on the chest upstairs in the Blue Moon Inn in Varrock." },
        { text: "Read the treasure map." },
        {
          text: "Travel to the Falador Park and dig at the location shown on the map (between the central trees).",
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
