import type { QuestWalkthrough } from "../types";

export const makingFriendsWithMyArm: QuestWalkthrough = {
  startPoint: "Talk to Burntmeat in the Troll Stronghold's kitchen.",
  itemsRequired: [
    "Saw",
    "Bolt of cloth",
    "5 Mahogany planks",
    "Cadava berries",
    "Pickaxe / hammer / rope / bucket of water (all obtainable in-quest)",
  ],
  recommended: [
    "Combat 65+",
    "Trollheim, Draynor and Rellekka teleports",
    "Fairy ring access",
    "Stamina potions",
  ],
  enemies: ["Don't Know What (level 163)", "Mother (level 198) — boss"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Burntmeat in the Troll Stronghold's kitchen and accept the quest." },
        { text: "Talk to My Arm at the Trollheim herb patch." },
        { text: "Travel to Larry via fairy ring DKS." },
        { text: "Board the boat to Weiss." },
      ],
    },
    {
      title: "Get to Mother",
      steps: [
        { text: "Mine the cave entrance (boost if needed)." },
        { text: "Navigate the obstacle course with ropes and rockslides." },
        { text: "Talk to Boulder near the Trollheim herb patch; sneak past angry trolls." },
        { text: "Cross the water by avoiding thrown rocks." },
        { text: "Mine the exit." },
        { text: "Talk to Mother inside the troll cave north of the Trollheim herb patch — pick the dialogue about goutweed, strength, and respect." },
      ],
    },
    {
      title: "The Wise Dead Man",
      steps: [
        { text: "Talk to the Wise Old Man in Draynor Village." },
        { text: "Build the coffin using hammer + saw + planks + cloth." },
        { text: "Talk to the Apothecary in Varrock." },
        { text: "Return to the Wise Old Man in Draynor Village and collect the coffin." },
      ],
    },
    {
      title: "Defeat Don't Know What and Mother",
      steps: [
        { text: "Return via boat; talk to the Odd Mushroom and Snowflake." },
        { text: "Defeat Don't Know What (level 163) using Protect from Missiles." },
        { text: "Fight Mother: use bucket of water on the Fire of Domination then attack her." },
      ],
    },
    {
      title: "A new leader",
      steps: [
        { text: "Collect goat dung from the north-east building." },
        { text: "Read the Weiss fire notes." },
        { text: "Complete the final dialogue." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "10,000 Construction experience",
    "40,000 Firemaking experience",
    "50,000 Mining experience",
    "50,000 Agility experience",
    "Access to Weiss salt mines + ability to craft icy basalt teleports",
    "Disease-free herb patch in Weiss",
    "Ability to build fire pits in your house",
  ],
};
