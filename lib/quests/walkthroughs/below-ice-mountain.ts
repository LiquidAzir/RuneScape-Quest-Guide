import type { QuestWalkthrough } from "../types";

export const belowIceMountain: QuestWalkthrough = {
  startPoint: "Talk to Willow on the path south of Ice Mountain, north of Falador.",
  itemsRequired: [
    "Cooked meat (in-quest)",
    "Bread",
    "Knife",
    "Beer (in-quest, ~3gp)",
  ],
  recommended: [
    "Combat 15+",
    "Some food + armour",
    "Pickaxe with Mining 10 to avoid combat",
    "Stamina/energy potions",
  ],
  enemies: ["Ancient Guardian (level 25) — can be bypassed by mining 4 pillars"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Willow south of Ice Mountain and accept the quest." },
      ],
    },
    {
      title: "Recruit Checkal",
      steps: [
        { text: "Talk to Checkal in Barbarian Village near the pottery oven." },
        { text: "Talk to Atlas in The Long Hall tavern; complete the training dialogue." },
        { text: "Take cooked meat and a beer from the tavern tables." },
        { text: "Return to Checkal and do the Flex emote when prompted." },
      ],
    },
    {
      title: "Recruit Marley",
      steps: [
        { text: "Talk to Marley at the yew trees in Edgeville first." },
        { text: "Visit the cook in the Blue Moon Inn east room in Varrock for the steak sandwich recipe." },
        { text: "Use a knife on cooked meat with bread in inventory to make a steak sandwich." },
        { text: "Return to Marley with the sandwich." },
      ],
    },
    {
      title: "Recruit Burntof",
      steps: [
        { text: "Visit Burntof in the Rising Sun Inn, Falador." },
        { text: "Get a beer from Emily or Kaylee if needed (3gp)." },
        { text: "Play rock-paper-scissors with Burntof (any pick works)." },
      ],
    },
    {
      title: "Enter the dungeon",
      steps: [
        { text: "Travel to the Ruins of Camdozaal entrance west of Ice Mountain." },
        { text: "Talk to Willow at the entrance." },
        { text: "After the cutscene, defeat the Ancient Guardian (or mine 4 pillars to bypass it)." },
        { text: "Talk to Ramarno in the ruins." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 coins",
    "Access to Ruins of Camdozaal (Barronite mining + new prayer altar)",
    "Flex emote",
    "Ability to cook steak sandwiches",
  ],
};
