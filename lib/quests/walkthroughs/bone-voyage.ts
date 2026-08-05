import type { QuestWalkthrough } from "../types";

export const boneVoyage: QuestWalkthrough = {
  startPoint:
    "Talk to Curator Haig Halen in the Varrock Museum, the big building in the south-east of Varrock just south of the castle courtyard. Varrock Teleport (Magic 25) then run south-east, or use the Varrock Museum entrance beside the castle's southern gate.",
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
        {
          text: "Talk to Curator Haig Halen on the ground floor of the Varrock Museum.",
          travel:
            "Varrock Teleport puts you in Varrock square; run south-east past the castle's south gate — the museum is the large building on the south side of the castle grounds. Haig stands near the entrance desk.",
        },
        { text: "Pick 'Have you any interesting news?' then 'Sign me up!'." },
      ],
    },
    {
      title: "Finishing touches",
      steps: [
        {
          text: "Talk to the barge foreman standing in front of the canal barge north of the Digsite.",
          travel:
            "Digsite pendant teleport to the Digsite, then run north to the canal. Without one: Varrock Teleport, leave by the east gate and follow the road south-east past the Lumber Yard to the Digsite, then north to the barge.",
        },
        {
          text: "Visit the sawmill operator at the Lumber Yard.",
          travel:
            "The Lumber Yard is north-west of the barge — run back up the road, or use a Lumberyard teleport scroll, which lands you on the spot. From Varrock it is out the east gate then north-east.",
        },
        {
          text: "Bring the sawmill proposal to the operator at the Woodcutting Guild in south-west Hosidius.",
          travel:
            "Skills necklace to the Woodcutting Guild is the direct route. Otherwise Xeric's talisman to Xeric's Look and run north-east into Hosidius, or fairy ring AKR (Hosidius Vinery) and run south-west across Hosidius.",
        },
        {
          text: "Return the sawmill agreement to the operator at the Lumber Yard.",
          travel:
            "Lumberyard teleport scroll, or Varrock Teleport and run east out of the city then north-east up the road.",
        },
      ],
    },
    {
      title: "Cursed voyage",
      steps: [
        {
          text: "Talk to the barge foreman again at the canal barge north of the Digsite.",
          travel: "Digsite pendant, then run north to the canal; or run south-east from the Lumber Yard.",
        },
        { text: "Right-click 'Embark' on the barge guard." },
        { text: "Talk to the Lead Navigator on the boat." },
        {
          text: "Visit Jack Seagull at the Rusty Anchor Inn in Port Sarim.",
          travel:
            "Amulet of glory to Draynor Village then run west along the road, or Falador Teleport and run south through the south gate. The Rusty Anchor is the pub at the northern end of Port Sarim, on the west side of the road.",
        },
        {
          text: "Board the boat again, then meet the Odd Old Man at the Silvarea limestone mine north of the Digsite.",
          travel:
            "Digsite pendant, then run north past the barge and up the hill — the mine is on the Silvarea path between Varrock and the River Salve, with the Odd Old Man's tent beside it.",
        },
        {
          text: "Bring 2 vodka and a marrentill potion (unf) to the Apothecary in south-west Varrock — he makes a potion of sea legs.",
          travel:
            "Varrock Teleport, then run south-west from the square. The Apothecary's small house is south-west of Varrock Square, near the Varrock sword shop.",
        },
        {
          text: "Return the potion to the Lead Navigator on the barge north of the Digsite.",
          travel: "Digsite pendant then run north to the canal barge and board it.",
        },
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
