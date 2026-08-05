import type { QuestWalkthrough } from "../types";

export const fishingContest: QuestWalkthrough = {
  startPoint:
    "Talk to either Mountain Dwarf at the foot of White Wolf Mountain. Getting there: Falador Teleport, run west through the Taverley gate and then north-west to the mountain path — the dwarf stands by the tunnel entrance. From the other side, Camelot Teleport and run south-east to Catherby, then west up the mountain road to the second dwarf.",
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
          text: "Talk to a Mountain Dwarf at the foot of White Wolf Mountain.",
          travel:
            "Falador Teleport, then west out of the city and through Taverley to the mountain path on the village's north-east side. Or Camelot Teleport, run south-east into Catherby and then west up the mountain road. Either dwarf will do.",
          notes: ["He wants to skip past the wolves via the underground passage — but needs a fishing pass first."],
        },
        {
          text: "Pick up the garlic from the kitchen of the small house south-west of Seers' Village if you don't have one.",
          travel: "Camelot Teleport, then run south-west out of Seers' Village — the garlic spawns on the kitchen table of the house on that edge of the village.",
        },
      ],
    },
    {
      title: "Get red vine worms",
      steps: [
        {
          text: "Travel to McGrubor's Wood north-west of Seers' Village.",
          travel:
            "Fairy ring ALS lands you inside the wood. Otherwise, Camelot Teleport and run north-west out of Seers' Village to the fenced wood, then squeeze through the loose railing on its south side to get in.",
          notes: ["Squeeze through the loose railing on the south side to enter."],
        },
        { text: "Use a spade on the red vines inside the wood to dig up 3 red vine worms." },
      ],
    },
    {
      title: "Win the fishing contest",
      steps: [
        {
          text: "Travel to Hemenster and approach the fishing contest gate.",
          travel:
            "Hemenster is the small village west of Seers' Village, just north of the Ranging Guild. From McGrubor's Wood run south-west; from Camelot Teleport run west past the Seers' Village bank and keep going along the road.",
        },
        { text: "Talk to the gatekeeper Morris to enter — pay 5gp." },
        {
          text: "Use garlic on the pipes at the north end of the contest area.",
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
        {
          text: "Take the fishing trophy back to the Mountain Dwarf at White Wolf Mountain.",
          travel:
            "From Hemenster run east back through Seers' Village and on to Catherby, then west up the mountain road to the dwarf. Camelot Teleport shortens the trip if you have runes.",
        },
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
