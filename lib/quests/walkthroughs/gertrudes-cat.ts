import type { QuestWalkthrough } from "../types";

export const gertrudesCat: QuestWalkthrough = {
  startPoint:
    "Talk to Gertrude at her house just west of Varrock. Varrock teleport, then run west out of the west gate and follow the road south-west past the Cooks' Guild — her house is the small cottage just south-west of the guild, on the road towards Barbarian Village.",
  itemsRequired: [
    "Bucket of milk",
    "100 coins",
    "Seasoned sardine (raw sardine + doogle leaves)",
  ],
  recommended: ["Ring of Charos (a)", "Axe + 100 extra coins for diary task"],
  sections: [
    {
      title: "Make the seasoned sardine",
      steps: [
        {
          text: "Talk to Gertrude at her house west of Varrock and agree to help find her cat.",
          travel:
            "Varrock teleport, then west out of the Varrock west gate and south-west along the road past the Cooks' Guild. Gertrude's cottage is the small house just south-west of the guild. No Varrock teleport: run north-west from Lumbridge past Draynor Manor and the river, or east from Barbarian Village.",
        },
        {
          text: "Pick doogle leaves from the patch directly behind (south of) Gertrude's house.",
        },
        { text: "Use the doogle leaves on a raw sardine to make a seasoned sardine." },
      ],
    },
    {
      title: "Find Fluffs",
      steps: [
        {
          text: "Go to the newsstand in Varrock Square and find the children Shilop and Wilough.",
          travel:
            "Run back east through the Varrock west gate to the town centre, or just cast Varrock teleport — it lands you in the square. The newsstand is beside the central fountain; Shilop and Wilough are the two children running laps around it.",
        },
        { text: "Pay 100gp to Shilop or Wilough for information about the cat." },
      ],
    },
    {
      title: "Rescue the kitten",
      steps: [
        {
          text: "Travel to the Lumber Yard north-east of Varrock.",
          travel:
            "Lumberyard teleport scroll (hard clue reward) drops you right at the yard. Otherwise leave Varrock by the east gate, then follow the path north-east past the Digsite turn-off; the yard is the fenced timber compound at the end of the path.",
        },
        {
          text: "Climb over the broken fence on the south side of the yard and go up the ladder on the central building to reach Fluffs.",
        },
        { text: "Use the bucket of milk, then the seasoned sardine, on the cat." },
        {
          text: "Go back down and search the crates around the yard that show a yellow 'Search crate' option (a yellow 'Mew!' appears over the right one) until you find Fluffs' kitten.",
          notes: ["Searching the same crate twice does nothing — move between different crates."],
        },
        { text: "Climb the ladder back up to Fluffs with the kitten." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Use the kitten on Gertrude's cat upstairs." },
        {
          text: "Return to Gertrude at her house west of Varrock.",
          travel:
            "Run back south-west along the path to Varrock, out through the west gate and south-west past the Cooks' Guild to her cottage. A Varrock teleport shortens the trip to just the westward leg.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,525 Cooking experience",
    "Your own kitten (companion)",
    "Chocolate cake + Stew",
    "Future kitten purchases from Gertrude (100gp each)",
  ],
};
