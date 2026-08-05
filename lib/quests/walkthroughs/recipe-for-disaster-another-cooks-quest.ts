import type { QuestWalkthrough } from "../types";

export const rfdAnotherCooksQuest: QuestWalkthrough = {
  startPoint:
    "Talk to the Cook in Lumbridge Castle's kitchen. Lumbridge Home Teleport drops you in the castle courtyard — walk in the main door and take the ground-floor room in the castle's north-west corner; the Cook stands by the range.",
  itemsRequired: [
    "Eye of newt",
    "Greenman's ale",
    "Rotten tomato",
    "Ashes",
    "Fruit blast (not premade)",
  ],
  recommended: ["Lumbridge teleport"],
  sections: [
    {
      title: "Start the chain",
      steps: [
        {
          text: "Talk to the Cook in the Lumbridge Castle kitchen and start the quest.",
          travel:
            "Lumbridge Home Teleport lands you beside the castle. Enter through the main door and go to the ground-floor kitchen in the north-west corner of the castle — the Cook is at the range next to the sink.",
        },
        { text: "He gives you 100 coins to buy supplies." },
      ],
    },
    {
      title: "Make the dirty blast",
      steps: [
        {
          text: "Get an eye of newt, a Greenman's ale, a rotten tomato and a (non-premade) fruit blast.",
          travel:
            "All four are tradeable — the Grand Exchange is by far the fastest source. Ring of wealth → Grand Exchange, or Varrock teleport then run west along the main road and north through the arch by the Varrock west bank. If you would rather buy the eye of newt directly, it is stocked at Betty's magic shop in Port Sarim (Falador teleport, run south).",
          notes: ["Ashes: drop any logs, light them with a tinderbox and pick up the ashes."],
        },
        { text: "Use ashes on the fruit blast to make a dirty blast." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return all 4 items to the Cook in the Lumbridge Castle kitchen.",
          travel:
            "Lumbridge Home Teleport, then straight into the castle's ground-floor kitchen in the north-west corner.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Invitation to the feast (lets you start the next subquests)",
    "Access to the Culinaromancer's Chest after watching the feast cutscene",
  ],
};
