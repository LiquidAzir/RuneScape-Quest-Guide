import type { QuestWalkthrough } from "../types";

export const ratcatchers: QuestWalkthrough = {
  startPoint:
    "Talk to Gertrude at her small farmhouse just west of Varrock (the house with the chicken pen, just outside the western Varrock city wall, near the Champions' Guild road).",
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
        {
          text: "Talk to Gertrude at her farmhouse just west of Varrock to start.",
        },
        {
          text: "Enter the Varrock Sewers via the manhole north-east of Varrock palace (between the Grand Exchange entrance and the palace). Find Phingspet or Grimesquit (the two ratcatcher sisters) in the central sewer chamber.",
        },
        {
          text: "Use your cat on the sewer rats around the chamber until you've caught 8.",
        },
        {
          text: "Report back to Phingspet/Grimesquit in the central sewer chamber.",
        },
      ],
    },
    {
      title: "Jimmy Dazzler — Ardougne mansion",
      steps: [
        {
          text: "Travel to East Ardougne and find Jimmy Dazzler standing in the alley just west of the Flying Horse Inn (the central Ardougne pub).",
        },
        {
          text: "Read his note for directions to the Carnillean-style mansion (south of the pub).",
        },
        {
          text: "Sneak through the mansion (south of Jimmy) avoiding the patrolling guards. Catch 6 rats with your cat: 1 in the north-west room, 2 in the south-east upstairs room, and 3 in the downstairs cellar.",
        },
        {
          text: "Return to Jimmy Dazzler in the alley west of the Flying Horse Inn.",
        },
      ],
    },
    {
      title: "Hooknosed Jack — Varrock warehouse",
      steps: [
        {
          text: "Travel to the Varrock Rat Pits in south-east Varrock (the small fenced area just south of the Dancing Donkey Inn). Talk to Hooknosed Jack standing outside the pits.",
        },
        {
          text: "Make rat poison: combine an empty vial + cleaned kwuarm + red spider eggs (Herblore vial recipe).",
        },
        {
          text: "Poison 4 cheeses by using the rat poison on each.",
        },
        {
          text: "Walk into the warehouse just south of the rat pits. Place a poisoned cheese in each of the 4 rat holes around the warehouse walls.",
        },
        {
          text: "Use your cat on the south-east corner rat hole — a fight starts. Heal your cat with fish if needed.",
        },
        {
          text: "Return to Hooknosed Jack outside the Varrock rat pits in south-east Varrock.",
        },
      ],
    },
    {
      title: "Smokin' Joe — Keldagrim",
      steps: [
        {
          text: "Travel to Keldagrim (the underground dwarven city — entrance via the Trollheim minecart, the boat north-east of Rellekka, or via the White Wolf Mountain tunnel + Mountain Camp).",
        },
        {
          text: "Walk to East Keldagrim (cross the central river bridge). Find Smokin' Joe in the small workshop just east of the river bridge near the bank — he stands beside the small pottery oven.",
        },
        {
          text: "Combine the pot of weeds with a tinderbox to make a smouldering pot.",
        },
        {
          text: "Use the smouldering pot on the rat hole inside Smokin' Joe's workshop.",
        },
        {
          text: "Equip the catspeak amulet and talk to your cat — accept its offer of help.",
        },
      ],
    },
    {
      title: "The Face and Felkrash",
      steps: [
        {
          text: "Travel to Port Sarim and find the rat-pit manhole on the road just south of the Asgarnia border (between Port Sarim docks and the Wizards' Tower path).",
        },
        {
          text: "Climb down the manhole into the Port Sarim rat pits and talk to Felkrash.",
        },
        {
          text: "Climb back up to the surface and talk to The Face — he wanders the road just east of the manhole.",
        },
      ],
    },
    {
      title: "Charm the King Rat",
      steps: [
        {
          text: "Travel to Pollnivneach (magic carpet from Shantay Pass, or Pharaoh's sceptre → Pollnivneach). Find Ali the Snake Charmer sitting beside his snake basket in the central village square.",
        },
        {
          text: "Pay him 101gp (or 51gp with a Ring of Charos (a) equipped) for a snake charm.",
        },
        {
          text: "Return to the Port Sarim rat pit manhole (just south of Port Sarim docks) and climb down again. Use the snake charm in the rat pit.",
        },
        {
          text: "Play the notes in this order on the snake charm: D, G, E, F# — then raise the octave and play D, B, C#, A.",
        },
        {
          text: "Watch the cutscene — the King Rat is defeated by the snake.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Climb down the Port Sarim rat pit manhole again and talk to Felkrash to finish.",
        },
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
