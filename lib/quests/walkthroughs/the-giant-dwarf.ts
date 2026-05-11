import type { QuestWalkthrough } from "../types";

export const theGiantDwarf: QuestWalkthrough = {
  startPoint:
    "Travel to the Keldagrim cave entrance in north-east Kandarin (the rocky cave on the path between Rellekka and the Mountain Camp — fairy ring DKS drops you nearby; or run east from Rellekka along the north road then north). Talk to the Dwarven Boatman at the underground river inside the cave.",
  itemsRequired: [
    "200 coins (for Vermundi's exquisite clothes)",
    "Air rune + Law rune (Telekinetic Grab for the right boot)",
    "Logs + Tinderbox + Coal (for the spinning machine)",
    "Iron bar (Thurgo to repair the axe)",
    "3 cut sapphires (for Santiri's axe upgrade)",
    "10 each of: clay, copper, tin, iron, silver, gold, mithril ore + extra coal (Consortium ore tasks)",
    "10 each of: bronze, iron, silver, gold, steel, mithril bars (Consortium bar tasks)",
    "Redberry pie (bribe for Thurgo)",
  ],
  recommended: [
    "Stamina/energy potions",
    "Fast travel: Falador teleport (Mudskipper Point south of Falador), Varrock teleport (Grand Exchange minecart access post-quest)",
    "H.A.M. robes — optional, helps with one Consortium task",
  ],
  sections: [
    {
      title: "Reach Keldagrim",
      steps: [
        {
          text: "Travel to the Keldagrim entrance cave in north-east Kandarin (north of the Mountain Camp, east of Rellekka). Talk to the Dwarven Boatman at the underground river inside.",
        },
        {
          text: "Accept the Boatman's deal — he sails you to Keldagrim.",
        },
        {
          text: "Inside Keldagrim, walk to the Black Guard headquarters (the central stone building west of the bank in West Keldagrim). Talk to Commander Veldaban inside.",
        },
        {
          text: "Walk east across the central river bridge to East Keldagrim. Find Blasidar the sculptor in his workshop on the east side of East Keldagrim (workshop with statues outside).",
        },
      ],
    },
    {
      title: "Outfit Riki the model",
      steps: [
        {
          text: "Walk to Vermundi's silk stall in the East Keldagrim marketplace (the central market square in East Keldagrim) and talk to her about the silk request.",
        },
        {
          text: "Visit the Keldagrim Library (the building south-east of the East Keldagrim marketplace). Climb a bookcase to retrieve the book on costumes.",
        },
        {
          text: "Inside the library spinning room, use coal + logs on the spinning machine and light it with a tinderbox.",
        },
        {
          text: "Return to Vermundi at the silk stall in the East Keldagrim market and pay 200gp for the exquisite clothes.",
        },
        {
          text: "Walk to Dromund's house (south-east of the East Keldagrim marketplace, the house with two boots on display in the front room). Steal the LEFT boot from inside Dromund's house.",
        },
        {
          text: "Exit the house and stand outside the south window. Telekinetic Grab the RIGHT boot through the window (1 air rune + 1 law rune; need Magic 33).",
        },
        {
          text: "Walk to Santiri's weapon shop in central East Keldagrim. Use 3 cut sapphires on his ceremonial axe.",
        },
        {
          text: "Travel to Mudskipper Point south of Falador (use Falador teleport then walk south-west). Find Thurgo at his beach hut on the south coast. Give him a redberry pie + iron bar to repair the axe.",
        },
        {
          text: "Return to Keldagrim immediately via the minecart system (talk to the minecart conductor at any minecart station — Grand Exchange has a station after this quest).",
        },
      ],
    },
    {
      title: "Halfway there",
      steps: [
        {
          text: "Give the exquisite clothes, repaired axe, and matching boots to Riki the sculptor's model in Blasidar's workshop in East Keldagrim.",
        },
        {
          text: "Talk to Blasidar the sculptor — watch the cutscene as he sculpts the statue.",
        },
      ],
    },
    {
      title: "Join the Consortium",
      steps: [
        {
          text: "Walk to the upper floor of the East Keldagrim Marketplace building (the large building west of the river). Pick a Consortium company to join — pick ANY except Red Axe.",
        },
        {
          text: "Talk to the company secretary on the upper floor and accept ore delivery tasks. Bring the listed ores until you reach 75 reputation points.",
        },
        {
          text: "Then talk to the company director (also on the upper floor) and accept bar delivery tasks. Bring the listed bars until you reach 100 total points.",
        },
        {
          text: "Complete the bar tasks; the director invites you to formally join.",
        },
        {
          text: "Confirm joining the company.",
        },
        {
          text: "Return to Commander Veldaban in the Black Guard HQ in West Keldagrim.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "2,500 Mining + Smithing + Crafting experience each",
    "1,500 Magic + Thieving + Firemaking experience each",
    "Access to Keldagrim (banks, mine carts to/from Grand Exchange and Ice Mountain, Blast Furnace, Stonemason, etc.)",
  ],
};
