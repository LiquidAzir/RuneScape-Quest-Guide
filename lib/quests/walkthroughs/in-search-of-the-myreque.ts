import type { QuestWalkthrough } from "../types";

export const inSearchOfTheMyreque: QuestWalkthrough = {
  startPoint:
    "Talk to Vanstrom Klause by the staircase in the Hair of the Dog tavern in Canifis. Fairy ring CKS lands in Canifis; otherwise Varrock teleport and run east past the Digsite, over the River Salve at Paterdomus and east along the road into town.",
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
        {
          text: "Talk to Vanstrom Klause in the Hair of the Dog tavern in Canifis and pick the dialogue options to accept the quest.",
          travel:
            "Fairy ring CKS drops you in Canifis — the tavern is the pub in the middle of town. No fairy ring: Kharyrll teleport, or Varrock teleport and run east along the road past the Digsite, across the River Salve bridge at Paterdomus, then east into Canifis.",
        },
        {
          text: "Fill your druid pouch with revived swamp plants in Mort Myre before travelling on.",
          notes: ["You must have charges in the pouch BEFORE you board Cyreg's boat, or you'll have to come back."],
        },
      ],
    },
    {
      title: "Travel to Mort'ton",
      steps: [
        {
          text: "Travel south to Mort'ton.",
          travel:
            "Fairy ring BKR (Mort Myre, south of Canifis) then take the swamp boaty across the river into Mort'ton. Alternatives: the Shades of Mort'ton minigame teleport, a Mort'ton teleport scroll, or run south from Canifis through Mort Myre swamp.",
        },
        {
          text: "Talk to Cyreg Paddlehorn by the boat on the east side of Mort'ton.",
        },
        { text: "Give Cyreg the 6 wooden planks (and 10 coins, or wear a Ring of Charos (a))." },
        { text: "Board the boat to the Hollows." },
      ],
    },
    {
      title: "Reach the Myreque base",
      steps: [
        { text: "From the landing point, travel north and climb the tree rope bridge." },
        { text: "Repair the broken bridge with the hammer and steel nails." },
        { text: "Talk to Curpile Fyod at the Hollows entrance and pick option 1 to introduce yourself." },
        { text: "Enter the wooden doors set into the hill." },
        { text: "Head north-west, following the eastern wall, until you find an alcove." },
        { text: "Enter the cave in the southern wall of the alcove and talk to Veliaf Hurtz." },
        { text: "Talk to all the other Myreque members inside the hideout." },
        { text: "Give the steel weapons (longsword, 2 swords, mace, warhammer, dagger) to Veliaf." },
      ],
    },
    {
      title: "Defeat the Hellhound",
      steps: [
        { text: "Walk further into the cave to trigger the Skeleton Hellhound (level 97)." },
        { text: "Defeat it — safespot it from behind a pillar if your combat is low." },
        { text: "Talk to Veliaf again inside the hideout." },
        { text: "Search the north wall to find a hidden passage." },
        { text: "Climb the ladder on the north side to get out." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to the Hair of the Dog tavern in Canifis.",
          travel:
            "The ladder brings you back out into Mort Myre — run north to Canifis, or use fairy ring CKS if you passed a ring on the way.",
        },
        { text: "Talk to the Stranger by the bar (Vanstrom in disguise)." },
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
