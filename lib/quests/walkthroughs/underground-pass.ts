import type { QuestWalkthrough } from "../types";

export const undergroundPass: QuestWalkthrough = {
  startPoint:
    "Talk to King Lathas on the first floor of Ardougne Castle (climb the stairs in the centre of the castle in East Ardougne).",
  itemsRequired: [
    "2 Ropes",
    "Bow",
    "1-5 metal-tipped arrows (NOT poisoned — poisoned arrows will not light)",
    "Spade",
    "Bucket (a spawn exists in-quest in the dwarf camp)",
    "Tinderbox (a spawn exists in-quest in the dwarf camp)",
  ],
  recommended: [
    "Combat 60+",
    "50+ Agility (essential for shortcuts in the pass)",
    "50+ Thieving for the disarm-trap shortcut at the second cave section",
    "43+ Prayer for Protect from Melee (paladins + Iban disciples)",
    "Lots of food (sharks) and a few summer pies (Agility boost helps the rope/grid section)",
    "West Ardougne teleport tablet or Ardougne cloak for fast trips back",
    "Agility potions",
  ],
  enemies: [
    "Doomion / Othainian / Holthion (level 91 demons) — west of the witch's house",
    "3 Paladins (level 62) — past the slave area",
    "Kalrag (level 89 spider) — in the spider pit east of the witch's house",
    "Iban (final boss — defeated by quest mechanic, not melee)",
  ],
  sections: [
    {
      title: "Cross the chasm",
      steps: [
        {
          text: "Talk to King Lathas on the first floor of Ardougne Castle (climb the stairs in the central courtyard). Pick option 1 to start the quest.",
        },
        {
          text: "Travel to West Ardougne (through the Plague City entrance south-west of East Ardougne, or via the West Ardougne teleport). Walk to the cave entrance on the western edge of West Ardougne — Koftik waits there.",
        },
        {
          text: "Talk to Koftik at the cave mouth, then enter the cave. Inside, take a fungus from the wall (acts as a light source).",
        },
        {
          text: "At the chasm, light an arrow with the tinderbox using a fire spell or the nearby fire, then shoot the guide rope across to set up the bridge. Cross.",
        },
        {
          text: "Navigate the rope swing over the pit (Agility check — keep HP above 15 in case of failure).",
        },
        {
          text: "Cross the spike grid using trial-and-error (each row shows a hint pattern). Failures take damage so eat as needed.",
        },
        {
          text: "Pull the lever next to the gate at the end of the grid to open the gate.",
        },
      ],
    },
    {
      title: "Orbs of Light + slave area",
      steps: [
        {
          text: "In the next chamber, collect 4 Orbs of Light by exploring the four side paths off the main room.",
        },
        {
          text: "Use all 4 orbs on the furnace in the central chamber to forge a lit lantern.",
        },
        {
          text: "Continue south to the altar room and climb down the well next to the altar.",
        },
        {
          text: "In the slave area below, pick the lock on the slave cage to free a captive, then use a spade on the mud floor outside the cage to dig down.",
        },
        {
          text: "In the next section, cross the ledge — either use the Thieving shortcut (50 Thieving — disarm the trap) or work through the stone bridge maze.",
        },
        {
          text: "Squeeze through the pipe at the end of the maze.",
        },
      ],
    },
    {
      title: "Make the dwarven brew + kill paladins",
      steps: [
        {
          text: "After the pipe, search the unicorn cage to the north (push the railing onto the boulder if blocked).",
        },
        {
          text: "Collect a unicorn horn from inside the cage (you may need to use the railing/lever to open it).",
        },
        {
          text: "Continue forward and kill the 3 Paladins (level 62) — collect a paladin badge from each. They can be safespotted around the corridor pillars.",
        },
        {
          text: "Use a plank from the area on the flat rocks south of the paladin room to make a bridge.",
        },
        {
          text: "Find the well in the dwarf camp area (south of the paladin room). Use the 3 paladin badges and the unicorn horn on the well to brew dwarven brew.",
        },
        {
          text: "Open the door past the well to continue south.",
        },
      ],
    },
    {
      title: "Iban's cavern — gather quest items",
      steps: [
        {
          text: "Descend the cave south of the dwarven brew area.",
        },
        {
          text: "In the underground dwarf camp, talk to Niloof and Klank. Klank gives you Klank's gauntlets (needed later for the soulless cage).",
        },
        {
          text: "Travel west across the cavern to find the witch's house (small isolated hut). Use a cat (any cat — bring one from the surface) on the front door to enter.",
        },
        {
          text: "Open the chest inside the witch's house to take its contents.",
        },
        {
          text: "Travel further west of the witch's house to find 3 demons (Doomion / Othainian / Holthion, all level 91). Kill all 3 and take a demon amulet from each.",
        },
        {
          text: "Return north to the well by the dwarven camp. Use a bucket on the brew barrel to fill it with dwarven brew, then use the brew + tinderbox on Iban's tomb (north of the dwarf camp) to weaken Iban.",
        },
      ],
    },
    {
      title: "Kalrag + the soulless",
      steps: [
        {
          text: "Travel east of the witch's house to the spider pit. Kill Kalrag (level 89).",
        },
        {
          text: "Ascend the cave (climb the rocks/ladders) to the half-soulless area in the upper cavern.",
        },
        {
          text: "Equip Klank's gauntlets and search the soulless cage to find Iban's dove inside.",
        },
      ],
    },
    {
      title: "Defeat Iban",
      steps: [
        {
          text: "Walk south to Iban's temple. Find a Disciple of Iban patrolling outside or inside; kill one and take the disciple robes.",
        },
        {
          text: "Equip the full disciple robes to walk freely into the inner sanctum of Iban's temple.",
        },
        {
          text: "Reach the Well of Voyage at the centre of the sanctum. Right-click and 'use' the Doll of Iban on the well repeatedly — keep clicking until Iban is destroyed.",
        },
        {
          text: "Avoid the spike trap damage on the floor while spamming the well; eat between hits.",
        },
        {
          text: "After the cutscene, talk to Koftik nearby for transport back to West Ardougne.",
        },
        {
          text: "Return to King Lathas on the first floor of Ardougne Castle to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "5 Quest Points",
    "3,000 Agility experience",
    "3,000 Attack experience",
    "Iban's staff (lets you cast Iban Blast — strong magic attack)",
    "Klank's gauntlets",
    "Access to Tirannwn (the elven lands — required to start Regicide)",
  ],
};
