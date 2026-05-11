import type { QuestWalkthrough } from "../types";

export const fairytaleIGrowingPains: QuestWalkthrough = {
  startPoint: "Talk to Martin the Master Gardener by the pig pen in Draynor Village.",
  itemsRequired: [
    "Secateurs (5gp from Sarah's Farming shop)",
    "Spade",
    "Ghostspeak amulet",
    "Dramen staff",
    "Draynor skull",
    "3 randomly assigned items (check quest journal)",
  ],
  recommended: [
    "Combat 50+",
    "40+ combined Strength + Farming",
    "Amulet of glory or teleports for fast travel",
    "Druid pouch (protects food from ghasts)",
  ],
  enemies: ["Tanglefoot (level 111) — flinch-able; fight in a Zanaris instance"],
  sections: [
    {
      title: "Investigate the Group of Advanced Gardeners",
      steps: [
        { text: "Talk to Martin the Master Gardener by the pig pen in Draynor Village." },
        { text: "Talk to all 5 Group of Advanced Gardeners members at their farming patches." },
        { text: "Return to Martin in Draynor Village." },
      ],
    },
    {
      title: "Trouble in Zanaris",
      steps: [
        { text: "Travel to Zanaris with a dramen/lunar staff." },
        { text: "Talk to the Fairy Godfather in the throne room." },
        { text: "Get the symptoms list from Fairy Nuff." },
        { text: "Talk to Zandar Horfyre at the Dark Wizards' Tower." },
      ],
    },
    {
      title: "Get the Magic Secateurs",
      steps: [
        { text: "Give the Draynor skull to Malignius Mortifer near Port Sarim." },
        { text: "Collect 3 randomly assigned items (check quest journal)." },
        { text: "Travel to the Nature Grotto in Mort Myre Swamp." },
        { text: "Trade the items to the Nature Spirit for Magic secateurs." },
      ],
    },
    {
      title: "Defeat Tanglefoot",
      steps: [
        { text: "Go to Zanaris with the Magic secateurs." },
        { text: "Reach the Cosmic Altar; squeeze through the western gap." },
        { text: "Defeat Tanglefoot (level 111) — Protect from Melee if possible." },
        { text: "Pick up the Queen's secateurs." },
        { text: "Talk to the Fairy Godfather in the Zanaris throne room." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Magic secateurs (boosts crop harvests permanently)",
    "3,500 Farming experience",
    "2,000 Attack experience",
    "1,000 Magic experience",
  ],
};
