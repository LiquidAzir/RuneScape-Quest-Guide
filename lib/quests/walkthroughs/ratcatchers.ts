import type { QuestWalkthrough } from "../types";

export const ratcatchers: QuestWalkthrough = {
  startPoint:
    "Talk to Gertrude at her small farmhouse west of Varrock (the house with the chicken pen, just south of the Cooks' Guild outside the western city wall). Varrock teleport, leave by the west gate and follow the road west, then turn south at the Cooks' Guild.",
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
          text: "Talk to Gertrude at her farmhouse west of Varrock to start.",
          travel:
            "Varrock teleport lands you in Varrock Square — run west along the main road, out through the west gate, and follow the path west then south past the Cooks' Guild. Gertrude's house is the one with the chicken pen just south-west of the guild.",
        },
        {
          text: "Climb down the manhole into the Varrock Sewers and find Phingspet or Grimesquit, the two ratcatcher sisters, in the central sewer chamber.",
          travel:
            "The manhole is in the open ground south-east of Varrock Palace, north of the main east-west road and east of the church — run back east into Varrock and north-east from the square. Climb down, then follow the tunnel south-west to the wide central chamber where the sisters stand.",
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
          travel:
            "Ardougne teleport (or Ardougne cloak → the Ardougne farm/monastery, then run west into the city). From the market square run south-east to the Flying Horse Inn; Jimmy loiters in the narrow alley on its western side.",
        },
        {
          text: "Read his note for directions to the mansion just south of the pub.",
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
          text: "Travel to the Varrock Rat Pits in the south-east corner of Varrock and talk to Hooknosed Jack standing outside the pits.",
          travel:
            "Varrock teleport, then run south-east from the square past the Varrock Museum road towards the south-east city wall. The rat pits are the fenced yard in that corner — look for the Rat Pits minigame icon on your map; Jack waits by the gate.",
        },
        {
          text: "Make rat poison: use an empty vial on cleaned kwuarm, then add red spider eggs.",
        },
        {
          text: "Poison 4 cheeses by using the rat poison on each.",
        },
        {
          text: "Walk into the warehouse just south of the rat pits and place a poisoned cheese in each of the 4 rat holes around the walls.",
        },
        {
          text: "Use your cat on the south-east corner rat hole — a fight starts. Heal your cat with fish if needed.",
        },
        {
          text: "Return to Hooknosed Jack outside the Varrock rat pits.",
        },
      ],
    },
    {
      title: "Smokin' Joe — Keldagrim",
      steps: [
        {
          text: "Travel to Keldagrim, the underground dwarven city, and cross to East Keldagrim.",
          travel:
            "Fastest: the dwarven mine cart station just north-west of the Grand Exchange in Varrock — talk to the dwarf there and pay for a ride straight to Keldagrim (requires The Giant Dwarf to have opened the network). Otherwise: Falador teleport, run north-east into the Dwarven Mine under Ice Mountain and take the boat in the north-east tunnel. From the Keldagrim arrival point, walk east over the central river bridge into East Keldagrim.",
        },
        {
          text: "Find Smokin' Joe in the small workshop just east of the river bridge near the bank — he stands beside the pottery oven.",
        },
        {
          text: "Use the tinderbox on the pot of weeds to make a smouldering pot.",
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
          text: "Travel to Port Sarim and find the rat-pit manhole on the east side of town.",
          travel:
            "Falador teleport then run south down the road to Port Sarim, or amulet of glory → Draynor and run west. The manhole is on the eastern side of Port Sarim just north of the road out towards Draynor — it carries the Rat Pits minigame icon on your map.",
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
          text: "Travel to Pollnivneach and find Ali the Snake Charmer sitting beside his snake basket in the central village square.",
          travel:
            "Pharaoh's sceptre → Pollnivneach if you have one. Otherwise ring of dueling → Al Kharid Duel Arena, run south-west to the Shantay Pass, pay the toll and take the magic carpet from Shantay Pass straight to Pollnivneach. Bring waterskins — the desert drains run energy.",
        },
        {
          text: "Pay Ali 101gp (or 51gp with a Ring of Charos (a) equipped) for a snake charm.",
        },
        {
          text: "Return to the Port Sarim rat pit manhole, climb down again and use the snake charm in the rat pit.",
          travel:
            "Falador teleport then run south to Port Sarim (or amulet of glory → Draynor and run west); the manhole is on the eastern side of town, marked with the Rat Pits map icon.",
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
