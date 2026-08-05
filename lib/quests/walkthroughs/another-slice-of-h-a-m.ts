import type { QuestWalkthrough } from "../types";

export const anotherSliceOfHAM: QuestWalkthrough = {
  startPoint:
    "Talk to Ur-tag or Ambassador Alvijar in the north-east of Dorgesh-Kaan. Fairy ring DJP drops you inside the Lumbridge Swamp Caves right by the city gate; otherwise Lumbridge Home Teleport, run south into Lumbridge Swamp, climb down the cave entrance (light source required) and head west to the Dorgesh-Kaan door. A Dorgesh-Kaan sphere teleports straight into the city.",
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
        {
          text: "Talk to Ur-tag or Ambassador Alvijar in the north-east of Dorgesh-Kaan.",
          travel:
            "Fairy ring DJP puts you in the Lumbridge Swamp Caves beside the Dorgesh-Kaan gate. Otherwise Lumbridge Home Teleport, run south-east into Lumbridge Swamp, climb into the cave entrance with a light source and follow the tunnel west. Inside the city, take the stairs up to the middle level and head north-east to the palace.",
        },
        { text: "Accept the rail link project quest." },
      ],
    },
    {
      title: "Excavation",
      steps: [
        {
          text: "Go to the south-west corner of the city's middle level and enter the transportation doorway.",
          travel: "From Ur-tag's palace in the north-east, follow the middle-level walkways south then west across the city to the far south-west corner.",
        },
        { text: "Talk to Tegdak in the Dorgesh-Kaan transportation room." },
        { text: "Use the trowel to dig 6 artefacts from the dig site." },
        { text: "Clean the artefacts at the specimen table with the specimen brush." },
        { text: "Talk to Tegdak again — Zanik joins you automatically." },
      ],
    },
    {
      title: "To the goblin village",
      steps: [
        { text: "Make sure Zanik is following." },
        {
          text: "Talk to the Goblin scribe just west of Ur-tag in the north-east of Dorgesh-Kaan.",
          travel: "Head back east and north across the middle level to Ur-tag's palace — the scribe stands a few squares west of him.",
        },
        {
          text: "Talk to Oldak in his laboratory on the lower level to be teleported to Goblin Village.",
          travel: "Climb down to the bottom level of Dorgesh-Kaan and head to the north-west quarter — Oldak's lab is the room full of machinery.",
        },
      ],
    },
    {
      title: "H.A.M. ambush",
      steps: [
        {
          text: "Talk to General Wartface or Bentnoze in the largest hut in Goblin Village to start the cutscene.",
          travel:
            "Oldak's teleport drops you at Goblin Village. If you need to walk back later, it is in the valley north of Falador — Falador Teleport, out the north gate, then north-east past the Ice Mountain path.",
        },
        { text: "Run south to the ladder, staying west of the houses." },
        { text: "Kill the H.A.M. Mage and Archer using magic or ranged ONLY." },
        { text: "Talk to General Wartface or Bentnoze in Goblin Village to receive the Ancient mace and goblin warriors." },
      ],
    },
    {
      title: "Ambush past the guards + defeat Sigmund",
      steps: [
        {
          text: "Go to the Lumbridge Swamp Cave entrance and talk to the goblin sergeant waiting there.",
          travel:
            "Lumbridge Home Teleport, then run south past the castle into Lumbridge Swamp; the cave entrance is the hole in the ground in the swamp's western half (light source required).",
        },
        { text: "Climb down and tell the sergeant to wait." },
        { text: "Enter the room and wait for two guards to pass." },
        { text: "Tell the sergeant to wait inside the room." },
        { text: "Trigger the third guard, then retreat." },
        { text: "Ask the sergeant to follow after the third guard passes." },
        { text: "Walk (don't run) to the tunnel end; the final guard attacks the sergeant." },
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
