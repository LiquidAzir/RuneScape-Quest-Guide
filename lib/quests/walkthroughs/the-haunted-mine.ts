import type { QuestWalkthrough } from "../types";

export const theHauntedMine: QuestWalkthrough = {
  startPoint:
    "Talk to the Zealot outside the Abandoned Mine beneath Mort Ridge, in southern Morytania between Mort'ton and Burgh de Rott on the east bank of the River Salve. Fairy ring BIP (on the Salve, south-west of Mort Myre), cross the river shortcut (50 Agility) and run south; or Drakan's medallion to Burgh de Rott and follow the road out of town, using the fence shortcut (25 Agility).",
  itemsRequired: ["Chisel (one drops in the dungeon if you don't have one)"],
  recommended: [
    "Combat 50+",
    "15+ Agility for the cave shortcut crawls",
    "40+ Prayer for Protect from Missiles vs. Treus Dayth",
    "2+ free inventory slots (for fungi + key + chisel)",
    "Magic spells or a special-attack weapon (Dragon dagger spec) for the boss",
    "Prayer potions, stamina potions, sharks/anglers",
  ],
  enemies: ["Treus Dayth (level 95) — boss in the central chamber, summons skeletons; harder than his level suggests"],
  sections: [
    {
      title: "Get into the mines",
      steps: [
        {
          text: "Travel to the Zealot standing at the Abandoned Mine entrance in southern Morytania.",
          travel:
            "Fairy ring BIP puts you on the Salve south-west of Mort Myre — cross via the river shortcut (50 Agility) and run south to the mine. Otherwise Drakan's medallion to Burgh de Rott and follow the road out of town, hopping the fence shortcut (25 Agility). Without either, Salve Graveyard teleport (Arceuus) and run south down the east bank of the Salve.",
        },
        {
          text: "Pickpocket the Zealot to steal the Zealot's key.",
        },
        {
          text: "Climb over the broken mine cart at the south entrance to enter the mine.",
        },
        {
          text: "Crawl down the small cart tunnel just inside.",
        },
      ],
    },
    {
      title: "Navigate the cave levels",
      steps: [
        {
          text: "On level 1, run west and crawl through the cart tunnel at the western end.",
        },
        {
          text: "After crawling out, re-enter the mine via the southern surface entrance and descend the ladder inside the building to reach level 2.",
        },
        {
          text: "On level 2, walk east and descend the eastern ladder to level 3.",
        },
        {
          text: "On level 3, dodge the moving mine carts in the corridor — duck into the alcove cover when a cart passes — moving south to the next ladder.",
        },
      ],
    },
    {
      title: "Mine cart puzzle (level 4)",
      steps: [
        {
          text: "On level 4, pick a glowing fungus from the cave wall and keep it equipped/in inventory (it lights your path in dark sections).",
        },
        {
          text: "Place a fungus in the searchable empty cart in the north-west of the chamber.",
        },
        {
          text: "Check the point-settings board on the wall to learn the lever configuration. The configuration is randomised per player — write down YOUR board's pattern.",
        },
        {
          text: "Pull levers A through E in the south-east of the chamber, then F through K in the north-west, to match the configuration shown on the board.",
        },
        {
          text: "Return to the point-settings board and click 'start' to send the cart on its rails.",
        },
      ],
    },
    {
      title: "Retrieve the cart and open the water valve",
      steps: [
        {
          text: "Navigate back through the upper cave levels to the cart tunnel entrance you crawled through earlier.",
        },
        {
          text: "Climb down the ladders again to find the cart sitting in its destination chamber. Take your fungus back from the cart.",
        },
        {
          text: "Climb back up to level 3, walk east then south past the moving cart corridor.",
        },
        {
          text: "Find the water valve on the east wall of level 3. Use the Zealot's key on the valve to drain a flooded passage.",
        },
        {
          text: "Run to the lift in the central chamber of level 3 and ride it down to the boss area.",
        },
      ],
    },
    {
      title: "Defeat Treus Dayth",
      steps: [
        {
          text: "Walk through the door at the bottom of the lift; pick up the innocent-looking key just inside.",
        },
        {
          text: "Defeat Treus Dayth (level 95). Activate Protect from Missiles, then deal damage with ranged or magic. He summons skeletons during the fight — kill them or run them off.",
        },
        {
          text: "Pick up the key after victory (it drops by his body).",
        },
        {
          text: "Return east through the chamber, then go down the western stairs into the lower mine (use a fungus to light the way).",
        },
        {
          text: "Walk to the crystal outcrop in the lower mine and use a chisel on it to chip out a salve crystal — finishing the quest.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "22,000 Strength experience",
    "Ability to craft the Salve amulet (huge bonus vs. undead — Slayer XP boost in Morytania)",
    "Access to Tarn's Lair (Slayer dungeon south of Canifis)",
  ],
};
