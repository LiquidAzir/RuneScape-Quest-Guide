import type { QuestWalkthrough } from "../types";

export const rfdSirAmikVarze: QuestWalkthrough = {
  startPoint:
    "Inspect Sir Amik Varze in the Lumbridge Castle dining room. Lumbridge Home Teleport to the castle courtyard, in through the north door to the kitchen (north-west room, ground floor), down the cellar staircase and through the dining-room doors.",
  itemsRequired: [
    "Bucket of milk",
    "Pot of cream",
    "Pot of cornflour",
    "Vanilla pod (Kharazi Jungle, south-west of the Legends' Quest area)",
    "Dramen branch",
    "Dramen or Lunar staff",
    "Pestle and mortar",
    "Ice gloves",
    "Raw chicken",
    "Combat gear and food for a black dragon",
  ],
  recommended: [
    "Combat 70+",
    "Anti-dragon shield + antifire potion",
    "Amulet of glory for fast travel",
  ],
  enemies: ["Evil Chicken (level varies)", "Black dragon (level 227)"],
  sections: [
    {
      title: "Make the brulee base",
      steps: [
        {
          text: "Talk to the Lumbridge Cook in Lumbridge Castle's kitchen about protecting Sir Amik Varze.",
          travel:
            "Lumbridge Home Teleport lands you in the castle courtyard; go in the north door and turn left into the north-west room. Sir Amik himself is frozen in the dining room below — down the staircase in the same kitchen and through the cellar doors.",
          notes: [
            "You must ask the Cook about Sir Amik before anything else, or the Wise Old Man will refuse to discuss the Evil Chicken later.",
            "Legends' Quest must at least be started so you can enter the Kharazi Jungle.",
          ],
        },
        { text: "Use the bucket of milk on the pot of cream to make a milky mixture." },
        { text: "Add the pot of cornflour to the milky mixture." },
        {
          text: "Travel to the Kharazi Jungle and pick a vanilla pod from the vanilla plants along the southern beach.",
          travel:
            "Fairy ring CKR drops you on Karamja just south of Tai Bwo Wannai; run south and hack through the dense jungle wall with a machete and axe, then head for the south coast — five vanilla plants grow along the beach. No fairy ring: gnome glider to Gandius (south of the Karamjan Ship Yard) and run south-west, or take the Brimhaven–Shilo Village cart and walk south. Bring the Radimus notes if you haven't finished Legends' Quest.",
        },
        { text: "Add the vanilla pod to the cornflour mixture." },
      ],
    },
    {
      title: "Get the Evil Chicken's egg",
      steps: [
        {
          text: "Talk to the Wise Old Man in Draynor Village about strange beasts and then the Evil Chicken.",
          travel:
            "Amulet of glory (Draynor Village) puts you by the market; his house is the large two-storey building just across from the Draynor bank, with Miss Schism loitering outside. On foot: run west from Lumbridge along the north bank of the river.",
          notes: [
            "If you have started Swan Song he will only talk about that quest until Herman Caranos asks you to help around the colony.",
          ],
        },
        {
          text: "Travel to Zanaris with a dramen or lunar staff equipped and bank for the fights.",
          travel:
            "Equip the staff and enter the shed in the north-west corner of Lumbridge Swamp, a short run south-west of Lumbridge Castle, then walk through the magic door. Zanaris has its own bank and a fairy ring hub.",
        },
        {
          text: "Use a raw chicken on the Evil Chicken shrine in northern Zanaris to enter the lair.",
          travel:
            "The shrine sits beside the fairy ring that links back to the Lumbridge Swamp shed — if you walked in through the shed it is right next to you; if you arrived by the fairy ring network, run north-east from the main Zanaris ring.",
          notes: [
            "Equip an anti-dragon or dragonfire shield first — black dragons stand right by the entrance.",
            "Green undead raw chicken from Morytania will not work.",
          ],
        },
        {
          text: "Run past the black dragons into the northern cave, defeat the Evil Chicken and pick up its egg.",
          notes: [
            "It is level 159 at 58-100 combat and level 170 above that; it attacks with weak but frequent Magic.",
            "If you die inside the lair after killing it, everything you dropped is lost.",
          ],
        },
        { text: "Add the egg to the brulee mixture." },
      ],
    },
    {
      title: "Get a dragon token and finish",
      steps: [
        {
          text: "Defeat one of the four black dragons in the Evil Chicken's Lair and collect the dragon token it drops.",
          notes: [
            "Do this on the same trip as the Evil Chicken — the lair is re-entered with another raw chicken if you bank in between.",
            "Safespot from the entrance of the eastern tunnel to the mine, or from the bone piles north of the main chamber.",
          ],
        },
        {
          text: "Grind a dramen branch with pestle and mortar to make cinnamon.",
          notes: [
            "Dramen branches are cut from the dramen tree in the Entrana dungeon — sail to Entrana with the monks at Port Sarim, carrying no weapons or armour.",
          ],
        },
        { text: "Add the cinnamon to the brulee." },
        {
          text: "Equip ice gloves and rub the dragon token to have K'klik flambé the brulee.",
          notes: [
            "This only works while you are in Lumbridge or Zanaris.",
            "Without ice gloves the flambé can hit up to 50; an antifire potion plus anti-dragon shield also works.",
          ],
        },
        {
          text: "Deliver the brulee supreme to Sir Amik Varze in the Lumbridge Castle dining room.",
          travel:
            "Lumbridge Home Teleport to the castle courtyard, in the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "4,000 Cooking experience",
    "4,000 Hitpoints experience",
    "Access to the Evil Chicken's Lair (handy black dragon spot)",
    "Sir Amik Varze freed",
  ],
};
