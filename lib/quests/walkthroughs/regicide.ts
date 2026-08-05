import type { QuestWalkthrough } from "../types";

export const regicide: QuestWalkthrough = {
  startPoint:
    "Talk to King Lathas on the first floor of Ardougne Castle (centre of East Ardougne). Ardougne Teleport (51 Magic) drops you in the market square just south of the castle — run north through the gates and climb the staircase in the entrance hall. Underground Pass must be complete.",
  itemsRequired: [
    "5+ coal in your bank (25+ recommended for retries)",
    "Bow + a few un-poisoned arrows",
    "2 ropes (3 if you fail any rope check)",
    "Spade",
    "Limestone (mine in the Limestone Mine north-east of Paterdomus, or buy from Razmire)",
    "Tinderbox",
    "Strip of cloth (or 4 balls of wool to spin into a strip on a loom — Crafting Guild)",
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
          travel:
            "Ardougne Teleport (51 Magic) or an Ardougne teleport tab lands you in East Ardougne's market square; run north through the castle gates and up the staircase in the entrance hall. No teleport: skills necklace to the Fishing Guild and run south, combat bracelet to the Ranging Guild and run south-west, or take a charter ship to Port Khazard and run north.",
        },
        {
          text: "Travel to West Ardougne and enter the Underground Pass at its western edge (the cave Koftik guards). Bring bow + arrows.",
          travel:
            "Get into West Ardougne through the tunnel in Edmond's garden in north-west East Ardougne (the house you used in Plague City — climb down and crawl through the pipe), or straight through the city-wall gates if they are open to you. From West Ardougne run west out of the far gate into the border wasteland; Koftik stands beside the cave entrance at the western end.",
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
          travel:
            "You surface on the eastern edge of Isafdar. Keep heading west along the forest paths; the trail bends south-west toward the elf camp. Watch for the trap tiles — they hit hard and poison.",
        },
        {
          text: "Navigate the forest traps: jump the leaves trap, dodge the sticks trap. The trail leads south-west.",
        },
        {
          text: "Reach the Iorwerth Camp (the elven camp in southern Isafdar — small tents around a central tree).",
          travel:
            "From the trap trail keep running south-west through Isafdar; the camp is the cluster of tents in the south-west of the forest, north-east of Tyras Camp.",
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
          text: "Reach General Hining's camp (the human Tyras military camp on the west coast). Collect 2-3 empty barrels from the camp's storage area.",
          travel:
            "From the Iorwerth Camp keep running west/north-west through Isafdar until the trees open onto the coast — Tyras Camp is the palisaded military camp on the shore, with the docks to the south.",
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
          text: "Travel to a furnace wearing gloves and use the limestone on it to make quicklime.",
          travel:
            "Amulet of glory to Al Kharid drops you between the bank and the palace — the furnace is the open-fronted building a short run west, near the scimitar shop. Alternatively glory to Edgeville: the furnace is just south-west of the bank, beside the general store.",
        },
        {
          text: "Use pestle and mortar on the quicklime with an empty pot in your inventory to grind it into a pot of quicklime.",
        },
        {
          text: "Use pestle and mortar on the sulphur piece to grind it into ground sulphur.",
        },
        {
          text: "Make a strip of cloth on a loom using 4 balls of wool.",
          travel:
            "The reliable loom is in the Crafting Guild south-west of Falador (40 Crafting + brown apron worn): Falador Teleport, then run south-west out of the city along the road past the cow field to the walled guild.",
        },
      ],
    },
    {
      title: "Deadly chemistry — make the bomb in Rimmington",
      steps: [
        {
          text: "Travel to the Chemist in Rimmington and talk to him with the Chemist's book in your inventory (received during Biohazard).",
          travel:
            "Falador Teleport, then run south-west out of Falador's south gate along the road past the Crafting Guild and down to Rimmington on the south coast. Alternative: Port Sarim (boat/charter) and run west. The Chemist's house is at the north-west end of the village, near the general store.",
        },
        {
          text: "Buy/un-note 5+ coal at the Rimmington general store (sell noted coal, then buy it back unnoted).",
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
          travel:
            "Ardougne Teleport to the market square, into West Ardougne via Edmond's tunnel in the north-west of the city, then west to Koftik's cave and back along the pass route to the Well of Voyage.",
        },
        {
          text: "Bring a cooked rabbit (kill a rabbit west of Falador and cook it on a fire if needed).",
        },
        {
          text: "Run north-west through Isafdar past the Iorwerth Camp to the catapult outside Tyras Camp (the wooden siege engine on the ridge east of the camp walls).",
          travel:
            "From the Well of Voyage exit run west then north-west through Isafdar; pass the Iorwerth Camp and keep going toward the coast — the catapult sits on the high ground just outside Tyras Camp's east wall, with one human guard beside it.",
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
          text: "Run back south-east to the Iorwerth Camp and talk to Lord Iorwerth.",
        },
        {
          text: "Travel to Ardougne Castle — Iban's staff teleport, the Tyras Camp charter ship, or run back through the Pass. Try to enter the castle and King Lathas summons you.",
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
