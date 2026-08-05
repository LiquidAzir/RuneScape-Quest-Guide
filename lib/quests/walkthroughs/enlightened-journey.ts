import type { QuestWalkthrough } from "../types";

export const enlightenedJourney: QuestWalkthrough = {
  startPoint:
    "Talk to Auguste at the balloon site on Entrana, just north of the Herblore shop. Getting there: bank every weapon and piece of armour first, then take the monk's boat from the northernmost pier in Port Sarim (Falador Teleport and run south down the road, or Amulet of glory to Draynor Village and run west). Auguste is the man in the flight cap standing by the half-built balloon in the south of the island.",
  itemsRequired: [
    "Trip 1: 3 papyrus, ball of wool, unlit candle, sack of potatoes, yellow dye, red dye, 10 silk, 8 empty sacks, bowl",
    "Trip 2: 10 logs, tinderbox, 12 willow branches",
  ],
  recommended: [
    "Additional noted logs to unlock balloon routes after the quest",
    "Ring of the elements / Amulet of glory / Minigame teleport",
  ],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Sail to Entrana from the Port Sarim monks' pier.",
          travel:
            "Bank all weapons and armour — the monks search you and refuse anything combat-related. Falador Teleport then run south down the road into Port Sarim (or Amulet of glory to Draynor and run west along the coast). The Monk of Entrana waits on the northernmost pier, north of the fishing shop; talk to him and choose to travel.",
        },
        {
          text: "Talk to Auguste at the Entrana balloon site three times, picking the quest dialogue options each time.",
          travel:
            "From the Entrana dock run south-west across the island; Auguste stands by the balloon basket just north of the Herblore shop, south-west of the law altar path.",
        },
        { text: "Use papyrus on a ball of wool." },
        { text: "Use an unlit candle on the balloon structure." },
        {
          text: "Fill 8 empty sacks with sand from the sand pit just south of Auguste.",
        },
        {
          text: "Give Auguste: yellow dye, red dye, 10 silk, bowl, 8 sandbags.",
        },
      ],
    },
    {
      title: "Build the balloon",
      steps: [
        {
          text: "Leave Entrana to gather a tinderbox, 10 logs and 12 willow branches, then sail back.",
          travel:
            "Talk to the monk on the Entrana dock to sail back to Port Sarim. Willow branches come from cutting a grown willow tree in a Farming tree patch (or buy them), so plan the round trip; bank your gear again before the return boat.",
        },
        { text: "Attach the willow branches to the balloon frame." },
        { text: "Talk to Auguste at the balloon site to proceed." },
      ],
    },
    {
      title: "Pilot the balloon",
      steps: [
        {
          text: "Screen 1: Drop sandbag, burn log, relax 9x, pull red rope, relax 2x, pull brown rope, relax 5x.",
        },
        {
          text: "Screen 2: Burn log, relax, burn log, relax 10x, burn log, relax 5x.",
        },
        {
          text: "Screen 3: Relax 7x, pull red rope, pull brown rope, relax 3x, burn log, relax 4x, pull brown rope.",
        },
      ],
    },
    {
      title: "Finish the quest",
      steps: [
        {
          text: "Talk to Auguste at the Entrana balloon site to finish.",
          travel:
            "If the flight left you elsewhere, sail back from Port Sarim's northernmost pier (weapons and armour banked again) and run south-west to the balloon just north of the Herblore shop.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "2,000 Crafting experience",
    "3,000 Farming experience",
    "1,500 Woodcutting experience",
    "4,000 Firemaking experience",
    "Bomber jacket and cap",
    "Access to the balloon transport network (Castle Wars, Crafting Guild, Varrock, Grand Tree, Taverley)",
  ],
};
