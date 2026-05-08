import type { QuestWalkthrough } from "../types";

export const animalMagnetism: QuestWalkthrough = {
  startPoint: "Talk to Ava in the west wing of Draynor Manor.",
  itemsRequired: [
    "Ghostspeak amulet",
    "20 ecto-tokens (30 if you want extra chickens)",
    "5 Iron bars",
    "Hammer",
    "Mithril axe (or better)",
    "Holy symbol",
    "Polished buttons",
    "Hard leather",
  ],
  recommended: [
    "Stamina/energy potions (lots of running)",
    "Ardougne cloak or Ectophial for fast travel to the Ectofuntus",
    "Slayer ring or Burthorpe teleport for Turael",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Ava in the west wing of Draynor Manor and agree to help her." },
        { text: "Travel west of the Ectofuntus to find Alice and Malcolm at their farm." },
        { text: "Talk to Alice, then Malcolm — alternate conversations until they direct you to the old crone." },
        { text: "Walk west to the old crone's house (near Slayer Tower)." },
        { text: "Talk to the old crone twice to get a crone-made amulet." },
        { text: "Bring the amulet back to Malcolm." },
        { text: "Talk to him through the dialogue and buy 2 undead chickens for 20 ecto-tokens." },
      ],
    },
    {
      title: "Make the magnet",
      steps: [
        { text: "Return to Ava with 5 iron bars, a hammer, and the 2 undead chickens." },
        { text: "Talk to her, then talk to the Witch in the north-west corner of Draynor Manor." },
        { text: "She gives you the selected iron." },
        { text: "Travel to the Rimmington mine. Stand in the centre of the mine facing north and use the hammer on the selected iron — this makes a magnet." },
        { text: "Return the magnet to Ava." },
      ],
    },
    {
      title: "Make the undead twigs and finish",
      steps: [
        { text: "Talk to Ava again — she sends you to make a blessed axe." },
        { text: "Try chopping the undead tree in front of the manor with your mithril axe (it won't work)." },
        { text: "Travel to Burthorpe and talk to Turael." },
        { text: "Trade the mithril axe + holy symbol for the blessed axe." },
        { text: "Return to Draynor Manor and chop the undead tree to get undead twigs." },
        { text: "Bring the twigs to Ava — she gives you garbled research notes." },
        {
          text: "Solve the orb puzzle: deactivate all green orbs except the 2nd, 5th, and 9th.",
          notes: ["You're toggling orbs in a sequence to leave only those three lit."],
        },
        { text: "Use the solved notes with polished buttons and hard leather to assemble the device." },
        { text: "Give the completed device to Ava." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Crafting / Fletching / Slayer experience each",
    "2,500 Woodcutting experience",
    "Ava's attractor (Ranged < 50) or Ava's accumulator (Ranged 50+) — passive ammo collector + ranged bonus",
  ],
};
