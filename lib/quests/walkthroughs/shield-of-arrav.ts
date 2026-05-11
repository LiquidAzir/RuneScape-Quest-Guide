import type { QuestWalkthrough } from "../types";

export const shieldOfArrav: QuestWalkthrough = {
  startPoint: "Talk to Reldo the librarian in Varrock Palace library.",
  itemsRequired: [
    "Phoenix Gang path: 20 coins",
    "Black Arm Gang path: 2 Phoenix crossbows (in-quest)",
  ],
  recommended: [
    "Combat 10+",
    "A friend on the opposite gang to swap shield halves with (or do both gangs solo on different accounts)",
  ],
  enemies: [
    "Weaponsmaster (level 23) — Black Arm path",
    "Jonny the Beard (level 2) — Phoenix path",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Reldo in the Varrock Palace library." },
        { text: "Check the bookcase with the bright blue book on the top shelf and read it." },
        { text: "Talk to Reldo again in the Varrock Palace library and choose your gang affiliation." },
      ],
    },
    {
      title: "Black Arm Gang path",
      steps: [
        { text: "Talk to Charlie the Tramp near Varrock's south entrance." },
        { text: "Enter the Black Arm Gang headquarters through the west alley door." },
        { text: "Talk to Katrine and trade your partner for a weapon store key." },
        { text: "Travel to south-east Varrock; enter the small room with the ladder." },
        { text: "Get 2 Phoenix crossbows (kill the Weaponsmaster or use Telekinetic Grab)." },
        { text: "Return crossbows to Katrine." },
        { text: "Open the cupboard upstairs to get the right half of the shield." },
      ],
    },
    {
      title: "Phoenix Gang path",
      steps: [
        { text: "Talk to Baraek the fur trader in Varrock Square with 20gp." },
        { text: "Travel to the Phoenix Gang Hideout (south-east Varrock basement)." },
        { text: "Talk to Straven in the Phoenix Gang hideout in south-west Varrock and accept the membership task." },
        { text: "Kill Jonny the Beard at the Blue Moon Inn; pick up the Intel report." },
        { text: "Return the report to Straven." },
        { text: "Open the chest in the hideout's south-west corner for the shield half." },
        { text: "Trade the weapon store key to your partner." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Take the shield half to Curator Haig Halen at the Varrock Museum." },
        { text: "Exchange certificate halves with your partner." },
        { text: "Combine the certificate halves." },
        { text: "Deliver the certificate to King Roald in the castle." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "600 coins",
    "5 Kudos + Antique lamp (1,000 XP in any 20+ skill) from Historian Minas",
  ],
};
