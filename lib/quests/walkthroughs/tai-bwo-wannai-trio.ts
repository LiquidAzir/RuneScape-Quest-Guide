import type { QuestWalkthrough } from "../types";

export const taiBwoWannaiTrio: QuestWalkthrough = {
  startPoint: "Talk to Timfraku in his house in Tai Bwo Wannai (south of Brimhaven on Karamja).",
  itemsRequired: [
    "Knife or bladed weapon",
    "Small fishing net",
    "Pestle and mortar",
    "Tinderbox",
    "Iron/steel/mithril/adamant/rune/dragon spear (any tier)",
    "Agility potion (4)",
    "Karamjan rum or 30 coins to buy one",
    "Ranged or magic gear (or a halberd) for monkey kills",
  ],
  recommended: [
    "Combat 30+",
    "30 Firemaking to burn jogre bones",
    "Antipoison + food",
    "Glory amulet for Karamja teleport",
    "Lots of free inventory slots",
  ],
  enemies: ["Monkeys (level 3) — easy kills for a corpse"],
  sections: [
    {
      title: "Prep the food and weapon",
      steps: [
        { text: "Travel to Musa Point and buy Karamjan rum from Zembo (30gp)." },
        { text: "Use a knife on a banana to slice it, then use it on the rum." },
        { text: "Get jogre bones (kill a jogre or trade)." },
        { text: "Burn the jogre bones with a tinderbox to get burnt bones." },
        {
          text: "Fish 45 raw karambwanji with a small net at the river south of Tai Bwo Wannai.",
        },
        { text: "Grind one karambwanji with pestle and mortar to make karambwanji paste." },
        { text: "Apply the paste to the burnt jogre bones, then cook them on a fire to make marinated jogre bones." },
        { text: "Cook a raw karambwan, grind it into paste, then poison your spear with the paste." },
      ],
    },
    {
      title: "Help Lubufu the fisherman",
      steps: [
        { text: "Talk to Lubufu by the fishing spots south of the Tai Bwo Wannai POH portal." },
        { text: "Give him 20 raw karambwanji." },
        { text: "He teaches you to catch karambwan and gives you a karambwan vessel." },
      ],
    },
    {
      title: "Help Tamayu the hunter",
      steps: [
        { text: "Travel via fairy ring DKP south of Musa Point." },
        { text: "Pick up seaweed from the beach." },
        { text: "Use raw karambwanji on the karambwan vessel, then use the baited vessel on Tiadeche." },
        { text: "Travel to fairy ring CKR and run north-east to the mine." },
        { text: "Right-click 'Use' the agility potion (4) and the poisoned spear on Tamayu." },
        { text: "Watch him hunt the Shaikahan." },
        { text: "Kill a monkey with ranged or magic and pick up the corpse." },
        { text: "Use the corpse on Tamayu." },
      ],
    },
    {
      title: "Help Tinsay the priest",
      steps: [
        { text: "Use the seaweed on the monkey skin to make a seaweed sandwich." },
        { text: "Return to fairy ring CKR and walk across the bridge to Cairn Isle." },
        {
          text: "Give Tinsay the rum-with-banana, the seaweed sandwich, and the marinated jogre bones.",
        },
        { text: "Use your karambwan vessel on Tinsay to receive a crafting manual." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Tiadeche near fairy ring DKP and use the crafting manual on him." },
        { text: "Travel back to Tai Bwo Wannai and talk to Timfraku." },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Optional bonus rewards",
      steps: [
        { text: "Talk to Tiadeche near fairy ring DKP for 5,000 Fishing experience." },
        {
          text: "Talk to Tinsay for 5,000 Cooking experience and the ability to fish karambwan with him as the source.",
        },
        {
          text: "Talk to Tamayu for 2,500 Attack/Strength experience and a karambwan-poisoned rune spear.",
        },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,000 coins",
    "5,000 Fishing experience",
    "5,000 Cooking experience",
    "Karambwan-poisoned rune spear (optional)",
    "Ability to catch and cook karambwans (the best food per inventory slot when 'thoroughly cooked')",
  ],
};
