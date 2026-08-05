import type { QuestWalkthrough } from "../types";

export const sinsOfTheFather: QuestWalkthrough = {
  startPoint:
    "Talk to Veliaf Hurtz outside the church in Slepe. Get to Slepe by sailing from Port Phasmatys: Ectophial teleport (or fairy ring ALQ in the Haunted Woods, then run east into Port Phasmatys), go to the docks on the east side of town and talk to Andras to sail across. Veliaf waits outside the church in the middle of the village.",
  itemsRequired: [
    "Any axe",
    "Vyrewatch outfit (or 1,950 coins to buy)",
    "Ivandis flail",
    "Cut ruby",
    "Knife",
    "Chisel",
    "Runes for Lvl-3 Enchant (or enchant ruby tablet)",
  ],
  recommended: [
    "Combat 95+",
    "Drakan's medallion",
    "Pickaxe (20 Mining helps)",
    "Stamina, Antipoison, Prayer potions",
    "Sharks/anglers and combat gear",
    "Slayer helmet (works on Vanstrom in this quest)",
  ],
  enemies: [
    "Kroy (level 133)",
    "Nail beasts (level 67-143)",
    "Vampyre Juvinates (level 119-122)",
    "Mutated Bloodveld (level 123)",
    "Damien Leucurte (level 204)",
    "Vanstrom Klause (level 459) — boss",
  ],
  sections: [
    {
      title: "Slepe's sleeper plague",
      steps: [
        {
          text: "Talk to Veliaf Hurtz outside the church in Slepe.",
          travel:
            "Ectophial to Port Phasmatys (or fairy ring ALQ in the Haunted Woods and run east), then take the docks on the east side of town and talk to Andras to sail to Slepe. Veliaf stands outside the church in the centre of the village.",
        },
        {
          text: "Interview Hameln the Jester inside the Slepe church.",
          travel: "Straight through the church doors Veliaf is standing beside — Hameln is inside on the ground floor.",
        },
        {
          text: "Question Carl in the Slepe pub about the Bloody Bracers.",
          travel: "Leave the church and run south-west; the pub is the large building on the west side of Slepe, near the water.",
        },
        { text: "Follow Carl by hiding behind the highlighted barrels until you witness the lab." },
        { text: "Defeat Kroy with Ranged from behind the lab tables." },
        { text: "Destroy both lab tables." },
        {
          text: "Report back to Veliaf in the Slepe graveyard.",
          travel: "Leave the lab and run north-east — the graveyard is the fenced plot just north of the Slepe church.",
        },
        {
          text: "Meet Veliaf at Paterdomus, in the underground temple with Drezel.",
          travel:
            "Salve Graveyard Teleport (Arceuus, 40 Magic) drops you right by the temple. Otherwise leave Varrock by the east gate and run east along the road past the Digsite to the Salve river bridge; Paterdomus is the temple on the bridge. Go down the trapdoor/stairs inside to reach Drezel.",
        },
        {
          text: "Talk to Ivan Strom south of Fenkenstrain's Castle.",
          travel:
            "Fenkenstrain's Castle Teleport (Arceuus, 48 Magic), then run south down the path. No spell: Kharyrll teleport or a slayer ring to Canifis, then run north-west up the road to the castle and continue south of it.",
        },
      ],
    },
    {
      title: "Escort Ivan again",
      steps: [
        {
          text: "Begin the escort trek with Ivan Strom on the Morytania side east of Paterdomus.",
          travel:
            "From Drezel's underground temple, go through the gate east into Morytania and follow the swamp path east — the escort starts on the marked trail just outside the temple.",
        },
        { text: "Cut vines and create a long vine to cross the swamp." },
        { text: "Defeat Nail beasts and heal Ivan when his health drops." },
        { text: "Build a bridge using logs to continue." },
        { text: "Defeat Vampyre Juvinates with the Ivandis flail." },
        {
          text: "Escort Ivan to the boathouse on the south shore of Burgh de Rott.",
          travel: "Keep following the escort path south-east; the boathouse is the wooden building on the coast at the south edge of Burgh de Rott.",
        },
      ],
    },
    {
      title: "Icyene Graveyard",
      steps: [
        {
          text: "Board the boat in the Burgh de Rott boathouse and sail to the Icyene Graveyard.",
          travel:
            "Drakan's medallion to Burgh de Rott, then run south to the boathouse on the coast. No medallion: take the Canifis-to-Burgh de Rott shortcut road south through Mort'ton.",
        },
        {
          text: "Talk to Vanescula Drakan in the Myreque hideout under Old Man Ral's house in Meiyerditch.",
          travel:
            "Drakan's medallion to Ver Sinhaza, then leave through the west gate into Meiyerditch and work south-west through the slum streets. Old Man Ral's house is in the far south-west corner of Meiyerditch; the hideout is down the trapdoor inside.",
        },
        { text: "Solve the mausoleum door puzzle (rotate the rings to align the symbols)." },
        { text: "Interview the 5 Myreque members in the order Vanescula gives." },
        {
          text: "Use Vanescula's teleport to reach the Daeyalt mine under Ver Sinhaza.",
          travel: "Vanescula teleports you there directly — just accept the offer, no travel needed.",
        },
        { text: "Mine 15 Daeyalt ore." },
        { text: "Defeat the Mutated Bloodveld in the lab." },
        { text: "Retrieve the note from the bookshelf." },
        {
          text: "Return to Burgh de Rott and meet the Myreque upstairs in the pub.",
          travel: "Drakan's medallion to Burgh de Rott; the pub is the tall building in the north-east of the town, and the Myreque are on the upper floor.",
        },
      ],
    },
    {
      title: "The Vyre noble disguise",
      steps: [
        { text: "Buy a full Vyrewatch outfit (top, legs and shoes) for 1,950gp if you don't already own one." },
        {
          text: "Go back down into the Myreque hideout under Old Man Ral's house in Meiyerditch.",
          travel:
            "Drakan's medallion to Ver Sinhaza, out the west gate into Meiyerditch, then south-west through the slums to Old Man Ral's house in the far corner and down the trapdoor.",
        },
        { text: "Have the tailor in the hideout upgrade the outfit into Vyre noble clothing." },
        {
          text: "Return to the Icyene Graveyard, then travel on to Slepe.",
          travel:
            "Drakan's medallion to Burgh de Rott and take the boathouse boat to the Icyene Graveyard; from there the quest boat carries you north to Slepe. Once the medallion is upgraded you can teleport straight to Slepe instead.",
        },
        { text: "Defeat Damien Leucurte with the Ivandis flail — stomp out the magical fires and pray Protect from Magic." },
        { text: "Report your success to Veliaf." },
      ],
    },
    {
      title: "Branches of Darkmeyer",
      steps: [
        { text: "Equip the full set of Vyre noble clothing before you go any further." },
        {
          text: "Enter Darkmeyer through the northern gate of Ver Sinhaza.",
          travel:
            "Drakan's medallion to Ver Sinhaza, then run north out of the courtyard to the gate in the city wall. The guards let you through only while the Vyre noble clothing is worn.",
        },
        {
          text: "Enter the Daeyalt mine and squeeze through the cracked wall.",
          travel: "The mine entrance is the ladder in the south-west of Darkmeyer, just inside the Ver Sinhaza wall.",
        },
        {
          text: "Visit the Arboretum in northern Darkmeyer and interview the guard on the door.",
          travel: "From the Darkmeyer entrance run north past the market and bank; the Arboretum is the walled garden at the top (north) end of the city.",
        },
        { text: "Talk to Mordan Nikazsi and Maria Gadderanks in Darkmeyer for the information you need." },
        { text: "Read the note among the toppled shelves." },
        { text: "Set the north and south valves to the solution you were given." },
        { text: "Cut 8 blisterwood logs from the blisterwood tree in the Arboretum." },
      ],
    },
    {
      title: "Make the Blisterwood flail and defeat Vanstrom",
      steps: [
        {
          text: "Return to the Myreque hideout under Old Man Ral's house with the blisterwood logs.",
          travel:
            "Drakan's medallion to Ver Sinhaza, west gate into Meiyerditch, then south-west through the slums to Old Man Ral's house and down the trapdoor.",
        },
        { text: "Give 7 logs to Vertida Sefalatis." },
        { text: "Get a silver sickle, attach a cut ruby, enchant it." },
        { text: "Attach a blisterwood log, then combine with the Ivandis flail to create the Blisterwood flail." },
        { text: "Defeat Vanstrom Klause (level 459) — manage Bloodveld summons, blood orb heals, and the darkness attack." },
        { text: "Watch the final cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Access to Darkmeyer and the Daeyalt Essence Mine",
    "Blisterwood flail (best vampyre weapon)",
    "Tome of experience (usable 6 times — 15,000 XP each)",
    "Drakan's medallion teleport upgrade (Burgh de Rott / Slepe / Icyene Graveyard)",
  ],
};
