import type { QuestWalkthrough } from "../types";

export const princeAliRescue: QuestWalkthrough = {
  startPoint:
    "Talk to Hassan inside the Al Kharid Palace (Hassan stands in the throne room — the central building behind the Al Kharid market square).",
  itemsRequired: [
    "3 balls of wool",
    "Pink skirt (buy from the Varrock clothing shop in central Varrock, or kill goblins for an alternative)",
    "Yellow dye (Aggie the witch in Draynor Village makes it from 2 onions)",
    "Redberries (pick from redberry bushes north of Varrock for red dye)",
    "Soft clay (or clay + a jug of water, or buy soft clay)",
    "Bronze bar",
    "Pot of flour",
    "Ashes (from any fire — burn a log)",
    "~700 coins for various NPCs (Lady Keli's servant, etc.)",
    "Beer (from any pub — Falador or Varrock)",
  ],
  recommended: [
    "Skip the fiddliest steps by buying ready-made wig / pink skirt / dye from the Grand Exchange",
    "Keep extra coins on hand for tips and bribes",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Al Kharid Palace (east of Lumbridge across the desert toll gate). Talk to Hassan in the central throne room of the palace.",
        },
        {
          text: "He explains Prince Ali has been kidnapped by Lady Keli and is being held in Draynor Village.",
        },
        {
          text: "Walk south-west of the palace to the Al Kharid market square. Find Osman (a hooded NPC standing among the stalls) and talk to him for the rescue plan.",
        },
      ],
    },
    {
      title: "Make the wig",
      steps: [
        {
          text: "Travel to Draynor Village and find Ned in his small cottage just south-east of the bank. Give him 3 balls of wool — he can spin them into a rope and weave a wig.",
        },
        {
          text: "Bring Ned 3 balls of wool + yellow dye (made by Aggie from 2 onions). He weaves a blonde wig.",
        },
      ],
    },
    {
      title: "Make the skin paste",
      steps: [
        {
          text: "Walk to Aggie the witch's house in Draynor Village (small house just east of the bank, south of the market). Talk to her about skin paste.",
        },
        {
          text: "Give her: a pot of flour, ashes, redberries, and the small fee. She brews the skin paste used to disguise Prince Ali.",
        },
      ],
    },
    {
      title: "Get the key impression and the key",
      steps: [
        {
          text: "Go to Lady Keli's house in northern Draynor Village (the small jail-house east of the wheat field). Talk to Lady Keli — keep talking and pick the dialogue option that asks to see the key.",
        },
        {
          text: "While Keli is holding the key, use soft clay on the key to make a key print impression. (Talk to Leela — Osman's daughter, who waits just outside Keli's house — first if you need a hint.)",
        },
        {
          text: "Take the key print + a bronze bar to Osman in the Al Kharid market square.",
        },
        {
          text: "Osman casts the impression onto the bronze bar to make a copy of the key.",
        },
      ],
    },
    {
      title: "Distract the guard",
      steps: [
        {
          text: "Buy a beer at any pub (Rusty Anchor in Port Sarim is closest, or the Asgarnian pub in Falador) if you don't already have one.",
        },
        {
          text: "Walk to Joe, the guard outside Lady Keli's jail-house in northern Draynor Village.",
        },
        {
          text: "Give him the beer to put him to sleep — he wanders away from his post.",
        },
      ],
    },
    {
      title: "Free the Prince",
      steps: [
        {
          text: "With the wig, pink skirt, skin paste, copied key, and a rope in your inventory, enter Lady Keli's house in northern Draynor Village.",
        },
        {
          text: "Talk to Prince Ali inside the cell.",
        },
        {
          text: "Hand him the disguise items (wig, skirt, skin paste) so he can disguise himself and slip past the guards.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Hassan in the Al Kharid Palace throne room.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "700 coins",
    "Free passage through the Al Kharid toll gate forever (saves 10gp every crossing)",
  ],
};
