import type { QuestWalkthrough } from "../types";

export const darknessOfHallowvale: QuestWalkthrough = {
  startPoint:
    "Talk to Veliaf Hurtz in the basement of the pub in Burgh de Rott, the ruined town in southern Morytania. Fastest routes: Shades of Mort'ton minigame teleport (or a Mort'ton teleport scroll) then run south down the road, Barrows teleport then run north-west, or Morytania legs 3 to Burgh de Rott directly. On foot: fairy ring CKS to Canifis, then south through Mort Myre to Mort'ton and south again along the road.",
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
        {
          text: "Talk to Veliaf in the basement of the Burgh de Rott pub.",
          travel:
            "Shades of Mort'ton minigame teleport (or Barrows teleport, or Morytania legs 3) then run to Burgh de Rott; otherwise fairy ring CKS to Canifis and run south through Mort Myre and Mort'ton down the road. The pub is the building with the beer-mug icon in the town — climb down its trapdoor to the Myreque basement.",
        },
        {
          text: "Walk to the docks in the south-east of Burgh de Rott and enter the hut containing the boat.",
          travel: "From the pub run south-east to the shoreline — the boat hut is the shed at the end of the ruined pier.",
        },
        { text: "Use planks on the boat and on the boat chute." },
        { text: "Push the boat down the chute and board it." },
      ],
    },
    {
      title: "Enter Meiyerditch",
      steps: [
        { text: "Search the floor on the pier and climb down." },
        { text: "Climb the wall rubble and talk to citizens for context." },
        {
          text: "Talk to Old Man Ral north of the rubble you climbed over.",
          travel:
            "Follow the wall north until it turns inwards; Ral is inside the second building to the east, one building north of Trader Sven.",
        },
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
        {
          text: "Return to Veliaf Hurtz in the Burgh de Rott pub basement.",
          travel: "Leave Meiyerditch the way you came in and sail back, or teleport out and re-run the Mort'ton road south to Burgh de Rott.",
        },
        {
          text: "Talk to Drezel underneath Paterdomus Temple.",
          travel:
            "Salve Graveyard Teleport lands you at the temple. Otherwise fairy ring CKS to Canifis and run west along the road, or run east from Varrock past the Digsite and over the Salve bridge. Drezel is down the stairs in the temple's underground level.",
        },
        { text: "Search the bush south-west of the temple steps." },
        { text: "Drezel gives you Varrock Teleport runes." },
        {
          text: "Teleport to Varrock and talk to King Roald on the ground floor of Varrock Palace.",
          travel: "The teleport puts you in Varrock square; run north into the palace courtyard — Roald paces the throne room on the ground floor.",
        },
        {
          text: "Return to Veliaf in the Burgh de Rott pub basement.",
          travel: "Shades of Mort'ton or Barrows teleport, then run to Burgh de Rott and down the pub trapdoor.",
        },
      ],
    },
    {
      title: "Castle sketches and Vanstrom",
      steps: [
        {
          text: "Return to Meiyerditch and ask a Vyrewatch for a mine escort.",
          travel: "Sail again from the boat hut at the Burgh de Rott docks in the south-east of the town.",
        },
        { text: "Take a pickaxe from the Meiyerditch miner." },
        { text: "Mine 15 daeyalt ore from the wall rocks." },
        { text: "Place the ore on the mine cart and talk to the Vampyre Juvinate." },
        { text: "Navigate back to the hideout." },
        { text: "Talk to Vertida Sefalatis in the Myreque Hideout again." },
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
        { text: "Find the red and yellow tapestry in a building near the eastern wall of Meiyerditch." },
        { text: "Slash the tapestry with a knife." },
        { text: "Use the large ornate key on the vampyre statue." },
        { text: "Cast Telekinetic Grab on Haemalchemy volume 1 in the laboratory." },
        { text: "Return to the hideout and give the volume to Safalaan." },
        {
          text: "Travel back to Burgh de Rott and give the sealed message to Veliaf in the pub basement.",
          travel: "Take the boat back from Meiyerditch, or teleport out and run south to Burgh de Rott.",
        },
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
