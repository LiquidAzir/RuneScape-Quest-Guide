import type { QuestWalkthrough } from "../types";

export const pryingTimes: QuestWalkthrough = {
  startPoint:
    "Talk to 'Squawking' Steve Beanie in the Pandemonium Pub, the pirate camp you unlocked during Pandemonium. Board your raft at the Port Sarim docks (amulet of glory → Draynor then run west, or Falador teleport then run south down the road) and sail south across the Bay of Sarim to the Pandemonium docks; the pub is up the beach from the mooring.",
  itemsRequired: [
    "Captain's log (from Pandemonium)",
    "Steel bar",
    "Hammer (or Imcando hammer)",
    "Redberry pie",
  ],
  recommended: ["Combat 10+", "120 coins (or Ring of Charos) for charter ship"],
  enemies: ["Drink troll (level 14) — optional"],
  sections: [
    {
      title: "Looty",
      steps: [
        {
          text: "Talk to Steve Beanie in the Pandemonium Pub with the Captain's log to accept the courier task.",
          travel:
            "Sail your raft from the Port Sarim docks south across the Bay of Sarim to the Pandemonium mooring, then walk up the beach into the pub. Get to Port Sarim first with an amulet of glory → Draynor and a run west, or Falador teleport and a run south past the Rusty Anchor.",
        },
        {
          text: "Sail north to Port Sarim and take the cargo crate from the ledger table on the dockside.",
          travel:
            "Board your raft at the Pandemonium docks and set a northward course across the Bay of Sarim. You moor at the Port Sarim docks; the ledger table sits on the boards right beside the mooring point.",
        },
        { text: "Deposit the crate into your raft's cargo hold." },
        {
          text: "Sail south to The Pandemonium and dock.",
          travel:
            "From the Port Sarim mooring, steer south across the Bay of Sarim — the Pandemonium docks are on the shore of the pirate camp, marked on your chart from Pandemonium.",
        },
        { text: "Withdraw the crate from the hold and deposit it at the Pandemonium ledger table." },
        {
          text: "Walk up from the docks into the Pandemonium Pub and talk to Steve Beanie about the delivery.",
        },
      ],
    },
    {
      title: "Crowbar",
      steps: [
        {
          text: "Talk to Thurgo outside his hut at Mudskipper Point, south-west of Port Sarim.",
          travel:
            "Fairy ring AIQ drops you at Mudskipper Point — Thurgo's hut is the lone building a short run north-east along the shore. No fairy ring: sail or teleport to Port Sarim and run south down the coast past the fishing spots and the Asgarnian Ice Dungeon entrance to the tip of the peninsula.",
        },
        { text: "Give Thurgo a steel bar and a redberry pie in exchange for a crowbar." },
        {
          text: "Return to Steve in the Pandemonium Pub and report.",
          travel:
            "Run back north to Port Sarim, board your raft and sail south to the Pandemonium docks, then up the beach into the pub.",
        },
        {
          text: "Sail to the small north-western island and pry open the sealed crate with the crowbar.",
          travel:
            "Cast off from the Pandemonium docks and follow the north-west heading Steve marks on your chart. Beach the raft on the island's shore — the sealed crate is on the sand a few steps inland.",
        },
        { text: "Drink the fish bladder stout, then defeat or simply avoid the drink troll that appears." },
        {
          text: "Sail back to the Pandemonium Pub and open the sealed crate standing behind Steve.",
          travel:
            "Board the raft and steer back south-east to the Pandemonium docks, then walk up into the pub — the crate is against the wall behind Steve's bar.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Smithing experience",
    "800 Sailing experience",
    "Ability to chart forgotten drinks",
    "25 sawmill coupons (oak plank)",
    "Unlimited crowbar access",
  ],
};
