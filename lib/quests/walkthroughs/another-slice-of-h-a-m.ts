import type { QuestWalkthrough } from "../types";

export const anotherSliceOfHAM: QuestWalkthrough = {
  startPoint: "Talk to Ur-tag or Ambassador Alvijar in the north-east of Dorgesh-Kaan.",
  itemsRequired: [
    "Light source",
    "Trowel + Specimen brush (in-quest)",
    "Magic or ranged combat gear",
  ],
  recommended: [
    "Combat 35+",
    "Fast teleports to Lumbridge Swamp",
    "Some food + tinderbox + 8 free inventory slots",
  ],
  enemies: [
    "H.A.M. Archer (level 30)",
    "H.A.M. Mage (level 30)",
    "Sigmund (level 64) — final fight, only damageable with Ancient mace + protect prayer",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Ur-tag or Ambassador Alvijar in north-east Dorgesh-Kaan." },
        { text: "Accept the rail link project quest." },
      ],
    },
    {
      title: "Excavation",
      steps: [
        { text: "Go to the south-west corner of the city's middle level." },
        { text: "Enter the transportation doorway." },
        { text: "Talk to Tegdak." },
        { text: "Use the trowel to dig 6 artefacts." },
        { text: "Clean the artefacts at the specimen table." },
        { text: "Talk to Tegdak — Zanik joins you automatically." },
      ],
    },
    {
      title: "To the goblin village",
      steps: [
        { text: "Make sure Zanik is following." },
        { text: "Talk to the Goblin scribe west of Ur-tag." },
        { text: "Talk to Oldak on the lower level to teleport to Goblin Village." },
      ],
    },
    {
      title: "H.A.M. ambush",
      steps: [
        { text: "Talk to General Wartface or Bentnoze to start the cutscene." },
        { text: "Run south to the ladder, staying west of the houses." },
        { text: "Kill the H.A.M. Mage and Archer using magic or ranged ONLY." },
        { text: "Talk to General Wartface or Bentnoze in Goblin Village to receive the Ancient mace and goblin warriors." },
      ],
    },
    {
      title: "Ambush past the guards + defeat Sigmund",
      steps: [
        { text: "Go to the Lumbridge Swamp Cave entrance." },
        { text: "Talk to the goblin sergeant." },
        { text: "Climb down and tell the sergeant to wait." },
        { text: "Enter the room and wait for two guards to pass." },
        { text: "Tell the sergeant to wait inside the room." },
        { text: "Trigger the third guard, retreat." },
        { text: "Ask the sergeant to follow after the third guard passes." },
        { text: "Walk (don't run) to the tunnel end; final guard attacks the sergeant." },
        { text: "Climb down to fight Sigmund." },
        {
          text: "Use the Ancient mace special attack only AFTER Sigmund uses prayer (it drains his prayer).",
        },
        { text: "Defeat Sigmund and untie Zanik." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,000 Mining + Prayer experience each",
    "Ancient mace (only weapon that can boost Prayer above level 1)",
    "Access to Goblin Village teleport spheres",
    "Free Dorgesh-Kaan-Keldagrim train system",
  ],
};
