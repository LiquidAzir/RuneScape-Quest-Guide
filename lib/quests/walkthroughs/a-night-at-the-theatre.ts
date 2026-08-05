import type { QuestWalkthrough } from "../types";

export const aNightAtTheTheatre: QuestWalkthrough = {
  startPoint:
    "Talk to the Mysterious Stranger by the Theatre of Blood entrance in Ver Sinhaza, the vampyre port south-east of Meiyerditch. Operate Drakan's medallion and pick Ver Sinhaza — it drops you on the quay right outside the theatre gates.",
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
        {
          text: "Talk to the Mysterious Stranger by the Theatre of Blood entrance in Ver Sinhaza.",
          travel:
            "Drakan's medallion → Ver Sinhaza puts you on the quay beside the theatre gates. Without it, run south-east out of Meiyerditch along the shore road.",
        },
        {
          text: "Go down the stairs north-east of the theatre gates into the crypt and kill a Vyrewatch for a key.",
          travel:
            "From the Mysterious Stranger walk north-east along the Ver Sinhaza waterfront to the stone staircase set into the ground, and climb down.",
        },
        { text: "Unlock the gate with the key, open the coffin, and retrieve Ranis's head." },
        { text: "Return up the stairs to the Mysterious Stranger with the head and watch the cutscene." },
        {
          text: "Travel to the spider cave in the rocky ground north of Darkmeyer.",
          travel:
            "Drakan's medallion → Darkmeyer (unlocked after Sins of the Father). Otherwise take the medallion to Meiyerditch and climb up into Darkmeyer. From the Darkmeyer city gate run north out into the crags — the cave mouth is on the north side of the wall.",
        },
        { text: "Find an egg sac inside the cave; search the skeleton beside it and read the sticky note." },
        {
          text: "Talk to Daer Krand in the Sisterhood Sanctuary beneath Slepe.",
          travel:
            "Slepe is on the far east coast of Morytania — take the boat from the Ver Sinhaza dock (Drakan's medallion → Ver Sinhaza first). The Sisterhood Sanctuary is entered from the ruins south of Slepe village, the same way you went during Sins of the Father.",
        },
        { text: "Get sulphuric acid from Daer Krand and return to the spider cave north of Darkmeyer." },
        { text: "Use the acid on the egg sac to retrieve strange spider eggs." },
        {
          text: "Return with the eggs to the Mysterious Stranger at the Theatre of Blood entrance in Ver Sinhaza.",
          travel: "Drakan's medallion → Ver Sinhaza.",
        },
      ],
    },
    {
      title: "In touch with nature",
      steps: [
        {
          text: "Talk to Filliman Tarlock at the Nature Grotto in Mort Myre Swamp with a ghostspeak amulet equipped (or Morytania legs 2+).",
          travel:
            "Fairy ring BIP lands you on the grotto's doorstep — enter the hollowed-out tree stump. No fairy ring: Kharyrll Teleport or fairy ring CKS to Canifis, then run south into Mort Myre and follow the swamp path south-west to the grotto stump.",
        },
        { text: "Cross the stepping stone east of the grotto to the small island." },
        { text: "Defeat Hespori (level 302) on the island and chop the remains for hespori bark." },
        { text: "Return over the stepping stone and hand the bark to Filliman." },
      ],
    },
    {
      title: "Theatre of Blood",
      steps: [
        {
          text: "Complete a full Theatre of Blood raid (entry mode is recommended for the quest).",
          travel:
            "Drakan's medallion → Ver Sinhaza, then walk through the theatre gates north of the quay and use the party board inside the lobby.",
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
