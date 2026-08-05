import type { QuestWalkthrough } from "../types";

export const mourningsEndPartII: QuestWalkthrough = {
  startPoint:
    "Talk to Arianwyn in Lletya — he stands by the small stone circle in the south-east of the village. Use a crystal teleport seed's Lletya teleport to get there; otherwise run north-west out of East Ardougne through the Arandar mountain pass, west into Isafdar, then south-west through the trapped woods to Lletya.",
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
        {
          text: "Talk to Arianwyn in Lletya.",
          travel:
            "Crystal teleport seed to Lletya. Arianwyn is in the south-east of the village next to the stone circle.",
        },
        {
          text: "Wearing full mourner gear, talk to Essyllt in the Mourner HQ basement in West Ardougne for a new key.",
          travel:
            "Ardougne Teleport to the East Ardougne market square, run west past Ardougne Castle and through the gate in the city wall, then north-east across West Ardougne to the Mourner HQ. Equip the full mourner outfit before entering, go down the trapdoor in the centre of the ground floor, and follow the hallway to Essyllt.",
        },
        {
          text: "Unlock the door at the west end of the basement and run west through the cave until you find the dead bodies.",
          travel:
            "The cave mouth is straight west of Essyllt's room — keep heading west past the mourner store rooms into the Temple of Light tunnels.",
        },
        { text: "Search the guard corpse for Edern's journal." },
        { text: "Navigate to the black crystal at the bottom of the temple and chisel a piece off." },
        {
          text: "Return to Arianwyn in Lletya to enchant the new crystal.",
          travel:
            "Crystal teleport seed to Lletya is by far the fastest exit — teleport straight out of the temple rather than walking back through West Ardougne.",
        },
      ],
    },
    {
      title: "Light puzzles (5 chests + Death Altar)",
      steps: [
        {
          text: "Re-enter the Temple of Light and solve the 5 chest puzzles by positioning mirrors and routing coloured light beams to the targets.",
          travel:
            "Same route every trip: West Ardougne teleport tab or Ardougne Teleport, west through the wall gate, north-east to the Mourner HQ, down the trapdoor, then west past Essyllt into the temple. Wear the mourner outfit each time.",
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
        {
          text: "Travel to Lletya and talk to Arianwyn.",
          travel:
            "Crystal teleport seed to Lletya; Arianwyn is by the stone circle in the south-east of the village.",
        },
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
