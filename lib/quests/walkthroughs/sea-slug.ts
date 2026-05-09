import type { QuestWalkthrough } from "../types";

export const seaSlug: QuestWalkthrough = {
  startPoint: "Talk to Caroline north of Witchaven (north-east of East Ardougne).",
  itemsRequired: ["Swamp paste"],
  recommended: ["Small fishing net", "Unlit torch (you can find one in-quest)"],
  sections: [
    {
      title: "The Fishing Platform",
      steps: [
        { text: "Talk to Caroline in Witchaven." },
        { text: "Give Holgart the swamp paste; sail to the Fishing Platform." },
        { text: "Pick up Broken glass from the western hut." },
        { text: "Collect Damp sticks from the north-east corner." },
        { text: "Climb the nearby ladder." },
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
        { text: "Talk to Kent." },
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
        { text: "Talk to Kennith again." },
        { text: "Activate the crane controls outside the cabin." },
        { text: "Descend the ladder." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to shore with Holgart." },
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
