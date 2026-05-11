import type { QuestWalkthrough } from "../types";

export const biohazard: QuestWalkthrough = {
  startPoint:
    "Talk to Elena in her house in central East Ardougne (just south of the central market square — the small house with a sign post outside). Requires Plague City complete.",
  itemsRequired: [
    "Gas mask (kept from Plague City; if lost, get another from Edmond in West Ardougne)",
    "Bird feed (search Jerico's cupboard in-quest)",
    "Pigeon cage (take from Jerico's backyard in-quest)",
  ],
  recommended: [
    "Combat 10+ for the mourner kill in the headquarters",
    "Priest gown top + bottom (free from the Varrock Fancy Dress shop east of Varrock square) for sneaking past Varrock guards while carrying chemicals",
    "Ardougne teleport, Skills necklace (for Fishing Guild teleport), Amulet of glory (Edgeville/Karamja)",
    "Falador teleport (for Rimmington run)",
  ],
  enemies: ["Mourner (level 13) — single kill upstairs in the Mourner Headquarters"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to East Ardougne and talk to Elena in her house just south of the central market square (small house, sign post out front).",
        },
        {
          text: "Walk one short street south to Jerico's house (just south of Elena's, near the chicken pen). Talk to Jerico, then search his cupboard inside for bird feed.",
        },
        {
          text: "Take the pigeon cage from Jerico's backyard fence.",
        },
      ],
    },
    {
      title: "Sneak back into West Ardougne",
      steps: [
        {
          text: "Walk south-west out of East Ardougne to the watchtower at the West Ardougne gate (the small wooden tower right beside the gate).",
        },
        {
          text: "Use the bird feed on the fence under the watchtower (it scatters seed for the pigeons).",
        },
        {
          text: "Open the pigeon cage to release the pigeons — they fly up and distract the watchman on the tower.",
        },
        {
          text: "Walk just south-west of the watchtower to find Omart (he hides behind a tree near the south wall). Talk to him and confirm. Equip your gas mask before he smuggles you over the wall.",
        },
      ],
    },
    {
      title: "Steal the distillator",
      steps: [
        {
          text: "Walk to the Mourner Headquarters in the north-east of West Ardougne (large stone building with the mourner symbol on the doors).",
        },
        {
          text: "Squeeze through the loose fence on the east side of the headquarters and pick up the rotten apple from the back garden.",
        },
        {
          text: "Use the rotten apple on the cauldron in the back garden to poison the mourners' soup.",
        },
        {
          text: "Walk to Nurse Sarah's house, just south-east of the headquarters in West Ardougne. Search the cupboard inside for a medical gown.",
        },
        {
          text: "Equip the medical gown and enter the Mourner Headquarters through the front door — the mourners think you're a nurse.",
        },
        {
          text: "Climb the stairs to the upper floor and kill the lone Mourner (level 13). Pick up the mourner's key.",
        },
        {
          text: "Use the key on the locked gate inside the headquarters, then search the third crate from the left in the back room for the distillator.",
        },
        {
          text: "Return to Elena in her house in East Ardougne with the distillator.",
        },
      ],
    },
    {
      title: "Get the chemicals",
      steps: [
        {
          text: "Travel to the Chemist's house in Rimmington (south-west of Falador, on the south coast — Falador teleport then run south, or charter ship to Port Sarim and walk west).",
        },
        {
          text: "Talk to the Chemist inside his house. He gives you touch paper, ethenea, liquid honey, and sulphuric broline (three vials of chemicals).",
        },
        {
          text: "Hand each chemical vial to one of his 3 smuggler friends standing outside the Chemist's house: liquid honey to Chancy, ethenea to Da Vinci, sulphuric broline to Hops. They each promise to deliver to Varrock.",
        },
      ],
    },
    {
      title: "Deliver the chemicals to Guidor",
      steps: [
        {
          text: "Travel to Varrock (Varrock teleport, or run from Falador).",
        },
        {
          text: "Optional but recommended: visit the Fancy Dress shop just east of Varrock central square; ask Thessalia for a priest's robe and gown for free (helps you pass Varrock guards while carrying chemicals).",
        },
        {
          text: "Go to the Dancing Donkey Inn (south-east Varrock, the inn near the south-east corner). Climb upstairs and collect the three vials back from Hops, Da Vinci, and Chancy.",
        },
        {
          text: "Walk south of Varrock to Guidor's house — it sits inside the small fenced compound just south-east of Varrock palace, on the road heading toward the Lumber Yard.",
        },
        {
          text: "Talk to Guidor in his house — he tests Elena's plague sample using the chemicals.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Elena in her house south of the East Ardougne market.",
        },
        {
          text: "Climb the stairs to the first floor of Ardougne Castle (centre of East Ardougne) and talk to King Lathas.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "1,250 Thieving experience",
    "Free passage through the West Ardougne gate (from East Ardougne side)",
    "Access to the Combat Training Camp west of West Ardougne",
  ],
};
