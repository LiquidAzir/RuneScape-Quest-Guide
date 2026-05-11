import type { QuestWalkthrough } from "../types";

export const seaSlug: QuestWalkthrough = {
  startPoint:
    "Talk to Caroline standing on the docks at the north end of Witchaven (the small fishing village north-east of East Ardougne — walk east out of Ardougne, then north along the coast).",
  itemsRequired: ["Swamp paste"],
  recommended: ["Small fishing net", "Unlit torch (you can find one in-quest)"],
  sections: [
    {
      title: "The Fishing Platform",
      steps: [
        {
          text: "Talk to Caroline at the north Witchaven docks to start.",
        },
        {
          text: "Walk down the dock and find Holgart standing beside his small boat. Give him the swamp paste — he uses it to repair the boat, then sails you to the Fishing Platform.",
        },
        {
          text: "On the Fishing Platform's lower level, walk into the western cabin and pick up the Broken glass off the floor.",
        },
        {
          text: "Walk to the north-east corner of the platform and collect the Damp sticks beside the broken crate.",
        },
        {
          text: "Climb the ladder beside the central building up to the upper platform.",
        },
      ],
    },
    {
      title: "Upper platform",
      steps: [
        { text: "Enter the western cabin and talk to Kennith." },
        { text: "Climb back down to the sea level." },
      ],
    },
    {
      title: "Remote island",
      steps: [
        { text: "Ask Holgart to travel to the remote island." },
        { text: "Talk to Kent on the Fishing Platform." },
        { text: "Return to the Fishing Platform with Holgart." },
      ],
    },
    {
      title: "Save Kennith",
      steps: [
        { text: "Get an unlit torch from Bailey in the south-west cabin." },
        { text: "Use the broken glass on the damp sticks to dry them." },
        { text: "Rub the dry sticks together to light the torch." },
        { text: "Climb the ladder and talk to Kennith again." },
        { text: "Kick the badly repaired wall outside the cabin." },
        { text: "Talk to Kennith in the western cabin on the Fishing Platform again." },
        { text: "Activate the crane controls outside the cabin." },
        { text: "Descend the ladder." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Witchaven shore by talking to Holgart on the Fishing Platform." },
        { text: "Report to Caroline." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "7,175 Fishing experience",
    "Access to the Fishing Platform",
    "Oyster pearls (used for crafting bolts)",
  ],
};
