import type { QuestWalkthrough } from "../types";

export const fairytaleIICureAQueen: QuestWalkthrough = {
  startPoint: "Talk to Martin the Master Gardener in Draynor Village.",
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
        { text: "Talk to Martin the Master Gardener at the Draynor Village pig pen." },
        { text: "Wait 5 real-world minutes." },
        { text: "Talk to Martin the Master Gardener at the Draynor Village pig pen again." },
        { text: "Travel to Fairy Nuff's grotto in Zanaris." },
        { text: "Pick up and study Nuff's Healing certificate." },
        { text: "Read the Rune temple sign south of the Cosmic Altar." },
        { text: "Talk to the Fairy Godfather in the throne room." },
        { text: "Talk to the Co-ordinator north of the throne room — fairy rings unlock." },
        { text: "Talk to Fairy Fixit near the western fairy ring." },
      ],
    },
    {
      title: "Cure the Queen",
      steps: [
        { text: "Use fairy ring sequence: AIR → DLR → DJQ → AJS." },
        { text: "Talk to Fairy Nuff and Fairy Very Wise in the fairy hideout reached by AIR-DLR-DJQ-AJS." },
        { text: "Return to Zanaris (BKS); pickpocket the Fairy Godfather in the throne room for Queen's secateurs." },
        { text: "Return to the fairy hideout with the secateurs." },
        { text: "Travel to CKP and wait 2-5 minutes to pick a star flower." },
        { text: "Travel to DIR; kill a Gorak; collect gorak claws." },
        { text: "Return to the fairy hideout reached by AIR-DLR-DJQ-AJS." },
        { text: "Use the star flower on a vial of water." },
        { text: "Grind gorak claws to powder; combine with essence." },
        { text: "Right-click apply the magic essence potion to the Queen." },
        { text: "Talk to the Fairy Queen in the fairy hideout reached by AIR-DLR-DJQ-AJS." },
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
