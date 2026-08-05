import type { QuestWalkthrough } from "../types";

export const tribalTotem: QuestWalkthrough = {
  startPoint:
    "Talk to Kangai Mau in The Shrimp and Parrot, the pub in eastern Brimhaven. Get to Brimhaven with a charter ship, or pay Captain Barnaby 30gp at the East Ardougne docks; from the Brimhaven dock run east through town and the pub is on your right.",
  itemsRequired: [],
  recommended: [
    "Charter ship fare or 30gp for Captain Barnaby (Brimhaven <-> Ardougne ferry)",
    "Ardougne Teleport or Ardougne cloak for the return trip",
    "21 Thieving (boostable)",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Kangai Mau in The Shrimp and Parrot in eastern Brimhaven (options 2 then 1).",
          travel:
            "Charter ship to Brimhaven from any charter dock (Port Sarim, Catherby, Port Khazard, Ardougne), or pay Captain Barnaby 30gp at the East Ardougne docks. From the Brimhaven dock run east through the town — The Shrimp and Parrot is the pub on the east side, marked with the standard pub icon.",
        },
        {
          text: "Sail back to East Ardougne.",
          travel:
            "Walk back to the Brimhaven dock and pay Captain Barnaby 30gp; his ship lands at the East Ardougne docks on the city's south-west shore.",
        },
      ],
    },
    {
      title: "GPDT Depot",
      steps: [
        {
          text: "Head to the GPDT depot just south of the East Ardougne east bank.",
          travel:
            "From the Ardougne docks run north-east up to the market square, then east to the east bank. The depot is the fenced yard with stacked crates immediately south of that bank. (Ardougne Teleport lands you in the market square if you banked first.)",
        },
        { text: "Investigate the north-eastern crate in the depot yard for an address label." },
        { text: "Use the label on the crate 2 tiles south." },
        { text: "Talk to the GPDT employee standing in the depot yard (option 1)." },
      ],
    },
    {
      title: "Wizard's Tower",
      steps: [
        {
          text: "Talk to Wizard Cromperty in his tower in the far north-east corner of East Ardougne (2, 2, 1).",
          travel:
            "From the depot run north past the east bank and keep going to the city's north-east corner. Cromperty's small tower sits at the end of the street, just north-east of the market.",
        },
        {
          text: "Enter the house 2 doors west of Cromperty's tower and use the password KURT at the door (click each letter slowly).",
        },
        { text: "Right-click investigate the stairs inside (21 Thieving) to disarm the trap, then climb them." },
        { text: "Search the chest upstairs for the totem, then finish the dialogue." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return the totem to Kangai Mau in The Shrimp and Parrot in Brimhaven.",
          travel:
            "Run south-west back to the Ardougne docks and pay Captain Barnaby 30gp to sail to Brimhaven, then run east through town to the pub. A charter ship to Brimhaven works too if you are somewhere else.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,775 Thieving experience",
    "5 Swordfish",
  ],
};
