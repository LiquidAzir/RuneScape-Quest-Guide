import type { QuestWalkthrough } from "../types";

export const theGreatBrainRobbery: QuestWalkthrough = {
  startPoint:
    "Talk to Brother Tranquility on Mos Le'Harmless, just inland from the dock. Ectophial to Port Phasmatys (or Kharyrll teleport to Canifis and run east), then talk to Bill Teach aboard his ship on the Port Phasmatys east dock to sail to Mos Le'Harmless — you need a bandana and Cabin Fever completed.",
  itemsRequired: [
    "Fishbowl helmet + diving apparatus (or Medallion of the deep)",
    "10 wooden cats",
    "Holy symbol",
    "Ring of Charos",
    "4 planks (14 if crafting wooden cats)",
    "10 fur (if crafting wooden cats)",
    "Hammer (NOT Imcando)",
    "~100 nails",
    "8 normal planks",
  ],
  recommended: [
    "Combat 60+",
    "Ectophial / Port Phasmatys teleport",
    "Glory amulet or Fenkenstrain teleport runes",
    "Ranged or magic for safespotting Barrelchest",
    "Sharks/anglers + prayer potions",
  ],
  enemies: [
    "Barrelchest (level 190) — drains prayer; safespottable",
    "4 Sorebones (level 57)",
  ],
  sections: [
    {
      title: "Scout Harmony Island",
      steps: [
        {
          text: "Talk to Brother Tranquility near the Mos Le'Harmless dock and complete the dialogue; he sails you to Harmony Island.",
          travel:
            "Ectophial to Port Phasmatys, then talk to Bill Teach on his ship at the east dock for passage to Mos Le'Harmless (bandana required). Brother Tranquility stands a few squares inland from where the ship lands.",
        },
        {
          text: "On Harmony Island, head north from the landing point, pull the statue and climb down.",
        },
        { text: "Equip the fishbowl helmet + diving apparatus and descend underwater." },
        { text: "Repair the stairs and climb up." },
        { text: "Climb a ladder and peer through the peephole." },
        { text: "Return to Brother Tranquility for transport back to Mos Le'Harmless." },
      ],
    },
    {
      title: "The prayer book",
      steps: [
        {
          text: "Search the bookcase in the south-west corner of the ground floor of the Edgeville Monastery for the prayer book.",
          travel:
            "Amulet of glory to Edgeville and run south-west along the road, or Falador teleport and run north-east past the Ice Mountain path. The monastery is the walled chapel between the two.",
        },
        { text: "Read the book." },
        {
          text: "Equip a holy symbol and return to Mos Le'Harmless.",
          travel: "Ectophial to Port Phasmatys and take Bill Teach's ship from the east dock again.",
        },
        { text: "Talk to Brother Tranquility near the Mos Le'Harmless dock to return to Harmony Island." },
        { text: "Right-click the book and recite the prayer inside the Harmony Island windmill." },
        { text: "Sail back with Brother Tranquility and talk to him on Mos Le'Harmless." },
      ],
    },
    {
      title: "Smuggle Fenkenstrain",
      steps: [
        {
          text: "Talk to Dr Fenkenstrain in the jail on the top floor of his castle north-east of Canifis.",
          travel:
            "Kharyrll teleport (or a Fenkenstrain's castle teleport tablet) to Canifis, then run north-east to the castle. Inside, take the east or west stairs, pass the metal gate and climb the ladder to the jail.",
        },
        { text: "Equip the Ring of Charos." },
        {
          text: "Talk to Rufus in the Canifis food store for a wolf whistle and crate part.",
          travel: "Run back south-west to Canifis; the meat store is on the north side of the main street.",
        },
        {
          text: "Make 10 wooden cats on the clockmaker's bench in your player-owned house (planks + fur).",
          travel: "Teleport to house, or use the house portal in Rimmington/Taverley etc. The bench is in the Workshop room.",
        },
        {
          text: "Build the crate with false bottom next to Dr Fenkenstrain in his castle jail.",
          travel: "Kharyrll teleport back to Canifis and north-east to the castle, then up to the top-floor jail again.",
        },
        { text: "Blow the wolf whistle; receive the shipping order from Rufus." },
        { text: "Place the shipping order on the crate." },
      ],
    },
    {
      title: "Make medical transplants",
      steps: [
        {
          text: "Return to Harmony Island and enter the windmill basement north of the dock.",
          travel: "Ectophial to Port Phasmatys, Bill Teach's ship to Mos Le'Harmless, then Brother Tranquility across to Harmony Island.",
        },
        { text: "Talk to Dr Fenkenstrain in the windmill basement." },
        { text: "Go north to the shipwreck in your diving gear." },
        { text: "Search the locker for the fuse; climb the ladder for a tinderbox + keg." },
        { text: "Go south to the Harmony Island monastery; use the keg + fuse on the door and light the fuse." },
        { text: "Kill 4 Sorebones inside for the medical tools." },
        { text: "Return and talk to Dr Fenkenstrain, then Brother Tranquility." },
      ],
    },
    {
      title: "Defeat Barrelchest",
      steps: [
        { text: "Confront Mi-Gor inside the Harmony Island monastery to start the Barrelchest fight." },
        { text: "Wear underwater breathing gear during the fight." },
        { text: "Re-enable prayer after each hit to avoid drain damage (or safespot from the entrance)." },
        { text: "Talk to Brother Tranquility to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "6,000 Prayer experience",
    "3,000 Crafting experience",
    "2,000 Construction experience",
    "Blessed lamp (5,000 XP in any skill 30+)",
    "Barrelchest anchor (massive 2H weapon)",
    "Prayer book + Harmony Island Teleport",
  ],
};
