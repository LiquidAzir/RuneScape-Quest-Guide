import type { QuestWalkthrough } from "../types";

export const twilightsPromise: QuestWalkthrough = {
  startPoint:
    "Talk to either Ennius Tullus or Furia Tullus (Varlamore guards in red and gold) standing in the plaza in front of the Sunrise Palace in central Civitas illa Fortis.",
  itemsRequired: [
    "Items for two different combat classes (or a poisoned weapon for the slow path through the Colosseum trial)",
  ],
  recommended: ["Combat 40+", "Stamina potions", "Some food"],
  enemies: [
    "Knight of Varlamore (level 81) — Mezan's Colosseum trial",
    "8 Cultists (level 34) — final fight at Ralos' Rise",
  ],
  sections: [
    {
      title: "Friends like these",
      steps: [
        {
          text: "Travel to Civitas illa Fortis (Pendant of ates teleport, or Quetzal whistle from Hunter Guild). Walk to the Sunrise Palace in the city centre.",
        },
        {
          text: "Talk to Ennius Tullus or Furia Tullus standing in the plaza in front of the palace; answer Yes to start.",
        },
        {
          text: "Walk south of the Sunrise Palace plaza to the temple. Talk to Metzli at the temple entrance.",
        },
        {
          text: "Descend the trapdoor into the crypt below the temple.",
        },
        {
          text: "Inside the crypt, talk to Prince Itzla and Servius (they're huddled near a stone tomb).",
        },
        {
          text: "Climb back up and talk to Ennius/Furia outside the Sunrise Palace to receive the Varlamore crest.",
        },
      ],
    },
    {
      title: "Knight tasks (6 around Civitas illa Fortis)",
      steps: [
        {
          text: "Find 6 knights wandering the city — each gives a small task. Locations are marked with the Varlamore crest icon.",
        },
        {
          text: "Arrun & Claudia (south Bazaar): pickpocket an amulet from a wandering citizen in the central bazaar.",
        },
        {
          text: "Nel (harbour district, south-west of city): search the correct cargo crate at the south harbour for the contraband.",
        },
        {
          text: "Mezan (Colosseum, south-east of city): fight at the Fortis Colosseum entry trial — swap combat styles between rounds when prompted.",
        },
        {
          text: "Velam & Azali (central plaza): lead the knight east to the fountain just east of the central pub.",
        },
        {
          text: "Final knight task: search the chest inside the Kualti Headquarters (the cult-marked building west of the bazaar) for the incriminating letter.",
        },
        {
          text: "Return to Ennius or Furia in the Sunrise Palace plaza with all the evidence.",
        },
      ],
    },
    {
      title: "The Twilight Emissaries",
      steps: [
        {
          text: "Walk south-east of the Sunrise Palace plaza and talk to Regulus Cento (he runs the Quetzal Transport System stand).",
        },
        {
          text: "Feed Renu the quetzal (Regulus's mount) the food he requests.",
        },
        {
          text: "Travel via the quetzal to Ralos' Rise (the temple plateau north of Civitas illa Fortis).",
        },
        {
          text: "Inside the Ralos' Rise temple, talk to Prince Itzla.",
        },
        {
          text: "Walk to the smaller building north of the temple and talk to Metzli inside.",
        },
        {
          text: "Defeat the 8 cultists (level 34) that ambush you outside.",
        },
        {
          text: "Watch the final cutscene.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Civitas illa Fortis Teleport spell unlock (standard spellbook)",
    "Quetzal Transport System access (fast travel between Varlamore cities)",
    "3,000 Thieving experience",
  ],
};
