import type { QuestWalkthrough } from "../types";

export const forgettableTale: QuestWalkthrough = {
  startPoint:
    "Talk to Commander Veldaban inside the Black Guard headquarters in West Keldagrim (the central stone building west of the river bridge, immediately west of the Keldagrim bank). The Giant Dwarf must be complete.",
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
        {
          text: "Walk to the East Keldagrim pub (cross the river bridge to East Keldagrim — the pub is on the south side of the marketplace). Buy 3 beers from the bartender.",
        },
        {
          text: "Walk to the drunken dwarf's house in East Keldagrim (the small house just north of the pub). Talk to the drunken dwarf inside — pick 'I need to know about Red Axe'.",
        },
        {
          text: "Give him a beer and repeat the dialogue (he needs the beer to think clearly).",
        },
      ],
    },
    {
      title: "Get the seeds",
      steps: [
        {
          text: "Walk just outside the East Keldagrim pub and talk to the rowdy dwarf hanging around. He demands a random item — bring it (the journal lists what he wants).",
        },
        {
          text: "Travel to the White Wolf Mountain underground tunnel pub (entrance via the trapdoor in Taverley near the lake, accessible after Fishing Contest, OR via the Keldagrim minecart). Find Khorvak the dwarf inside the small underground bar.",
        },
        {
          text: "Offer Khorvak a drink and give him dwarven stout — he becomes talkative.",
        },
        {
          text: "Return to the East Keldagrim pub; give another beer and talk to Gauss the bartender.",
        },
      ],
    },
    {
      title: "Plant kelda hops",
      steps: [
        {
          text: "Walk to the Kelda Hops patch in West Keldagrim, south-east of the bank (the small farming patch near the river bank).",
        },
        {
          text: "Talk to Rind the Gardener tending the patch and ask permission to plant.",
        },
        {
          text: "Plant the kelda seeds with the dibber (a rake spawns just south of the patch if you don't have one).",
        },
        {
          text: "Wait 15-20 real-world minutes for the kelda hops to grow (use the time for other tasks or just hi-alch in Keldagrim).",
        },
        {
          text: "Harvest the kelda hops from the patch.",
        },
      ],
    },
    {
      title: "Brew the kelda stout",
      steps: [
        {
          text: "Climb the stairs inside the East Keldagrim pub up to the brewery on the upper floor.",
        },
        {
          text: "Buy ale yeast from Blandebir (the brewer upstairs) for 25gp if you don't have any.",
        },
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
        {
          text: "Walk to the southernmost minecart conductor in south-eastern Keldagrim (the conductor at the cart system station). Ask about the closed-off tunnel south of the station.",
        },
        {
          text: "Walk to the East Keldagrim Marketplace (the large building west of the river bridge in East Keldagrim) and climb to the upper floor. Talk to your mining company director (the one for whichever Consortium company you joined in The Giant Dwarf).",
        },
        {
          text: "Ask the director for help with the boarded tunnel.",
        },
        {
          text: "Return to the cart conductor in south-eastern Keldagrim and ride the southernmost minecart.",
        },
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
        {
          text: "Return to Commander Veldaban inside the Black Guard headquarters (west of the West Keldagrim bank).",
        },
        {
          text: "Walk to the East Keldagrim pub and drink the beer + eat the kebab in front of the drunken dwarf to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "5,000 Cooking + Farming experience each", "2 Dwarven stout (m)"],
};
