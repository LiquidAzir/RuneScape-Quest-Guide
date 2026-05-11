import type { QuestWalkthrough } from "../types";

export const theTouristTrap: QuestWalkthrough = {
  startPoint: "Talk to Irena south of Shantay Pass (Al Kharid).",
  itemsRequired: [
    "Desert shirt + robe + boots (any colour but black)",
    "Hammer",
    "1+ Bronze bar",
    "10+ Feathers",
    "Shantay pass",
  ],
  recommended: [
    "Combat 20+",
    "Some food",
    "1-2 Full waterskins + knife",
    "Stamina/energy potions",
    "Pickaxe (only if you get trapped)",
  ],
  enemies: ["Mercenary Captain (level 47) — safespottable"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Irena south of Shantay Pass." },
        { text: "Choose 'What's the matter?' to start the quest." },
      ],
    },
    {
      title: "Enter the Desert Mining Camp",
      steps: [
        { text: "Travel south to the Desert Mining Camp." },
        { text: "Defeat the Mercenary Captain (level 47) using ranged or recoil." },
        { text: "Take the gate key from his body." },
        {
          text: "Unequip ALL weapons and armour before entering — guards strip them.",
        },
      ],
    },
    {
      title: "Get into the mine",
      steps: [
        { text: "Talk to the male slave on the east wall when the guards aren't watching." },
        { text: "Trade for slave clothes." },
        { text: "Equip the slave clothes and walk to the mine entrance." },
        { text: "Walk to the guarded inner cave; mention Tenti pineapple to the guard." },
        { text: "Return to the surface, unequip slave robes, leave camp." },
      ],
    },
    {
      title: "Get the technical plans",
      steps: [
        { text: "Travel west to the Bedabin Camp." },
        { text: "Talk to Al Shabim at the Bedabin Camp and get a Bedabin key." },
        { text: "Return to the Mining Camp in slave clothes." },
        { text: "Search the bookcase on the upper floor of the jail building." },
        { text: "Talk to Captain Siad inside the Desert Mining Camp and open his chest for the technical plans." },
      ],
    },
    {
      title: "Make a prototype dart",
      steps: [
        { text: "Show the plans to Al Shabim at Bedabin Camp." },
        { text: "Use a bronze bar on the camp anvil to make a dart tip." },
        { text: "Attach 10 feathers to make the prototype dart." },
        { text: "Give the dart to Al Shabim — he gives you a Tenti pineapple." },
      ],
    },
    {
      title: "Rescue Ana",
      steps: [
        { text: "Travel back to the Mining Camp in slave clothes." },
        { text: "Give the pineapple to the inner mine guard." },
        { text: "Search barrels for an empty one and enter the mine cart." },
        { text: "Travel west-northwest to find Ana." },
        { text: "Put Ana in your barrel." },
        { text: "Return to the mine cart inside the Desert Mining Camp with Ana." },
      ],
    },
    {
      title: "Escape and finish",
      steps: [
        { text: "Put Ana in the winch bucket and raise it." },
        { text: "Talk to the surface guard at the Desert Mining Camp winch — let him help operate the winch." },
        { text: "Place Ana on the wooden cart at the camp centre." },
        { text: "Give the requested jokes to the cart driver." },
        { text: "Board the escape cart." },
        { text: "Return to Irena south of Shantay Pass (Al Kharid)." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "4,650 experience (your choice of Agility, Fletching, Smithing, or Thieving)",
    "Ability to smith dart tips",
    "6 bronze darts",
    "Slave clothes set + Wrought iron key for a private mining area",
  ],
};
