import type { QuestWalkthrough } from "../types";

export const rfdSirAmikVarze: QuestWalkthrough = {
  startPoint: "Inspect Sir Amik Varze in the Lumbridge Castle dining room.",
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
        { text: "Talk to the Cook about protecting Sir Amik Varze." },
        { text: "Mix bucket of milk with the pot of cream." },
        { text: "Add the pot of cornflour to the milky mixture." },
        { text: "Travel to the Kharazi Jungle (Legends' Quest area) and pick a vanilla pod." },
        { text: "Add the vanilla pod to the cornflour mixture." },
      ],
    },
    {
      title: "Get the Evil Chicken's egg",
      steps: [
        { text: "Talk to the Wise Old Man in Draynor Village about strange beasts and the Evil Chicken." },
        { text: "Travel to Zanaris with a dramen staff equipped." },
        { text: "Use a raw chicken on the Evil Chicken shrine in northern Zanaris." },
        { text: "Defeat the Evil Chicken; pick up its egg." },
        { text: "Add the egg to the brulee mixture." },
      ],
    },
    {
      title: "Get a dragon token and finish",
      steps: [
        { text: "Defeat a black dragon and collect its dragon token." },
        { text: "Grind a dramen branch with pestle and mortar to make cinnamon." },
        { text: "Add the cinnamon to the brulee." },
        { text: "Equip ice gloves and rub the dragon token to flambé the brulee." },
        { text: "Deliver the brulee supreme to Sir Amik in Lumbridge." },
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
