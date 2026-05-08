import type { QuestWalkthrough } from "../types";

export const ghostsAhoy: QuestWalkthrough = {
  startPoint: "Talk to Velorina in her house in Port Phasmatys (east of the gates).",
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
        { text: "Travel to Port Phasmatys (east of Canifis through the Haunted Woods)." },
        { text: "Pay 1 ecto-token to enter or sneak in via the back." },
        { text: "Talk to Velorina to start the quest." },
        { text: "Talk to Necrovarus at the Ectofuntus — he won't help, so you'll need to bring proof." },
      ],
    },
    {
      title: "Find the Old Crone",
      steps: [
        { text: "Pick nettles near Canifis (wear gloves)." },
        { text: "Use the nettles on a fire near the Slayer Tower to cook nettle tea." },
        { text: "Find the Old Crone east of the Slayer Tower." },
        { text: "Add a bucket of milk to the nettle tea and give it to her." },
        { text: "Talk to her again to get the model ship and instructions." },
      ],
    },
    {
      title: "Find the Book of Haricanto",
      steps: [
        { text: "Repair the model ship with a needle and silk." },
        { text: "Travel to the wrecked ship north-west of the Ectofuntus." },
        { text: "Note the colours of the flag on the wreck's mast." },
        { text: "Dye the model ship's flags to match." },
        { text: "Collect the 3 map scraps from the locations the model ship reveals." },
        { text: "Travel to Dragontooth Island (charter from Port Phasmatys)." },
        { text: "Use a spade where the assembled treasure map indicates to dig up the Book of Haricanto." },
      ],
    },
    {
      title: "Get the translation manual",
      steps: [
        { text: "Talk to Ak-Haranu on the Port Phasmatys docks." },
        { text: "Beat Robin in his Rune-Draw card game (mostly RNG; keep playing until you win 4 times)." },
        { text: "Use the oak longbow on Robin to get a signed bow." },
        { text: "Trade the signed bow with Ak-Haranu for the translation manual." },
      ],
    },
    {
      title: "Become Necrovarus",
      steps: [
        { text: "Get a bedsheet from the ghost innkeeper at the Green Ghost Inn." },
        { text: "Dye the bedsheet with a bucket of slime to make it black." },
        { text: "Collect 10 signatures from ghost villagers around Port Phasmatys." },
        { text: "Show the petition to Necrovarus." },
        { text: "Climb upstairs in his temple and take his robes from the coffin." },
      ],
    },
    {
      title: "Free the spirits",
      steps: [
        { text: "Return to the Old Crone with the robes and items." },
        { text: "Wear the robes and go talk to Necrovarus with the spell components." },
        { text: "Cast the freeing spell." },
        { text: "Talk to Velorina to finish the quest." },
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
