import type { QuestWalkthrough } from "../types";

export const enakhrasLament: QuestWalkthrough = {
  startPoint:
    "Talk to Lazim, who stands beside a flat stone slab in the Kharidian Desert north-east of the Desert Quarry / Mining Camp and just south of the Bedabin Camp (use Pharaoh's sceptre to Necropolis then run west, or take the magic carpet from Shantay Pass to Bedabin Camp and walk south).",
  itemsRequired: [
    "Chisel",
    "Tinderbox + Candle (or candle from a candle store)",
    "Logs of each type for the brazier puzzle: regular, oak, willow, maple",
    "Pickaxe (rune fastest for sandstone/granite mining)",
    "Soft clay (or clay + jug of water)",
    "Coal",
    "Runes for: any Fire spell, any Wind spell, Crumble Undead",
  ],
  recommended: [
    "Combat 25+",
    "Shantay pass (to enter the desert)",
    "Desert robes + Waterskins (desert heat)",
    "Stamina/energy potions (heavy mining + long walks)",
    "Extra soft clay + chisel if you want to craft a Camel mask after the quest",
  ],
  sections: [
    {
      title: "Build the statue",
      steps: [
        {
          text: "Travel to Lazim — he stands beside a flat slab in the desert, just east of the Desert Quarry (south of Bedabin Camp). Talk to him; he won't let you in until you build a statue of Enakhra on the slab.",
        },
        {
          text: "Mine 32kg of sandstone from the Desert Quarry just to the west (the large open mining pit). Chisel each block down on the slab to form the base.",
        },
        {
          text: "Place the sandstone base on the flat slab.",
        },
        {
          text: "Mine another 20kg of sandstone from the Desert Quarry; chisel it onto the base to form the body.",
        },
        {
          text: "Chisel the statue's body to ready it for a head.",
        },
        {
          text: "Choose your statue's head design from Lazim's options (your choice changes the puzzle answer later — write it down).",
        },
        {
          text: "Mine two 5kg granite pieces from the Desert Quarry (granite rocks at the south-east of the pit).",
        },
        {
          text: "Craft the chosen head from a granite piece on the slab using a chisel.",
        },
        {
          text: "Make sure you have coal and soft clay in your inventory before the next step.",
        },
        {
          text: "Talk to Lazim — he opens the temple under the slab.",
        },
      ],
    },
    {
      title: "Bottom floor — collect the four sigils",
      steps: [
        {
          text: "Climb down into the temple and talk to Lazim at the bottom.",
        },
        {
          text: "Chisel the fallen statue in the centre 4 times to get four limbs (labelled M, R, K, Z for the 4 chambers).",
        },
        {
          text: "Take the statue head Lazim hands you.",
        },
        {
          text: "Collect the M sigil from the central pedestal in the bottom floor's main room.",
        },
        {
          text: "Travel out through the four outer hallways: each leads to a sigil room (R, K, Z). Use the matching limb (R-limb on R door, etc.) to open each door, then take its sigil.",
        },
        {
          text: "Return to the central room and place all 4 sigils on the central pedestal to dispel the magic barrier.",
        },
        {
          text: "Climb the ladder up to the middle floor.",
        },
      ],
    },
    {
      title: "Middle floor — puzzle chambers",
      steps: [
        {
          text: "On the middle floor, use soft clay on the central pedestal to make a clay impression.",
        },
        {
          text: "Chisel the second 5kg granite piece into a stone head matching the design you chose earlier.",
        },
        {
          text: "Place the stone head on the central pedestal.",
        },
        {
          text: "Walk to the north-west chamber: use any cooked food on Pentyn (the trapped NPC inside) to free him.",
        },
        {
          text: "North-east chamber: cast a Wind spell on the unlit furnace inside to ignite it.",
        },
        {
          text: "South-east chamber: light all 6 braziers with their correct fuels — each brazier accepts a specific log type (regular / oak / willow / maple, in the order shown by the wall murals beside the braziers).",
        },
        {
          text: "South-west chamber: cast a Fire spell on the frozen fountain inside to thaw it.",
        },
        {
          text: "Once all 4 chambers are solved, the magic barrier in the centre drops; pass through and climb the ladder up to the top floor.",
        },
      ],
    },
    {
      title: "Top floor and finish",
      steps: [
        {
          text: "On the top floor, cast Crumble Undead on the first boneguard blocking the way.",
        },
        {
          text: "Climb down the stone ladder past the boneguard into the inner sanctum.",
        },
        {
          text: "Activate Protect from Melee before approaching Enakhra's altar.",
        },
        {
          text: "Talk to the second boneguard guarding the altar inside Enakhra's Temple.",
        },
        {
          text: "Collect 3 sandstone blocks from the rubble pile in the sanctum.",
        },
        {
          text: "Use a sandstone block on the southern wall, then chisel it into the wall — repeat 3 times to seal the breach.",
        },
        {
          text: "Talk to the boneguard inside Enakhra's Temple again to finish.",
        },
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
    "Camulet (rechargeable teleport to Enakhra's Temple)",
    "Ability to craft a Camel mask (cosmetic) using sandstone + a chisel inside the temple",
  ],
};
