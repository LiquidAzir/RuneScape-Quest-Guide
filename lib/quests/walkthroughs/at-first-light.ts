import type { QuestWalkthrough } from "../types";

export const atFirstLight: QuestWalkthrough = {
  startPoint: "Talk to Guildmaster Apatura at the Hunter Guild (Civitas illa Fortis, Varlamore).",
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
        { text: "Talk to Guildmaster Apatura." },
        { text: "Go downstairs and talk to Guild Scribe Verity." },
        { text: "Get a toy mouse from Guild Hunter Wolf (the Master)." },
        { text: "Wind up the toy mouse and use it on Guild Hunter Kiko." },
        { text: "Check Kiko's cat bed." },
      ],
    },
    {
      title: "Gather supplies",
      steps: [
        { text: "Buy a box trap from Imia's Supplies if needed." },
        { text: "Pick up a needle from the fur shop." },
        { text: "Find Guild Hunter Fox south-east of the guild." },
        { text: "Collect a smooth leaf from the leafy bush." },
        { text: "Collect a sticky leaf from the rough-looking bush at Locus Oasis." },
        { text: "Catch 2 Embertailed jerboas for their tails." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Combine a jerboa tail with the leaves to make a Makeshift poultice." },
        { text: "Report to Fox." },
        { text: "Visit Atza east of Civitas illa Fortis." },
        { text: "Set up a pile of equipment (hammer available nearby)." },
        { text: "Receive trimmed fur from Atza." },
        { text: "Bring the report back to Guild Scribe Verity." },
        { text: "Fix the cat bed with the remaining jerboa tail." },
        { text: "Talk to Guildmaster Apatura." },
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
