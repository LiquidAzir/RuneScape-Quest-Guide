import type { QuestWalkthrough } from "../types";

export const dreamMentor: QuestWalkthrough = {
  startPoint: "Talk to Cyrisus, the fallen man inside the Lunar Isle mine cave.",
  itemsRequired: [
    "Seal of passage",
    "20 pieces of food (6 of one type, 7 each of two others)",
    "Goutweed",
    "Astral rune",
    "Tinderbox",
    "Hammer",
    "Pestle and mortar",
  ],
  recommended: [
    "Combat 85+",
    "Trident of the seas or strong magic weapon",
    "Sharks/anglers",
    "Super combat potions",
    "Ancient Magicks (Blood Burst / Ice Burst) — strong against the bosses",
    "Best armour you have",
  ],
  enemies: [
    "The Inadequacy (level 343)",
    "The Everlasting (level 223) — safespot from north lectern",
    "The Untouchable (level 274) — safespot from north lectern",
    "The Illusive (level 108)",
  ],
  sections: [
    {
      title: "Help Cyrisus",
      steps: [
        { text: "Travel to Lunar Isle and enter the mine." },
        { text: "Talk to the fallen man (Cyrisus) inside the Lunar Isle mine. Feed him 4 food, alternating types." },
        { text: "Feed him 4 more food, cycling types again." },
        { text: "Reassure him with positive responses until he sits up." },
        { text: "Feed him 6 more food." },
        { text: "Continue reassuring him until he stands." },
        { text: "Talk to 'Bird's-Eye' Jack at the Lunar Isle bank about Cyrisus." },
        { text: "Bring Cyrisus equipment based on your combat style." },
        { text: "Feed him until 100% health and watch the cutscene." },
      ],
    },
    {
      title: "Brew the dream potion",
      steps: [
        { text: "Talk to the Oneiromancer at the Astral Altar to get a dream vial." },
        { text: "Fill the vial with water and add goutweed." },
        { text: "Use a hammer on an astral rune; grind the shards with pestle and mortar." },
        { text: "Add the ground astral rune to the vial — dream potion ready." },
        { text: "Bank for combat: bring food, prayer potions, and your best magic gear." },
      ],
    },
    {
      title: "Defeat the four nightmares",
      steps: [
        { text: "Light the Ceremonial Brazier in the dream hall." },
        { text: "Talk to Cyrisus inside the Dream World and confirm you're ready." },
        { text: "Defeat The Inadequacy (level 343)." },
        { text: "Defeat The Everlasting (level 223) — use the lectern safespot." },
        { text: "Defeat The Untouchable (level 274) — use the lectern safespot." },
        { text: "Defeat The Illusive (level 108)." },
        { text: "Return to the Oneiromancer at the Astral Altar on Lunar Isle to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "15,000 Hitpoints experience",
    "10,000 Magic experience",
    "7 new Lunar spells (including NPC Contact, Vengeance, Heal Other, Cure Other)",
    "Dreamy lamp (15,000 XP in any combat skill)",
    "Bank access on Lunar Isle without seal of passage",
  ],
};
