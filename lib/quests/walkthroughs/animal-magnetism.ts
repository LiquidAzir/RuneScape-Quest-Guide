import type { QuestWalkthrough } from "../types";

export const animalMagnetism: QuestWalkthrough = {
  startPoint:
    "Talk to Ava on the ground floor of Draynor Manor. Amulet of glory → Draynor Village, then run north up the path past the wheat field to the manor gates; go in the front door and turn left into the west wing.",
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
        {
          text: "Talk to Ava in the west wing of Draynor Manor and agree to help her.",
          travel:
            "Amulet of glory → Draynor Village, then north up the road past the wheat field to the manor gates. No glory: Lumbridge Home Teleport and run west along the river, then north.",
        },
        {
          text: "Travel to Alice and Malcolm's farm on the road west of the Ectofuntus, near Port Phasmatys.",
          travel:
            "Ectophial teleports straight to the Ectofuntus — run west down the road and it is the only farm you pass. No Ectophial: charter ship to Port Phasmatys, or fairy ring CKS to Canifis and run east through the Haunted Woods.",
        },
        {
          text: "Talk to Alice in the farmhouse, then Malcolm in the cow pen beside it — alternate conversations until they direct you to the old crone.",
        },
        {
          text: "Walk to the Old Crone's cottage, the isolated hut in the woods further west of the farm.",
          travel: "From Alice and Malcolm's farm keep heading west along the track — the hut sits alone in the trees, south-east of the Slayer Tower.",
        },
        { text: "Talk to the old crone twice to get a crone-made amulet." },
        {
          text: "Bring the amulet back to Malcolm at the farm west of the Ectofuntus.",
          travel: "Run back east along the same track to the farm.",
        },
        { text: "Buy 2 undead chickens from Malcolm for 20 ecto-tokens." },
      ],
    },
    {
      title: "Make the magnet",
      steps: [
        {
          text: "Return to Ava in the west wing of Draynor Manor with 5 iron bars, a hammer, and the 2 undead chickens.",
          travel: "Ectophial then bank at Port Phasmatys if needed, then amulet of glory → Draynor Village and run north to the manor.",
        },
        { text: "Talk to Ava, then talk to the Witch in the north-west corner of Draynor Manor's ground floor." },
        { text: "She gives you the selected iron." },
        {
          text: "Stand in the centre of the Rimmington mine facing north and use the hammer on the selected iron to magnetise it.",
          travel:
            "Amulet of glory → Draynor Village then run west along the road to Port Sarim and south-west to Rimmington; the mining site is the rock cluster on the north-west edge of the village. Falador Teleport and running south-west past the Crafting Guild also works.",
        },
        {
          text: "Return the magnet to Ava in Draynor Manor.",
          travel: "Amulet of glory → Draynor Village, then north up the road to the manor.",
        },
      ],
    },
    {
      title: "Make the undead twigs and finish",
      steps: [
        { text: "Talk to Ava again — she sends you to make a blessed axe." },
        { text: "Try chopping the undead tree in front of the manor with your mithril axe (it won't work)." },
        {
          text: "Trade Turael in his slayer hut in Burthorpe for the blessed axe.",
          travel:
            "Games necklace → Burthorpe Games Room, climb the stairs out of the castle and run west — Turael's hut is the small building on the west side of town. Slayer ring → Burthorpe also lands beside him. Otherwise Falador Teleport and run north-west through Taverley.",
        },
        { text: "Trade the mithril axe + holy symbol for the blessed axe." },
        {
          text: "Return to Draynor Manor and chop the undead tree in the front garden for undead twigs.",
          travel: "Amulet of glory → Draynor Village, then north up the road; the tree is right outside the manor's front door.",
        },
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
