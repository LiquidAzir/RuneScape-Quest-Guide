import type { QuestWalkthrough } from "../types";

export const ghostsAhoy: QuestWalkthrough = {
  startPoint:
    "Talk to Velorina in her small house just inside the eastern gate of Port Phasmatys (the small ghost-haunted port town east of Canifis through the Haunted Woods — her house is the first one on the left as you enter from the western road).",
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
          text: "Travel to Port Phasmatys (east through Canifis and the Haunted Woods).",
        },
        {
          text: "Pay 1 ecto-token to the gate guard to enter (or sneak in via the broken back wall on the south side).",
        },
        {
          text: "Talk to Velorina in her small house just inside the western gate of Port Phasmatys to start.",
        },
        {
          text: "Walk west to the Ectofuntus (the giant pyramid building outside the city walls). Climb the ladders to the top floor and talk to Necrovarus standing beside the Ectofuntus altar — he refuses to help, so you'll need to gather proof.",
        },
      ],
    },
    {
      title: "Find the Old Crone",
      steps: [
        {
          text: "Pick nettles from the nettle patch just outside Canifis (the small patch of stinging plants on the south road out of Canifis). Wear gloves to avoid taking damage.",
        },
        {
          text: "Travel south-east of Canifis to the Slayer Tower. Build/light a fire just outside the tower's entrance and use the nettles on the fire to cook nettle tea (need an empty bowl/jug).",
        },
        {
          text: "Find the Old Crone in her small house just east of the Slayer Tower (the isolated cottage in the woods east of the tower, also known as the Hag of Mort'ton).",
        },
        {
          text: "Add a bucket of milk to your nettle tea, then give the milky nettle tea to the Old Crone.",
        },
        {
          text: "Talk to the Old Crone again — she gives you a model ship and instructions to find the Book of Haricanto.",
        },
      ],
    },
    {
      title: "Find the Book of Haricanto",
      steps: [
        {
          text: "Use silk + needle + thread on the model ship to repair its torn sails.",
        },
        {
          text: "Travel north-west of the Ectofuntus to the wrecked pirate ship on the rocky beach (north of Port Phasmatys, west of the Ecto road). Walk onto the wreck.",
        },
        {
          text: "Note the colours of the 3 flags on the wreck's mast (each is one of red/yellow/blue).",
        },
        {
          text: "Use the primary-colour dyes on the model ship's flags to match the wreck's flag colours.",
        },
        {
          text: "Activate the model ship's 'sail' option to reveal 3 buried-map-scrap locations. Travel to each and dig with a spade to collect the 3 map scraps.",
        },
        {
          text: "Combine the 3 map scraps into a treasure map.",
        },
        {
          text: "Travel to Dragontooth Island — sail from the Charter ship at Port Phasmatys docks (south of the city, costs 25gp). The captain takes you to Dragontooth.",
        },
        {
          text: "On Dragontooth Island, use a spade where your treasure map's X indicates to dig up the Book of Haricanto.",
        },
      ],
    },
    {
      title: "Get the translation manual",
      steps: [
        {
          text: "Sail back to Port Phasmatys and talk to Ak-Haranu standing on the southern docks (he's the bearded merchant near the charter ship gangplank).",
        },
        {
          text: "Walk north into the Green Ghost Inn (the central pub in Port Phasmatys) and find Robin upstairs at the card tables. Beat Robin at his Rune-Draw card game (RNG — keep playing until you win 4 hands).",
        },
        {
          text: "Use the oak longbow on Robin to get a signed bow as a memento.",
        },
        {
          text: "Take the signed bow back to Ak-Haranu on the southern Port Phasmatys docks — trade it for the translation manual.",
        },
      ],
    },
    {
      title: "Become Necrovarus",
      steps: [
        {
          text: "Talk to the ghost innkeeper at the Green Ghost Inn (the inn in central Port Phasmatys) and ask for a bedsheet.",
        },
        {
          text: "Dye the bedsheet with a bucket of slime (collect a bucket of slime from the bottom floor of the Ectofuntus by using a bucket on the slime pool).",
        },
        {
          text: "Walk around Port Phasmatys and talk to 10 ghost villagers to collect their signatures on a petition.",
        },
        {
          text: "Show the signed petition to Necrovarus on top of the Ectofuntus.",
        },
        {
          text: "Climb the ladder up inside the Ectofuntus to the top floor; take Necrovarus's robes from the coffin in his chamber.",
        },
      ],
    },
    {
      title: "Free the spirits",
      steps: [
        {
          text: "Return to the Old Crone in her cottage east of the Slayer Tower with the robes, translated book, and other items.",
        },
        {
          text: "Wear Necrovarus's robes and travel back to the top of the Ectofuntus; talk to Necrovarus with the spell components.",
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
