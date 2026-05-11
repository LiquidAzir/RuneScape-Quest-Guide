import type { QuestWalkthrough } from "../types";

export const ratcatchers: QuestWalkthrough = {
  startPoint: "Talk to Gertrude west of Varrock.",
  itemsRequired: [
    "A cat or kitten",
    "4 cheese (you'll poison them later)",
    "Materials for rat poison: empty vial + cleaned kwuarm + red spider eggs",
    "Cleaned marrentill",
    "Unicorn horn dust",
    "Bucket of milk",
    "Catspeak amulet",
    "Pot of weeds",
    "Tinderbox",
    "101 coins (51 with Ring of Charos)",
  ],
  recommended: [
    "8-10 fish to heal your cat in fights",
    "Ring of Charos (a) for cheaper snake charm",
    "Teleports for fast travel between Varrock, Ardougne, Keldagrim, Port Sarim, Pollnivneach",
  ],
  enemies: ["The King Rat (your cat fights it, not you)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Gertrude west of Varrock to start." },
        { text: "Find Phingspet or Grimesquit in the Varrock Sewers." },
        { text: "Catch 8 rats with your cat in the sewers." },
        { text: "Report back to the sisters." },
      ],
    },
    {
      title: "Jimmy Dazzler — Ardougne mansion",
      steps: [
        { text: "Talk to Jimmy Dazzler west of the Ardougne pub." },
        { text: "Read his directions to the mansion." },
        {
          text: "Sneak through the mansion avoiding guards and catch 6 rats: 1 in the NW, 2 in the SE upstairs, 3 downstairs.",
        },
        { text: "Return to Jimmy Dazzler west of the Ardougne pub." },
      ],
    },
    {
      title: "Hooknosed Jack — Varrock warehouse",
      steps: [
        { text: "Talk to Hooknosed Jack near the Varrock rat pits." },
        { text: "Make rat poison using empty vial + cleaned kwuarm + red spider eggs." },
        { text: "Poison 4 cheeses with the rat poison." },
        { text: "Place the poisoned cheese in the rat holes around the warehouse." },
        { text: "Use your cat on the corner hole and heal it with fish during the fight." },
        { text: "Return to Hooknosed Jack near the Varrock rat pits." },
      ],
    },
    {
      title: "Smokin' Joe — Keldagrim",
      steps: [
        { text: "Travel to Keldagrim." },
        { text: "Talk to Smokin' Joe." },
        { text: "Combine the pot of weeds with a tinderbox to make a smouldering pot." },
        { text: "Use the smouldering pot on the rat hole." },
        { text: "Equip the catspeak amulet and accept your cat's offer of help." },
      ],
    },
    {
      title: "The Face and Felkrash",
      steps: [
        { text: "Travel to the Port Sarim rat pits manhole." },
        { text: "Climb down and talk to Felkrash." },
        { text: "Climb back up and talk to The Face." },
      ],
    },
    {
      title: "Charm the King Rat",
      steps: [
        { text: "Travel to Ali the Snake Charmer in Pollnivneach." },
        { text: "Pay 101gp (or 51gp with Ring of Charos) for a snake charm." },
        { text: "Return to the Port Sarim manhole and use the snake charm." },
        {
          text: "Play the notes in this order: D, G, E, F#, then raise the octave and play D, B, C#, A.",
        },
        { text: "The cutscene plays — the King Rat is defeated." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Felkrash in the rat pits." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "4,500 Thieving experience",
    "Rat pole",
    "Ability to train cats into wily/lazy variants",
    "Access to the Rat Pits minigame and minigame teleport",
  ],
};
