import type { QuestWalkthrough } from "../types";

export const eaglesPeak: QuestWalkthrough = {
  startPoint:
    "Talk to Charlie the zookeeper at Ardougne Zoo. Ardougne Teleport drops you in the East Ardougne market square — run north-east past the castle to the zoo; Charlie paces among the enclosures.",
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
        {
          text: "Talk to Charlie at Ardougne Zoo — he needs an unusual ferret from Eagles' Peak.",
          travel:
            "Ardougne Teleport to the East Ardougne market square, then run north-east past the castle into the zoo. Ardougne cloak → Ardougne Monastery and running south-east also works.",
        },
        {
          text: "Travel to Eagles' Peak, the mountain in north-west Kandarin.",
          travel:
            "Fairy ring AKQ (Piscatoris Hunter area), then run south-east to the peak. Without fairy rings: spirit tree or gnome glider to the Tree Gnome Stronghold and run north, or run north from Ardougne past the Fishing Guild and Baxtorian Falls.",
        },
      ],
    },
    {
      title: "Find the entrance",
      steps: [
        {
          text: "At the campsite east of the peak, talk to Nickolaus and pick up the Bird book and a Metal feather.",
          travel: "The camp is the small tent-and-fire site on the eastern side of the mountain, at the base of the slope.",
        },
        { text: "Climb to the top of Eagles' Peak via the rocks/path." },
        { text: "Use the Metal feather on the Rocky outcrop to enter the dungeon." },
        { text: "Inside, collect 10 eagle feathers from the piles around the dungeon." },
      ],
    },
    {
      title: "Make the bird disguise",
      steps: [
        {
          text: "Travel to the Fancy Clothes Store in south-east Varrock.",
          travel:
            "Varrock Teleport to the central square, then run south-east — the Fancy Clothes Store is the shop near the road down to Varrock's south gate.",
        },
        { text: "Trade 10 eagle feathers, 50 coins, swamp tar, and yellow dye for the Eagle cape and Fake beak." },
      ],
    },
    {
      title: "Get the three special feathers",
      steps: [
        {
          text: "Bronze feather: re-enter Eagles' Peak dungeon and operate all 4 winches in sequence to drop the bronze feather into the chamber.",
          travel:
            "Fairy ring AKQ then run south-east to the peak, climb to the top and use the Metal feather on the Rocky outcrop again.",
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
        {
          text: "Return to the campsite east of the peak and finish the dialogue with Nickolaus there.",
          travel: "Leave the dungeon and run back down the east side of the mountain to the tents.",
        },
        {
          text: "Bring the ferret back to Charlie at Ardougne Zoo.",
          travel:
            "Ardougne Teleport to the market square, then north-east past the castle into the zoo.",
        },
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
