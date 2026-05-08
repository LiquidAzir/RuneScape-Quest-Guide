import type { QuestWalkthrough } from "../types";

export const eaglesPeak: QuestWalkthrough = {
  startPoint: "Talk to Charlie the zookeeper at Ardougne Zoo.",
  itemsRequired: [
    "Yellow dye",
    "Swamp tar",
    "50 Coins",
  ],
  recommended: [
    "27 Hunter is required",
    "Combat 10+",
    "Fast travel: fairy ring AKQ (closest to Eagles' Peak), Ardougne teleport",
    "Stamina/energy potions",
  ],
  enemies: ["A small tunnel kebbit (level 13) you taunt — no real fight"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Charlie at Ardougne Zoo. He needs an unusual ferret from Eagles' Peak." },
        {
          text: "Travel to Eagles' Peak in north-west Kandarin (use fairy ring AKQ if available).",
        },
      ],
    },
    {
      title: "Find the entrance",
      steps: [
        { text: "At the campsite east of the peak, talk to Nickolaus and pick up the Bird book and a Metal feather." },
        { text: "Climb to the top of Eagles' Peak via the rocks/path." },
        { text: "Use the Metal feather on the Rocky outcrop to enter the dungeon." },
        { text: "Inside, collect 10 eagle feathers from the piles around the dungeon." },
      ],
    },
    {
      title: "Make the bird disguise",
      steps: [
        { text: "Travel to the Fancy Clothes Store in Varrock." },
        { text: "Trade 10 eagle feathers, 50 coins, swamp tar, and yellow dye for the Eagle cape and Fake beak." },
      ],
    },
    {
      title: "Get the three special feathers",
      steps: [
        {
          text: "Bronze feather: re-enter Eagles' Peak dungeon and operate all 4 winches in sequence to drop the bronze feather into the chamber.",
          notes: ["The puzzle requires a specific order — the wiki has the diagram. Generally pull each winch then re-pull as needed."],
        },
        {
          text: "Silver feather: complete the small Hunter trail in another room — walk the trail and taunt the kebbit when prompted.",
        },
        {
          text: "Golden feather: solve the bird-seed puzzle in the north-east tunnel (place piles of seeds in the correct order shown by Nickolaus's book).",
        },
      ],
    },
    {
      title: "Past the giant eagle",
      steps: [
        { text: "Use all three special feathers on the eagle door carving to open it." },
        { text: "Equip the Eagle cape and Fake beak." },
        { text: "Walk past the giant eagle while disguised." },
        { text: "Talk to Nickolaus inside (he's been the missing person all along)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the campsite and finish the dialogue with Nickolaus there." },
        { text: "Bring the ferret back to Charlie at Ardougne Zoo." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,500 Hunter experience",
    "Ability to use box traps",
    "Access to the Eagle transport network (fast travel between four eagle eyries)",
  ],
};
