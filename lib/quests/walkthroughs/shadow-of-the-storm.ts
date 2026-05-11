import type { QuestWalkthrough } from "../types";

export const shadowOfTheStorm: QuestWalkthrough = {
  startPoint:
    "Talk to Father Reen at the small chapel just south of the Al Kharid bank (the priest stands by the small altar inside the chapel south of the central market). Requires Demon Slayer + Shadow of the Storm prerequisites.",
  itemsRequired: [
    "Silverlight (from Demon Slayer)",
    "Strange implement (in-quest)",
    "3+ pieces of black clothing",
    "Black dye",
    "Silver bar",
    "Desert access (Shantay pass / amulet)",
  ],
  recommended: [
    "Combat 50+",
    "Amulet of glory + Ring of dueling",
    "Some food + armour for Agrith-Naar",
    "2 Waterskins",
  ],
  enemies: ["Agrith-Naar (level 100) — must finish with Silverlight"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        {
          text: "Talk to Father Reen at the small chapel just south of the Al Kharid bank.",
        },
        {
          text: "Travel to Uzer (magic carpet from Shantay Pass to Uzer, fairy ring DLQ + run east, or run east through the desert from Pollnivneach).",
        },
        {
          text: "At the Uzer ruins (the half-buried desert ruin south of the Uzer oasis), talk to Father Badden standing near the entrance.",
        },
        {
          text: "Pick a black mushroom from inside the Uzer ruins (the dark fungus growing on the walls). Use it on Silverlight to dye Silverlight black.",
        },
        {
          text: "Grab the Strange implement from the north-west corner of the Uzer ruins (small wooden tool on the floor).",
        },
        {
          text: "Travel to Edgeville and find Doris's house (north-east of the bank). Climb down the trapdoor in her basement and talk to Evil Dave wearing 3+ pieces of black clothing AND the black-dyed Silverlight.",
        },
      ],
    },
    {
      title: "Demon ritual prep",
      steps: [
        {
          text: "Inside Evil Dave's basement, Denath the demon appears in a portal — talk to Denath through it.",
        },
        {
          text: "Get the demonic sigil mould from Jennifer (Evil Dave's friend, also in the basement).",
        },
        {
          text: "Travel back to the Uzer ruins; talk to Matthew (the demonologist) inside the ruins.",
        },
        {
          text: "Smelt the silver bar in the demonic sigil mould at any furnace (Al Kharid is closest) to make a demonic sigil.",
        },
        {
          text: "Bank for combat — best melee gear + food.",
        },
        {
          text: "Return to the Uzer ruins and talk to the clay golem standing just outside.",
        },
        {
          text: "Search the 4 kilns inside the Uzer ruins until one drops a book.",
        },
        {
          text: "Read the book, then take it to Matthew inside the ruins.",
        },
        {
          text: "Travel back to Evil Dave's basement and talk to Denath through the portal — get the incantation (write it down — random per player).",
        },
        {
          text: "Chant the incantation in front of the summoning circle in Evil Dave's basement.",
        },
        {
          text: "Take the demonic sigil that drops on the floor.",
        },
        {
          text: "Exit Evil Dave's basement and travel back to the Uzer ruins; collect Tanya's sigil from the ruins.",
        },
        {
          text: "Tell Evil Dave (in his Edgeville basement) to return to the throne room of the Uzer ruins.",
        },
      ],
    },
    {
      title: "Rally the troops",
      steps: [
        {
          text: "Talk to Father Badden at the entrance of the Uzer ruins.",
        },
        {
          text: "Travel to Al Kharid; convince Father Reen at the Al Kharid chapel south of the bank to join the ritual.",
        },
        {
          text: "Return to the Uzer ruins and talk to the clay golem outside — he refuses to enter.",
        },
        {
          text: "Use the Strange implement on the clay golem to reprogram him.",
        },
        {
          text: "Talk to the golem again — he agrees and walks into the ruins.",
        },
      ],
    },
    {
      title: "Defeat Agrith-Naar",
      steps: [
        { text: "Talk to Matthew at the ruins south of Uzer to start the incantation." },
        { text: "Recite the incantation backwards." },
        { text: "Defeat Agrith-Naar (level 100); finish with Silverlight equipped." },
        { text: "Choose your reward." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "10,000 XP in any combat skill (your choice except Prayer)",
    "Silverlight transforms into Darklight (much stronger demon-slayer)",
    "6 cut gems if throne is mined",
  ],
};
