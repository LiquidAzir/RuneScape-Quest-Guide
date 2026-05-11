import type { QuestWalkthrough } from "../types";

export const templeOfTheEye: QuestWalkthrough = {
  startPoint: "Talk to Wizard Persten just north of Al Kharid (between Al Kharid and the Lumbridge gate).",
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
        { text: "Use the eye amulet on the Mage of Zamorak at the Altar of Chaos in Varrock." },
        { text: "Talk to the Tea Seller at the eastern entrance of Varrock for a strong cup of tea." },
        { text: "Use the tea on the Mage of Zamorak; accept the teleport into the Abyss." },
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
        { text: "Talk to the 3 apprentices: Felix, Tamara, and Cordelia." },
        { text: "Return to Traiborn and answer 11 to the riddle prompt." },
        { text: "Talk to Sedridor or Persten to proceed." },
      ],
    },
    {
      title: "Guardians of the Rift tutorial",
      steps: [
        { text: "Talk to each apprentice and Wizard Persten to begin the tutorial." },
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
