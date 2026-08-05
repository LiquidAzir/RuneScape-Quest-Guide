import type { QuestWalkthrough } from "../types";

export const atFirstLight: QuestWalkthrough = {
  startPoint:
    "Talk to Guildmaster Apatura on the ground floor of the Hunter Guild, out in the Avium Savannah west of Civitas illa Fortis in Varlamore. Blow a Quetzal whistle and choose the Hunter Guild, or teleport to Civitas illa Fortis and run west across the savannah.",
  itemsRequired: [
    "Needle or costume needle",
    "Hammer (in-quest)",
    "2 jerboa tails (caught in-quest) or a Box trap",
  ],
  recommended: ["Stamina potion", "Catspeak amulet for extra dialogue"],
  sections: [
    {
      title: "Investigate the guild",
      steps: [
        {
          text: "Talk to Guildmaster Apatura on the ground floor of the Hunter Guild.",
          travel:
            "Blow a Quetzal whistle and pick the Hunter Guild — the quetzal lands you right outside the guild doors. No whistle: teleport to Civitas illa Fortis and run west out of the city into the Avium Savannah until you reach the guild compound.",
        },
        {
          text: "Go down the stairs in the guild and talk to Guild Scribe Verity in the basement.",
        },
        { text: "Get a toy mouse from Guild Hunter Wolf (the Master) upstairs in the guild." },
        { text: "Wind up the toy mouse and use it on Guild Hunter Kiko." },
        { text: "Check Kiko's cat bed." },
      ],
    },
    {
      title: "Gather supplies",
      steps: [
        { text: "Buy a box trap from Imia's Supplies inside the Hunter Guild if you need one." },
        { text: "Pick up a needle from the fur shop counter in the guild." },
        {
          text: "Find Guild Hunter Fox out in the savannah south-east of the guild.",
          travel: "Leave the Hunter Guild by the main gate and run south-east into the open savannah — Fox is the hunter standing among the scrub.",
        },
        { text: "Collect a smooth leaf from the leafy bush beside Fox." },
        {
          text: "Collect a sticky leaf from the rough-looking bush at Locus Oasis.",
          travel: "Locus Oasis is out in the Avium Savannah a short run from the Hunter Guild — head for the ring of palm trees around the water and look for the rough-looking bush at its edge.",
        },
        { text: "Catch 2 Embertailed jerboas with box traps in the savannah for their tails." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Combine a jerboa tail with the two leaves to make a Makeshift poultice." },
        {
          text: "Report back to Guild Hunter Fox in the savannah south-east of the guild.",
        },
        {
          text: "Visit Atza at her camp east of Civitas illa Fortis.",
          travel:
            "Quetzal whistle → Civitas illa Fortis, then run east out of the city gate and follow the track to her camp.",
        },
        { text: "Set up the pile of equipment at Atza's camp (a hammer is available nearby)." },
        { text: "Receive trimmed fur from Atza." },
        {
          text: "Bring the report back to Guild Scribe Verity in the Hunter Guild basement.",
          travel: "Quetzal whistle → Hunter Guild, then take the stairs down inside the guild.",
        },
        { text: "Fix Kiko's cat bed with the remaining jerboa tail." },
        { text: "Talk to Guildmaster Apatura on the ground floor of the Hunter Guild." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "4,500 Hunter experience",
    "800 Construction experience",
    "500 Herblore experience",
    "Access to Master Tier Hunters' Rumours",
  ],
};
