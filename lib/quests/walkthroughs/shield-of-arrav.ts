import type { QuestWalkthrough } from "../types";

export const shieldOfArrav: QuestWalkthrough = {
  startPoint:
    "Talk to Reldo the librarian in the Varrock Palace library. Varrock Teleport to the central square, run north through the palace gates, then take the west wing — the library is the book-lined room on the palace's western side.",
  itemsRequired: [
    "Phoenix Gang path: 20 coins",
    "Black Arm Gang path: 2 Phoenix crossbows (in-quest)",
  ],
  recommended: [
    "Combat 10+",
    "A friend on the opposite gang to swap shield halves with (or do both gangs solo on different accounts)",
  ],
  enemies: [
    "Weaponsmaster (level 23) — Black Arm path",
    "Jonny the Beard (level 2) — Phoenix path",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Reldo in the Varrock Palace library.",
          travel:
            "Varrock Teleport (25 Magic) or a teleport tab lands you at the central square; run north into the palace courtyard and enter, then head west into the library wing. No teleport: run north from Lumbridge and in through Varrock's south gate.",
        },
        { text: "Check the bookcase with the bright blue book on the top shelf and read it." },
        { text: "Talk to Reldo again in the Varrock Palace library and choose your gang affiliation." },
      ],
    },
    {
      title: "Black Arm Gang path",
      steps: [
        {
          text: "Talk to Charlie the Tramp loitering by Varrock's southern entrance.",
          travel: "From the central square run south down the main road to the city's south gate — Charlie sits by the road just outside it.",
        },
        {
          text: "Enter the Black Arm Gang headquarters in south-west Varrock through the alley door.",
          travel: "Head north-west from the south gate into the south-west corner of the city; the hideout is the plain building reached through the narrow alley behind the houses west of the Blue Moon Inn.",
        },
        { text: "Talk to Katrine and trade your partner's name for a weapon store key." },
        {
          text: "Travel to the Phoenix Gang weapon store in south-east Varrock and climb down the ladder inside.",
          travel: "From the square run south then east along the road past Aubury's rune shop; the weapon store is the small unmarked building in the south-east of the city — use the key on its door and climb down.",
        },
        { text: "Get 2 Phoenix crossbows (kill the Weaponsmaster or use Telekinetic Grab)." },
        { text: "Return the crossbows to Katrine in the Black Arm hideout." },
        { text: "Open the cupboard upstairs in the hideout to get the right half of the shield." },
      ],
    },
    {
      title: "Phoenix Gang path",
      steps: [
        {
          text: "Talk to Baraek the fur trader in Varrock Square with 20gp.",
          travel: "Baraek stands at his fur stall in the middle of Varrock's central square, just west of the fountain — Varrock Teleport lands you beside him.",
        },
        {
          text: "Travel to the Phoenix Gang hideout in south-east Varrock and climb down the ladder inside.",
          travel: "From the square run south, then east along the road past Aubury's rune shop — the hideout is entered from the small building in the south-east of the city.",
        },
        { text: "Talk to Straven in the Phoenix Gang hideout and accept the membership task." },
        {
          text: "Kill Jonny the Beard in the Blue Moon Inn and pick up the Intel report.",
          travel: "The Blue Moon Inn is the pub on the south side of Varrock's main east-west road, a short run west of the central square.",
        },
        { text: "Return the report to Straven in the hideout." },
        { text: "Open the chest in the hideout's south-west corner for the shield half." },
        { text: "Trade the weapon store key to your partner." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Take the shield half to Curator Haig Halen in the Varrock Museum.",
          travel: "From the central square run east and then north — the museum is the big building east of the square, just south of the palace grounds. The Curator stands on the ground floor near the entrance.",
        },
        { text: "Exchange certificate halves with your partner." },
        { text: "Combine the certificate halves." },
        {
          text: "Deliver the certificate to King Roald in Varrock Palace.",
          travel: "Run north from the square through the palace gates; King Roald is in the throne room on the ground floor, straight ahead from the main entrance.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "600 coins",
    "5 Kudos + Antique lamp (1,000 XP in any 20+ skill) from Historian Minas",
  ],
};
