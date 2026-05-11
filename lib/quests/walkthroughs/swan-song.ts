import type { QuestWalkthrough } from "../types";

export const swanSong: QuestWalkthrough = {
  startPoint: "Talk to Herman Caranos at Piscatoris Fishing Colony (north of fairy ring AKQ).",
  itemsRequired: [
    "5 Blood runes",
    "10 Mist runes",
    "10 Lava runes",
    "7 Bones",
    "Airtight pot (pot + pot lid)",
    "5 Iron bars",
    "Logs + Tinderbox",
    "Hammer",
    "Small fishing net",
    "Brown apron",
  ],
  recommended: [
    "Combat 60+",
    "Sharks/anglers + Prayer potions",
    "Cooking gauntlets",
    "Fairy rings access",
  ],
  enemies: [
    "Sea trolls (level 65, 79, 87, 101)",
    "Sea Troll Queen (level 170) — boss",
  ],
  sections: [
    {
      title: "Get the Wise Old Man",
      steps: [
        { text: "Talk to Herman Caranos at Piscatoris Fishing Colony." },
        { text: "Travel to Draynor Village and talk to the Wise Old Man." },
        { text: "Return to Piscatoris Fishing Colony and talk to the Wise Old Man inside the colony." },
      ],
    },
    {
      title: "First trolls and supplies",
      steps: [
        { text: "Kill level 79 Sea Trolls outside the colony, collect 7 bones." },
        { text: "Talk to Herman inside the eastern building." },
      ],
    },
    {
      title: "Repair the colony",
      steps: [
        { text: "Talk to Franklin Caranos in the furnace building." },
        { text: "Light a log on the firebox in the furnace." },
        { text: "Press 5 iron bars on the metal press." },
        { text: "Repair the western perimeter walls with the iron sheets." },
        { text: "Talk to Arnold Lydspor in the bank." },
        { text: "Fish 5 fresh monkfish at the spot north-west of the colony." },
        { text: "Cook the monkfish in the kitchen." },
        { text: "Talk to Arnold Lydspor in the Piscatoris bank, then Franklin Caranos in the furnace building again." },
        { text: "Talk to the Wise Old Man and Herman in the eastern building." },
      ],
    },
    {
      title: "Raise an army",
      steps: [
        { text: "Talk to Wizard Frumscone in the Wizards' Guild basement, Yanille." },
        { text: "Talk to Malignius Mortifer south of Falador." },
        { text: "Talk to the Master Crafter in the Crafting Guild." },
        { text: "Make an airtight pot from soft clay (combine pot + pot lid + fire/pottery oven)." },
        { text: "Return to Malignius Mortifer south of Falador to teleport back to the colony." },
      ],
    },
    {
      title: "Defeat the Sea Troll Queen",
      steps: [
        { text: "Talk to Herman inside the eastern building to start the fight." },
        {
          text: "Defeat the Sea Troll Queen (level 170).",
          notes: ["Use prayer potions and high-tier food. Magic works well."],
        },
        { text: "Talk to Herman inside the eastern building to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "50,000 Fishing experience",
    "15,000 Magic experience",
    "10,000 Prayer experience",
    "25,000 coins",
    "Ability to fish monkfish at the colony",
  ],
};
