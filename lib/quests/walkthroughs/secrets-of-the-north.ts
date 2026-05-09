import type { QuestWalkthrough } from "../types";

export const secretsOfTheNorth: QuestWalkthrough = {
  startPoint: "Talk to a guard at the Carnillean Mansion in south-west East Ardougne.",
  itemsRequired: ["100 coins", "Lockpick", "Tinderbox (obtainable in-quest)"],
  recommended: [
    "Combat 85+",
    "Antipoison",
    "Ardougne cloak",
    "Icy basalt for Weiss teleport",
    "Sharks/anglers + prayer pots",
  ],
  enemies: [
    "Evelot (level 148)",
    "Assassin (level 262)",
    "Strange Creature (level 368) — uses ranged + magic",
  ],
  sections: [
    {
      title: "A death in the family",
      steps: [
        { text: "Talk to the guard at Carnillean Mansion." },
        { text: "Climb upstairs and talk to the guard there." },
        { text: "Inspect Ceril's corpse and the broken window." },
        { text: "Knock on the false wall, climb the ladder, inspect the chest." },
        { text: "Report findings to the guard." },
      ],
    },
    {
      title: "On the trail of Evelot",
      steps: [
        { text: "Visit the Fight Arena bar and talk to the Khazard Barman about Evelot." },
        { text: "Track Evelot through 6 locations (barrels, boulders, bushes, stump)." },
        { text: "Defeat Evelot (level 148) in combat." },
      ],
    },
    {
      title: "The Mysterious Benefactor",
      steps: [
        { text: "Access the Hazeel Cult hideout via the Ardougne Sewers." },
        { text: "Talk to Alomone or Clivet, then Hazeel." },
        { text: "Return to Carnillean Mansion; talk to the guard and Claus." },
        { text: "Find the button on the cooking shelves to open the secret passage." },
        { text: "Enter, pick the lock on the chest." },
        { text: "Retrieve the dusty scroll and deliver it to Hazeel." },
      ],
    },
    {
      title: "Weiss expedition",
      steps: [
        { text: "Travel to Weiss and talk to Big Fish + Snowflake." },
        { text: "Enter the southern cave and defeat the Assassin (level 262)." },
        { text: "Search the barrel for a lever handle." },
        { text: "Use code BLOOD to unlock the gate." },
        { text: "Open the chest with code 7402." },
        { text: "Light the braziers in order: NW → SE → NE → SW." },
        { text: "Retrieve the jewel shard and the settlements note." },
        { text: "Press arrows: LEFT → UP → LEFT → DOWN to unlock the northern gate." },
        { text: "Use the handle on the lever; retrieve the second jewel shard." },
        { text: "Combine jewel shards; use them on the icy chest for the icy key." },
      ],
    },
    {
      title: "Strange Creature",
      steps: [
        { text: "Equip ranged + magic gear." },
        { text: "Enter the crevice and defeat the Strange Creature (level 368)." },
        { text: "Accept Hazeel's teleport." },
        { text: "Return to the guard at Carnillean Mansion." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "60,000 Agility experience",
    "50,000 Thieving experience",
    "40,000 Hunter experience",
    "Ability to mine ancient essence in Ghorrock Dungeon",
    "Access to the Phantom Muspah boss",
  ],
};
