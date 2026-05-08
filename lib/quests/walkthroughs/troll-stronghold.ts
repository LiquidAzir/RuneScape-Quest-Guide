import type { QuestWalkthrough } from "../types";

export const trollStronghold: QuestWalkthrough = {
  startPoint: "Talk to Denulth in the Burthorpe soldier tent.",
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
        { text: "Talk to Denulth in Burthorpe and accept the rescue mission for Godric." },
        { text: "Travel north along the Death Plateau path (you must have done Death Plateau)." },
        { text: "Buy climbing boots from Tenzing if you don't have any." },
        { text: "Enter the troll arena and damage Dad until the fight ends automatically (his head pops off)." },
        { text: "Exit through the gate to the north." },
        {
          text: "Run through the cave past the Thrower trolls — use Protect from Missiles or sprint past.",
        },
        { text: "Enter the Troll Stronghold cave entrance." },
      ],
    },
    {
      title: "Inside the stronghold",
      steps: [
        { text: "Follow the path to the Troll General." },
        { text: "Defeat the Troll General with ranged/magic from a safespot. Pick up the prison key." },
        { text: "Walk to the jail area." },
        { text: "Pickpocket Twig and Berry to bypass them, or kill them if pickpocketing fails." },
        { text: "Free both prisoners from their cells." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Teleport out (Games necklace to Burthorpe is fastest), or follow the prisoners through the secret exit." },
        { text: "Travel to Burthorpe and speak with Dunstan." },
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
