import type { QuestWalkthrough } from "../types";

export const undergroundPass: QuestWalkthrough = {
  startPoint:
    "Talk to King Lathas on the first floor of Ardougne Castle. Cast Ardougne Teleport (or rub an Ardougne cloak and run south-east from the monastery), head west out of the market square into the castle courtyard, then climb the staircase in the middle of the castle.",
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
          text: "Talk to King Lathas on the first floor of Ardougne Castle and pick option 1 to start the quest.",
          travel:
            "Ardougne Teleport (51 Magic) lands you in the East Ardougne market square — run west into the castle courtyard and up the staircase in the middle of the castle. Alternatives: Ardougne cloak to the monastery then run south-east, or a skills necklace to the Fishing Guild then run south-east into the city.",
        },
        {
          text: "Cross into West Ardougne and walk to the cave entrance on the western edge of town, where Koftik waits.",
          travel:
            "From the castle head west and pass through the gate in Ardougne's west wall (open after Plague City) — or drop down Edmond's tunnel behind his house in north-west East Ardougne. Once in West Ardougne, keep running west past the houses to the cave mouth on the far west edge. A West Ardougne teleport tablet drops you in town directly.",
        },
        {
          text: "Talk to Koftik at the cave mouth, then enter the cave. Inside, take a fungus from the wall to use as a light source.",
        },
        {
          text: "At the chasm, light an arrow using the tinderbox at the nearby fire, then shoot the guide rope across to make the bridge and cross.",
        },
        {
          text: "Navigate the rope swing over the pit (Agility check — keep HP above 15 in case of failure).",
        },
        {
          text: "Cross the spike grid using trial and error (each row shows a hint pattern). Failures take damage, so eat as needed.",
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
          text: "In the next section, cross the ledge — either use the Thieving shortcut (50 Thieving, disarm the trap) or work through the stone bridge maze.",
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
          text: "After the pipe, search the unicorn cage to the north (push the railing onto the boulder if it is blocked).",
        },
        {
          text: "Collect a unicorn horn from inside the cage.",
        },
        {
          text: "Continue forward and kill the 3 Paladins (level 62), taking a paladin badge from each. They can be safespotted around the corridor pillars.",
        },
        {
          text: "Use a plank from the area on the flat rocks south of the paladin room to make a bridge.",
        },
        {
          text: "Find the well in the dwarf camp area south of the paladin room and use the 3 paladin badges and the unicorn horn on it to brew dwarven brew.",
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
          text: "Descend the cave south of the dwarven brew area into Iban's cavern.",
        },
        {
          text: "In the underground dwarf camp, talk to Niloof and Klank. Klank gives you Klank's gauntlets (needed later for the soulless cage).",
        },
        {
          text: "Travel west across the cavern to the witch's small isolated hut. Use a cat on the front door to be let in.",
          travel:
            "From the dwarf camp head west across the open cavern floor. Bring the cat with you from the surface before you enter the pass — there is no cat down here, and going back means the whole run again.",
        },
        {
          text: "Open the chest inside the witch's house and take its contents.",
        },
        {
          text: "Travel further west of the witch's house to find Doomion, Othainian and Holthion (all level 91). Kill all 3 and take a demon amulet from each.",
        },
        {
          text: "Return north-east to the well by the dwarf camp. Fill a bucket from the brew barrel, then use the brew and a tinderbox on Iban's tomb north of the dwarf camp to weaken Iban.",
        },
      ],
    },
    {
      title: "Kalrag + the soulless",
      steps: [
        {
          text: "Travel east of the witch's house to the spider pit and kill Kalrag (level 89).",
        },
        {
          text: "Climb the rocks/ladders out of the pit up to the half-soulless area in the upper cavern.",
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
          text: "Walk south to Iban's temple. Kill a Disciple of Iban patrolling outside and take the disciple robes.",
        },
        {
          text: "Equip the full disciple robes so you can walk freely into the inner sanctum of Iban's temple.",
        },
        {
          text: "Reach the Well of Voyage at the centre of the sanctum, then use the Doll of Iban on the well repeatedly until Iban is destroyed.",
        },
        {
          text: "Keep eating between clicks — the spike traps on the sanctum floor chip your HP the whole time.",
        },
        {
          text: "After the cutscene, talk to Koftik nearby for transport back to West Ardougne.",
        },
        {
          text: "Return to King Lathas on the first floor of Ardougne Castle to finish.",
          travel:
            "From West Ardougne run east through the wall gate into East Ardougne, then west into the castle courtyard and up the central staircase. An Ardougne teleport is quicker if you have the runes.",
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
