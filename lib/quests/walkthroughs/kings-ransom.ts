import type { QuestWalkthrough } from "../types";

export const kingsRansom: QuestWalkthrough = {
  startPoint: "Talk to Gossip outside Sinclair Mansion (after Murder Mystery and One Small Favour).",
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
        { text: "Talk to Gossip outside Sinclair Mansion." },
        { text: "Talk to the guard in the courtyard." },
        { text: "Break through the smashed window on the east side." },
        { text: "Grab the scrap paper from the dining room fireplace." },
        { text: "Take the address form from the library upstairs." },
        { text: "Search the western bookcase for a black knight helm." },
        { text: "Return all 3 items to the guard, exhausting all dialogue options." },
        { text: "Talk to Gossip again exhausting all dialogue options." },
      ],
    },
    {
      title: "Anna's trial",
      steps: [
        { text: "Travel to the Seers' Village courthouse." },
        { text: "Talk to Anna." },
        { text: "Call the Dog Handler; ask about poison." },
        { text: "Call the Butler; ask about the dagger." },
        { text: "Call the Maid; ask about the night of the murder." },
        { text: "Ask anyone about the thread." },
        { text: "Exit the courtroom and talk to Anna in her cell." },
      ],
    },
    {
      title: "Camelot prison escape",
      steps: [
        { text: "Search the statue east of Camelot to trigger a cutscene (you wake up imprisoned)." },
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
        { text: "Talk to Wizard Cromperty in Ardougne for the animate rock scroll." },
        { text: "Travel to the Black Knights' Fortress west of Edgeville." },
        { text: "Equip black armour and enter via the sturdy door." },
        { text: "Push the wall to the north." },
        { text: "Climb down the ladder." },
        { text: "Use the granite + animate rock scroll on the statue trapping King Arthur." },
        { text: "Give Arthur the bronze med helm and iron chainbody." },
        { text: "Return to Camelot and talk to Arthur by the round table." },
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
