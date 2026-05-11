import type { QuestWalkthrough } from "../types";

export const trollStronghold: QuestWalkthrough = {
  startPoint:
    "Talk to Denulth inside the Imperial Guard soldier tent in central Burthorpe (the large blue-and-white tent in the centre of the village — Burthorpe is north of Taverley/Falador).",
  itemsRequired: ["Climbing boots (or 12gp from Tenzing)"],
  recommended: [
    "Combat 50+",
    "Ranged or magic for safespotting Dad and the Troll General",
    "43 Prayer for Protect from Melee",
    "30+ Thieving to pickpocket the troll guards",
    "Food + armour",
    "Games necklace for fast escape",
    "Stamina/energy potions",
  ],
  enemies: [
    "Dad (level 101) — boss in the arena, safespottable",
    "Troll General (level 113) — drops the prison key, safespottable",
    "Berry and Twig (level 71) — pickpocket if possible",
  ],
  sections: [
    {
      title: "Travel to the stronghold",
      steps: [
        {
          text: "Talk to Denulth inside the Imperial Guard tent in central Burthorpe and accept the rescue mission for Godric.",
        },
        {
          text: "Walk north-west out of Burthorpe along the path Tenzing showed you in Death Plateau (the spiked-boot route). Death Plateau must be complete.",
        },
        {
          text: "Buy climbing boots (12gp) from Tenzing the Sherpa at his hut west of Burthorpe if you don't have any.",
        },
        {
          text: "Continue north up Death Plateau to the troll arena (the small open arena at the top of the plateau). Talk to Dad (level 101) to start the fight; damage him until the fight ends automatically (his head pops off after enough damage).",
        },
        {
          text: "Exit the arena through the gate to the north.",
        },
        {
          text: "Run north through the cave corridor past the Thrower trolls — use Protect from Missiles or sprint with stamina.",
        },
        {
          text: "Enter the Troll Stronghold cave entrance at the end of the corridor.",
        },
      ],
    },
    {
      title: "Inside the stronghold",
      steps: [
        {
          text: "Inside the Troll Stronghold (ground floor), follow the corridor north-east to the Troll General's chamber.",
        },
        {
          text: "Defeat the Troll General (level 113) using ranged/magic from a safespot behind the chamber pillar. Pick up the prison key from his body.",
        },
        {
          text: "Walk west then south to the jail area on the lower floor of the stronghold (climb down the trapdoor near the General's chamber).",
        },
        {
          text: "At the cell block, pickpocket Twig and Berry (the two troll guards, level 71) to bypass them — pickpocketing them gives a chance per attempt. Kill them if pickpocketing fails too many times.",
        },
        {
          text: "Use the prison key on the cell doors and free both prisoners (Godric and Eadgar) from their cells.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Teleport out (Games necklace to Burthorpe is fastest), or follow the prisoners through the secret exit." },
        {
          text: "Travel to Burthorpe and find Dunstan the smith at his anvil in north-east Burthorpe (the open-air anvil east of the soldier tent). Talk to him to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Law talisman (and ability to craft Law runes)",
    "Access to Trollheim, the Troll Stronghold and the Law Altar",
    "Access requirement met for the God Wars Dungeon (with the right gear)",
  ],
};
