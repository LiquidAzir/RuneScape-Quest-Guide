import type { QuestWalkthrough } from "../types";

export const undergroundPass: QuestWalkthrough = {
  startPoint: "Talk to King Lathas on the first floor of Ardougne Castle.",
  itemsRequired: [
    "2 Ropes",
    "Bow",
    "1-5 metal-tipped arrows (not poisoned)",
    "Spade",
    "Bucket (in-quest)",
    "Tinderbox (in-quest)",
  ],
  recommended: [
    "Combat 60+",
    "50+ Agility",
    "50+ Thieving for shortcut",
    "43 Prayer for Protect from Melee",
    "Lots of food (sharks) or summer pies (Agility boost)",
    "West Ardougne teleport",
    "Agility potions",
  ],
  enemies: [
    "Doomion / Othainian / Holthion (level 91 demons)",
    "3 Paladins (level 62)",
    "Kalrag (level 89 spider)",
    "Iban (final boss)",
  ],
  sections: [
    {
      title: "Cross the chasm",
      steps: [
        { text: "Talk to King Lathas (option 1)." },
        { text: "Meet Koftik in West Ardougne near the cave entrance." },
        { text: "Light an arrow with the tinderbox; shoot the guide rope to cross the bridge." },
        { text: "Navigate the rope swing over the pit." },
        { text: "Cross the grid using trial and error (keep HP above 15)." },
        { text: "Pull the lever next to the gate." },
      ],
    },
    {
      title: "Orbs of light + slave area",
      steps: [
        { text: "Collect 4 Orbs of Light from the different paths." },
        { text: "Use the orbs on the furnace." },
        { text: "Climb down the well at the altar." },
        { text: "Pick the lock on the slave cage; use a spade on the mud." },
        { text: "Cross the ledge — use the Thieving shortcut or the stone bridge maze." },
        { text: "Squeeze through the pipe." },
      ],
    },
    {
      title: "Make the dwarf brew + kill paladins",
      steps: [
        { text: "Search the unicorn cage; use the railing on the boulder." },
        { text: "Collect a unicorn horn from the cage." },
        { text: "Kill the 3 paladins, collect their badges (safespot available)." },
        { text: "Use a plank on the flat rocks." },
        { text: "Use the badges and unicorn horn on the well." },
        { text: "Open the door." },
      ],
    },
    {
      title: "Iban's cavern",
      steps: [
        { text: "Descend the cave south of the main path." },
        { text: "Talk to Niloof and Klank (get the gauntlets)." },
        { text: "Find the witch's house, use a cat on the door." },
        { text: "Open the chest inside the house." },
        { text: "Kill 3 demons west of the witch; take their amulets." },
        { text: "Use a bucket on the brew barrel." },
        { text: "Use the dwarf brew + tinderbox on the tomb." },
      ],
    },
    {
      title: "Kalrag and the soulless",
      steps: [
        { text: "Kill Kalrag in the spider pit." },
        { text: "Ascend the cave to the half-soulless area." },
        { text: "Wear Klank's gauntlets and search the cage for Iban's dove." },
      ],
    },
    {
      title: "Defeat Iban",
      steps: [
        { text: "Find a Disciple of Iban; kill and take the robes." },
        { text: "Equip the robes to enter the temple." },
        { text: "Right-click 'use' Doll of Iban on the well multiple times until he's destroyed." },
        { text: "Avoid the spike damage as you spam the well." },
        { text: "Talk to Koftik for transport back." },
        { text: "Return to King Lathas in Ardougne Castle." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "3,000 Agility experience",
    "3,000 Attack experience",
    "Iban's staff (lets you cast Iban Blast)",
    "Klank's gauntlets",
  ],
};
