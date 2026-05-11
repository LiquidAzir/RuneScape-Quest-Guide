import type { QuestWalkthrough } from "../types";

export const theHeartOfDarkness: QuestWalkthrough = {
  startPoint:
    "Talk to Prince Itzla Arkan at the Teomat — the temple ruins north of Civitas illa Fortis (Varlamore). Walk north out of Civitas illa Fortis, follow the dirt road past the city walls, then continue north-east; the Teomat sits on the stepped pyramid in the savanna.",
  itemsRequired: [
    "30 coins (room rental at the Quetzacalli Gorge bartender)",
    "Up to 4 free inventory slots",
  ],
  recommended: [
    "Combat 65+",
    "43+ Prayer for Protect from Melee (boss + cult fights)",
    "Combat gear + sharks/anglers",
    "Prayer or super restore potions",
    "Super combat potions",
  ],
  enemies: [
    "Emissary Brawlers (level 74/86) — wave combat trial",
    "Emissary Conjurers (level 71) — wave combat trial",
    "Prince Itzla Arkan (level 167) — quest fight after the trials",
    "Amoxliatl (level 263) — final boss in the ice dungeon under the Twilight Temple",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Teomat north of Civitas illa Fortis. Talk to Prince Itzla Arkan at the top of the pyramid.",
        },
        {
          text: "Travel to Quetzacalli Gorge (south-west of Civitas illa Fortis — use Quetzal whistle → Quetzacalli, or run south-west from Civitas).",
        },
        {
          text: "At the Quetzacalli Gorge tavern (the small inn beside the gorge bridge), pay the bartender 30gp to rent a room.",
        },
        {
          text: "Rest on the bed in the rented room upstairs to trigger the dream cutscene.",
        },
        {
          text: "Talk to the Prince outside the tavern, then talk to the shopkeeper inside.",
        },
        {
          text: "Travel to the Tower of Ascension (the cult tower north-east of Quetzacalli, on the cliffside). Talk to the cultist recruits standing outside.",
        },
        {
          text: "Enter the tower with Forebearer Janus (he leads you in after dialogue).",
        },
      ],
    },
    {
      title: "First trial — passcode chest",
      steps: [
        {
          text: "Inside the tower, pickpocket an Emissary Ascended (the wandering robed cultists) for the tower key.",
        },
        {
          text: "Open the marked chests on the trial floor using the keywords from the provided book (the book lists each chest's clue).",
        },
        {
          text: "Read the poem on the wall and solve the code puzzles in the chests to assemble the passcode.",
        },
        {
          text: "Speak the passcode to Forebearer Janus at the trial door to unlock the next floor.",
        },
      ],
    },
    {
      title: "Second trial — wave combat",
      steps: [
        {
          text: "Complete the wave-based combat trial in the next chamber: Emissary Brawlers (melee) and Emissary Conjurers (magic) attack in waves.",
        },
        {
          text: "Use bandages from the supply table to heal Prince Itzla when his HP drops.",
        },
        {
          text: "Talk to Forebearer Janus back at the Quetzacalli Gorge tavern after winning the waves.",
        },
      ],
    },
    {
      title: "Third trial — find the traitor",
      steps: [
        {
          text: "Question all the cult members in the Quetzacalli Gorge area to identify the traitor.",
        },
        {
          text: "Accuse the cultist who mentions the name 'Mictl' in their dialogue — that's the traitor.",
        },
      ],
    },
    {
      title: "Final trial — fight Itzla",
      steps: [
        {
          text: "Fight Prince Itzla Arkan (level 167) in the cultist arena — pray Protect from Melee, dodge his thrust attacks.",
        },
        {
          text: "After the fight, search the chest at the back of the arena for Twilight Emissary robes.",
        },
        {
          text: "Equip the Twilight Emissary robes and follow Prince Itzla into the Twilight Temple south of Civitas illa Fortis.",
        },
      ],
    },
    {
      title: "Ice dungeon + statue puzzle",
      steps: [
        {
          text: "Inside the temple, descend into the ice dungeon below.",
        },
        {
          text: "Take a pickaxe from the supply barrel near the entrance and mine ice rocks blocking the corridor.",
        },
        {
          text: "Pull all 4 levers spread around the dungeon (one in each corner) to deactivate the gate seals.",
        },
        {
          text: "Navigate past the Frost Naguas and frost crabs (avoid them — combat is slow on the ice).",
        },
        {
          text: "Jump the gaps between frozen platforms to reach the puzzle chamber.",
        },
        {
          text: "Search the urns lining the puzzle room walls for 3 coloured icons.",
        },
        {
          text: "Place the matching icons on the broken statues to repair them.",
        },
        {
          text: "Inspect the wall murals to determine the activation order for the statues.",
        },
        {
          text: "Touch the statues in the correct sequence to open the boss door.",
        },
      ],
    },
    {
      title: "Defeat Amoxliatl",
      steps: [
        {
          text: "Fight Amoxliatl (level 263) in the boss chamber. She uses magic — pray Protect from Magic.",
        },
        {
          text: "Avoid the spike traps and ice pools that appear on the floor during combat.",
        },
        {
          text: "She summons ice blocks that block your line of sight — destroy them with melee or use fire spells to clear them.",
        },
        {
          text: "After defeating her, travel back to the Sunrise Palace in central Civitas illa Fortis to complete the quest.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Mining experience",
    "8,000 Thieving experience",
    "8,000 Slayer experience",
    "8,000 Agility experience",
    "Access to Tapoyauik dungeon under the Twilight Temple (essence + frost monsters)",
  ],
};
