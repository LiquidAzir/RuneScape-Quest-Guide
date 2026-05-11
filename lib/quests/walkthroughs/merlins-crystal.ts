import type { QuestWalkthrough } from "../types";

export const merlinsCrystal: QuestWalkthrough = {
  startPoint: "Talk to King Arthur in Camelot.",
  itemsRequired: ["Bread", "Tinderbox", "Bucket of wax", "Bat bones"],
  recommended: [
    "Combat 20+",
    "Some food and a weapon for Sir Mordred",
    "Camelot, Falador, Varrock, Taverley, Port Sarim teleports",
    "Stamina/energy potions",
  ],
  enemies: ["Sir Mordred (level 39) — flinch or recoil", "Renegade Knights", "Optional: Giant bat (level 27) for bones"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to King Arthur in Camelot — pick 'I want to become a knight of the round table!'." },
        { text: "Talk to Sir Gawain in the courtyard about how Merlin got trapped." },
        { text: "Talk to Sir Lancelot upstairs about Morgan Le Faye's stronghold." },
        { text: "Travel to Catherby and use insect repellent on the beehives, then a bucket on them for a bucket of wax." },
        { text: "Hide in the crate east of the candle-maker's shop and wait for the cutscene." },
      ],
    },
    {
      title: "Inside the keep",
      steps: [
        { text: "Climb to the top floor, defeating Renegade Knights as needed." },
        { text: "Defeat Sir Mordred (level 39). You can flinch him if low level." },
        { text: "Spare his life when prompted by Morgan Le Faye." },
        { text: "Exit; kill a Giant bat for bat bones if you don't have any." },
      ],
    },
    {
      title: "Get the black candle",
      steps: [
        { text: "Return to Catherby and ask the candle-maker for black candles." },
        { text: "Receive the black candle." },
      ],
    },
    {
      title: "Get Excalibur",
      steps: [
        { text: "Talk to The Lady of the Lake south-east of Taverley about Excalibur." },
        { text: "Travel to Port Sarim with bread in your inventory." },
        { text: "Enter the jewellery shop and give the bread to the beggar (the Lady in disguise)." },
      ],
    },
    {
      title: "Perform the ritual",
      steps: [
        { text: "Travel to the Zamorakian temple in south-east Varrock." },
        { text: "Read the inscription on the Chaos Altar." },
        { text: "Return to Camelot Castle with a tinderbox." },
        { text: "Walk to the ritual site north-east of the castle (the red star among 8 columns)." },
        { text: "Light the black candle while standing on the star." },
        { text: "Drop the bat bones on the star." },
        { text: "Speak the magic words: 'Snarthon Candtrick Termanto'." },
      ],
    },
    {
      title: "Free Merlin and finish",
      steps: [
        { text: "Enter the castle and climb the south-east tower." },
        { text: "Use Excalibur on the crystal trapping Merlin." },
        { text: "Talk to King Arthur in Camelot to complete the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "6 Quest Points",
    "Excalibur (special attack temporarily boosts Defence)",
    "Antique lamp (1,000 XP in any skill 20+) and 5 Kudos from Historian Minas",
    "Honorary Knight of the Round Table title",
  ],
};
