import type { QuestWalkthrough } from "../types";

export const icthlarinsLittleHelper: QuestWalkthrough = {
  startPoint:
    "Talk to the Wanderer in the camp just west of the Agility Pyramid, north-east of Sophanem in the southern Kharidian Desert. Pharaoh's sceptre (Jaleustrophos) is the fastest route; otherwise desert amulet/Nardah teleport and run south-west, or the magic carpet from Pollnivneach to Sophanem and run north-east.",
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
        {
          text: "Talk to the Wanderer in the camp west of the Agility Pyramid.",
          travel:
            "Pharaoh's sceptre 'Jaleustrophos' lands you at the Agility Pyramid — the tents are a few steps west. Without it: teleport to Nardah (desert amulet 2+) and run south-west, take the magic carpet from Pollnivneach to Sophanem and run north-east, or fairy ring DLQ (north of Nardah) then south-west. Carry waterskins — the desert drains run energy and damages you.",
        },
        {
          text: "Enter Sophanem and talk to the Sphinx about your cat.",
          travel:
            "From the Wanderer's camp run south-west to the gates of Sophanem, on the south bank of the river below the Agility Pyramid.",
        },
        { text: "Give the Sphinx a tinderbox and a full waterskin." },
        {
          text: "Touch the door of the pyramid in the north of Sophanem to enter.",
        },
      ],
    },
    {
      title: "First flashback",
      steps: [
        { text: "Avoid the aggressive mummies and scarabs inside the pyramid." },
        { text: "Use the minimap to dodge the floor traps." },
        { text: "Jump the pit (requires 35 Agility and 20%+ run energy)." },
        { text: "Open the western door and solve the puzzle with the golden bird to leave." },
      ],
    },
    {
      title: "Sphinx challenge",
      steps: [
        { text: "Drop your cat in front of the Sphinx." },
        { text: "Ask the Sphinx for help." },
        { text: "Answer her riddle: 9." },
        {
          text: "Talk to the High Priest in the Great Temple of Icthlarin in the west of Sophanem.",
          travel: "From the Sphinx head south-west across the city; the temple is the large columned building on Sophanem's western side.",
        },
      ],
    },
    {
      title: "Second flashback",
      steps: [
        {
          text: "Return to the pyramid in the north of Sophanem and jump the pit again.",
          travel: "Run north-east from the temple back through the city to the pyramid door.",
        },
        { text: "Open the western door and take a canopic jar." },
        { text: "Defeat the canopic guardian (level 75-81) that appears." },
        { text: "Exit via the pit jump and solve the puzzle to leave." },
      ],
    },
    {
      title: "Ceremony preparations",
      steps: [
        {
          text: "Talk to the High Priest inside the Great Temple in western Sophanem.",
          travel: "Head back south-west across the city from the pyramid to the temple.",
        },
        { text: "Give the Embalmer in the temple linen, salt, and a bucket of sap." },
        { text: "Give the Carpenter in the temple willow logs to make a holy symbol." },
      ],
    },
    {
      title: "Third flashback and finish",
      steps: [
        {
          text: "Enter the pyramid one more time and jump the pit.",
          travel: "North-east across Sophanem from the temple back to the pyramid door.",
        },
        { text: "Open the east door and use the holy symbol on the sarcophagus." },
        { text: "Defeat the Possessed Priest (level 91)." },
        { text: "Talk to the High Priest back in the temple to finish." },
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
    "Magic carpet rides between Pollnivneach and Sophanem",
  ],
};
