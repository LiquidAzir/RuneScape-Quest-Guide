import type { QuestWalkthrough } from "../types";

export const wanted: QuestWalkthrough = {
  startPoint: "Talk to Sir Tiffy Cashien in Falador Park.",
  itemsRequired: [
    "10,000 coins (or Law rune + Enchanted gem + Molten glass to craft Commorb)",
    "20 unnoted rune or pure essence (same type)",
    "Light source",
  ],
  recommended: ["Combat 15+", "Some food + armour", "Stamina/energy potions"],
  enemies: ["Black Knight (level 32-33)", "Solus Dellagar"],
  sections: [
    {
      title: "Become a recruit",
      steps: [
        { text: "Talk to Sir Tiffy Cashien in Falador Park." },
        { text: "Talk to Sir Amik Varze on the 2nd floor of the White Knights' Castle." },
        { text: "Return to Tiffy, then back to Amik, then to Tiffy again." },
        { text: "Buy or craft the Commorb." },
        { text: "Use the Commorb's contact option for your assignment." },
      ],
    },
    {
      title: "Daquarius",
      steps: [
        { text: "Travel to Taverley Dungeon." },
        { text: "Navigate to the Black Knights' Base." },
        { text: "Talk to Lord Daquarius." },
        { text: "Defeat a Black Knight." },
        { text: "Finish dialogue with Daquarius." },
      ],
    },
    {
      title: "Mage of Zamorak",
      steps: [
        { text: "Find the Mage of Zamorak at the Altar of Chaos in Varrock." },
        { text: "Deliver 20 rune or pure essence (same type)." },
      ],
    },
    {
      title: "Hunt Solus Dellagar",
      steps: [
        { text: "Travel to Canifis; Savant calls you on the Commorb." },
        { text: "Scan the Commorb near the bank to reveal Solus." },
        { text: "Visit 7 locations following item clues." },
        { text: "Track Solus until you have 20 noted pure essence." },
        { text: "Travel to the Rune essence mine via the teleporting mages." },
        { text: "Defeat Solus Dellagar." },
        { text: "Return to Falador and report to Sir Amik Varze." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Slayer experience",
    "Access to the White Knights' armoury (white equipment)",
  ],
};
