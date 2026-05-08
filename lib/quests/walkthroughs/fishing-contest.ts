import type { QuestWalkthrough } from "../types";

export const fishingContest: QuestWalkthrough = {
  startPoint: "Talk to either of the Mountain Dwarves at the foot of White Wolf Mountain.",
  itemsRequired: [
    "Spade",
    "Fishing rod (or 5gp to buy one in Hemenster)",
    "Garlic",
    "10 coins (5 for entry + 5 if buying the rod)",
  ],
  recommended: [
    "Some food for the trip",
    "Catherby/Camelot teleport for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the foot of White Wolf Mountain (between Catherby and Taverley) and talk to a Mountain Dwarf.",
          notes: ["He wants to skip past the wolves via the underground passage — but needs a fishing pass first."],
        },
        { text: "Pick up garlic from the kitchen of the small house south-west of Seers' Village if you don't already have one." },
      ],
    },
    {
      title: "Get red vine worms",
      steps: [
        {
          text: "Travel to McGrubor's Wood (north-west of Seers' Village).",
          notes: ["Squeeze through the loose railing on the south side to enter."],
        },
        { text: "Use a spade on the red vine just west of the fairy ring spot to dig 3 red vine worms." },
      ],
    },
    {
      title: "Win the fishing contest",
      steps: [
        {
          text: "Travel to Hemenster (a small village south of Seers' Village) and approach the contest entrance.",
        },
        { text: "Talk to the gatekeeper to enter — pay 5gp." },
        {
          text: "Use garlic on the pipes to the north of the contest area.",
          notes: ["This drives the Sinister Stranger's competing fish away from the prime spot."],
        },
        { text: "If you don't already have a fishing rod, buy one from Grandpa Jack in Hemenster (5gp)." },
        { text: "Wait until the Sinister Stranger moves away from the north pipe spot." },
        { text: "Stand at the north pipe spot and fish with red vine worms until the contest ends and you win." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Take the giant carp / trophy back to the Mountain Dwarf at White Wolf Mountain." },
        { text: "Quest complete — you can now use the underground passage between Taverley and Catherby." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,437 Fishing experience",
    "Access to the White Wolf Mountain underground tunnel (skips the mountain wolves)",
  ],
};
