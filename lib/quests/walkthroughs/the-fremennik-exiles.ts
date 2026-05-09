import type { QuestWalkthrough } from "../types";

export const theFremennikExiles: QuestWalkthrough = {
  startPoint: "Talk to Brundt the Chieftain in the Rellekka longhall.",
  itemsRequired: [
    "Mirror shield (for the basilisks)",
    "2 Kegs of beer (buy from Thora)",
    "1 Molten glass",
    "100 Astral runes",
    "Pet rock",
    "Fishing rod",
    "Fremennik shield",
    "Ice gloves (or Smiths gloves (i))",
    "Hammer",
    "Glassblowing pipe",
    "3 Lunar bars (mine + smelt them on the spot)",
    "Seal of passage (if you don't have Elite Fremennik diary)",
  ],
  recommended: [
    "Combat 80+",
    "Stamina/energy potions",
    "Moonclan teleport tablets",
    "Monkfish or better food",
    "Enchanted lyre or Fremennik sea boots for fast Rellekka return",
  ],
  enemies: [
    "Basilisks (levels 53/61/135)",
    "Typhor (level 218)",
    "The Jormungand (level 363) — final boss",
  ],
  sections: [
    {
      title: "Disturbance in Rellekka",
      steps: [
        { text: "Buy 2 kegs of beer from Thora." },
        { text: "Talk to Brundt in the Longhall to start." },
        { text: "Talk to Freygerd south of the sandpit." },
        { text: "Equip your mirror shield and kill a basilisk youngling in the sandpit." },
        { text: "Collect the unsealed letter, fang, and venom gland." },
        { text: "Return them to Freygerd." },
        { text: "Report to Brundt for the cutscene; receive his note." },
      ],
    },
    {
      title: "Build V's shield",
      steps: [
        { text: "Get a Fremennik shield (kill dagannoths/warriors or buy from Bardur)." },
        { text: "Travel to Lunar Isle and convert molten glass at Baba Yaga." },
        { text: "Mine 3 lunar ore north-east of town." },
        { text: "Craft lunar glass at the Astral Altar with 100 astral runes." },
        { text: "Smelt the 3 lunar bars at the furnace." },
        { text: "Smith the V sigil at the anvil." },
        { text: "Enchant the sigil via Fossegrimen at the strange altar." },
        { text: "Use a pet rock on the Large Geyser at Mountain Camp." },
        { text: "Talk to Peer the Seer in Rellekka." },
        { text: "Collect the polishing rock from the geyser (wearing ice gloves)." },
        { text: "Combine all components with the glassblowing pipe." },
      ],
    },
    {
      title: "Basilisks in the market",
      steps: [
        { text: "Talk to Brundt south-east of Rellekka." },
        { text: "Return to the longhall and talk to Brundt again." },
        { text: "Equip V's shield and fight basilisks until 100% completion." },
        { text: "Travel via Fremennik boat to the Island of Stone." },
      ],
    },
    {
      title: "Island of Stone",
      steps: [
        { text: "Talk to Brundt to learn the cave door puzzle (Mastermind-style)." },
        {
          text: "Solve the puzzle using feedback (red = wrong position, green = correct).",
        },
        { text: "Enter the cave with V's shield equipped." },
        { text: "Fight Typhor (level 218) — pray against magic or melee depending on its style." },
        { text: "(Optional) Resupply via Haskell at the western pier between fights." },
        {
          text: "Fight The Jormungand (level 363).",
          notes: [
            "Avoid the red-screen attack by facing AWAY from her.",
            "Break free from rock traps by attacking repeatedly.",
            "Pray Protect from Magic and use crush attacks.",
          ],
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "V's shield",
    "Access to the Island of Stone",
    "Basilisk Knights as Slayer task (Basilisk jaws drop = Neitiznot faceguard)",
    "Ability to craft Neitiznot faceguard",
    "50,000 Slayer experience",
    "50,000 Crafting experience",
    "30,000 Runecraft experience",
  ],
};
