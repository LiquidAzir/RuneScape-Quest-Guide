import type { QuestWalkthrough } from "../types";

export const inAidOfTheMyreque: QuestWalkthrough = {
  startPoint:
    "Talk to Veliaf Hurtz in the Myreque hideout cave under the Hair of the Dog tavern in Canifis (climb down the trapdoor in the basement of the tavern). Requires In Search of the Myreque complete.",
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
          text: "Travel to Canifis (in eastern Morytania, east of Paterdomus and the River Salve).",
        },
        {
          text: "Enter the Hair of the Dog tavern (the central pub in Canifis), descend the trapdoor in the basement and follow the cave to the Myreque hideout.",
        },
        {
          text: "Talk to Veliaf Hurtz in the Myreque hideout and accept the assignment to repair Burgh de Rott.",
        },
        {
          text: "Travel south through Mort Myre swamp to Burgh de Rott (the abandoned village on the south coast of Morytania). Follow the path south from Mort'ton, or use Drakan's medallion / Slayer ring teleport.",
        },
      ],
    },
    {
      title: "Repair Burgh de Rott",
      steps: [
        {
          text: "At the village gate, talk to Florin (the gatekeeper). Place 5 cooked food items in the chest beside him to satisfy his food tax and gain entry.",
        },
        {
          text: "Walk into the village and talk to Razvan near the central pub.",
        },
        {
          text: "Enter the broken pub, climb over the broken inner wall, and mine the rubble blocking the trapdoor in the back.",
        },
        {
          text: "Descend the trapdoor; mine the remaining rubble in the basement and pick up the iron fragments + scroll on the floor.",
        },
        {
          text: "Use a spade on the rubble to fill buckets, then dump them on the rubble pile outside the pub. Repeat until cleared.",
        },
        {
          text: "Talk to Razvan again outside the pub.",
        },
        {
          text: "Walk to the general store (north-west corner of the village) and talk to Aurel.",
        },
        {
          text: "Repair the store's roof using 3 planks + 12 nails, then repair the wall using another 3 planks + 12 nails.",
        },
        {
          text: "Aurel hands you a supply crate — fill it with 10 bronze axes, 10 raw mackerel (or snails), and 3 tinderboxes.",
        },
        {
          text: "Walk to the bank booth (east side of village, the broken counter) and talk to Cornelius. Repair the booth with 2 planks + swamp paste + 8 nails, then the wall behind it with 3 planks + 12 nails.",
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
          text: "Walk to the general store and talk to Gadderanks (level 35 vampyre — he ambushes you inside the shop).",
        },
        {
          text: "Defeat Gadderanks and the 2 Vampyre Juvinates that spawn alongside him — silver sickle (or any silver weapon) is required to damage them.",
        },
        {
          text: "Talk to Gadderanks's body (he's still alive) for info, then return north to Veliaf Hurtz in the Canifis Myreque hideout.",
        },
      ],
    },
    {
      title: "Escort Ivan via Temple Trekking",
      steps: [
        {
          text: "After Veliaf's debrief in the Canifis hideout, travel back south to Burgh de Rott.",
        },
        {
          text: "Talk to Polmafi Ferdygris in the new Burgh de Rott Myreque pub basement (the trapdoor under the pub now leads to a refurbished hideout).",
        },
        {
          text: "(Optional) Equip Ivan Strom with steel armour pieces and 15 cooked food items so he survives the trek.",
        },
        {
          text: "Pick a Temple Trekking route from Burgh de Rott to the Paterdomus temple (short or long — choose based on combat skills). Escort Ivan along the path, fighting random Trekking events.",
        },
        {
          text: "Defeat any Vampyre Juvinates that appear during the trek — silver weapon required.",
        },
        {
          text: "At the Paterdomus Temple end of the trek, talk to Drezel in the temple basement; get the cell key.",
        },
        {
          text: "Use the cell key on the eastern wall keyhole inside the basement, then climb down the trapdoor.",
        },
        {
          text: "Search the bookcases in the secret library until you find 'The Sleeping Seven'. Read the book.",
        },
      ],
    },
    {
      title: "Make the Rod of Ivandis",
      steps: [
        {
          text: "Travel back to Canifis. Find the blockaded cave entrance just south of the Hair of the Dog tavern (the cave Veliaf hid in originally).",
        },
        {
          text: "Use a hammer on the wooden boards covering the cave entrance to break them.",
        },
        {
          text: "Inside the cave, use soft clay on the coffin in the centre to create a rod mould.",
        },
        {
          text: "Travel to a furnace (Edgeville, Al Kharid, or Port Phasmatys) with the rod mould, silver bar, mithril bar, and cut sapphire. Smelt to make a silvthrill rod.",
        },
        {
          text: "Cast Lvl-1 Enchant on the silvthrill rod (or use a sapphire enchant tablet).",
        },
        {
          text: "Travel to the well in the basement of Paterdomus Temple (down the trapdoor, west wall) with a rope. Use the rope on the well, then use the enchanted silvthrill rod on the well to bless it into the Rod of Ivandis.",
        },
        {
          text: "Return south to the Burgh de Rott pub basement and talk to Veliaf Hurtz to finish.",
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
