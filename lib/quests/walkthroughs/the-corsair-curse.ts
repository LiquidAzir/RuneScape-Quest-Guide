import type { QuestWalkthrough } from "../types";

export const theCorsairCurse: QuestWalkthrough = {
  startPoint:
    "Talk to Captain Tock and his crew at the crossroads north of Port Sarim, where the Falador, Rimmington and Port Sarim roads meet. Falador Teleport then run south out of the south gate, or amulet of glory to Draynor Village and run west along the road.",
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
        {
          text: "Talk to Captain Tock twice at the crossroads north of Port Sarim.",
          travel:
            "Falador Teleport, then run south through the south gate and down the road to the junction. Alternative: amulet of glory to Draynor Village and run west.",
        },
        {
          text: "Board The Lady Zay at the pier west of Rimmington.",
          travel: "From the crossroads run south-west into Rimmington, then keep going west to the coast — the ship is moored at the small jetty on the western shore.",
        },
        {
          text: "At Corsair Cove, talk to Ithoi the Navigator in his hut first.",
          travel: "The ship docks you in Corsair Cove. Ithoi's hut is the raised shack on the north-west side of the cove, up the slope from the beach.",
        },
        { text: "Gather accounts from Arsen the Thief, Colin and Gnocci the Cook around the cove." },
        { text: "Pick up a tinderbox and spade from around the cove if you didn't bring them." },
        { text: "Get the ogre artefact from Captain Tock." },
        {
          text: "Return the artefact to Chief Tess in the Corsair Cove Dungeon.",
          travel: "Head to the cave mouth on the eastern side of Corsair Cove and go in — Chief Tess and the ogre camp are just inside.",
        },
      ],
    },
    {
      title: "Uncover the deception",
      steps: [
        {
          text: "Dig by the fishing spot on the Corsair Cove shore to unearth a demonic doll.",
          travel: "Back out on the cove beach, head to the fishing spots on the southern shoreline and dig there with a spade.",
        },
        { text: "Use the telescope inside Ithoi's hut on the north-west slope." },
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
        {
          text: "Return to Captain Tock at the crossroads north of Port Sarim.",
          travel: "Sail back on The Lady Zay to the Rimmington jetty, then run north-east up the road to the junction.",
        },
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
