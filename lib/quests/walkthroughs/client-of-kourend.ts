import type { QuestWalkthrough } from "../types";

export const clientOfKourend: QuestWalkthrough = {
  startPoint: "Talk to Veos at Port Piscarilius (sail from Port Sarim's northern dock).",
  itemsRequired: ["Feather (any coloured/striped feather works; magic gold feather does not)"],
  recommended: [
    "Weight-reducing clothing",
    "Stamina/energy potions",
    "Skills necklace, Amulet of glory, Explorer's ring",
    "Lovakengj minecart access or fairy rings",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Sail with Veos from Port Sarim northern dock to Port Piscarilius." },
        { text: "Talk to Veos and pick options 4 then 1." },
        { text: "Receive the enchanted scroll." },
        { text: "Use a feather on the scroll to make an enchanted quill." },
      ],
    },
    {
      title: "Visit each town's shop owner",
      steps: [
        { text: "Port Piscarilius: talk to Leenz (3, then 2)." },
        { text: "Hosidius: talk to Horace (3, then 2)." },
        { text: "Shayzien: talk to Jennifer (3, then 2)." },
        { text: "Lovakengj: talk to Munty (4, then 2)." },
        { text: "Arceuus: talk to Regath (4, then 2)." },
        { text: "Return to Veos at Port Piscarilius (option 4)." },
      ],
    },
    {
      title: "The Dark Altar",
      steps: [
        {
          text: "Travel to the Dark Altar in Arceuus (Games necklace to Wintertodt then south-east, or fairy ring CIS).",
        },
        { text: "Activate the mysterious orb near the altar." },
        { text: "Return to Veos and pick option 4." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2 antique lamps (500 XP each in your choice of skill)",
    "Kharedst's memoirs (Kourend teleport book — gain pages from later Kourend quests)",
    "Kourend Castle Teleport spell unlock",
  ],
};
