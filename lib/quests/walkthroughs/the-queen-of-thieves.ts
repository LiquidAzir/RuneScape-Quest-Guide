import type { QuestWalkthrough } from "../types";

export const theQueenOfThieves: QuestWalkthrough = {
  startPoint:
    "Talk to Tomas Lawry standing just outside the Port Piscarilius bank in north-east Kourend (the bank is on the north dockside; Tomas wanders the small rose garden just south of the bank entrance).",
  itemsRequired: ["Stew (or raw beef + potato + bowl + range to make one)"],
  recommended: [
    "Stamina potion",
    "Some coins for the dock activities",
    "Kharedst's memoirs / Book of the Dead → Port Piscarilius for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Tomas Lawry just south of the Port Piscarilius bank.",
        },
        {
          text: "Walk south of the bank to the small bridge over the harbour stream and find Robert O'Reilly on the western side. Talk to him.",
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
          text: "Enter the manhole on the road just east of Robert's house (between Robert and the bridge).",
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
          text: "Climb back to the surface via the manhole and walk east to the Port Piscarilius docks. Find Conrad King — he's the well-dressed merchant standing on the southern dock.",
        },
        {
          text: "Confront Conrad King (no fight — pick the accusatory dialogue option).",
        },
        {
          text: "Return underground via the manhole east of Robert's house and enter the velvet tent at the back of the underground market.",
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
          text: "Travel to Kingstown (south-west Kourend, the area surrounding Kourend Castle).",
        },
        {
          text: "Walk to the small house immediately north of the entrance to Kingstown (the first house you see when entering from the east).",
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
          text: "Return to Tomas Lawry just south of the Port Piscarilius bank with the letter.",
        },
        {
          text: "Return underground (manhole east of Robert's house) and talk to the Queen of Thieves in her tent.",
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
