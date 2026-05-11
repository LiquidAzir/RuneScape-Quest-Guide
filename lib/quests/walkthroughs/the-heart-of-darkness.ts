import type { QuestWalkthrough } from "../types";

export const theHeartOfDarkness: QuestWalkthrough = {
  startPoint: "Talk to Prince Itzla Arkan at the Teomat (Varlamore).",
  itemsRequired: [
    "30 coins",
    "Up to 4 free inventory slots",
  ],
  recommended: [
    "Combat 65+",
    "43+ Prayer (Protect from Melee)",
    "Combat gear + sharks/anglers",
    "Prayer or super restore potions",
    "Super combat potions",
  ],
  enemies: [
    "Emissary Brawlers (level 74/86)",
    "Emissary Conjurers (level 71)",
    "Prince Itzla Arkan (level 167)",
    "Amoxliatl (level 263) — final boss",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Prince Itzla Arkan at the Teomat." },
        { text: "Travel to Quetzacalli Gorge." },
        { text: "Rent a room from the bartender for 30gp." },
        { text: "Rest on the bed in the rented room." },
        { text: "Talk to the Prince and shopkeeper." },
        { text: "Travel to the Tower of Ascension and talk to cultist recruits." },
        { text: "Enter the tower with Forebearer Janus." },
      ],
    },
    {
      title: "First trial — passcode chest",
      steps: [
        { text: "Pickpocket Emissary Ascended for the tower key." },
        { text: "Open chests using keywords from the provided book." },
        { text: "Read the poem and solve the code puzzles." },
        { text: "Speak the passcode to Forebearer Janus." },
      ],
    },
    {
      title: "Second trial — wave combat",
      steps: [
        { text: "Complete the wave-based combat trial vs. melee + mage enemies." },
        { text: "Use bandages to heal Prince Itzla during the fight." },
        { text: "Talk to Forebearer Janus at Quetzacalli Gorge." },
      ],
    },
    {
      title: "Third trial — find the traitor",
      steps: [
        { text: "Question cult members to identify the traitor." },
        { text: "Accuse the member who mentions Mictl." },
      ],
    },
    {
      title: "Final trial — fight Itzla",
      steps: [
        { text: "Fight Prince Itzla with prayer and dodge mechanics." },
        { text: "Search the chest for Twilight Emissary robes." },
        { text: "Equip the robes and enter the temple with the Prince." },
      ],
    },
    {
      title: "Ice dungeon + statue puzzle",
      steps: [
        { text: "Mine rocks with a pickaxe from a barrel." },
        { text: "Pull 4 levers throughout the dungeon." },
        { text: "Navigate past Frost Naguas + frost crabs." },
        { text: "Jump over frozen platforms." },
        { text: "Search urns for 3 coloured icons." },
        { text: "Fix broken statues with corresponding icons." },
        { text: "Inspect murals to determine statue activation order." },
        { text: "Touch statues in correct sequence." },
      ],
    },
    {
      title: "Defeat Amoxliatl",
      steps: [
        { text: "Fight Amoxliatl (level 263) using magic prayer." },
        { text: "Avoid spikes and ice pools." },
        { text: "Destroy summoned blocks or use fire spells." },
        { text: "Travel to Sunrise Palace to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Mining + Thieving + Slayer + Agility experience each",
    "Access to Tapoyauik dungeon (essence + frost monsters)",
  ],
};
