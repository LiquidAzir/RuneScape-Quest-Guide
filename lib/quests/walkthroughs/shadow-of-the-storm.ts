import type { QuestWalkthrough } from "../types";

export const shadowOfTheStorm: QuestWalkthrough = {
  startPoint: "Talk to Father Reen south of Al Kharid bank.",
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
        { text: "Talk to Father Reen outside Al Kharid bank." },
        { text: "Travel to Uzer (magic carpet or fairy ring)." },
        { text: "Talk to Father Badden near the ruin entrance." },
        { text: "Dye Silverlight black using a black mushroom." },
        { text: "Grab the Strange implement from the north-west corner." },
        { text: "Talk to Evil Dave in his mother's basement in Edgeville wearing 3 black items + dyed Silverlight." },
      ],
    },
    {
      title: "Demon ritual prep",
      steps: [
        { text: "Talk to Denath through the portal." },
        { text: "Get the demonic sigil mould from Jennifer." },
        { text: "Talk to Matthew at the ruins south of Uzer." },
        { text: "Smelt the demonic sigil at any furnace." },
        { text: "Swap to combat gear." },
        { text: "Talk to the clay golem outside." },
        { text: "Search 4 kilns for a book." },
        { text: "Read the book and take it to Matthew." },
        { text: "Get the incantation from Denath (write it down)." },
        { text: "Chant the incantation to complete the circle." },
        { text: "Take the dropped demonic sigil." },
        { text: "Exit and collect Tanya's sigil." },
        { text: "Tell Evil Dave to return to the throne room." },
      ],
    },
    {
      title: "Rally the troops",
      steps: [
        { text: "Talk to Father Badden near the ruin entrance." },
        { text: "Convince Father Reen to join the ritual." },
        { text: "Talk to the golem at the Uzer ruins (he refuses)." },
        { text: "Use the Strange implement to reprogram the golem." },
        { text: "Talk to the golem again — he goes into the dungeon." },
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
