import type { QuestWalkthrough } from "../types";

export const runeMysteries: QuestWalkthrough = {
  startPoint:
    "Talk to the Duke of Lumbridge on the first floor of Lumbridge Castle — cast Lumbridge Home Teleport, walk into the castle courtyard and climb the staircase; the Duke is in the room at the top.",
  itemsRequired: ["None"],
  recommended: ["Lumbridge home teleport for fast travel", "Some run energy"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Climb the stairs of Lumbridge Castle to the first floor.",
          travel: "Lumbridge Home Teleport drops you in the castle courtyard. Enter the castle and take the staircase up one floor — the Duke's room is straight ahead.",
        },
        { text: "Talk to the Duke of Lumbridge." },
        { text: "He hands you the Air talisman and asks you to deliver it to Sedridor at the Wizards' Tower." },
      ],
    },
    {
      title: "Deliver to Sedridor",
      steps: [
        {
          text: "Travel to the Wizards' Tower on the island south-west of Draynor Village.",
          travel:
            "A necklace of passage teleports you right to the Wizards' Tower door. Otherwise: from Lumbridge cross the river by the southern bridge and follow the south road west past the swamp, then cross the short bridge onto the tower's island. Amulet of glory to Draynor Village also works — run south along the coast.",
          notes: ["The tower is the round stone tower on its own island; the entrance is on its east side."],
        },
        { text: "Climb down the ladder to the basement of the Wizards' Tower." },
        { text: "Talk to Archmage Sedridor in the Wizards' Tower basement and give him the Air talisman." },
        { text: "He tells you about the Rune essence mystery and asks you to deliver a research package." },
        { text: "He hands you a research package." },
      ],
    },
    {
      title: "Deliver to Aubury",
      steps: [
        {
          text: "Travel to Aubury's rune shop in south-east Varrock.",
          travel:
            "Varrock Teleport (or a teleport tab) puts you at the central square; run south then east along the road toward the south-east corner of the city — Aubury's shop is the small building marked with the rune shop sign, just north of the south-east gate.",
        },
        { text: "Talk to Aubury in his rune shop and give him the research package." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to Runecrafting (you can now use the Mysterious ruins to enter the Air, Mind, Water etc. altars)",
    "Aubury's teleport to the rune essence mine",
  ],
};
