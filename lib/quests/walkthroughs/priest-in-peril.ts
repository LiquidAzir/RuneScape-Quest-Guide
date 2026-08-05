import type { QuestWalkthrough } from "../types";

export const priestInPeril: QuestWalkthrough = {
  startPoint:
    "Talk to King Roald in the throne room of Varrock Palace. Varrock Teleport lands you in the central square — run north past the fountain and through the palace courtyard; the throne room is the central hall on the ground floor.",
  itemsRequired: [
    "50 unnoted rune essence or pure essence",
    "Bucket",
    "A weapon you don't mind using on the Temple Guardian and a Monk of Zamorak",
  ],
  recommended: [
    "Combat 15+",
    "Essence pouches to carry the 50 essence in fewer trips",
    "3 Varrock teleports for the back-and-forth",
    "Some food",
  ],
  enemies: [
    "Temple Guardian (level 30) — immune to magic; use melee or ranged",
    "Monk of Zamorak (level 30)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to King Roald in the Varrock Palace throne room and accept the quest.",
          travel:
            "Varrock Teleport to the square, then run north into the palace grounds and through the front doors — Roald stands by the throne in the central hall.",
        },
        {
          text: "Travel east of Varrock to the Paterdomus Temple on the River Salve.",
          travel:
            "Leave Varrock by the east gate, follow the road east, then turn north-east up the Silvarea mountain path between the peaks. The temple sits at the end of the path on the near bank of the River Salve.",
        },
        { text: "Click the front door of the temple and select 'Roald sent me'." },
        { text: "Climb the trapdoor up to the top floor." },
        { text: "Kill the Temple Guardian (level 30) — use melee or ranged, not magic." },
      ],
    },
    {
      title: "Free Drezel",
      steps: [
        {
          text: "Return to King Roald in Varrock Palace for an update.",
          travel:
            "Varrock Teleport straight to the square and run north into the palace — much faster than walking back over Silvarea.",
        },
        {
          text: "Gather 50 unnoted essence and a bucket, then return to the temple.",
          travel:
            "Mine essence by talking to Aubury in his rune shop in south-east Varrock — he teleports you to the essence mine and the 'Teleport' option on him brings you back. Then run east out of Varrock and north-east up Silvarea to Paterdomus.",
        },
        { text: "Climb upstairs in the temple and talk to Drezel through the cell wall." },
        { text: "Go down to the basement monument room." },
        { text: "Kill the Monk of Zamorak on the lower floor for a golden key." },
        {
          text: "Inspect each of the four monuments until you find the one mentioning a key. Use the golden key on it to get an iron key.",
        },
        { text: "Use a bucket on the well to fill it. The water becomes blessed." },
        { text: "Climb back up to Drezel's cell, use the iron key on the door, and use the blessed bucket on the coffin inside." },
      ],
    },
    {
      title: "Cross the River Salve",
      steps: [
        { text: "Talk to Drezel in the Paterdomus Temple cell — he says he'll bless the river if you bring him 50 unnoted essence." },
        {
          text: "Bring him the 50 essence (typically 2 trips with a pouch or 1 trip with an essence pouch set).",
          travel:
            "For each trip: Varrock Teleport, run south-east to Aubury for the essence mine teleport, mine, teleport back, then run east and north-east up Silvarea to the temple.",
        },
        { text: "Hand it over to complete the quest." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,406 Prayer experience",
    "Wolfbane dagger (prevents werewolves from transforming)",
    "Access to Morytania (Canifis, Mort'ton, the Salve, etc.)",
    "5 Kudos at the Varrock Museum",
  ],
};
