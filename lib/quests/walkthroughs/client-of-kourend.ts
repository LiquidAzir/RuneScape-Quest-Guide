import type { QuestWalkthrough } from "../types";

export const clientOfKourend: QuestWalkthrough = {
  startPoint:
    "Talk to Veos at the northern end of the Port Sarim docks (the northernmost pier, past the Karamja and Entrana boats). Amulet of glory to Draynor Village then run west along the road, or Falador Teleport and run south out of the south gate.",
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
          text: "Find Veos at the northernmost Port Sarim pier and ask him to sail you to Great Kourend.",
          travel:
            "Amulet of glory to Draynor Village then run west along the south road into Port Sarim, or Falador Teleport and run south through the south gate. Veos waits on the northernmost dock, north of the Karamja and Entrana boats.",
        },
        {
          text: "On arrival at Port Piscarilius, talk to Veos again on the dock. Pick options 4 then 1 to formally start the quest.",
          travel: "Veos's boat lands you at the Port Piscarilius docks on the north-east coast of Great Kourend.",
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
          text: "Talk to Leenz in the Port Piscarilius general store (chat options 3, then 2).",
          travel: "A short run south-west from the docks — the general store is the shop with the trolley icon in the middle of the port.",
        },
        {
          text: "Talk to Horace in the Hosidius general store (chat options 3, then 2).",
          travel:
            "Hosidius is in the south of Kourend. Skills necklace to the Woodcutting Guild then run north-east, or fairy ring AKR (Hosidius Vinery) then run west. On foot, run south-west from Port Piscarilius past Kourend Castle.",
        },
        {
          text: "Talk to Jennifer in the Shayzien general store (chat options 3, then 2).",
          travel:
            "Shayzien is directly west of Hosidius — run west along the road out of Hosidius and into the walled military town. The general store is in central Shayzien, just north of the plaza.",
        },
        {
          text: "Talk to Munty in the Lovakengj general store (chat options 4, then 2).",
          travel:
            "Lovakengj is the mining town in the north-west of Kourend. Run north from Shayzien over the hills, or take the Lovakengj minecart if you have the favour. The general store is in the centre of town near the bank.",
        },
        {
          text: "Talk to Regath in the Arceuus general store, just south of the Arceuus bank (chat options 4, then 2).",
          travel:
            "Arceuus is the north-eastern town. Fairy ring CIS drops you at the Arceuus Library — run south-east into town. Otherwise Games necklace to Wintertodt and run south-east, or run east from Lovakengj.",
        },
        {
          text: "Return to Veos at the Port Piscarilius dock and pick option 4.",
          travel: "Run east/south-east from Arceuus to the coast — the docks are at the north-east tip of Port Piscarilius.",
        },
      ],
    },
    {
      title: "The Dark Altar",
      steps: [
        {
          text: "Travel to the Dark Altar in the far north of Arceuus.",
          travel:
            "Fairy ring CIS (Arceuus Library) then run north-west up the mountainside, or Games necklace to Wintertodt and run south-east. The altar is the large black stone slab at the foot of the northern cliffs, between Arceuus and the Wintertodt gate.",
        },
        {
          text: "Activate the mysterious orb from Veos by clicking it while standing at the Dark Altar.",
        },
        {
          text: "Return to Veos at the Port Piscarilius dock and pick option 4.",
          travel: "Run south-east back through Arceuus and on to the Port Piscarilius docks on the north-east coast.",
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
