import type { QuestWalkthrough } from "../types";

export const trollStronghold: QuestWalkthrough = {
  startPoint:
    "Talk to Denulth inside the Imperial Guard soldier tent in central Burthorpe (the large tent in the middle of the village). Fastest route: rub a games necklace and pick Burthorpe, which lands you beside the village. Otherwise walk north from Falador through Taverley and up the road to Burthorpe.",
  itemsRequired: ["Climbing boots (or 12gp from Tenzing)"],
  recommended: [
    "Combat 50+",
    "Ranged or magic for safespotting Dad and the Troll General",
    "43 Prayer for Protect from Melee",
    "30+ Thieving to pickpocket the troll guards",
    "Food + armour",
    "Games necklace for fast travel to Burthorpe and a fast escape",
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
          travel:
            "Games necklace to Burthorpe drops you right by the village. No games necklace: Falador Teleport, run west out of the west gate to Taverley, then follow the road north past the Warriors' Guild into Burthorpe. Denulth is in the big soldier tent in the middle of the village.",
        },
        {
          text: "Buy climbing boots (12gp) from Tenzing the Sherpa at his hut west of Burthorpe if you do not already own a pair.",
          travel:
            "From the soldier tent run west along the village path; Tenzing's hut is the last building before the ground rises into Death Plateau.",
        },
        {
          text: "Walk north-west out of Burthorpe and up the Death Plateau path that Tenzing showed you (Death Plateau must be complete). Climbing boots must be equipped.",
        },
        {
          text: "Continue north up Death Plateau to the troll arena at the top. Talk to Dad (level 101) to start the fight, then damage him until the fight ends automatically.",
          travel:
            "From the top of the climb keep heading north-east along the ridge; the arena is the fenced circle of sand at the plateau's summit with Dad standing in it.",
        },
        {
          text: "Exit the arena through the gate to the north.",
        },
        {
          text: "Run north through the rocky corridor past the Thrower trolls — use Protect from Missiles or just sprint with stamina.",
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
          text: "Inside the Troll Stronghold, follow the corridor north-east to the Troll General's chamber.",
        },
        {
          text: "Defeat the Troll General (level 113) using ranged/magic from a safespot behind the chamber pillar. Pick up the prison key from his body.",
        },
        {
          text: "Walk west then south and climb down to the jail level of the stronghold.",
        },
        {
          text: "At the cell block, pickpocket Twig and Berry (the two troll guards, level 71) to slip past them — each attempt has a chance to work. Kill them if pickpocketing keeps failing.",
        },
        {
          text: "Use the prison key on the cell doors and free both prisoners (Godric and Eadgar).",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Leave the stronghold — a games necklace to Burthorpe is by far the fastest exit, otherwise retrace the corridor and Death Plateau path south." },
        {
          text: "Talk to Dunstan the smith at his open-air anvil in north-east Burthorpe (east of the Imperial Guard soldier tent) to finish.",
          travel:
            "Games necklace to Burthorpe, then run to the north-east corner of the village — Dunstan is at the anvil just east of the soldier tent.",
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
