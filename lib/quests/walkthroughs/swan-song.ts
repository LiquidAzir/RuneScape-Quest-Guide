import type { QuestWalkthrough } from "../types";

export const swanSong: QuestWalkthrough = {
  startPoint:
    "Talk to Herman Caranos in the eastern building of the Piscatoris Fishing Colony. Fastest route is fairy ring AKQ (Piscatoris Hunter area), then run north-west across the bridge into the colony. No fairy rings: spirit tree or gnome glider to the Grand Tree, then run north-west past the Eagles' Peak turn-off.",
  itemsRequired: [
    "5 Blood runes",
    "10 Mist runes",
    "10 Lava runes",
    "7 Bones",
    "Airtight pot (pot + pot lid)",
    "5 Iron bars",
    "Logs + Tinderbox",
    "Hammer",
    "Small fishing net",
    "Brown apron",
  ],
  recommended: [
    "Combat 60+",
    "Sharks/anglers + Prayer potions",
    "Cooking gauntlets",
    "Fairy rings access",
  ],
  enemies: [
    "Sea trolls (level 65, 79, 87, 101)",
    "Sea Troll Queen (level 170) — boss",
  ],
  sections: [
    {
      title: "Get the Wise Old Man",
      steps: [
        {
          text: "Talk to Herman Caranos in the eastern building of the Piscatoris Fishing Colony.",
          travel:
            "Fairy ring AKQ, then run north-west over the bridge into the colony. No rings: spirit tree to the Gnome Stronghold and run north-west past Eagles' Peak.",
        },
        {
          text: "Travel to Draynor Village and talk to the Wise Old Man in his house.",
          travel:
            "Amulet of glory to Draynor Village. His house is the one directly south of the Draynor bank, on the corner facing the market. No glory: Lumbridge Home Teleport and run west along the south river road.",
        },
        {
          text: "Return to the Piscatoris Fishing Colony and talk to the Wise Old Man inside.",
          travel: "Fairy ring AKQ then north-west into the colony; the Wise Old Man is standing just inside the colony gates.",
        },
      ],
    },
    {
      title: "First trolls and supplies",
      steps: [
        {
          text: "Kill the level 79 Sea Trolls on the shoreline outside the colony walls and collect 7 bones.",
          travel: "Head out of the colony's western gate onto the beach — the trolls spawn along the water's edge.",
        },
        { text: "Talk to Herman inside the eastern building." },
      ],
    },
    {
      title: "Repair the colony",
      steps: [
        {
          text: "Talk to Franklin Caranos in the furnace building.",
          travel: "The furnace is the smoky building in the south-west of the colony, opposite the bank.",
        },
        { text: "Light a log on the firebox in the furnace." },
        { text: "Press 5 iron bars on the metal press." },
        {
          text: "Repair the damaged western perimeter walls with the iron sheets and a hammer.",
          travel: "The broken sections are along the colony's western fence, facing the sea — walk the wall line to find each highlighted gap.",
        },
        {
          text: "Talk to Arnold Lydspor in the Piscatoris bank.",
          travel: "The bank is the building in the middle of the colony, just north of the furnace.",
        },
        {
          text: "Fish 5 fresh monkfish at the fishing spots north-west of the colony.",
          travel: "Leave by the north gate and follow the shoreline west — the monkfish spots are on the small pier past the colony walls. Bring a small fishing net.",
        },
        {
          text: "Cook the monkfish on the range in the colony kitchen.",
          travel: "The kitchen is the northern building inside the colony, next to the fishing platforms.",
        },
        { text: "Talk to Arnold Lydspor in the Piscatoris bank, then Franklin Caranos in the furnace building again." },
        { text: "Talk to the Wise Old Man and Herman in the eastern building." },
      ],
    },
    {
      title: "Raise an army",
      steps: [
        {
          text: "Talk to Wizard Frumscone in the basement of the Wizards' Guild in Yanille.",
          travel:
            "Watchtower Teleport (58 Magic) lands you on the tower north-east of Yanille — run south-west into the city; the guild is the big tower in the north-west corner. No spell: Ardougne Teleport and run south down the road past the Ardougne farm. Frumscone is down the ladder in the guild basement.",
        },
        {
          text: "Talk to Malignius Mortifer in his house south-west of Falador.",
          travel:
            "Falador Teleport, then run south out of the south gate and south-west along the road — his hut sits between Falador and the Crafting Guild, just north-east of the guild's gate.",
        },
        {
          text: "Talk to the Master Crafter inside the Crafting Guild.",
          travel: "Continue south-west from Mortifer's hut to the Crafting Guild. You must wear a brown apron and have 40 Crafting to get past the guildmaster on the gate.",
        },
        { text: "Make an airtight pot: use soft clay on a potter's wheel for a pot and pot lid, fire both, then combine them." },
        { text: "Return to Malignius Mortifer south-west of Falador and let him teleport you back to the colony." },
      ],
    },
    {
      title: "Defeat the Sea Troll Queen",
      steps: [
        { text: "Talk to Herman inside the eastern building to start the fight." },
        {
          text: "Defeat the Sea Troll Queen (level 170).",
          notes: ["Use prayer potions and high-tier food. Magic works well."],
        },
        { text: "Talk to Herman inside the eastern building to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "50,000 Fishing experience",
    "15,000 Magic experience",
    "10,000 Prayer experience",
    "25,000 coins",
    "Ability to fish monkfish at the colony",
  ],
};
