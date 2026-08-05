import type { QuestWalkthrough } from "../types";

export const forgettableTale: QuestWalkthrough = {
  startPoint:
    "Talk to Commander Veldaban inside the Black Guard headquarters in West Keldagrim, the stone building just west of the Keldagrim bank. Getting there: ride the mine cart into Keldagrim — Falador Teleport, run north-east to the trapdoor at the foot of Ice Mountain and talk to the dwarf at the cart, or use the mine cart in the White Wolf Mountain tunnel if you have done Fishing Contest. The Giant Dwarf must be complete.",
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
        {
          text: "Talk to Commander Veldaban in the Black Guard headquarters west of the Keldagrim bank (dialogue 1, 1, 1).",
          travel:
            "Take the mine cart to Keldagrim: Falador Teleport, run north-east to the trapdoor at the foot of Ice Mountain and ride the cart, or board at the dwarven camp inside the White Wolf Mountain tunnel. From the Keldagrim cart station head north to the West Keldagrim bank — the Black Guard HQ is the stone building immediately west of it.",
        },
        {
          text: "Buy 3 beers from the bartender in the East Keldagrim pub.",
          travel: "Cross the river bridge east out of West Keldagrim; the pub is on the south side of the East Keldagrim marketplace.",
        },
        {
          text: "Talk to the drunken dwarf in his house just north of the East Keldagrim pub and pick 'I need to know about Red Axe'.",
          travel: "Step out of the pub and go north — his is the small house nearest the pub door.",
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
          text: "Talk to the rowdy dwarf loitering outside the East Keldagrim pub and bring him the random item he demands (your journal lists it).",
          travel: "He is right outside the pub door on the marketplace side.",
        },
        {
          text: "Find Khorvak the dwarven engineer in the pub inside the White Wolf Mountain tunnel.",
          travel:
            "Ride the Keldagrim mine cart to the White Wolf Mountain station, or walk in from the Taverley side of the mountain tunnel (needs Fishing Contest). The bar is the small underground room off the tunnel's dwarven camp.",
        },
        {
          text: "Offer Khorvak a drink and give him dwarven stout — he becomes talkative.",
        },
        {
          text: "Return to the East Keldagrim pub, give Gauss the bartender another beer and talk to him.",
          travel: "Mine cart back to Keldagrim, then east over the river bridge to the marketplace pub.",
        },
      ],
    },
    {
      title: "Plant kelda hops",
      steps: [
        {
          text: "Walk to the kelda hops patch in West Keldagrim, south-east of the bank near the river.",
          travel: "Back west over the river bridge, then south-east of the bank — the patch is the fenced plot beside the riverbank.",
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
          travel: "East over the river bridge to the marketplace pub, then up the staircase inside.",
        },
        {
          text: "Buy ale yeast from Blandebir the brewer upstairs for 25gp if you don't have any.",
        },
        {
          text: "Add to the vat in order: 2 buckets water, 2 barley malts, kelda hops, ale yeast.",
        },
        { text: "Wait 15-20 minutes for the ferment." },
        { text: "Turn the valve and use the beer glass on the barrel." },
        {
          text: "Return to the drunken dwarf's house north of the pub and discuss the Red Axe.",
        },
      ],
    },
    {
      title: "Mine cart puzzles",
      steps: [
        {
          text: "Ask the southernmost minecart conductor in south-east Keldagrim about the closed-off tunnel south of the station.",
          travel: "From the East Keldagrim marketplace run south to the cart system station; take the conductor at the very southern end of the platforms.",
        },
        {
          text: "Climb to the upper floor of the East Keldagrim marketplace building and talk to your mining company director (whichever Consortium company you joined in The Giant Dwarf).",
          travel: "North back to the marketplace — the directors' offices are up the stairs inside the large marketplace building by the bridge.",
        },
        {
          text: "Ask the director for help with the boarded tunnel.",
        },
        {
          text: "Return to the cart conductor in south-east Keldagrim and ride the southernmost minecart.",
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
        { text: "Buy a kebab and a beer in East Keldagrim if you need them." },
        {
          text: "Return to Commander Veldaban inside the Black Guard headquarters west of the West Keldagrim bank.",
          travel: "West over the river bridge from the marketplace, past the bank — the HQ is the stone building just west of it.",
        },
        {
          text: "Go back to the East Keldagrim pub and drink the beer and eat the kebab in front of the drunken dwarf to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: ["2 Quest Points", "5,000 Cooking + Farming experience each", "2 Dwarven stout (m)"],
};
