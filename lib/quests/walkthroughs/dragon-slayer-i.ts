import type { QuestWalkthrough } from "../types";

export const dragonSlayerI: QuestWalkthrough = {
  startPoint:
    "Talk to the Guildmaster on the ground floor of the Champions' Guild — south-west of Varrock, just south of the road between Lumbridge and Varrock (you need 33 Quest Points to enter the guild).",
  itemsRequired: [
    "Anti-dragon shield (the Guildmaster gives you one when you start)",
    "~2,500 coins (to buy Klarense's ship at Port Sarim docks)",
    "Hammer",
    "3 Planks (for the ship hull repair)",
    "90 Steel nails",
    "Lobster pot",
    "Unfired bowl",
    "Wizard's mind bomb (or Magic potion) — boosts Magic to use Telekinetic Grab on the Karamja chamber",
    "Silk (for Oziach later — you can grab silk from a silk stall in Ardougne)",
  ],
  recommended: [
    "Combat 50+ recommended (Elvarg is level 83 and her dragonfire hits hard)",
    "Decent food (lobsters, swordfish, sharks)",
    "Best melee or ranged setup you have access to",
    "Antifire potion in addition to the shield (negates dragonfire damage almost entirely)",
    "Energy/stamina potions for travel between Port Sarim, Karamja, Falador, Edgeville",
  ],
  enemies: [
    "Elvarg (level 83 green dragon — main boss on Crandor)",
    "Melzar the Mad (level 43) — boss room of Melzar's Maze",
    "Lesser demon (level 82) — boss room of Melzar's Maze",
    "Various skeletons, ghosts, and zombies in Melzar's Maze",
    "Wormbrain (level 2 goblin) — Port Sarim jail",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Champions' Guild (south-west of Varrock, just south of the main Varrock-to-Lumbridge road; requires 33 QP to enter).",
        },
        {
          text: "Talk to the Guildmaster on the ground floor of the guild and agree to take on Elvarg.",
        },
        {
          text: "He explains the three trials: gather the 3-piece map to Crandor, get a ship, and prepare a defence against dragonfire.",
        },
        {
          text: "He gives you an anti-dragon shield and a Maze Key (for Melzar's Maze).",
        },
      ],
    },
    {
      title: "Talk to Oziach for armour permission",
      steps: [
        {
          text: "Travel to Edgeville (use the Amulet of glory or run from Varrock west). Oziach's hut is in the north-east corner of Edgeville (small wooden hut north of the bank).",
        },
        {
          text: "Talk to Oziach in his hut — he agrees to sell you a rune platebody after the quest. Bring him silk later.",
        },
      ],
    },
    {
      title: "First map piece — Melzar's Maze",
      steps: [
        {
          text: "Travel to Melzar's Maze, west of Rimmington (south-west of Falador, on the south coast — Falador teleport then walk south, or charter ship to Port Sarim and walk west).",
        },
        {
          text: "Use the Guildmaster's Maze Key on the front door of the maze (or pick up the spare key inside the front room).",
        },
        {
          text: "Floor 1: kill the zombie rat in the entrance room for a red key. Use it on the red door.",
        },
        {
          text: "Floor 2: kill the ghost on this floor for an orange key. Use it on the orange door.",
        },
        {
          text: "Floor 3: kill a skeleton for a yellow key. Use it on the yellow door.",
        },
        {
          text: "Floor 4: kill a zombie for a blue key. Use it on the blue door.",
        },
        {
          text: "Boss room (basement): kill Melzar the Mad (level 43) and the lesser demon (level 82). Pick up the magenta key — bring food and a strong weapon.",
        },
        {
          text: "Use the magenta key on the magenta door, then open the chest inside to take map piece 1 (Melzar's piece).",
        },
      ],
    },
    {
      title: "Second map piece — Karamja volcano dungeon",
      steps: [
        {
          text: "Travel to the Port Sarim docks (south-west of Falador) and pay 30gp to the Customs Officer for boat passage to Musa Point on Karamja.",
        },
        {
          text: "On Karamja, walk north from Musa Point to the volcano and enter the volcano dungeon via the rope down the volcano cone (or via the entrance just north of Musa Point).",
        },
        {
          text: "Bring an unfired bowl, a wizard's mind bomb (or Magic potion), and a lobster pot.",
        },
        {
          text: "Navigate the dungeon south to the magic door (small door blocking a side chamber). Drink the wizard's mind bomb (boosts Magic +2/3) to use the door, or use Telekinetic Grab if your Magic is already 33+.",
        },
        {
          text: "Inside the chamber, use a lobster pot then an unfired bowl on the locked chest in the corner, then open it.",
        },
        {
          text: "Take the second map piece (Thalzar's piece).",
        },
      ],
    },
    {
      title: "Third map piece — Wormbrain in Port Sarim jail",
      steps: [
        {
          text: "Travel to Port Sarim jail (the building with the iron-barred windows just east of Port Sarim docks, on the road to Falador).",
        },
        {
          text: "Wormbrain (level 2 goblin) is locked in one of the cells. He has the third map piece.",
        },
        {
          text: "Kill Wormbrain through the bars using ranged or magic — melee won't work through the bars.",
        },
        {
          text: "Pick up the third map piece (Lozar's piece) from his body. If someone else's Wormbrain dies and you miss the loot, the goblin respawns.",
        },
      ],
    },
    {
      title: "Combine the map and prepare the ship",
      steps: [
        {
          text: "Use the three map pieces on each other to assemble the full Crandor map.",
        },
        {
          text: "Travel to Port Sarim docks and find Klarense on the southernmost dock with his ship the Lady Lumbridge. Buy the ship (~2,000 coins) or talk through dialogue to lend it.",
        },
        {
          text: "Board the Lady Lumbridge and climb down into the hold below deck. Inside, the hull has 3 holes — use 3 planks (one each), then use a hammer + 90 steel nails on the patched holes to seal them.",
        },
        {
          text: "Return up to deck and travel to Draynor Village. Talk to Ned in his small house in north-east Draynor — he agrees to be your sailor.",
        },
      ],
    },
    {
      title: "Sail to Crandor and slay Elvarg",
      steps: [
        {
          text: "Return to Port Sarim docks; board the Lady Lumbridge with Ned and sail to Crandor.",
        },
        {
          text: "On Crandor, climb down the rope into the dungeon under the island.",
        },
        {
          text: "Equip the anti-dragon shield (essential) and drink an antifire potion if you have one. Without both, Elvarg's dragonfire hits up to 50+.",
        },
        {
          text: "Walk through the dungeon to Elvarg's lair and engage Elvarg (level 83). Use Protect from Melee if available; eat aggressively.",
        },
        {
          text: "After Elvarg dies, climb out of Crandor's dungeon via the rope back to the surface.",
        },
        {
          text: "Use the magic teleport orb in the dungeon (the glowing orb near where Elvarg died) to teleport back to the Crandor entrance / mainland.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to the Guildmaster on the ground floor of the Champions' Guild south-west of Varrock.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "18,650 Strength experience",
    "18,650 Defence experience",
    "Ability to wield Rune platebody (and other rune body armour) — buy from Oziach in Edgeville",
    "Access to Crandor (with its lesser demons + green dragons) and the underwater shortcut from Karamja volcano dungeon to Crandor",
  ],
};
