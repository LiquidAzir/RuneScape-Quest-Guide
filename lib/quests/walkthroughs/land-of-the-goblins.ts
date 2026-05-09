import type { QuestWalkthrough } from "../types";

export const landOfTheGoblins: QuestWalkthrough = {
  startPoint: "Talk to Grubfoot in the Dorgesh-Kaan mine.",
  itemsRequired: [
    "Light source",
    "Toadflax potion (unfinished)",
    "6 goblin mail",
    "Yellow, blue, orange, purple, black dyes",
    "Fishing rod",
    "Raw slimy eel",
    "5 coins",
  ],
  recommended: [
    "Combat 65+",
    "Tinderbox",
    "2+ Dorgesh-Kaan spheres",
    "Dramen / lunar staff for fairy rings",
    "Skills necklace, Combat bracelet",
  ],
  enemies: [
    "Snothead (level 32)",
    "Snailfeet (level 56)",
    "Mosschin (level 88)",
    "Redeyes (level 121)",
    "Strongbones (level 184)",
  ],
  sections: [
    {
      title: "Grubfoot's dream",
      steps: [
        { text: "Talk to Grubfoot outside Dorgesh-Kaan." },
        { text: "Enter the city and head to Oldak's laboratory." },
        { text: "Talk to Zanik about her dream." },
      ],
    },
    {
      title: "Become a high priest",
      steps: [
        { text: "Head to the temple entrance blocked by goblin guards." },
        { text: "Pick a black mushroom if needed for dye." },
        { text: "Talk to the Makeover Mage south of Falador." },
        { text: "Pick pharmakos berries and add to the toadflax potion." },
      ],
    },
    {
      title: "Temple of Tribes",
      steps: [
        { text: "Travel to the Goblin Cave near the Fishing Guild." },
        { text: "Drink the goblin potion in front of the guards." },
        { text: "Dye a goblin mail black and wear it." },
        { text: "Search crates for additional goblin mails." },
        { text: "Free Zanik using a Dorgesh-Kaan sphere." },
        { text: "Take High Priest Bighead's test." },
        { text: "Pickpocket the priest for a Huzamogaarb key." },
      ],
    },
    {
      title: "Keys to the crypt",
      steps: [
        { text: "Talk to Aggie in Draynor Village." },
        { text: "Catch whitefish in Hemenster." },
        { text: "Return to Aggie for white goblin mail." },
        { text: "Steal the remaining keys from priests in different rooms." },
        { text: "Dye your mails yellow, purple, orange, blue accordingly." },
        { text: "Unlock the crypt with all 6 keys." },
      ],
    },
    {
      title: "High priests of ages past",
      steps: [
        { text: "Enter the crypt and fight 5 goblin high priests." },
        { text: "Use the 'Say-name' option on each grave." },
        { text: "Talk to defeated priests asking about their predecessors." },
        { text: "For Strongbones (level 184): Protect from Magic; ask his location." },
      ],
    },
    {
      title: "Path to Yu'biusk",
      steps: [
        { text: "Return to Dorgesh-Kaan and talk to Zanik." },
        { text: "Go to Oldak in the South Dungeon (fairy ring AJQ)." },
        { text: "Use the machine combination 9-4-1." },
        { text: "Open the strange box in north-west Yu'biusk." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Agility + Fishing + Thieving + Herblore experience each",
    "Access to the Goblin Temple",
    "Access to Yu'biusk via fairy ring BLQ",
    "Ability to buy plain of mud spheres + make goblin potions",
  ],
};
