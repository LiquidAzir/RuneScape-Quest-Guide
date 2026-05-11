import type { QuestWalkthrough } from "../types";

export const aTailOfTwoCats: QuestWalkthrough = {
  startPoint:
    "Talk to Unferth in his small house in northern Burthorpe (the wooden cottage just north of the Burthorpe pub, on the path to Death Plateau — Burthorpe is north of Taverley/Falador). Bring your cat and equip a catspeak amulet.",
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
        { text: "Talk to Unferth in his house in northern Burthorpe with a catspeak amulet equipped." },
        {
          text: "Walk a short way north-east of Unferth's house to find Hild (an old woman tending a small garden). Talk to her.",
        },
        {
          text: "Give Hild 5 death runes — she enchants your catspeak amulet so it can locate Bob.",
        },
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
        {
          text: "Travel to Gertrude's farmhouse just west of Varrock (the small house with the chicken pen, west of the western Varrock gate). Talk to Gertrude about Bob's parents.",
        },
        {
          text: "Travel to the Varrock Palace library (ground floor west wing of Varrock Palace) and talk to Reldo about Robert the Strong.",
        },
        {
          text: "Use the catspeak amulet's Locate option again and follow the arrow to Bob to talk to him.",
        },
      ],
    },
    {
      title: "Memories and Bob's chore list",
      steps: [
        {
          text: "Travel to Sophanem in the Kharidian Desert (Pharaoh's sceptre → Necropolis or magic carpet to Pollnivneach + walk south). The Sphinx stands just outside the south-east gate of Sophanem — talk to her and ask for help for Bob.",
        },
        {
          text: "Return to Unferth at his house in northern Burthorpe (with a catspeak amulet equipped and your cat) and complete his chores: rake patch, plant potato seeds, make bed, light fireplace, place cake + milk on table, cut Unferth's hair.",
        },
        { text: "Talk to Unferth in his house in northern Burthorpe when chores are finished." },
      ],
    },
    {
      title: "Cure Unferth and finish",
      steps: [
        {
          text: "Travel to the Apothecary's house in southern Varrock (just south-west of Varrock central square — the small shop with the chemistry equipment) and talk to the Apothecary about Unferth.",
        },
        { text: "Return to Unferth's house in northern Burthorpe wearing white robes + a doctor/nurse hat with a vial of water." },
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
