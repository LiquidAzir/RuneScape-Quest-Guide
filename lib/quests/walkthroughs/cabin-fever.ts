import type { QuestWalkthrough } from "../types";

export const cabinFever: QuestWalkthrough = {
  startPoint:
    "Talk to Bill Teach at The Green Ghost inn in Port Phasmatys (north-east Morytania). Ectophial teleports you to the Ectofuntus just north-west of town — run south-east through the town gate. Otherwise fairy ring ALQ (Haunted Woods) and run north-east, or charter a ship to Port Phasmatys. You need 2 ecto-tokens to pass the gate unless Ghosts Ahoy is complete.",
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
        {
          text: "Travel to Port Phasmatys and find The Green Ghost inn.",
          travel:
            "Ectophial smashes you down at the Ectofuntus just north-west of Port Phasmatys — run south-east and in through the town gate. No ectophial: fairy ring ALQ drops you in the Haunted Woods west of town (run north-east), or charter a ship to Port Phasmatys, or run east from Canifis through the Haunted Woods. The inn is in the western half of town, marked by the beer-mug icon on the minimap.",
        },
        { text: "Talk to Bill Teach in the inn; agree to become a pirate." },
        {
          text: "Run to the Port Phasmatys docks and board the easternmost ship.",
          travel: "The docks are on the east side of town, past the bank — head straight east from the inn.",
        },
        { text: "Talk to Bill Teach on the deck of his ship." },
      ],
    },
    {
      title: "Sabotage the enemy ship",
      steps: [
        { text: "Take 4 ropes from the repair locker below deck." },
        { text: "Take 1 fuse from the gun locker." },
        { text: "Take a tinderbox from the south end." },
        { text: "Climb the ladder and use the climbing net on their mast." },
        { text: "Use a rope on the hoisted sail." },
        { text: "Use the fuse on their powder barrel." },
        { text: "Light the fuse with the tinderbox." },
        { text: "Climb their net and rope their sail." },
        { text: "Talk to Bill Teach on the deck of the ship." },
      ],
    },
    {
      title: "Fix leaks",
      steps: [
        { text: "Descend the ladder to the lower deck." },
        { text: "Take 6 planks, hammer, 30 tacks, 3 swamp paste from the repair locker." },
        { text: "Repair leaky holes using planks + tacks." },
        { text: "Waterproof with swamp paste." },
        { text: "Talk to Bill Teach on the deck of the ship." },
      ],
    },
    {
      title: "Pirate plunder",
      steps: [
        { text: "Swing across to the enemy ship." },
        { text: "Climb down the ladder into their hold." },
        { text: "Gather 10 plunder from chest, barrel, and crate." },
        { text: "Swing back with the plunder." },
        { text: "Deposit it in the chest on the lower deck." },
        { text: "Talk to Bill Teach on the deck of the ship." },
      ],
    },
    {
      title: "Cannon volley",
      steps: [
        { text: "Take a cannon barrel from the gun locker." },
        { text: "Repair the broken cannon on the top deck." },
        { text: "Talk to Bill Teach on the deck of the ship." },
        { text: "Gather ramrod, fuses, canisters, and gunpowder." },
        { text: "Fire the cannon at pirates (3 must die with canisters)." },
        { text: "Take cannonballs and repeat firing until 3 holes blown in the enemy ship." },
        { text: "Talk to Bill Teach on the deck of the ship to finish." },
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
