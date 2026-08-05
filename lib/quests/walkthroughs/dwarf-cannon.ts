import type { QuestWalkthrough } from "../types";

export const dwarfCannon: QuestWalkthrough = {
  startPoint:
    "Talk to Captain Lawgof at the dwarven camp by the Coal Trucks, north-east of the Fishing Guild. Skills necklace → Fishing Guild, then run north-east up the path to the camp; without one, Camelot Teleport and run west past Seers' Village and the Coal Trucks.",
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
        {
          text: "Travel to the dwarven camp by the Coal Trucks, between the Fishing Guild and Seers' Village.",
          travel:
            "Skills necklace → Fishing Guild, then run north-east up the path — the camp is the fenced compound beside the Coal Trucks. No necklace: Camelot Teleport, run west out of Seers' Village and follow the road past the Coal Trucks.",
        },
        { text: "Talk to Captain Lawgof inside the camp and agree to help." },
      ],
    },
    {
      title: "Repair the fence and tower",
      steps: [
        { text: "If you don't have a hammer, take one from the house inside the camp." },
        { text: "Use the hammer to repair all 6 broken railings around the camp's west and south fence." },
        { text: "Talk to Captain Lawgof again to report the fence repaired." },
        {
          text: "Walk south to the watchtower and climb both ladders to the top.",
          travel: "The watchtower is just south of the camp, inside the same fenced area — follow the path down and climb the two ladders.",
        },
        { text: "Pick up the dwarf remains from the top." },
        { text: "Return them to Captain Lawgof at the camp." },
      ],
    },
    {
      title: "Rescue Lollk",
      steps: [
        {
          text: "Enter the goblin cave south of the dwarven camp, between the camp and the Fishing Guild.",
          travel:
            "From the camp run south past the watchtower — the cave mouth is in the rock face on the slope above the Fishing Guild wall.",
        },
        { text: "Inside, navigate north-west to find a crate." },
        { text: "Search the crate to find Lollk and tell her to escape." },
        {
          text: "Report back to Captain Lawgof at the camp.",
          travel: "Leave the cave and run back north to the Coal Trucks camp.",
        },
      ],
    },
    {
      title: "Repair the multicannon",
      steps: [
        { text: "Talk to Captain Lawgof — he hands you cannon parts and tools." },
        { text: "Use the hook tool on the spring." },
        { text: "Use the pliers on the safety switch at the bottom." },
        { text: "Use the tooth tool on the gear at the bottom of the hammer mechanism." },
        { text: "Talk to Captain Lawgof again to confirm the repair." },
      ],
    },
    {
      title: "Get the cannonball mould",
      steps: [
        {
          text: "Travel to the Black Guard camp north of Falador and enter the house on the west side to talk to Nulodion.",
          travel:
            "Falador Teleport, out the north gate and up the road past Doric's hut; the Black Guard camp sits at the foot of Ice Mountain, beside the northern Dwarven Mine entrance. Nulodion is inside the western building.",
        },
        { text: "Take his notes and the cannonball mould." },
        {
          text: "Return to Captain Lawgof at the Coal Trucks camp and hand both over.",
          travel: "Skills necklace → Fishing Guild, then run north-east up the path to the camp.",
        },
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
