import type { QuestWalkthrough } from "../types";

export const ragAndBoneManII: QuestWalkthrough = {
  startPoint: "Talk to the Odd Old Man north of the Digsite (Silvarea).",
  itemsRequired: [
    "27 pots",
    "27 jugs of vinegar",
    "27 sets of logs",
    "Tinderbox",
    "Light source",
    "Rope",
    "Combat gear (some bones come from tough monsters)",
    "Mirror shield or V's shield (for basilisks)",
  ],
  recommended: [
    "Combat 40+",
    "Anti-dragon shield",
    "Inoculation bracelet (for zogres)",
    "Dramen staff for fairy rings",
    "Digsite pendant",
  ],
  enemies: [
    "27 different creatures across Gielinor — bat, undead cow, experiment, werewolf, ghoul, zombie, rat, moss giant, cave goblin, jackal, desert lizard, vulture, seagull, ice giant, mogre, snake, jogre, baby blue dragon, troll, rabbit, basilisk, dagannoth, fire giant, terrorbird, wolf, ogre, zogre",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Silvarea, north of the limestone mine." },
        { text: "Talk to the Odd Old Man at the Silvarea limestone mine." },
      ],
    },
    {
      title: "Gather 27 different bones",
      steps: [
        {
          text: "Hunt all 27 listed creature types and pick up their unique bone drops.",
          notes: ["Save this for the same week as a wilderness slayer task to combine objectives."],
        },
      ],
    },
    {
      title: "Polish all 27 bones",
      steps: [
        { text: "Buy 27 jugs of vinegar from Fortunato in Draynor." },
        { text: "Combine vinegar with pots; combine bones with vinegar pots." },
        { text: "Return to the Odd Old Man at the Silvarea limestone mine with all the cleaned bones + 27 logs." },
        {
          text: "For each bone: place logs on the pot-boiler, add bone-in-vinegar, light the logs, wait 12 seconds, remove the pot.",
        },
        { text: "Talk to the Odd Old Man at the Silvarea limestone mine to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Prayer experience",
    "Bonesack (functional cape)",
    "Ram skull helm",
  ],
};
