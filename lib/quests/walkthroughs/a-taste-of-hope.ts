import type { QuestWalkthrough } from "../types";

export const aTasteOfHope: QuestWalkthrough = {
  startPoint:
    "Talk to Garth standing outside the Theatre of Blood entrance in Ver Sinhaza (the vampyre seaport south of Meiyerditch in southern Morytania — Drakan's medallion teleport, or boat from Burgh de Rott).",
  itemsRequired: [
    "1,000 coins",
    "Knife or sickle",
    "Cut emerald",
    "Chisel",
    "Air runes (3) + cosmic rune (or enchant emerald tablet)",
    "Rod of Ivandis",
    "Pestle and mortar",
    "Vial of water",
    "Combat gear",
  ],
  recommended: [
    "Combat 70+",
    "Pickaxe",
    "Stamina potions",
    "Morytania legs 3 or 4 for diary perks",
    "Food + prayer potions",
  ],
  enemies: [
    "Abomination (level 149)",
    "4x Vyrewatch (level 87)",
    "Ranis Drakan (level 233) — boss, must use Ivandis flail",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Garth standing outside the Theatre of Blood gates in Ver Sinhaza.",
        },
        {
          text: "Travel north to Meiyerditch (the vampyre slum north of Ver Sinhaza). Enter the Meiyerditch Mines (the entrance pit on the south side of Meiyerditch) and follow the tunnels north-west to the Myreque Hideout under Old Man Ral's house.",
        },
        {
          text: "Talk to Safalaan in the Myreque Hideout (the basement chamber with the round table).",
        },
        {
          text: "Return south to the Theatre of Blood entrance in Ver Sinhaza.",
        },
      ],
    },
    {
      title: "Vampyre rooftop scouting",
      steps: [
        {
          text: "Find Harpert near the rubble heap just east of the Ver Sinhaza bank chest. Pay him 1,000gp to climb the rubble onto the rooftops.",
        },
        {
          text: "Navigate the steam vents and roofs northward across Ver Sinhaza — time your runs between vent bursts.",
        },
        {
          text: "At the northernmost roof, look through the red-glow window of the vampyre house and finish the dialogue.",
        },
      ],
    },
    {
      title: "The myth of Serafina",
      steps: [
        {
          text: "Return to the Myreque Hideout under Old Man Ral's house. Talk to Safalaan, then to Flaygian Screwte (the historian Myreque member) standing nearby.",
        },
        {
          text: "Travel back into Meiyerditch and find Serafina's old house (the marked house in central Meiyerditch). Climb down into its basement.",
        },
        {
          text: "Collect mysterious meat, an herb, a vial, and a pestle and mortar from around the basement.",
        },
        {
          text: "Use the herb on the vial of water to make a potion; use it on the locked door inside the basement to corrode the lock.",
        },
        {
          text: "Use the meat with pestle and mortar to make a blood potion; unlock the chest in the next room for old notes.",
        },
        {
          text: "Return to the Myreque Hideout under Old Man Ral's house. The Abomination (level 149) attacks — defeat it inside the hideout.",
        },
      ],
    },
    {
      title: "Make the Ivandis flail",
      steps: [
        { text: "Visit the basement of Old Man Ral's house in southern Meiyerditch." },
        { text: "Retrieve a silver sickle and chain from the crates." },
        { text: "Attach the cut emerald to the sickle." },
        { text: "Enchant the emerald sickle with Lvl-2 Enchant or a tablet." },
        { text: "Combine the chain with the enchanted sickle to create the Ivandis flail." },
      ],
    },
    {
      title: "Defeat Ranis Drakan",
      steps: [
        { text: "Travel to the Theatre of Blood and talk to Kael Forshaw." },
        { text: "Fight Ranis Drakan (level 233) using the Ivandis flail." },
        {
          text: "Manage his two summoned helpers and the final berserk phase.",
          notes: ["Eat through his special hits; the flail does massive damage to him."],
        },
        { text: "Talk to Kael Forshaw at the Theatre of Blood entrance after victory." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Myreque Hideout under Old Man Ral's house." },
        { text: "Talk to Safalaan in the Myreque Hideout under Old Man Ral's house to finish the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Ivandis flail (best weapon vs. vyrewatch)",
    "Drakan's medallion (free unlimited Theatre of Blood / Ver Sinhaza teleports)",
    "Tome of experience (2,500 XP to any 3 skills level 35+)",
  ],
};
