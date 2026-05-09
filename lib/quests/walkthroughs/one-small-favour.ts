import type { QuestWalkthrough } from "../types";

export const oneSmallFavour: QuestWalkthrough = {
  startPoint: "Talk to Yanni Salika in Shilo Village (after Shilo Village).",
  itemsRequired: [
    "4 Steel bars",
    "Bronze bar",
    "Iron bar",
    "2 Guam leaves",
    "Marrentill",
    "Harralander",
    "Cup of hot water",
    "Hammer",
    "5 Pigeon cages",
    "Pot",
    "Soft clay",
    "2 each of opal, jade, red topaz, sapphire (uncut + chisel works)",
  ],
  recommended: [
    "Combat 45+",
    "Pickaxe (for the Slagilith)",
    "Stamina potions and lots of teleports — this is a 30-step fetch quest",
    "Weight-reducing clothing",
  ],
  enemies: [
    "Slagilith (level 92) — must use a pickaxe",
    "Hammerspike's gang (dwarves levels 44, 48, 49)",
  ],
  sections: [
    {
      title: "The favour chain begins",
      steps: [
        { text: "Talk to Yanni Salika in Shilo Village — he wants Mahogany." },
        { text: "Get a blunt axe from the Jungle forester south of Shilo." },
        { text: "Travel to Brian in Port Sarim about sharpening." },
        { text: "Talk to Aggie in Draynor Village." },
        { text: "Find Johanhus Ulsbrecht in the H.A.M. Hideout." },
        { text: "Talk to Fred the Farmer (north of Lumbridge)." },
        { text: "Talk to Seth Groats at the chicken farm east of the river Lum." },
        { text: "Give 3 steel bars to Horvik in Varrock." },
        { text: "Talk to the Apothecary south of Varrock bank." },
        { text: "Meet Tassie Slipcast in Barbarian Village." },
        { text: "Talk to Hammerspike Stoutbeard in the Dwarven Mines." },
        { text: "Talk to Sanfew in Taverley about Guthix rest tea." },
        { text: "Visit Captain Bleemadge on White Wolf Mountain." },
        { text: "Talk to Arhein at Catherby docks." },
        { text: "Talk to Phantuwti Fanstuwi Farsight near the Seers' chapel." },
        { text: "Search the sculpture in the Goblin Cave near the Fishing Guild." },
        { text: "Meet Wizard Cromperty in north-east Ardougne." },
      ],
    },
    {
      title: "Complete each NPC's favour",
      steps: [
        {
          text: "Cut all 8 gems and use them on the gnome landing lights in Feldip Hills (cyan/red/etc.)",
        },
        { text: "Repair the weather vane at Seers' Village using the bronze, iron, and steel bars." },
        { text: "Defeat Slagilith (level 92) in the Fishing Guild cave using a pickaxe." },
        {
          text: "Defeat Hammerspike's gang of 3 dwarves in the Dwarven Mines.",
        },
        { text: "Make a Guthix rest tea: cup of hot water + guam, marrentill, and harralander." },
        { text: "Make a pot lid via Tassie Slipcast (use soft clay on her wheel)." },
        { text: "Collect/return all the pigeon cages." },
        { text: "Return the sharpened axe to the Jungle forester." },
        { text: "Continue handing items back through the chain." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Deliver the red mahogany to Yanni in Shilo Village." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2 experience lamps (10,000 XP each to any skill 30+)",
    "Steel key ring (carry up to 30 keys)",
    "Ability to make and drink Guthix rest tea (regen energy faster)",
    "Ability to craft pot lids",
    "Gnome glider route to Feldip Hills",
  ],
};
