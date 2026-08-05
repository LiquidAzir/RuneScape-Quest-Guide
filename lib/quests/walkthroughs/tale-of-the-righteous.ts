import type { QuestWalkthrough } from "../types";

export const taleOfTheRighteous: QuestWalkthrough = {
  startPoint:
    "Talk to Phileas Rimor in his house west of The Cloak and Stagger tavern in Shayzien. Get there with Xeric's talisman to Xeric's Look-out then run north-west, fairy ring DJR, or the Lovakengj minecart network to the Shayzien stop.",
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
        {
          text: "Talk to Phileas Rimor in his house west of The Cloak and Stagger tavern in Shayzien and agree to help.",
          travel:
            "Xeric's talisman to Xeric's Look-out (south-east of Shayzien) then run north-west, or fairy ring DJR right by the town. No talisman or rings: take the Lovakengj minecart network to the Shayzien stop, or boat from Port Sarim to Port Piscarilius and run west across Kourend.",
        },
      ],
    },
    {
      title: "Tower of Magic prison",
      steps: [
        {
          text: "Talk to Archeio in the Arceuus Library to reach the Historical Archive.",
          travel:
            "Arceuus Library Teleport (Arceuus spellbook, 6 Magic) drops you at the door. Otherwise fairy ring CIS beside the library, or the Lovakengj minecart network to the Arceuus stop and run north-west.",
        },
        { text: "Talk to Pagida in the Historical Archive to be teleported into the Tower of Magic prison." },
        { text: "Push the strange device west; attack with magic from the north." },
        { text: "Push the device east; attack with melee from the south, then ranged from the south." },
        { text: "Investigate the skeleton in the northern cell." },
      ],
    },
    {
      title: "War tent and the mountain",
      steps: [
        {
          text: "Return to Phileas Rimor at his house west of The Cloak and Stagger tavern in Shayzien.",
          travel: "Fairy ring DJR, or Xeric's talisman to Xeric's Look-out and run north-west into Shayzien.",
        },
        {
          text: "Talk to Lord Shiro Shayzien upstairs in the War Tent at the Shayzien Encampment.",
          travel: "From Phileas's house run north-west out of Shayzien to the military encampment; the War Tent is in its south-west corner, and Shiro is up the ladder inside.",
        },
        {
          text: "Travel to the summit of Mount Quidamortem.",
          travel:
            "Take the Lovakengj minecart network west to Mount Quidamortem (20gp, free after The Forsaken Tower). Alternatives: Xeric's talisman to Xeric's Honour or fairy ring BLS if you have them unlocked. On foot, run west from Shayzien through the Kebos Lowlands and up the mountain path.",
        },
      ],
    },
    {
      title: "Cave exploration",
      steps: [
        {
          text: "Talk to Historian Duffy at the Mount Quidamortem summit, by the water marker on the minimap.",
          travel: "He stands near the Chambers of Xeric entrance at the top of the mountain, just north of where the minecart drops you.",
        },
        {
          text: "Use a rope on the crevice on the western mountainside to descend into Quidamortem Cave.",
          travel: "From Duffy, follow the ledge west around the summit — the crevice is on the mountain's west face.",
        },
        { text: "Mine the rocks and push the boulder out of the way." },
        { text: "Defeat the Corrupt Lizardman (level 46) at the magic gate." },
        { text: "Inspect the Unstable Altar deeper in the cave." },
        { text: "Talk to Gnosi by the unstable altar, then climb back out and report to Duffy." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Lord Shiro Shayzien in the War Tent at the Shayzien Encampment.",
          travel: "Minecart back east from Mount Quidamortem to Shayzien (or fairy ring DJR), then run north-west to the encampment and up the War Tent ladder.",
        },
        { text: "Visit Phileas Rimor's house west of The Cloak and Stagger tavern." },
        { text: "Talk to Lord Shiro Shayzien in the War Tent one final time." },
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
