import type { QuestWalkthrough } from "../types";

export const mourningsEndPartI: QuestWalkthrough = {
  startPoint: "Talk to Eluned in the Isafdar elven woods.",
  itemsRequired: [
    "Bear fur",
    "2 Silk",
    "Red, yellow, green, and blue dyes",
    "Bucket of water",
    "Feather",
    "Rotten apple (West Ardougne)",
    "Toad crunchies (or premade)",
    "Magic logs",
    "Leather",
    "Ogre bellows",
    "Barrel of naphtha or 5-9 coal",
  ],
  recommended: [
    "Combat 60+",
    "Some food",
    "Ardougne / West Ardougne teleports",
    "Ring of dueling for stat reset",
    "Necklace of passage",
  ],
  enemies: ["Mourner (level 11) — drains all combat skills + HP to 20"],
  sections: [
    {
      title: "Get the mourner outfit",
      steps: [
        { text: "Talk to Eluned in Lletya, pick 'Yes, I should go see him now'." },
        { text: "Talk to Arianwyn in Lletya." },
        { text: "Travel to the Arandar Pass gate; defeat a mourner." },
        { text: "Collect all 7 dropped items." },
        { text: "Optional: Use a Ring of dueling at Ferox Enclave to restore your stats." },
      ],
    },
    {
      title: "Wash the top",
      steps: [
        { text: "Travel to Tegid by Taverley lake." },
        { text: "Steal soap from his laundry basket." },
        { text: "Use soap on the bloody mourner top with a bucket of water." },
      ],
    },
    {
      title: "Mend the trousers",
      steps: [
        { text: "Teleport to Lletya using a crystal." },
        { text: "Talk to Arianwyn in Lletya." },
        { text: "Talk to Oronwen north-west; pick 'Do you mend clothes?'." },
        { text: "Give her silk, bear fur, and the trousers." },
        { text: "Buy dyes if you don't have them." },
      ],
    },
    {
      title: "Inside the Mourner HQ",
      steps: [
        { text: "Equip the full mourner outfit and enter the HQ in West Ardougne." },
        { text: "Go down the trapdoor." },
        { text: "Talk to Essyllt in the basement." },
        { text: "Talk to the gnome on the rack in the Mourner headquarters basement; pick the toad crunchies option." },
        {
          text: "Use a feather on the gnome, release him, and talk while carrying soft leather + magic log + toad crunchies.",
        },
      ],
    },
    {
      title: "Sheep colour test",
      steps: [
        { text: "Travel to the Feldip Hills swamp or Castle Wars swamp." },
        { text: "Use dyes on the ogre bellows; use the bellows on swamp toads (1 of each colour)." },
        { text: "Travel to the sheep north of East Ardougne." },
        { text: "Use a coloured toad on the fixed device, equip it." },
        { text: "Pick 'Aim and Fire' and target the matching coloured sheep." },
      ],
    },
    {
      title: "Poison the food supply",
      steps: [
        { text: "Talk to Essyllt in the basement." },
        { text: "Collect a rotten apple north-west of the Mourner HQ." },
        { text: "Talk to Elena west of Ardougne; receive a sieve." },
        { text: "Travel to the apple orchard north-west; pick up an empty barrel and use it on rotten apple piles." },
        { text: "Use the barrel on the apple press to mash them." },
        { text: "Use the barrel of naphtha on the mushed apples, then the sieve." },
        { text: "Use the toxic naphtha on a range (need 2 free inventory slots)." },
        { text: "Add toxic powder to grain sacks at 2 West Ardougne food stores." },
        { text: "Talk to Essyllt, then Arianwyn in Lletya." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "40,000 Thieving experience",
    "25,000 Hitpoints experience",
    "Access to the Mourner HQ basement",
    "Crystal teleport seed (elf teleport)",
    "Fixed device + full mourner clothing",
  ],
};
