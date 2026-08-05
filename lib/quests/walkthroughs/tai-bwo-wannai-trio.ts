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
          text: "Buy a Karamjan rum from Zambo in the bar in the centre of Musa Point.",
          travel:
            "Amulet of glory to Karamja drops you at Musa Point (free with Karamja gloves, otherwise the 30gp boat from Port Sarim's northern pier). The bar is the building just south-west of the Musa Point docks.",
        },
        {
          text: "Use a knife on a banana to slice it, then use the sliced banana on the rum.",
          travel: "Banana trees grow in the plantation just east of Musa Point, past the general store — pick one there.",
        },
        {
          text: "Get jogre bones by killing a jogre in the jungle north-west of Tai Bwo Wannai, or buy a set from the Grand Exchange.",
          travel: "From Tai Bwo Wannai head north-west into the jungle clearing between the village and Brimhaven; jogres roam there in the open.",
        },
        {
          text: "Burn the jogre bones with a tinderbox on a fire to get burnt jogre bones.",
        },
        {
          text: "Catch 45 raw karambwanji with a small fishing net at the river fishing spots south of Tai Bwo Wannai.",
          travel:
            "Fairy ring CKR then run east to Tai Bwo Wannai, or walk south from Brimhaven down the jungle path. The karambwanji spots are on the riverbank a short run south of the village, by the house portal.",
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
          text: "Talk to Lubufu, the fisherman in a straw hat sitting on the riverbank south of the Tai Bwo Wannai house portal.",
          travel: "From Timfraku's hut in the centre of Tai Bwo Wannai, run south past the house portal to the river — Lubufu sits by the water beside his boat.",
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
          text: "Travel to Tiadeche's camp on the east coast of Karamja, at fairy ring DKP.",
          travel:
            "Fairy ring DKP puts you right at the camp. No fairy rings: boat to Musa Point and run south-east down the coast past the volcano to the beach camp.",
        },
        {
          text: "Pick up seaweed from the beach beside the fairy ring.",
        },
        {
          text: "Use a raw karambwanji on the karambwan vessel to bait it, then use the baited vessel on Tiadeche, the young fisherman at the camp.",
        },
        {
          text: "Travel to the small Karamja jungle mine where Tamayu is hunting.",
          travel:
            "Fairy ring CKR (just east of Cairn Isle), then run north-east into the jungle to the little mining site. No fairy rings: from Tai Bwo Wannai run west and then north-west along the river.",
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
          text: "Travel back to fairy ring CKR and cross west onto Cairn Isle.",
          travel:
            "Fairy ring CKR, then run west to the rock face and use the Cairn Isle climbing rocks (10 Agility) to cross. No fairy ring: run west out of Tai Bwo Wannai along the south coast to the same rocks.",
        },
        {
          text: "Give Tinsay on Cairn Isle the rum-with-banana, the seaweed sandwich and the marinated jogre bones.",
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
          text: "Travel back to Tiadeche's camp and use the crafting manual on him.",
          travel: "Fairy ring DKP drops you at the camp on Karamja's east coast.",
        },
        {
          text: "Return to Tai Bwo Wannai and talk to Timfraku in his hut in the centre of the village.",
          travel:
            "Fairy ring CKR then run east into the village, or walk south from Brimhaven down the jungle path. Timfraku is upstairs in the large hut in the middle of Tai Bwo Wannai.",
        },
        { text: "Quest complete." },
      ],
    },
    {
      title: "Optional bonus rewards",
      steps: [
        {
          text: "Talk to Tiadeche again at his east-coast camp for 5,000 Fishing experience.",
          travel: "Fairy ring DKP.",
        },
        {
          text: "Talk to Tinsay on Cairn Isle for 5,000 Cooking experience and the ability to fish karambwan.",
          travel: "Fairy ring CKR, then west over the Cairn Isle climbing rocks (10 Agility).",
        },
        {
          text: "Talk to Tamayu at the Karamja jungle mine for 2,500 Attack and Strength experience and a karambwan-poisoned rune spear.",
          travel: "Fairy ring CKR, then run north-east into the jungle to the mine.",
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
