import type { QuestWalkthrough } from "../types";

export const ethicallyAcquiredAntiquities: QuestWalkthrough = {
  startPoint:
    "Inspect the empty display case in the north-east corner of the Grand Museum in Civitas illa Fortis, Varlamore. Getting there: cast Civitas illa Fortis Teleport, or ride a quetzal from any quetzal perch (Hunter Guild, Aldarin, Outer Fortis) to the city. The Grand Museum is the large public hall in the city centre — head inside and along to its north-east corner.",
  itemsRequired: [],
  recommended: [
    "3,000 coins for the charter ship to Port Sarim (or Ring of Charos for discount)",
    "Explorer's ring 2+",
    "Varrock Teleport",
    "Civitas illa Fortis Teleport",
  ],
  sections: [
    {
      title: "Investigate the museum",
      steps: [
        {
          text: "Inspect the empty display case in the Grand Museum's north-east corner.",
          travel:
            "Civitas illa Fortis Teleport (or a quetzal ride from the Hunter Guild or Aldarin perch). The Grand Museum is the big public hall in the middle of the city; the empty case is in its north-east corner.",
        },
        { text: "Talk to Curator Herminius, who runs the Grand Museum, about the missing display." },
        { text: "Investigate the tools left behind the case." },
        { text: "Inspect the display case again." },
        { text: "Question citizens, academics and tourists around the museum until suspicious activity is mentioned." },
      ],
    },
    {
      title: "Track the thief",
      steps: [
        {
          text: "Talk to Regulus Cento south-east of the Sunrise Palace about suspicious individuals.",
          travel:
            "Leave the museum and run north through Civitas illa Fortis to the Sunrise Palace, then round to its south-east side — Regulus stands outside among the palace grounds guards.",
        },
        {
          text: "Chat with the Trader Crewmember at the docks about a man carrying a case.",
          travel: "Head south out of the city to the Sunset Coast dock, where Trader Stan's charter ship berths.",
        },
        {
          text: "Get the torn sail repaired by Artima at her crafting shop in Civitas illa Fortis.",
          travel: "Back north into the city — Artima's crafting shop is among the shop row off the main market square.",
        },
        { text: "Return to the Crewmember at the ship for the updated information." },
        {
          text: "Question Trader Stan and his crew on Port Sarim's southern dock.",
          travel:
            "Take the charter ship from the Sunset Coast dock to Port Sarim (~3,000 coins, cheaper with a Ring of Charos). You arrive on the southern dock where Trader Stan stands.",
        },
        {
          text: "Talk to Betty in the Port Sarim rune shop for the critical lead.",
          travel: "From Stan's dock run north up the Port Sarim waterfront — Betty's Magic Emporium is the shop at the north end of town, just west of the road in from Falador.",
        },
      ],
    },
    {
      title: "Recover the artefact",
      steps: [
        {
          text: "Visit Curator Haig Halen in the Varrock Museum.",
          travel:
            "Varrock Teleport, then run south-east from the square — the museum is the large building south-east of Varrock centre, north of the river road. Haig Halen stands in the entrance hall.",
        },
        { text: "Pickpocket the storeroom key from him." },
        { text: "Search the crates in the museum's north-east storeroom." },
        { text: "Return to Curator Haig Halen with the recovered item." },
        { text: "Pick the shaming dialogue options." },
        {
          text: "Report your findings to Curator Herminius back in the Grand Museum.",
          travel: "Civitas illa Fortis Teleport (or quetzal), then into the Grand Museum in the city centre.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "6,000 Thieving experience",
    "5,000 coins",
  ],
};
