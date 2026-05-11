import type { QuestWalkthrough } from "../types";

export const bigChompyBirdHunting: QuestWalkthrough = {
  startPoint: "Talk to Rantz in his cave far east of Feldip Hills (fairy ring AKS).",
  itemsRequired: [
    "Axe (any usable type)",
    "100 Feathers",
    "Knife",
    "Chisel",
    "4 Wolf bones",
    "Cabbage, Tomato, Onion, Potato",
    "Equa leaves",
    "Doogle leaves (pick from south of Yanille)",
  ],
  recommended: [
    "Combat 25+",
    "Ranged equipment (use the ogre bow Rantz gives you)",
    "Some food",
    "Fairy ring AKS for fast travel",
  ],
  enemies: [
    "Chompy bird (level 6) — needs an ogre bow + ogre arrows to actually damage",
    "Wolves (level 64) for wolf bones",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Rantz's cave in eastern Feldip Hills (fairy ring AKS)." },
        { text: "Talk to Rantz at his cave in eastern Feldip Hills and agree to help hunt big chompy birds." },
      ],
    },
    {
      title: "Make ogre arrows",
      steps: [
        { text: "Chop at least 3 achey trees just south-west of Rantz's cave." },
        { text: "Use a knife on the achey tree logs to make ogre arrow shafts." },
        { text: "Use 100 feathers on the shafts to fletch them." },
        { text: "Kill wolves nearby for 4 wolf bones." },
        { text: "Use a chisel on the wolf bones to make wolfbone arrowtips." },
        { text: "Use the arrowtips on the flighted ogre arrows to finish the ogre arrows." },
        { text: "Give the completed ogre arrows to Rantz." },
      ],
    },
    {
      title: "Get bloated toads",
      steps: [
        { text: "Ask Rantz all 5 possible questions about hunting chompies." },
        { text: "Enter the cave north of Rantz and talk to Fycie and Bugs." },
        { text: "Try to unlock the chest repeatedly until it opens." },
        { text: "Search the chest for ogre bellows." },
        { text: "Walk to the swamp south-west and click swamp bubbles to fill the bellows." },
        { text: "Use the bellows on swamp toads to inflate them. Carry up to 3." },
      ],
    },
    {
      title: "Hunt and kill a chompy",
      steps: [
        { text: "Talk to Rantz in his cave far east of Feldip Hills (fairy ring AKS) to set up the hunt." },
        { text: "Drop a bloated toad in the clearing where Rantz's arrow points." },
        { text: "Wait for the toad to burst and the chompy bird to appear." },
        { text: "Tell Rantz you'll take the kill yourself." },
        { text: "Kill the chompy with your ogre bow + ogre arrows." },
        { text: "Pluck the carcass for raw chompy meat." },
        { text: "Talk to Rantz in his cave far east of Feldip Hills (fairy ring AKS)." },
      ],
    },
    {
      title: "Cook the chompy",
      steps: [
        { text: "Return to the cave and ask Fycie and Bugs about seasoning." },
        { text: "Gather the four seasoning ingredients (cabbage, tomato, onion, potato) and equa + doogle leaves." },
        { text: "Use the raw chompy on the spit-roast outside the cave." },
        { text: "Talk to Rantz in his cave far east of Feldip Hills (fairy ring AKS) to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "262 Fletching experience",
    "1,470 Cooking experience",
    "735 Ranged experience",
    "Ogre bow",
    "Ability to fletch ogre arrows and cook chompy birds (and earn the bowman set with continued hunting)",
  ],
};
