import type { QuestWalkthrough } from "../types";

export const shiloVillage: QuestWalkthrough = {
  startPoint: "Talk to Mosol Rei outside Shilo Village in south Karamja.",
  itemsRequired: [
    "Spade",
    "Lit torch / candle / black candle",
    "Rope",
    "Bronze wire",
    "Chisel",
    "3 regular bones",
  ],
  recommended: [
    "Combat 45+",
    "43+ Prayer (Protect from Melee)",
    "Antipoison",
    "Some food + armour",
    "Stamina/energy potions",
  ],
  enemies: [
    "Undead ones (level 61-73)",
    "Nazastarool — 3 forms (level 91/68/93)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Mosol Rei (1, 1, 1, 4, 2)." },
        { text: "Use the wampum belt on Trufitus in Tai Bwo Wannai." },
        { text: "Follow the chat (2, 2, 1, 3, 1)." },
      ],
    },
    {
      title: "Ah Za Rhoon temple",
      steps: [
        { text: "Travel to the temple south-west of the Shipyard." },
        { text: "Use a spade on the mound of earth." },
        { text: "Use a lit torch on the fissure, then a rope." },
        { text: "Climb down (32 Agility)." },
        { text: "Use a chisel on the stone for a stone-plaque." },
        { text: "Pick up the tattered scroll and crumpled scroll." },
        { text: "Take Zadimus's corpse from the ancient gallows." },
        { text: "Return all 4 items to Trufitus." },
        { text: "Bury the corpse at the Tribal Statue near Trufitus." },
        { text: "Use the bone shard on Trufitus." },
      ],
    },
    {
      title: "Tomb of Bervirius",
      steps: [
        { text: "Travel to Cairn Isle with bronze wire + chisel." },
        { text: "Climb the rocks and cross the bridge." },
        { text: "Search the well-stacked rocks; enter the crevice (32 Agility)." },
        { text: "Search the dolmen with 3+ free inventory slots." },
        { text: "Use a chisel on the sword pommel." },
        { text: "Use bronze wire on the bone beads." },
        { text: "Escape the cave via the rockslide." },
      ],
    },
    {
      title: "Tomb of Rashiliyia",
      steps: [
        { text: "Prepare combat gear and prayer." },
        { text: "Navigate to the unique bright green palm tree." },
        { text: "Search from the north side to find the doors." },
        { text: "Use a chisel on the bone shard to make a bone key." },
        { text: "Equip the Beads of the Dead." },
        { text: "Use the key on the doors and open the ancient gate." },
        { text: "Navigate the dungeon west, south, then south-west." },
        { text: "Use 3 regular bones on the tomb doors." },
        { text: "Search the dolmen and defeat Nazastarool's 3 forms." },
        { text: "Take Rashiliyia's corpse." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Cairn Isle." },
        { text: "Go through the well-stacked rocks." },
        { text: "Use the corpse on the dolmen." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "3,875 Crafting experience",
    "Access to Shilo Village (with bank, gem mine, etc.)",
    "Cart travel system + ship charter access",
  ],
};
