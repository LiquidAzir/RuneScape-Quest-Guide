import type { QuestWalkthrough } from "../types";

export const kingsRansom: QuestWalkthrough = {
  startPoint:
    "Talk to Gossip outside Sinclair Mansion, north-east of Seers' Village (after Murder Mystery and One Small Favour). Fairy ring CJR lands right beside the mansion; otherwise Camelot Teleport and run north-east up the road past Seers' Village toward the coal trucks.",
  itemsRequired: [
    "Granite (any size)",
    "Air rune + Law rune for Telekinetic Grab",
    "Full black armour set (helm, platebody, plateskirt or platelegs)",
    "Bronze med helm",
    "Iron chainbody",
    "Animate rock scroll (from Wizard Cromperty)",
  ],
  recommended: [
    "Camelot, Ardougne, Salve Graveyard teleports",
    "Combat bracelet or amulet of glory",
    "Dramen/Lunar staff with fairy ring code CJR",
  ],
  sections: [
    {
      title: "Sinclair Mansion investigation",
      steps: [
        {
          text: "Talk to Gossip, the woman standing outside the front gate of Sinclair Mansion.",
          travel:
            "Fairy ring CJR drops you at the mansion's south gate. No fairy ring: Camelot Teleport, run east into Seers' Village, then follow the road north-east past the coal trucks — the mansion is the walled manor house at the top of that road.",
        },
        { text: "Talk to the guard standing in the mansion courtyard." },
        { text: "Break through the smashed window on the east side of the mansion." },
        { text: "Grab the scrap paper from the fireplace in the ground-floor dining room." },
        { text: "Climb the stairs and take the address form from the library table upstairs." },
        { text: "Search the western bookcase in the library for a black knight helm." },
        { text: "Return all 3 items to the guard in the courtyard, exhausting all dialogue options." },
        { text: "Talk to Gossip outside the mansion gate again, exhausting all dialogue options." },
      ],
    },
    {
      title: "Anna's trial",
      steps: [
        {
          text: "Travel to the Seers' Village courthouse for Anna's trial.",
          travel:
            "Walk back south-west down the road from Sinclair Mansion into Seers' Village — the courthouse is at the north end of the village and shows a court icon on the minimap. Camelot Teleport then run east is the fastest approach from scratch.",
        },
        { text: "Talk to Anna in the dock to open the trial." },
        { text: "Call the Dog Handler; ask about poison." },
        { text: "Call the Butler; ask about the dagger." },
        { text: "Call the Maid; ask about the night of the murder." },
        { text: "Ask anyone about the thread." },
        { text: "Exit the courtroom and talk to Anna in the holding cell behind it." },
      ],
    },
    {
      title: "Camelot prison escape",
      steps: [
        {
          text: "Search the stone statue on the path just east of Camelot Castle to trigger a cutscene (you wake up imprisoned).",
          travel:
            "Camelot Teleport, then walk out of the castle's east side — the statue stands beside the road between Camelot and Seers' Village, a few steps from the castle wall.",
        },
        { text: "Talk to Merlin in the cell — pick 'What do we do now?'." },
        { text: "Reach for the vent at the north of the cell." },
        { text: "Use Telekinetic Grab on the guard outside to grab his keys." },
        { text: "Use a hair clip / lockpick on the door and solve the tumbler puzzle." },
        { text: "Climb the staircases to the top floor." },
        {
          text: "Search the table; pick up the round purple box (second from the right).",
        },
      ],
    },
    {
      title: "Save King Arthur",
      steps: [
        {
          text: "Talk to Wizard Cromperty in his house in north-east East Ardougne for the animate rock scroll.",
          travel:
            "Ardougne Teleport lands in the market square — run north-east past the church to the small house tucked in the far north-east corner of the city. Cromperty is inside on the ground floor.",
        },
        {
          text: "Travel to the Black Knights' Fortress north of Falador.",
          travel:
            "Falador Teleport, then run north out of the north gate and north-east along the road — the fortress is the black-walled keep west of Ice Mountain. Amulet of glory to Edgeville also works: run west past the Edgeville Monastery.",
        },
        { text: "Equip your full black armour and enter the fortress via the sturdy door on the south side." },
        { text: "Push the wall to the north." },
        { text: "Climb down the ladder into the fortress basement." },
        { text: "Use the granite + animate rock scroll on the statue trapping King Arthur." },
        { text: "Give Arthur the bronze med helm and iron chainbody." },
        {
          text: "Return to Camelot Castle and talk to King Arthur at the round table.",
          travel:
            "Camelot Teleport drops you at the castle gates — Arthur and the round table are in the large north-western room on the ground floor.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "33,000 Defence experience",
    "5,000 Magic experience",
    "Antique lamp (5,000 XP to any skill 50+)",
    "Access to the Knight Waves Training Grounds (unlocks Chivalry and Piety prayers after training)",
  ],
};
