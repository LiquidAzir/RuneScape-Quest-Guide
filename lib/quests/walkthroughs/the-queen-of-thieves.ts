import type { QuestWalkthrough } from "../types";

export const theQueenOfThieves: QuestWalkthrough = {
  startPoint:
    "Talk to Tomas Lawry just south of the Port Piscarilius bank in north-east Great Kourend. Get to Kourend by talking to Veos on the northernmost dock in Port Sarim and sailing to Port Piscarilius — you arrive on the docks a few steps from the bank. With 69 Magic, Kourend Castle Teleport (Arceuus book) or a Kourend Castle tablet also works: run north-east from the castle to the port. Tomas wanders the small rose garden just south of the bank entrance.",
  itemsRequired: ["Stew (or raw beef + potato + bowl + range to make one)"],
  recommended: [
    "Stamina potion",
    "Some coins for the dock activities",
    "Veos's boat from Port Sarim, or a Kourend Castle teleport, for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Tomas Lawry in the rose garden just south of the Port Piscarilius bank.",
          travel:
            "Sail with Veos from the northernmost dock in Port Sarim to Port Piscarilius — the bank is just west of where the boat lands. Alternative: Kourend Castle Teleport (69 Magic, Arceuus) or a Kourend Castle tablet, then run north-east along the road into the port.",
        },
        {
          text: "Walk south of the bank to the small bridge over the harbour stream and talk to Robert O'Reilly on the western side.",
        },
        {
          text: "Give Robert a stew (he's hungover and needs food).",
        },
      ],
    },
    {
      title: "Underground exploration",
      steps: [
        {
          text: "Climb down the manhole on the road just east of Robert's house, between his door and the bridge.",
        },
        {
          text: "Inside the sewers, cross the wooden bridge and head west into the central chamber.",
        },
        {
          text: "Talk to Devan Rutter beside the small fish stall in the underground market.",
        },
      ],
    },
    {
      title: "Confront Conrad and meet the Queen",
      steps: [
        {
          text: "Climb back up the manhole and walk east onto the Port Piscarilius docks to find Conrad King, the well-dressed merchant on the southern dock.",
          travel:
            "Straight up the manhole ladder, then east past the bank and down onto the harbour front; the southern dock is the one nearest the fishing cranes.",
        },
        {
          text: "Confront Conrad King (no fight — pick the accusatory dialogue option).",
        },
        {
          text: "Go back down the manhole east of Robert's house and enter the velvet tent at the back of the underground market.",
        },
        {
          text: "Talk to the Queen of Thieves inside the tent (Lady Shauna Piscarilius).",
        },
      ],
    },
    {
      title: "Find the letter in Kingstown",
      steps: [
        {
          text: "Travel to Kingstown, the district surrounding Kourend Castle in central Great Kourend.",
          travel:
            "Kourend Castle Teleport (69 Magic, Arceuus) or a Kourend Castle tablet puts you at the castle gates. Without it, run south-west out of Port Piscarilius and follow the main road inland to the castle — Kingstown is the walled town around it.",
        },
        {
          text: "Enter the small house immediately north of the Kingstown entrance — the first house you pass coming in from the east.",
        },
        {
          text: "Climb the stairs to the upper floor of that house.",
        },
        {
          text: "Pick the lock on the chest upstairs to obtain the incriminating letter.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Tomas Lawry south of the Port Piscarilius bank with the letter.",
          travel:
            "Run back north-east from Kourend Castle along the main road into Port Piscarilius; the rose garden is just south of the bank.",
        },
        {
          text: "Go back down the manhole east of Robert's house and talk to the Queen of Thieves in her tent.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Thieving experience",
    "2,000 coins",
    "The Fisher's flute (Port Piscarilius teleport)",
    "Port Piscarilius graceful outfit recolour",
  ],
};
