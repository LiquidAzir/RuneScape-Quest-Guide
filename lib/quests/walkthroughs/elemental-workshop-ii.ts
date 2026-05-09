import type { QuestWalkthrough } from "../types";

export const elementalWorkshopII: QuestWalkthrough = {
  startPoint: "Search the bookcases in the Exam Centre library for the beaten book.",
  itemsRequired: [
    "Pickaxe (only if mining elemental ore in-quest)",
    "Hammer",
    "2 elemental metals (or 2 elemental ore + 8 coal)",
    "Battered key from Elemental Workshop I",
  ],
  recommended: [
    "Combat 15+",
    "Digsite teleport / pendant or Senntisten teleport",
    "Restore or Magic potion if Magic < 40",
    "Slashed book for Mind shield crafting",
  ],
  enemies: ["2 Earth elementals (level 35) — only if mining ore in-quest"],
  sections: [
    {
      title: "Get the second key",
      steps: [
        { text: "Travel to the Exam Centre south of the Digsite." },
        { text: "Search the north-eastern bookcase in the south-eastern section." },
        { text: "Read the beaten book and scroll; keep the book." },
        { text: "Return to the Seers' Village anvil building, enter the odd wall, descend the stairs." },
        { text: "Use the battered key to enter the workshop." },
        { text: "Go north to the water elemental room; search machinery west for a key." },
        { text: "Mine elemental ore if needed (triggers Earth elementals)." },
        { text: "Smelt ore at the south-room furnace." },
        { text: "Descend the hatch with the key." },
      ],
    },
    {
      title: "Repair the lower workshop",
      steps: [
        { text: "Take both schematics from the crate; craft the crane claw at the workbench." },
        { text: "Lower the crane via the western lever; apply the claw to the old crane." },
        { text: "Climb the south-west stairs to the catwalk; open the junction box." },
        { text: "Connect the pipe ends as shown in the diagram." },
        { text: "Search all crates for a pipe and 3 cogs." },
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
        { text: "Use the primed bar on the extractor gun." },
        { text: "Operate the extractor hat (drains 20 Magic levels)." },
        { text: "Retrieve the primed mind bar." },
        { text: "Climb the spiral stairs with the beaten book." },
        { text: "Smith the primed mind bar at the workbench for a mind helmet." },
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
