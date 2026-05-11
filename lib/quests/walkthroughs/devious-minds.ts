import type { QuestWalkthrough } from "../types";

export const deviousMinds: QuestWalkthrough = {
  startPoint: "Talk to the monk outside Paterdomus Temple, east of Varrock.",
  itemsRequired: [
    "Mithril 2h sword",
    "Bow string",
    "Large pouch (or any non-degraded essence pouch)",
  ],
  recommended: [
    "Combat 30+",
    "Falador, Lumberyard, Salve graveyard teleports",
    "Amulet of glory",
  ],
  enemies: ["Abyssal creatures (level 41+) — only if travelling through the Abyss"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to the monk at Paterdomus Temple." },
        { text: "Pick 'Sure thing, what do you need?'." },
      ],
    },
    {
      title: "Make the bow-sword",
      steps: [
        { text: "Travel to Doric's house north of Falador." },
        { text: "Use the mithril 2h sword on Doric's whetstone to make a slender blade." },
        { text: "Attach the bow string to make a bow-sword." },
      ],
    },
    {
      title: "Smuggle to Entrana",
      steps: [
        { text: "Return to the monk at Paterdomus Temple and confirm." },
        { text: "Use the orb on a large pouch (smuggling the bow-sword)." },
        { text: "Bank weapons/armour; gather essence supplies for the Abyss." },
        { text: "Travel through the Abyss to the Law altar." },
        { text: "Exit to Entrana and reach the church." },
      ],
    },
    {
      title: "Reveal the plot",
      steps: [
        { text: "Use the pouch on the church altar; watch the cutscene." },
        { text: "Talk to the High Priest inside Sophanem Temple." },
        { text: "Return to Paterdomus Temple east of Varrock and search the Dead Monk." },
        { text: "Return to Entrana church and talk to the High Priest." },
        { text: "Travel to Falador Park and talk to Sir Tiffy Cashien (option: Devious Minds)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Fletching experience",
    "5,000 Runecraft experience",
    "6,500 Smithing experience",
  ],
};
