import type { QuestWalkthrough } from "../types";

export const biohazard: QuestWalkthrough = {
  startPoint:
    "Talk to Elena in her house in the north-west corner of East Ardougne. Ardougne Teleport (Magic 51) drops you in the market square — run west past the northern bank and the chapel to the block of houses backing onto the wall that divides East and West Ardougne. Requires Plague City complete.",
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
          text: "Talk to Elena in her house in the north-west of East Ardougne.",
          travel:
            "Ardougne Teleport lands you in the East Ardougne market square. Run west past the northern bank and the chapel until you hit the wall dividing East and West Ardougne — Elena's house is in that north-western block. No teleport: Ardougne cloak to the Monastery and run east into the city, or Camelot Teleport and run south-west along the road.",
        },
        {
          text: "Talk to Jerico in his house, then search his cupboard inside for bird feed.",
          travel:
            "A few paces from Elena's: Jerico's house sits between the northern Ardougne bank (just to its north) and the chapel (just to its south), with a pigeon coop in the back garden.",
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
          text: "Walk south-west along the inside of the city wall to the wooden watchtower guarding the West Ardougne wall.",
          travel:
            "From Jerico's house head west to the dividing wall, then follow it south-west. The watchtower is the small wooden tower built against the East Ardougne side of the wall, with a watchman standing on top of it.",
        },
        {
          text: "Use the bird feed on the fence under the watchtower (it scatters seed for the pigeons).",
        },
        {
          text: "Open the pigeon cage to release the pigeons — they fly up and distract the watchman on the tower.",
        },
        {
          text: "Talk to Omart, who waits by the wall directly south of the watchtower, and confirm. Equip your gas mask before he smuggles you over the wall.",
        },
      ],
    },
    {
      title: "Steal the distillator",
      steps: [
        {
          text: "Walk to the Mourner Headquarters in the north-east corner of West Ardougne (the large building with mourners loitering outside).",
          travel:
            "Omart drops you inside West Ardougne beside the wall. Keep the wall on your right and run north — the headquarters is the big building in the north-eastern corner of the city, the closest building to the East Ardougne gate.",
        },
        {
          text: "Squeeze through the loose fence on the east side of the headquarters and pick up the rotten apple from the back garden.",
        },
        {
          text: "Use the rotten apple on the cauldron in the back garden to poison the mourners' soup.",
        },
        {
          text: "Search the cupboard in Nurse Sarah's house for a medical gown.",
          travel:
            "Nurse Sarah's is the large building south-west of the West Ardougne church, a short run south-west from the Mourner Headquarters.",
        },
        {
          text: "Equip the medical gown and enter the Mourner Headquarters through the front door — the mourners think you're a nurse.",
        },
        {
          text: "Climb the stairs to the upper floor and kill the lone Mourner (level 13). Pick up the mourner's key.",
        },
        {
          text: "Use the key on the locked gate inside the headquarters, then search the crate third from the left on the northern wall of the caged room for the distillator.",
        },
        {
          text: "Return to Elena in her house in north-west East Ardougne with the distillator.",
          travel:
            "Leave West Ardougne through the east gate beside the headquarters, then run north-east through the market and west to Elena's house by the wall.",
        },
      ],
    },
    {
      title: "Get the chemicals",
      steps: [
        {
          text: "Talk to the Chemist inside his house in western Rimmington — he gives you touch paper, ethenea, liquid honey and sulphuric broline.",
          travel:
            "Rimmington sits south-west of Falador on the south coast. Skills necklace to the Crafting Guild then run south-west, or Falador Teleport and run out of the south gate and down the road past the Crafting Guild. No teleports: amulet of glory to Draynor Village, run west to Port Sarim, then north-west into Rimmington. The Chemist's house is on the western edge of the village.",
        },
        {
          text: "Hand each chemical vial to one of the 3 smugglers crowding around the fire right outside the Chemist's house: liquid honey to Chancy, ethenea to Da Vinci, sulphuric broline to Hops. They each promise to deliver to Varrock.",
        },
      ],
    },
    {
      title: "Deliver the chemicals to Guidor",
      steps: [
        {
          text: "Optional but recommended: ask Thessalia in the Fancy Dress shop for a free priest's robe and gown (they help you pass the Varrock guards while carrying chemicals).",
          travel:
            "Varrock Teleport lands you in Varrock square; Thessalia's Fine Clothes is the shop on the east side of the square, opposite Horvik's anvil.",
        },
        {
          text: "Go to the Dancing Donkey Inn and climb the stairs to collect the three vials back from Hops, Da Vinci and Chancy.",
          travel:
            "From Varrock square run south-east. The inn is inside the fenced-in enclosure in south-eastern Varrock — enter through the gate in the fence and it is the building on the north side.",
        },
        {
          text: "Talk to Guidor in his house — he tests Elena's plague sample using the chemicals.",
          travel:
            "Same walled enclosure as the Dancing Donkey Inn: Guidor's house is in its south-eastern corner. Wear the priest gown while walking in, otherwise the guards inside confiscate the chemicals.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Elena in her house in north-west East Ardougne.",
          travel:
            "Ardougne Teleport to the market square, then run west past the northern bank and chapel to the houses against the West Ardougne wall.",
        },
        {
          text: "Climb the stairs to the first floor of Ardougne Castle and talk to King Lathas.",
          travel:
            "Ardougne Castle is the big keep in the middle of East Ardougne, a short run south-east of Elena's house. Enter the courtyard from the east and take the staircase up one floor.",
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
