import type { QuestWalkthrough } from "../types";

export const boneVoyage: QuestWalkthrough = {
  startPoint: "Talk to Curator Haig Halen in the Varrock Museum.",
  itemsRequired: ["2 vodka", "Marrentill potion (unfinished)"],
  recommended: [
    "Lumberyard teleport (or Varrock teleport + run)",
    "Skills necklace or Xeric's talisman",
    "Amulet of glory or Explorer's ring 2",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Curator Haig Halen in the Varrock Museum." },
        { text: "Pick 'Have you any interesting news?' then 'Sign me up!'." },
      ],
    },
    {
      title: "Finishing touches",
      steps: [
        { text: "Travel to the canal barge north of the Digsite and talk to the barge foreman." },
        { text: "Visit the sawmill operator at the Lumber Yard." },
        { text: "Bring the sawmill proposal to the operator at the Woodcutting Guild (south of Hosidius)." },
        { text: "Return the sawmill agreement to the Lumber Yard operator." },
      ],
    },
    {
      title: "Cursed voyage",
      steps: [
        { text: "Talk to the barge foreman again at the canal barge." },
        { text: "Right-click 'Embark' on the barge guard." },
        { text: "Talk to the Lead Navigator on the boat." },
        { text: "Visit Jack Seagull at the Rusty Anchor Inn in Port Sarim." },
        { text: "Board the boat and meet the Odd Old Man at the limestone mine north of the dock." },
        { text: "Visit the Apothecary in Varrock with 2 vodka and a marrentill potion (unf) — he makes a potion of sea legs." },
        { text: "Return the potion to the Lead Navigator." },
        { text: "Give the bone charm to the Junior Navigator." },
      ],
    },
    {
      title: "Steer the boat to Fossil Island",
      steps: [
        {
          text: "Steer the boat using the steering interface. When the top arrow tilts left, click right; when it tilts right, click left.",
        },
        { text: "Maximise the sails for a steady run." },
        { text: "Fill the progress bar to reach Fossil Island." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "Access to Fossil Island (with its own dungeon, mine, herb patches, hardwood trees, etc.)"],
};
