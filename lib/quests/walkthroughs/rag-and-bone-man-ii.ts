import type { QuestWalkthrough } from "../types";

export const ragAndBoneManII: QuestWalkthrough = {
  startPoint:
    "Talk to the Odd Old Man at the Silvarea limestone mine, on the mountain pass north-east of Varrock. Varrock teleport, out the east gate, east along the road and then north-east up the Silvarea path — the mine is on the south side of the path before the Paterdomus bridge. Digsite pendant to the Digsite and a run north is the quicker option.",
  itemsRequired: [
    "27 pots",
    "27 jugs of vinegar",
    "27 sets of logs",
    "Tinderbox",
    "Light source",
    "Rope",
    "Combat gear (some bones come from tough monsters)",
    "Mirror shield or V's shield (for basilisks)",
  ],
  recommended: [
    "Combat 40+",
    "Anti-dragon shield",
    "Inoculation bracelet (for zogres)",
    "Dramen staff for fairy rings",
    "Digsite pendant",
  ],
  enemies: [
    "27 different creatures across Gielinor — bat, undead cow, experiment, werewolf, ghoul, zombie, rat, moss giant, cave goblin, jackal, desert lizard, vulture, seagull, ice giant, mogre, snake, jogre, baby blue dragon, troll, rabbit, basilisk, dagannoth, fire giant, terrorbird, wolf, ogre, zogre",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to the Odd Old Man at the Silvarea limestone mine to start.",
          travel:
            "Varrock teleport, leave by the east gate and follow the road east past the Lumber Yard turn-off, then climb the mountain path north-east into Silvarea. The limestone mine and its pot-boiler are on the south side of the path; the Odd Old Man stands beside them. Fallback: Digsite pendant to the Digsite and run north.",
        },
      ],
    },
    {
      title: "Gather 27 different bones",
      steps: [
        {
          text: "Hunt all 27 listed creature types and pick up their unique bone drops.",
          travel:
            "Misthalin: rat, bat, zombie and moss giant all live in the Varrock Sewers (manhole south-east of Varrock Palace); cave goblins are in the Lumbridge Swamp Caves (trapdoor in the swamp — bring a light source). Zanaris: undead cows graze north-west of the Zanaris market — enter through the shed in Lumbridge Swamp with a Dramen staff. Morytania: Kharyrll teleport or Ectophial → Port Phasmatys and run west for werewolves in Canifis, ghouls by the River Salve bridge west of Canifis, and experiments in the Experiment Cave north of Canifis. Asgarnia: Falador teleport for ice giants in the Asgarnian Ice Dungeon (ladder south of Port Sarim), seagulls on the Port Sarim docks, mogres at Mudskipper Point (fairy ring AIQ — needs Skippy), baby blue dragons and wolves in Taverley Dungeon and on White Wolf Mountain. Kharidian Desert: fairy ring DLQ or the magic carpet from Shantay Pass for jackals, vultures and desert lizards — bring waterskins. Karamja: Brimhaven charter ship or the Port Sarim boat for jogres and snakes in the jungle around Tai Bwo Wannai, and fire giants in Brimhaven Dungeon. Fremennik: Rellekka (Fremennik lodestone route or the Seers' Village boat) for basilisks and dagannoths in the Fremennik Slayer Dungeon (mirror shield), and rabbits in the fields outside town. Trollheim teleport for trolls on Death Plateau. Gnome/Feldip: spirit tree to the Tree Gnome Stronghold for terrorbirds, then south for ogres at the Combat Training Camp; ring of dueling → Castle Wars and run south-west to Jiggig for zogres.",
          notes: ["Save this for the same week as a wilderness slayer task to combine objectives."],
        },
      ],
    },
    {
      title: "Polish all 27 bones",
      steps: [
        {
          text: "Buy 27 jugs of vinegar from Fortunato at his wine stall in Draynor Village.",
          travel:
            "Amulet of glory → Draynor Village, or Lumbridge Home Teleport and run west along the south river road. Fortunato stands in the little vineyard just north-west of the Draynor market, on the path towards Draynor Manor.",
        },
        { text: "Use the vinegar on pots, then use each bone on a pot of vinegar." },
        {
          text: "Return to the Odd Old Man at the Silvarea limestone mine with all the cleaned bones and 27 logs.",
          travel:
            "Varrock teleport, east out of the city and north-east up the Silvarea mountain path to the limestone mine. Digsite pendant to the Digsite then run north is faster if you have one.",
        },
        {
          text: "For each bone: place logs on the pot-boiler, add the bone-in-vinegar, light the logs, wait 12 seconds, then remove the pot.",
        },
        { text: "Talk to the Odd Old Man at the pot-boiler to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Prayer experience",
    "Bonesack (functional cape)",
    "Ram skull helm",
  ],
};
