import type { QuestWalkthrough } from "../types";

export const heroesQuest: QuestWalkthrough = {
  startPoint:
    "Talk to Achietties by the entrance to the Heroes' Guild, between Taverley and Burthorpe. Games necklace or combat bracelet to Burthorpe/Warriors' Guild and run south-west, or Falador teleport and run west through the Taverley gate then north. You need 55 QP and membership of the Phoenix or Black Arm Gang.",
  itemsRequired: [
    "Fishing rod",
    "Fishing bait",
    "Harralander potion (unfinished)",
    "Pickaxe",
    "Hammer",
    "Combat gear and food for Ice Queen",
    "If Black Arm: full black armour set",
    "If Phoenix: ranged or magic for the Phoenix Mansion run",
  ],
  recommended: [
    "Combat 50+",
    "Anti-dragon shield + antifire (if running through blue dragons in Taverley)",
    "Stamina potions",
    "Skills necklace, Combat bracelet, Camelot/Brimhaven teleports",
    "A partner from the opposite gang to swap items with — coordinate before starting",
  ],
  enemies: [
    "Ice Queen (level 111) — boss",
    "Entrana firebird (level 2)",
    "Grip (level 22) — Phoenix Gang only",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Achietties outside the Heroes' Guild between Taverley and Burthorpe.",
          travel:
            "Games necklace to Burthorpe (or combat bracelet to the Warriors' Guild) then run south-west; the guild is the round stone building at the north end of Taverley. Otherwise Falador teleport, run west out of the west gate through the Taverley gate, then north through the village.",
        },
        { text: "Choose either the Phoenix or Black Arm Gang (whichever you joined during Shield of Arrav)." },
        { text: "She tells you to bring her a lava eel, a fire feather, and a thieves' armband." },
      ],
    },
    {
      title: "The lava eel",
      steps: [
        {
          text: "Talk to Gerrant in the Fishing Shop in Port Sarim — he gives you blamish snail slime and the lava eel hint.",
          travel:
            "Falador teleport, then run south out of Falador's south gate down the road to Port Sarim; the fishing shop is on the east side of the main street near the docks. Alternatively take the Draynor route west from Lumbridge, or a charter ship to Port Sarim.",
        },
        { text: "Make blamish oil: use the blamish snail slime on a harralander potion (unfinished)." },
        { text: "Use the blamish oil on a fishing rod to make an oily fishing rod." },
        {
          text: "Go into Taverley Dungeon and run to the southernmost lava pool, past the blue dragons.",
          travel:
            "From the Heroes' Guild run south-west through Taverley to the dungeon ladder just outside the village fence, climb down, then follow the passage south-west past the poison spiders. Reach the blue dragon area either with a dusty key on the gate or by squeezing through the pipe (70 Agility); the lava pool is at the far south of that area.",
          notes: ["Bring an anti-dragon shield — the blue dragons breathe on you the whole way through."],
        },
        { text: "Fish a lava eel at the lava pool with the oily rod and fishing bait (53 Fishing)." },
      ],
    },
    {
      title: "The thieves' armband",
      steps: [
        { text: "Find a partner from the opposite gang (the candlestick objective requires teamwork)." },
        {
          text: "Black Arm path: speak to Katrine in the Black Arm Gang headquarters in south-west Varrock, then wear full black armour to enter the Phoenix mansion in Brimhaven and steal the candlestick from Trobert.",
          travel:
            "Varrock teleport, then run south-west through the city to the gang's building near the south-west corner. For Brimhaven: talk to Captain Barnaby at the Ardougne docks in the north-west of East Ardougne (30 coins) or take a charter ship; the mansion is the large house in north-west Brimhaven, directly south of the Agility Arena entrance.",
        },
        {
          text: "Phoenix path: speak to Straven in the Phoenix Gang hideout basement in southern Varrock, then travel to the Brimhaven mansion and pickpocket the candlestick from Grip while your partner keeps him busy.",
          travel:
            "Varrock teleport and run south to the gang's building, then climb down into the basement hideout. For Brimhaven: Captain Barnaby's boat from the Ardougne docks (30 coins) or a charter ship, then run north-west to the mansion south of the Agility Arena.",
        },
        { text: "Trade candlesticks with your partner — each gang needs the OPPOSITE gang's candlestick to clear the quest." },
        { text: "Return your candlestick to Katrine (Black Arm) or Straven (Phoenix) in Varrock for the thieves' armband." },
      ],
    },
    {
      title: "The fire feather (and ice gloves)",
      steps: [
        {
          text: "Mine the rockslide on the northern part of White Wolf Mountain (50 Mining) to open the way into the Ice Queen's lair.",
          travel:
            "From Taverley or Burthorpe head west into the White Wolf Mountain pass and climb to the northern side of the mountain — the gnome glider to Sindarpos lands on top of the mountain if you have it unlocked.",
        },
        { text: "Follow the tunnels down to the Ice Queen and defeat her (level 111)." },
        { text: "Pick up the ice gloves she drops." },
        {
          text: "Bank all weapons and armour, then sail to Entrana wearing the ice gloves.",
          travel:
            "Falador teleport and run south to Port Sarim, then talk to the monk at the northernmost dock to sail to Entrana. No weapons or armour of any kind are allowed on the boat — the ice gloves are fine.",
        },
        { text: "Kill the firebird near the Law altar in the north-east of Entrana and pick up the fire feather (the ice gloves stop it burning you)." },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Return to Achietties outside the Heroes' Guild with the lava eel, fire feather, and thieves' armband.",
          travel:
            "Take the monk's boat back to Port Sarim, then Falador teleport and run west through the Taverley gate and north to the guild — or games necklace to Burthorpe and run south-west.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to the Heroes' Guild (and the Dragon battleaxe)",
    "Big experience dump across many skills (~3,000 in each combat skill, 2,725 Fishing, 2,825 Cooking, 2,575 Mining, 2,275 Smithing, etc.)",
    "Use of the Fountain of Heroes for charging amulets of glory",
  ],
};
