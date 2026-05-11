import type { QuestWalkthrough } from "../types";

export const pandemonium: QuestWalkthrough = {
  startPoint: "Talk to Will on the docks of Port Sarim and Anne on the docks of Port Sarim.",
  itemsRequired: ["Hammer (in-quest)", "Saw (in-quest)"],
  recommended: [
    "Skills necklace / Amulet of glory / Explorer's ring for fast travel to Port Sarim",
  ],
  sections: [
    {
      title: "Salvage the shipwreck",
      steps: [
        { text: "Accept the salvage job from Will or Anne." },
        { text: "Navigate the ship south through the Bay of Sarim to the Karamja shipyard area." },
        { text: "Trim the sails when wind gusts come for a speed boost." },
        { text: "Unsail when Will indicates arrival." },
        { text: "Deploy the salvaging hook (you'll be pushed overboard)." },
      ],
    },
    {
      title: "The Pandemonium Pub",
      steps: [
        { text: "Talk to 'Squawking' Steve Beanie at the Pandemonium Pub." },
        { text: "Discuss the map with Ribs to the north." },
        { text: "Ask Steve about Will and Anne's whereabouts." },
        { text: "Trade the old cup salvage to Junior Jim for a raft at the docks." },
        { text: "Grab a hammer and saw from the crates if needed." },
        { text: "Build the cargo hold on the raft at the facility hotspot." },
        { text: "Return to Pandemonium at the beach camp on the Isle of Souls and receive the Captain's log." },
      ],
    },
    {
      title: "Cargo courier",
      steps: [
        { text: "Board the raft and navigate north to Port Sarim." },
        { text: "Take cargo from the ledger table and store in the hold." },
        { text: "Navigate back to the Pandemonium docks." },
        { text: "Withdraw and deposit cargo at the ledger table." },
        { text: "Tell Junior Jim the delivery is done." },
        { text: "Check in with Steve." },
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
