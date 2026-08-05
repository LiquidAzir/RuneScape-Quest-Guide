import type { QuestWalkthrough } from "../types";

export const theTouristTrap: QuestWalkthrough = {
  startPoint:
    "Talk to Irena on the desert side of Shantay Pass, just south of the gate. Amulet of glory to Al Kharid, then run south out of the town to the Shantay Pass camp, pay/show a Shantay pass and step through the gate — Irena is the woman standing a few steps south of it.",
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
        {
          text: "Talk to Irena just south of the Shantay Pass gate.",
          travel:
            "Amulet of glory → Al Kharid, then run south along the road out of town to the Shantay Pass camp. Buy a Shantay pass from Shantay at the stall, go through the gate, and Irena is standing just beyond it. Without a glory, walk east from Lumbridge through the Al Kharid toll gate and head south.",
        },
        { text: "Choose 'What's the matter?' to start the quest." },
      ],
    },
    {
      title: "Enter the Desert Mining Camp",
      steps: [
        {
          text: "Travel south-east from Shantay Pass to the Desert Mining Camp.",
          travel:
            "Take the magic carpet at Shantay Pass to Bedabin Camp, then run east across the dunes to the walled mining camp. On foot from Shantay Pass, head south then east — bring waterskins, the desert drains your run energy and health.",
        },
        { text: "Defeat the Mercenary Captain (level 47) patrolling outside the camp using ranged or a recoil ring." },
        { text: "Take the gate key from his body." },
        {
          text: "Unequip ALL weapons and armour before entering — the guards strip them.",
        },
      ],
    },
    {
      title: "Get into the mine",
      steps: [
        { text: "Inside the camp, talk to the male slave by the east wall when the guards aren't watching." },
        { text: "Trade him for slave clothes." },
        { text: "Equip the slave clothes and walk to the mine entrance in the middle of the camp." },
        { text: "Walk down to the guarded inner cave and mention the Tenti pineapple to the guard." },
        { text: "Return to the surface, unequip the slave robes, and leave the camp." },
      ],
    },
    {
      title: "Get the technical plans",
      steps: [
        {
          text: "Travel west to the Bedabin Camp and talk to Al Shabim to get a Bedabin key.",
          travel:
            "Run west from the Desert Mining Camp across the dunes to the tented camp, or magic carpet from Shantay Pass straight to Bedabin Camp. Al Shabim is in the largest tent.",
        },
        {
          text: "Return east to the Desert Mining Camp wearing the slave clothes.",
          travel: "Run east from Bedabin Camp back across the dunes to the walled camp; wear the slave clothes before the guards see you.",
        },
        { text: "Search the bookcase on the upper floor of the camp's jail building." },
        { text: "Talk to Captain Siad in the camp and open his chest for the technical plans." },
      ],
    },
    {
      title: "Make a prototype dart",
      steps: [
        {
          text: "Show the plans to Al Shabim at Bedabin Camp.",
          travel: "Run west from the Desert Mining Camp to Bedabin Camp (or magic carpet from Shantay Pass to Bedabin).",
        },
        { text: "Use a bronze bar on the anvil in the Bedabin Camp to make a dart tip." },
        { text: "Attach 10 feathers to make the prototype dart." },
        { text: "Give the dart to Al Shabim — he gives you a Tenti pineapple." },
      ],
    },
    {
      title: "Rescue Ana",
      steps: [
        {
          text: "Travel back east to the Desert Mining Camp in slave clothes.",
          travel: "Run east from Bedabin Camp across the dunes to the walled camp, slave clothes equipped.",
        },
        { text: "Give the pineapple to the inner mine guard." },
        { text: "Search the barrels in the mine for an empty one and climb inside the mine cart." },
        { text: "Push the cart west-north-west through the tunnels to find Ana." },
        { text: "Put Ana in your barrel." },
        { text: "Return with the barrel to the mine cart at the camp end of the tunnels." },
      ],
    },
    {
      title: "Escape and finish",
      steps: [
        { text: "Put Ana in the winch bucket at the mine shaft and raise it." },
        { text: "Talk to the surface guard by the Desert Mining Camp winch and let him help operate it." },
        { text: "Place Ana on the wooden cart at the centre of the camp." },
        { text: "Give the requested jokes to the cart driver." },
        { text: "Board the escape cart." },
        {
          text: "Return to Irena just south of the Shantay Pass gate.",
          travel:
            "The cart drops you outside the camp — run north-west back to Shantay Pass, or magic carpet from Bedabin Camp to Shantay Pass if you would rather ride. Irena is a few steps south of the gate.",
        },
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
