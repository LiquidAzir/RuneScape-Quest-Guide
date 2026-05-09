import type { QuestWalkthrough } from "../types";

export const eadgarsRuse: QuestWalkthrough = {
  startPoint: "Talk to Sanfew on the upper floor of Jatix's Herblore Shop in Taverley.",
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
        { text: "Talk to Sanfew." },
        { text: "Travel to Mad Eadgar's cave (Trollheim)." },
        { text: "Free Eadgar from the cell if needed (pickpocket or kill Berry)." },
        { text: "Talk to Eadgar about finding goutweed." },
        { text: "Talk to Burntmeat in the Troll Stronghold kitchen." },
        { text: "Return to Eadgar." },
      ],
    },
    {
      title: "The parrot",
      steps: [
        { text: "Travel to Ardougne Zoo." },
        { text: "Talk to Parroty Pete (ask both questions)." },
        { text: "Use vodka on pineapple chunks for alco-chunks." },
        { text: "Use alco-chunks on the aviary hatch." },
        { text: "Take the parrot back to Eadgar (don't drop it)." },
        { text: "Use the parrot on the rack north of the troll stronghold cells." },
      ],
    },
    {
      title: "Make the fake human",
      steps: [
        { text: "Talk to Tegid in Taverley for a dirty robe." },
        { text: "Collect 10 grain south-west of Tegid." },
        { text: "Kill 5 chickens at Tenzing's house." },
        { text: "Pick troll thistle near Eadgar's cave entrance." },
        { text: "Light a fire and cook the thistle into dried thistle." },
        { text: "Use pestle and mortar on the dried thistle." },
        { text: "Add to the ranarr potion (unf)." },
        { text: "Talk to Eadgar multiple times to construct the fake man." },
        { text: "Give the fake man to Burntmeat." },
        { text: "Search the kitchen drawers for the storeroom key." },
      ],
    },
    {
      title: "Get the goutweed",
      steps: [
        { text: "Go down to the storeroom." },
        { text: "Sneak past guards to reach the goutweed." },
        { text: "Retrieve the goutweed (you take 0-6 damage if caught)." },
        { text: "Return the goutweed to Sanfew." },
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
