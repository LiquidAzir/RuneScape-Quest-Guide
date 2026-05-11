import type { QuestWalkthrough } from "../types";

export const forgettableTale: QuestWalkthrough = {
  startPoint: "Talk to Commander Veldaban in the Black Guard headquarters in Keldagrim (west of the bank).",
  itemsRequired: [
    "~400 coins",
    "2 Barley malt",
    "2 Buckets of water",
    "Seed dibber + Rake",
    "Ale yeast (or pot + 25gp)",
    "Kebab",
    "2 Beers",
    "Beer glass",
    "A random item the rowdy dwarf demands",
  ],
  recommended: [
    "Games necklace / Camelot teleport for White Wolf Mountain access",
    "Enchanted lyre + Slayer ring + Keldagrim minecart for fast travel",
    "Items for High Alch to fill waiting periods",
  ],
  sections: [
    {
      title: "Start the chain",
      steps: [
        { text: "Talk to Commander Veldaban in the Black Guard headquarters west of the Keldagrim bank (1, 1, 1)." },
        { text: "Buy 3 beers from the pub south of the drunken dwarf's house." },
        { text: "Talk to the drunken dwarf in East Keldagrim — pick 'I need to know about Red Axe'." },
        { text: "Give him a beer and repeat the dialogue." },
      ],
    },
    {
      title: "Get the seeds",
      steps: [
        { text: "Talk to the rowdy dwarf outside the East Keldagrim pub; bring his random item." },
        { text: "Travel to the White Wolf Mountain tunnel." },
        { text: "Talk to Khorvak in the White Wolf Mountain pub; offer him a drink and give him dwarven stout." },
        { text: "Return to the bar south of the Keldagrim bank; give another beer and talk to Gauss there." },
      ],
    },
    {
      title: "Plant kelda hops",
      steps: [
        { text: "Go to the Kelda Hops patch south-east of the bank." },
        { text: "Talk to Rind the Gardener for permission." },
        { text: "Plant kelda seeds with the dibber (rake available south of patch)." },
        { text: "Wait 15-20 minutes for growth." },
        { text: "Harvest the kelda hops." },
      ],
    },
    {
      title: "Brew the kelda stout",
      steps: [
        { text: "Go upstairs in the East Keldagrim pub." },
        { text: "Buy ale yeast from Blandebir for 25gp if needed." },
        {
          text: "Add to the vat in order: 2 buckets water, 2 barley malts, kelda hops, ale yeast.",
        },
        { text: "Wait 15-20 minutes for the ferment." },
        { text: "Turn the valve and use beer glass on the barrel." },
        { text: "Return to the drunken dwarf's house and discuss the Red Axe." },
      ],
    },
    {
      title: "Mine cart puzzles",
      steps: [
        { text: "Talk to the southernmost cart conductor in south-eastern Keldagrim." },
        { text: "Ask about the closed-off tunnel." },
        { text: "Talk to your mining company director upstairs in the marketplace." },
        { text: "Ask for help with the boarded tunnel." },
        { text: "Ride the southernmost minecart." },
        {
          text: "Solve the 5 cart puzzle rooms in order: rotate cart paths, listen to a conversation, search crates for 3 Red Axe documents, watch the cutscene.",
          notes: ["Each cart puzzle is a 'route the cart' visual puzzle — see the wiki for diagrams."],
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Buy a kebab and beer in East Keldagrim if needed." },
        { text: "Talk to Commander Veldaban (west of bank)." },
        { text: "Return to the eastern pub; drink the beer and eat the kebab." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "5,000 Cooking + Farming experience each", "2 Dwarven stout (m)"],
};
