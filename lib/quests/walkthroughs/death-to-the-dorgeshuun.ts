import type { QuestWalkthrough } from "../types";

export const deathToTheDorgeshuun: QuestWalkthrough = {
  startPoint: "Talk to Mistag in the Dorgesh-Kaan mine (after The Lost Tribe).",
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
        { text: "Talk to Mistag in the Dorgesh-Kaan mine to begin." },
        { text: "Bring 2 full sets of H.A.M. robes to Zanik in the Lumbridge cellar." },
      ],
    },
    {
      title: "Explore the surface with Zanik",
      steps: [
        { text: "Guide Zanik through Lumbridge, talking to 9 surface NPCs/locations." },
        { text: "Confirm exploration completion with Zanik." },
      ],
    },
    {
      title: "Infiltrate the H.A.M. hideout",
      steps: [
        { text: "Wear H.A.M. robes and enter the hideout west of the Lumbridge general store." },
        { text: "Talk to Johanhus Ulsbrecht south-east of the stage." },
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
        { text: "Travel to the Chasm of Tears and talk to Juna." },
        { text: "Collect 20 Tears of Guthix with both hands free." },
      ],
    },
    {
      title: "Final confrontation",
      steps: [
        { text: "Return to the cellar and prepare for the fight (full robes)." },
        { text: "Hide Zanik in a crate at the chicken farm." },
        { text: "Descend the trapdoor and eliminate 3 guards then Sigmund." },
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
