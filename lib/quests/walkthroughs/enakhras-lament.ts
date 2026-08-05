import type { QuestWalkthrough } from "../types";

export const enakhrasLament: QuestWalkthrough = {
  startPoint:
    "Talk to Lazim, who stands beside a flat stone slab in the Kharidian Desert between the Desert Quarry and the Bedabin Camp. Getting there: go through the Shantay Pass south of Al Kharid, pay Rug merchant Shantay 200 coins for the magic carpet to the Bedabin Camp, then run south-west across the sand to the slab (the Desert Quarry pit is the landmark just west of it). Bring waterskins and desert robes — the heat drains run energy and hit points the whole way.",
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
          text: "Talk to Lazim at the flat stone slab in the desert — he won't let you in until you build a statue of Enakhra on it.",
          travel:
            "Get to the Shantay Pass south of Al Kharid (ring of dueling to Emir's Arena and run north-west into Al Kharid, then straight south out of the city), then take Shantay's magic carpet to the Bedabin Camp for 200 coins and run south-west. The slab sits in open sand just east of the Desert Quarry pit. Walking instead: from the Shantay Pass run south past the Bandit Camp and then south-west — bring 3-4 waterskins.",
        },
        {
          text: "Mine 32kg of sandstone from the Desert Quarry and chisel each block down on the slab to form the base.",
          travel: "The Desert Quarry is the big open mining pit a short run west of Lazim's slab.",
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
          text: "Mine two 5kg granite rocks in the Desert Quarry (the granite rocks sit at the south-east side of the pit).",
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
          travel: "The entrance is the slab itself — climb down once Lazim opens it.",
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
          text: "Follow each of the four outer hallways to its sigil room, use the matching limb on the door (R-limb on the R door, and so on), and take the sigil inside.",
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
          text: "Use soft clay on the central pedestal of the middle floor to make a clay impression.",
        },
        {
          text: "Chisel the second 5kg granite piece into a stone head matching the design you chose earlier.",
        },
        {
          text: "Place the stone head on the central pedestal.",
        },
        {
          text: "Use any cooked food on Pentyn, the trapped NPC in the north-west chamber, to free him.",
          travel: "From the middle floor's central pedestal, take the north-west corridor.",
        },
        {
          text: "Cast a Wind spell on the unlit furnace in the north-east chamber to ignite it.",
          travel: "Back to the centre, then take the north-east corridor.",
        },
        {
          text: "Light all 6 braziers in the south-east chamber with their correct fuels — each brazier takes a specific log type (regular / oak / willow / maple) in the order shown by the wall murals beside them.",
          travel: "Back to the centre, then take the south-east corridor.",
        },
        {
          text: "Cast a Fire spell on the frozen fountain in the south-west chamber to thaw it.",
          travel: "Back to the centre, then take the south-west corridor.",
        },
        {
          text: "Once all 4 chambers are solved the central barrier drops — pass through and climb the ladder up to the top floor.",
        },
      ],
    },
    {
      title: "Top floor and finish",
      steps: [
        {
          text: "Cast Crumble Undead on the first boneguard blocking the top-floor passage.",
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
