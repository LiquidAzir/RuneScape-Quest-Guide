import type { QuestWalkthrough } from "../types";

export const eadgarsRuse: QuestWalkthrough = {
  startPoint:
    "Talk to Sanfew on the upper floor of Jatix's Herblore Shop in Taverley. Falador Teleport, run west through the Taverley gate into the village — the herblore shop is on the main street, and Sanfew is up the staircase.",
  itemsRequired: [
    "Climbing boots (or 12gp from Tenzing)",
    "Vodka",
    "Pineapple chunks",
    "1 Log",
    "10 Grain",
    "5 Raw chicken",
    "Pestle and mortar",
    "Ranarr potion (unfinished)",
  ],
  recommended: [
    "Combat 50+",
    "Some food + armour",
    "Stamina/energy potions",
    "Tinderbox + 2 extra logs",
    "Ardougne teleport / Games necklace",
  ],
  sections: [
    {
      title: "Find Eadgar",
      steps: [
        {
          text: "Talk to Sanfew on the upper floor of Jatix's Herblore Shop in Taverley.",
          travel:
            "Falador Teleport, then run west out of the west gate and through the Taverley gate. The herblore shop is on Taverley's main street; take the staircase up to Sanfew.",
        },
        {
          text: "Travel to Mad Eadgar's cave near the summit of Trollheim.",
          travel:
            "Games necklace → Burthorpe, run east past Tenzing's house and up Death Plateau, then climb the rocks onto Trollheim with climbing boots equipped. Eadgar's cave mouth is on the upper slope on the north side of the mountain. Buy climbing boots from Tenzing (12gp) on the way if you need them.",
        },
        { text: "Free Eadgar from the cell if needed (pickpocket or kill Berry)." },
        { text: "Talk to Eadgar in his cave about finding goutweed." },
        {
          text: "Talk to Burntmeat in the Troll Stronghold kitchen.",
          travel:
            "Leave Eadgar's cave and run north-west across Trollheim to the Troll Stronghold entrance, then follow the corridors to the kitchen where Burntmeat cooks.",
        },
        {
          text: "Return to Eadgar in his cave on Trollheim.",
          travel: "Back out of the stronghold and south-east across the mountain to the cave.",
        },
      ],
    },
    {
      title: "The parrot",
      steps: [
        {
          text: "Travel to Ardougne Zoo and talk to Parroty Pete by the aviary (ask both questions).",
          travel:
            "Ardougne Teleport drops you in the East Ardougne market square; run north-east past the castle to the zoo. Parroty Pete stands beside the parrot aviary. Ardougne cloak → Ardougne Monastery and running south-east also works.",
        },
        { text: "Use vodka on pineapple chunks for alco-chunks." },
        { text: "Use alco-chunks on the aviary hatch." },
        {
          text: "Take the parrot back to Eadgar on Trollheim (don't drop it).",
          travel: "Games necklace → Burthorpe, east over Death Plateau and up onto Trollheim to Eadgar's cave.",
        },
        { text: "Use the parrot on the rack north of the troll stronghold cells." },
      ],
    },
    {
      title: "Make the fake human",
      steps: [
        {
          text: "Talk to Tegid in his house on the west side of Taverley for a dirty robe.",
          travel:
            "Falador Teleport, run west through the Taverley gate and cross to the western side of the village — Tegid is indoors near the wheat field.",
        },
        { text: "Collect 10 grain from the wheat field south-west of Tegid's house." },
        {
          text: "Kill 5 chickens at Tenzing's house west of Burthorpe and take the raw chicken.",
          travel:
            "Games necklace → Burthorpe, then run west/south-west to Tenzing's cottage at the foot of Death Plateau — the chickens wander outside it.",
        },
        {
          text: "Pick troll thistle from the patch near Eadgar's cave entrance on Trollheim.",
          travel: "From Tenzing's, run east past Burthorpe and over Death Plateau, then climb onto Trollheim.",
        },
        { text: "Light a fire and cook the thistle into dried thistle." },
        { text: "Use pestle and mortar on the dried thistle." },
        { text: "Add the ground thistle to the ranarr potion (unf)." },
        { text: "Talk to Eadgar in his Trollheim cave multiple times to construct the fake man." },
        {
          text: "Give the fake man to Burntmeat in the Troll Stronghold kitchen.",
          travel: "Run north-west from Eadgar's cave into the Troll Stronghold and back to the kitchen.",
        },
        { text: "Search the kitchen drawers for the storeroom key." },
      ],
    },
    {
      title: "Get the goutweed",
      steps: [
        { text: "Go down from the kitchen into the storeroom." },
        { text: "Sneak past the guards to reach the goutweed." },
        { text: "Retrieve the goutweed (you take 0-6 damage if caught)." },
        {
          text: "Return the goutweed to Sanfew above Jatix's Herblore Shop in Taverley.",
          travel:
            "Leave the stronghold and run south-west back over Death Plateau to Burthorpe, then Falador Teleport and run west through the Taverley gate to the herblore shop.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "11,000 Herblore experience",
    "Trollheim Teleport spell unlock",
    "Ability to grow + steal Goutweed",
  ],
};
