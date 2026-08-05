import type { QuestWalkthrough } from "../types";

export const vampyreSlayer: QuestWalkthrough = {
  startPoint:
    "Talk to Morgan in the small house in the north of Draynor Village. Rub an amulet of glory and pick Draynor Village, or run west from Lumbridge along the north bank of the river; from the Draynor bank walk north-east and Morgan's house is the one beside the road that leads north to Draynor Manor.",
  itemsRequired: [
    "A hammer",
    "Some coins (1gp for Dr Harlow's beer)",
  ],
  recommended: [
    "Decent armour and weapon — the vampyre is level 34",
    "Food (sharks, lobsters, swordfish, etc.)",
    "Strength potion is helpful",
  ],
  enemies: ["Count Draynor (level 34 vampyre)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Morgan in the small house in the north of Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village, or Lumbridge Home Teleport and run west along the road on the north side of the river. From the Draynor bank head north-east — Morgan's house sits on the road heading north out of the village towards Draynor Manor.",
        },
        { text: "He explains the village is plagued by a vampyre. Agree to slay it." },
        {
          text: "Talk to Dr Harlow in the Blue Moon Inn in south-central Varrock.",
          travel:
            "Varrock Teleport, then run south from the square and west along the main road — the Blue Moon Inn is the pub on the south side of that road, just west of the south square. Without runes, walk north-east from Draynor through Lumbridge and up the road to Varrock.",
        },
        { text: "Buy a beer from the barman (1gp) and give it to Dr Harlow; he tells you to use a stake and a hammer to kill the vampyre." },
        { text: "Dr Harlow hands you a stake." },
      ],
    },
    {
      title: "Slay Count Draynor",
      steps: [
        {
          text: "Travel to Draynor Manor, north of Draynor Village, and go inside.",
          travel:
            "Amulet of glory to Draynor Village, then run north up the road past the wheat field and through the manor's iron gates. From Varrock instead, run south-west past the Cooks' Guild and Draynor Manor is straight ahead over the bridge.",
        },
        { text: "Head north through the entrance hall and take the staircase down into the basement, where Count Draynor waits in the coffin room." },
        {
          text: "Equip your weapon and attack Count Draynor. Eat food as needed.",
          notes: ["Pray Protect from Melee if you have it; otherwise just out-tank with food."],
        },
        {
          text: "When his HP runs out, the game uses the stake and hammer in your inventory automatically to finish him.",
          notes: ["You MUST have both the stake and a hammer in your inventory to land the killing blow."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "After Count Draynor crumbles, the quest finishes immediately." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "4,825 Attack experience",
  ],
};
