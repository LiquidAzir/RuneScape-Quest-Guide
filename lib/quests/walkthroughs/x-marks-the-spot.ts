import type { QuestWalkthrough } from "../types";

export const xMarksTheSpot: QuestWalkthrough = {
  startPoint:
    "Talk to Veos in The Sheared Ram, the pub on the east side of Lumbridge. Lumbridge Home Teleport, then run north-east past the general store — the pub is just north of Bob's Brilliant Axes.",
  itemsRequired: ["Spade (regular spade only — Eastfloor spade does not work)"],
  recommended: [
    "Energy or stamina potions (members)",
    "Amulet of glory for fast travel to Draynor (members)",
  ],
  sections: [
    {
      title: "Treasure hunt",
      steps: [
        {
          text: "Talk to Veos in The Sheared Ram on the east side of Lumbridge and accept the quest.",
          travel:
            "Lumbridge Home Teleport puts you in the castle courtyard. Run north-east past the general store; The Sheared Ram is the pub with the beer-mug icon, just north of Bob's Brilliant Axes.",
        },
        {
          text: "Dig north-west of Bob's Brilliant Axes shop window, one tile west of the wall plant.",
          travel: "Bob's axe shop is immediately south of The Sheared Ram — walk out of the pub and round the corner.",
        },
        {
          text: "Dig behind Lumbridge Castle, outside the kitchen door, south-west of the large crate.",
          travel: "Run west from Bob's to the castle and go round to its west side — the kitchen door faces the courtyard's west wall.",
        },
        {
          text: "Travel to Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village, or run west from Lumbridge along the road on the north side of the river, past the wheat field.",
        },
        { text: "Dig north-west of the Draynor jail by the wheat farm, 4 tiles north of the bush." },
        {
          text: "Dig in the pig pen at Martin the Master Gardener's farm, north-west of Draynor Village.",
          travel: "From the Draynor bank run north-west to the fenced farm — Martin wanders the crop field beside the pig pen.",
        },
        {
          text: "Use the ancient casket on Veos at the Port Sarim docks, just south of the Rusty Anchor Inn.",
          travel:
            "From Draynor run west along the coast road into Port Sarim, then head to the northern dock — Veos is standing on the pier south of the Rusty Anchor. Falador Teleport and a run south also works.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "200 coins",
    "Antique lamp (300 XP in chosen skill)",
    "Access to scroll boxes",
    "Beginner scroll box",
    "+1 cap on all clue scroll tiers",
  ],
};
