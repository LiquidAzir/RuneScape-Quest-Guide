import type { QuestWalkthrough } from "../types";

export const theDigSite: QuestWalkthrough = {
  startPoint:
    "Talk to any Examiner inside the Digsite Exam Centre — the small school building on the road south-east of Varrock (south of the Digsite proper, on the path between Varrock and the river). Use Digsite pendant or Varrock teleport + run south-east.",
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
        {
          text: "Talk to any Examiner inside the Digsite Exam Centre and ask to take the entrance exam. Answer wrong on purpose to fail (the wrong answers don't matter — just pick anything to fail).",
        },
        {
          text: "Travel to the Varrock Museum (south-east Varrock, just inside the south-east gate) and talk to Curator Haig Halen on the ground floor for a sealed letter.",
        },
        {
          text: "If you don't have a cup of tea, steal one from the Varrock tea stall in central Varrock (Thieving 5+, near the Varrock palace courtyard).",
        },
      ],
    },
    {
      title: "Help the students",
      steps: [
        {
          text: "Find the teddy bear in one of the bushes just north of the Digsite Exam Centre (search the bushes; one yields the bear).",
        },
        {
          text: "Walk north into the Digsite proper and pick up a panning tray from the rack near the river bank (north end of the Digsite, by the river).",
        },
        {
          text: "Walk to the panning guide near the river and use the cup of tea on him.",
        },
        {
          text: "Pan in the river next to the panning guide until you find a special cup AND an animal skull (and an opal if needed for later).",
        },
        {
          text: "Walk around the Digsite and pickpocket a workman to steal a specimen brush.",
        },
        {
          text: "Give the teddy bear to the blonde female student (one of the 3 students wandering the Digsite area).",
        },
        {
          text: "Give the special cup to the bearded student (the male student with the beard near the southern Digsite fence).",
        },
        {
          text: "Give the animal skull to the student in the green shirt (the third student, distinguishable by the green outfit).",
        },
      ],
    },
    {
      title: "Pass the exams",
      steps: [
        {
          text: "Return to the Examiner inside the Digsite Exam Centre and answer each of the 3 exam questions correctly using the info from the students.",
        },
        { text: "Talk to all 3 Digsite students again around the Digsite Exam Centre between exams as the questions change." },
      ],
    },
    {
      title: "Help Terry Balando",
      steps: [
        {
          text: "Search the cupboards in the Digsite Exam Centre for a rock pick and a specimen jar.",
        },
        {
          text: "Walk into the Digsite and use a trowel on the soil patches around the dig area until you find an ancient talisman.",
        },
        {
          text: "Talk to Terry Balando inside the Exam Centre — he gives you an invitation. Use the invitation on a workman at the Digsite gate to pass the gate.",
        },
        {
          text: "Walk to the western winch at the Digsite (the wooden winch by the western dig pit) and use a rope on it; climb down.",
        },
        {
          text: "In the underground passage, collect an arcenia root from the floor and search the bricks in the wall.",
        },
        {
          text: "Climb back up; talk to Doug Deeping standing between the winches at the Digsite about moving the rocks.",
        },
      ],
    },
    {
      title: "Make the explosive compound",
      steps: [
        {
          text: "Unlock the locked chest in the eastern winch underground area; take the chemical powder.",
        },
        {
          text: "Use a trowel on the barrel near the chest to collect unidentified liquid.",
        },
        {
          text: "Grind charcoal with a pestle and mortar.",
        },
        {
          text: "Mix the chemical powder + ground charcoal + unidentified liquid in front of Terry Balando inside the Exam Centre to make the chemical compound.",
        },
        {
          text: "Climb back down to the underground brick wall and use the chemical compound on the bricks. Ignite the compound with a tinderbox.",
        },
        {
          text: "Climb through the now-open passage and collect the stone tablet from the chamber below.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Climb back up and use the stone tablet on Terry Balando inside the Digsite Exam Centre." },
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
