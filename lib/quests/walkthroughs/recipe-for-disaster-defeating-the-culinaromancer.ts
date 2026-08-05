import type { QuestWalkthrough } from "../types";

export const rfdCulinaromancer: QuestWalkthrough = {
  startPoint:
    "After freeing all 9 trapped guests, talk to Gypsy Aris in her tent in Varrock Square — Varrock teleport drops you in the square and the tent is on its south-west side, opposite the general store. She gives you the go-ahead for the Lumbridge Castle cellar.",
  itemsRequired: [
    "All 9 RFD subquests complete",
    "Strong combat gear (your best melee/ranged setup)",
    "Sharks/anglers (lots)",
    "Prayer potions",
    "The icyene gauntlets/specific item drops Gypsy Aris asks for",
  ],
  recommended: [
    "Combat 80+",
    "43 Prayer for protection prayers",
    "An anti-dragon shield + antifire potion (the second mage form is a dragonbreath)",
    "Recoil ring",
    "Lumbridge teleport",
  ],
  enemies: [
    "Agrith Naar (level 100) — Silverlight required",
    "Flambeed (level 149) — Pizza required",
    "Karamel (level 82) — Ice gloves required",
    "Dessourt (level 121) — Dragon battleaxe required",
    "Gelatinnoth Mother (level 92) — multiple forms (use spell matching her colour)",
    "The Culinaromancer (level 122)",
  ],
  sections: [
    {
      title: "Final preparations",
      steps: [
        { text: "Make sure all 9 sub-quests are complete (Mountain Dwarf, Goblin Generals, Pirate Pete, Lumbridge Guide, Evil Dave, King Awowogei, Sir Amik Varze, Skrach Uglogwee, Another Cook's Quest)." },
        {
          text: "Talk to Gypsy Aris in her tent in Varrock Square — she summarises what you need.",
          travel:
            "Varrock teleport puts you in Varrock Square; her striped tent is on the south-west side of the square, across from the general store.",
        },
        { text: "Bring the listed counter-items to the cellar: Silverlight, pizza, ice gloves, dragon battleaxe (and the spell runes for Gelatinnoth Mother)." },
      ],
    },
    {
      title: "Defeat the 5 boss minions",
      steps: [
        {
          text: "Enter the Lumbridge Castle cellar and head down to the Culinaromancer's chamber.",
          travel:
            "Lumbridge Home Teleport, walk into the castle and take the staircase down in the ground-floor kitchen (north-west corner, beside the Cook). At the bottom, run past the Culinaromancer's Chest to the far end of the cellar — the portal to the boss chamber is there.",
        },
        { text: "Defeat Agrith Naar with Silverlight." },
        { text: "Defeat Flambeed with a pizza in your inventory." },
        { text: "Defeat Karamel with ice gloves equipped." },
        { text: "Defeat Dessourt with a dragon battleaxe." },
        {
          text: "Defeat Gelatinnoth Mother — she changes colour; use the matching elemental spell on each form.",
          notes: ["Forms cycle through magic colours (fire, water, earth, air, shadow, smoke, blood, ice)."],
        },
      ],
    },
    {
      title: "Defeat the Culinaromancer",
      steps: [
        {
          text: "Defeat the Culinaromancer (level 122) using your best combat style.",
          notes: ["Eat aggressively. Use Protect from Magic to mitigate damage."],
        },
        { text: "Watch the final cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Cooking gauntlets / Goldsmith gauntlets / Chaos gauntlets (swap-able forever after)",
    "20,000 of every cooking-related XP (Cooking, Fishing, Farming, etc.)",
    "Full access to the Culinaromancer's Chest (free F2P bank inside Lumbridge Cellar with food sales)",
    "Barrows gloves can be purchased here for 130k coins",
  ],
};
