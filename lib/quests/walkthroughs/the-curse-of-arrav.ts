import type { QuestWalkthrough } from "../types";

export const theCurseOfArrav: QuestWalkthrough = {
  startPoint: "Talk to Elias White at the Uzer Oasis (fairy ring DLQ).",
  itemsRequired: [
    "3 Dwellberries",
    "Ring of life",
    "Pickaxe",
    "Crossbow (not love crossbow)",
    "Mith grapple",
    "Insulated boots",
  ],
  recommended: [
    "Combat 85+",
    "Combat gear, prayer + super combat + sharks",
    "Salve amulet",
    "Fairy ring access",
    "Trollheim teleport",
    "Anti-venom or Serpentine helm",
    "Lockpick",
  ],
  enemies: [
    "Golem guard (level 141)",
    "Arrav (level 339) — boss, dodge mechanics",
  ],
  sections: [
    {
      title: "Tomb raiding",
      steps: [
        { text: "Talk to Elias at the Uzer Oasis." },
        { text: "Enter the Uzer Mastaba south of the oasis." },
        { text: "Search the skeleton for the first mastaba key." },
        { text: "Find the second key north-west of the stone boat." },
        { text: "Disable the traps at the south and north ends." },
        { text: "Defeat the Golem guard, avoiding its prayer-pierce attack." },
        { text: "Cross the coloured tiles (blue/green or yellow/red)." },
        { text: "Retrieve the canopic jar from the burial chamber." },
        { text: "Inspect the southern mural in the Tumeken statue room." },
        { text: "Use 3 dwellberries then a ring of life on the canopic jar." },
      ],
    },
    {
      title: "Fort invasion",
      steps: [
        { text: "Travel to Trollheim, then to Trollweiss Dungeon." },
        { text: "Activate Protect from Melee." },
        { text: "Navigate to the Trollweiss Mountain summit via the crevasse." },
        { text: "Mine rubble piles to clear cave paths." },
        { text: "Talk to Arrav at the dungeon end." },
        { text: "Search the tapestry for base plans + base key." },
      ],
    },
    {
      title: "Hearty heist",
      steps: [
        { text: "Return to Elias with plans + key." },
        { text: "Travel to Zemouregal's Base north of the Digsite." },
        { text: "Navigate to the kitchen via the dungeon." },
        { text: "Wear insulated boots; enter the sewer via the pipe." },
        { text: "Retrieve decoder strips from the southern room table." },
        { text: "Open the chest for a code key; note the four-letter code." },
        { text: "Input the code using the decoder strips interface." },
        { text: "Climb metal bars with crossbow + mith grapple." },
        { text: "Take Arrav's heart to trigger the boss fight." },
        { text: "Defeat Arrav (level 339) — avoid axe swings + venom pools." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "40,000 Mining + Thieving + Agility experience each",
    "Access to Zemouregal's Fort",
  ],
};
