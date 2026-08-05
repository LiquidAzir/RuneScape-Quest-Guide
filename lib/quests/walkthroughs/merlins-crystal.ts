import type { QuestWalkthrough } from "../types";

export const merlinsCrystal: QuestWalkthrough = {
  startPoint:
    "Talk to King Arthur at the round table in Camelot Castle. Camelot Teleport (45 Magic) lands at the castle gates; otherwise skills necklace to the Fishing Guild and run east, or run north-west from Ardougne through Seers' Village.",
  itemsRequired: ["Bread", "Tinderbox", "Bucket of wax", "Bat bones"],
  recommended: [
    "Combat 20+",
    "Some food and a weapon for Sir Mordred",
    "Camelot, Falador, Varrock, Taverley, Port Sarim teleports",
    "Stamina/energy potions",
  ],
  enemies: ["Sir Mordred (level 39) — flinch or recoil", "Renegade Knights", "Optional: Giant bat (level 27) for bones"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to King Arthur at the round table in Camelot Castle — pick 'I want to become a knight of the round table!'.",
          travel:
            "Camelot Teleport drops you outside the castle gates; Arthur and the round table are in the big north-western room on the ground floor. No Camelot Teleport: skills necklace to the Fishing Guild then run east, or Ardougne Teleport and run north through Seers' Village.",
        },
        { text: "Talk to Sir Gawain in the castle courtyard about how Merlin got trapped." },
        { text: "Talk to Sir Lancelot on the 1st floor of the castle about Morgan Le Faye's stronghold." },
        {
          text: "Travel to Catherby, use insect repellent on the beehives, then use a bucket on them for a bucket of wax.",
          travel:
            "Camelot Teleport then run east along the road to Catherby (or skills necklace to the Fishing Guild and run east past Seers' Village). The hives are in the fenced field on the northern edge of the village; the insect repellent spawns on the ground beside them.",
        },
        { text: "Hide in the crate east of the Catherby candle-maker's shop and wait for the cutscene." },
      ],
    },
    {
      title: "Inside the keep",
      steps: [
        { text: "You wake inside Keep Le Faye — climb to the top floor, defeating Renegade Knights as needed." },
        { text: "Defeat Sir Mordred (level 39). You can flinch him if low level." },
        { text: "Spare his life when prompted by Morgan Le Faye." },
        { text: "Exit the keep; kill a Giant bat for bat bones if you don't have any." },
      ],
    },
    {
      title: "Get the black candle",
      steps: [
        {
          text: "Return to the candle-maker's shop in Catherby and ask for black candles.",
          travel:
            "Camelot Teleport and run east to Catherby — the candle shop is on the western side of the village, a short walk from the bank.",
        },
        { text: "Receive the black candle." },
      ],
    },
    {
      title: "Get Excalibur",
      steps: [
        {
          text: "Talk to The Lady of the Lake at the lake south-east of Taverley about Excalibur.",
          travel:
            "Falador Teleport, then run west out of Falador's west gate and through the Taverley gate — the lake with the Lady beside it is immediately south-east of Taverley village.",
        },
        {
          text: "Travel to Port Sarim with bread in your inventory.",
          travel:
            "Run south from Falador down the main road, or amulet of glory to Draynor Village and run west along the coast.",
        },
        { text: "Enter Grum's Gold Exchange (the jewellery shop on the east side of Port Sarim) and give the bread to the beggar — she is the Lady in disguise." },
      ],
    },
    {
      title: "Perform the ritual",
      steps: [
        {
          text: "Travel to the Zamorakian temple south-east of Varrock and read the inscription on the chaos altar.",
          travel:
            "Varrock Teleport, then run south-east out of the city — the small temple sits just off the road that runs south toward the Champions' Guild.",
        },
        {
          text: "Return to Camelot Castle with a tinderbox, black candle and bat bones.",
          travel: "Camelot Teleport straight to the castle gates.",
        },
        { text: "Walk to the ritual site north-east of the castle (the red star among 8 columns)." },
        { text: "Light the black candle while standing on the star." },
        { text: "Drop the bat bones on the star." },
        { text: "Speak the magic words: 'Snarthon Candtrick Termanto'." },
      ],
    },
    {
      title: "Free Merlin and finish",
      steps: [
        { text: "Enter Camelot Castle and climb the south-east tower staircase." },
        { text: "Use Excalibur on the crystal trapping Merlin." },
        { text: "Talk to King Arthur at the round table to complete the quest." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "6 Quest Points",
    "Excalibur (special attack temporarily boosts Defence)",
    "Antique lamp (1,000 XP in any skill 20+) and 5 Kudos from Historian Minas",
    "Honorary Knight of the Round Table title",
  ],
};
