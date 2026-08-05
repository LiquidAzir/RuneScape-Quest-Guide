import type { QuestWalkthrough } from "../types";

export const deathToTheDorgeshuun: QuestWalkthrough = {
  startPoint:
    "Talk to Mistag in the Dorgesh-Kaan mine, at the far end of the goblin tunnels below Lumbridge (requires The Lost Tribe). Lumbridge Home Teleport, take the staircase down to the castle cellar, then squeeze through the hole in the cellar wall the goblins dug and follow the tunnel west with a lit light source.",
  itemsRequired: [
    "Light source (lantern recommended)",
    "2 full sets of H.A.M. robes (7 pieces each)",
    "Pickaxe",
  ],
  recommended: [
    "Combat 30+",
    "Some food + weapon + armour",
    "Games necklace for Tears of Guthix teleport",
  ],
  enemies: ["Sigmund (level 50)", "3 H.A.M. guards (level 22) — optional"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Mistag by the gate at the far end of the Dorgesh-Kaan mine to begin.",
          travel:
            "Lumbridge Home Teleport, then take the staircase down into the Lumbridge Castle cellar and squeeze through the hole in the cellar wall opened during The Lost Tribe. Follow the tunnel west with a lit candle/lantern equipped — Mistag stands at the gate where the tunnel meets the Dorgesh-Kaan mine.",
        },
        {
          text: "Bring 2 full sets of H.A.M. robes to Zanik, who waits in the Lumbridge Castle cellar.",
          travel:
            "Walk back east along the same tunnel and climb out into the Lumbridge Castle cellar. Zanik is standing near the hole in the wall.",
        },
      ],
    },
    {
      title: "Explore the surface with Zanik",
      steps: [
        {
          text: "Guide Zanik up out of the cellar and around Lumbridge, showing her 9 surface NPCs and landmarks.",
          travel:
            "Climb the cellar stairs into Lumbridge Castle. Everything Zanik wants to see is within a minute of the castle — the general store and Bob's axe shop east of the castle, the church and Father Aereck south, the cow field and the mill north-west, and the fishing spots on the river.",
        },
        { text: "Confirm exploration completion with Zanik." },
      ],
    },
    {
      title: "Infiltrate the H.A.M. hideout",
      steps: [
        {
          text: "Wear a full set of H.A.M. robes and climb down the hidden trapdoor into the H.A.M. hideout north-west of Lumbridge.",
          travel:
            "From Lumbridge Castle run west over the River Lum bridge, then north-west along the road towards Draynor Village. The trapdoor sits in the small rocky clearing beside the road roughly halfway between the two towns, with a hooded H.A.M. member loitering next to it. Wear all 7 robe pieces before going down or you are thrown straight back out.",
        },
        { text: "Talk to Johanhus Ulsbrecht, the H.A.M. leader, south-east of the stage in the main hall." },
        { text: "Find the trapdoor with Zanik's help." },
      ],
    },
    {
      title: "Eliminate guards",
      steps: [
        { text: "Navigate past guards using dialogue and positioning." },
        { text: "Coordinate with Zanik to eliminate 5 guards strategically." },
        { text: "Pick the lock to escape the cell after being arrested." },
      ],
    },
    {
      title: "Tears of Guthix",
      steps: [
        { text: "Retrieve Zanik's body from the hideout exit." },
        {
          text: "Travel to the Chasm of Tears and talk to Juna, the giant snake coiled by the pool.",
          travel:
            "Games necklace → Tears of Guthix drops you at the chasm mouth. Without one, enter the Lumbridge Swamp Caves through the hole in the ground in the swamp south-west of Lumbridge Castle (light source required) and follow the passage to the glowing chasm; Juna sits at the bottom.",
        },
        { text: "Collect 20 Tears of Guthix with both hands free." },
      ],
    },
    {
      title: "Final confrontation",
      steps: [
        {
          text: "Return to the Lumbridge Castle cellar and prepare for the fight (full H.A.M. robes, food, weapon).",
          travel:
            "Games necklace → Tears of Guthix then back out through the Lumbridge Swamp Caves, or simply Lumbridge Home Teleport and take the cellar stairs inside the castle.",
        },
        {
          text: "Hide Zanik in a crate at the chicken farm north-west of Lumbridge.",
          travel:
            "From Lumbridge Castle run west over the bridge and north past the sheep field — the chicken farm is the fenced pen of chickens beside Fred the Farmer's house, north-west of the town.",
        },
        {
          text: "Return to the H.A.M. hideout, descend the trapdoor and eliminate 3 guards, then Sigmund.",
          travel:
            "Run back south-west from the chicken farm to the road between Lumbridge and Draynor; the hideout trapdoor is in the rocky clearing beside it. Robes on before you climb down.",
        },
        { text: "Destroy the drilling machine and exit south." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Thieving experience",
    "2,000 Ranged experience",
    "Access to Dorgesh-Kaan city + bank + agility shortcut",
    "H.A.M. store room access",
    "Bone bolts (best F2P-ish ranged ammo for low-level)",
  ],
};
