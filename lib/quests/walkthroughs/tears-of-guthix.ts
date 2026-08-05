import type { QuestWalkthrough } from "../types";

export const tearsOfGuthix: QuestWalkthrough = {
  startPoint:
    "Talk to Juna, the giant snake beside the Tears of Guthix chasm in the Lumbridge Swamp Caves. Lumbridge Home Teleport, run south into the swamp, and climb down the hole west of the mining site — tie a rope to it the first time. Bring a lit light source; the caves are pitch dark.",
  itemsRequired: [
    "Lit sapphire lantern (cut sapphire on a bullseye lantern, light with tinderbox)",
    "Chisel",
    "Tinderbox",
    "Pickaxe",
    "Rope (only if entering the cave for the first time)",
  ],
  recommended: ["Spiny helmet or Slayer helmet (mitigates wall beasts if Lost Tribe is incomplete)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Juna by the chasm in the Lumbridge Swamp Caves and pick 'Okay...'.",
          travel:
            "Lumbridge Home Teleport, run south past the castle into Lumbridge Swamp, then climb down the dark hole west of the swamp mine (rope required on the first visit). Follow the cave east past the wall beasts to the glowing chasm where Juna is coiled. Carry a lit lantern — a candle will not survive.",
        },
      ],
    },
    {
      title: "The bowl of stone",
      steps: [
        { text: "Use a cut sapphire on a bullseye lantern frame." },
        { text: "Light the sapphire lantern with a tinderbox." },
        { text: "Climb the north rock and use the lantern on a Light creature above the chasm." },
        { text: "Mine a rock; chisel it; climb down the eastern rocks." },
        { text: "Talk to Juna in the Lumbridge Swamp Caves to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Crafting experience",
    "Access to the weekly Tears of Guthix minigame (free XP in your lowest skill)",
  ],
};
