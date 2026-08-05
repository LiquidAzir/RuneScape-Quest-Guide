import type { QuestWalkthrough } from "../types";

export const secretsOfTheNorth: QuestWalkthrough = {
  startPoint:
    "Talk to the guard standing outside Carnillean Mansion in East Ardougne (the large walled mansion a short run south of the central market square — the house used during Hazeel Cult). Ardougne Teleport or an Ardougne cloak gets you into the city; run to the mansion's front door.",
  itemsRequired: [
    "100 coins (small bribes)",
    "Lockpick",
    "Tinderbox (a tinderbox spawns inside the Weiss cave if you don't have one)",
  ],
  recommended: [
    "Combat 85+ (final boss is level 368)",
    "Antipoison",
    "Ardougne cloak (for fast Ardougne teleport)",
    "Icy basalt for Weiss teleport (made by combining basalt with snowflakes after Making Friends with My Arm)",
    "Sharks/anglers + prayer potions",
    "Ranged + magic gear (boss switches styles)",
  ],
  enemies: [
    "Evelot (level 148) — final fight on the trail",
    "Assassin (level 262) — Weiss cave fight",
    "Strange Creature (level 368) — final boss; uses ranged + magic, alternate prayers",
  ],
  sections: [
    {
      title: "A death in the family",
      steps: [
        {
          text: "Travel to Carnillean Mansion in East Ardougne and talk to the guard standing at the front door.",
          travel:
            "Ardougne Teleport (51 Magic) or an Ardougne teleport tab drops you in the market square; run south to the large walled mansion and up to its front door. No teleport: skills necklace to the Fishing Guild and run south into the city, or charter ship to Port Khazard and run north.",
        },
        {
          text: "Climb upstairs in the mansion and talk to the second guard standing by the master bedroom.",
        },
        {
          text: "Inspect Ceril Carnillean's corpse on the bed and the broken window in the bedroom.",
        },
        {
          text: "Knock on the false wall in the bedroom (the panel that sounds hollow), then climb the ladder it reveals to the attic. Inspect the chest in the attic.",
        },
        {
          text: "Report your findings to the guard at the front door of the mansion.",
        },
      ],
    },
    {
      title: "On the trail of Evelot",
      steps: [
        {
          text: "Talk to the Khazard Barman about Evelot in the bar at the Fight Arena, south of Ardougne.",
          travel:
            "From East Ardougne run south out of the city past the farm, then follow the road south-west toward Port Khazard — the Fight Arena is on the way, and the Khazard bar is the small building beside the arena gates. Alternative: charter ship to Port Khazard and run north up the road.",
        },
        {
          text: "Track Evelot through 6 sequential locations across Kandarin (the trail leads through barrels, boulders, bushes, and a tree stump — each clue points to the next; quest journal updates as you go).",
        },
        {
          text: "At the final tracking location, defeat Evelot (level 148) in combat.",
        },
      ],
    },
    {
      title: "The Mysterious Benefactor",
      steps: [
        {
          text: "Return to East Ardougne and make your way down to the Hazeel Cult cave hideout beneath the city.",
          travel:
            "Ardougne Teleport back to the market square. The cult's underground hideout sits beneath the Carnillean mansion area — follow the same entrance you used during Hazeel Cult and head to the cult chamber.",
        },
        {
          text: "Talk to Alomone or Clivet inside the Hazeel Cult cave, then to Hazeel himself.",
        },
        {
          text: "Return to Carnillean Mansion in East Ardougne and talk to the guard outside, then Claus the chef inside the mansion's kitchen.",
        },
        {
          text: "Search the cooking shelves in the kitchen for the hidden button. Press it to open the secret passage behind the wall.",
        },
        {
          text: "Enter the passage and pick the lock on the chest at the back.",
        },
        {
          text: "Retrieve the dusty scroll from the chest and deliver it to Hazeel in the cave under the mansion.",
        },
      ],
    },
    {
      title: "Weiss expedition",
      steps: [
        {
          text: "Travel to Weiss in the far north of Trollheim and talk to Big Fish (the dwarven trader) and Snowflake in the centre of the village.",
          travel:
            "Icy basalt (basalt + snowflakes, unlocked by Making Friends with My Arm) teleports straight into Weiss. Otherwise cast Trollheim Teleport (61 Magic) and take the mountain path north past Trollweiss mountain — bring stamina potions, it is a long climb.",
        },
        {
          text: "Walk to the cave entrance on the south side of Weiss village. Enter and defeat the Assassin (level 262) waiting inside.",
        },
        {
          text: "Search the wooden barrel inside the cave for a lever handle.",
        },
        {
          text: "Walk to the locked gate inside the cave; spell out 'BLOOD' on the rune-letter dial to unlock it.",
        },
        {
          text: "Open the chest beyond the gate — input combination 7402 on the chest's number dial.",
        },
        {
          text: "Light the four braziers in the brazier room in this order: NW → SE → NE → SW.",
        },
        {
          text: "Retrieve the first jewel shard and the settlements note from the brazier room.",
        },
        {
          text: "At the next locked gate (north end of cave), press the directional arrow buttons in this order: LEFT → UP → LEFT → DOWN.",
        },
        {
          text: "Use the lever handle on the broken lever past the northern gate; pull it to retrieve the second jewel shard.",
        },
        {
          text: "Combine the two jewel shards. Use the combined jewel on the icy chest in the deepest chamber to receive the icy key.",
        },
      ],
    },
    {
      title: "Strange Creature",
      steps: [
        {
          text: "Equip ranged + magic gear (and Slayer helmet if available — boss switches styles).",
        },
        {
          text: "Use the icy key on the crevice at the back of the cave; enter and defeat the Strange Creature (Phantom Muspah, level 368). Pray Magic when it casts and Missiles when it shoots.",
        },
        {
          text: "After the fight, accept Hazeel's teleport that returns you to Ardougne.",
        },
        {
          text: "Talk to the guard outside Carnillean Mansion in East Ardougne to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "60,000 Agility experience",
    "50,000 Thieving experience",
    "40,000 Hunter experience",
    "Ability to mine ancient essence in Ghorrock Dungeon (north of Trollheim, used for Ancient Magicks)",
    "Access to the Phantom Muspah boss (drops Venator shard for the Venator bow)",
  ],
};
