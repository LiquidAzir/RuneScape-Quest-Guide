import type { QuestWalkthrough } from "../types";

export const elementalWorkshopII: QuestWalkthrough = {
  startPoint:
    "Search the bookcases in the Exam Centre south-east of the Digsite for the beaten book. Getting there: teleport with a digsite pendant and run south-west to the Exam Centre, or leave Varrock by the east gate and follow the road east then south-east past the Digsite fence.",
  itemsRequired: [
    "Pickaxe (only if mining elemental ore in-quest)",
    "Hammer",
    "2 elemental metals (or 2 elemental ore + 8 coal)",
    "Battered key from Elemental Workshop I",
  ],
  recommended: [
    "Combat 15+",
    "Digsite pendant (or 80 Magic for the Digsite Teleport spell)",
    "Restore or Magic potion if Magic < 40",
    "Slashed book for Mind shield crafting",
  ],
  enemies: ["2 Earth elementals (level 35) — only if mining ore in-quest"],
  sections: [
    {
      title: "Get the second key",
      steps: [
        {
          text: "Travel to the Exam Centre south of the Digsite.",
          travel:
            "Digsite pendant teleport, then run south-west to the Exam Centre building. No pendant: Varrock Teleport, out the east gate, follow the road east and then south-east past the Digsite fences — the Exam Centre is the large building at the south end of the Digsite path.",
        },
        { text: "Search the north-eastern bookcase in the Exam Centre's south-eastern room." },
        { text: "Read the beaten book and scroll; keep the book." },
        {
          text: "Return to the anvil building in south-east Seers' Village, use the battered key on the odd wall north of the anvil, and descend the stairs.",
          travel:
            "Camelot Teleport, then run south-east through Seers' Village past the bank to the outdoor anvil on the east side of the village. The odd-looking wall is just north of the anvil.",
        },
        { text: "Use the battered key to enter the workshop." },
        {
          text: "Go north into the water wheel room and search the machinery on its west side for a key.",
          travel: "From the bottom of the entry stairs follow the corridor north to the water wheel room.",
        },
        { text: "Mine elemental ore in the western room if you still need bars (triggers Earth elementals)." },
        { text: "Smelt the ore with coal at the furnace in the south room." },
        { text: "Descend the hatch with the key into the lower workshop." },
      ],
    },
    {
      title: "Repair the lower workshop",
      steps: [
        {
          text: "Take both schematics from the crate on the lower floor and craft the crane claw at the workbench.",
          travel: "Everything on this floor is one large machine hall — the crate and workbench are on the ground level beside the crane.",
        },
        { text: "Lower the crane via the western lever; apply the claw to the old crane." },
        {
          text: "Climb the south-west stairs to the catwalk and open the junction box.",
          travel: "The stairs up to the catwalk are in the south-west corner of the machine hall.",
        },
        { text: "Connect the pipe ends as shown in the diagram." },
        { text: "Search all crates on both levels for a pipe and 3 cogs." },
        { text: "Install the pipe on the north catwalk; place the cogs on the ground floor machine." },
        { text: "Pull the old lever to complete repairs." },
      ],
    },
    {
      title: "Operate the machine",
      steps: [
        { text: "Place the bar on the jig cart under the crane." },
        { text: "Use the western lever to raise; eastern lever to rotate." },
        { text: "Lower twice into lava until the bar turns orange." },
        { text: "Rotate and lower the bar onto the cart." },
        {
          text: "Pull the yellow sign lever to move the cart through press, water tank, and drying stations — follow each station's lever/valve sequence.",
        },
        { text: "Retrieve the primed bar from the jig." },
      ],
    },
    {
      title: "Make the mind helmet",
      steps: [
        {
          text: "Use the primed bar on the extractor gun in the machine room.",
          travel: "The extractor gun and hat are in the small side room off the lower workshop, north of the jig cart track.",
        },
        { text: "Operate the extractor hat (drains 20 Magic levels)." },
        { text: "Retrieve the primed mind bar." },
        {
          text: "Climb the spiral stairs back up to the upper workshop with the beaten book.",
        },
        { text: "Smith the primed mind bar at the upper workshop's workbench for a mind helmet." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "7,500 Smithing experience",
    "7,500 Crafting experience",
    "Ability to craft elemental mind equipment (great vs. nightmare zone bosses)",
  ],
};
