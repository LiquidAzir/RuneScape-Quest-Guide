import type { QuestWalkthrough } from "../types";

export const treeGnomeVillage: QuestWalkthrough = {
  startPoint:
    "Talk to King Bolren at the spirit tree in the centre of Tree Gnome Village. Get there with a ring of dueling to Castle Wars then a run north-east to the tall hedge maze (no ring: Ardougne Teleport and run south past the Khazard Battlefield). Elkoy stands at the maze entrance — talk to him and he walks you straight to the centre.",
  itemsRequired: ["6 Normal logs", "Combat gear", "Food"],
  recommended: [
    "Combat 45+ recommended (Khazard warlord is level 112)",
    "Range or magic for safespotting the warlord",
    "Stamina potion",
    "Ring of dueling (Castle Wars) for the trips back and forth",
  ],
  enemies: [
    "Khazard warlord (level 112) — the boss, can be safespotted",
    "Khazard troopers (level 33) and commanders (level 48) — usually avoidable",
  ],
  sections: [
    {
      title: "Start the quest and meet the gnomes",
      steps: [
        {
          text: "Enter the Tree Gnome Village hedge maze and follow the path to King Bolren at the spirit tree in the centre.",
          travel:
            "Ring of dueling to Castle Wars, then run north-east along the road until the tall hedge maze appears. Without a ring of dueling, cast Ardougne Teleport and run south past the Khazard Battlefield. Talk to Elkoy at the maze entrance and pick the option to be led through — he walks you to the centre in seconds, which is far faster than solving the maze.",
          notes: ["If you insist on walking the maze yourself, hug the left-hand hedge wall the whole way in."],
        },
        { text: "Talk to King Bolren at the spirit tree in the centre of Tree Gnome Village and agree to help the gnomes." },
        { text: "Talk to Elkoy in the village centre and ask him to guide you back out of the maze." },
        {
          text: "Walk west out of the maze into the Khazard Battlefield.",
          travel:
            "Elkoy drops you at the western side of the maze. Run west through the wooden gate — the open ground with the burning tents and patrolling Khazard troopers is the battlefield.",
        },
        {
          text: "Talk to Commander Montai at the gnome encampment on the eastern side of the battlefield, nearest the maze.",
          travel:
            "Montai is straight ahead as you come out of the maze — the cluster of gnome tents just inside the battlefield's east edge. You can walk around the troopers; they are aggressive only if you get close.",
        },
        { text: "Give Commander Montai 6 normal logs to fortify the camp." },
      ],
    },
    {
      title: "Find the three tracker gnomes",
      steps: [
        {
          text: "Find Tracker gnome 1 wandering north-west of the Khazard stronghold.",
          travel:
            "All three trackers are out on the battlefield west of Montai's camp. The battlefield is small — run a loop from the camp along the north edge, then down the west side, and you will pass all three.",
        },
        {
          text: "Find Tracker gnome 2 inside one of the small buildings east of the stronghold.",
        },
        {
          text: "Find Tracker gnome 3 in the south-west corner of the battlefield. He gives you the ballista coordinates.",
        },
        {
          text: "Operate the ballista beside Tracker gnome 3 in the south-west of the battlefield using the coordinates he gave you.",
        },
      ],
    },
    {
      title: "Recover the orb of protection",
      steps: [
        {
          text: "Walk north to the Khazard stronghold and climb over the crumbled wall the ballista breached.",
          travel:
            "From the ballista in the south-west, run north along the battlefield's western edge. The stronghold is the walled compound in the north-west corner; the ballista shot has knocked a hole in its wall — climb the rubble to get inside.",
        },
        { text: "Climb the ladder inside the stronghold and search the chest at the top for the orb of protection." },
        {
          text: "Leave through the front door and return to King Bolren in the village centre.",
          travel:
            "Run back east across the battlefield to the maze and talk to Elkoy at the entrance — he leads you to the centre again.",
        },
      ],
    },
    {
      title: "Defeat the Khazard warlord",
      steps: [
        { text: "Talk to King Bolren at the spirit tree — he tells you the warlord stole the other two orbs." },
        {
          text: "Travel back to the Khazard battlefield and find the Khazard warlord in the north-west, near the stronghold.",
          travel:
            "Talk to Elkoy in the village centre to be led out of the maze, run west into the battlefield, then head north-west past the Khazard tents. The warlord stands in the open ground just short of the stronghold wall.",
        },
        {
          text: "Defeat the Khazard warlord (level 112) and pick up both orbs.",
          notes: ["Safespot with range/magic from behind the fence to make this trivial at low levels."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return both orbs to King Bolren in the village centre.",
          travel: "Run back east to the maze and talk to Elkoy at the entrance to be led straight to Bolren.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "11,450 Attack experience",
    "Access to spirit tree fast travel network (Tree Gnome Village + others)",
    "Gnome amulet",
  ],
};
