import type { QuestWalkthrough } from "../types";

export const theFinalDawn: QuestWalkthrough = {
  startPoint: "Talk to Servius at the Sunrise Palace ground floor.",
  itemsRequired: [
    "Emissary robes (Tower of Ascension chest)",
    "Bones or raw/cooked meat",
    "Knife (in-quest)",
    "Beer (in-quest)",
  ],
  recommended: [
    "Combat 85+",
    "Best melee + ranged gear",
    "Sharks/anglers + Pendant of ates",
    "Quetzal whistle",
    "Stamina + prayer potions",
  ],
  enemies: [
    "Emissary Enforcer (level 196)",
    "Chimalli + Lucius (level 160 each)",
    "Emissary cultists (level 70-90)",
    "Ennius Tullus (level 306)",
    "Augur Metzli (level 396) — final boss",
  ],
  sections: [
    {
      title: "Infiltrate the Twilight Temple",
      steps: [
        { text: "Talk to Servius at the Sunrise Palace ground floor and confirm." },
        { text: "Get emissary robes from the Tower of Ascension chest if needed." },
        { text: "Enter the Twilight Temple wearing the robes." },
        { text: "Use the passcode 'Final Dawn' for basement access." },
        { text: "Avoid the Emissary Enforcer; enter the back room." },
        { text: "Search the bed for a key; open the drawer for a canvas piece." },
        { text: "Use the canvas on the painting to reveal a hidden passage." },
        { text: "Picklock the blue chest for an emissary scroll." },
        {
          text: "Fight the Emissary Enforcer (step back on attacks, sideways on specials).",
        },
        { text: "Return the scroll to Queen Zyanyi at the palace top floor." },
      ],
    },
    {
      title: "Home invasion",
      steps: [
        { text: "Go to the safe house south of the western bank in Civitas illa Fortis." },
        { text: "Talk to Captain Vibia in Civitas illa Fortis." },
        { text: "Inspect the east window and enter." },
        { text: "Use bones or meat on the dog to get the passcode 'GUS'." },
        { text: "Collect the potato sack, knife, coin purse." },
        { text: "Use the knife on the potted plant for a branch." },
        { text: "Fill the purse with sand; combine with the branch for a blackjack." },
        { text: "Show the items to Vibia; search Janus for a key." },
        { text: "Agree to go to Cam Torum with Queen Zyanyi." },
      ],
    },
    {
      title: "Dwarven traitor",
      steps: [
        { text: "Talk to Attala in the Cam Torum market." },
        { text: "Enter Teumo's house; grab a beer upstairs." },
        { text: "Use the beer on Galna downstairs." },
        { text: "Collect 4 beverages from the basement cabinet." },
        {
          text: "Place each on the correct barrel (steam, black liquid, pub smell, bubbling).",
        },
        { text: "Drink the beer at the southern barrel; place the glass." },
        { text: "Pull the hidden lever at the fireplace." },
        { text: "Climb through the wall hole (cutscene)." },
        { text: "Talk to Servius on the Sunrise Palace ground floor, then talk to Attala there." },
      ],
    },
    {
      title: "Interlopers in Neypotzli",
      steps: [
        { text: "Bank for combat." },
        { text: "Travel to Neypotzli; get a keystone fragment." },
        { text: "Navigate Streambound + Earthbound Caverns." },
        { text: "Use the keystone in the Ancient Prison south-east room." },
        { text: "Touch the glowing symbol for the cutscene." },
        {
          text: "Fight Lucius and Chimalli (alternate Magic/Ranged prayer; dodge specials). Kill Lucius first.",
        },
        { text: "Talk to Attala in the Cam Torum market after victory." },
      ],
    },
    {
      title: "Crypt assault",
      steps: [
        { text: "Travel to the Crypt of Tonali south-east of Tal Teklan." },
        { text: "Enter; watch the cutscene." },
        { text: "Defeat 6 cultist waves (heal NPC allies with food)." },
        {
          text: "Fight Ennius Tullus (pray melee; dodge Sunfire circles + rows). Survive his enrage (heals 120 HP, faster attacks).",
        },
      ],
    },
    {
      title: "Tonali Cavern puzzles",
      steps: [
        { text: "Descend into the cavern after the cutscene." },
        { text: "Cross to the northern end via shortcuts/portals." },
        { text: "Inspect the Strange Platform to unlock the surface entrance." },
        { text: "Descend east to the sun puzzle room." },
        { text: "Search urns for Kuhu essence." },
        {
          text: "Match Metzli statue engravings to altar positions (Oma=2, Naui=4, etc.).",
        },
        { text: "Complete 3 successful imbues." },
        { text: "Enter the moon puzzle room." },
        { text: "Use pressure plates to move Prince Itzla and suppress flames." },
        { text: "Collect the knife blade and ancient roots." },
        { text: "Create root kindling; count lit braziers correctly." },
        { text: "Deposit kindling to the statue 3 times." },
        { text: "Exit and resupply (ranged recommended)." },
      ],
    },
    {
      title: "Defeat Augur Metzli",
      steps: [
        { text: "Return to the Mokhaiotl entrance via the Crypt lift." },
        { text: "Enter the door for the cutscene." },
        {
          text: "Defeat Augur Metzli (600 HP — switches ranged/magic, dodge flame walls via gaps).",
        },
        { text: "Handle her copied special attacks." },
        {
          text: "Survive the enrage (target quadrants; use the white portal to escape).",
        },
        { text: "Ascend via stairs or 75 Agility jump to the final chamber." },
        { text: "Watch the final cutscene (don't click elsewhere)." },
        { text: "Search the skeleton for a stone tablet; read it." },
        { text: "Inspect the Sun and Moon statues." },
        { text: "Return to the Crypt; talk to Prince Itzla." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "3 Quest Points",
    "Arkan blade",
    "55,000 Thieving experience",
    "25,000 Runecraft + Fletching experience each",
    "55,000 XP combat lamp (any combat skill 40+)",
    "Crypt of Tonali access",
    "Doom of Mokhaiotl boss access",
  ],
};
