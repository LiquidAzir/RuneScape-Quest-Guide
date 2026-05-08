import type { QuestWalkthrough } from "../types";

export const darknessOfHallowvale: QuestWalkthrough = {
  startPoint: "Talk to Veliaf Hurtz in the Burgh de Rott pub basement.",
  itemsRequired: [
    "8 Nails",
    "2 Planks",
    "Hammer",
    "Knife",
    "Pickaxe (obtainable in-quest)",
    "Air rune + Law rune (Telekinetic Grab)",
    "Some food",
  ],
  recommended: [
    "Combat 50+",
    "Stamina/energy potions (lots of running and agility shortcuts)",
    "43 Prayer for Protect from Melee on Vanstrom encounter",
    "Salve Graveyard teleport / Drakan's medallion (post-quest only)",
  ],
  enemies: [
    "Vanstrom Klause encounter (cannot be killed; survive 5 hits)",
  ],
  sections: [
    {
      title: "Travel to Meiyerditch",
      steps: [
        { text: "Talk to Veliaf in the Burgh de Rott pub basement." },
        { text: "Walk to the docks south-east of the village." },
        { text: "Use planks on the boat and on the boat chute." },
        { text: "Push the boat down the chute and board it." },
      ],
    },
    {
      title: "Enter Meiyerditch",
      steps: [
        { text: "Search the floor on the pier and climb down." },
        { text: "Climb the wall rubble and talk to citizens for context." },
        { text: "Talk to Old Man Ral north of the entrance." },
        { text: "Climb the ladder in the building south-west of Ral." },
      ],
    },
    {
      title: "Sickle-logo agility course",
      steps: [
        {
          text: "Navigate the rooftop course following sickle logos: jump gaps, climb walls.",
          notes: ["Watch for the door key in pots near the eastern door."],
        },
        { text: "Find the ladder top in the western wall." },
        { text: "Repair the broken ladder with the ladder top." },
        { text: "Find the sickle-logo house and climb the ladder." },
        { text: "Use a knife on the wall to find the hidden entrance." },
        { text: "Open the lumpy rug to access the hideout." },
      ],
    },
    {
      title: "Myreque update",
      steps: [
        { text: "Talk to Vertida Sefalatis in the hideout." },
        { text: "Return to Veliaf Hurtz in Burgh de Rott." },
        { text: "Travel to Paterdomus Temple. Talk to Drezel underneath the temple." },
        { text: "Search the bush south-west of the temple steps." },
        { text: "Drezel gives you Varrock Teleport runes." },
        { text: "Teleport to Varrock and talk to King Roald in the palace." },
        { text: "Return to Veliaf." },
      ],
    },
    {
      title: "Castle sketches and Vanstrom",
      steps: [
        { text: "Return to Meiyerditch. Ask a Vyrewatch for a mine escort." },
        { text: "Take a pickaxe from the Meiyerditch miner." },
        { text: "Mine 15 daeyalt ore from the wall rocks." },
        { text: "Place the ore on the mine cart and talk to the Vampyre Juvinate." },
        { text: "Navigate back to the hideout." },
        { text: "Talk to Vertida again." },
        { text: "Climb the castle wall from Meiyerditch and find the 3 sickle logos on the north, west, and south walls." },
        { text: "Use papyrus on the charcoal to make the 3 sketches." },
        { text: "Endure 5 attacks from Vanstrom Klause (you can't kill him, just survive)." },
        { text: "Find the fireplace in a house, use the knife to find a hidden message." },
        { text: "Use the knife on the portrait to get a large ornate key." },
      ],
    },
    {
      title: "Laboratory and finish",
      steps: [
        { text: "Return to the hideout and talk to Safalaan." },
        { text: "Find the red and yellow tapestry in a building near the eastern wall." },
        { text: "Slash the tapestry with a knife." },
        { text: "Use the large ornate key on the vampyre statue." },
        { text: "Cast Telekinetic Grab on Haemalchemy volume 1 in the laboratory." },
        { text: "Return to the hideout and give the volume to Safalaan." },
        { text: "Travel back to Burgh de Rott and give the sealed message to Veliaf." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "7,000 Agility experience",
    "6,000 Thieving experience",
    "2,000 Construction experience",
    "Tome of experience (2,000 XP to any 3 skills level 30+)",
    "Access to two shortcut doors in Meiyerditch",
  ],
};
