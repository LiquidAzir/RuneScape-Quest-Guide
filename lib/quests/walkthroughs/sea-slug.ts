import type { QuestWalkthrough } from "../types";

export const seaSlug: QuestWalkthrough = {
  startPoint:
    "Talk to Caroline on the dock at the north end of Witchaven, the small fishing village on the coast east of East Ardougne. Ardougne Teleport (51 Magic) into the market square, then run east out of the city gate and follow the road east to the sea.",
  itemsRequired: ["Swamp paste"],
  recommended: ["Small fishing net", "Unlit torch (you can find one in-quest)"],
  sections: [
    {
      title: "The Fishing Platform",
      steps: [
        {
          text: "Talk to Caroline on the dock at the north end of Witchaven to start.",
          travel:
            "Ardougne Teleport or an Ardougne teleport tab into East Ardougne's market square, then run east out of the eastern gate and follow the road east to the coast — Witchaven is the little village with the church. Caroline stands on the wooden dock at its northern end. No teleport: charter ship to Port Khazard and run north-east through Ardougne.",
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
        { text: "Enter the western cabin on the upper level and talk to Kennith." },
        { text: "Climb back down to the sea level." },
      ],
    },
    {
      title: "Remote island",
      steps: [
        {
          text: "Ask Holgart, waiting by his boat on the platform's lower deck, to sail you to the remote island.",
          travel: "Holgart stays with his boat at the platform's boarding point on the lower level — pick the 'remote island' travel option in his dialogue.",
        },
        { text: "Talk to Kent on the remote island." },
        { text: "Sail back to the Fishing Platform with Holgart." },
      ],
    },
    {
      title: "Save Kennith",
      steps: [
        { text: "Get an unlit torch from Bailey in the south-west cabin of the platform." },
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
        { text: "Report to Caroline on the Witchaven dock." },
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
