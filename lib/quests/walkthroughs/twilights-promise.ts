import type { QuestWalkthrough } from "../types";

export const twilightsPromise: QuestWalkthrough = {
  startPoint: "Talk to Ennius Tullus or Furia Tullus in front of the Sunrise Palace, Civitas illa Fortis.",
  itemsRequired: [
    "Items for two different combat classes (or a poisoned weapon for the slow path)",
  ],
  recommended: ["Combat 40+", "Stamina potions", "Some food"],
  enemies: [
    "Knight of Varlamore (level 81)",
    "8 Cultists (level 34)",
  ],
  sections: [
    {
      title: "Friends like these",
      steps: [
        { text: "Talk to Ennius/Furia outside the Sunrise Palace (answer Yes)." },
        { text: "Head south to the temple; talk to Metzli." },
        { text: "Go down into the crypt." },
        { text: "Talk to Prince Itzla and Servius." },
        { text: "Return to Ennius/Furia for the Varlamore crest." },
      ],
    },
    {
      title: "Knight tasks",
      steps: [
        { text: "Find 6 Knights around the city and complete their tasks:" },
        { text: "Arrun & Claudia: pickpocket an amulet from a citizen in the bazaar." },
        { text: "Nel: search the correct crate at the harbour." },
        { text: "Mezan: fight at the Colosseum (swap combat styles between rounds)." },
        { text: "Velam & Azali: lead the knight to the fountain east of the pub." },
        { text: "Search the Kualti Headquarters chest for the incriminating letter." },
        { text: "Return to Ennius/Furia." },
      ],
    },
    {
      title: "The Twilight Emissaries",
      steps: [
        { text: "Talk to Regulus Cento south-east of the palace." },
        { text: "Feed Renu the quetzal." },
        { text: "Travel to the Ralos' Rise temple." },
        { text: "Talk to Prince Itzla inside." },
        { text: "Talk to Metzli in the northern building." },
        { text: "Defeat 8 cultists." },
        { text: "Watch the final cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Civitas illa Fortis Teleport spell unlock",
    "Quetzal Transport System access",
    "3,000 Thieving experience",
  ],
};
