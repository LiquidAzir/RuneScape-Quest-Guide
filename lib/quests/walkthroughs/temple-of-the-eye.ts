import type { QuestWalkthrough } from "../types";

export const templeOfTheEye: QuestWalkthrough = {
  startPoint:
    "Talk to Wizard Persten standing on the road just north of Al Kharid, between the Al Kharid city gates and the Lumbridge bridge (he wanders the roadside near the river).",
  itemsRequired: [
    "Bucket of water",
    "Chisel (obtainable in-quest)",
    "Pickaxe (obtainable in-quest)",
  ],
  recommended: ["Varrock teleport", "Al Kharid teleport (Lumbridge teleport / glory)"],
  sections: [
    {
      title: "An eye for a favour",
      steps: [
        { text: "Talk to Wizard Persten in Al Kharid; accept the teleport to the Wizards' Tower to get the eye amulet." },
        {
          text: "Use the eye amulet on a Mage of Zamorak — they wander outside the Chaos Temple in south-east Varrock (the small church-like building behind Aubury's rune shop).",
        },
        {
          text: "Walk to the Tea Seller at the east entrance of Varrock (his stall is just inside the eastern gate) and buy a strong cup of tea.",
        },
        {
          text: "Use the tea on the Mage of Zamorak outside the Chaos Temple; he accepts the bribe and teleports you into the Abyss.",
        },
        { text: "Use the eye amulet on the Dark Mage in the Abyss." },
        { text: "Touch the runic energies in the correct order until all turn white." },
        { text: "Talk to the Dark Mage to get the abyssal incantation." },
      ],
    },
    {
      title: "Help from the wizards",
      steps: [
        { text: "Return to Wizard Persten in Al Kharid; accept the teleport to the Wizards' Tower." },
        { text: "Go down to the basement and use the abyssal incantation on Archmage Sedridor." },
        { text: "Climb to the second floor and talk to Wizard Traiborn." },
        {
          text: "Talk to the 3 apprentices wandering the Wizards' Tower (Felix, Tamara, and Cordelia are on different floors — explore the tower to find each).",
        },
        { text: "Return to Wizard Traiborn on the 1st floor of the Wizards' Tower and answer 11 to the riddle prompt." },
        { text: "Talk to Sedridor in the Wizards' Tower basement or Wizard Persten near the Tower of Wizards to proceed." },
      ],
    },
    {
      title: "Guardians of the Rift tutorial",
      steps: [
        {
          text: "Travel to the Temple of the Eye (the new ruin north of Al Kharid where Wizard Persten now waits — you're teleported there at the end of the previous section). Talk to each apprentice and Wizard Persten there to begin the Guardians of the Rift tutorial.",
        },
        { text: "Follow the on-screen arrow prompts." },
        { text: "Complete guardian assembly, mining, and essence-crafting tasks." },
        { text: "Charge cells at the Mind and Water altars." },
        { text: "Power up The Great Guardian multiple times." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "~9,210 Runecraft experience total",
    "Access to the Guardians of the Rift minigame (best Runecraft training method)",
    "Free medium pouch",
  ],
};
