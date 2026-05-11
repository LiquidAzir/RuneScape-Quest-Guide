import type { QuestWalkthrough } from "../types";

export const creatureOfFenkenstrain: QuestWalkthrough = {
  startPoint: "Read the signpost in central Canifis (it points to Fenkenstrain's castle).",
  itemsRequired: [
    "Ghostspeak amulet",
    "Silver bar",
    "3 unnoted bronze wires",
    "Needle + 5 thread",
    "Spade",
    "50 coins (or 1 law rune + 1 air rune for Telekinetic Grab)",
  ],
  recommended: [
    "Combat 30+",
    "Holy symbol for the Haunted Woods",
    "Some food",
    "Stamina/energy potions",
    "Salve teleport for fast travel",
  ],
  enemies: ["Experiment (level 51) — safespottable"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Get a pickled brain from the Hair of the Dog tavern in Canifis (50gp or Telekinetic Grab)." },
        { text: "Travel to Fenkenstrain's castle east of Canifis." },
        { text: "Talk to Dr Fenkenstrain in the castle and agree to help." },
        { text: "Read 'The Joy of Grave Digging' from the west bookcase upstairs." },
        { text: "Read 'Handy Maggot Avoidance Techniques' from the east bookcase." },
        { text: "Combine the marble and obsidian amulets to make a star amulet." },
      ],
    },
    {
      title: "Collect the body parts",
      steps: [
        { text: "Travel into the Haunted Woods and dig at the cross-shaped grave for a head." },
        { text: "Combine the decapitated head with the pickled brain." },
        { text: "Use the star amulet on the easternmost memorial near the castle." },
        { text: "Push the memorial to enter the Experiment Cave." },
        { text: "Defeat the Experiment (level 51) and pick up the cavern key." },
        { text: "Follow the north-west path, search the chest, and climb the ladder up." },
        { text: "Dig the three graves nearby for the torso, arms and legs." },
      ],
    },
    {
      title: "Build the lightning conductor",
      steps: [
        { text: "Return to Dr Fenkenstrain in Fenkenstrain's Castle with all the body parts." },
        { text: "Give him the needle and thread." },
        { text: "Equip your ghostspeak amulet and talk to the Gardener Ghost outside for the shed key." },
        { text: "Search the cupboard in the shed for the garden brush." },
        { text: "Take 3 garden canes from the pile outside." },
        { text: "Use the canes on the brush with the bronze wires to make an extended brush." },
        { text: "Use the extended brush on the western fireplace in the castle to find the conductor mould." },
        { text: "Travel to the nearest furnace and smelt a silver bar with the mould to make a lightning conductor." },
        { text: "Climb up via the southern ladder in the castle and repair the lightning conductor on the roof." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Dr Fenkenstrain in the castle and agree to help." },
        { text: "Climb upstairs through the metal door, then up the northern ladder." },
        { text: "Talk to Fenkenstrain's monster in the tower room of Fenkenstrain's Castle." },
        { text: "Return downstairs and pickpocket the doctor for a Ring of Charos." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "1,000 Thieving experience",
    "Ring of Charos (lets you charm certain NPCs into discounts; activate via Garden of Tranquillity)",
  ],
};
