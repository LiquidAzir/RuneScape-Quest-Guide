import type { QuestWalkthrough } from "../types";

export const aKingdomDivided: QuestWalkthrough = {
  startPoint:
    "Talk to Martin Holt outside the main gate of Kourend Castle in Kingstown (centre of the Great Kourend map). Fastest route: Xeric's talisman set to Xeric's Heart, which drops you at the castle. Otherwise cast Kourend Castle Teleport (Arceuus spellbook, 69 Magic), or sail with Veos from Port Sarim to Port Piscarilius and run south-west along the main road to Kingstown.",
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
          travel:
            "Xeric's talisman → Xeric's Heart lands you at Kourend Castle. No talisman: Kourend Castle Teleport on the Arceuus spellbook, or sail with Veos from Port Sarim to Port Piscarilius and run south-west down the main road. Martin is the scruffy man loitering on the road just outside the castle's south gate.",
        },
        {
          text: "Enter Kourend Castle and talk to Commander Fullore on the ground floor (the soldier in red and gold near the throne room).",
          travel:
            "Straight through the castle's south doors from Martin, then north across the entrance hall — Fullore stands in front of the throne dais.",
        },
        {
          text: "Search the drawers and the bookshelf inside the disgraced councillor Roan's house, then read the receipt that drops.",
          travel:
            "Leave the castle by the south gate and run south-east through Kingstown. Roan's house is the small detached cottage just outside the castle wall's south-east corner, with a fenced yard.",
        },
        {
          text: "Talk to Tomas Lawry in Port Piscarilius — he stands in the small rose garden just south of the Port Piscarilius bank.",
          travel:
            "Kharedst's memoirs or Book of the Dead → The Queen of Thieves chapter teleports to Port Piscarilius. Otherwise run north-east from Kourend Castle along the main road to the coast. From the Piscarilius bank walk a few steps south to the flowerbeds.",
        },
        {
          text: "Talk to Fuggy inside The Forsaken Tavern in the centre of Lovakengj.",
          travel:
            "Memoirs or Book of the Dead → The Forsaken Tower chapter teleports to Lovakengj. Otherwise run south-east from Kourend Castle over the river bridge into Lovakengj. The tavern is the large timber building in the middle of town, north of the sulphur mine road.",
        },
        {
          text: "Return to Port Piscarilius and talk to Cabin Boy Herbert on the southern dock (the small boy NPC near the fishing cranes).",
          travel:
            "Memoirs / Book of the Dead → The Queen of Thieves again, then run south-east from the bank onto the wooden piers by the fishing cranes.",
        },
        {
          text: "Return to Kourend Castle, descend to the basement, and defeat the Judge of Yama (level 168) — dodge the fire waves on the floor; only melee damages him.",
          travel:
            "Xeric's talisman → Xeric's Heart, or Kourend Castle Teleport. Inside the castle take the staircase in the north-east corner of the ground floor down to the basement.",
        },
        {
          text: "Watch the cutscene, talk to Commander Fullore in the basement, then return to Martin Holt at the front gate of Kourend Castle.",
        },
        {
          text: "Pickpocket Istoria in the Arceuus Library for a Bluish key — she wanders the upper floors among the bookcases.",
          travel:
            "Memoirs or Book of the Dead → The Ascent of Arceuus, or use an Arceuus Library Teleport tablet. Without either, run north-east from Kourend Castle into Arceuus — the Library is the huge multi-storey building on the west side of the district. Climb to the middle and top floors to find Istoria.",
        },
        {
          text: "Use the Bluish key on the pink case in the library to retrieve Rose's diary.",
        },
        {
          text: "Return to Martin Holt at the Kourend Castle front gate with the diary.",
          travel:
            "Xeric's talisman → Xeric's Heart, or run south-west out of Arceuus down the main road to Kingstown.",
        },
      ],
    },
    {
      title: "Kourend's last princess",
      steps: [
        {
          text: "Travel to the Forthos Ruins north-east of the Woodcutting Guild in Hosidius.",
          travel:
            "Skills necklace → Woodcutting Guild puts you closest; leave the guild by the north gate and run north-east up the rise. The ruins are the ring of standing stones on the hill. No skills necklace: memoirs → The Depths of Despair (Hosidius) and run north-west.",
        },
        {
          text: "Search the four stone piles around the ruins for engraved numbers (each player gets a different combination — write them down).",
        },
        {
          text: "Cut the vines blocking the central panel with any axe, then enter the code ROSE on the panel using the digits matching the ROSE letters from the engravings.",
        },
        {
          text: "Show the recovered note to Martin Holt at the front gate of Kourend Castle in Kingstown.",
          travel:
            "Xeric's talisman → Xeric's Heart, or run north-east from the Woodcutting Guild along the road to Kingstown.",
        },
        {
          text: "Talk to Martin at the Settlement Ruins in north-east Hosidius, in the small ruined building in the north-west corner of the site.",
          travel:
            "Memoirs → The Depths of Despair drops you in Hosidius; run east past the Tithe Farm entrance and then north. The ruins are the scatter of broken walls just north of Tithe Farm, on the road between Hosidius and Kingstown.",
        },
        {
          text: "Kill the Assassin (level 132) that spawns during the cutscene.",
        },
        {
          text: "Cast Fire Bolt (or stronger fire spell) on the frozen ice chunks blocking a panel inside the building, then search and open the panel.",
        },
        {
          text: "Travel to The Legless Faun pub in Port Piscarilius (the small inn on the south side of the port, west of the bank).",
          travel:
            "Memoirs or Book of the Dead → The Queen of Thieves, then walk a short way south-west from the bank; the Faun is the pub with the statue-lined yard.",
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
          text: "Travel to Molch, the lizardman village in the Kebos Lowlands south-east of Hosidius.",
          travel:
            "From Hosidius run south-east and out through the Kebos gate, then follow the lowlands road east past the Lizardman Canyon. Molch sits on the lake shore and is entered over the wooden bridge on its north side.",
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
          travel:
            "Memoirs or Book of the Dead → The Queen of Thieves, then run south-west from the bank to the pub and climb down the trap door in the shack behind it.",
        },
        {
          text: "Talk to all 5 Lords at their council seats (each Kourend house has its own seat in the underground meeting room — Lord Hosidius, Lord Lovakengj, Lord Piscarilius, Lord Arceuus, Lord Shayzien).",
        },
        {
          text: "Travel to Xeric's Lookout, the fortified tower on the ridge west of Kourend Castle.",
          travel:
            "Xeric's talisman → Xeric's Heart to land at Kourend Castle, then run west out of Kingstown and up the ridge path — the Lookout is the stone tower overlooking the castle.",
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
          text: "Talk to Kaal-Mej-San, the priest inside the temple at the summit of Mount Karuulm.",
          travel:
            "Rada's blessing 4 teleports straight to Mount Karuulm. Without it, run south from Hosidius through the Kebos gate and follow the lowlands road south-east to the volcano, then talk to the mountain guide at the base to be carried up to the summit.",
        },
        {
          text: "Bring him a 3-dose+ Defence potion and volcanic sulphur to brew the sulphur potion.",
        },
        {
          text: "Get the resulting shielding potion from Kaal-Mej-San.",
        },
        {
          text: "Pour the shielding potion on the Doors of Dinh — the giant locked doors at the back of the Wintertodt Camp.",
          travel:
            "Games necklace → Wintertodt Camp drops you at the doors. Otherwise run north from Arceuus through the Arceuus/Kourend woodland and follow the snow road north-west into the camp; the doors are past the brazier area at the north end.",
        },
        {
          text: "Defeat the Barbarian Warlord (level 91) at the Barbarian camp in Kourend Woodland.",
          travel:
            "From the Wintertodt Camp run back south down the snow road, then east into the woodland between Kourend Castle and the Wintertodt road — the camp is the ring of tents and campfires among the trees north-west of the castle.",
        },
        {
          text: "Talk to Phileas Rimor in his house in central Shayzien, just west of The Cloak and Stagger tavern.",
          travel:
            "Memoirs or Book of the Dead → Tale of the Righteous teleports to Shayzien. Otherwise run west from Kourend Castle along the main road into the Shayzien encampment; his house is the one immediately west of the tavern in the town centre.",
        },
        {
          text: "Talk to Martin Holt inside the Shayzien prison, just west of the Graveyard of Heroes.",
          travel:
            "From Phileas's house run south-west through the Shayzien military area; the prison is the walled stone building on the west side of the graveyard.",
        },
        {
          text: "Go to the Graveyard of Heroes (immediately east of the prison). Talk to Jorra and kill the assassin (level 132) that spawns.",
        },
        {
          text: "Talk to Mori inside the Arceuus church and give him the molten glass + dark essence block.",
          travel:
            "Memoirs or Book of the Dead → The Ascent of Arceuus, then run north — the church is the big steepled building at the north end of Arceuus, on the road up to the Dark Altar.",
        },
        {
          text: "Travel to the Chasm of Fire in the southern Kebos Lowlands and attempt to enter — a cutscene plays.",
          travel:
            "Rada's blessing 3 teleports directly to the Chasm of Fire. Otherwise run south from Hosidius through the Kebos gate and follow the road south past Mount Karuulm; the chasm is the smoking pit south of the Karuulm dungeon entrance.",
        },
        {
          text: "Inspect the suspicious wine barrel at the Hosidius Vinery and pick the lock on the chest behind it.",
          travel:
            "Memoirs → The Depths of Despair (Hosidius), then run south-east; the Vinery is the walled grape farm on the eastern edge of Hosidius, on the road toward the Kebos gate.",
        },
        {
          text: "Return to Xeric's Lookout west of Kourend Castle and talk to all 5 Lords again at their seats (across all 3 floors).",
          travel:
            "Xeric's talisman → Xeric's Heart, then run west out of Kingstown and up the ridge path to the tower.",
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
