import type { QuestWalkthrough } from "../types";

export const desertTreasureI: QuestWalkthrough = {
  startPoint:
    "Talk to Asgarnia Smith at Bedabin Camp in the Kharidian Desert. Lumbridge Home Teleport, run east through the Al Kharid toll gate, then south to Shantay Pass and buy a pass; from the Shantay Pass take the magic carpet to Bedabin Camp (200gp), or run south-west across the dunes with waterskins.",
  itemsRequired: [
    "Several Shantay passes",
    "650 coins",
    "12 magic logs",
    "6 Steel bars",
    "6 Molten glass",
    "Ashes",
    "Charcoal",
    "1 Blood rune",
    "Bones",
    "Silver bar",
    "Garlic powder",
    "Spice",
    "Sweet food (chocolate cake)",
    "Spiked boots",
    "Climbing boots",
    "Facemask / Slayer helmet / Gas mask",
    "Tinderbox",
    "20-50 lockpicks",
  ],
  recommended: [
    "Combat 70+",
    "Sharks/anglers + prayer/super restore potions",
    "Antidote++ or super antipoison",
    "Ice gloves (or Smiths gloves (i)) for Fareed",
    "Stamina potions",
    "Weight-reducing clothing",
    "Ring of dueling, Digsite pendant, Ectophial for fast travel",
  ],
  enemies: [
    "Dessous (level 139) — vampyre, weak to silver",
    "Fareed (level 167) — fire boss, weak to water spells/ranged",
    "Damis (level 103 then 174) — shadow boss, two forms",
    "Kamil (level 154) — ice boss, weak to fire spells only",
    "Ice trolls (level 120-124, x5)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Asgarnia Smith in the tents at Bedabin Camp.",
          travel:
            "Al Kharid → south through Shantay Pass (buy a Shantay pass first), then take Shantay's magic carpet to Bedabin Camp. On foot it is a long south-west run across the dunes — bring waterskins, the desert drains run energy fast.",
        },
        {
          text: "Travel to the Digsite Exam Centre and talk to Terry Balando for the translation.",
          travel:
            "Digsite pendant → Digsite, then run south to the Exam Centre (the small walled building south of the dig). No pendant: Varrock Teleport, leave by the east gate and follow the road south-east along the river.",
        },
        {
          text: "Buy a drink at the Bandit Camp pub for 650gp and ask the bartender about the four diamonds.",
          travel:
            "From Bedabin Camp run east across the dunes to the Bandit Camp — the cluster of tents around a stone pub. Bandits attack anyone wearing Saradomin or Zamorak items, so unequip them.",
        },
        {
          text: "Talk to Eblis at the desert obelisk east of the Bandit Camp and deliver the items he requests.",
          travel:
            "From the Bandit Camp head east to the lone standing obelisk; Eblis paces around it.",
        },
      ],
    },
    {
      title: "Smoke diamond — Fareed",
      steps: [
        {
          text: "Equip a facemask and enter the Smoke Dungeon through the hole in the rocks north-west of Pollnivneach.",
          travel:
            "Magic carpet from Shantay Pass to Pollnivneach, then run north-west into the rocky ground; the dungeon entrance is a hole down into the rock. You cannot survive inside without a facemask, gas mask or Slayer helmet.",
        },
        { text: "Light all 4 standing torches in the corners of the smoke chamber." },
        { text: "Open the chest in the centre before the torches burn out — take the warm key." },
        { text: "Use the warm key on the eastern gate." },
        {
          text: "Defeat Fareed (level 167) using ice gloves + water spells or ranged.",
          notes: ["Fareed sets your weapon ablaze unless you wear ice gloves."],
        },
        { text: "Take the smoke diamond." },
      ],
    },
    {
      title: "Shadow diamond — Damis",
      steps: [
        {
          text: "Talk to Rasolo, the wandering merchant camped between the Fishing Guild and Baxtorian Falls.",
          travel:
            "Skills necklace → Fishing Guild, then run south-east down the hill; Rasolo stands alone with his crate in the open ground west of the falls. No necklace: Camelot Teleport and run west past Seers' Village and the Coal Trucks.",
        },
        { text: "Bring 20+ lockpicks and antipoison before returning to the desert." },
        {
          text: "Return to the Bandit Camp and enter the southernmost tent, which holds a secure chest.",
          travel:
            "Magic carpet from Shantay Pass to Bedabin Camp then run east, or carpet to Pollnivneach and run north.",
        },
        { text: "Pick the 3 locks on the secure chest (the chest is poisonous — bring antipoison)." },
        {
          text: "Take the gilded cross back to Rasolo near Baxtorian Falls in exchange for the ring of visibility.",
          travel: "Skills necklace → Fishing Guild, then run south-east to his camp.",
        },
        {
          text: "Equip the ring of visibility and enter the Shadow Dungeon just outside the Bandit Camp.",
          travel:
            "Back to the Bandit Camp (carpet to Bedabin Camp and run east, or carpet to Pollnivneach and run north). The dungeon entrance only becomes visible while the ring of visibility is worn.",
        },
        {
          text: "Defeat Damis in both forms.",
          notes: ["His second form is much stronger; bring sharks and prayer potions."],
        },
        { text: "Take the shadow diamond." },
      ],
    },
    {
      title: "Ice diamond — Kamil",
      steps: [
        {
          text: "Travel to the icy path north-west of Trollheim.",
          travel:
            "Games necklace → Burthorpe, run east past Death Plateau and climb the rocks up Trollheim (climbing boots required), then head north-west off the mountain onto the ice. If you already have Eadgar's Ruse done, the Trollheim Teleport spell drops you on the mountain directly.",
        },
        { text: "Give a piece of sweet food (chocolate cake) to the troll child blocking the path." },
        { text: "Kill 5 ice trolls along the path." },
        {
          text: "Defeat Kamil (level 154) using FIRE spells only (he's immune to other styles).",
        },
        { text: "Equip spiked boots and follow the icy path." },
        { text: "Thaw the frozen trolls with a fire spell as you go." },
        { text: "Take the ice diamond." },
      ],
    },
    {
      title: "Blood diamond — Dessous",
      steps: [
        {
          text: "Talk to Malak in the Hair of the Dog tavern in Canifis.",
          travel:
            "Slayer ring → Slayer Tower then run south-west into Canifis, or Ectophial → Port Phasmatys and run west along the road. On foot: Varrock Teleport, run east along the road through the Paterdomus temple and over the Salve. The tavern is the building on the west side of Canifis's main street.",
        },
        {
          text: "Get a silver pot from Ruantun in the Draynor Sewer.",
          travel:
            "Amulet of glory → Draynor Village. The sewer entrance is on the path between the village and Draynor Manor to the north-east; climb down and Ruantun is a short way along the tunnel.",
        },
        {
          text: "Take the pot to the High Priest on Entrana to be enchanted.",
          travel:
            "Falador Teleport, run south to Port Sarim and board the Entrana monk's boat on the northern dock. You may carry no weapons or armour aboard — bank everything first. The High Priest is in the church in the middle of the island.",
        },
        { text: "Add spices and garlic powder to the pot." },
        {
          text: "Pour the mixture on Dessous's tomb in the fenced graveyard near Canifis.",
          travel:
            "Back to Canifis (Slayer ring → Slayer Tower and run south-west, or Ectophial → Port Phasmatys and run west). The graveyard is the small fenced plot just outside the town.",
        },
        {
          text: "Defeat Dessous (level 139). Use silver weapons or you cannot damage him.",
        },
        { text: "Take the blood diamond from Malak back in the Canifis tavern." },
      ],
    },
    {
      title: "Ancient Pyramid",
      steps: [
        {
          text: "Travel to the Ancient Pyramid in the eastern desert, between Pollnivneach and Nardah.",
          travel:
            "Magic carpet from Shantay Pass to Pollnivneach, then run east across the dunes to the lone pyramid. Bring waterskins — this is a long exposed desert run.",
        },
        { text: "Place each diamond in the matching obelisks at the corners." },
        { text: "Enter the pyramid and navigate the 4 trap-filled levels." },
        { text: "Defeat any mummies and scarabs along the way." },
        { text: "Talk to Azzanadra at the end." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "20,000 Magic experience",
    "Access to the Ancient Magicks spellbook (ice/blood/smoke/shadow combat spells + Ancient teleports)",
    "Ring of visibility (see invisible NPCs)",
    "Ability to buy and use the Ancient staff",
    "Smoke Dungeon access",
  ],
};
