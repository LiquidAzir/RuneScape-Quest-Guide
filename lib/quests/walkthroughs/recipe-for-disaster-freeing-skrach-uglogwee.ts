import type { QuestWalkthrough } from "../types";

export const rfdSkrachUglogwee: QuestWalkthrough = {
  startPoint:
    "Inspect Skrach Uglogwee in the Lumbridge Castle dining room. Lumbridge Home Teleport to the castle courtyard, in through the north door to the kitchen (north-west room, ground floor), down the cellar staircase and through the dining-room doors.",
  itemsRequired: [
    "Axe (any non-blessed)",
    "Raw chompy",
    "Iron spit",
    "Logs",
    "Tinderbox",
    "Pickaxe",
    "Ogre bellows",
    "Ball of wool",
    "Ogre bow (or comp ogre bow)",
    "Ogre arrows",
  ],
  recommended: [
    "Antipoison + food",
    "Chisel + knife + wolf bones + feathers (to make ogre arrows on the spot)",
    "Fairy ring AKS for fast Feldip travel",
  ],
  enemies: ["Jubbly bird (level 11)"],
  sections: [
    {
      title: "Get a raw chompy and cook it tree-style",
      steps: [
        {
          text: "Inspect the frozen Skrach Uglogwee in the Lumbridge Castle dining room to start.",
          travel:
            "Lumbridge Home Teleport, into the castle by the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        {
          text: "Talk to Rantz at his cave in the eastern Feldip Hills, then meet him again at the shore south-east of the cave.",
          travel:
            "Fairy ring AKS lands you in the Feldip hunter area; run east/north-east to Rantz's cave — it is the only quest-start icon in the region. No fairy ring: gnome glider to Lemantolly Undri in the Feldip Hills and run east, the Eagle transport system from Eagles' Peak, or Castle Wars minigame teleport and a long run south-east. After the first conversation, walk to the transportation icon south-east of the cave and talk to him again.",
        },
        { text: "Chop the tree Rantz kicks over twice with your axe to turn it into a boat." },
        {
          text: "Hunt a chompy in the Feldip Hills the same way as Big Chompy Bird Hunting — inflate a toad with the bellows and shoot the bird with your ogre bow.",
          notes: ["Bring several raw chompies if your Cooking level is low, and one normal log if you didn't pack any."],
        },
        {
          text: "Take a raw chompy to Karamja and find the tree with Rantz's arrow in it, north-west of Tai Bwo Wannai.",
          travel:
            "Fairy ring CKR drops you south of Tai Bwo Wannai; run west to the coastline then north up the shore until you reach the tree marked with a transportation icon, just north of Banisoch (dungeon icon). No fairy ring: sail to Brimhaven with Captain Barnaby from Ardougne (30 coins), then head south past the general store and hug the west coast.",
        },
        { text: "Light a fire next to the arrow-marked tree." },
        { text: "Use the iron spit on the raw chompy and cook the skewered chompy on the fire." },
      ],
    },
    {
      title: "Hunt a Jubbly bird",
      steps: [
        {
          text: "Sail back to the Feldip Hills with Bugs and Fycie when they pull up in the ogre boat.",
          travel:
            "The boat arrives at the beach beside the arrow tree as soon as the chompy is cooked, and drops you back at Rantz's shore camp in the Feldip Hills. Talk to the Rantz standing by the water — there are two versions of him.",
        },
        { text: "Fill your ogre bellows on the swamp south of Rantz's cave, then use them on toads to inflate three of them." },
        {
          text: "Mine a rock at the mining spot next to Rantz's cave (or west of the swamp, just north of fairy ring AKS) — one rock per toad.",
        },
        {
          text: "Refill the bellows with swamp gas, then use them on an inflated toad while carrying a rock and ball of wool to make a balloon toad.",
        },
        {
          text: "Drop the balloon toad south of Rantz's cave (or east of the gnome glider) and wait for a Jubbly bird to appear.",
          notes: ["If nothing spawns, use another balloon toad; hopping worlds and returning also helps."],
        },
        { text: "Kill the Jubbly bird with your ogre bow and ogre arrows, then pluck it and take the meat." },
        {
          text: "Cook the jubbly meat on Rantz's ogre spit-roast beside his cave (re-try if it burns).",
          notes: ["Jubbly bought from the Grand Exchange will not work — it must be one you cooked yourself."],
        },
      ],
    },
    {
      title: "Deliver",
      steps: [
        {
          text: "Right-click use the cooked jubbly on Skrach Uglogwee in the Lumbridge Castle dining room — don't eat it by mistake.",
          travel:
            "Lumbridge Home Teleport to the castle courtyard, in the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,500 Woodcutting / Cooking / Crafting / Ranged experience each",
    "Access to ogre boat travel",
    "Skrach Uglogwee freed",
  ],
};
