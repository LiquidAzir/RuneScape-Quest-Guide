import type { QuestWalkthrough } from "../types";

export const makingFriendsWithMyArm: QuestWalkthrough = {
  startPoint:
    "Talk to Burntmeat in the Troll Stronghold kitchen. Trollheim Teleport (unlocked by Eadgar's Ruse) drops you on Trollheim — run north-west across the plateau to the stronghold door and head through to the kitchen.",
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
        {
          text: "Talk to Burntmeat in the Troll Stronghold kitchen and accept the quest.",
          travel:
            "Trollheim Teleport, then run north-west across Trollheim to the Troll Stronghold entrance and follow the corridors to the kitchen (the room with the cooking range). No Trollheim Teleport: games necklace to Burthorpe, run east up the Death Plateau path and climb Trollheim from there.",
        },
        {
          text: "Talk to My Arm at the Trollheim herb patch.",
          travel:
            "Leave the stronghold and run a few steps west — the herb patch sits on the slope just outside the stronghold entrance, right where the Trollheim Teleport lands you.",
        },
        {
          text: "Travel to Larry by the Lighthouse and talk to him.",
          travel:
            "Fairy ring DKS lands beside the Lighthouse in the far north-east of the Fremennik Province. Without a fairy ring: enchanted lyre to Rellekka, then run east and north-east along the coast past the Fremennik slayer cave to the Lighthouse.",
        },
        { text: "Board the boat by the Lighthouse to sail north to Weiss." },
      ],
    },
    {
      title: "Get to Mother",
      steps: [
        { text: "Mine the blocked cave entrance at Weiss (boost your Mining if needed)." },
        { text: "Navigate the obstacle course inside using ropes and rockslides." },
        { text: "Talk to Boulder along the way, then sneak past the angry trolls." },
        { text: "Cross the water while avoiding the thrown rocks." },
        { text: "Mine the exit at the far end." },
        { text: "Talk to Mother deep in the cave — pick the dialogue about goutweed, strength, and respect." },
      ],
    },
    {
      title: "The Wise Dead Man",
      steps: [
        {
          text: "Talk to the Wise Old Man in his house in Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village. His house is directly south of the Draynor bank, on the corner facing the market square.",
        },
        { text: "Build the coffin using hammer + saw + 5 mahogany planks + bolt of cloth." },
        {
          text: "Talk to the Apothecary in his house in south-west Varrock.",
          travel:
            "Varrock Teleport, then run south-west past the sword shop — the Apothecary's small house is on the west side of the road leading to Varrock's south gate.",
        },
        { text: "Return to the Wise Old Man in Draynor Village and collect the coffin." },
      ],
    },
    {
      title: "Defeat Don't Know What and Mother",
      steps: [
        {
          text: "Sail back to Weiss from the Lighthouse and talk to the Odd Mushroom and Snowflake.",
          travel:
            "Fairy ring DKS to the Lighthouse, then take the boat north to Weiss again.",
        },
        { text: "Defeat Don't Know What (level 163) using Protect from Missiles." },
        { text: "Fight Mother: use a bucket of water on the Fire of Domination, then attack her." },
      ],
    },
    {
      title: "A new leader",
      steps: [
        { text: "Collect goat dung from the building in the north-east of Weiss." },
        { text: "Read the Weiss fire notes." },
        { text: "Complete the final dialogue with My Arm." },
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
