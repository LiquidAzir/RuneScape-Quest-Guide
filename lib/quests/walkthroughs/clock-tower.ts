import type { QuestWalkthrough } from "../types";

export const clockTower: QuestWalkthrough = {
  startPoint:
    "Talk to Brother Kojo on the ground floor of the Clock Tower south of East Ardougne (the small monastery with the giant clock face, on the road between Ardougne and the Witchaven turnoff).",
  itemsRequired: [
    "Bucket (a bucket spawns at the well near Brother Cedric, or bring one)",
    "Bucket of water OR ice gloves (used to handle the burning black cog)",
  ],
  recommended: [
    "Combat 15+ (basement has Ogres and small enemies — easy to avoid)",
    "Weight-reducing clothing + stamina/energy potions",
    "Ardougne cloak, Ardougne teleport, Spirit tree (Tree Gnome Stronghold) or fairy ring AKQ for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Clock Tower south of East Ardougne (south-east of the Monastery, on the path leading to Witchaven). Talk to Brother Kojo on the ground floor.",
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
          text: "Exit the Clock Tower and walk east/north-east to find Brother Cedric — he stands by his cabin south of Ardougne Zoo (a short walk north-east of the tower).",
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
          text: "Return to the Clock Tower and climb to the top floor (highest level above the first floor).",
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
