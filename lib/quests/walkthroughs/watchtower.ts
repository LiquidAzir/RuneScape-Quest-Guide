import type { QuestWalkthrough } from "../types";

export const watchtower: QuestWalkthrough = {
  startPoint:
    "Talk to the Watchtower Wizard on the top floor of the Watchtower — the tall stone tower a short walk north of Yanille (head out the north gate of Yanille and follow the path; climb the trellis on the side of the tower to reach the top floor where the wizard stands).",
  itemsRequired: [
    "20 coins (paid to the Gu'Tanoth bridge guard)",
    "Gold bar (bribe for the Gu'Tanoth gate guard)",
    "Tinderbox",
    "Death rune (paid to the Gu'Tanoth City guard for the skavid map)",
    "Pickaxe (any — to mine the Rock of Dalgroth)",
    "Dragon bones (delivered to Toban for the relic piece)",
    "2 ropes (one to swing on the tree branch, spare)",
    "Guam potion (unfinished) — or guam leaf + vial of water to brew one",
    "Light source (lit candle, lantern, or bullseye lantern for the Skavid caves)",
    "Pestle and mortar",
    "Bat bones (kill a Giant bat in the Yanille dungeon)",
    "Jangerberries (picked from Toban's island in-quest)",
  ],
  recommended: [
    "Combat 35+",
    "Some food and a weapon (Gorad and ogres are levelled enemies)",
    "Stamina/energy potions (Watchtower-Yanille-Gu'Tanoth back-and-forth)",
    "Anti-dragon shield + antifire (helpful when entering Toban's chest area through the dragon-tooth path)",
    "43 Prayer for Protect from Melee in the Skavid/Enclave caves",
  ],
  enemies: [
    "Gorad (level 68) — in the Toban / Og tunnel south of Gu'Tanoth; safespottable from behind boulders",
    "Optional: Giant bat (level 27) in Yanille dungeon for bat bones",
    "Ogre shamans (level 65) — found in the Ogre Enclave under Gu'Tanoth",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Travel to the Watchtower a short walk north of Yanille. Climb the trellis on the side of the tower to reach the top floor.",
        },
        {
          text: "Talk to the Watchtower Wizard on the top floor (chat options 1•1•1) to start.",
        },
        {
          text: "Climb back down and search the bush north-west of the tower base for fingernails (the bush has slightly redder flowers than its neighbours).",
        },
        {
          text: "If you don't have bat bones, enter the Yanille dungeon (trapdoor inside the small house in central Yanille just south-east of the bank) and kill a Giant bat (level 27) for bones.",
        },
        {
          text: "Climb the trellis again and talk to the Watchtower Wizard (chat options 1•1).",
        },
      ],
    },
    {
      title: "First crystal — Toban / Og / Grew",
      steps: [
        {
          text: "Walk north-west of Yanille (north of the Watchtower) into the Feldip-area hills to find Og the ogre. Talk to him — he gives you Toban's key.",
        },
        {
          text: "Use a rope on the bent tree branch nearby to swing across to the small island. On the island, talk to Grew the ogre.",
        },
        {
          text: "Travel back across the rope, then south to the cave tunnel south of Gu'Tanoth (Gu'Tanoth is the ogre city west of Yanille; the tunnel entrance is just south of the city's south wall).",
        },
        {
          text: "Inside the tunnel, defeat Gorad (level 68) and take Gorad's tooth from his body — safespot him from behind the boulder at the cave bend.",
        },
        {
          text: "Travel back to Toban's island west of Gu'Tanoth (rope swing again). Talk to Toban with dragon bones + Gorad's tooth — he gives you Relic part 3.",
        },
        {
          text: "Take Toban's gold from the chest beside him.",
        },
        {
          text: "Pick jangerberries from the bush at the south end of the island (keep at least 4 — you'll need them later).",
        },
        {
          text: "Return to Og north-west of Yanille and trade Toban's gold for Relic parts 1 and 2.",
        },
        {
          text: "Climb the Watchtower trellis and give the relic parts to the Watchtower Wizard — he assembles the Ogre relic.",
        },
      ],
    },
    {
      title: "Skavid caves and second crystal",
      steps: [
        {
          text: "Travel to Gu'Tanoth (west of Yanille) carrying the Ogre relic — the relic lets you walk through the gate.",
        },
        {
          text: "Inside Gu'Tanoth, walk to the market stall on the upper level and steal a rock cake (used later as bribe).",
        },
        {
          text: "Climb the battlement on the city's west wall and talk to the guard there.",
        },
        {
          text: "Walk south to the bridge guard and pay 20gp to cross the bridge into the western Gu'Tanoth district.",
        },
        {
          text: "Find the City guard at the gate beyond the bridge; give him a death rune to obtain the skavid map.",
        },
        {
          text: "Equip a light source. Walk north of the gate into the Skavid caves entrance.",
        },
        {
          text: "Inside the caves, talk to the scared skavid near the entrance — he tells you the phrases needed to talk to other skavids.",
        },
        {
          text: "Find the 4 regular skavids in the four side caves and respond to each using the correct phrases from the map (each cave needs a different phrase).",
        },
        {
          text: "Talk to the Mad Skavid in the deepest northern cave for the second crystal.",
        },
        {
          text: "Pick 2 cave nightshades from the floor inside the Skavid caves (small dark-purple plants).",
        },
        {
          text: "Walk to the eastern gate of Gu'Tanoth and give a gold bar to the guard at the gate.",
        },
        {
          text: "Use a cave nightshade on the Enclave guard at the gate to knock him out, then enter the Ogre Enclave cave.",
        },
      ],
    },
    {
      title: "Brew the magic ogre potion",
      steps: [
        {
          text: "Climb the Watchtower trellis and talk to the Wizard.",
        },
        {
          text: "Add a guam leaf to a vial of water to make guam potion (unf).",
        },
        {
          text: "Add jangerberries to the guam potion.",
        },
        {
          text: "Use a pestle and mortar on bat bones, then add the ground bones to the potion to finish the magic ogre potion.",
        },
        {
          text: "Talk to the Watchtower Wizard with the completed potion.",
        },
      ],
    },
    {
      title: "Final crystals and finish",
      steps: [
        {
          text: "Bring anti-dragon shield + combat gear + food.",
        },
        {
          text: "Use the second cave nightshade on the Enclave guard at the eastern Gu'Tanoth gate to re-enter the Ogre Enclave cave.",
        },
        {
          text: "Inside the Enclave, use the magic ogre potion on all 6 ogre shamans to weaken them.",
        },
        {
          text: "Mine the Rock of Dalgroth in the centre of the chamber for the fourth crystal.",
        },
        {
          text: "Climb the Watchtower trellis and return to the Wizard with all 4 crystals.",
        },
        {
          text: "Place the crystals on the correct pillars in the top room: NE pillar = Magenta crystal, SE = Grey, SW = Yellow, NW = Cyan.",
        },
        {
          text: "Pull the lever on the west wall of the top room to power the tower.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "4 Quest Points",
    "15,250 Magic experience",
    "5,000 coins",
    "Watchtower Teleport spell unlock (Magic 58 — teleports you to the top of the Watchtower)",
    "Friend of the Ogres status (free passage through Gu'Tanoth and the Ogre Enclave)",
  ],
};
