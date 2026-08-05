import type { QuestWalkthrough } from "../types";

export const fairytaleIGrowingPains: QuestWalkthrough = {
  startPoint:
    "Talk to Martin the Master Gardener by the pig pen on the farm just north-east of Draynor Village. Getting there: Amulet of glory to Draynor Village, then run north-east past the bank to the fenced farm with the pigs and the wheat field.",
  itemsRequired: [
    "Secateurs (5gp from Sarah's Farming shop)",
    "Spade",
    "Ghostspeak amulet",
    "Dramen staff",
    "Draynor skull",
    "3 randomly assigned items (check quest journal)",
  ],
  recommended: [
    "Combat 50+",
    "40+ combined Strength + Farming",
    "Amulet of glory or teleports for fast travel",
    "Druid pouch (protects food from ghasts)",
  ],
  enemies: ["Tanglefoot (level 111) — flinch-able; fight in a Zanaris instance"],
  sections: [
    {
      title: "Investigate the Group of Advanced Gardeners",
      steps: [
        {
          text: "Talk to Martin the Master Gardener by the pig pen north-east of Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village, then run north-east past the bank to the farm — Martin walks around the pig pen beside the wheat field.",
        },
        {
          text: "Talk to every Group of Advanced Gardeners member at their allotment patch (your quest journal names each one you still owe).",
          travel:
            "Fastest loop: Falador Teleport and run out of the south gate to the Falador allotments for Elstan; Camelot Teleport and run south-east downhill into Catherby for Dantaera at the patches east of the bank; Ardougne Teleport (or Ardougne cloak to the monastery) and run north-east of the city to the Ardougne allotments for Kragen; Ectophial to Port Phasmatys and run west out of the city gate to the allotments there for Lyra.",
        },
        {
          text: "Return to Martin at the Draynor Village pig pen.",
        },
      ],
    },
    {
      title: "Trouble in Zanaris",
      steps: [
        {
          text: "Travel to Zanaris with a dramen or lunar staff equipped.",
          travel:
            "Lumbridge Home Teleport, then run south-west into Lumbridge Swamp to the lone wooden shed. With the dramen or lunar staff equipped, enter the shed door to be dropped into Zanaris.",
        },
        {
          text: "Talk to the Fairy Godfather in the Zanaris throne room.",
          travel: "From the Zanaris marketplace head to the large stone throne-room building in the north of Zanaris and go through its doors.",
        },
        {
          text: "Get the symptoms list from Fairy Nuff in her grotto.",
          travel: "Fairy Nuff's grotto is in the north-west corner of Zanaris — follow the path west from the throne room and enter the rock doorway.",
        },
        {
          text: "Talk to Zandar Horfyre on the top floor of the Dark Wizards' Tower.",
          travel:
            "Leave Zanaris by the shed, then head for the tower south-west of Falador: Falador Teleport and run south-west past the Crafting Guild road, or Amulet of glory to Draynor and run west. Climb to the top floor of the tower — Zandar is the wizard up there.",
        },
      ],
    },
    {
      title: "Get the Magic Secateurs",
      steps: [
        {
          text: "Give the Draynor skull to Malignius Mortifer north-east of Port Sarim.",
          travel:
            "From the Dark Wizards' Tower run south-west — Malignius stands outside his little house between the Crafting Guild and Port Sarim. Falador Teleport then straight south-west also works.",
        },
        { text: "Collect the 3 randomly assigned items (check your quest journal for the list)." },
        {
          text: "Travel to the Nature Grotto in Mort Myre Swamp.",
          travel:
            "Fairy ring BKR drops you in Mort Myre Swamp — run south to the ring of trees standing in the water and enter through the hollow log. No fairy ring: Ectophial to Port Phasmatys and run west to Canifis, then south through the swamp gate. Carry a druid pouch or the ghasts will rot your food on the way.",
        },
        { text: "Trade the items to the Nature Spirit inside the grotto for the Magic secateurs." },
      ],
    },
    {
      title: "Defeat Tanglefoot",
      steps: [
        {
          text: "Return to Zanaris with the Magic secateurs.",
          travel: "Dramen or lunar staff equipped, back through the Lumbridge Swamp shed south-west of Lumbridge Castle.",
        },
        {
          text: "Run to the Cosmic Altar area in western Zanaris and squeeze through the gap in the western wall.",
          travel: "From the Zanaris marketplace follow the path west past the throne room turn-off toward the Cosmic Altar entrance; the gap is in the wall on its western side.",
        },
        { text: "Defeat Tanglefoot (level 111) — use Protect from Melee if you have it." },
        { text: "Pick up the Queen's secateurs." },
        {
          text: "Talk to the Fairy Godfather in the Zanaris throne room.",
          travel: "Back east through the gap and north to the throne-room building.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Magic secateurs (boosts crop harvests permanently)",
    "3,500 Farming experience",
    "2,000 Attack experience",
    "1,000 Magic experience",
  ],
};
