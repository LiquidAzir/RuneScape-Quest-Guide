import type { QuestWalkthrough } from "../types";

export const biohazard: QuestWalkthrough = {
  startPoint: "Talk to Elena in her house in East Ardougne (after Plague City).",
  itemsRequired: ["Gas mask", "Bird feed (gathered in quest)", "Pigeon cage (gathered in quest)"],
  recommended: [
    "Combat 10+ for the mourner kill",
    "Priest gown top + bottom (free from the Varrock fancy dress shop) for sneaking in Varrock",
    "Ardougne teleport, Skills necklace, fast travel methods",
  ],
  enemies: ["Mourner (level 13) — single kill"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Elena in East Ardougne. She wants you to deliver her plague sample to a researcher in Varrock." },
        { text: "Talk to Jerico (south of the bank) and search his cupboard for bird feed." },
        { text: "Take the pigeon cage from his backyard." },
      ],
    },
    {
      title: "Sneak back into West Ardougne",
      steps: [
        { text: "Walk south-west to the watchtower outside West Ardougne." },
        { text: "Use the bird feed on the fence under the watchtower." },
        { text: "Open the pigeon cage to draw the watchman's attention." },
        { text: "Talk to Omart (south-west of the castle) and confirm to be smuggled in. Equip your gas mask." },
      ],
    },
    {
      title: "Steal the distillator",
      steps: [
        { text: "Walk to the Mourner Headquarters in the north-east of West Ardougne." },
        { text: "Squeeze through the loose fence and pick up the rotten apple in the yard." },
        { text: "Use the rotten apple on the cauldron in the back garden to poison the mourners' food." },
        { text: "Walk to Nurse Sarah's house and search the cupboard for a medical gown." },
        { text: "Equip the medical gown and enter the headquarters." },
        { text: "Climb upstairs and kill a mourner (level 13). Pick up the mourner's key." },
        { text: "Use the key on the gate, then search the third crate from the left for the distillator." },
        { text: "Return to Elena in her house in East Ardougne (after Plague City) with the distillator." },
      ],
    },
    {
      title: "Get the chemicals",
      steps: [
        { text: "Travel to the Chemist in Rimmington (south-west of Falador)." },
        { text: "Talk to the Chemist in Rimmington to get touch paper, ethenea, liquid honey, and sulphuric broline (three vials)." },
        {
          text: "Hand each vial to one of his three friends to smuggle into Varrock:",
          notes: [
            "Liquid honey — Chancy",
            "Ethenea — Da Vinci",
            "Sulphuric broline — Hops",
          ],
        },
      ],
    },
    {
      title: "Deliver the chemicals to Guidor",
      steps: [
        { text: "Travel to south-east Varrock." },
        {
          text: "Optionally grab a free priest gown from the Fancy Dress shop east of Varrock square — wear it past Varrock's guards.",
        },
        { text: "Go to the Dancing Donkey Inn upstairs and collect the three vials back from Hops, Da Vinci, and Chancy." },
        { text: "Walk south to Guidor's house (in the fenced area south-east of Varrock)." },
        { text: "Talk to Guidor in his house south-east of Varrock Palace — he runs the test on Elena's plague sample." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Elena in Ardougne." },
        { text: "Climb to the first floor of Ardougne Castle and talk to King Lathas." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "1,250 Thieving experience",
    "Free passage through the West Ardougne gate",
    "Access to the Combat Training Camp",
  ],
};
