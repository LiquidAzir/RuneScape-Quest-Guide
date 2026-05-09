import type { QuestWalkthrough } from "../types";

export const perilousMoons: QuestWalkthrough = {
  startPoint: "Talk to Zuma or Attala at the entrance to Cam Torum.",
  itemsRequired: [
    "Knife (in-quest)",
    "Big fishing net (in-quest)",
    "Rope (in-quest)",
    "Pestle and mortar (in-quest)",
    "Combat gear for the 3 boss fights",
  ],
  recommended: [
    "Combat 75+",
    "60+ Attack/Strength/Defence",
    "50+ Hunter or 60+ Cooking for HP scaling",
    "55+ Herblore for potion scaling",
    "Energy regen (Stamina, Graceful)",
    "Antipoison if combat < 100",
  ],
  enemies: [
    "Sulphur Nagua (level 98)",
    "Blue Moon (level 329) — weak to crush",
    "Blood Moon (level 329) — weak to slash",
    "Eclipse Moon (level 329) — weak to stab",
  ],
  sections: [
    {
      title: "Get into Cam Torum",
      steps: [
        { text: "Talk to Attala near the temple entrance." },
        { text: "Climb the rocks (47 Agility) or kill a Sulphur Nagua." },
        { text: "Return to Attala and cross the drawbridge." },
        { text: "Talk to Jessamine in the northern part of the city." },
        { text: "Enter the Neypotzli dungeon to the north." },
      ],
    },
    {
      title: "Set up base camps",
      steps: [
        { text: "Take the building supplies crate (hammer, saw, three supplies)." },
        { text: "Build camp in the Ancient Prison (south-western entrance)." },
        { text: "Build camp in the Streambound Cavern (north-eastern entrance)." },
        { text: "Build camp in the Earthbound Cavern (north-western entrance)." },
      ],
    },
    {
      title: "Get the talismans",
      steps: [
        { text: "Talk to Attala for water + earth talismans." },
        { text: "Visit Nahta at the Cam Torum magic shop." },
        { text: "Visit the blacksmith at the furnace for talisman infusion." },
        { text: "Use the talismans to locate Eyatlalli (location varies per player)." },
        { text: "Return to the antechamber and talk to Eyatlalli." },
      ],
    },
    {
      title: "Prepare for the ritual",
      steps: [
        { text: "Gather from a grubby sapling and process into paste." },
        { text: "Fish raw bream and process into scales." },
        { text: "Trap a moss lizard and process into a tail." },
        { text: "Talk to Eyatlalli with all 3 items to begin the ritual." },
      ],
    },
    {
      title: "Defeat the 3 moons",
      steps: [
        { text: "Battle Blue Moon in the north-western chamber (crush)." },
        { text: "Battle Blood Moon in the south-western chamber (slash)." },
        { text: "Battle Eclipse Moon in the north-eastern chamber (stab)." },
        {
          text: "Stand in the highlighted circle — it shifts clockwise periodically.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the antechamber after defeating all 3." },
        { text: "Talk to all three NPCs." },
        { text: "Talk to Eyatlalli." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "40,000 Slayer experience",
    "5,000 Runecraft / Hunter / Fishing experience each",
    "Access to the Moons of Peril boss + Lunar Chest",
    "Lesser nagua Slayer tasks unlocked",
  ],
};
