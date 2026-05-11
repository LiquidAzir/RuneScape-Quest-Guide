import type { QuestWalkthrough } from "../types";

export const clientOfKourend: QuestWalkthrough = {
  startPoint:
    "Talk to Veos at the northern end of Port Sarim docks (he stands beside the small ship at the northernmost dock — the one to Great Kourend, north of the standard Karamja boat).",
  itemsRequired: ["Feather (any coloured/striped feather works; magic gold feather does NOT work)"],
  recommended: [
    "Weight-reducing clothing",
    "Stamina/energy potions",
    "Skills necklace (Woodcutting Guild teleport for Hosidius), Amulet of glory (Karamja for nearby boat), Explorer's ring",
    "Lovakengj minecart access (post-quest fast travel) or fairy rings",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to Port Sarim docks and find Veos at the northernmost dock (the small ship furthest north, beside the wizard at the white-hulled boat). Talk to him; he sails you to Port Piscarilius in Great Kourend.",
        },
        {
          text: "On arrival in Port Piscarilius (north-east Kourend), talk to Veos again on the dock. Pick options 4 then 1 to formally start the quest.",
        },
        {
          text: "Receive the enchanted scroll from Veos.",
        },
        {
          text: "Use a feather on the enchanted scroll to make an enchanted quill.",
        },
      ],
    },
    {
      title: "Visit each town's shop owner (use the enchanted quill on each)",
      steps: [
        {
          text: "Port Piscarilius (north-east Kourend): walk into the general store on the south side of the port. Talk to Leenz inside (chat options 3, then 2).",
        },
        {
          text: "Hosidius (south-west Kourend): travel south-west — Skills necklace → Woodcutting Guild then run east, or run south from Port Piscarilius. Find Horace at the Hosidius general store in central Hosidius. Talk to him (chat options 3, then 2).",
        },
        {
          text: "Shayzien (south-west Kourend, west of Hosidius): walk west of Hosidius into Shayzien village. Find Jennifer at the Shayzien general store in central Shayzien (north of the central plaza). Talk to her (chat options 3, then 2).",
        },
        {
          text: "Lovakengj (south-east Kourend): travel east from Shayzien through the mountain pass, or use Lovakengj sulphur mine teleport. Find Munty at the Lovakengj general store in central Lovakengj. Talk to him (chat options 4, then 2).",
        },
        {
          text: "Arceuus (north Kourend): travel north — Games necklace → Wintertodt then run south, or fairy ring CIS + run south. Find Regath at the Arceuus general store in central Arceuus (just south of the bank). Talk to him (chat options 4, then 2).",
        },
        {
          text: "Return to Veos at the Port Piscarilius dock (north-east Kourend) and pick option 4.",
        },
      ],
    },
    {
      title: "The Dark Altar",
      steps: [
        {
          text: "Travel to the Dark Altar in north Arceuus (Games necklace → Wintertodt then south-east; or fairy ring CIS + run south-east). The altar is the large dark stone slab on the north Arceuus mountainside, just east of the Wintertodt boss area.",
        },
        {
          text: "Activate the mysterious orb from Veos by clicking it while standing at the Dark Altar.",
        },
        {
          text: "Return to Veos at the Port Piscarilius dock and pick option 4.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2 antique lamps (500 XP each in your choice of skill)",
    "Kharedst's memoirs (Kourend teleport book — gain pages from later Kourend quests for more teleport options)",
    "Kourend Castle Teleport spell unlock (Standard spellbook, Magic 69)",
  ],
};
