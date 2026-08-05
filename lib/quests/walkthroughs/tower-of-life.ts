import type { QuestWalkthrough } from "../types";

export const towerOfLife: QuestWalkthrough = {
  startPoint:
    "Talk to Effigy outside the Tower of Life, on the coast south of East Ardougne. Fairy ring DJP lands you right next to the tower. Without a fairy ring, cast Ardougne Teleport (51 Magic) or use an Ardougne tablet, leave the market square heading south out of the city and follow the coastal road south — the tower is the tall stone spire on the shoreline.",
  itemsRequired: [
    "Hammer (or Imcando hammer)",
    "Saw (or crystal saw)",
    "Beer (regular only)",
  ],
  recommended: [
    "11+ free inventory slots",
    "Fairy ring DJP",
    "Ardougne cloak",
  ],
  sections: [
    {
      title: "Get the builder's costume",
      steps: [
        {
          text: "Talk to Bonafido, the foreman at the Tower of Life entrance south of East Ardougne.",
          travel:
            "Fairy ring DJP drops you beside the tower. Otherwise Ardougne Teleport (51 Magic) to the market square, then run south out of the city and follow the coast road down to the construction site.",
        },
        { text: "Talk to 'Black-eye' at the construction site for a hard hat (answers: Three / Torn curtains / 10 clay pieces)." },
        { text: "Give a beer to 'The Guns' at the site for the shirt." },
        { text: "Search the plants south-east of the tower for the trousers." },
        { text: "Pickpocket 'No fingers' for the boots." },
      ],
    },
    {
      title: "Enter the tower",
      steps: [
        { text: "Wear the full builder's costume and talk to Bonafido at the tower entrance." },
        { text: "Answer his questions: Tea / Whistle for attention / Your legs are getting cold / Carry on." },
        { text: "Enter the tower in costume." },
      ],
    },
    {
      title: "Fix the three machines",
      steps: [
        {
          text: "Pressure machine (1st floor west): collect 4 valve wheels, 3 metal sheets, 4 coloured balls. Solve the valve puzzle until all pipes fill with water.",
        },
        {
          text: "Pipe machine (3rd floor): collect 4 pipes, 5 pipe rings, 6 rivets. Assemble the configuration.",
        },
        {
          text: "Cage (top floor): collect 5 metal bars, 4 binding fluids. Complete the cage configuration puzzle.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Effigy inside the Tower of Life and watch the cutscene." },
        { text: "Answer the Homunculus's questions (Logic or Magic approach)." },
        { text: "Talk to Effigy again outside the tower entrance." },
        {
          text: "Talk to the Homunculus in the dungeon beneath the tower.",
          travel:
            "Go back inside the Tower of Life and take the stairs down to the basement — the Homunculus is in the Creature Creation chamber below.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "1,000 Construction experience",
    "500 Crafting + Thieving experience each",
    "Access to Creature Creation (custom Slayer-monster mash-ups)",
    "Builder's costume",
  ],
};
