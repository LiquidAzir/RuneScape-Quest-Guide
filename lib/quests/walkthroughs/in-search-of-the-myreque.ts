import type { QuestWalkthrough } from "../types";

export const inSearchOfTheMyreque: QuestWalkthrough = {
  startPoint: "Talk to Vanstrom Klause in the Hair of the Dog tavern in Canifis.",
  itemsRequired: [
    "Steel longsword",
    "2 Steel swords",
    "Steel mace",
    "Steel warhammer",
    "Steel dagger",
    "225 Steel nails",
    "Druid pouch with 5+ charges",
    "Hammer",
    "6 Planks",
    "10 coins or Ring of Charos (a)",
  ],
  recommended: [
    "Combat 45+",
    "43 Prayer for Protect from Melee",
    "Prayer potions",
    "Some food",
  ],
  enemies: ["Skeleton Hellhound (level 97) — safespottable"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Vanstrom Klause in the Canifis pub. Pick dialogue options to accept the quest." },
        { text: "Fill your druid pouch with revived swamp plants before traveling." },
      ],
    },
    {
      title: "Travel to Mort'ton",
      steps: [
        { text: "Travel south to Mort'ton (use Slayer ring or fairy ring)." },
        { text: "Talk to Cyreg Paddlehorn by the boat south of Mort'ton." },
        { text: "Give Cyreg the 6 wooden planks." },
        { text: "Board the boat to the Hollows." },
      ],
    },
    {
      title: "Reach the Myreque base",
      steps: [
        { text: "Climb the tree rope bridge northward." },
        { text: "Repair the broken bridge." },
        { text: "Talk to Curpile Fyod at the Hollows entrance and pick option 1 to introduce yourself." },
        { text: "Enter the wooden doors in the hill." },
        { text: "Navigate north-west, following the eastern wall to find an alcove." },
        { text: "Enter the cave and talk to Veliaf Hurtz." },
        { text: "Talk to all the other Myreque members inside the Myreque Hideout in the Hollows." },
        { text: "Give the steel weapons (longsword, 2 swords, mace, warhammer, dagger) to Veliaf." },
      ],
    },
    {
      title: "Defeat the Hellhound",
      steps: [
        { text: "Walk further into the cave to trigger the Skeleton Hellhound (level 97)." },
        { text: "Defeat it (safespot it from behind a pillar)." },
        { text: "Talk to Veliaf again inside the Myreque Hideout in the Hollows." },
        { text: "Search the north wall to find a hidden passage." },
        { text: "Climb the ladder on the north side." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Hair of the Dog tavern in Canifis." },
        { text: "Talk to the Stranger (Vanstrom in disguise)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "600 experience in Attack, Defence, Strength, Hitpoints and Crafting (3,000 total)",
    "Access to the Hollows (Mort'ton chain progresses)",
    "Fairy ring DLS unlocked",
  ],
};
