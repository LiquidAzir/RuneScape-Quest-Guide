import type { QuestWalkthrough } from "../types";

export const mourningsEndPartI: QuestWalkthrough = {
  startPoint:
    "Talk to Eluned in Lletya, the hidden elf village in Isafdar (Tirannwn). Fastest way in: have Eluned charge a crystal teleport seed and use its Lletya teleport. Without a crystal, run west out of East Ardougne and north-west through the Arandar mountain pass, then follow the forest path south-west through Isafdar (mind the tripwires and dart traps) to Lletya's hidden entrance.",
  itemsRequired: [
    "Bear fur (kill a bear for the fur, or buy from the GE)",
    "2 Silk",
    "Red, yellow, green, and blue dyes (Aggie the witch in Draynor Village makes them)",
    "Bucket of water",
    "Feather",
    "Rotten apple (picked from the apple orchard north-west of West Ardougne in-quest)",
    "Toad crunchies (buy from the Grand Tree gnome chef or fletch)",
    "Magic logs",
    "Leather (soft tanned)",
    "Ogre bellows",
    "Barrel of naphtha (made in Regicide) OR 5-9 coal to brew one in-quest",
  ],
  recommended: [
    "Combat 60+ (the mourner you fight drains your stats to ~level 11 effective)",
    "Some food",
    "Ardougne teleport + West Ardougne teleport tablet",
    "Ring of dueling (teleport to Ferox Enclave to reset drained stats)",
    "Necklace of passage (Outpost teleport — near the start area)",
  ],
  enemies: [
    "Mourner (level 11 effective during the fight) — first kill in Arandar Pass; drains all your combat stats + Hitpoints to 20 with a special attack",
  ],
  sections: [
    {
      title: "Get the mourner outfit",
      steps: [
        {
          text: "Travel to Lletya, the hidden elf village in the Isafdar forest.",
          travel:
            "Use a charged crystal teleport seed and pick Lletya — it drops you inside the village. No crystal: Ardougne Teleport, run west out of the city and north-west into the Arandar mountain pass, follow it west into Isafdar, then head south-west through the woods to the Lletya entrance. Bring food; the Isafdar traps hit for chip damage the whole way.",
        },
        {
          text: "Talk to Eluned in the centre of Lletya — pick 'Yes, I should go see him now'.",
        },
        {
          text: "Walk south-east in Lletya and talk to Arianwyn near the small stone circle.",
        },
        {
          text: "Travel to the Arandar Pass gate and defeat the Mourner standing beside it.",
          travel:
            "From Lletya leave by the north-east exit and run north-east through Isafdar the way you came in, back up to the Arandar pass gate on the Kandarin border. Coming from the other side instead, Ardougne Teleport and run west then north-west into the pass — the Mourner is at the gate itself.",
        },
        {
          text: "Collect all 7 dropped items: mourner top, trousers, hood, boots, gloves, gas mask, and the chemical sprayer.",
        },
        {
          text: "Optional: restore the combat stats the Mourner drained.",
          travel:
            "Ring of dueling to Ferox Enclave and step in the pool, or Emir's Arena on the same ring — both fully restore drained stats. No ring: any Nurse/pool of refreshment works, or just wait it out.",
        },
      ],
    },
    {
      title: "Wash the bloody top",
      steps: [
        {
          text: "Travel to Tegid's cabin on the south-eastern shore of Taverley Lake.",
          travel:
            "Falador Teleport, run out of the west gate and keep west into Taverley, then south-west to the lake — the cabin sits on the lake's south-east bank below the village. Games necklace to Burthorpe and running south works too.",
        },
        {
          text: "Steal soap from the laundry basket inside Tegid's cabin (sneak past him).",
        },
        {
          text: "Use the soap and a bucket of water on the bloody mourner top to wash it clean.",
        },
      ],
    },
    {
      title: "Mend the trousers",
      steps: [
        {
          text: "Return to Lletya.",
          travel:
            "Crystal teleport seed to Lletya. Without one, retrace the Arandar pass route: run north-west out of East Ardougne into the pass, west into Isafdar, then south-west to the village entrance.",
        },
        {
          text: "Talk to Arianwyn in Lletya about the trousers.",
        },
        {
          text: "Walk north-west in Lletya to Oronwen's clothing shop and talk to her — pick 'Do you mend clothes?'.",
        },
        {
          text: "Give Oronwen silk, bear fur, and the torn trousers — she mends them.",
        },
        {
          text: "If you don't have dyes, buy them from Aggie the witch in Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village (or run west along the south river road from Lumbridge). Aggie's house is the small one on the west side of the village, just south of Ned's house and west of the market stalls.",
        },
      ],
    },
    {
      title: "Inside the Mourner HQ",
      steps: [
        {
          text: "Travel to West Ardougne and equip the full repaired mourner outfit (top, trousers, hood, boots, gloves, gas mask).",
          travel:
            "Ardougne Teleport (or an Ardougne teleport tab) lands you in the East Ardougne market square. Run west past Ardougne Castle to the gate in the city wall — after Plague City the guard lets you through into West Ardougne.",
        },
        {
          text: "Enter the Mourner Headquarters in the north-east of West Ardougne.",
          travel:
            "From the wall gate run north-east through West Ardougne; the HQ is the large building in the north-east corner with the Mourner symbol on its doors. You must be wearing the full mourner outfit to get in.",
        },
        {
          text: "Inside the HQ, descend the trapdoor in the centre to enter the basement.",
        },
        {
          text: "In the basement, talk to Essyllt (the mourner mage at the end of the hallway).",
        },
        {
          text: "Find the gnome strapped to the rack in the basement torture room and talk to him — pick the toad crunchies dialogue option.",
        },
        {
          text: "Use a feather on the gnome to tickle him free, release him, then talk to him while carrying soft leather + magic log + toad crunchies to learn about the colour test.",
        },
      ],
    },
    {
      title: "Sheep colour test",
      steps: [
        {
          text: "Travel to a swamp toad spawn to catch toads for the sprayer.",
          travel:
            "Ring of dueling to Castle Wars, then run south into the swamp — swamp toads hop around the marsh south of the arena. Alternative: the Feldip Hills jungle north of the Hunter area, reached by running south from Yanille.",
        },
        {
          text: "Use red, yellow, green, and blue dyes on the ogre bellows to colour the air, then use the bellows on swamp toads to inflate 1 of each colour.",
        },
        {
          text: "Travel to the fenced sheep field north of East Ardougne.",
          travel:
            "Ardougne Teleport to the market square, then run north out of the city along the road toward the Fishing Guild — the four dyed sheep are in the fenced field on the west side of that road. Skills necklace to the Fishing Guild and running south is quicker if you have one.",
        },
        {
          text: "Use a coloured toad on the fixed device (chemical sprayer) and equip the device.",
        },
        {
          text: "Pick 'Aim and Fire' and target the matching coloured sheep in turn (4 sheep, 4 colours).",
        },
      ],
    },
    {
      title: "Poison the food supply",
      steps: [
        {
          text: "Return to Essyllt in the Mourner HQ basement.",
          travel:
            "Ardougne Teleport, run west past the castle through the wall gate into West Ardougne, then north-east to the HQ. Wear the full mourner outfit, go down the central trapdoor and follow the hallway to Essyllt.",
        },
        {
          text: "Collect a rotten apple from the apple orchard in the north-west of West Ardougne.",
          travel:
            "Leave the HQ and run west across West Ardougne — the orchard with the press building is in the town's north-west corner, behind the row of houses.",
        },
        {
          text: "Travel to Elena's house in East Ardougne and talk to her to receive a sieve.",
          travel:
            "Back out through the wall gate into East Ardougne (or Ardougne Teleport and run west). Elena's house is in the north-west of East Ardougne, right against the wall to West Ardougne and just north of Ardougne Castle — next door to Edmond and Alrena's place.",
        },
        {
          text: "Return to the West Ardougne apple orchard. Pick up an empty barrel from beside the press and use it on the rotten apple piles to fill it with rotten apples.",
        },
        {
          text: "Use the barrel of rotten apples on the apple press inside the orchard building to mash them.",
        },
        {
          text: "Use a barrel of naphtha (from Regicide, or brew one with 5-9 coal at the chemist's still in Rimmington) on the mushed apples, then use the sieve on the barrel to filter.",
          travel:
            "For the Rimmington still: Falador Teleport, run south out of the south gate and west along the road to Rimmington — the Chemist's house is on the north side of the village.",
        },
        {
          text: "Use the toxic naphtha on a range (need 2 free inventory slots) — the Lumbridge Castle kitchen range is the easiest, one Lumbridge Home Teleport away.",
        },
        {
          text: "Add the resulting toxic powder to the grain sacks at both West Ardougne food stores (the north-east store near the HQ and the south-west store near the town gate).",
        },
        {
          text: "Return to Essyllt in the Mourner HQ basement to report, then teleport back to Lletya and talk to Arianwyn.",
          travel:
            "Crystal teleport seed to Lletya for the last leg; Arianwyn is in the south-east of the village by the stone circle.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "40,000 Thieving experience",
    "25,000 Hitpoints experience",
    "Access to the Mourner HQ basement (needed for Mourning's End Part II)",
    "Crystal teleport seed (Lletya teleport)",
    "Fixed device + full mourner clothing",
  ],
};
