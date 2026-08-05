import type { QuestWalkthrough } from "../types";

export const templeOfTheEye: QuestWalkthrough = {
  startPoint:
    "Talk to Wizard Persten on the road just north of Al Kharid, between the Al Kharid city gates and the Lumbridge bridge. Lumbridge Home Teleport, cross the river east over the bridge, then run south-east down the road towards the Al Kharid gate — he wanders the roadside by the river. Amulet of glory to Al Kharid works too: just run north out of the gate.",
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
        {
          text: "Talk to Wizard Persten on the road north of Al Kharid and accept his teleport to the Wizards' Tower to get the eye amulet.",
          travel:
            "Amulet of glory to Al Kharid, then run north out of the city gate onto the river road. No glory: Lumbridge Home Teleport, cross the river bridge east and follow the road south-east.",
        },
        {
          text: "Use the eye amulet on a Mage of Zamorak outside the Chaos Temple in south-east Varrock.",
          travel:
            "Varrock Teleport to the city square, then run south-east past the Varrock east bank and Aubury's rune shop — the Chaos Temple is the small church-like building just south of Aubury's, with the Mages of Zamorak milling around outside.",
        },
        {
          text: "Buy a strong cup of tea from the Tea Seller just inside Varrock's eastern gate.",
          travel: "From the Chaos Temple run north-east to the eastern gate; his stall sits on the main road inside it.",
        },
        {
          text: "Use the tea on the Mage of Zamorak outside the Chaos Temple; he accepts the bribe and teleports you into the Abyss.",
          travel: "Run back south-west to the Chaos Temple by Aubury's shop.",
        },
        { text: "Use the eye amulet on the Dark Mage in the Abyss." },
        { text: "Touch the runic energies in the correct order until all turn white." },
        { text: "Talk to the Dark Mage to get the abyssal incantation." },
      ],
    },
    {
      title: "Help from the wizards",
      steps: [
        {
          text: "Return to Wizard Persten on the road north of Al Kharid and accept the teleport to the Wizards' Tower.",
          travel:
            "Amulet of glory to Al Kharid then run north out of the gate. If you would rather walk into the tower yourself, it is the island south of Draynor Village — glory to Draynor and run south over the bridge.",
        },
        { text: "Go down the staircase to the Wizards' Tower basement and use the abyssal incantation on Archmage Sedridor." },
        { text: "Climb up to the 1st floor of the tower and talk to Wizard Traiborn." },
        {
          text: "Talk to the 3 apprentices wandering the Wizards' Tower (Felix, Tamara, and Cordelia are on different floors — explore the tower to find each).",
        },
        { text: "Return to Wizard Traiborn on the 1st floor and answer 11 to the riddle prompt." },
        { text: "Talk to Sedridor in the Wizards' Tower basement, or Wizard Persten outside the tower, to proceed." },
      ],
    },
    {
      title: "Guardians of the Rift tutorial",
      steps: [
        {
          text: "At the Temple of the Eye, talk to each apprentice and to Wizard Persten to begin the Guardians of the Rift tutorial.",
          travel:
            "Sedridor teleports you straight there at the end of the previous section. To return under your own steam, the temple ruin sits north of Al Kharid on the river road — amulet of glory to Al Kharid and run north.",
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
