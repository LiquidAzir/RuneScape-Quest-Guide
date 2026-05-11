import type { QuestWalkthrough } from "../types";

export const mourningsEndPartI: QuestWalkthrough = {
  startPoint:
    "Talk to Eluned in Lletya (the hidden elf village in Tirannwn — accessed via Arianwyn during Roving Elves, or via the Lletya teleport crystal post-quest).",
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
          text: "Travel to Lletya (the hidden elf village in southern Tirannwn — teleport with a Lletya crystal, or run from Tyras Camp via Eluned's tracking).",
        },
        {
          text: "Talk to Eluned in the centre of Lletya — pick 'Yes, I should go see him now'.",
        },
        {
          text: "Walk south-east in Lletya and talk to Arianwyn near the small stone circle.",
        },
        {
          text: "Travel east of Lletya to the Arandar Pass gate (the narrow mountain pass between Tirannwn and Kandarin). A Mourner stands by the gate — defeat him.",
        },
        {
          text: "Collect all 7 dropped items: mourner top, trousers, hood, boots, gloves, gas mask, and the chemical sprayer.",
        },
        {
          text: "Optional: take a Ring of dueling to Ferox Enclave (or any duel arena) to restore your drained stats.",
        },
      ],
    },
    {
      title: "Wash the bloody top",
      steps: [
        {
          text: "Travel to Tegid's cabin by the south-eastern shore of Taverley Lake (south of Taverley village, on the lake's east bank).",
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
          text: "Teleport back to Lletya using a Lletya teleport crystal.",
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
          text: "If you don't have dyes, travel to Aggie the witch in Draynor Village; she sells red/yellow/blue and can make others.",
        },
      ],
    },
    {
      title: "Inside the Mourner HQ",
      steps: [
        {
          text: "Travel to West Ardougne and equip the full repaired mourner outfit (top, trousers, hood, boots, gloves, gas mask).",
        },
        {
          text: "Enter the Mourner Headquarters — the large building in the north-east of West Ardougne with the Mourner symbol on the doors.",
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
          text: "Travel to a swamp toad spawn (Castle Wars swamp or Feldip Hills jungle north of the Hunter area).",
        },
        {
          text: "Use red, yellow, green, and blue dyes on the ogre bellows to colour the air, then use the bellows on swamp toads to inflate 1 of each colour.",
        },
        {
          text: "Travel back to the sheep field directly north of East Ardougne (the row of dyed sheep behind the fence near the Lighthouse road).",
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
        },
        {
          text: "Collect a rotten apple from the orchard north-west of the Mourner HQ (the small orchard inside West Ardougne).",
        },
        {
          text: "Travel to Elena's house in East Ardougne (Plague City NPC — her house is south of the central road in East Ardougne); talk to her to receive a sieve.",
        },
        {
          text: "Return to the apple orchard north-west of the Mourner HQ. Pick up an empty barrel from beside the press and use it on the rotten apple piles to fill it with rotten apples.",
        },
        {
          text: "Use the barrel of rotten apples on the apple press inside the orchard building to mash them.",
        },
        {
          text: "Use a barrel of naphtha (from Regicide, or brew one with 5-9 coal at the chemist's still in Rimmington) on the mushed apples, then use the sieve on the barrel to filter.",
        },
        {
          text: "Use the toxic naphtha on a range (need 2 free inventory slots) — any range works; Lumbridge kitchen is closest.",
        },
        {
          text: "Add the resulting toxic powder to the grain sacks at the 2 West Ardougne food stores (north-east store and south-west store).",
        },
        {
          text: "Return to Essyllt in the Mourner HQ basement to report, then teleport back to Lletya and talk to Arianwyn.",
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
