import type { QuestWalkthrough } from "../types";

export const shiloVillage: QuestWalkthrough = {
  startPoint:
    "Talk to Mosol Rei just outside the gates of Shilo Village in southern Karamja (south of Tai Bwo Wannai, on the south coast of Karamja).",
  itemsRequired: [
    "Spade",
    "Lit torch (or candle / black candle) — needed inside the Ah Za Rhoon temple",
    "Rope",
    "Bronze wire",
    "Chisel",
    "3 regular bones",
  ],
  recommended: [
    "Combat 45+",
    "43+ Prayer for Protect from Melee (vs. Nazastarool's melee form)",
    "Antipoison (jungle has poison spiders + scorpions)",
    "Some food + armour",
    "Stamina/energy potions (lots of jungle running)",
    "Glory amulet for fast Karamja teleport (or Brimhaven charter)",
  ],
  enemies: [
    "Undead ones (level 61-73) — wander the Ah Za Rhoon temple area",
    "Nazastarool — boss with 3 forms (zombie level 91, skeleton level 68, ghost level 93)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Karamja (boat from Port Sarim, 30gp) then walk south through the jungle to Shilo Village's gate area. Talk to Mosol Rei standing just outside the closed gate.",
        },
        {
          text: "Choose dialogue options 1, 1, 1, 4, 2 to receive the wampum belt.",
        },
        {
          text: "Travel north to Tai Bwo Wannai village (north of Shilo). Find Trufitus in his hut in the centre of the village. Use the wampum belt on him.",
        },
        {
          text: "Continue the dialogue with chat options 2, 2, 1, 3, 1 — he tells you about the Ah Za Rhoon temple ruins.",
        },
      ],
    },
    {
      title: "Ah Za Rhoon temple",
      steps: [
        {
          text: "Travel west of Tai Bwo Wannai to the temple ruins south-west of the Karamja Shipyard (the small ruined stone structures in the jungle clearing).",
        },
        {
          text: "Use a spade on the mound of earth in the ruins to dig down.",
        },
        {
          text: "Use a lit torch on the fissure that opens, then use a rope on the fissure.",
        },
        {
          text: "Climb down the rope (requires 32 Agility).",
        },
        {
          text: "Inside the cave, use a chisel on the engraved stone wall to take a stone-plaque.",
        },
        {
          text: "Pick up the tattered scroll and crumpled scroll from the cave floor.",
        },
        {
          text: "Walk to the ancient gallows in the cave and take Zadimus's corpse hanging from it.",
        },
        {
          text: "Return all 4 items (stone-plaque, both scrolls, corpse) to Trufitus in Tai Bwo Wannai.",
        },
        {
          text: "Bury Zadimus's corpse at the Tribal Statue (the small totem just outside Trufitus's hut in the centre of Tai Bwo Wannai).",
        },
        {
          text: "Use the bone shard you receive on Trufitus.",
        },
      ],
    },
    {
      title: "Tomb of Bervirius (Cairn Isle)",
      steps: [
        {
          text: "Travel south-west of Tai Bwo Wannai to Cairn Isle (the small island connected by a rope bridge — fairy ring CKR places you nearby). Bring bronze wire + chisel.",
        },
        {
          text: "Climb the rocks at the south end of the island and cross the rope bridge to the inner ledge.",
        },
        {
          text: "Search the well-stacked rocks to reveal a crevice; enter it (requires 32 Agility).",
        },
        {
          text: "Inside the tomb, search the dolmen (requires 3+ free inventory slots) to take its contents.",
        },
        {
          text: "Use a chisel on the sword pommel from the dolmen to chip a bone shard from it.",
        },
        {
          text: "Use the bronze wire on the bone beads from the dolmen to thread them into Beads of the Dead.",
        },
        {
          text: "Escape via the rockslide near the back of the tomb.",
        },
      ],
    },
    {
      title: "Tomb of Rashiliyia",
      steps: [
        { text: "Prepare combat gear, food, antipoison, and prayer potions." },
        {
          text: "From Tai Bwo Wannai, travel west to find a unique bright-green palm tree on the path toward the Karamja Shipyard.",
        },
        {
          text: "Search the trunk from the north side of the tree to reveal hidden tomb doors at its base.",
        },
        {
          text: "Use a chisel on the bone shard to make a bone key.",
        },
        {
          text: "Equip the Beads of the Dead amulet (it lets you damage Nazastarool).",
        },
        {
          text: "Use the bone key on the doors and open the ancient gate.",
        },
        {
          text: "Navigate the dungeon: head west, then south, then south-west to reach the burial chamber.",
        },
        {
          text: "Use 3 regular bones on the tomb doors blocking the burial chamber.",
        },
        {
          text: "Search the dolmen inside the chamber to spawn Nazastarool. Defeat all 3 forms (zombie, skeleton, ghost) — Beads of the Dead must stay equipped.",
        },
        {
          text: "Take Rashiliyia's corpse from the dolmen after the fight.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Cairn Isle south-west of Tai Bwo Wannai with Rashiliyia's corpse.",
        },
        {
          text: "Climb the rocks, cross the bridge, and squeeze through the well-stacked rocks back into the Tomb of Bervirius.",
        },
        {
          text: "Use Rashiliyia's corpse on the dolmen inside the tomb to lay her to rest beside Bervirius.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "3,875 Crafting experience",
    "Access to Shilo Village (bank, gem mine, fishing spots, general store)",
    "Cart travel system between Shilo Village and Brimhaven (200gp per trip)",
    "Ship charter access from Shilo Village docks",
  ],
};
