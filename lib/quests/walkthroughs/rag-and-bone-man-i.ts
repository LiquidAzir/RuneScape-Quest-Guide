import type { QuestWalkthrough } from "../types";

export const ragAndBoneManI: QuestWalkthrough = {
  startPoint:
    "Talk to the Odd Old Man at the Silvarea limestone mine, north-east of Varrock. Varrock teleport, leave by the east gate and follow the road east, then take the mountain path north-east up Silvarea (the pass towards the Paterdomus temple) — he stands by the pot-boiler at the limestone mine on the south side of the path. Digsite pendant to the Digsite then run north also works.",
  itemsRequired: ["8 coins for vinegar jugs", "8 pots", "8 logs (any) or an axe", "Tinderbox"],
  recommended: [
    "Combat 15+",
    "Varrock + Lumbridge teleports",
    "Digsite pendant",
    "Amulet of glory",
    "Dramen staff for fairy rings",
    "Balloon transport access",
  ],
  enemies: [
    "Giant rat / Unicorn / Bear / Ram / Goblin / Big frog / Monkey / Giant bat",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to the Odd Old Man at the Silvarea limestone mine — he wants 8 specific bones boiled in vinegar.",
          travel:
            "Varrock teleport, run east out of the east gate and follow the road east past the Lumber Yard turn-off, then head north-east up the Silvarea mountain path. The limestone mine is on the south side of the path, before the bridge to Paterdomus; the Odd Old Man is beside the pot-boiler there. Fallback: Digsite pendant to the Digsite and run north.",
        },
      ],
    },
    {
      title: "Gather the bones",
      steps: [
        {
          text: "Kill 8 monsters to collect: giant rat bone, unicorn bone, bear ribs, ram skull, goblin skull, big frog leg, monkey paw, giant bat wing.",
          travel:
            "Giant rat and big frog: Lumbridge Swamp, straight south of Lumbridge Castle (Lumbridge Home Teleport). Ram: the sheep field north-west of Lumbridge, over the River Lum bridge. Unicorn: the grassland north-east of the Lumbridge sheep field, or west of the Varrock south road. Goblin: Goblin Village north of Falador (Falador teleport, run north past the Ice Mountain path), or the goblin huts west of Lumbridge. Bear: the woods north-east of Varrock on the Digsite road. Monkey: Karamja — take the boat from Port Sarim to Musa Point, monkeys are just south of the docks. Giant bat: Taverley Dungeon (ladder in the pen west of Taverley) or the Morytania swamp east of Canifis.",
        },
      ],
    },
    {
      title: "Polish the bones",
      steps: [
        {
          text: "Buy 8 jugs of vinegar from Fortunato at his wine stall in Draynor Village.",
          travel:
            "Amulet of glory → Draynor Village, or Lumbridge Home Teleport and run west along the south river road. Fortunato is in the small vineyard just north-west of the Draynor market square, on the path towards Draynor Manor.",
        },
        { text: "Use each jug of vinegar on a pot to create pots of vinegar." },
        { text: "Use each bone on a pot of vinegar to make bones-in-vinegar." },
        {
          text: "Return to the Odd Old Man at the Silvarea limestone mine with the bones and your logs.",
          travel:
            "Varrock teleport, out the east gate, east along the road and north-east up the Silvarea path to the limestone mine. Digsite pendant to the Digsite and a run north is the faster option if you have one.",
        },
        {
          text: "For each bone: place logs on the pot-boiler, use the bone-in-vinegar on it, light the logs, wait 12 seconds, then remove the pot.",
        },
        { text: "Talk to the Odd Old Man at the pot-boiler once all 8 bones are polished." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "500 Cooking experience",
    "500 Prayer experience",
  ],
};
