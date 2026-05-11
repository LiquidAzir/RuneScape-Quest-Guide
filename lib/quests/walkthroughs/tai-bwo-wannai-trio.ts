import type { QuestWalkthrough } from "../types";

export const taiBwoWannaiTrio: QuestWalkthrough = {
  startPoint:
    "Talk to Timfraku inside his hut in the centre of Tai Bwo Wannai village (south of Brimhaven on Karamja — walk south from Brimhaven on the jungle path, or fairy ring CKR + run east).",
  itemsRequired: [
    "Knife or any bladed weapon",
    "Small fishing net",
    "Pestle and mortar",
    "Tinderbox",
    "Iron / steel / mithril / adamant / rune / dragon spear (any tier — to be poisoned)",
    "Agility potion (4 doses)",
    "Karamjan rum (or 30gp to buy one from Zambo on Musa Point)",
    "Ranged or magic gear (or a halberd) for the monkey kill",
  ],
  recommended: [
    "Combat 30+",
    "30 Firemaking to burn jogre bones into burnt bones",
    "Antipoison + food (jungle has poison spiders)",
    "Glory amulet for Karamja teleport (Karamja gloves let you use it free)",
    "Lots of free inventory slots (this quest carries many ingredients)",
  ],
  enemies: ["Monkeys (level 3) — easy kills near Cairn Isle for a corpse"],
  sections: [
    {
      title: "Prep the food and weapon",
      steps: [
        {
          text: "Travel to Musa Point on Karamja (boat from Port Sarim 30gp). Walk to Zambo's bar in the centre of Musa Point and buy a Karamjan rum.",
        },
        {
          text: "Use a knife on a banana to slice it (banana trees grow east of Musa Point), then use the sliced banana on the rum.",
        },
        {
          text: "Get jogre bones — kill a jogre in the jungle north-west of Tai Bwo Wannai, or buy from the Grand Exchange.",
        },
        {
          text: "Burn the jogre bones with a tinderbox on a fire to get burnt jogre bones.",
        },
        {
          text: "Travel south of Tai Bwo Wannai to the river fishing spots and catch 45 raw karambwanji with a small fishing net.",
        },
        {
          text: "Use a pestle and mortar on 1 raw karambwanji to make karambwanji paste.",
        },
        {
          text: "Apply the paste to the burnt jogre bones, then cook them on a fire to make marinated jogre bones.",
        },
        {
          text: "Cook a raw karambwan (need karambwan from Lubufu — see next section, then come back) at a range, grind into paste, and use the paste on your spear to poison it.",
        },
      ],
    },
    {
      title: "Help Lubufu the fisherman",
      steps: [
        {
          text: "Talk to Lubufu by the river fishing spots south of the Tai Bwo Wannai POH portal (he's the fisherman in a straw hat sitting by the riverbank).",
        },
        {
          text: "Give him 20 raw karambwanji.",
        },
        {
          text: "He teaches you to catch karambwan and gives you a karambwan vessel.",
        },
      ],
    },
    {
      title: "Help Tamayu the hunter",
      steps: [
        {
          text: "Travel to fairy ring DKP just south of Musa Point.",
        },
        {
          text: "Pick up seaweed from the beach near the fairy ring.",
        },
        {
          text: "Use a raw karambwanji on the karambwan vessel to bait it, then use the baited vessel on Tiadeche (the fisherman teen near fairy ring DKP).",
        },
        {
          text: "Travel to fairy ring CKR (just east of Cairn Isle) and run north-east to the small Karamja jungle mine.",
        },
        {
          text: "Right-click 'Use' the Agility potion (4) AND the poisoned spear on Tamayu (the hunter at the mine).",
        },
        {
          text: "Watch his cutscene as he hunts the Shaikahan — wait for it to finish.",
        },
        {
          text: "Kill a level-3 monkey (the small monkeys nearby) using ranged or magic and pick up the monkey corpse.",
        },
        {
          text: "Use the corpse on Tamayu.",
        },
      ],
    },
    {
      title: "Help Tinsay the priest",
      steps: [
        {
          text: "Use the seaweed on the monkey skin to make a seaweed sandwich.",
        },
        {
          text: "Travel back to fairy ring CKR and walk west across the bridge to Cairn Isle.",
        },
        {
          text: "Find Tinsay sitting on Cairn Isle (small island west of Tai Bwo Wannai). Give him: the rum-with-banana, the seaweed sandwich, and the marinated jogre bones.",
        },
        {
          text: "Use your karambwan vessel on Tinsay — he hands you a crafting manual.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Travel back to fairy ring DKP and use the crafting manual on Tiadeche.",
        },
        {
          text: "Travel to Tai Bwo Wannai and talk to Timfraku in his central hut.",
        },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Optional bonus rewards",
      steps: [
        {
          text: "Talk to Tiadeche near fairy ring DKP again for 5,000 Fishing experience.",
        },
        {
          text: "Talk to Tinsay on Cairn Isle for 5,000 Cooking experience and the ability to fish karambwan.",
        },
        {
          text: "Talk to Tamayu at the Karamja mine (fairy ring CKR + north-east) for 2,500 Attack/Strength experience and a karambwan-poisoned rune spear.",
        },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,000 coins",
    "5,000 Fishing experience",
    "5,000 Cooking experience",
    "Karambwan-poisoned rune spear (optional, from Tamayu)",
    "Ability to catch and cook karambwans (best food per inventory slot when 'thoroughly cooked')",
  ],
};
