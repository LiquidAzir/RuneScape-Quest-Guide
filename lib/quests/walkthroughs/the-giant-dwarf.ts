import type { QuestWalkthrough } from "../types";

export const theGiantDwarf: QuestWalkthrough = {
  startPoint:
    "Talk to the Dwarven Boatman at the underground river inside the Keldagrim entrance cave, north-east of Rellekka. Get to Rellekka (Camelot teleport and run north-west, or fairy ring AJR then north-west), then head east out of the village past the Swaying Tree and follow the path north-east to the cave mouth.",
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
          text: "Travel to the Keldagrim entrance cave north-east of Rellekka and talk to the Dwarven Boatman at the underground river inside.",
          travel:
            "Camelot teleport and run north-west to Rellekka (or fairy ring AJR, the slayer cave south-east of Rellekka, then north-west). From the village go east past the Swaying Tree and follow the mountain path north-east until you reach the cave entrance; head inside and down to the river.",
        },
        {
          text: "Accept the Boatman's deal — he sails you to Keldagrim.",
        },
        {
          text: "Talk to Commander Veldaban inside the Black Guard headquarters, the stone building west of the bank in West Keldagrim.",
          travel: "The boat docks in West Keldagrim; walk up from the quay and the Black Guard HQ is just west of the bank.",
        },
        {
          text: "Find Blasidar the sculptor in his workshop on the east side of East Keldagrim (the one with statues outside).",
          travel: "Cross the central river bridge east into East Keldagrim and keep going east past the market.",
        },
      ],
    },
    {
      title: "Outfit Riki the model",
      steps: [
        {
          text: "Talk to Vermundi at her silk stall in the East Keldagrim marketplace about the silk request.",
          travel: "The marketplace is the big open square in the middle of East Keldagrim, west of Blasidar's workshop.",
        },
        {
          text: "Visit the Keldagrim library south-east of the East Keldagrim marketplace and climb a bookcase to retrieve the book on costumes.",
        },
        {
          text: "In the library's spinning room, use coal + logs on the spinning machine and light it with a tinderbox.",
        },
        {
          text: "Return to Vermundi at the silk stall in the East Keldagrim market and pay 200gp for the exquisite clothes.",
        },
        {
          text: "Steal the LEFT boot from inside Dromund's house, south-east of the East Keldagrim marketplace (the house with two boots on display in the front room).",
        },
        {
          text: "Exit the house and stand outside the south window. Telekinetic Grab the RIGHT boot through the window (1 air rune + 1 law rune; need Magic 33).",
        },
        {
          text: "Use 3 cut sapphires on the ceremonial axe in Santiri's weapon shop in central East Keldagrim.",
        },
        {
          text: "Give Thurgo a redberry pie + iron bar at his hut on Mudskipper Point to repair the axe.",
          travel:
            "Fairy ring AIQ lands on Mudskipper Point itself. Otherwise Falador teleport and run south-west past Port Sarim to the beach; Thurgo's hut is on the southern tip.",
        },
        {
          text: "Return to Keldagrim via the minecart system (the dwarf at the Dwarven Mine minecart station north of Falador, by Ice Mountain, will take you now that you have visited the city).",
          travel: "Falador teleport, run north to the Dwarven Mine entrance by Ice Mountain and take the minecart station inside.",
        },
      ],
    },
    {
      title: "Halfway there",
      steps: [
        {
          text: "Give the exquisite clothes, repaired axe, and matching boots to Riki the sculptor's model in Blasidar's workshop in East Keldagrim.",
          travel: "From the minecart station walk east over the river bridge and across East Keldagrim to Blasidar's workshop.",
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
          text: "Climb to the upper floor of the large marketplace building in East Keldagrim and pick a Consortium company to join — pick ANY except Red Axe.",
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
          travel: "Back west over the central river bridge; the HQ is the stone building just west of the West Keldagrim bank.",
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
