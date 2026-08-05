import type { QuestWalkthrough } from "../types";

export const thePathOfGlouphrie: QuestWalkthrough = {
  startPoint:
    "Talk to King Bolren at the totem pole in the centre of the Tree Gnome Village maze (north-west of Castle Wars, south-east of Ardougne). Fastest: take any spirit tree and pick 'Tree Gnome Village' — it lands you beside the totem. Otherwise Ardougne Teleport (51 Magic) and run south-east to the hedge maze, then ask Elkoy at the maze entrance to lead you in.",
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
  ],
  enemies: [
    "3 Warped terrorbirds (level 138) — boss fight",
    "1 Evil creature (level 1)",
  ],
  sections: [
    {
      title: "Help Golrie under the village",
      steps: [
        {
          text: "Talk to King Bolren at the totem in the centre of the Tree Gnome Village and agree to help — the village elder Golrie has gone missing.",
          travel:
            "Spirit tree → Tree Gnome Village drops you next to the totem. No spirit tree yet: Ardougne Teleport (51 Magic), run south-east out of the city to the hedge maze, and talk to Elkoy at the maze entrance to be walked through to the centre.",
        },
        { text: "Squeeze through the loose railing on the village's south side and climb down the ladder into the dungeon." },
        { text: "Talk to Golrie. He explains the village needs an anti-illusion device." },
        { text: "If you don't already have it, take the dungeon key from the crate nearby and unlock the gate." },
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
        {
          text: "Return to King Bolren at the totem in the centre of Tree Gnome Village — an evil creature attacks. Defeat it.",
          travel: "Back out of the storeroom, up the ladder and through the loose railing — the totem is a few steps north.",
        },
        { text: "Finish the dialogue with King Bolren." },
      ],
    },
    {
      title: "Find Hazelmere",
      steps: [
        {
          text: "Talk to Gianne jnr in the Grand Tree restaurant in the Tree Gnome Stronghold.",
          travel:
            "Spirit tree → Tree Gnome Stronghold, or throw a royal/grand seed pod. You arrive by the Grand Tree — enter it and climb the ladder up one floor; Gianne jnr runs the kitchen counter.",
        },
        {
          text: "Travel south from the Tree Gnome Stronghold into the Galarpos Mountains, the snowy range east of the Poison Waste.",
          travel:
            "Leave the Stronghold by the western gate and follow the mountain path south, keeping the Poison Waste on your western side, until you reach the ravine with the tall tree on the far side. Bring stamina potions — it is a long run with no teleport shortcut.",
        },
        { text: "Use a crossbow + mith grapple on the tall tree to swing across the river." },
        { text: "Talk to Longramble, then to the dying spirit tree beside him." },
        { text: "Use the crystal chime on the dying spirit tree (keep the chime in your inventory)." },
      ],
    },
    {
      title: "Defeat the Warped Terrorbirds",
      steps: [
        {
          text: "Enter the Poison Waste Dungeon through the sewer-grate entrance on the western edge of the Poison Waste.",
          travel:
            "From Longramble and the dying spirit tree, head back west across the river and down into the Poison Waste, then follow its western edge until you find the grate. After the quest the dying spirit tree becomes a spirit tree destination, which makes returning trivial.",
        },
        {
          text: "Inside the dungeon, navigate north-east to the central pit room — a large round chamber with three exit corridors.",
        },
        {
          text: "Enter the east corridor and defeat the 3 Warped terrorbirds (level 138) inside.",
        },
        {
          text: "Talk to Hazelmere in his hut on the island east of Yanille to finish the quest.",
          travel:
            "Watchtower Teleport (58 Magic) to the Yanille watchtower, or run south from Ardougne. From Yanille leave by the east gate, follow the path east over the swamp bridge to the small island, and climb the ladder into Hazelmere's hut.",
        },
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
