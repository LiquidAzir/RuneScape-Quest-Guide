import type { QuestWalkthrough } from "../types";

export const theGrandTree: QuestWalkthrough = {
  startPoint: "Talk to King Narnode Shareen at the base of the Grand Tree (Tree Gnome Stronghold).",
  itemsRequired: [
    "1,000 coins (only if you didn't help Femi at the gate to skip the fee)",
    "2 free inventory slots to start",
  ],
  recommended: [
    "Combat 50+",
    "Magic, ranged, or a halberd for the Black Demon (safespotting works)",
    "Stamina potions",
    "Teleport to Yanille (or fairy ring CLS) and Karamja teleport",
    "25 Agility (skips the optional summer pie)",
  ],
  enemies: ["Black demon (level 172) — safespottable", "Jogres (level 53) on Karamja path"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to King Narnode at the Grand Tree. He gives you a translation book and a bark sample." },
        {
          text: "Travel to Hazelmere's house east of Yanille (use fairy ring CLS).",
        },
        { text: "Climb the ladder and give Hazelmere the bark sample to get a translated scroll." },
      ],
    },
    {
      title: "Confront Glough",
      steps: [
        { text: "Return to King Narnode and reveal the scroll's contents." },
        { text: "Walk south then up the ladder to confront Glough." },
        { text: "Report back to King Narnode that Glough has a human prisoner." },
        { text: "Talk to the prisoner Charlie on the top floor of the Grand Tree." },
        { text: "Search Glough's cupboard for his journal." },
        { text: "Confront Glough — you'll be arrested by Narnode's order." },
        { text: "Talk to Charlie again. He tells you the password Ka-Lu-Min." },
        { text: "Use the gnome glider on the top of the tree to escape to Karamja." },
      ],
    },
    {
      title: "Karamja shipyard",
      steps: [
        {
          text: "After the glider crashes, run east past the level 53 jogres to the shipyard gate.",
        },
        { text: "Tell the shipyard worker Glough sent you and give the password Ka-Lu-Min in three parts." },
        { text: "Find the Foreman on the southern dock and get the lumber order." },
        {
          text: "Return to King Narnode (use teleport, glider, or pay Femi 1,000gp at the gate).",
        },
      ],
    },
    {
      title: "The invasion plans",
      steps: [
        { text: "Talk to Charlie again on the top floor of the Grand Tree." },
        { text: "Visit Anita's house north-west of the Grand Tree to get Glough's key." },
        { text: "Open Glough's chest with the key and take the invasion plans." },
        { text: "Give the plans to King Narnode — he hands you four stick letters." },
        { text: "Climb the watchtower in Glough's house and use the sticks to spell TUZO on the four pillars." },
        { text: "Eat a summer pie for an Agility boost if your level is below 25." },
        { text: "Climb down the trapdoor that opens." },
      ],
    },
    {
      title: "Defeat the Black Demon",
      steps: [
        { text: "Talk to Glough — a Black Demon (level 172) appears." },
        {
          text: "Immediately after the cutscene, run to the tile directly north of the entry ladder.",
          notes: ["The demon gets stuck behind rocks and can be safespotted from this tile."],
        },
        { text: "Attack with ranged, magic, or a halberd until it dies (10-minute timer)." },
        { text: "Walk east through the new passage to find King Narnode by a ladder." },
        { text: "Talk to him and search the tree roots until you find the last daconia rock." },
        { text: "Talk to King Narnode one final time. Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "18,400 Attack experience",
    "7,900 Agility experience",
    "2,150 Magic experience",
    "Access to the Grand Tree mine and the Gnome Glider transport network",
    "Agility shortcut to the Barbarian Outpost (37 Agility)",
    "5 Kudos at the Varrock Museum",
  ],
};
