import type { QuestWalkthrough } from "../types";

export const gertrudesCat: QuestWalkthrough = {
  startPoint: "Talk to Gertrude at her house, west of Varrock.",
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
        { text: "Talk to Gertrude and agree to help." },
        { text: "Pick doogle leaves behind her house." },
        { text: "Use the doogle leaves on a raw sardine to make a seasoned sardine." },
      ],
    },
    {
      title: "Find Fluffs",
      steps: [
        { text: "Go to the Varrock Square newsstand." },
        { text: "Pay 100gp to Shilop or Wilough for information." },
      ],
    },
    {
      title: "Rescue the kitten",
      steps: [
        { text: "Travel to the Lumber Yard north-east of Varrock." },
        { text: "Climb over the broken fence and ascend the ladder." },
        { text: "Use the bucket of milk, then the seasoned sardine, on the cat." },
        { text: "Search crates with yellow options until you find a kitten." },
        { text: "Return upstairs with the kitten." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Use the kitten on Gertrude's cat upstairs." },
        { text: "Return to Gertrude." },
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
