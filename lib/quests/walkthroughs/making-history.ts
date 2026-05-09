import type { QuestWalkthrough } from "../types";

export const makingHistory: QuestWalkthrough = {
  startPoint: "Talk to Jorral at the outpost north-west of West Ardougne.",
  itemsRequired: [
    "Spade",
    "Sapphire amulet",
    "Ghostspeak amulet (or Morytania legs 2+)",
    "Access to Port Phasmatys",
  ],
  recommended: [
    "Weight-reducing clothing + stamina/energy potions",
    "Necklace of passage / Ardougne Teleport",
    "Ectophial / Fairy ring ALQ / Charter to Port Phasmatys",
    "Ring of dueling / Fairy ring BKP for Castle Wars",
    "Fremennik sea boots / Enchanted lyre for Rellekka",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to the outpost north-west of Ardougne and talk to Jorral." },
      ],
    },
    {
      title: "Erin the silver merchant",
      steps: [
        { text: "Talk to the Silver merchant in East Ardougne market." },
        { text: "Dig north of Castle Wars to find a buried chest." },
        { text: "Open the chest with the enchanted key for the journal." },
      ],
    },
    {
      title: "Droalak the ghost",
      steps: [
        { text: "Equip a Ghostspeak amulet." },
        { text: "Talk to Droalak outside the Port Phasmatys general store." },
        { text: "Give a strung sapphire amulet to Melina in the nearby building." },
        { text: "Talk to Droalak to receive a scroll." },
      ],
    },
    {
      title: "Dron the warrior",
      steps: [
        { text: "Travel to Rellekka and talk to Blanin east of the longhall." },
        { text: "Talk to Dron north of the longhall." },
        { text: "Answer 10 trivia questions about Dron's life (the answers come from his brother Blanin)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Jorral with the scroll + journal." },
        { text: "Talk to King Lathas at Ardougne Castle (1st floor)." },
        { text: "Return to Jorral." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "1,000 Crafting + Prayer experience each",
    "750 coins",
    "Enchanted key (scans for buried treasure pulses)",
    "Master clue scroll hot/cold capability",
    "5 Kudos + Antique lamp from Historian Minas",
  ],
};
