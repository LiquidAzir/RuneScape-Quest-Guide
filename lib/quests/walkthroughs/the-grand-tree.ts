import type { QuestWalkthrough } from "../types";

export const theGrandTree: QuestWalkthrough = {
  startPoint:
    "Talk to King Narnode Shareen at the base of the Grand Tree in the Tree Gnome Stronghold. Spirit tree to the Tree Gnome Stronghold if you have one; otherwise Ardougne teleport, leave by the north gate and follow the road north-west to the Stronghold's south-east gate, then run north-west to the huge tree in the middle.",
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
        {
          text: "Talk to King Narnode at the base of the Grand Tree. He gives you a translation book and a bark sample.",
          travel:
            "Spirit tree to the Tree Gnome Stronghold. Without one: Ardougne teleport, out the north gate and north-west along the road to the Stronghold's south-east gate (Femi is on the gate), then run north-west to the Grand Tree. Narnode stands on the ground floor at its base.",
        },
        {
          text: "Travel to Hazelmere's hut on the small island east of Yanille.",
          travel:
            "Fairy ring CLS drops you right beside the hut. No fairy ring: Watchtower Teleport (or a house/Nightmare Zone teleport) to Yanille and run east out of the city to the island.",
        },
        { text: "Climb the ladder and give Hazelmere the bark sample upstairs to get a translated scroll." },
      ],
    },
    {
      title: "Confront Glough",
      steps: [
        {
          text: "Return to King Narnode at the Grand Tree and reveal the scroll's contents.",
          travel: "Spirit tree back to the Tree Gnome Stronghold, or Ardougne teleport and run north-west along the road again.",
        },
        {
          text: "Walk south-east to Glough's house and climb the ladder to confront him.",
          travel: "From the Grand Tree, run down the incline to the south-east; his house is the tree-house at the bottom — go up the ladder.",
        },
        { text: "Report back to King Narnode at the Grand Tree that Glough has a human prisoner." },
        { text: "Talk to the prisoner Charlie on the top floor of the Grand Tree (climb the ladders inside)." },
        { text: "Search Glough's cupboard in his house for his journal." },
        { text: "Confront Glough — you'll be arrested by Narnode's order." },
        { text: "Talk to Charlie again on the top floor of the Grand Tree. He tells you the password Ka-Lu-Min." },
        { text: "Use the gnome glider on the top of the Grand Tree to escape to Karamja." },
      ],
    },
    {
      title: "Karamja shipyard",
      steps: [
        {
          text: "After the glider crashes, run east past the level 53 jogres to the shipyard gate.",
          travel: "The glider dumps you in the far north-east of Karamja; the shipyard is the fenced compound directly east of the crash site.",
        },
        { text: "Tell the shipyard worker Glough sent you and give the password Ka-Lu-Min in three parts." },
        { text: "Find the Foreman on the southern dock of the shipyard and get the lumber order." },
        {
          text: "Return to King Narnode at the Grand Tree.",
          travel:
            "Spirit tree or any Stronghold teleport is fastest. Otherwise take the Gandius gnome glider back to the Grand Tree, or run in through the south-east gate and pay Femi 1,000gp if you didn't help her earlier.",
        },
      ],
    },
    {
      title: "The invasion plans",
      steps: [
        { text: "Talk to Charlie again on the top floor of the Grand Tree." },
        {
          text: "Visit Anita's house north-west of the Grand Tree to get Glough's key.",
          travel: "From the Grand Tree run north-west and climb the stairs west of the swamp — her house sits at the top.",
        },
        {
          text: "Open Glough's chest in his house with the key and take the invasion plans.",
          travel: "Back south-east past the Grand Tree and down the incline to Glough's tree-house; the chest is upstairs.",
        },
        { text: "Give the plans to King Narnode at the Grand Tree — he hands you four stick letters." },
        { text: "Climb the watchtower tree in the east part of Glough's house and use the sticks to spell TUZO on the four pillars." },
        { text: "Eat a summer pie for an Agility boost if your level is below 25." },
        { text: "Climb down the trapdoor that opens." },
      ],
    },
    {
      title: "Defeat the Black Demon",
      steps: [
        { text: "Talk to Glough in the cave under the Grand Tree — a Black Demon (level 172) appears." },
        {
          text: "Immediately after the cutscene, run to the tile directly north of the entry ladder.",
          notes: ["The demon gets stuck behind rocks and can be safespotted from this tile."],
        },
        { text: "Attack with ranged, magic, or a halberd until it dies (10-minute timer)." },
        { text: "Walk east through the new passage to find King Narnode by a ladder." },
        { text: "Talk to King Narnode inside the Grand Tree and search the tree roots until you find the last daconia rock." },
        { text: "Talk to King Narnode inside the Grand Tree one final time. Quest complete." },
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
