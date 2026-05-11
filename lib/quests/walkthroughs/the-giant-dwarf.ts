import type { QuestWalkthrough } from "../types";

export const theGiantDwarf: QuestWalkthrough = {
  startPoint: "Travel to the Keldagrim entrance east of Rellekka, north of Mountain Camp. Talk to the Dwarven Boatman at the underground river.",
  itemsRequired: [
    "200 coins",
    "Air rune + Law rune (Telekinetic Grab)",
    "Logs + Tinderbox + Coal",
    "Iron bar",
    "3 cut sapphires",
    "10 each of: clay, copper, tin, iron, silver, gold, mithril ore + coal",
    "10 each of: bronze, iron, silver, gold, steel, mithril bars",
    "Redberry pie",
  ],
  recommended: [
    "Stamina/energy potions",
    "Fast travel to Mudskipper Point + Varrock",
    "H.A.M. robes (optional)",
  ],
  sections: [
    {
      title: "Reach Keldagrim",
      steps: [
        { text: "Talk to the Dwarven Boatman and accept the deal." },
        { text: "Talk to Commander Veldaban in Keldagrim." },
        { text: "Talk to Blasidar the sculptor on the east side of Keldagrim." },
      ],
    },
    {
      title: "Outfit Riki the model",
      steps: [
        { text: "Talk to Vermundi (silk trader, eastern market)." },
        { text: "Visit the Keldagrim library; climb a bookcase to retrieve a book on costumes." },
        { text: "Use coal + logs on the spinning machine; light it with a tinderbox." },
        { text: "Pay 200gp to Vermundi for exquisite clothes." },
        { text: "Steal the left boot from Dromund's house." },
        { text: "Telegrab the right boot through the window outside his house." },
        { text: "Talk to Santiri at the weapon shop; use 3 sapphires on the axe." },
        { text: "Travel to Thurgo at Mudskipper Point; give him an iron bar to repair the axe." },
        { text: "Return to Keldagrim immediately via dialogue." },
      ],
    },
    {
      title: "Halfway there",
      steps: [
        { text: "Give the clothes, axe, and boots to Riki the sculptor's model." },
        { text: "Talk to Blasidar; watch the cutscene." },
      ],
    },
    {
      title: "Join the Consortium",
      steps: [
        { text: "Go to the upper floor of the market; pick a company (NOT Red Axe)." },
        { text: "Complete ore delivery tasks for the secretary to reach 75 points." },
        { text: "Deliver metal bars to the director for additional points (need 100 total)." },
        { text: "Complete bar delivery tasks for the director." },
        { text: "Join the company and confirm." },
        { text: "Return to Commander Veldaban in Keldagrim." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,500 Mining + Smithing + Crafting experience each",
    "1,500 Magic + Thieving + Firemaking experience each",
    "Access to Keldagrim (banks, mine carts to Grand Exchange, Blast Furnace, etc.)",
  ],
};
