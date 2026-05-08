import type { QuestWalkthrough } from "../types";

export const aTasteOfHope: QuestWalkthrough = {
  startPoint: "Talk to Garth outside the Theatre of Blood in Ver Sinhaza.",
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
        { text: "Talk to Garth at the Theatre of Blood entrance." },
        { text: "Travel to the Myreque Hideout via the Meiyerditch mines." },
        { text: "Talk to Safalaan." },
        { text: "Return to the Theatre of Blood." },
      ],
    },
    {
      title: "Vampyre rooftop scouting",
      steps: [
        { text: "Pay Harpert 1,000gp to climb the rubble near the Ver Sinhaza bank." },
        { text: "Navigate the steam vents and roofs northward." },
        { text: "Look through the red window — finish the dialogue." },
      ],
    },
    {
      title: "The myth of Serafina",
      steps: [
        { text: "Return to Safalaan and talk to Flaygian Screwte." },
        { text: "Travel to Serafina's basement house in Meiyerditch." },
        { text: "Collect mysterious meat, herb, vial, and pestle/mortar from the basement." },
        { text: "Make a potion using the vial of water; use it on the locked door." },
        { text: "Make a blood potion and unlock the chest for old notes." },
        { text: "Return to the hideout and defeat the Abomination (level 149) inside." },
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
        { text: "Talk to Kael after victory." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to the Myreque Hideout under Old Man Ral's house." },
        { text: "Talk to Safalaan to finish the quest." },
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
