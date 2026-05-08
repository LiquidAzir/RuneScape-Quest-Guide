import type { QuestWalkthrough } from "../types";

export const dragonSlayerI: QuestWalkthrough = {
  startPoint: "Enter the Champions' Guild (south-west of Varrock) and talk to the Guildmaster.",
  itemsRequired: [
    "Anti-dragon shield (the Guildmaster gives you one)",
    "Around 2,500 coins for the boat to Crandor (you can also work it off)",
    "Hammer",
    "3 Planks (for ship repair)",
    "90 Steel nails",
    "Lobster pot",
    "Unfired bowl",
    "Wizard's mind bomb (or Magic potion) — for the wizard at the magic door",
    "Silk (for Oziach)",
  ],
  recommended: [
    "Combat level 50+ recommended (Elvarg is level 83 and hits hard)",
    "Decent food (lobsters, swordfish, sharks)",
    "Best melee or ranged setup you have access to",
    "Antifire potion in addition to the shield is a major safety upgrade",
    "Energy/stamina potions for travel",
  ],
  enemies: [
    "Elvarg (level 83 green dragon — main boss)",
    "Various skeletons, zombies, and lesser demons in Melzar's Maze",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the Champions' Guild south-west of Varrock (you need 33 Quest Points to enter)." },
        { text: "Talk to the Guildmaster on the ground floor." },
        { text: "Agree to take on Elvarg the dragon." },
        { text: "He explains the three trials: a map to Crandor, a ship, and a defence against dragonfire." },
        { text: "He gives you an anti-dragon shield." },
      ],
    },
    {
      title: "Talk to Oziach for armour permission",
      steps: [
        {
          text: "Travel to Edgeville and find Oziach's hut in the north-east of town.",
          notes: ["He is the only person who'll sell you a rune platebody after this quest."],
        },
        { text: "Talk to Oziach about the quest." },
      ],
    },
    {
      title: "Get the Crandor map (Melzar's Maze)",
      steps: [
        {
          text: "Travel to Melzar's Maze, west of Rimmington (south-west of Falador).",
        },
        { text: "Use the maze key from the Guildmaster on the door, or pick up the key inside the front room." },
        {
          text: "Floor 1 — kill the zombie rat for a red key, use it on the red door.",
        },
        {
          text: "Floor 2 — kill the ghost for an orange key, use it on the orange door.",
        },
        {
          text: "Floor 3 — kill the skeleton for a yellow key, use it on the yellow door.",
        },
        {
          text: "Floor 4 — kill the zombie for a blue key, use it on the blue door.",
        },
        {
          text: "Boss room — kill Melzar the Mad (level 43) and the lesser demon (level 82). Pick up the magenta key.",
          notes: ["A lesser demon spawn at the bottom can be tough — bring food and a strong weapon."],
        },
        { text: "Use the magenta key on the magenta door, then open the chest to get part 1 of the Crandor map." },
      ],
    },
    {
      title: "Get the second map piece (Thalzar's piece) — Karamja dungeon",
      steps: [
        {
          text: "Travel to Karamja and enter the dungeon under the volcano.",
          notes: ["Take the boat from Port Sarim (30gp) then enter the volcano dungeon north of Musa Point."],
        },
        { text: "Bring an unfired bowl, a wizard's mind bomb (or magic potion), and a lobster pot." },
        {
          text: "Find the magic door deep in the dungeon. Use the wizard's mind bomb on it (or drink it for the magic boost)." ,
        },
        { text: "Inside the chamber, use the lobster pot and unfired bowl on the locked chest, then open it." },
        { text: "Take the second map piece." },
      ],
    },
    {
      title: "Get the third map piece (Lozar's piece) — goblins of Wilderness",
      steps: [
        {
          text: "The third map piece is held by Wormbrain, a goblin in the jail at the back of the Port Sarim jail (south of Falador).",
          notes: ["You can ranged or magic him through the bars, OR pickpocket him with high enough Thieving."],
        },
        {
          text: "Kill Wormbrain to get the final map piece.",
          notes: ["Use ranged or magic — you cannot melee him through the bars."],
        },
      ],
    },
    {
      title: "Combine the map and prepare the ship",
      steps: [
        { text: "Use the three map pieces together to assemble the Crandor map." },
        { text: "Travel to Port Sarim docks and talk to Klarense; buy his ship (around 2,000 coins) or convince him to lend it." },
        { text: "Board the ship and go below deck. The ship has a hole — use 3 planks on it, then a hammer with the 90 steel nails to repair." },
        { text: "Return upstairs and talk to Ned (in Draynor Village) — agree to be your sailor." },
      ],
    },
    {
      title: "Sail to Crandor and slay Elvarg",
      steps: [
        { text: "Board the Lady Lumbridge with Ned and sail to Crandor." },
        { text: "Once on Crandor, climb down into the dungeon under the island." },
        {
          text: "Equip the anti-dragon shield. Drink an antifire potion if you have one.",
          notes: ["Without the shield + potion, Elvarg's dragonfire can hit 50+. With both, dragonfire is nullified."],
        },
        {
          text: "Engage Elvarg (level 83) and defeat her.",
          notes: ["Use prayer if possible (Protect from Melee blocks her melee). Eat aggressively."],
        },
        { text: "After Elvarg dies, climb out of Crandor via the rope back to the surface." },
        { text: "Use the magic teleport orb in the dungeon to escape back to the mainland." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Guildmaster in the Champions' Guild." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "18,650 Strength experience",
    "18,650 Defence experience",
    "Ability to wield Rune platebody and other rune body armour",
    "Access to Crandor and the Karamja dungeon shortcut",
  ],
};
