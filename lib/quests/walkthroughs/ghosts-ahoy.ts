import type { QuestWalkthrough } from "../types";

export const ghostsAhoy: QuestWalkthrough = {
  startPoint:
    "Talk to Velorina in the house just inside the western gate of Port Phasmatys, the ghost-haunted port east of Canifis. Fairy ring ALQ (Haunted Woods east of Canifis) drops you a short run west of the town gates; otherwise run east from Canifis along the road through the Haunted Woods.",
  itemsRequired: [
    "Ghostspeak amulet",
    "31 ecto-tokens (or fewer if using charter ships)",
    "Bucket of milk",
    "Silk + needle + thread",
    "3 primary-colour dyes (red, yellow, blue)",
    "Spade",
    "Oak longbow",
    "Knife",
    "Bucket of slime (Ectofuntus)",
    "~400 coins for various services",
  ],
  recommended: [
    "Combat 15+",
    "58 Agility (boostable) for the shortcut to Dragontooth Island",
    "Stamina/energy potions",
    "Some food",
    "Pre-made nettle tea + bucket of milk to skip the brewing step",
  ],
  enemies: ["Giant lobster (level 32) — safespottable"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Port Phasmatys on the east coast of Morytania.",
          travel:
            "Fairy ring ALQ puts you in the Haunted Woods just east of Canifis — run east along the road to the town gates. No fairy ring: get to Canifis (Kharyrll teleport, or run east from Varrock past the Digsite, over the River Salve at Paterdomus temple and east into town) then follow the road east through the Haunted Woods.",
        },
        {
          text: "Pay the ghost gatekeeper 2 ecto-tokens to pass through the western gate (or slip in through the broken section of the town wall for free).",
        },
        {
          text: "Talk to Velorina in the small house just inside the western gate of Port Phasmatys to start the quest.",
        },
        {
          text: "Talk to Necrovarus at the Ectofuntus — he refuses to help, so you will need proof.",
          travel:
            "Leave Port Phasmatys by the western gate and follow the path north-west, outside the town walls, to the Ectofuntus (the huge domed temple building). Go inside and up to the altar level; Necrovarus floats beside the Ectofuntus itself.",
        },
      ],
    },
    {
      title: "Find the Old Crone",
      steps: [
        {
          text: "Pick nettles from the patch a few steps east of Slayer master Mazchna in Canifis.",
          travel:
            "Fairy ring CKS lands in Canifis; otherwise run west from Port Phasmatys along the Haunted Woods road. Mazchna stands on the east side of Canifis near the town's eastern exit, and the stinging nettle patch is just east of him. Wear gloves so picking them doesn't hurt you.",
        },
        {
          text: "Light a fire by the dead tree south-east of the Slayer Tower and use the nettles on it to brew nettle tea (bring an empty bowl and a jug of water).",
          travel:
            "Slayer ring ('Slayer Tower') teleports you straight there. On foot, leave Canifis by the west gate and follow the road north-west; the tower is the tall gothic building, and the dead tree is on the open ground just south-east of its entrance.",
        },
        {
          text: "Find the Old Crone in her cottage by the water just east of the Slayer Tower.",
          travel:
            "From the tower entrance, run east down the slope towards the water — hers is the lone cottage on the bank between the Slayer Tower and the Haunted Woods.",
        },
        {
          text: "Add a bucket of milk to your nettle tea, then give the cup of milky nettle tea to the Old Crone.",
        },
        {
          text: "Talk to the Old Crone again — she gives you a model ship and sends you after the Book of Haricanto.",
        },
      ],
    },
    {
      title: "Find the Book of Haricanto",
      steps: [
        {
          text: "Use silk with a needle and thread on the model ship to repair its torn sails.",
        },
        {
          text: "Board the wrecked ship on the coast north-west of the Ectofuntus.",
          travel:
            "From the Ectofuntus run north-west along the coast; the wreck sits on the shore directly north of the Morytania farming allotment patch. Walk up the gangplank onto the deck.",
        },
        {
          text: "Climb the wreck's mast and search the flags to note their three colours (each is red, yellow or blue).",
          notes: ["The flags only read correctly when the wind drops — keep searching until you get a colour."],
        },
        {
          text: "Use the matching primary-colour dyes on the model ship so its flag matches the wreck's.",
        },
        {
          text: "Collect the three map scraps from the wreck: talk to the old man on deck, search the chest in the captain's quarters, kill the giant lobster (level 32) below deck and search the chest there, and cross the rocks north-west of the gangplank for the last one.",
          notes: ["The giant lobster can be safespotted from the stairs."],
        },
        {
          text: "Combine the three map scraps into a complete treasure map.",
        },
        {
          text: "Sail to Dragontooth Island.",
          travel:
            "Go to the small rowing boat at the Port Phasmatys docks on the east side of town and talk to the Ghost captain — 25 ecto-tokens for the trip (10 with an activated ring of Charos). You must have the ghostspeak amulet equipped to talk to him.",
        },
        {
          text: "On Dragontooth Island, dig with your spade on the spot marked by the X on your treasure map to unearth the Book of Haricanto.",
        },
      ],
    },
    {
      title: "Get the translation manual",
      steps: [
        {
          text: "Sail back and talk to Ak-Haranu around the Port Phasmatys docks.",
          travel:
            "Talk to the Ghost captain again to return to Port Phasmatys; Ak-Haranu is the bearded trader standing on the docks on the east side of town, near where the boat lands.",
        },
        {
          text: "Find Robin in the Green Ghost inn in central Port Phasmatys and beat him at his card game.",
          travel:
            "From the docks run west into the middle of town — the inn is the large building in the town centre. Robin sits at the tables inside.",
          notes: ["The game is pure RNG; keep playing until you beat him."],
        },
        {
          text: "Use the oak longbow on Robin to get it signed as a memento.",
        },
        {
          text: "Take the signed bow back to Ak-Haranu on the docks and trade it for the translation manual.",
        },
      ],
    },
    {
      title: "Become Necrovarus",
      steps: [
        {
          text: "Ask the ghost innkeeper in the Green Ghost inn for a bedsheet.",
        },
        {
          text: "Fill a bucket with slime at the Ectofuntus and use the slime on the bedsheet to dye it.",
          travel:
            "Head back out of the western gate and north-west to the Ectofuntus, then climb down the ladder to the slime pool on the bottom floor and use a bucket on it.",
        },
        {
          text: "Wear the slimy bedsheet and talk to 10 ghost villagers around Port Phasmatys to sign your petition.",
        },
        {
          text: "Show the signed petition to Necrovarus at the Ectofuntus.",
        },
        {
          text: "Use the bone key on the door at the top of the Ectofuntus and take Necrovarus's robes from the coffin inside.",
        },
      ],
    },
    {
      title: "Free the spirits",
      steps: [
        {
          text: "Return to the Old Crone with the robes, the translated book and the rest of the quest items.",
          travel:
            "Slayer ring to the Slayer Tower and run east to her cottage by the water, or run west out of Port Phasmatys through the Haunted Woods, past Canifis, then north-west to the tower.",
        },
        {
          text: "Wear Necrovarus's robes, go back to the Ectofuntus and talk to Necrovarus with the spell components.",
          travel:
            "Fairy ring ALQ then east to Port Phasmatys and north-west out of the west gate to the Ectofuntus — or simply retrace the Haunted Woods road east from Canifis.",
        },
        {
          text: "Cast the freeing spell — the ghosts of Port Phasmatys are released.",
        },
        {
          text: "Talk to Velorina in her house just inside the western gate of Port Phasmatys to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,400 Prayer experience",
    "Free passage into Port Phasmatys",
    "Ectophial (a refillable Port Phasmatys teleport)",
  ],
};
