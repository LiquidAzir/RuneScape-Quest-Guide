import type { QuestWalkthrough } from "../types";

export const thePathOfGlouphrie: QuestWalkthrough = {
  startPoint: "Talk to King Bolren in the centre of the Tree Gnome Village maze.",
  itemsRequired: [
    "Tree Gnome Village dungeon key",
    "Mith grapple",
    "Any crossbow",
    "Crystal chime (made during quest)",
    "Combat gear and food",
  ],
  recommended: [
    "Earmuffs or Slayer helmet (helpful for warped terrorbirds)",
    "Royal/Grand seed pod for fast travel",
    "Stamina potions, prayer potions",
    "Sharks or better food",
    "Spirit tree network",
    "Fairy ring access",
  ],
  enemies: [
    "3 Warped terrorbirds (level 138) — boss fight",
    "1 Evil creature (level 1)",
  ],
  sections: [
    {
      title: "Help Golrie under the village",
      steps: [
        { text: "Talk to King Bolren in the centre of the Tree Gnome Village maze and agree to help — the maze elder Golrie has gone missing." },
        { text: "Squeeze through the loose railing in the village and climb down the ladder." },
        { text: "Talk to Golrie. He explains the village needs an anti-illusion device." },
        { text: "If you don't have it, find the dungeon key in a nearby crate. Unlock the gate." },
        { text: "Enter the storeroom through the eastern tunnel." },
      ],
    },
    {
      title: "Solve the storeroom monolith puzzle",
      steps: [
        { text: "Push the first monolith north, then search the chest near it for discs." },
        { text: "Push the south-west monolith north, then the north-west monolith east." },
        { text: "Search the two chests by the northern tunnel for more discs." },
        { text: "Push the small monolith south, then the north-west monolith west." },
        { text: "Search the chest for the strongroom key and a crystal chime seed." },
        { text: "Click the singing bowl in the storeroom to make the crystal chime." },
        { text: "Push the south-east monolith west and enter the strongroom." },
      ],
    },
    {
      title: "Yewnock's machine + first fight",
      steps: [
        { text: "Read the book on the lectern and watch the cutscenes for context." },
        {
          text: "Operate Yewnock's machine and insert discs to match the green target values.",
          notes: ["Same disc-puzzle logic as Eyes of Glouphrie. Trade with Golrie for missing colours."],
        },
        { text: "Return to King Bolren — an evil creature attacks. Defeat it." },
        { text: "Finish the dialogue with King Bolren." },
      ],
    },
    {
      title: "Find Hazelmere",
      steps: [
        { text: "Take a Spirit tree to the Tree Gnome Stronghold." },
        { text: "Climb the ladder up the Grand Tree once and talk to Gianne jnr." },
        { text: "Travel east of the Poison Waste to the Galarpos Mountains." },
        { text: "Use a crossbow + mith grapple on the tall tree to swing across the river." },
        { text: "Talk to Longramble, then to the dying spirit tree." },
        { text: "Use the crystal chime on the dying spirit tree (keep it in your inventory)." },
      ],
    },
    {
      title: "Defeat the Warped Terrorbirds",
      steps: [
        { text: "Travel west into the Poison Waste Dungeon via the sewer entrance." },
        { text: "Navigate to the central pit room with three exits." },
        { text: "Enter the east room and defeat the 3 Warped terrorbirds (level 138)." },
        { text: "Talk to Hazelmere to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "30,000 Strength experience",
    "20,000 Slayer experience",
    "5,000 Thieving experience",
    "5,000 Magic experience",
    "Access to the Poison Waste Dungeon",
    "New Spirit tree destination in the Poison Waste",
    "Ability to receive warped creatures as Slayer assignments",
  ],
};
