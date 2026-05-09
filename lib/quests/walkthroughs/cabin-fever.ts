import type { QuestWalkthrough } from "../types";

export const cabinFever: QuestWalkthrough = {
  startPoint: "Talk to Bill Teach at The Green Ghost inn in Port Phasmatys.",
  itemsRequired: [],
  recommended: [
    "Combat 35+",
    "3,500gp or 2 ecto-tokens for charter ship (skip if you've done Ghosts Ahoy)",
    "Some food (level 57 pirates attack)",
    "Ectophial",
  ],
  enemies: ["Pirates (level 57) — multiple boarding combat"],
  sections: [
    {
      title: "Set sail",
      steps: [
        { text: "Travel to Port Phasmatys (charter ship if needed)." },
        { text: "Talk to Bill Teach in the inn; agree to become a pirate." },
        { text: "Run to the dock and board the easternmost ship." },
        { text: "Talk to Bill Teach on board." },
      ],
    },
    {
      title: "Sabotage the enemy ship",
      steps: [
        { text: "Take 4 ropes from the repair locker." },
        { text: "Take 1 fuse from the gun locker." },
        { text: "Take a tinderbox from the south end." },
        { text: "Climb the ladder and use the climbing net on their mast." },
        { text: "Use a rope on the hoisted sail." },
        { text: "Use the fuse on their powder barrel." },
        { text: "Light the fuse with the tinderbox." },
        { text: "Climb their net and rope their sail." },
        { text: "Talk to Bill Teach." },
      ],
    },
    {
      title: "Fix leaks",
      steps: [
        { text: "Descend the ladder." },
        { text: "Take 6 planks, hammer, 30 tacks, 3 swamp paste from the repair locker." },
        { text: "Repair leaky holes using planks + tacks." },
        { text: "Waterproof with swamp paste." },
        { text: "Talk to Bill Teach." },
      ],
    },
    {
      title: "Pirate plunder",
      steps: [
        { text: "Swing to the enemy ship." },
        { text: "Climb down the ladder." },
        { text: "Gather 10 plunder from chest, barrel, and crate." },
        { text: "Swing back with the plunder." },
        { text: "Deposit it in the chest on the lower deck." },
        { text: "Talk to Bill Teach." },
      ],
    },
    {
      title: "Cannon volley",
      steps: [
        { text: "Take a cannon barrel from the gun locker." },
        { text: "Repair the broken cannon on the top deck." },
        { text: "Talk to Bill Teach." },
        { text: "Gather ramrod, fuses, canisters, and gunpowder." },
        { text: "Fire the cannon at pirates (3 must die with canisters)." },
        { text: "Take cannonballs and repeat firing until 3 holes blown in the enemy ship." },
        { text: "Talk to Bill Teach." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "7,000 Crafting + Smithing + Agility experience each",
    "10,000 coins (talk to Bill Teach after)",
    "Access to Mos Le'Harmless and Cave Horrors slayer task",
    "Book o' piracy + halved charter ship prices",
    "Trouble Brewing minigame access",
  ],
};
