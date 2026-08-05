import type { QuestWalkthrough } from "../types";

export const mountainDaughter: QuestWalkthrough = {
  startPoint:
    "Talk to Hamal the Chieftain in the Mountain Camp north-east of Rellekka. Enchanted lyre or Fremennik sea boots 3 to Rellekka (or Camelot Teleport and run north past Sinclair Mansion and the coal trucks), then run north-east up the mountain path and use a rope on the boulder to climb in.",
  itemsRequired: [
    "Rope (to enter the camp the first time)",
    "Pickaxe",
    "Axe",
    "A plank",
    "A staff or pole (a pole spawns near Hamal's house)",
    "Gloves (any)",
  ],
  recommended: [
    "Combat 40+ for The Kendal",
    "Stamina/energy potions",
    "Weight-reducing clothing",
    "8 free inventory slots",
    "Fremennik trials access (Rellekka entry)",
  ],
  enemies: ["The Kendal (level 70) — safespottable using surrounding skeletons"],
  sections: [
    {
      title: "Enter the Mountain Camp",
      steps: [
        {
          text: "Travel to the Mountain Camp entrance north-east of Rellekka.",
          travel:
            "Enchanted lyre or Fremennik sea boots 3 to Rellekka; otherwise Camelot Teleport and run north up the road past Sinclair Mansion and the coal trucks, then north-west into the village. From Rellekka, run east out of the village and then north-east up the rocky mountain path until a boulder blocks the way.",
        },
        { text: "Use a rope on the boulder blocking the path to climb in." },
        { text: "Talk to Hamal the Chieftain in the largest tent and agree to help find his daughter." },
      ],
    },
    {
      title: "Cross to the shining pool",
      steps: [
        { text: "Use a spade on the mud pond south of Hamal's house to dig some mud." },
        { text: "Pick up a pole from north of Hamal's house if you don't have a staff." },
        { text: "Travel north out of the camp, then follow the lake path westward." },
        { text: "Use the mud on the tall tree, then climb up." },
        { text: "Use the pole/staff on the rocks to pole-vault across the gap." },
        { text: "Place the plank on the flat stones to bridge the next gap." },
        { text: "Click the shining pool and accept the spirit's task." },
        { text: "Use the plank again to return to shore." },
      ],
    },
    {
      title: "Make peace between Mountain Camp and Rellekka",
      steps: [
        { text: "Talk to Hamal in the Mountain Camp about Rellekka, then talk to Jokul near the camp entrance before leaving." },
        {
          text: "Find Svidi hiding between Rellekka and the Keldagrim mine entrance.",
          travel:
            "Leave the Mountain Camp and head south-west back toward Rellekka — Svidi lurks on the rocky ground east of the village, near the mine entrance that leads to Keldagrim.",
        },
        {
          text: "Travel to Rellekka and talk to Brundt the Chieftain in the longhall.",
          travel:
            "Enchanted lyre to Rellekka, or run west from Svidi's spot into the village — the longhall is the big hall in the middle of Rellekka.",
        },
        { text: "Return to the Mountain Camp and use a pickaxe on the Ancient Rock." },
        { text: "Bring the half rock to Brundt in the Rellekka longhall — he gives you a safety guarantee." },
        { text: "Deliver the safety guarantee to Svidi east of Rellekka." },
        { text: "Return to Hamal in the Mountain Camp north-east of Rellekka." },
      ],
    },
    {
      title: "The white pearl",
      steps: [
        { text: "Ask Hamal about food supplies, then talk to Jokul near the camp entrance." },
        {
          text: "Travel to White Wolf Mountain.",
          travel:
            "Camelot Teleport and run east to Catherby, then west up the mountain pass; or games necklace to Burthorpe and run east over the mountain from the Taverley side.",
        },
        { text: "Equip gloves and pick white pearls from the thorny bushes on the mountainside." },
        { text: "Eat one white pearl to find a white pearl seed inside." },
        {
          text: "Return the seed to Hamal in the Mountain Camp.",
          travel: "Enchanted lyre to Rellekka, then east and north-east up the mountain path into the camp.",
        },
      ],
    },
    {
      title: "Defeat The Kendal and bury Asleif",
      steps: [
        { text: "Cross back to the shining pool side (no plank needed this time)." },
        { text: "Follow the northern path east to the cave." },
        { text: "Chop down the trees blocking the eastern path." },
        { text: "Enter the cave and fight The Kendal (level 70)." },
        { text: "Take the corpse of woman from inside the cave." },
        { text: "Return to Hamal in the camp and report your victory." },
        { text: "Collect 5 muddy rocks scattered around the camp." },
        { text: "Talk to Ragnar near the tall tree to receive Asleif's necklace." },
        { text: "Return to the shining pool, cross to the island, bury the corpse, and place the muddy rocks on the burial mound." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,000 Prayer experience",
    "1,000 Attack experience",
    "Bearhead",
    "Permanent access to the Mountain Camp without a rope",
  ],
};
