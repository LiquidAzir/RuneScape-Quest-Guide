import type { QuestWalkthrough } from "../types";

export const theLostTribe: QuestWalkthrough = {
  startPoint: "Talk to Sigmund on the first floor of Lumbridge Castle.",
  itemsRequired: [
    "Pickaxe",
    "Light source (candle, torch, or oil lamp + tinderbox)",
  ],
  recommended: [
    "Varrock, Falador, Lumbridge teleports",
    "Lockpick (for the H.A.M. Hideout)",
    "Stamina potion if Agility < 70",
  ],
  sections: [
    {
      title: "Investigate the cellar damage",
      steps: [
        { text: "Talk to Sigmund in Lumbridge Castle about quests." },
        { text: "Question Duke Horacio, the Cook, Hans, Father Aereck, Bob, and Gee/Donie about the cellar damage." },
        { text: "Report findings back to Duke Horacio." },
        { text: "Descend the kitchen trapdoor; mine the rubble; pick up the brooch from the cave floor." },
        { text: "Show the brooch to the Duke." },
      ],
    },
    {
      title: "Research at Varrock library",
      steps: [
        { text: "Travel to Varrock Palace library." },
        { text: "Talk to Reldo in the Varrock Palace library." },
        { text: "Search the western bookcase for the goblin symbol book." },
        { text: "Read the book." },
      ],
    },
    {
      title: "Goblin emote diplomacy",
      steps: [
        { text: "Visit the Goblin Generals at Goblin Village." },
        { text: "Mediate between them to learn the Goblin Bow and Salute emotes." },
      ],
    },
    {
      title: "Meet Mistag",
      steps: [
        { text: "Return to the Lumbridge cellar." },
        { text: "Navigate the caves following the provided map (don't stray)." },
        { text: "Find Mistag and perform the Goblin Bow emote." },
        { text: "Return to Lumbridge with Mistag." },
      ],
    },
    {
      title: "Frame Sigmund",
      steps: [
        { text: "Tell the Duke about the cave goblins (he disbelieves)." },
        { text: "Pickpocket Sigmund and unlock his chest for H.A.M. robes." },
        { text: "Enter the H.A.M. lair west of the castle." },
        { text: "Pick the trapdoor lock and search the crate for silverware." },
        { text: "Return the silverware to the Duke (Sigmund is fired; you receive a peace treaty)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the basement and follow Kazgar to Mistag." },
        { text: "Show the peace treaty to Mistag for the final cutscene." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 Mining experience",
    "Goblin Bow + Goblin Salute emotes",
    "Access to the Dorgesh-Kaan mine",
    "Ring of life",
    "Mining helmet",
  ],
};
