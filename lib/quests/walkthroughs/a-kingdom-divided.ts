import type { QuestWalkthrough } from "../types";

export const aKingdomDivided: QuestWalkthrough = {
  startPoint:
    "Talk to Martin Holt outside the main gate of Kourend Castle in Kingstown (centre of the Great Kourend map).",
  itemsRequired: [
    "Melee gear, food, prayer potions",
    "Normal spellbook with Fire Bolt runes (or stronger fire spell)",
    "Any axe",
    "Defence potion (3-4 doses)",
    "Volcanic sulphur (mine in Mount Karuulm dungeon, or buy from GE)",
    "Molten glass",
    "Dark essence block (or pickaxe + chisel to make one in the Arceuus Dark Altar mine)",
  ],
  recommended: [
    "Combat 70+",
    "43+ Prayer for protection prayers",
    "Stamina/energy + antipoison",
    "Xeric's talisman (the main fast-travel tool inside Kourend) — you'll use Xeric's Glade, Heart, Lookout, Inferno frequently",
    "Kharedst's memoirs / Book of the Dead for Kourend city teleports",
    "Games necklace (Wintertodt teleport)",
    "Fairy ring access (CIS = Wintertodt area)",
  ],
  enemies: [
    "Judge of Yama (level 168) — fought in Kourend Castle basement",
    "2 Assassins (level 132) — appear during cutscenes",
    "Xamphur (level 239) — fought in the Lizardman temple lab; pray Magic",
    "Barbarian Warlord (level 91) — at the Barbarian camp in Kourend Woodland",
  ],
  sections: [
    {
      title: "The disgraced councillor's escape",
      steps: [
        {
          text: "Talk to Martin Holt outside the main gate of Kourend Castle in Kingstown.",
        },
        {
          text: "Enter Kourend Castle and talk to Commander Fullore on the ground floor (the soldier in red and gold near the throne room).",
        },
        {
          text: "Travel to the small house just south-east of Kourend Castle (the disgraced councillor Roan's house). Search the drawers and the bookshelf inside, then read the receipt that drops.",
        },
        {
          text: "Head to Port Piscarilius (north-east Kourend, on the coast) and talk to Tomas Lawry — he stands in the small rose garden just south of the Port Piscarilius bank.",
        },
        {
          text: "Travel to Lovakengj (south-east Kourend) and talk to Fuggy inside The Forsaken Tavern (the pub in the centre of Lovakengj).",
        },
        {
          text: "Return to Port Piscarilius and talk to Cabin Boy Herbert on the southern dock (the small boy NPC near the fishing cranes).",
        },
        {
          text: "Return to Kourend Castle and descend to the basement. Defeat the Judge of Yama (level 168) — dodge the fire waves on the floor; only melee damages him.",
        },
        {
          text: "Watch the cutscene, talk to Commander Fullore in the basement, then return to Martin Holt at the front gate of Kourend Castle.",
        },
        {
          text: "Teleport to the Arceuus Library (north Kourend; use Kharedst's memoirs, Book of the Dead, or the Library Teleport tablet). Find Istoria — she wanders the upper floors among the bookcases — and pickpocket her for a Bluish key.",
        },
        {
          text: "Use the Bluish key on the pink case in the library to retrieve Rose's diary.",
        },
        {
          text: "Return to Martin Holt at the Kourend Castle front gate with the diary.",
        },
      ],
    },
    {
      title: "Kourend's last princess",
      steps: [
        {
          text: "Travel to the Forthos Ruins north-east of the Woodcutting Guild in Hosidius (south-west Kourend). The ruins sit on a small hill east of the guild.",
        },
        {
          text: "Search the four stone piles around the ruins for engraved numbers (each player gets a different combination — write them down).",
        },
        {
          text: "Cut the vines blocking the central panel with any axe, then enter the code ROSE on the panel using the digits matching the ROSE letters from the engravings.",
        },
        {
          text: "Show the recovered note to Martin Holt at the front gate of Kourend Castle in Kingstown.",
        },
        {
          text: "Travel to the Settlement Ruins in north-east Hosidius (north of Tithe Farm). Talk to Martin in the small ruined building in the north-west corner.",
        },
        {
          text: "Kill the Assassin (level 132) that spawns during the cutscene.",
        },
        {
          text: "Cast Fire Bolt (or stronger fire spell) on the frozen ice chunks blocking a panel inside the building, then search and open the panel.",
        },
        {
          text: "Travel to The Legless Faun pub in Port Piscarilius (the small inn on the south side of the port, west of the bank).",
        },
        {
          text: "Climb the ladder to the upper floor; check the wall panel and write down the order of the houses shown.",
        },
        {
          text: "Go back downstairs and outside; push each statue panel around the pub in the order the upstairs panel showed.",
        },
        {
          text: "Once the trap door opens, search the bed in the shack for a tatty note.",
        },
        {
          text: "Inspect the crates inside the shack, then climb down the trap door.",
        },
      ],
    },
    {
      title: "The mysterious mage",
      steps: [
        {
          text: "Travel south to Molch (the lizardman village in Kebos Lowlands, south of Hosidius via the south gate). Use Xeric's Glade teleport then run south-west, or fairy ring CKR.",
        },
        {
          text: "Enter the Lizard dwelling (the central temple/hut in Molch) and talk to Kaht B'alam, the lizardman elder inside.",
        },
        {
          text: "Jump down the hole inside the temple to exit out the back of the building.",
        },
        {
          text: "Cross the stone bridge to the south, into the Kebos Swamp.",
        },
        {
          text: "Search the south-eastern Lizardman egg pile in the swamp — a Lizardman brute attacks. Defeat or escape it; pick up an egg.",
        },
        {
          text: "Return to the Molch temple and give the egg to Kaht B'alam for a key.",
        },
        {
          text: "Use the key on the door in the north wall of the temple, then defeat Xamphur (level 239) inside the lab. Pray Protect from Magic.",
        },
        {
          text: "Search the northern table inside Xamphur's lab for the next clue.",
        },
        {
          text: "Return to the shack at The Legless Faun in Port Piscarilius and go back downstairs into the trap door area.",
        },
        {
          text: "Talk to all 5 Lords at their council seats (each Kourend house has its own seat in the underground meeting room — Lord Hosidius, Lord Lovakengj, Lord Piscarilius, Lord Arceuus, Lord Shayzien).",
        },
        {
          text: "Travel to Xeric's Lookout, the small fortress on the cliff just west of Kourend Castle (use Xeric's talisman → Lookout).",
        },
        {
          text: "Talk to Commander Fullore at Xeric's Lookout, then talk to all 5 Lords again — they have moved to different floors of the lookout (check ground, first, and second floors).",
        },
      ],
    },
    {
      title: "The council's end",
      steps: [
        {
          text: "Ask Commander Fullore at Xeric's Lookout about Lady Lovakengj.",
        },
        {
          text: "Travel to Mount Karuulm in south Kebos Lowlands (use Karuulm teleport scroll, or run south through Hosidius). Talk to Kaal-Mej-San at the summit (the priest inside the Karuulm temple at the top).",
        },
        {
          text: "Bring him a 3-dose+ Defence potion and volcanic sulphur to brew the sulphur potion.",
        },
        {
          text: "Get the resulting shielding potion from Kaal-Mej-San.",
        },
        {
          text: "Travel to the Wintertodt Camp in far north Arceuus (Games necklace teleport, or fairy ring CIS). Pour the shielding potion on the Doors of Dinh — the giant locked doors at the back of the camp behind the boss room entrance.",
        },
        {
          text: "Travel to the Barbarian camp in Kourend Woodland (the forested area north-west of Kourend Castle, between the castle and the Wintertodt road). Defeat the Barbarian Warlord (level 91) inside the camp.",
        },
        {
          text: "Talk to Phileas Rimor in his house in central Shayzien (south-west Kourend), just west of The Cloak and Stagger tavern.",
        },
        {
          text: "Travel to the Shayzien prison just west of the Graveyard of Heroes (Shayzien military area, south-west of Phileas's house). Talk to Martin Holt inside the prison.",
        },
        {
          text: "Go to the Graveyard of Heroes (immediately east of the prison). Talk to Jorra and kill the assassin (level 132) that spawns.",
        },
        {
          text: "Travel to Arceuus church (the large church on the north side of Arceuus, near the Dark Altar). Talk to Mori inside and give him the molten glass + dark essence block.",
        },
        {
          text: "Travel to the Chasm of Fire (south of Mount Karuulm dungeon entrance, in southern Kebos) and attempt to enter — a cutscene plays.",
        },
        {
          text: "Travel to the Hosidius Vinery (the wine farm in south-east Hosidius, between Hosidius town and the Kebos Lowlands). Inspect the suspicious wine barrel and pick the lock on the chest behind it.",
        },
        {
          text: "Return to Xeric's Lookout west of Kourend Castle and talk to all 5 Lords again at their seats (across all 3 floors).",
        },
        {
          text: "Talk to Commander Fullore at Xeric's Lookout for the final cutscene.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "Book of the Dead (Arceuus spellbook teleport book — adds Kourend city teleports)",
    "2 antique lamps (10,000 XP each in any skill 40+)",
    "Ability to set respawn point at Kourend Castle",
    "24 new Arceuus spellbook spells unlocked",
    "Ability to fight Yama (boss in Kourend Castle basement)",
  ],
};
