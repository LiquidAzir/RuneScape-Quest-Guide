import type { QuestWalkthrough } from "../types";

export const makingHistory: QuestWalkthrough = {
  startPoint:
    "Talk to Jorral at the Outpost north-west of West Ardougne. A necklace of passage teleports directly to the Outpost (second option); otherwise Ardougne Teleport, run west through West Ardougne and then north-west along the road toward the Tree Gnome Stronghold.",
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
        {
          text: "Talk to Jorral at the Outpost north-west of West Ardougne.",
          travel:
            "Necklace of passage, second option ('The Outpost'), lands you a few steps from Jorral. Without one: Ardougne Teleport, run west through West Ardougne's gate and follow the road north-west — the Outpost is the small walled camp on the road toward the Tree Gnome Stronghold.",
        },
      ],
    },
    {
      title: "Erin the silver merchant",
      steps: [
        {
          text: "Talk to the Silver merchant at his stall in the East Ardougne market.",
          travel:
            "Ardougne Teleport lands you in the market square — the silver stall is on the eastern side of the row of stalls.",
        },
        {
          text: "Dig with your spade north of Castle Wars to find the buried chest.",
          travel:
            "Ring of dueling to Castle Wars, then run north out of the arena grounds — the dig spot is in the open grass just north of the Castle Wars lobby building.",
        },
        { text: "Open the chest with the enchanted key to get Erin's journal." },
      ],
    },
    {
      title: "Droalak the ghost",
      steps: [
        { text: "Equip a Ghostspeak amulet (or Morytania legs 2+)." },
        {
          text: "Talk to Droalak outside the Port Phasmatys general store.",
          travel:
            "Ectophial teleports you to the Ectofuntus just north of Port Phasmatys — run south and through the city gate (Ghosts Ahoy completion or 2 ecto-tokens). The general store is in the middle of town; Droalak drifts around outside it.",
        },
        { text: "Give a strung sapphire amulet to Melina in the building beside the store." },
        { text: "Talk to Droalak outside the general store again to receive the scroll." },
      ],
    },
    {
      title: "Dron the warrior",
      steps: [
        {
          text: "Travel to Rellekka and talk to Blanin east of the longhall.",
          travel:
            "Enchanted lyre or Fremennik sea boots 3 to Rellekka. Otherwise Camelot Teleport and run north past Sinclair Mansion and the coal trucks, then north-west into the village. The longhall is the big hall in the middle of Rellekka.",
        },
        { text: "Talk to Dron north of the longhall." },
        { text: "Answer 10 trivia questions about Dron's life (the answers come from his brother Blanin)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Jorral at the Outpost north-west of West Ardougne with the scroll and journal.",
          travel:
            "Necklace of passage, second option ('The Outpost'), or Ardougne Teleport and run west then north-west along the Tree Gnome Stronghold road.",
        },
        {
          text: "Talk to King Lathas on the 1st floor of Ardougne Castle.",
          travel:
            "Ardougne Teleport, run west across the market to the castle, then up the staircase in the north-west of the ground floor — Lathas is in the room at the top.",
        },
        { text: "Return to Jorral at the Outpost north-west of West Ardougne." },
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
