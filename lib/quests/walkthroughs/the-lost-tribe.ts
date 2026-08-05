import type { QuestWalkthrough } from "../types";

export const theLostTribe: QuestWalkthrough = {
  startPoint:
    "Talk to Sigmund on the first floor of Lumbridge Castle. Lumbridge Home Teleport, then climb the staircase in the north-west corner of the castle courtyard — Sigmund stands beside Duke Horacio in the room at the top.",
  itemsRequired: [
    "Pickaxe",
    "Light source (candle, torch, or oil lamp + tinderbox)",
  ],
  recommended: [
    "Varrock, Falador and Lumbridge teleports",
    "Lockpick (for the H.A.M. Hideout)",
    "Stamina potion if Agility < 70",
  ],
  sections: [
    {
      title: "Investigate the cellar damage",
      steps: [
        {
          text: "Talk to Sigmund on the first floor of Lumbridge Castle and ask about quests.",
          travel:
            "Lumbridge Home Teleport. Enter the castle from the courtyard and take the staircase in the north-west corner up one level — Sigmund is next to Duke Horacio.",
        },
        {
          text: "Question the six Lumbridge witnesses about the cellar damage: Duke Horacio (same room), the Cook (castle kitchen on the ground floor), Hans (wandering the castle courtyard), Father Aereck (Lumbridge church just east of the castle), Bob (Bob's Brilliant Axes, the shop east of the castle across the road), and Gee or Donie (outside the Lumbridge general store, north of the castle).",
          travel:
            "All six are inside Lumbridge itself — no teleports needed. Do the castle three first (Duke upstairs, Cook in the ground-floor kitchen, Hans circling the courtyard), then step out east to the church and Bob's axe shop, and finish at the general store north of the castle.",
        },
        { text: "Report your findings back to Duke Horacio upstairs in Lumbridge Castle." },
        {
          text: "Go down the trapdoor in the Lumbridge Castle kitchen, mine the rubble at the back of the cellar, and pick up the brooch from the cave floor beyond.",
          travel:
            "The trapdoor is in the castle's ground-floor kitchen, in the north-east corner beside the Cook. Bring a pickaxe and a light source before you go down.",
        },
        { text: "Show the brooch to Duke Horacio upstairs." },
      ],
    },
    {
      title: "Research at Varrock library",
      steps: [
        {
          text: "Talk to Reldo in the Varrock Palace library.",
          travel:
            "Varrock Teleport (25 Magic) or a Varrock tablet to Varrock Square, then run north up the main street to the palace. The library is the large room in the palace's west wing on the ground floor. Walking from Lumbridge: follow the road north out of Lumbridge past the cow field and Barbarian Village turn-off.",
        },
        { text: "Search the western bookcase in the library for the book of goblin symbols." },
        { text: "Read the book." },
      ],
    },
    {
      title: "Goblin emote diplomacy",
      steps: [
        {
          text: "Talk to the Goblin Generals (Wartface and Bentnoze) in the hut at Goblin Village.",
          travel:
            "Falador Teleport (37 Magic), then run out of Falador's north gate and head north — Goblin Village sits in the valley between Ice Mountain and the Black Knights' Fortress. The generals are in the largest hut in the middle of the village. From Varrock instead, run west along the road to Barbarian Village, then west/south-west past Ice Mountain.",
        },
        { text: "Mediate between them to learn the Goblin Bow and Goblin Salute emotes." },
      ],
    },
    {
      title: "Meet Mistag",
      steps: [
        {
          text: "Return to the Lumbridge Castle cellar and enter the goblin caves through the hole you mined.",
          travel:
            "Lumbridge Home Teleport, into the castle kitchen (ground floor, north-east corner) and down the trapdoor. Take a light source — the caves are dark.",
        },
        { text: "Follow the map you were given through the caves, sticking to the marked route." },
        { text: "Find Mistag deeper in the caves and perform the Goblin Bow emote at him." },
        { text: "Return to the surface with Mistag." },
      ],
    },
    {
      title: "Frame Sigmund",
      steps: [
        { text: "Tell Duke Horacio about the cave goblins — he disbelieves you." },
        { text: "Pickpocket Sigmund on the castle's first floor for a key, then unlock his chest for H.A.M. robes." },
        {
          text: "Enter the H.A.M. Hideout west of Lumbridge wearing the H.A.M. robes.",
          travel:
            "Leave Lumbridge by the west road toward Draynor Village. About halfway along, look north of the road for the ruined stone building with a trapdoor beside it — that's the hideout entrance. Wear the full H.A.M. robes or bring a lockpick to open it.",
        },
        { text: "Pick the lock on the inner trapdoor and search the crate below for the Duke's silverware." },
        { text: "Return the silverware to Duke Horacio in Lumbridge Castle — Sigmund is fired and you receive a peace treaty." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Go back down the Lumbridge Castle cellar and let Kazgar guide you to Mistag.",
          travel:
            "Castle kitchen trapdoor again (ground floor, north-east corner). Kazgar waits at the cave entrance and walks you through — no light source needed once he leads you.",
        },
        { text: "Show the peace treaty to Mistag for the final cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 Mining experience",
    "Goblin Bow + Goblin Salute emotes",
    "Access to the Dorgesh-Kaan mine",
    "Ring of life",
    "Mining helmet",
  ],
};
