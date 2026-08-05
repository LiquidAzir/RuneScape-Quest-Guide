import type { QuestWalkthrough } from "../types";

export const princeAliRescue: QuestWalkthrough = {
  startPoint:
    "Talk to Hassan in the throne room of the Al Kharid Palace — the large walled building in the middle of Al Kharid. Lumbridge Home Teleport, then run north out of the castle grounds and east through the toll gate (10gp) into Al Kharid; the palace is straight ahead past the market stalls. Amulet of glory to Al Kharid drops you a few steps north of it.",
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
          text: "Travel to the Al Kharid Palace and talk to Hassan in the central throne room.",
          travel:
            "Lumbridge Home Teleport, run north and then east through the desert toll gate (10gp) into Al Kharid — the palace is the big walled building in the centre of town. Amulet of glory to Al Kharid or ring of dueling to Emir's Arena and running west both skip the toll.",
        },
        {
          text: "He explains Prince Ali has been kidnapped by Lady Keli and is being held near Draynor Village.",
        },
        {
          text: "Walk out of the palace and talk to Osman by the market stalls just outside its north-west corner for the rescue plan.",
        },
      ],
    },
    {
      title: "Make the wig",
      steps: [
        {
          text: "Travel to Draynor Village and talk to Ned in his cottage in the north-west of the village.",
          travel:
            "Amulet of glory to Draynor Village, or run west from Lumbridge along the south river road. Ned's house is the northernmost cottage on the village's west side, just north of Aggie's hut.",
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
          text: "Walk to Aggie the witch's house in Draynor Village and talk to her about skin paste.",
          travel:
            "Aggie's hut is a few steps south of Ned's, on the west side of Draynor Village and just west of the market stalls.",
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
          text: "Go to Lady Keli's jail-house north-east of Draynor Village and talk to her — keep talking and pick the dialogue option that asks to see the key.",
          travel:
            "From the Draynor bank run north-east up the road toward Falador; the small jail building sits just east of the wheat field, with guards outside. Leela, Osman's daughter, waits nearby if you need a hint.",
        },
        {
          text: "While Keli is holding the key, use soft clay on the key to make a key print impression.",
        },
        {
          text: "Take the key print + a bronze bar back to Osman outside the Al Kharid Palace.",
          travel:
            "Amulet of glory to Al Kharid, or run east from Draynor through Lumbridge and the toll gate. Osman is by the market stalls off the palace's north-west corner.",
        },
        {
          text: "Osman casts the impression onto the bronze bar to make a copy of the key — take it back to Leela outside Lady Keli's jail-house.",
        },
      ],
    },
    {
      title: "Distract the guard",
      steps: [
        {
          text: "Buy a beer at any pub if you don't already have one.",
          travel:
            "Closest options: the Rusty Anchor in Port Sarim (west along the coast road from Draynor), or the Rising Sun Inn in central Falador, just north-west of the Falador Teleport spot.",
        },
        {
          text: "Walk to Joe, the guard standing outside Lady Keli's jail-house north-east of Draynor Village.",
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
          text: "With the wig, pink skirt, skin paste, copied key, and a rope in your inventory, enter Lady Keli's jail-house.",
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
          travel:
            "Amulet of glory to Al Kharid and walk south to the palace, or run east from Draynor through Lumbridge and the toll gate.",
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
