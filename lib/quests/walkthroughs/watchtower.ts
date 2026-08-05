import type { QuestWalkthrough } from "../types";

export const watchtower: QuestWalkthrough = {
  startPoint:
    "Talk to the Watchtower Wizard on the top floor of the Watchtower, the tall stone tower north-west of Yanille. Get to Yanille by charter ship to Port Khazard and a run south, or fairy ring CIR (Jiggig) and a run east; leave Yanille through the gate in the north-west of the wall, follow the path to the tower and climb the trellis on its side to reach the top.",
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
          text: "Travel to the Watchtower north-west of Yanille and climb the trellis on the side of the tower to reach the top floor.",
          travel:
            "Get to Yanille first: charter ship to Port Khazard then run south down the road, or fairy ring CIR (Jiggig) then run east. Ardougne Teleport and a long run south also works. From Yanille leave through the gate in the north-west of the city wall and follow the path north-west — the Watchtower is the lone stone tower on the hill. Click the trellis on its side to climb to the top.",
        },
        {
          text: "Talk to the Watchtower Wizard on the top floor (chat options 1-1-1) to start.",
        },
        {
          text: "Climb back down and search the bush north-west of the tower base for fingernails (its flowers are slightly redder than the bushes beside it).",
        },
        {
          text: "If you do not have bat bones, kill a Giant bat (level 27) in the Yanille dungeon.",
          travel:
            "Run back south-east into Yanille. The dungeon trapdoor is inside the small house just south-east of the Yanille bank — climb down and the giant bats are in the first chamber.",
        },
        {
          text: "Climb the Watchtower trellis again and talk to the Watchtower Wizard (chat options 1-1).",
        },
      ],
    },
    {
      title: "First crystal — Toban / Og / Grew",
      steps: [
        {
          text: "Travel into the ogre hills west of the Watchtower and talk to Og — he gives you Toban's key.",
          travel:
            "From the base of the Watchtower head west/north-west into the rocky ogre country between the tower and Gu'Tanoth. Og waits by the rocks near the bent tree that overhangs the water.",
        },
        {
          text: "Use a rope on the bent tree branch beside Og to swing across to the island, then talk to Grew the ogre.",
        },
        {
          text: "Swing back over the rope and travel south to the cave tunnel just outside the south wall of Gu'Tanoth.",
          travel:
            "From the rope swing run south — Gu'Tanoth is the walled ogre city on the ridge. Follow its wall round to the south side; the tunnel mouth is in the rocks a short way beyond it.",
        },
        {
          text: "Inside the tunnel, defeat Gorad (level 68) and take Gorad's tooth from his body — safespot him from behind the boulder at the cave bend.",
        },
        {
          text: "Return north and rope-swing back to Toban's island. Talk to Toban holding dragon bones + Gorad's tooth — he gives you Relic part 3.",
        },
        {
          text: "Take Toban's gold from the chest beside him.",
        },
        {
          text: "Pick jangerberries from the bush at the south end of the island (keep at least 4 — you need them later).",
        },
        {
          text: "Swing back and return to Og, trading Toban's gold for Relic parts 1 and 2.",
        },
        {
          text: "Climb the Watchtower trellis and give the relic parts to the Watchtower Wizard — he assembles the Ogre relic.",
          travel: "Run back east/south-east from the ogre hills to the Watchtower and climb the trellis.",
        },
      ],
    },
    {
      title: "Skavid caves and second crystal",
      steps: [
        {
          text: "Travel to Gu'Tanoth carrying the Ogre relic — the relic lets you walk through the gate.",
          travel:
            "From the Watchtower run west then south-west across the ogre hills to the walled city on the ridge, or from Yanille leave by the west side of town and follow the road west across the bridge. Show the relic at the gate to be let in.",
        },
        {
          text: "Inside Gu'Tanoth, walk to the market stall on the upper level and steal a rock cake (needed as a bribe later).",
        },
        {
          text: "Climb the battlement on the city's west wall and talk to the guard there.",
        },
        {
          text: "Walk south to the bridge guard and pay 20gp to cross the bridge into the western Gu'Tanoth district.",
        },
        {
          text: "Find the City guard at the gate beyond the bridge and give him a death rune to obtain the skavid map.",
        },
        {
          text: "Equip a light source and walk north of that gate into the Skavid caves entrance.",
        },
        {
          text: "Inside the caves, talk to the scared skavid near the entrance — he teaches you the phrases needed to talk to the other skavids.",
        },
        {
          text: "Find the 4 regular skavids in the four side caves and answer each with the correct phrase from the map (each cave needs a different one).",
        },
        {
          text: "Talk to the Mad Skavid in the deepest northern cave for the second crystal.",
        },
        {
          text: "Pick 2 cave nightshades from the floor inside the Skavid caves (the small dark-purple plants).",
        },
        {
          text: "Walk to the eastern gate of Gu'Tanoth and give a gold bar to the guard there.",
        },
        {
          text: "Use a cave nightshade on the Enclave guard at that gate to knock him out, then enter the Ogre Enclave cave.",
        },
      ],
    },
    {
      title: "Brew the magic ogre potion",
      steps: [
        {
          text: "Climb the Watchtower trellis and talk to the Wizard.",
          travel: "Leave Gu'Tanoth by the east gate and run north-east across the hills back to the Watchtower.",
        },
        {
          text: "Add a guam leaf to a vial of water to make a guam potion (unf).",
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
          text: "Bank for the fight: anti-dragon shield, combat gear and food.",
        },
        {
          text: "Use the second cave nightshade on the Enclave guard at the eastern Gu'Tanoth gate to re-enter the Ogre Enclave cave.",
          travel: "Run south-west from the Watchtower back to Gu'Tanoth and round to the gate on its eastern side.",
        },
        {
          text: "Inside the Enclave, use the magic ogre potion on all 6 ogre shamans to weaken them.",
        },
        {
          text: "Mine the Rock of Dalgroth in the centre of the chamber for the fourth crystal.",
        },
        {
          text: "Climb the Watchtower trellis and return to the Wizard with all 4 crystals.",
          travel: "Leave the Enclave, exit Gu'Tanoth by the east gate and run north-east to the Watchtower.",
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
