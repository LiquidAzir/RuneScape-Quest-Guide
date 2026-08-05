import type { QuestWalkthrough } from "../types";

export const aTailOfTwoCats: QuestWalkthrough = {
  startPoint:
    "Talk to Unferth in his cottage in north-east Burthorpe, where the path up to Death Plateau begins. Games necklace → Burthorpe Games Room, then climb the stairs out into Burthorpe castle and run north-east. Without one, Falador Teleport and run north-west through Taverley. Bring your cat and equip a catspeak amulet.",
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
        {
          text: "Talk to Unferth in his cottage in north-east Burthorpe with a catspeak amulet equipped.",
          travel:
            "Games necklace → Burthorpe Games Room, then take the stairs up and out of the castle and run north-east. Alternatives: combat bracelet → Warriors' Guild in south-east Burthorpe then run north-west, or Falador Teleport and run north-west through Taverley and over the Burthorpe bridge.",
        },
        {
          text: "Talk to Hild, the old woman tending the small garden a short way north-east of Unferth's house.",
          travel: "Straight out of Unferth's door and north-east up the Death Plateau path — her hut is the first one you pass.",
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
          text: "Talk to Gertrude about Bob's parents at her farmhouse west of Varrock.",
          travel:
            "Varrock Teleport, then run west out of the west gate and take the first turning south — Gertrude's house is the one with the chicken pen, just west of the Cooking Guild.",
        },
        {
          text: "Talk to Reldo about Robert the Strong in the Varrock Palace library.",
          travel:
            "Varrock Teleport, then run north to the palace and enter the west wing from the courtyard — the library is the bookcase-lined room on the ground floor.",
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
          text: "Talk to the Sphinx in Sophanem and ask for help for Bob.",
          travel:
            "Take the magic carpet from Shantay Pass (south of Al Kharid) to Pollnivneach, then the Sophanem carpet from the Pollnivneach carpet stop. A Pharaoh's sceptre teleport to Jalsavrah also drops you inside Sophanem's pyramid. Bring waterskins — the desert drains run energy.",
        },
        {
          text: "Return to Unferth at his cottage in north-east Burthorpe (with a catspeak amulet equipped and your cat) and complete his chores: rake patch, plant potato seeds, make bed, light fireplace, place cake + milk on table, cut Unferth's hair.",
          travel: "Games necklace → Burthorpe Games Room, then out of the castle and north-east.",
        },
        { text: "Talk to Unferth in his cottage when the chores are finished." },
      ],
    },
    {
      title: "Cure Unferth and finish",
      steps: [
        {
          text: "Talk to the Apothecary about Unferth in his shop in south-west Varrock.",
          travel:
            "Varrock Teleport to the central square, then run south-west past the sword shop — the Apothecary's is the small house on the west side of the street, north of the south-west city gate.",
        },
        {
          text: "Return to Unferth's cottage in north-east Burthorpe wearing white robes + a doctor/nurse hat, carrying a vial of water.",
          travel: "Games necklace → Burthorpe Games Room, out through the castle, then north-east up the Death Plateau path.",
        },
        { text: "Find and talk to Bob again using the amulet's Locate option." },
        { text: "Talk to Unferth at his cottage (with a catspeak amulet equipped and your cat) to finish." },
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
