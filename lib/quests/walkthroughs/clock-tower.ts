import type { QuestWalkthrough } from "../types";

export const clockTower: QuestWalkthrough = {
  startPoint: "Talk to Brother Kojo in the Clock Tower south of East Ardougne.",
  itemsRequired: ["Bucket of water (in-quest, or ice gloves alternative)"],
  recommended: [
    "Combat 15+",
    "Weight-reducing clothing + stamina/energy potions",
    "Ardougne cloak / teleport / spirit tree / fairy ring",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Brother Kojo." },
        { text: "Descend the middle ladder." },
        { text: "Follow the path to the hub with four doors." },
      ],
    },
    {
      title: "Red cog",
      steps: [
        { text: "Enter the south-eastern door." },
        { text: "Walk past the Ogres and pick up the red cog." },
        { text: "Return to the ladder and climb to ground floor." },
        { text: "Use the red cog on the red spindle beside the ladder (facing north)." },
      ],
    },
    {
      title: "Blue cog",
      steps: [
        { text: "Exit the tower and go east to Brother Cedric (south of Ardougne Zoo)." },
        { text: "Get a bucket of water from a nearby well if needed." },
        { text: "Descend the ladder east of Cedric." },
        { text: "Push the wall and pick up the blue cog." },
        { text: "Return to the tower; climb to the first floor." },
        { text: "Use the blue cog on the south-side spindle." },
      ],
    },
    {
      title: "Black cog",
      steps: [
        { text: "Go through the north-eastern basement door." },
        { text: "Travel east to the fire." },
        { text: "Use a bucket of water (or wear ice gloves) to pick up the cog." },
        { text: "Use the black cog on the east-side basement spindle." },
      ],
    },
    {
      title: "White cog",
      steps: [
        { text: "Enter the north-western door." },
        { text: "Pick up rat poison." },
        { text: "Pull levers on the dungeon rat cage." },
        { text: "Use rat poison on the food trough." },
        { text: "Wait for the rats to die." },
        { text: "Pick up the white cog through the western gate." },
        { text: "Climb to the top floor." },
        { text: "Use the white cog on the west-side spindle." },
      ],
    },
    {
      title: "Finish",
      steps: [
        { text: "Talk to Brother Kojo." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "500 coins"],
};
