import type { QuestWalkthrough } from "../types";

export const aTailOfTwoCats: QuestWalkthrough = {
  startPoint: "Talk to Unferth at his house in northern Burthorpe (with a catspeak amulet equipped and your cat).",
  itemsRequired: [
    "Cat or kitten",
    "Catspeak amulet",
    "5 Death runes",
    "Chocolate cake",
    "Logs + tinderbox",
    "Bucket of milk",
    "Shears",
    "4 potato seeds + rake + seed dibber",
    "Vial of water",
    "Desert shirt + robe (or full druid's robe)",
  ],
  recommended: [
    "Games necklace / Burthorpe teleport",
    "Varrock teleport",
    "Magic carpets or Nardah teleport for Sophanem",
    "Waterskin or Circlet of water",
    "Stamina potion / Graceful outfit",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Unferth with catspeak amulet equipped." },
        { text: "Talk to Hild north-east of Unferth's house." },
        { text: "Give 5 death runes to enchant the amulet." },
      ],
    },
    {
      title: "Find Bob the Cat",
      steps: [
        { text: "Use the catspeak amulet's Locate option to track Bob." },
        { text: "Right-click whiskers until the arrow and eyes glow white." },
        { text: "Follow the arrow to Bob and talk to him." },
      ],
    },
    {
      title: "Bob's lineage",
      steps: [
        { text: "Talk to Gertrude (west of Varrock) about Bob's parents." },
        { text: "Talk to Reldo (Varrock Palace library) about Robert the Strong." },
        { text: "Find and talk to Bob again." },
      ],
    },
    {
      title: "Memories and Bob's chore list",
      steps: [
        { text: "Talk to the Sphinx in Sophanem; ask for help for Bob." },
        {
          text: "Return to Unferth at his house in northern Burthorpe (with a catspeak amulet equipped and your cat) and complete his chores: rake patch, plant potato seeds, make bed, light fireplace, place cake + milk on table, cut Unferth's hair.",
        },
        { text: "Talk to Unferth when chores are finished." },
      ],
    },
    {
      title: "Cure Unferth and finish",
      steps: [
        { text: "Talk to the Apothecary in Varrock about the quest." },
        { text: "Return to Unferth wearing white robes + a doctor/nurse hat with a vial of water." },
        { text: "Find and talk to Bob again." },
        { text: "Talk to Unferth at his house in northern Burthorpe (with a catspeak amulet equipped and your cat) to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Doctor's hat or Nurse hat",
    "Present (2 antique lamps — 2,500 XP each in skills 30+)",
    "Mouse toy",
    "5 Kudos at the Varrock Museum",
  ],
};
