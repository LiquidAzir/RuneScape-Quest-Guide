import type { QuestWalkthrough } from "../types";

export const dwarfCannon: QuestWalkthrough = {
  startPoint: "Talk to Captain Lawgof south of the Coal Trucks (north-west of the Fishing Guild).",
  itemsRequired: ["A hammer (one is in the nearby house if you don't have one)"],
  recommended: [
    "Some food at low combat levels",
    "Stamina/energy potions",
    "Skills necklace (Fishing Guild teleport) for fast travel",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Captain Lawgof at the dwarf camp by the Coal Trucks west of Seers' Village." },
        { text: "Talk to Captain Lawgof at the dwarf camp by the Coal Trucks west of Seers' Village and agree to help." },
      ],
    },
    {
      title: "Repair the fence and tower",
      steps: [
        { text: "If you don't have a hammer, take one from the nearby house." },
        { text: "Use the hammer to repair all 6 broken railings around the camp's west and south fence." },
        { text: "Talk to Captain Lawgof again south of the Coal Trucks (north-west of the Fishing Guild)." },
        { text: "Walk south to the watchtower and climb both ladders to the top." },
        { text: "Pick up the dwarf remains from the top." },
        { text: "Return them to Captain Lawgof." },
      ],
    },
    {
      title: "Rescue Lollk",
      steps: [
        { text: "Travel to the cave entrance south-east of the Fishing Guild." },
        { text: "Inside, navigate north-west to find a crate." },
        { text: "Search the crate to find Lollk and tell her to escape." },
        { text: "Report back to Captain Lawgof." },
      ],
    },
    {
      title: "Repair the multicannon",
      steps: [
        { text: "Talk to Captain Lawgof south of the Coal Trucks (north-west of the Fishing Guild). He hands you cannon parts and tools." },
        { text: "Use the hook tool on the spring." },
        { text: "Use the pliers on the safety switch at the bottom." },
        { text: "Use the tooth tool on the gear at the bottom of the hammer mechanism." },
        { text: "Talk to Captain Lawgof south of the Coal Trucks (north-west of the Fishing Guild) to confirm." },
      ],
    },
    {
      title: "Get the cannonball mould",
      steps: [
        { text: "Travel to the Black Guard camp north-east of Falador." },
        { text: "Enter the house on the west side and talk to Nulodion. He gives you his notes and the cannonball mould." },
        { text: "Return to Captain Lawgof south of the Coal Trucks (north-west of the Fishing Guild) and hand both over." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "750 Crafting experience",
    "Ability to buy and use the Dwarf multicannon",
    "Ability to smith cannonballs from steel bars",
  ],
};
