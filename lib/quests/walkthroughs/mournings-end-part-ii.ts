import type { QuestWalkthrough } from "../types";

export const mourningsEndPartII: QuestWalkthrough = {
  startPoint: "Talk to Arianwyn in Lletya.",
  itemsRequired: [
    "Full mourner clothes",
    "Chisel",
    "Death talisman/tiara OR Catalytic talisman/tiara OR Runecraft cape OR 50 junk items",
    "Rope",
  ],
  recommended: [
    "Combat 65+",
    "75+ Agility (91 to never fail obstacles)",
    "43+ Prayer for Protect from Melee",
    "Sharks/anglers, prayer + stamina potions",
    "High Prayer bonus armour",
    "West Ardougne teleport",
  ],
  enemies: ["Shadows (level 73) — aggressive in temple, no mandatory kills"],
  sections: [
    {
      title: "Enter the Temple of Light",
      steps: [
        { text: "Talk to Arianwyn in Lletya." },
        { text: "Wearing mourner gear, talk to Essyllt in the West Ardougne hideout for a new key." },
        { text: "Run west through the cave to find dead bodies." },
        { text: "Search the guard corpse for Edern's journal." },
        { text: "Navigate to the black crystal and chisel a piece off." },
        { text: "Return to Arianwyn in Lletya to enchant the new crystal." },
      ],
    },
    {
      title: "Light puzzles (5 chests + Death Altar)",
      steps: [
        {
          text: "Solve the 5 chest puzzles by positioning mirrors and routing coloured light beams to the targets.",
          notes: [
            "Each puzzle uses different colour combinations (yellow, cyan, blue, green).",
            "The wiki has detailed diagrams; bring patience for the multi-floor routing.",
          ],
        },
        {
          text: "Solve the final Death Altar puzzle — a complex multi-floor route using 3 colours.",
        },
      ],
    },
    {
      title: "Charge the crystal and finish",
      steps: [
        { text: "Gather 50 junk items if you don't have a death/catalytic talisman." },
        { text: "Enter the Death Altar with your new crystal." },
        { text: "Charge the crystal at the altar." },
        { text: "Use the charged crystal on the black crystal at the top floor." },
        { text: "Travel to Lletya and talk to Arianwyn." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "60,000 Agility experience",
    "Crystal trinket (re-entry to the Temple of Light)",
    "Access to the Death Altar (Death runecrafting)",
    "Access to Dark Beasts (Slayer monster + Dark bow drops)",
    "Dark Beasts teleport on Slayer rings",
  ],
};
