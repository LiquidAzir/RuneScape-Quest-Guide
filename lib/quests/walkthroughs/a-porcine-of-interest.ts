import type { QuestWalkthrough } from "../types";

export const aPorcineOfInterest: QuestWalkthrough = {
  startPoint:
    "Read the noticeboard behind the wine shop in Draynor Village market. Amulet of glory → Draynor Village drops you at the bank; the market is the fenced square immediately south, and the board is on the back wall of the wine stall. No glory: Lumbridge Home Teleport and run west along the south bank of the River Lum.",
  itemsRequired: ["Rope", "Knife or any slash weapon (no whip/tentacle/halberd/claws)"],
  recommended: [
    "Combat 20+",
    "Stamina/energy potions",
    "Some food + combat gear",
    "Amulet of glory",
    "31+ Agility for shortcut",
  ],
  enemies: ["Sourhog (level 37) — resistant to slash and magic"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Check the noticeboard behind the wine shop in Draynor Village market.",
          travel:
            "Amulet of glory → Draynor Village, then walk south from the bank into the market square. Without a glory, Lumbridge Home Teleport and run west along the south river road past the Wise Old Man's house.",
        },
        {
          text: "Talk to Sarah in the farmhouse at South Falador Farm about the bounty.",
          travel:
            "Falador Teleport, then leave by the south gate and follow the road south-east to the farm with the sheep pens and the windmill road junction. Sarah runs the farming shop inside the farmhouse. From Draynor you can instead run north-west up the road past the crossroads.",
        },
        {
          text: "Travel to the crossroads on the road north of Draynor Village.",
          travel:
            "From South Falador Farm run south-west down the road; the crossroads is where the Falador, Draynor and Port Sarim roads meet, just north of Draynor. Amulet of glory → Draynor and running north gets you there too.",
        },
      ],
    },
    {
      title: "Cave exploration",
      steps: [
        {
          text: "Follow the trail of dropped vegetables north-east from the crossroads toward a strange hole.",
          travel:
            "From the crossroads head north-east across the open grass toward Draynor Manor's south-west fence — the hole is in the rough ground between the crossroads and the manor wall.",
        },
        { text: "Use a rope on the hole and climb down into Sourhog Cave." },
        { text: "Follow the cave passage west to a skeleton and investigate it." },
        { text: "Talk to Spria beside the skeleton inside Sourhog Cave — she gives you reinforced goggles." },
      ],
    },
    {
      title: "Defeat the Sourhog",
      steps: [
        { text: "Equip the goggles and return through the cave to the Sourhog's chamber." },
        { text: "Defeat the Sourhog (level 37) with stab or crush attacks." },
        { text: "Remove a foot from the dead Sourhog." },
        {
          text: "Return to Sarah in the farmhouse at South Falador Farm for the reward.",
          travel:
            "Climb out of the cave, run west to the crossroads and north-west up the road to the farm. Falador Teleport and running south-east out of the south gate is faster if you have the runes.",
        },
        {
          text: "Return to Spria beside the skeleton inside Sourhog Cave to finish.",
          travel:
            "Run back south-east to the crossroads, then north-east to the hole and climb down (you keep needing a rope only the first time).",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 coins",
    "1,000 Slayer experience",
    "30 Slayer reward points",
    "Access to Sourhog Cave + Sourhog as a slayer task",
    "Reinforced goggles (used for the slayer helmet)",
  ],
};
