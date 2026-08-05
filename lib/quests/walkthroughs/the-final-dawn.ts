import type { QuestWalkthrough } from "../types";

export const theFinalDawn: QuestWalkthrough = {
  startPoint:
    "Talk to Servius on the ground floor of the Sunrise Palace in the centre of Civitas illa Fortis (Varlamore). Pendant of Ates or the Civitas illa Fortis Teleport spell puts you in the city; the palace is the large stepped building in the middle of it.",
  itemsRequired: [
    "Emissary robes (looted from the chest in the Tower of Ascension during The Heart of Darkness; or sold by Twilight Emissary stalls)",
    "Bones or any raw/cooked meat (to feed the dog at the safe house)",
    "Knife (in-quest — picked up in the safe house)",
    "Beer (in-quest — picked up in Teumo's house in Cam Torum)",
  ],
  recommended: [
    "Combat 85+",
    "Best melee + ranged gear (the Augur Metzli boss switches styles)",
    "Sharks/anglers + Pendant of Ates (Civitas illa Fortis teleport)",
    "Quetzal whistle (Varlamore fast travel between cities)",
    "Stamina + prayer potions",
  ],
  enemies: [
    "Emissary Enforcer (level 196) — Twilight Temple basement",
    "Chimalli + Lucius (level 160 each) — Ancient Prison in Neypotzli",
    "Emissary cultists (level 70-90) — Crypt of Tonali",
    "Ennius Tullus (level 306) — Crypt of Tonali",
    "Augur Metzli (level 396) — final boss in Mokhaiotl",
  ],
  sections: [
    {
      title: "Infiltrate the Twilight Temple",
      steps: [
        {
          text: "Talk to Servius on the ground floor of the Sunrise Palace in the centre of Civitas illa Fortis and confirm to start.",
          travel:
            "Pendant of Ates or the Civitas illa Fortis Teleport spell drops you in the city; the quetzal roost outside the north gate also works. The Sunrise Palace is the large stepped building in the middle of the city — Servius is just inside on the ground floor.",
        },
        {
          text: "If you don't already have emissary robes, grab a set from the chest in the Tower of Ascension (where The Heart of Darkness took place).",
          travel: "Leave the city by the north-west and run to the Tower of Ascension; the chest is where the quest fight took place.",
        },
        {
          text: "Equip the emissary robes and enter the Twilight Temple — the dark stone temple south of Civitas illa Fortis.",
          travel: "From the Sunrise Palace, run south out of the city gates; the temple is the black-stone building on the plain below.",
        },
        {
          text: "At the locked basement door inside the temple, give the passcode 'Final Dawn' to the guard.",
        },
        {
          text: "Sneak past the patrolling Emissary Enforcer in the basement — wait for him to walk away, then slip into the back room behind him.",
        },
        {
          text: "Search the bed in the back room for a key, then open the drawer in the same room for a canvas piece.",
        },
        {
          text: "Use the canvas piece on the painting on the wall to reveal a hidden passage.",
        },
        {
          text: "Inside the hidden room, pick the lock on the blue chest to retrieve the emissary scroll.",
        },
        {
          text: "Return to the basement and fight the Emissary Enforcer (level 196) — he's blocking the way out. Step back when he winds up an attack and step sideways to dodge his special attack.",
        },
        {
          text: "Return the scroll to Queen Zyanyi on the top floor of the Sunrise Palace.",
          travel: "Run back north into Civitas illa Fortis and climb the stairs in the centre of the palace to the top floor.",
        },
      ],
    },
    {
      title: "Home invasion — Janus's safe house",
      steps: [
        {
          text: "Travel to the safe house just south of the western bank in Civitas illa Fortis.",
          travel:
            "From the Sunrise Palace head west across the city to the western bank chest; the safe house is the small unmarked building a few squares south of it.",
        },
        {
          text: "Talk to Captain Vibia, who waits outside the safe house.",
        },
        {
          text: "Inspect the east-side window of the safe house and climb through.",
        },
        {
          text: "Inside, give bones (or any raw/cooked meat) to the guard dog to learn the passcode 'GUS'.",
        },
        {
          text: "Pick up the potato sack, knife, and coin purse from around the safe house's main room.",
        },
        {
          text: "Use the knife on the potted plant by the window to cut a branch.",
        },
        {
          text: "Use sand from the kitchen to fill the coin purse, then combine the filled purse with the branch to make an improvised blackjack.",
        },
        {
          text: "Show the items to Captain Vibia outside, then return inside and search Janus (the unconscious occupant) for the front door key.",
        },
        {
          text: "Agree to travel to Cam Torum with Queen Zyanyi.",
        },
      ],
    },
    {
      title: "Dwarven traitor in Cam Torum",
      steps: [
        {
          text: "Travel to Cam Torum, the underground city beneath the mountains north-east of Civitas illa Fortis.",
          travel:
            "Quetzal whistle (or the quetzal handler at the city's roost) to the Cam Torum stop, then ride the lift at the cave mouth down into the city. On foot: leave Civitas illa Fortis by the north-east and follow the mountain road to the Cam Torum entrance.",
        },
        {
          text: "Talk to Attala by the market stalls in the central Cam Torum market square.",
        },
        {
          text: "Enter Teumo's house on the north-west side of the market square and climb the stairs; grab a beer from the table upstairs.",
        },
        {
          text: "Go back downstairs and use the beer on Galna (the dwarf in the lower room) to put him to sleep.",
        },
        {
          text: "Descend into Teumo's basement and collect the 4 different beverages from the cabinet against the wall.",
        },
        {
          text: "Match each beverage to its barrel by sniffing them (steam, black liquid, pub smell, bubbling) and place each on the correct barrel.",
        },
        {
          text: "Drink the beer from the southernmost barrel; place the empty glass on it.",
        },
        {
          text: "A hidden lever appears at the fireplace — pull it to reveal a passage.",
        },
        {
          text: "Climb through the wall hole and watch the cutscene.",
        },
        {
          text: "Travel back to Civitas illa Fortis and talk to Servius on the ground floor of the Sunrise Palace, then talk to Attala (now standing near him).",
          travel: "Quetzal whistle or Pendant of Ates back to Civitas illa Fortis, then into the palace in the city centre.",
        },
      ],
    },
    {
      title: "Interlopers in Neypotzli",
      steps: [
        {
          text: "Bank for combat (best melee + ranged gear, prayer potions, sharks).",
        },
        {
          text: "Travel to the Neypotzli caverns north of Cam Torum and pick up a keystone fragment from the chest near the entrance.",
          travel:
            "Quetzal whistle back to Cam Torum, ride the lift down and cross the market to the tunnel mouth on its east side — that is the Neypotzli entrance.",
        },
        {
          text: "Navigate north through the Streambound and Earthbound Caverns following the quest arrows.",
        },
        {
          text: "Use the keystone in the south-east room of the Ancient Prison (the southernmost section of the Neypotzli dungeon).",
        },
        {
          text: "Touch the glowing symbol on the floor inside the Ancient Prison to trigger the cutscene.",
        },
        {
          text: "Fight Lucius and Chimalli (level 160 each). Alternate Protect from Magic and Protect from Missiles based on which boss is attacking; dodge their melee specials. Kill Lucius first to make the fight easier.",
        },
        {
          text: "Talk to Attala back in the Cam Torum market square.",
          travel: "Retrace your route south out of Neypotzli into Cam Torum; she is by the market stalls.",
        },
      ],
    },
    {
      title: "Crypt assault",
      steps: [
        {
          text: "Travel to the Crypt of Tonali, south-east of Tal Teklan in southern Varlamore.",
          travel: "Quetzal whistle to the Tal Teklan roost, then run south-east across the valley to the crypt entrance.",
        },
        {
          text: "Enter the crypt and watch the opening cutscene.",
        },
        {
          text: "Defeat 6 waves of cultists in the entrance room. Heal your NPC allies (Servius, Vibia, Attala) with food when their health drops.",
        },
        {
          text: "Fight Ennius Tullus (level 306). Pray Protect from Melee, dodge the orange Sunfire circles and the line attacks across the floor. He enrages at low HP, healing 120 and attacking faster — keep eating and praying through it.",
        },
      ],
    },
    {
      title: "Tonali Cavern puzzles",
      steps: [
        {
          text: "After defeating Tullus, descend into the Tonali Cavern via the new opening in the crypt floor.",
        },
        {
          text: "Cross to the northern end of the cavern using the wall shortcuts and portals as they appear.",
        },
        {
          text: "Inspect the Strange Platform in the centre to unlock the surface entrance for future trips.",
        },
        {
          text: "Descend east into the sun puzzle room.",
        },
        {
          text: "Search the urns lining the wall for Kuhu essence.",
        },
        {
          text: "Solve the sun statue puzzle: each Metzli statue has an engraving (Oma, Naui, etc.) that maps to an altar position number — see the wiki diagram for the per-player solution. Place essence accordingly to imbue.",
        },
        {
          text: "Complete 3 successful imbues to open the next door.",
        },
        {
          text: "Enter the moon puzzle room (west).",
        },
        {
          text: "Use the pressure plates around the room to move Prince Itzla onto plates that suppress flame jets.",
        },
        {
          text: "Collect the knife blade and ancient roots from the room corners.",
        },
        {
          text: "Use the knife blade on the roots to make root kindling, then count lit braziers and deposit kindling to the central statue 3 times in the right order (count varies per attempt).",
        },
        {
          text: "Exit the cavern and bank to resupply (ranged + prayer potions recommended for the boss).",
        },
      ],
    },
    {
      title: "Defeat Augur Metzli",
      steps: [
        {
          text: "Return to the Mokhaiotl entrance — back through the Crypt of Tonali and down the central lift.",
          travel: "Quetzal whistle to Tal Teklan and run south-east to the crypt again, then take the lift in the middle of the cavern.",
        },
        {
          text: "Enter the marked door at the bottom for the boss cutscene.",
        },
        {
          text: "Defeat Augur Metzli (level 396 / 600 HP). She switches between Magic and Ranged styles — pray accordingly. Dodge flame walls by stepping into the gold gaps.",
        },
        {
          text: "She copies your last special attack — be prepared to dodge it back.",
        },
        {
          text: "At low HP she enrages — flame quadrants ignite. Use the white portal that appears to escape between phases.",
        },
        {
          text: "After defeat, ascend the stairs (or use the 75 Agility shortcut jump) to reach the final chamber.",
        },
        {
          text: "Watch the final cutscene carefully — don't click elsewhere or you'll miss it.",
        },
        {
          text: "Search the skeleton on the chamber floor for a stone tablet, then read it.",
        },
        {
          text: "Inspect both the Sun statue and the Moon statue in the final chamber.",
        },
        {
          text: "Return to the Crypt of Tonali surface via the chamber teleport, then talk to Prince Itzla there.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Arkan blade (powerful melee weapon)",
    "55,000 Thieving experience",
    "25,000 Runecraft experience",
    "25,000 Fletching experience",
    "55,000 XP combat lamp (any combat skill 40+)",
    "Crypt of Tonali access (lift to Mokhaiotl)",
    "Doom of Mokhaiotl boss fight access",
  ],
};
