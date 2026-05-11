import type { QuestWalkthrough } from "../types";

export const animalMagnetism: QuestWalkthrough = {
  startPoint:
    "Talk to Ava on the ground floor of Draynor Manor (the haunted manor north of Draynor Village). Ava stands in the west wing of the ground floor — go through the front door and turn left.",
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
        {
          text: "Travel to Port Phasmatys (in eastern Morytania) and walk west of the Ectofuntus (the giant Phasmatys pyramid) to Alice and Malcolm's small farm — the only farm on the road west of the Ectofuntus, between Port Phasmatys and the Slayer Tower path.",
        },
        { text: "Talk to Alice in the farmhouse west of the Ectofuntus, then Malcolm in the cow pen beside the farmhouse — alternate conversations until they direct you to the old crone." },
        {
          text: "Walk west to the Old Crone's small cottage (the isolated hut in the woods west of the Ectofuntus and south-east of the Slayer Tower).",
        },
        { text: "Talk to the old crone in her house west of the Ectofuntus and south of the Slayer Tower twice to get a crone-made amulet." },
        { text: "Bring the amulet back to Malcolm." },
        { text: "Talk to Malcolm at the farm west of the Ectofuntus and buy 2 undead chickens for 20 ecto-tokens." },
      ],
    },
    {
      title: "Make the magnet",
      steps: [
        { text: "Return to Ava in the west wing of Draynor Manor with 5 iron bars, a hammer, and the 2 undead chickens." },
        { text: "Talk to Ava in the west wing of Draynor Manor, then talk to the Witch in the north-west corner of Draynor Manor." },
        { text: "She gives you the selected iron." },
        {
          text: "Travel to the Rimmington mine (south-west of Falador, the small mining pit just south of Rimmington village). Stand in the centre of the mine facing north and use the hammer on the selected iron — this magnetises it.",
        },
        { text: "Return the magnet to Ava." },
      ],
    },
    {
      title: "Make the undead twigs and finish",
      steps: [
        { text: "Talk to Ava again in the west wing of Draynor Manor — she sends you to make a blessed axe." },
        { text: "Try chopping the undead tree in front of the manor with your mithril axe (it won't work)." },
        {
          text: "Travel to Burthorpe (north of Falador) and talk to Turael in his small Slayer hut at the south-west corner of Burthorpe (the slayer master's cottage near the Heroes' Guild road).",
        },
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
