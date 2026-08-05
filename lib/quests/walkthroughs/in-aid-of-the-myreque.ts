import type { QuestWalkthrough } from "../types";

export const inAidOfTheMyreque: QuestWalkthrough = {
  startPoint:
    "Talk to Veliaf Hurtz in the Myreque hideout cave beneath the Hair of the Dog tavern in Canifis — climb down the trapdoor behind the pub and follow the cave. Fairy ring CKS lands in Canifis; otherwise run east from Varrock past the Digsite, over the River Salve at Paterdomus and east into town. Requires In Search of the Myreque complete.",
  itemsRequired: [
    "Pickaxe",
    "Spade",
    "1-5 Buckets (more for fewer trips moving rubble)",
    "Hammer",
    "44 Nails (any metal)",
    "11 Planks",
    "Swamp paste (combine swamp tar + flour at a range)",
    "4 Tinderboxes",
    "10 Bronze axes",
    "10 Raw mackerel or snail meat",
    "2 Steel bars",
    "Coal",
    "Soft clay",
    "Silver bar",
    "Mithril bar",
    "Cut sapphire",
    "Rope",
    "Water rune + Cosmic rune (for Lvl-1 Enchant — or use a sapphire enchant tablet)",
    "Silver weapon (silver sickle from Nature Spirit) — or Efaritay's aid for damaging vampyres",
  ],
  recommended: [
    "Combat 45+",
    "Steel armour and silver sickle for Ivan Strom (he equips what you bring)",
    "15 cooked food items to feed Ivan during the Temple Trekking escort",
  ],
  enemies: [
    "Gadderanks (level 35) — fought in the Burgh de Rott general store; safespottable",
    "Vampyre Juvinates (multiple, level 50-75) — appear during the Burgh defence and the Trekking escort",
  ],
  sections: [
    {
      title: "Travel to Burgh de Rott",
      steps: [
        {
          text: "Travel to Canifis in eastern Morytania.",
          travel:
            "Fairy ring CKS drops you in Canifis. No fairy ring: Kharyrll teleport (Ancient Magicks), or Varrock teleport and run east along the road past the Digsite to Paterdomus temple, across the River Salve bridge and east into Canifis.",
        },
        {
          text: "Climb down the trapdoor behind the Hair of the Dog tavern in Canifis and follow the cave to the Myreque hideout.",
        },
        {
          text: "Talk to Veliaf Hurtz in the hideout and accept the assignment to repair Burgh de Rott.",
        },
        {
          text: "Travel south through Mort Myre swamp to Burgh de Rott, the ruined village on Morytania's south coast.",
          travel:
            "Fairy ring BKR (Mort Myre, south of Canifis) then take the swamp boaty across to Mort'ton and follow the road south to Burgh de Rott. Alternatives: the Shades of Mort'ton minigame teleport, a Mort'ton teleport scroll, or simply run south from Canifis through the swamp.",
        },
      ],
    },
    {
      title: "Repair Burgh de Rott",
      steps: [
        {
          text: "Talk to Florin through the village gate and put 5 cooked food items in the chest beside him to pay his food tax and get in.",
        },
        {
          text: "Walk into the village and talk to Razvan near the central pub.",
        },
        {
          text: "Enter the broken pub, climb over the broken inner wall, and mine the rubble blocking the trapdoor at the back.",
        },
        {
          text: "Go down the trapdoor, mine the remaining rubble in the basement and pick up the iron fragments and scroll on the floor.",
        },
        {
          text: "Use a spade on the rubble to fill buckets, then dump them on the rubble pile outside the pub. Repeat until it's cleared.",
        },
        {
          text: "Talk to Razvan again outside the pub.",
        },
        {
          text: "Walk to the general store in the north-east of the village and talk to Aurel.",
        },
        {
          text: "Repair the store's roof using 3 planks + 12 nails, then repair the wall using another 3 planks + 12 nails.",
        },
        {
          text: "Aurel hands you a supply crate — fill it with 10 bronze axes, 10 raw mackerel (or snails), and 3 tinderboxes.",
        },
        {
          text: "Walk to the ruined bank on the east side of the village and talk to Cornelius, then repair the booth with 2 planks + swamp paste + 8 nails and the wall behind it with 3 planks + 12 nails.",
        },
      ],
    },
    {
      title: "Defend the village",
      steps: [
        {
          text: "Return to Razvan near the Burgh de Rott pub.",
        },
        {
          text: "Repair the furnace just outside the smithy using 2 steel bars + coal + tinderbox.",
        },
        {
          text: "Walk back to the general store — Gadderanks (level 35 vampyre) ambushes you inside.",
        },
        {
          text: "Defeat Gadderanks and the 2 Vampyre Juvinates that spawn alongside him — a silver sickle or other silver weapon is required to damage them.",
        },
        {
          text: "Talk to Gadderanks's body (he's still alive) for information, then head back north to Veliaf in the Canifis hideout.",
          travel:
            "Run north out of Burgh de Rott up the road to Mort'ton, then north through Mort Myre to Canifis — fairy ring BKR then CKS is the quick version. Climb down the trapdoor behind the pub again.",
        },
      ],
    },
    {
      title: "Escort Ivan via Temple Trekking",
      steps: [
        {
          text: "After Veliaf's debrief in the Canifis hideout, travel back south to Burgh de Rott.",
          travel:
            "Fairy ring BKR and the swamp boaty to Mort'ton, then south down the road — or run straight south from Canifis through Mort Myre.",
        },
        {
          text: "Talk to Polmafi Ferdygris in the refurbished Myreque hideout under the Burgh de Rott pub.",
        },
        {
          text: "(Optional) Equip Ivan Strom with steel armour pieces and 15 cooked food items so he survives the trek.",
        },
        {
          text: "Pick a Temple Trekking route from Burgh de Rott to Paterdomus and escort Ivan along it, handling the random events on the way.",
          notes: ["Choose the easy route unless your combat is comfortably above the requirements."],
        },
        {
          text: "Defeat any Vampyre Juvinates that appear during the trek — silver weapon required.",
        },
        {
          text: "At the Paterdomus end of the trek, talk to Drezel in the temple basement and get the cell key.",
        },
        {
          text: "Use the cell key on the eastern wall keyhole in the basement, then climb down the trapdoor.",
        },
        {
          text: "Search the bookcases in the secret library until you find 'The Sleeping Seven', then read it.",
        },
      ],
    },
    {
      title: "Make the Rod of Ivandis",
      steps: [
        {
          text: "Travel back to Canifis and find the blockaded cave entrance just south-east of the Myreque hideout wall.",
          travel:
            "Fairy ring CKS to Canifis (or walk east from Paterdomus along the road). Go down the trapdoor behind the pub into the room under the Canifis pub, then head to the boarded-up cave mouth south-east of it.",
        },
        {
          text: "Use a hammer on the wooden boards covering the cave entrance to break them open.",
        },
        {
          text: "Inside the cave, use soft clay on the coffin in the centre to create a rod mould.",
        },
        {
          text: "Take the rod mould, silver bar, mithril bar and cut sapphire to a furnace and smelt a silvthrill rod.",
          travel:
            "Port Phasmatys has the closest furnace (east along the Haunted Woods road from Canifis, or fairy ring ALQ then east). Edgeville and Al Kharid furnaces are both bank-adjacent if you are teleporting anyway.",
        },
        {
          text: "Cast Lvl-1 Enchant on the silvthrill rod (or use a sapphire enchant tablet).",
        },
        {
          text: "Take a rope to the well in the basement of Paterdomus temple, use the rope on the well, then use the enchanted silvthrill rod on it to bless it into the Rod of Ivandis.",
          travel:
            "Fairy ring CKS to Canifis and run west along the road to Paterdomus temple on the River Salve, then down the trapdoor to Drezel's basement; the well is by the west wall.",
        },
        {
          text: "Return south to the Burgh de Rott pub basement and talk to Veliaf Hurtz to finish.",
          travel:
            "Fairy ring BKR and the swamp boaty to Mort'ton, then south along the road to Burgh de Rott and down the trapdoor under the pub.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,000 Attack / Strength / Defence / Crafting experience each",
    "Access to Burgh de Rott (and the Temple Trekking minigame)",
    "Ability to craft the Rod of Ivandis (vampyre weapon used in next quests)",
    "5 Kudos at the Varrock Museum",
  ],
};
