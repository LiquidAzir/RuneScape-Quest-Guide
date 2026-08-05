import type { QuestWalkthrough } from "../types";

export const aTasteOfHope: QuestWalkthrough = {
  startPoint:
    "Talk to Garth standing outside the Theatre of Blood gates in Ver Sinhaza, the vampyre seaport south-east of Meiyerditch. Fairy ring CKS or Kharyrll Teleport to Canifis, run south through Mort Myre to Mort'ton and on to Burgh de Rott (Morytania legs 2+ teleport straight there), then north into Meiyerditch and east along the shore road to Ver Sinhaza.",
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
          travel:
            "Morytania legs 2+ teleport to Burgh de Rott, then run north through the wall gap into Meiyerditch and follow the eastern shore road south-east to Ver Sinhaza. No legs: fairy ring CKS or Kharyrll Teleport to Canifis and run south through Mort Myre to Mort'ton, then take the Burgh de Rott road.",
        },
        {
          text: "Enter the Meiyerditch Mines through the pit on the south side of Meiyerditch and follow the tunnels north-west to the Myreque Hideout under Old Man Ral's house.",
          travel:
            "From Ver Sinhaza run north-west up the shore road into Meiyerditch; the mine pit is in the southern slums, just inside the town from the Burgh de Rott wall.",
        },
        {
          text: "Talk to Safalaan in the Myreque Hideout (the basement chamber with the round table).",
        },
        {
          text: "Return south to the Theatre of Blood entrance in Ver Sinhaza.",
          travel: "Back out through the mine tunnels, then south-east down the Meiyerditch shore road to Ver Sinhaza.",
        },
      ],
    },
    {
      title: "Vampyre rooftop scouting",
      steps: [
        {
          text: "Find Harpert near the rubble heap just east of the Ver Sinhaza bank chest and pay him 1,000gp to climb onto the rooftops.",
          travel: "From Garth at the theatre gates walk north along the Ver Sinhaza waterfront to the bank chest, then a few steps east to the rubble.",
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
          text: "Return to the Myreque Hideout under Old Man Ral's house, talk to Safalaan, then to Flaygian Screwte (the historian Myreque member) standing nearby.",
          travel: "Run north-west out of Ver Sinhaza into Meiyerditch, down the southern mine pit, and through the tunnels north-west to the hideout.",
        },
        {
          text: "Find Serafina's old house in central Meiyerditch and climb down into its basement.",
          travel: "Leave the hideout up into Old Man Ral's house, then head north through the Meiyerditch slum alleys — Serafina's is the boarded-up house in the middle of the town with a trapdoor inside.",
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
          travel: "Back up out of Serafina's basement and south-west through Meiyerditch to Old Man Ral's house, then down into the hideout.",
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
        {
          text: "Talk to Kael Forshaw at the Theatre of Blood entrance in Ver Sinhaza.",
          travel: "Out of the hideout, then south-east down the Meiyerditch shore road to the Ver Sinhaza quay.",
        },
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
        {
          text: "Return to the Myreque Hideout under Old Man Ral's house.",
          travel: "Drakan's medallion (rewarded during the quest) → Meiyerditch, then run to Old Man Ral's house in the southern slums and climb down.",
        },
        { text: "Talk to Safalaan in the Myreque Hideout to finish the quest." },
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
