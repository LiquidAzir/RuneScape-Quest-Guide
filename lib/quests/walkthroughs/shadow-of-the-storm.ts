import type { QuestWalkthrough } from "../types";

export const shadowOfTheStorm: QuestWalkthrough = {
  startPoint:
    "Talk to Father Reen in the small chapel just south of the Al Kharid bank. Amulet of glory to Al Kharid drops you beside the bank and palace — the chapel is a few steps south. Requires Demon Slayer and The Golem.",
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
          text: "Talk to Father Reen in the small chapel just south of the Al Kharid bank.",
          travel:
            "Amulet of glory to Al Kharid lands you between the bank and the palace gates; the chapel is the small building just south. No glory: ring of dueling to the Emir's Arena and run west into town, or run east from Lumbridge over the toll gate (10gp).",
        },
        {
          text: "Travel to the Uzer ruins in the eastern Kharidian Desert.",
          travel:
            "Magic carpet from the Shantay Pass to Pollnivneach, then a second carpet from Pollnivneach to Uzer (a few hundred coins total). Fairy ring DLQ then a run east also works. Bring waterskins — the desert drains run energy and damages you.",
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
          text: "Travel to Edgeville and climb down the trapdoor in Doris's house to talk to Evil Dave, wearing 3+ pieces of black clothing AND carrying the black-dyed Silverlight.",
          travel:
            "Amulet of glory to Edgeville lands you at the bank; Doris's house is just north-east of it. Go inside and climb down the trapdoor into the basement. No glory: Varrock Teleport and run west along the road out of the west gate.",
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
          travel: "Shantay Pass magic carpet to Pollnivneach, then the Uzer carpet, and run south to the ruins.",
        },
        {
          text: "Smelt the silver bar in the demonic sigil mould at a furnace to make a demonic sigil.",
          travel: "The nearest furnace is in Al Kharid — amulet of glory to Al Kharid, then run a short way west from the bank to the open-fronted furnace building.",
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
          text: "Travel back to Evil Dave's basement in Edgeville and talk to Denath through the portal — get the incantation (write it down, it is random per player).",
          travel: "Amulet of glory to Edgeville, into Doris's house north-east of the bank, and down the trapdoor.",
        },
        {
          text: "Chant the incantation in front of the summoning circle in Evil Dave's basement.",
        },
        {
          text: "Take the demonic sigil that drops on the floor.",
        },
        {
          text: "Travel back to the Uzer ruins and collect Tanya's sigil from the ruins.",
          travel: "Shantay Pass carpet to Pollnivneach, carpet on to Uzer, then run south to the ruins.",
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
          text: "Convince Father Reen at the Al Kharid chapel south of the bank to join the ritual.",
          travel: "Amulet of glory to Al Kharid; the chapel is just south of the bank where you started the quest.",
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
