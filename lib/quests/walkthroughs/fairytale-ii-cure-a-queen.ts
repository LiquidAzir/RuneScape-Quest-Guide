import type { QuestWalkthrough } from "../types";

export const fairytaleIICureAQueen: QuestWalkthrough = {
  startPoint:
    "Talk to Martin the Master Gardener by the pig pen on the farm north-east of Draynor Village. Getting there: Amulet of glory to Draynor Village, then run north-east past the bank to the fenced farm beside the wheat field.",
  itemsRequired: [
    "Dramen or Lunar staff",
    "Vial of water",
    "Pestle and mortar",
    "Cosmic tiara",
    "Nuff's certificate (in-quest)",
  ],
  recommended: [
    "Combat 55+",
    "Combat gear + food",
    "Restore potion",
    "Fairy ring teleports",
  ],
  enemies: ["Goraks (level 145) — safespottable, prayers ineffective"],
  sections: [
    {
      title: "Unlock the fairy rings",
      steps: [
        {
          text: "Talk to Martin the Master Gardener at the Draynor Village pig pen.",
          travel:
            "Amulet of glory to Draynor Village, then north-east past the bank to the farm — Martin walks around the pig pen next to the wheat field.",
        },
        { text: "Wait 5 real-world minutes." },
        { text: "Talk to Martin at the pig pen again." },
        {
          text: "Travel to Fairy Nuff's grotto in Zanaris.",
          travel:
            "Equip a dramen or lunar staff, then enter the wooden shed in Lumbridge Swamp south-west of Lumbridge Castle to drop into Zanaris. Nuff's grotto is the rock doorway in the north-west corner of Zanaris, west of the throne room.",
        },
        { text: "Pick up and study Nuff's Healing certificate inside the grotto." },
        {
          text: "Read the Rune temple sign south of the Cosmic Altar.",
          travel: "Head south-west from the grotto to the Cosmic Altar entrance in western Zanaris; the sign is on the path just south of it.",
        },
        {
          text: "Talk to the Fairy Godfather in the throne room.",
          travel: "Run east back to the large stone throne-room building in northern Zanaris.",
        },
        { text: "Talk to the Co-ordinator in the room north of the throne room — the fairy rings unlock." },
        {
          text: "Talk to Fairy Fixit beside the fairy ring west of the Zanaris marketplace.",
          travel: "South out of the throne room, then west past the marketplace to the fairy ring platform.",
        },
      ],
    },
    {
      title: "Cure the Queen",
      steps: [
        {
          text: "Ride the fairy ring sequence AIR then DLR then DJQ then AJS to reach the fairy hideout.",
          travel:
            "Use the Zanaris fairy ring with your staff equipped and dial each code in turn, taking the next ring you land beside each time. Note the sequence down — you will run it several more times this quest.",
        },
        { text: "Talk to Fairy Nuff and Fairy Very Wise in the hideout." },
        {
          text: "Return to Zanaris and pickpocket the Fairy Godfather in the throne room for the Queen's secateurs.",
          travel: "Dial BKS from the hideout ring to get back to Zanaris, then run north into the throne room.",
        },
        {
          text: "Return to the fairy hideout with the secateurs (AIR, DLR, DJQ, AJS again).",
        },
        {
          text: "Travel to fairy ring CKP and wait 2-5 minutes for a star flower to appear, then pick it.",
          travel: "Dial CKP from any fairy ring; the star flowers grow on the plane you land on — stand by and wait for one to bloom.",
        },
        {
          text: "Travel to fairy ring DIR, kill a Gorak and collect its claws.",
          travel:
            "Dial DIR — the Gorak plane. Goraks (level 145) ignore prayers, so bring food or safespot them from behind the ring platform. Dial the ring again to leave.",
        },
        { text: "Return to the fairy hideout (AIR, DLR, DJQ, AJS)." },
        { text: "Use the star flower on a vial of water." },
        { text: "Grind the gorak claws with a pestle and mortar and combine the powder with the essence." },
        { text: "Right-click apply the magic essence potion to the Queen." },
        { text: "Talk to the Fairy Queen in the hideout." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "3,500 Herblore experience",
    "2,500 Thieving experience",
    "Antique lamp (2,500 XP in any 30+ skill)",
    "Access to the Fairy ring network (most of OSRS map at your fingertips)",
    "Access to Fairy Fixit's shop",
  ],
};
