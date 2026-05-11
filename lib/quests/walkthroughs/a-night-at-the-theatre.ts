import type { QuestWalkthrough } from "../types";

export const aNightAtTheTheatre: QuestWalkthrough = {
  startPoint: "Talk to the Mysterious Stranger by the Theatre of Blood entrance in Ver Sinhaza, south-east of Meiyerditch.",
  itemsRequired: [
    "Ivandis flail or Blisterwood flail",
    "Crystal saw (or any saw)",
    "Ghostspeak amulet (or Morytania legs 2+)",
    "Any axe except a blessed axe",
  ],
  recommended: [
    "Combat 95+",
    "Stamina/energy potions",
    "Drakan's medallion",
    "Anti-venom or antipoison",
    "Druid pouch (filled)",
    "Fairy ring access",
    "High-end gear with poison/venom-immune item",
  ],
  enemies: [
    "Vyrewatch (level 105)",
    "Araxytes (level 96/146)",
    "Hespori (level 302)",
    "Theatre of Blood bosses: Maiden, Bloat, Nylocas Vasilias, Sotetseg, Xarpus, Verzik Vitur",
  ],
  sections: [
    {
      title: "Memories of a friend",
      steps: [
        { text: "Talk to the Mysterious Stranger by the Theatre of Blood entrance in Ver Sinhaza." },
        { text: "Go down the stairs to the north-east; kill a Vyrewatch for a key." },
        { text: "Unlock the gate, open the coffin, retrieve Ranis's head." },
        { text: "Return with the head and watch the cutscene." },
        { text: "Travel north of Darkmeyer to the spider cave." },
        { text: "Find an egg sac; search the skeleton; read the sticky note." },
        { text: "Talk to Daer Krand in the Sisterhood Sanctuary south of Slepe." },
        { text: "Get sulphuric acid from her and return to the cave." },
        { text: "Use the acid on the egg sac to retrieve strange spider eggs." },
        { text: "Return with the eggs to the Mysterious Stranger." },
      ],
    },
    {
      title: "In touch with nature",
      steps: [
        { text: "Travel to the Nature Grotto via fairy ring BIP with a ghostspeak amulet." },
        { text: "Talk to Filliman Tarlock at the Nature Grotto in Mort Myre Swamp." },
        { text: "Cross the stepping stone east to the small island." },
        { text: "Defeat Hespori (level 302) and chop for hespori bark." },
        { text: "Return with the bark." },
      ],
    },
    {
      title: "Theatre of Blood",
      steps: [
        {
          text: "Complete a full Theatre of Blood raid (entry mode is recommended for the quest).",
          notes: ["This is THE raid — six boss rooms in succession. Bring a team or use entry mode solo."],
        },
        { text: "Talk to the Mysterious Stranger by the Theatre of Blood entrance in Ver Sinhaza after the raid." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "4 antique lamps (20,000 XP each in Attack, Strength, Defence, Ranged, Magic, or Hitpoints, level 50+)",
    "Permanent access to Theatre of Blood (full raid)",
  ],
};
