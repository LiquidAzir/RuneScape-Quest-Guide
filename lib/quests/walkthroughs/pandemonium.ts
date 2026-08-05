import type { QuestWalkthrough } from "../types";

export const pandemonium: QuestWalkthrough = {
  startPoint:
    "Talk to Will and Anne on the Port Sarim docks. Falador Teleport and run south out of the south gate straight down the road to Port Sarim, or amulet of glory to Draynor Village and run west along the coast road. They are standing together on the jetties on the town's west side.",
  itemsRequired: ["Hammer (in-quest)", "Saw (in-quest)"],
  recommended: [
    "Skills necklace / Amulet of glory / Explorer's ring for fast travel to Port Sarim",
  ],
  sections: [
    {
      title: "Salvage the shipwreck",
      steps: [
        {
          text: "Accept the salvage job from Will or Anne on the Port Sarim docks.",
          travel:
            "Falador Teleport then run south down the road to Port Sarim; or amulet of glory to Draynor and run west. The pair wait on the docks on the west side of town.",
        },
        { text: "Board the ship and navigate south through the Bay of Sarim toward the Karamja shipyard." },
        { text: "Trim the sails when wind gusts come for a speed boost." },
        { text: "Unsail when Will indicates arrival." },
        { text: "Deploy the salvaging hook (you'll be pushed overboard)." },
      ],
    },
    {
      title: "The Pandemonium Pub",
      steps: [
        {
          text: "Talk to 'Squawking' Steve Beanie at the Pandemonium Pub, the tavern on the beach where you wash up.",
          travel:
            "You arrive here automatically after going overboard — the pub is the big building just up from the sand. No teleport needed on this first visit.",
        },
        { text: "Discuss the map with Ribs, sitting to the north of Steve." },
        { text: "Ask Steve about Will and Anne's whereabouts." },
        { text: "Trade the old cup salvage to Junior Jim at the docks below the pub for a raft." },
        { text: "Grab a hammer and saw from the crates on the dock if you need them." },
        { text: "Build the cargo hold on the raft at the facility hotspot beside the dock." },
        {
          text: "Return to Pandemonium at the beach camp on the Isle of Souls and receive the Captain's log.",
          travel:
            "Sail the raft back to the Pandemonium beach. To return here later on foot, take the Isle of Souls ferry from the southern Port Sarim dock (or the Soul Wars minigame teleport) and run to the camp on the shore.",
        },
      ],
    },
    {
      title: "Cargo courier",
      steps: [
        {
          text: "Board the raft and navigate north to Port Sarim.",
          travel:
            "Steer north out of the bay and follow the coast up — the Port Sarim jetties are the first docks you meet.",
        },
        { text: "Take cargo from the ledger table on the Port Sarim dock and store it in the hold." },
        { text: "Navigate back south to the Pandemonium docks." },
        { text: "Withdraw and deposit the cargo at the ledger table there." },
        { text: "Tell Junior Jim on the dock the delivery is done." },
        { text: "Check in with Steve in the pub." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "300-400 Sailing experience",
    "Access to the Sailing skill",
    "Access to The Pandemonium",
    "Raft, 25 sawmill coupons (wood plank), 2 repair kits, spyglass",
  ],
};
