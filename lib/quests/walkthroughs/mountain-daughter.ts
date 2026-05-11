import type { QuestWalkthrough } from "../types";

export const mountainDaughter: QuestWalkthrough = {
  startPoint: "Talk to Hamal the Chieftain in the Mountain Camp east of Rellekka.",
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
        { text: "Walk north-east from Rellekka to the Mountain Camp entrance." },
        { text: "Use a rope on the boulder blocking the path to climb in." },
        { text: "Talk to Hamal the Chieftain in the Mountain Camp east of Rellekka. Agree to help find his daughter." },
      ],
    },
    {
      title: "Cross to the shining pool",
      steps: [
        { text: "Use a spade on the mud pond south of Hamal's house to dig some mud." },
        { text: "Pick up a pole from north of Hamal's house if you don't have a staff." },
        { text: "Travel north along the lake path westward." },
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
        { text: "Talk to Hamal about Rellekka, then talk to Jokul before leaving." },
        { text: "Find Svidi between Rellekka and the Keldagrim entrance." },
        { text: "Travel to Rellekka and talk to Brundt the Chieftain in the longhall." },
        { text: "Return to the Mountain Camp and use a pickaxe on the Ancient Rock." },
        { text: "Bring the half rock to Brundt — he gives you a safety guarantee." },
        { text: "Deliver the safety guarantee to Svidi." },
        { text: "Return to Hamal." },
      ],
    },
    {
      title: "The white pearl",
      steps: [
        { text: "Ask Hamal about food supplies, then talk to Jokul." },
        { text: "Travel to White Wolf Mountain." },
        { text: "Equip gloves and pick white pearls from the thorny bushes." },
        { text: "Eat one white pearl to find a white pearl seed inside." },
        { text: "Return the seed to Hamal." },
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
        { text: "Return to Hamal and report your victory." },
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
