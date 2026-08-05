import type { QuestWalkthrough } from "../types";

export const creatureOfFenkenstrain: QuestWalkthrough = {
  startPoint:
    "Read the signpost in central Canifis (it points the way to Fenkenstrain's castle). Fairy ring CKS lands you in Canifis; otherwise Salve Graveyard Teleport (Arceuus, Magic 40) and run east over the bridge, or run east from Varrock through the Paterdomus temple and along the Mort Myre road.",
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
        {
          text: "Get a pickled brain from the table in the Hair of the Dog tavern in southern Canifis (50gp or Telekinetic Grab).",
          travel:
            "Fairy ring CKS drops you at the edge of Canifis. The Hair of the Dog is the pub on the south side of town, marked with the beer-mug icon. No fairy ring: Salve Graveyard Teleport then run east across the Salve bridge and along the road, or walk east from Varrock through Paterdomus.",
        },
        {
          text: "Travel north-east from Canifis to Fenkenstrain's castle and talk to Dr Fenkenstrain inside; agree to help.",
          travel:
            "Leave Canifis by the north-east path and follow it up through the Haunted Woods; the castle sits on the hill at the end of the path, north-east of town. Wear a holy symbol and expect leeches and ghasts on the way.",
        },
        { text: "Read 'The Joy of Grave Digging' from the west bookcase upstairs in the castle." },
        { text: "Read 'Handy Maggot Avoidance Techniques' from the east bookcase." },
        { text: "Combine the marble and obsidian amulets to make a star amulet." },
      ],
    },
    {
      title: "Collect the body parts",
      steps: [
        {
          text: "Dig at Ed Lestwit's cross-shaped grave in the Haunted Woods for a decapitated head.",
          travel:
            "From the castle run south into the Haunted Woods towards fairy ring ALQ — the cross-marked grave is slightly south-east of the ring. Read the grave to confirm it is Ed Lestwit's before digging.",
        },
        { text: "Combine the decapitated head with the pickled brain." },
        {
          text: "Use the star amulet on the furthest east memorial (the one with the indent) outside the castle.",
          travel: "The row of memorials stands just east of Fenkenstrain's castle, west of the Morytania farming patches.",
        },
        { text: "Push the memorial to enter the Experiment Cave." },
        { text: "Defeat the Experiment (level 51) and pick up the cavern key." },
        { text: "Follow the north-west passage to the gate, search the chest, and climb the ladder up." },
        { text: "Dig the three graves just north of the ladder for the torso, arms and legs." },
      ],
    },
    {
      title: "Build the lightning conductor",
      steps: [
        {
          text: "Return to Dr Fenkenstrain in his castle with all the body parts.",
          travel: "Run back north-west from the graves; the castle is just west of the memorial row.",
        },
        { text: "Give him the needle and thread." },
        { text: "Equip your ghostspeak amulet and talk to the Gardener Ghost round the back of the castle for the shed key." },
        { text: "Search the cupboard in the shed for the garden brush." },
        { text: "Take 3 garden canes from the pile outside the shed." },
        { text: "Use the canes on the brush with the bronze wires to make an extended brush." },
        { text: "Use the extended brush on the western fireplace in the castle to find the conductor mould." },
        {
          text: "Smelt a silver bar with the mould at a furnace to make a lightning conductor.",
          travel:
            "The closest furnace is in Port Phasmatys, east along the coast road from the castle (2 ecto-tokens to enter, free after Ghosts Ahoy). Alternative: amulet of glory to Edgeville and use the furnace there.",
        },
        { text: "Climb the southern ladder in the castle up to the roof and repair the lightning conductor." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Talk to Dr Fenkenstrain in the castle again." },
        { text: "Climb upstairs through the metal door, then up the northern ladder." },
        { text: "Talk to Fenkenstrain's monster in the tower room." },
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
