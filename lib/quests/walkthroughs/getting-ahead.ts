import type { QuestWalkthrough } from "../types";

export const gettingAhead: QuestWalkthrough = {
  startPoint:
    "Talk to Gordon on his farm just south of the Farming Guild in the Kebos Lowlands. Skills necklace teleport to the Farming Guild, then run south out of the guild gate to the fenced farmstead with the cow pen.",
  itemsRequired: [
    "Pot of flour",
    "Soft clay (or pickaxe to mine clay)",
    "Hammer + Saw",
    "2 planks + 6+ nails",
    "Knife",
    "Red dye",
    "Needle + thread",
    "Bear fur or grey wolf fur",
  ],
  recommended: ["Combat 45+", "Combat gear and food for the Headless Beast"],
  enemies: ["Headless Beast (level 82)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Gordon on his farm south of the Farming Guild.",
          travel:
            "Skills necklace ('Farming Guild') drops you at the guild gate — run south and the farm is the first fenced homestead, Gordon standing outside near the cow pen. No skills necklace: Xeric's talisman to Xeric's Glade and run north-west into the Kebos Lowlands, or take the boat to Port Piscarilius and run west then south-west through Hosidius.",
        },
        {
          text: "Talk to Mary inside the farmhouse, the main building just west of Gordon.",
        },
      ],
    },
    {
      title: "Track and slay the Headless Beast",
      steps: [
        { text: "Use a pot of flour on the southern gate by the cow pen to reveal the beast's trail." },
        {
          text: "Follow the flour trail from the farm to the cave at the Kebos Lowlands mine.",
          travel:
            "From the southern gate, follow the sparkling trail south past the bridge, then west across the Lowlands. The trail ends at the cave mouth beside the Kebos Lowlands mine (the pickaxe icon on the minimap).",
        },
        { text: "Enter the cave and defeat the Headless Beast (level 82)." },
        {
          text: "Return to Gordon on his farm south of the Farming Guild.",
          travel:
            "Leave the cave and retrace the trail east then north across the Lowlands, or skills necklace to the Farming Guild and run south to the farm.",
        },
      ],
    },
    {
      title: "Make the fake head",
      steps: [
        { text: "Use a knife on soft clay to make a clay head." },
        { text: "Use bear fur with needle + thread to make a fur head." },
        { text: "Apply red dye for a bloody look." },
        { text: "Mount the head on the wall of Gordon's farmhouse using planks + nails." },
        { text: "Talk to Gordon on his farm south of the Farming Guild to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 coins",
    "4,000 Crafting experience",
    "3,200 Construction experience",
    "Access to the Kebos Lowlands tannery",
  ],
};
