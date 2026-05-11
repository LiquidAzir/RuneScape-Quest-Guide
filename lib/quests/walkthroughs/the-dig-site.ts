import type { QuestWalkthrough } from "../types";

export const theDigSite: QuestWalkthrough = {
  startPoint: "Talk to an Examiner in the Exam Centre south of the Digsite.",
  itemsRequired: [
    "Pestle and mortar",
    "Vial",
    "Tinderbox",
    "Cup of tea (or steal from a Varrock tea stall)",
    "2 ropes",
    "Opal (or pan one in-quest)",
  ],
  recommended: [
    "Weight-reducing clothing",
    "Stamina/energy potions",
    "Digsite Pendant or Varrock Teleport",
  ],
  enemies: ["Skeletons (level 22) — optional"],
  sections: [
    {
      title: "Get the sealed letter",
      steps: [
        { text: "Talk to an Examiner about taking the exam — fail intentionally." },
        { text: "Travel to the Varrock Museum and talk to the curator for a sealed letter." },
        { text: "Steal a cup of tea from the Varrock tea stall if you don't have one." },
      ],
    },
    {
      title: "Help the students",
      steps: [
        { text: "Find the teddy bear in a bush north of the Exam Centre." },
        { text: "Pick up a panning tray from the digsite." },
        { text: "Use the cup of tea on the panning guide." },
        { text: "Pan in the river until you find a special cup AND an animal skull (and an opal if needed)." },
        { text: "Steal a specimen brush from a workman." },
        { text: "Give the teddy bear to the blonde female student." },
        { text: "Give the special cup to the bearded student." },
        { text: "Give the animal skull to the student in the green shirt." },
      ],
    },
    {
      title: "Pass the exams",
      steps: [
        { text: "Talk to the examiner and pass each of the 3 exam questions." },
        { text: "Talk to all 3 Digsite students again around the Digsite Exam Centre between exams as the questions change." },
      ],
    },
    {
      title: "Help Terry Balando",
      steps: [
        { text: "Search the cupboards in the Exam Centre for a rock pick and specimen jar." },
        { text: "Use a trowel on the soil to find an ancient talisman." },
        { text: "Talk to Terry Balando, then use the invitation on a workman to pass the gate." },
        { text: "Climb down the western winch with a rope." },
        { text: "Collect arcenia root and search the bricks." },
        { text: "Talk to Doug Deeping beside the winches at the Digsite about moving the rocks." },
      ],
    },
    {
      title: "Make the explosive compound",
      steps: [
        { text: "Unlock the chest and obtain chemical powder." },
        { text: "Use a trowel on the barrel to collect unidentified liquid." },
        { text: "Grind charcoal with a pestle and mortar." },
        { text: "Mix the chemicals with Terry Balando in the Exam Centre to make the chemical compound." },
        { text: "Use the compound on the bricks underground and ignite it with a tinderbox." },
        { text: "Collect the stone tablet from the chamber below." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Use the stone tablet on Terry Balando." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "15,300 Mining experience",
    "2,000 Herblore experience",
    "2 Gold bars",
    "Choice of fruit blast or chocolate cake from the curator",
    "Ability to clean Varrock Museum specimens for Kudos and XP",
  ],
};
