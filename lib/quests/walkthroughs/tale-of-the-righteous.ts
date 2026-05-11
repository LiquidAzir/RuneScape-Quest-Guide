import type { QuestWalkthrough } from "../types";

export const taleOfTheRighteous: QuestWalkthrough = {
  startPoint: "Talk to Phileas Rimor at his house west of The Cloak and Stagger tavern in Shayzien.",
  itemsRequired: [
    "Pickaxe",
    "Ranged weapon + ammunition",
    "Magic runes for 2-3 combat spells",
    "Melee weapon",
    "Rope",
  ],
  recommended: [
    "Combat 20+",
    "Stamina potion + weight-reducing clothing",
    "Antipoison or tier-5 Shayzien armour",
    "Some food",
    "20 coins for minecart (or completed The Forsaken Tower)",
    "Arceuus Library Teleport",
  ],
  enemies: ["Corrupt Lizardman (level 46)"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Travel to Phileas Rimor's house in Shayzien." },
        { text: "Talk to Phileas Rimor in his Shayzien house west of The Cloak and Stagger tavern and agree to help." },
      ],
    },
    {
      title: "Tower of Magic prison",
      steps: [
        { text: "Travel to the Arceuus Library." },
        { text: "Talk to Archeio then Pagida." },
        { text: "Get teleported to the Tower of Magic prison." },
        { text: "Push the strange device west; attack with magic from the north." },
        { text: "Push the device east; attack with melee from the south, then ranged from the south." },
        { text: "Investigate the skeleton in the northern cell." },
      ],
    },
    {
      title: "War tent and the mountain",
      steps: [
        { text: "Return to Phileas Rimor at his house west of The Cloak and Stagger tavern in Shayzien." },
        { text: "Talk to Lord Shiro Shayzien at the War Tent." },
        { text: "Travel to the summit of Mount Quidamortem." },
      ],
    },
    {
      title: "Cave exploration",
      steps: [
        { text: "Talk to Historian Duffy." },
        { text: "Use a rope on the western crevice to descend." },
        { text: "Mine and push the boulder." },
        { text: "Defeat the Corrupt Lizardman (level 46) at the magic gate." },
        { text: "Inspect the Unstable Altar." },
        { text: "Return and talk to Duffy and Gnosi." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        { text: "Return to Lord Shiro Shayzien at the War Tent." },
        { text: "Visit Phileas's house." },
        { text: "Talk to Lord Shiro one final time." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "8,000 coins",
    "'History and Hearsay' page added to Kharedst's memoirs",
    "Shayzien graceful outfit recolour",
    "3 Xerician fabric",
  ],
};
