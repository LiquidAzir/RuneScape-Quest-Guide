import type { QuestWalkthrough } from "../types";

export const perilousMoons: QuestWalkthrough = {
  startPoint:
    "Talk to Zuma or Attala outside the Cam Torum entrance in eastern Varlamore. Civitas illa Fortis Teleport (54 Magic) or a quetzal whistle gets you to Civitas illa Fortis; from the city's transport post ride the quetzal to Cam Torum, or leave by the east gate and follow the mountain road north-east to the cave mouth on foot.",
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
        {
          text: "Talk to Attala outside the Cam Torum temple entrance.",
          travel:
            "Civitas illa Fortis Teleport (or quetzal whistle) to Civitas illa Fortis, then take the quetzal from the transport post to Cam Torum. Running instead: leave Civitas illa Fortis by the east gate and follow the road north-east up into the mountains until you reach the carved cave entrance — Attala and Zuma wait outside it.",
        },
        { text: "Climb the rocks beside the entrance (47 Agility) or kill a Sulphur Nagua for a way through." },
        { text: "Return to Attala at the temple entrance and cross the drawbridge into the city." },
        {
          text: "Talk to Jessamine in the northern part of Cam Torum.",
          travel:
            "From the drawbridge follow the main street north through the city; Jessamine stands near the northern buildings by the road up to the dungeon.",
        },
        {
          text: "Enter the Neypotzli dungeon through the passage at the north end of Cam Torum.",
          travel: "Keep going north past Jessamine and take the tunnel entrance at the back of the city.",
        },
      ],
    },
    {
      title: "Set up base camps",
      steps: [
        { text: "Take the building supplies crate in the Neypotzli antechamber (hammer, saw, three supplies)." },
        { text: "Build camp in the Ancient Prison (south-western entrance off the antechamber)." },
        { text: "Build camp in the Streambound Cavern (north-eastern entrance off the antechamber)." },
        { text: "Build camp in the Earthbound Cavern (north-western entrance off the antechamber)." },
      ],
    },
    {
      title: "Get the talismans",
      steps: [
        { text: "Talk to Attala in the Neypotzli antechamber for the water + earth talismans." },
        {
          text: "Visit Nahta at the Cam Torum magic shop.",
          travel:
            "Head back south out of the Neypotzli tunnel into Cam Torum — the magic shop is on the city's main street, signposted with the rune icon.",
        },
        {
          text: "Visit the blacksmith at the Cam Torum furnace for talisman infusion.",
          travel: "The forge is a short walk from the magic shop, on the same main street in Cam Torum.",
        },
        { text: "Use the talismans to locate Eyatlalli (the location varies per player)." },
        { text: "Return to the Neypotzli antechamber and talk to Eyatlalli." },
      ],
    },
    {
      title: "Prepare for the ritual",
      steps: [
        { text: "Gather from a grubby sapling in the Earthbound Cavern and process it into paste." },
        { text: "Fish raw bream in the Streambound Cavern and process them into scales." },
        { text: "Trap a moss lizard in the Ancient Prison and process it into a tail." },
        { text: "Talk to Eyatlalli in the Neypotzli antechamber with all 3 items to begin the ritual." },
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
        { text: "Return to the Neypotzli antechamber after defeating all 3 moons." },
        { text: "Talk to Attala, Jessamine, and Eyatlalli in the Neypotzli antechamber." },
        { text: "Talk to Eyatlalli in the Neypotzli antechamber." },
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
