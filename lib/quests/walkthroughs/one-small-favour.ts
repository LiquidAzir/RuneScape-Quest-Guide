import type { QuestWalkthrough } from "../types";

export const oneSmallFavour: QuestWalkthrough = {
  startPoint:
    "Talk to Yanni Salika in Shilo Village (after Shilo Village). Amulet of glory to Karamja lands you at Musa Point — run west to Brimhaven and take Hajedy's cart south to Shilo Village (200gp). Alternative: Captain Barnaby's boat from the Ardougne docks to Brimhaven, then the same cart.",
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
        {
          text: "Talk to Yanni Salika in his shop in Shilo Village — he wants Mahogany.",
          travel:
            "Amulet of glory to Karamja (Musa Point), run west to Brimhaven, then take Hajedy's cart south to Shilo Village. His shop is a short walk from the cart stop, near the village bank.",
        },
        {
          text: "Get a blunt axe from the Jungle forester working in the jungle south of Shilo Village.",
          travel:
            "Leave Shilo Village by the south gate and follow the jungle path — the foresters are among the trees just outside the village wall. Bring antipoison; the jungle spiders and snakes bite on the way.",
        },
        {
          text: "Travel to Brian in his battleaxe shop in Port Sarim about sharpening the axe.",
          travel:
            "Cart back to Brimhaven and sail to Ardougne, or amulet of glory to Karamja and take the Port Sarim ferry (30gp) from Musa Point. Brian's Battleaxe Bazaar is in the row of shops along Port Sarim's main street, between Wydin's food store and Gerrant's fishing shop.",
        },
        {
          text: "Talk to Aggie the witch in her house in Draynor Village.",
          travel:
            "Run north-east out of Port Sarim along the road to Draynor, or amulet of glory to Draynor Village. Aggie's house is the small one on the west side of the village, just south of Ned's house and west of the market stalls.",
        },
        {
          text: "Find Johanhus Ulsbrecht inside the H.A.M. Hideout.",
          travel:
            "The hideout trapdoor is between Draynor and Lumbridge: run east out of Draynor along the north road and look for the trapdoor in the clearing just north of the road. Wear full H.A.M. robes or you'll be caught and thrown out. Ulsbrecht is in the main chamber past the ladder.",
        },
        {
          text: "Talk to Fred the Farmer at his sheep farm north-west of Lumbridge.",
          travel:
            "Lumbridge Home Teleport, then run north-west past the general store and over the river — Fred's farmhouse is beside the sheep pens, just south of the windmill.",
        },
        {
          text: "Talk to Seth Groats at the chicken farm north of Lumbridge, on the east bank of the River Lum.",
          travel:
            "From Fred's farm head back east across the river and north along the Varrock road; the chicken coop and farmhouse are on your right.",
        },
        {
          text: "Give 3 steel bars to Horvik in his armour shop in Varrock.",
          travel:
            "Varrock Teleport drops you in the central square. Horvik's smithy is a few steps east, on the north side of the main east-west road.",
        },
        {
          text: "Talk to the Apothecary in his hut in south-west Varrock.",
          travel:
            "From Varrock square run west then south down the side street — the Apothecary's small hut is south of the west bank, on the road toward the swamp.",
        },
        {
          text: "Meet Tassie Slipcast at the pottery house in Barbarian Village.",
          travel:
            "Amulet of glory to Edgeville and run south, or Varrock Teleport and run west out of the west gate along the road. The pottery building with the wheel and oven is on the east side of the village.",
        },
        {
          text: "Talk to Hammerspike Stoutbeard in the Dwarven Mine.",
          travel:
            "Falador Teleport, leave by the north gate and run north-east to the small building at the foot of Ice Mountain — take the staircase down into the Dwarven Mine. Hammerspike and his gang stand in the mine's western section.",
        },
        {
          text: "Talk to Sanfew upstairs in the Taverley herblore shop about Guthix rest tea.",
          travel:
            "Falador Teleport, out of the west gate and west over the bridge into Taverley; the herblore store is in the middle of the village — climb the stairs to find Sanfew.",
        },
        {
          text: "Visit Captain Bleemadge at the gnome glider on the summit of White Wolf Mountain.",
          travel:
            "From Taverley run north-west and follow the mountain path up and over White Wolf Mountain; the glider platform is at the top. If you have glider access, take the Grand Tree glider to Sindarpos — it lands right beside him.",
        },
        {
          text: "Talk to Arhein at the Catherby docks.",
          travel:
            "Continue east down White Wolf Mountain into Catherby, or Camelot Teleport and run east. Arhein stands by the crates on the beach at the south-east of the village.",
        },
        {
          text: "Talk to Phantuwti Fanstuwi Farsight in his house near the Seers' Village chapel.",
          travel:
            "Camelot Teleport and run east into Seers' Village; his house is in the north-east of the village next to the church.",
        },
        {
          text: "Search the sculpture inside the Goblin Cave south of the Fishing Guild.",
          travel:
            "Skills necklace to the Fishing Guild, then run south and west along the cliff — the cave mouth is in the rock face between the guild and the Ardougne road. Bring a pickaxe for the Slagilith fight inside.",
        },
        {
          text: "Meet Wizard Cromperty in his house in north-east East Ardougne.",
          travel:
            "Ardougne Teleport to the market square, then run north-east — Cromperty's house is the one on the far north-east corner of the city, past the market stalls.",
        },
      ],
    },
    {
      title: "Complete each NPC's favour",
      steps: [
        {
          text: "Cut all 8 gems and use them on the gnome glider landing lights at Lemantolly Undri in the Feldip Hills.",
          travel:
            "Watchtower Teleport to Yanille, then run south through the gate into the Feldip Hills and keep going south-west to the glider site. Bring food — ogres and wolves roam the hills.",
        },
        {
          text: "Repair the weather vane on the Seers' Village church roof using the bronze, iron, and steel bars.",
          travel: "Camelot Teleport and run east — the church is in the north-east of Seers' Village.",
        },
        { text: "Defeat Slagilith (level 92) inside the Goblin Cave south of the Fishing Guild using a pickaxe." },
        {
          text: "Defeat Hammerspike's gang of 3 dwarves in the Dwarven Mine.",
        },
        { text: "Make a Guthix rest tea: cup of hot water + guam, marrentill, and harralander." },
        { text: "Make a pot lid via Tassie Slipcast in Barbarian Village (use soft clay on her wheel, then fire it)." },
        { text: "Collect/return all the pigeon cages." },
        { text: "Return the sharpened axe to the Jungle forester south of Shilo Village." },
        { text: "Continue handing items back through the chain." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Deliver the red mahogany to Yanni in his shop in Shilo Village.",
          travel:
            "Amulet of glory to Karamja, west to Brimhaven, then Hajedy's cart south to Shilo Village.",
        },
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
