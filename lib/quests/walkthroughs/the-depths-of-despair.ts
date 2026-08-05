import type { QuestWalkthrough } from "../types";

export const theDepthsOfDespair: QuestWalkthrough = {
  startPoint:
    "Talk to Lord Kandur Hosidius in his manor in Hosidius, north-west of the Vinery. Xeric's talisman to Xeric's Glade then run south-east, or skills necklace to the Woodcutting Guild and run north-east. No teleports: boat from Port Sarim to Port Piscarilius and run south-west across Kourend.",
  itemsRequired: [],
  recommended: [
    "Combat 15+",
    "Skills necklace, Xeric's talisman, Stamina potions",
    "Some food at low levels",
    "Arceuus Library Teleport",
    "Fairy ring access",
  ],
  enemies: ["Sand Snake (level 36)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Lord Kandur Hosidius in his manor north-west of the Hosidius Vinery.",
          travel:
            "Xeric's talisman to Xeric's Glade then run south-east, or skills necklace to the Woodcutting Guild and run north-east through the Hosidius fields. No teleports: boat from Port Sarim to Port Piscarilius, then run south-west across Kourend.",
        },
        { text: "Talk to Chef Olivia in the manor kitchen." },
        {
          text: "Talk to Galana in the Arceuus Library to get the location of the Varlamore envoy book.",
          travel:
            "Arceuus Library Teleport (Arceuus, 6 Magic) drops you at the door. Otherwise fairy ring CIS beside the library, games necklace to the Wintertodt camp and run south, or the Lovakengj minecart to the Arceuus stop.",
        },
        { text: "Find and read the Varlamore envoy book on the shelf Galana points you to." },
      ],
    },
    {
      title: "Crabclaw Caves",
      steps: [
        {
          text: "Enter the Crabclaw Caves just south of the Woodcutting Guild, down by the water.",
          travel:
            "Skills necklace to the Woodcutting Guild, then run south to the shoreline — the cave mouth is in the cliff by the sea. Alternatives: Rada's blessing teleport, Xeric's talisman to Xeric's Look-out and run north-west, or a charter ship to Land's End and run north.",
        },
        { text: "Work through the caves to the tunnel at the far end and climb down." },
        { text: "Talk to Artur Hosidius, who is waiting at the bottom of the tunnel in the mine." },
        { text: "Defeat the Sand Snake (level 36)." },
        { text: "Search the chest." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Lord Kandur Hosidius in his manor north-west of the Hosidius Vinery.",
          travel: "Skills necklace to the Woodcutting Guild and run north-east, or Xeric's talisman to Xeric's Glade and run south-east.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,500 Agility experience",
    "4,000 coins",
    "'Lunch by the Lancalliums' page added to Kharedst's memoirs",
    "Hosidius graceful outfit recolour",
  ],
};
