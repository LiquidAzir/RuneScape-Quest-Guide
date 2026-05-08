import type { QuestWalkthrough } from "../types";

export const enakhrasLament: QuestWalkthrough = {
  startPoint: "Talk to Lazim north-east of the Desert Quarry (south of Bedabin Camp).",
  itemsRequired: [
    "Chisel",
    "Tinderbox + Candle",
    "Logs (regular, oak, willow, maple) for the brazier puzzle",
    "Pickaxe (rune is fastest)",
    "Soft clay",
    "Coal",
    "Fire spell runes + Wind spell runes + Crumble Undead runes",
  ],
  recommended: [
    "Combat 25+",
    "Shantay pass for desert ferry",
    "Desert robes + Waterskins",
    "Stamina potions",
    "Extra soft clay if you want a Camel mask",
  ],
  sections: [
    {
      title: "Build the statue",
      steps: [
        { text: "Talk to Lazim. He needs a statue built before he can let you in." },
        { text: "Mine 32kg of sandstone in the quarry; chisel it down." },
        { text: "Place the base on the flat ground." },
        { text: "Mine 20kg of sandstone; chisel it into a body." },
        { text: "Chisel the statue to ready it for a head." },
        {
          text: "Choose and remember a head design (yours alters the puzzle later).",
        },
        { text: "Mine two 5kg granite pieces." },
        { text: "Craft the chosen head from granite." },
        { text: "Make sure you have coal and soft clay in your inventory." },
        { text: "Talk to Lazim — he opens the temple beneath the statue." },
      ],
    },
    {
      title: "Bottom floor — collect the four sigils",
      steps: [
        { text: "Talk to Lazim at the bottom." },
        { text: "Chisel the fallen statue 4 times to get limbs (M, R, K, Z)." },
        { text: "Take the statue head from Lazim." },
        { text: "Collect the M sigil from the central pedestal." },
        { text: "Travel through the outer hallways to find the R, K, and Z sigils — use limbs on the matching doors." },
        { text: "Return to the centre and place all 4 sigils to open the barrier." },
        { text: "Climb the ladder up." },
      ],
    },
    {
      title: "Middle floor — puzzle chambers",
      steps: [
        { text: "Use soft clay on the central pedestal." },
        { text: "Chisel the 5kg granite piece into a stone head." },
        { text: "Place the head on the pedestal." },
        { text: "North-west chamber: Use food on Pentyn." },
        { text: "North-east chamber: Cast a wind spell on the furnace." },
        { text: "South-east chamber: Light all 6 braziers with their correct fuels (logs/oak/willow/maple/etc.)." },
        { text: "South-west chamber: Cast a fire spell on the frozen fountain." },
        { text: "Pass through the magic barrier and climb up." },
      ],
    },
    {
      title: "Top floor and finish",
      steps: [
        { text: "Cast Crumble Undead on the boneguard." },
        { text: "Climb down the stone ladder." },
        { text: "Activate Protect from Melee." },
        { text: "Talk to the second boneguard." },
        { text: "Collect 3 sandstones from the rubble pile." },
        { text: "Use sandstone on the southern wall and chisel 3 times." },
        { text: "Talk to the boneguard to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "7,000 Crafting experience",
    "7,000 Mining experience",
    "7,000 Firemaking experience",
    "7,000 Magic experience",
    "Camulet (rechargeable teleport to the temple)",
    "Ability to craft a Camel mask (cosmetic)",
  ],
};
