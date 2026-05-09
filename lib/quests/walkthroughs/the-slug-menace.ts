import type { QuestWalkthrough } from "../types";

export const theSlugMenace: QuestWalkthrough = {
  startPoint: "Talk to Sir Tiffy Cashien in Falador Park.",
  itemsRequired: [
    "Commorb v2",
    "Swamp paste",
    "Dead sea slug",
    "5+ rune or pure essence",
    "Chisel",
    "Talismans (or Abyss access) for elemental + mind altars",
  ],
  recommended: [
    "Combat 35+",
    "Stamina/energy potions",
    "Some food + melee weapon",
    "Prayer potions",
    "Various teleports",
  ],
  enemies: ["Slug Prince (level 62) — melee only, drains prayer"],
  sections: [
    {
      title: "Investigate Witchaven",
      steps: [
        { text: "Get Commorb v2 from Sir Tiffy." },
        { text: "Meet Col. O'Niall at the Witchaven dock." },
        { text: "Interview Brother Maledict, Mayor Hobb, and Holgart." },
        { text: "Report back to Col. O'Niall." },
      ],
    },
    {
      title: "The Shrine",
      "steps": [
        { text: "Enter the Old Ruins dungeon west of Witchaven." },
        { text: "Push the false wall to reach the Imposing Door." },
        { text: "Scan the door with the Commorb to transcribe runic symbols." },
        { text: "Collect a dead sea slug." },
        { text: "Visit Jorral at the outpost for translation." },
      ],
    },
    {
      title: "The pages",
      steps: [
        { text: "Search the mayor's study desk for a page." },
        { text: "Talk to Ezekial Lovecraft." },
        { text: "Travel to the Fishing Platform." },
        { text: "Give the dead slug to Bailey." },
        { text: "Use sea slug glue on the page fragments and solve the puzzle." },
      ],
    },
    {
      title: "Open the Imposing Door",
      steps: [
        { text: "Use a chisel on essence to make blank air, water, fire, earth, and mind runes." },
        { text: "Use the blank runes at their respective altars to enchant them." },
        { text: "Use the completed runes on the Imposing Door." },
        { text: "Defeat the Slug Prince (level 62) — bring food, prayer drains." },
        { text: "Report to Sir Tiffy." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,500 Crafting + Runecraft + Thieving experience each",
    "Proselyte rank — access to Proselyte armour (best Prayer-bonus melee armour at low Defence)",
  ],
};
