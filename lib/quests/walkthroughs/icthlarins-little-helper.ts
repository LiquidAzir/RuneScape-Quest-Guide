import type { QuestWalkthrough } from "../types";

export const icthlarinsLittleHelper: QuestWalkthrough = {
  startPoint: "Talk to the Wanderer west of the Agility Pyramid in the Kharidian Desert.",
  itemsRequired: [
    "A cat (regular, overgrown, hellcat, or kitten)",
    "Tinderbox",
    "Willow logs",
    "Bag of salt or bucket for a pile of salt",
    "Bucket of sap",
    "Full waterskin (or 4)",
    "Linen",
  ],
  recommended: [
    "Combat 50+",
    "35+ Agility for the pit jumps",
    "Antipoison potions",
    "Energy potions",
    "Some food",
    "Ghostspeak amulet (helpful)",
    "Desert robes for heat",
  ],
  enemies: [
    "Possessed Priest (level 91)",
    "One canopic guardian (level 75-81): Apmeken, Crondis, Scabaras, or Het",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the Wanderer west of the Agility Pyramid." },
        { text: "Talk to the Sphinx in Sophanem about your cat." },
        { text: "Give her a tinderbox and a full waterskin." },
        { text: "Touch the pyramid door to enter." },
      ],
    },
    {
      title: "First flashback",
      steps: [
        { text: "Avoid the aggressive mummies and scarabs." },
        { text: "Use the minimap to dodge floor traps." },
        { text: "Jump the pit (requires 35 Agility and 20%+ run energy)." },
        { text: "Open the western door and solve the puzzle with the golden bird." },
      ],
    },
    {
      title: "Sphinx challenge",
      steps: [
        { text: "Drop your cat in front of the Sphinx." },
        { text: "Ask the Sphinx for help." },
        { text: "Answer her riddle: 9." },
        { text: "Talk to the High Priest in the temple south-west of the pyramid." },
      ],
    },
    {
      title: "Second flashback",
      steps: [
        { text: "Return to the pyramid and jump the pit again." },
        { text: "Open the western door and take a canopic jar." },
        { text: "Defeat the canopic guardian (level 75-81)." },
        { text: "Exit via the pit jump and solve the puzzle to leave." },
      ],
    },
    {
      title: "Ceremony preparations",
      steps: [
        { text: "Talk to the High Priest." },
        { text: "Give the Embalmer linen, salt, and a bucket of sap." },
        { text: "Give the Carpenter willow logs to make a holy symbol." },
      ],
    },
    {
      title: "Third flashback and finish",
      steps: [
        { text: "Enter the pyramid one more time and jump the pit." },
        { text: "Open the east door and use the holy symbol on the sarcophagus." },
        { text: "Defeat the Possessed Priest (level 91)." },
        { text: "Talk to the High Priest in the temple to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "4,500 Thieving experience",
    "4,000 Agility experience",
    "4,000 Woodcutting experience",
    "Catspeak amulet",
    "Access to Sophanem (after Contact!)",
    "Magic carpet rides between Pollnivneach and Menaphos",
  ],
};
