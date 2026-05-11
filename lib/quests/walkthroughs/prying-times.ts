import type { QuestWalkthrough } from "../types";

export const pryingTimes: QuestWalkthrough = {
  startPoint: "Talk to 'Squawking' Steve Beanie in the Pandemonium Pub.",
  itemsRequired: [
    "Captain's log (from Pandemonium)",
    "Steel bar",
    "Hammer (or Imcando hammer)",
    "Redberry pie",
  ],
  recommended: ["Combat 10+", "120 coins (or Ring of Charos) for charter ship"],
  enemies: ["Drink troll (level 14) — optional"],
  sections: [
    {
      title: "Looty",
      steps: [
        { text: "Talk to Steve Beanie in the Port Piscarilius pub with the Captain's log to accept the courier task." },
        { text: "Sail to Port Sarim and take cargo from the ledger table." },
        { text: "Deposit the crate into the cargo hold." },
        { text: "Sail south to The Pandemonium and dock." },
        { text: "Withdraw the crate and deposit at the ledger table." },
        { text: "Talk to Steve Beanie in the Port Piscarilius pub about the delivery." },
      ],
    },
    {
      title: "Crowbar",
      steps: [
        { text: "Travel south of Port Sarim docks to find Thurgo." },
        { text: "Give him a steel bar + redberry pie for a crowbar." },
        { text: "Return to Steve and report." },
        { text: "Sail to the north-western island and pry open the sealed crate." },
        { text: "Drink the fish bladder stout and defeat or avoid the drink troll." },
        { text: "Return to Steve and open the sealed crate behind him." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Smithing experience",
    "800 Sailing experience",
    "Ability to chart forgotten drinks",
    "25 sawmill coupons (oak plank)",
    "Unlimited crowbar access",
  ],
};
