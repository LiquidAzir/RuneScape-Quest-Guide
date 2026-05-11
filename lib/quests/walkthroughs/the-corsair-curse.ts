import type { QuestWalkthrough } from "../types";

export const theCorsairCurse: QuestWalkthrough = {
  startPoint: "Talk to Captain Tock at the crossroads north of Port Sarim.",
  itemsRequired: [
    "Spade (in-quest)",
    "Tinderbox (in-quest)",
  ],
  recommended: ["Combat 20+", "Energy/stamina potions", "Some food + weapon + armour"],
  enemies: ["Ithoi the Navigator (level 35) — fight in instance, Protect from Magic"],
  sections: [
    {
      title: "The cursed crew",
      steps: [
        { text: "Talk to Captain Tock twice at Port Sarim." },
        { text: "Board the ship west of Rimmington." },
        { text: "At Corsair Cove, talk to Ithoi the Navigator first." },
        { text: "Gather accounts from Arsen, Colin, and Gnocci." },
        { text: "Pick up a tinderbox and spade if needed." },
        { text: "Get the ogre artefact from Captain Tock." },
        { text: "Return the artefact to Chief Tess in the dungeon." },
      ],
    },
    {
      title: "Uncover the deception",
      steps: [
        { text: "Dig near the fishing spot for a demonic doll." },
        { text: "Use the telescope at Ithoi's hut." },
        { text: "Revisit the crew with new evidence." },
        { text: "Confront Ithoi about faking illness." },
        { text: "Light driftwood with a tinderbox under his hut." },
        { text: "Report findings to Captain Tock." },
      ],
    },
    {
      title: "Final confrontation",
      steps: [
        { text: "Defeat Ithoi the Navigator (level 35) in combat." },
        { text: "Return to Captain Tock at the crossroads north of Port Sarim." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Access to Yusuf's bank in Corsair Cove",
    "Ability to dock your boat at Corsair Cove Port",
  ],
};
