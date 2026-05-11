import type { QuestWalkthrough } from "../types";

export const monkeyMadnessI: QuestWalkthrough = {
  startPoint:
    "Talk to King Narnode Shareen at the base of the Grand Tree (Tree Gnome Stronghold — north-west of Ardougne; spirit tree teleport from Tree Gnome Village, gnome glider, or run from Ardougne north-west). Requires The Grand Tree + Tree Gnome Village.",
  itemsRequired: [
    "Gold bar",
    "Ball of wool",
    "Monkey bones (any monkey on Karamja or Ape Atoll drops them)",
    "5 bananas (pick from banana trees on Karamja)",
    "Lockpick",
  ],
  recommended: [
    "Combat 65+",
    "43+ Prayer for Protect from Magic vs. Jungle Demon",
    "Antipoison/Antidote++",
    "Prayer potions",
    "Sharks or other high-heal food",
    "Stamina potions",
    "Ring of dueling for fast banking trips",
    "200,000 coins to skip the slide puzzle (optional)",
  ],
  enemies: ["Jungle Demon (level 195) — boss in the temple inside the volcano on Ape Atoll; weak to Protect from Magic"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Grand Tree (Tree Gnome Stronghold north-west of Ardougne) and talk to King Narnode Shareen at the base of the trunk. He gives you the gnome royal seal.",
        },
        {
          text: "Climb to the top floor of the Grand Tree and use the gnome glider to fly to Gandius (Karamja shipyard, south-west Karamja).",
        },
        {
          text: "Kill any monkey near the Karamja shipyard for monkey bones if you don't have any (small level-3 monkeys roam outside the shipyard fence).",
        },
        {
          text: "Walk into the shipyard and talk to G.L.O. Caranock (the well-dressed merchant inside the shipyard office).",
        },
        {
          text: "Return to King Narnode at the Grand Tree (gnome glider back to Ta Quir Priw).",
        },
        {
          text: "Climb 2 floors DOWN below the Grand Tree (down the central trapdoor twice) to the Grand Tree bar. Talk to Daero behind the counter.",
        },
        {
          text: "Daero takes you to a hidden hangar; solve the sliding puzzle on the workbench to assemble the gnome plane (or pay 200k coins to skip).",
        },
        {
          text: "Watch the cutscene; Waydar the gnome flies you to Crash Island.",
        },
        {
          text: "On Crash Island, walk south to the dock and talk to Lumdo to sail to Ape Atoll.",
        },
      ],
    },
    {
      title: "Get arrested and meet Garkor",
      steps: [
        {
          text: "Walk into the Ape Atoll village (north of the dock) — you're arrested and jailed automatically.",
        },
        {
          text: "Inside the cell, pick the lock on the door to escape; sneak past the patrolling monkey guards (they wander predictable patterns).",
        },
        {
          text: "Walk south through the jungle to find Garkor (the 10th Squad leader) hiding in a small clearing in the southern jungle.",
        },
        {
          text: "Talk to Garkor and listen to the briefing.",
        },
      ],
    },
    {
      title: "Get the M'amulet mould and dentures",
      steps: [
        {
          text: "Walk north to the U-shaped Marimbo Temple (the large monkey temple in the centre of Ape Atoll village).",
        },
        {
          text: "Inside the temple, search the stacked crates on the light-brown wooden floor for monkey dentures.",
        },
        {
          text: "Search the south-east crate to fall through into a cave below the temple.",
        },
        {
          text: "In the cave below, search the north-west crates for the M'amulet mould.",
        },
        {
          text: "Teleport away (Lumbridge home teleport, etc.) and bank to resupply with combat gear and food.",
        },
      ],
    },
    {
      title: "Make the M'speak amulet",
      steps: [
        {
          text: "Return to Ape Atoll (via Grand Tree → Daero → Waydar → Lumdo) and enter the Ape Atoll Dungeon (rope down the hole at the south-east edge of the village).",
        },
        {
          text: "Run through the dungeon using Protect from Melee prayer (skeletons are aggressive).",
        },
        {
          text: "At the end of the dungeon, talk to Zooknock and use the monkey dentures, M'amulet mould, and a gold bar on him.",
        },
        {
          text: "He gives you an enchanted gold bar.",
        },
        {
          text: "Teleport out and bank again.",
        },
        {
          text: "Return to the Temple of Marimbo on Ape Atoll.",
        },
        {
          text: "Use the enchanted gold bar on the wall of flames inside the temple to forge an unstrung amulet.",
        },
        {
          text: "Use a ball of wool on the resulting amulet to make the M'speak amulet.",
        },
      ],
    },
    {
      title: "Get a karamjan greegree",
      steps: [
        {
          text: "Walk to the monkey child's house in the south-east of Ape Atoll village (small thatched hut), dodging the Monkey's Aunt patrolling outside.",
        },
        {
          text: "Equip the M'speak amulet and talk to the monkey child inside.",
        },
        {
          text: "Pick 5 bananas from the banana trees in his garden behind the hut.",
        },
        {
          text: "Give the 5 bananas to the monkey child — he gives you a monkey talisman.",
        },
        {
          text: "Return to Zooknock at the end of the Ape Atoll Dungeon with the talisman + monkey bones.",
        },
        {
          text: "Use both on Zooknock — he carves the karamjan monkey greegree.",
        },
      ],
    },
    {
      title: "Recruit Awowogei and defeat the Jungle Demon",
      steps: [
        {
          text: "Travel to Ardougne Zoo (south-west East Ardougne). Equip the karamjan greegree to disguise as a monkey, then capture a small monkey using the M'speak amulet.",
        },
        {
          text: "Travel back to Ape Atoll via the Grand Tree → Daero → Waydar → Lumdo route.",
        },
        {
          text: "Equip the greegree and M'speak amulet to walk freely past the guards into the Ape Atoll palace.",
        },
        {
          text: "Talk to Garkor in the southern jungle clearing, then the Elder Guard outside the palace, then Kruk near the palace gates, then finally King Awowogei inside the palace throne room. He gives you the 10th Squad Sigil.",
        },
        {
          text: "Equip the sigil; descend into the temple under the Marimbo crater. Fight the Jungle Demon (level 195) with Protect from Magic.",
        },
        {
          text: "Return to King Narnode at the base of the Grand Tree to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "10,000 coins + 3 diamonds",
    "Choose 2 combat skills: 35,000 XP each in your two picks (Attack/Defence OR Strength/Hitpoints), and 20,000 each in the other two",
    "Ability to wield the Dragon scimitar — best 1H melee weapon for most slayer tasks",
    "Access to Ape Atoll and the karamja monkey greegree (can be carved into more greegrees later)",
  ],
};
