import type { QuestWalkthrough } from "../types";

export const regicide: QuestWalkthrough = {
  startPoint:
    "Talk to King Lathas on the first floor of Ardougne Castle (centre of East Ardougne — climb the central staircase). Underground Pass must be complete.",
  itemsRequired: [
    "5+ coal in your bank (25+ recommended for retries)",
    "Bow + a few un-poisoned arrows",
    "2 ropes (3 if you fail any rope check)",
    "Spade",
    "Limestone (mine in the Limestone Mine north-east of Paterdomus, or buy from Razmire)",
    "Tinderbox",
    "Strip of cloth (or 4 balls of wool to spin into a strip on a loom — Falador or Lumbridge windmill)",
    "Pestle and mortar",
    "Gloves (any — protect from quicklime burn)",
    "Pot",
    "Cooked rabbit (kill rabbits west of Falador, then cook)",
  ],
  recommended: [
    "Combat 60+",
    "Antidote++ or super antipoison (Underground Pass + Tirannwn forest are full of poison)",
    "Stamina potions",
    "Weight-reducing gear (Boots of Lightness from Temple of Ikov; Spotted/Spottier cape)",
    "3+ Summer pies (boost Agility for traps)",
    "Ranged or magic for safespotting the Tyras Guard",
  ],
  enemies: ["Tyras Guard (level 110) — patrols near the catapult; safespottable behind trees"],
  sections: [
    {
      title: "Through the Underground Pass again",
      steps: [
        {
          text: "Talk to King Lathas on the first floor of Ardougne Castle to start the quest. He sends you back through the Underground Pass.",
        },
        {
          text: "Travel to West Ardougne and enter the Underground Pass at its western edge (same cave entrance as the original quest). Bring bow + arrows.",
        },
        {
          text: "Light a cloth-wrapped arrow with a tinderbox and shoot it across the chasm to ignite the rope, opening the gate.",
        },
        {
          text: "Cross the rope swing over the pit; pull the lever next to the gate; search the odd markings on the wall in the next chamber.",
        },
        {
          text: "Dig the loose dirt section with a spade; cross the spike grid carefully (use the swamp shortcut if your Agility is high enough, otherwise navigate the maze).",
        },
        {
          text: "Squeeze through the pipe; pass the long tunnel; place a wooden plank across the flat rocks past the paladin area.",
        },
        {
          text: "(Optional) Charge Iban's staff at the Flames of Zamorak well in the dwarf brew area for an extra weapon.",
        },
        {
          text: "Enter the Well of Voyage at Iban's temple (the well in the centre of the inner sanctum) and exit west into the elven lands.",
        },
      ],
    },
    {
      title: "Traverse Isafdar to the Iorwerth Camp",
      steps: [
        {
          text: "Run west through the Isafdar forest, talking to Idris when she appears (a Tyras forest scout — gives directions).",
        },
        {
          text: "Navigate the forest traps: jump the leaves trap, dodge the sticks trap. The trail leads south-west.",
        },
        {
          text: "Reach the Iorwerth Camp (the elven camp in southern Isafdar — small tents around a central tree).",
        },
        {
          text: "Talk to Lord Iorwerth at the Iorwerth Camp central tent.",
        },
        {
          text: "Follow the small map he hands you to find the Elf Tracker (an elf scout further south-west).",
        },
        {
          text: "Talk to Lord Iorwerth at the camp again twice; collect a crystal pendant from him for navigation.",
        },
        {
          text: "Follow the bootprints north-west of the blue mushroom patch in the forest until they lead to the Tyras Guard.",
        },
        {
          text: "Defeat the Tyras Guard (level 110) — safespot him behind the nearby trees with ranged or magic.",
        },
        {
          text: "Reach General Hining's camp (the human Tyras military camp west of the elf camp). Collect 2-3 empty barrels from the camp's storage area.",
        },
        {
          text: "Use the barrels on the bubbling tar pool inside General Hining's camp to fill them with coal tar.",
        },
        {
          text: "Collect a sulphur piece from the rocks near the tar pool.",
        },
        {
          text: "Return to Lord Iorwerth at the Iorwerth Camp and talk to him about each item you've gathered (limestone, sulphur, coal tar).",
        },
      ],
    },
    {
      title: "Make the bomb materials",
      steps: [
        {
          text: "Travel to a furnace (Al Kharid is closest from Ardougne via Necklace of Passage; or use the Edgeville furnace) wearing gloves. Use limestone on the furnace to make quicklime.",
        },
        {
          text: "Use pestle and mortar on the quicklime with an empty pot in your inventory to grind it into a pot of quicklime.",
        },
        {
          text: "Use pestle and mortar on the sulphur piece to grind it into ground sulphur.",
        },
        {
          text: "Make a strip of cloth on a loom (Falador upstairs east house, or Lumbridge attic) using 4 balls of wool.",
        },
      ],
    },
    {
      title: "Deadly chemistry — make the bomb in Rimmington",
      steps: [
        {
          text: "Travel to the Chemist in Rimmington (south-west of Falador, on the south coast). Talk to him with the Chemist's book in inventory (received during The Tourist Trap or Biohazard).",
        },
        {
          text: "Buy/un-note 5+ coal at the Rimmington general store.",
        },
        {
          text: "Walk into the Chemist's house and use the barrel of coal tar on the fractionalising still beside him.",
        },
        {
          text: "Operate the still controls: turn the tar valve right (open it), wait for the pressure dial to enter green, then adjust the valve back left to maintain pressure.",
        },
        {
          text: "Slowly add 2 coal at first, then add 1 coal at a time as the temperature drops back into the safe zone.",
        },
        {
          text: "After the run completes, take the barrel of naphtha from the still (make a second one too as backup).",
        },
        {
          text: "Use quicklime + ground sulphur on the naphtha barrel to make the unfinished bomb.",
        },
        {
          text: "Use the strip of cloth on the bomb as a fuse to finish it.",
        },
      ],
    },
    {
      title: "Royal assassination and finish",
      steps: [
        {
          text: "Travel back through the Underground Pass with the bomb (don't use teleports that drop the bomb).",
        },
        {
          text: "Bring a cooked rabbit (kill a rabbit west of Falador and cook on a fire if needed).",
        },
        {
          text: "Run north through Isafdar past the Iorwerth Camp to the catapult near Tyras Camp (the wooden siege engine north-west of General Hining's camp).",
        },
        {
          text: "Confirm you have a tinderbox in your inventory.",
        },
        {
          text: "Use the cooked rabbit on the human guard standing beside the catapult — he sits down to eat, distracting him.",
        },
        {
          text: "Use the bomb on the catapult, then light the fuse with the tinderbox. The catapult flings the bomb into Tyras Camp.",
        },
        {
          text: "Run back south to the Iorwerth Camp and talk to Lord Iorwerth.",
        },
        {
          text: "Travel to Ardougne Castle (use Iban's staff teleport, gnome glider, or run back through the Pass). Try to enter the castle — King Lathas summons you.",
        },
        {
          text: "Talk to King Lathas on the first floor of Ardougne Castle to finish.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "13,750 Agility experience",
    "15,000 coins",
    "Access to Tirannwn (Lletya, Isafdar, Tyras Camp, etc.)",
    "Ability to wield Dragon halberd",
    "Ship charter to Port Tyras (the elven port — accessed at any charter ship)",
    "Iorwerth camp + Zul-Andra teleport scrolls",
    "Fairy ring BJS unlocked (Iorwerth Camp)",
  ],
};
