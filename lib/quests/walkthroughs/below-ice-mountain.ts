import type { QuestWalkthrough } from "../types";

export const belowIceMountain: QuestWalkthrough = {
  startPoint:
    "Talk to Willow on the path at the southern foot of Ice Mountain, north of Falador. Falador Teleport, leave by the north gate and run north-east along the road towards the mountain — Willow is standing beside the track before the climb.",
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
        {
          text: "Talk to Willow on the path south of Ice Mountain and accept the quest.",
          travel:
            "Falador Teleport, then out the north gate and north-east up the road toward Ice Mountain. From Edgeville you can instead run west past the Monastery.",
        },
      ],
    },
    {
      title: "Recruit Checkal",
      steps: [
        {
          text: "Talk to Checkal in Barbarian Village, by the pottery oven south of the Long Hall.",
          travel:
            "From Ice Mountain run east down the slope and across the bridge into Barbarian Village. Faster from scratch: Varrock Teleport then west out of the west gate, or amulet of glory → Edgeville and run south-west.",
        },
        { text: "Talk to Atlas in the Long Hall tavern in northern Barbarian Village and complete the training dialogue." },
        { text: "Take cooked meat and a beer from the Long Hall tables." },
        { text: "Return to Checkal by the pottery oven and do the Flex emote when prompted." },
      ],
    },
    {
      title: "Recruit Marley",
      steps: [
        {
          text: "Talk to Marley by the yew trees on the riverbank in Edgeville first.",
          travel:
            "Amulet of glory → Edgeville lands you at the bank; the yews are just south of it by the river. From Barbarian Village, run north-east across the bridge and along the river.",
        },
        {
          text: "Visit the cook in the east room of the Blue Moon Inn in Varrock for the steak sandwich recipe.",
          travel:
            "Varrock Teleport to the central square, then run south — the Blue Moon Inn is the large pub on the south side of the main road, and the cook is in its eastern room.",
        },
        { text: "Use a knife on cooked meat with bread in your inventory to make a steak sandwich." },
        {
          text: "Return to Marley at the yew trees in Edgeville with the sandwich.",
          travel: "Amulet of glory → Edgeville, then a few steps south to the river.",
        },
      ],
    },
    {
      title: "Recruit Burntof",
      steps: [
        {
          text: "Talk to Burntof in the Rising Sun Inn in Falador.",
          travel:
            "Falador Teleport drops you by the central fountain; the Rising Sun is the pub a few steps west, next to the west bank.",
        },
        { text: "Get a beer from Emily or Kaylee behind the bar if you need one (3gp)." },
        { text: "Play rock-paper-scissors with Burntof (any pick works)." },
      ],
    },
    {
      title: "Enter the dungeon",
      steps: [
        {
          text: "Travel to the Ruins of Camdozaal entrance on the western slope of Ice Mountain.",
          travel:
            "Falador Teleport, out the north gate and north-east up the road, then climb the mountain's west side — the cave mouth is on the western slope, below the Oracle's ledge.",
        },
        { text: "Talk to Willow at the cave entrance." },
        { text: "After the cutscene, defeat the Ancient Guardian (or mine the 4 pillars to bypass it)." },
        { text: "Talk to Ramarno inside the ruins." },
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
