import type { QuestWalkthrough } from "../types";

export const clockTower: QuestWalkthrough = {
  startPoint:
    "Talk to Brother Kojo on the ground floor of the Clock Tower south of East Ardougne (the small monastery with the giant clock face). Fairy ring BIS drops you inside Ardougne Zoo — run south-west. Otherwise Ardougne Teleport and run south out of the city, following the road past the zoo.",
  itemsRequired: [
    "Bucket (a bucket spawns at the well near Brother Cedric, or bring one)",
    "Bucket of water OR ice gloves (used to handle the burning black cog)",
  ],
  recommended: [
    "Combat 15+ (basement has Ogres and small enemies — easy to avoid)",
    "Weight-reducing clothing + stamina/energy potions",
    "Ardougne cloak, Ardougne teleport, or fairy ring BIS (Ardougne Zoo) for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Brother Kojo on the ground floor of the Clock Tower south of East Ardougne.",
          travel:
            "Fairy ring BIS lands you in Ardougne Zoo — leave by the south gate and run south-west to the tower. Without a fairy ring: Ardougne Teleport to the market square, then run south through the city and out of the southern gate; the Clock Tower is the building with the clock face on the road below the city, north-west of Witchaven.",
        },
        {
          text: "Descend the middle ladder in the centre of the ground floor (NOT the corner ladders) into the basement.",
        },
        {
          text: "Follow the corridor to the central hub — a small round room with four coloured doors (red SE, blue NE, black E, white NW).",
        },
      ],
    },
    {
      title: "Red cog (south-east door)",
      steps: [
        {
          text: "Enter the south-eastern (red) door from the central hub.",
        },
        {
          text: "Walk past the Ogres in the red corridor (they don't aggro at most combat levels) and pick up the red cog at the end.",
        },
        {
          text: "Return to the central hub and climb the middle ladder back to the ground floor.",
        },
        {
          text: "Use the red cog on the red spindle on the ground floor (the spindle beside the central ladder, facing north).",
        },
      ],
    },
    {
      title: "Blue cog (Brother Cedric's basement)",
      steps: [
        {
          text: "Leave the Clock Tower and talk to Brother Cedric at his cabin north-east of the tower, below Ardougne Zoo.",
          travel:
            "Out of the tower's front door, run north-east along the road — Cedric stands outside the small cabin with a well beside it, between the tower and the zoo's southern fence.",
        },
        {
          text: "Get a bucket of water from the well next to Cedric's cabin (use a bucket on the well).",
        },
        {
          text: "Descend the trapdoor inside Cedric's cabin to enter the small basement.",
        },
        {
          text: "Push the loose wall in the basement to reveal the blue cog and pick it up.",
        },
        {
          text: "Return to the Clock Tower and climb the stairs in the centre of the ground floor up to the first floor.",
          travel: "Run back south-west down the road to the tower.",
        },
        {
          text: "Use the blue cog on the blue spindle on the south side of the first floor room.",
        },
      ],
    },
    {
      title: "Black cog (east basement door)",
      steps: [
        {
          text: "Climb back down the central ladder into the basement and enter the east (black) door from the central hub.",
        },
        {
          text: "Travel east to the fire in the chamber — the black cog sits in the flames.",
        },
        {
          text: "Use a bucket of water on the cog (or equip ice gloves) to safely pick it up.",
        },
        {
          text: "Use the black cog on the black spindle inside the basement, on the east side of the central hub.",
        },
      ],
    },
    {
      title: "White cog (north-west basement door)",
      steps: [
        {
          text: "Enter the north-western (white) door from the central hub.",
        },
        {
          text: "Pick up the rat poison off the floor inside.",
        },
        {
          text: "Pull the levers on the rat cage (south side) to release the rats from the cage.",
        },
        {
          text: "Use the rat poison on the food trough at the back of the chamber.",
        },
        {
          text: "Wait a few seconds for the rats to die.",
        },
        {
          text: "Walk through the now-clear western gate and pick up the white cog.",
        },
        {
          text: "Return to the Clock Tower ground floor and climb to the top floor (one above the first floor).",
        },
        {
          text: "Use the white cog on the white spindle on the west side of the top floor.",
        },
      ],
    },
    {
      title: "Finish",
      steps: [
        {
          text: "Return to Brother Kojo on the ground floor of the Clock Tower.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["1 Quest Point", "500 coins"],
};
