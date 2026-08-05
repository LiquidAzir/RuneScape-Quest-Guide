import type { QuestWalkthrough } from "../types";

export const trollRomance: QuestWalkthrough = {
  startPoint:
    "Talk to Ug in the south-west room of the Troll Stronghold's middle level. Cast Trollheim Teleport and run west/north-west down the mountain to the stronghold door, then climb down to the middle level. Without the spell, games necklace to Burthorpe, run north-west up the Death Plateau path and north through the thrower-troll pass to the same door.",
  itemsRequired: [
    "Iron bar",
    "Maple or yew logs",
    "Rope",
    "Climbing boots",
    "Bucket of wax (or use bee hives near Catherby)",
    "Cake tin",
    "Swamp tar",
  ],
  recommended: [
    "Combat 50+",
    "Trollheim teleport (Magic 61, needs Eadgar's Ruse) — otherwise a games necklace to Burthorpe",
    "Stamina/energy potions",
    "Some food and prayer potions for Arrg",
  ],
  enemies: ["Arrg (level 113) — boss"],
  sections: [
    {
      title: "Talk to the trolls",
      steps: [
        {
          text: "Talk to Ug in the south-west room of the Troll Stronghold's middle level.",
          travel:
            "Trollheim Teleport drops you on top of Trollheim; run west and slightly north down the mountainside to the Troll Stronghold entrance. No Trollheim teleport: games necklace to Burthorpe, run north-west out of the village up the Death Plateau path (climbing boots equipped), then north through the corridor of thrower trolls to the same cave door. Inside, take the stairs down one level and follow the corridor to the far south-west room.",
        },
        { text: "Talk to Aga in the room immediately north of Ug about her demands." },
        { text: "Return to Ug in the south-west room — he wants Trollweiss flowers, sledding gear, and Arrg's defeat." },
      ],
    },
    {
      title: "Make a sled",
      steps: [
        {
          text: "Talk to Tenzing the Sherpa in his hut west of Burthorpe, at the foot of Death Plateau.",
          travel:
            "Leave the stronghold and head back south-east over Death Plateau into Burthorpe (or games necklace to Burthorpe if you would rather teleport). From the Burthorpe village square run west along the path — Tenzing's small hut is the last building before the plateau climb.",
        },
        { text: "Ask Tenzing about Trollweiss and what is needed for a sled." },
        {
          text: "Talk to Dunstan at his open-air anvil in north-east Burthorpe.",
          travel:
            "Run back east into Burthorpe and head to the north-east corner of the village — Dunstan stands at the anvil east of the Imperial Guard soldier tent.",
        },
        { text: "Give Dunstan an iron bar, maple/yew logs, a rope and a cake tin so he can forge the sled." },
        { text: "Use swamp tar on a bucket of wax to make wax." },
        { text: "Use the wax on the sled." },
      ],
    },
    {
      title: "Pick the Trollweiss",
      steps: [
        {
          text: "Travel to the troll family cave in the far north-west of the Trollheim area.",
          travel:
            "Trollheim Teleport, then run west past the Troll Stronghold entrance and keep going north-west along the mountainside. The cave mouth is at the far north-west end of the Trollheim path, past the icy gate. Without the teleport, come up over Death Plateau from Burthorpe as before and head north-west.",
        },
        { text: "Enter the cave, bypassing the icy gate." },
        { text: "Run past the ice trolls to the north-western exit of the cave." },
        { text: "Exit through the crevasse onto the snowy ledge." },
        { text: "Equip your sled and click the slope to slide down onto Trollweiss Mountain." },
        { text: "After the cutscene, pick the Trollweiss flowers from the patch to the west." },
      ],
    },
    {
      title: "Defeat Arrg",
      steps: [
        {
          text: "Return to Ug in the south-west room of the Troll Stronghold's middle level with the Trollweiss.",
          travel:
            "From Trollweiss Mountain the fastest way back is Trollheim Teleport, then run west/north-west down to the stronghold door and climb down one level to the middle floor.",
        },
        { text: "Talk to Arrg in the northern room of the Troll Stronghold's middle level and pick the combat option." },
        { text: "Defeat Arrg (level 113) in the arena." },
        { text: "Return to Ug in the south-west room to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Agility experience",
    "4,000 Strength experience",
    "1 uncut diamond, 2 uncut rubies, 4 uncut emeralds",
    "Reusable sled",
  ],
};
