import type { QuestWalkthrough } from "../types";

export const deviousMinds: QuestWalkthrough = {
  startPoint:
    "Talk to the monk standing outside Paterdomus Temple, on the River Salve east of Varrock. Salve Graveyard Teleport (Arceuus spellbook) lands right beside it; otherwise Varrock Teleport and run east along the road until it reaches the temple on the bridge.",
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
        {
          text: "Talk to the monk pacing outside Paterdomus Temple on the River Salve.",
          travel:
            "Salve Graveyard Teleport (Arceuus) drops you at the graveyard just south of the temple — run north. Otherwise Varrock Teleport, leave by the east gate and follow the road east past the Digsite turn-off until it ends at the temple bridge.",
        },
        { text: "Pick 'Sure thing, what do you need?'." },
      ],
    },
    {
      title: "Make the bow-sword",
      steps: [
        {
          text: "Travel to Doric's hut on the road north of Falador.",
          travel:
            "Falador Teleport, out the north gate and up the road — Doric's hut and anvils sit on the west side of the road before the Taverley/Dwarven Mine fork.",
        },
        { text: "Use the mithril 2h sword on Doric's whetstone to make a slender blade." },
        { text: "Attach the bow string to make a bow-sword." },
      ],
    },
    {
      title: "Smuggle to Entrana",
      steps: [
        {
          text: "Return to the monk outside Paterdomus Temple and confirm.",
          travel:
            "Salve Graveyard Teleport and run north, or Varrock Teleport then east along the road to the Salve bridge.",
        },
        { text: "Use the orb on a large pouch (smuggling the bow-sword)." },
        { text: "Bank weapons/armour; gather essence supplies for the Abyss." },
        {
          text: "Travel through the Abyss to the Law altar.",
          travel:
            "Amulet of glory → Edgeville, then run north over the Wilderness ditch and slightly east to the Mage of Zamorak by the river — talk to him to be teleported into the Abyss. Then cross the inner ring and enter the Law rift. (You may carry no weapons or armour, which suits Entrana anyway.)",
        },
        {
          text: "Exit the Law altar onto Entrana and run to the church.",
          travel:
            "The Law altar exit puts you on Entrana's south-east coast; run north-west to the church in the middle of the island. Alternative to the Abyss: board the monks' boat at Port Sarim's northern dock (Falador Teleport then run south) — no weapons or armour allowed aboard.",
        },
      ],
    },
    {
      title: "Reveal the plot",
      steps: [
        { text: "Use the pouch on the church altar; watch the cutscene." },
        {
          text: "Talk to the High Priest inside the temple in Sophanem, the far southern desert city.",
          travel:
            "Pharaoh's sceptre → Jaltevas/Necropolis and run south, or magic carpet from Shantay Pass to Pollnivneach and then a second carpet from Pollnivneach to Sophanem. Bring waterskins for any walking. The temple is in the north of the city.",
        },
        {
          text: "Return to Paterdomus Temple east of Varrock and search the Dead Monk.",
          travel: "Salve Graveyard Teleport and run north to the temple, or Varrock Teleport and run east along the road.",
        },
        {
          text: "Return to the Entrana church and talk to the High Priest.",
          travel:
            "Bank all weapons and armour, then take the monks' boat from Port Sarim's northern dock (Falador Teleport, run south) and walk to the church in the centre of the island.",
        },
        {
          text: "Talk to Sir Tiffy Cashien in Falador Park (dialogue option: Devious Minds).",
          travel:
            "Falador Teleport lands you in the centre of Falador; run north-east into the park. Sir Tiffy is the knight sitting on the bench.",
        },
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
