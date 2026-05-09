import type { QuestWalkthrough } from "../types";

export const rfdSkrachUglogwee: QuestWalkthrough = {
  startPoint: "Inspect Skrach Uglogwee in the Lumbridge Castle dining room.",
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
        { text: "Talk to Skrach Uglogwee on Karamja about freeing him." },
        { text: "Talk to Rantz at the Feldip Hills coast." },
        { text: "Chop the fallen tree twice with your axe." },
        { text: "Hunt a chompy in Feldip Hills the same way as Big Chompy Bird Hunting." },
        { text: "Take a raw chompy to Karamja." },
        { text: "Light a fire next to the felled tree." },
        { text: "Use the iron spit on the raw chompy and cook it on the fire." },
      ],
    },
    {
      title: "Hunt a Jubbly bird",
      steps: [
        { text: "Board the ogre boat with Rantz to reach the Jubbly area." },
        { text: "Collect bloated toads from nearby swamp using your bellows." },
        { text: "Mine rocks from the pile east of Rantz's cave." },
        { text: "Use ogre bellows on a toad to make a balloon toad to lure a Jubbly." },
        { text: "Kill the Jubbly bird with ogre arrows." },
        { text: "Cook it on Rantz's spit-roast (re-try if it burns)." },
      ],
    },
    {
      title: "Deliver",
      steps: [
        { text: "Give the cooked Jubbly to Skrach Uglogwee." },
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
