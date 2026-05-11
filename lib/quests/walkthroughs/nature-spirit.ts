import type { QuestWalkthrough } from "../types";

export const natureSpirit: QuestWalkthrough = {
  startPoint: "Talk to Drezel in the basement of the Paterdomus Temple (after Priest in Peril).",
  itemsRequired: [
    "Silver sickle",
    "Ghostspeak amulet",
    "At least 6 free inventory slots",
  ],
  recommended: [
    "Combat 20+",
    "Some food",
    "Stamina/energy potion (the swamp drains run energy)",
    "Salve Graveyard teleport for return trips",
  ],
  enemies: ["3 Ghasts (level 30) — must be made attackable with the druid pouch"],
  sections: [
    {
      title: "Start the quest",
      steps: [
        { text: "Talk to Drezel in the Paterdomus Temple basement — he gives you meat and apple pies for the journey." },
        { text: "Travel south through the Mort Myre swamp to the Nature Grotto in the north-west of Mort'ton." },
        { text: "Equip your ghostspeak amulet." },
        { text: "Talk to Filliman Tarlock at the Nature Grotto when he appears." },
      ],
    },
    {
      title: "Help Filliman remember himself",
      steps: [
        { text: "Take the washing bowl from the bench, then take the mirror underneath it." },
        { text: "Use the mirror on Filliman so he can see himself." },
        { text: "Search the grotto's tree for Filliman's journal." },
        { text: "Use the journal on Filliman — he gives you a Druidic spell card." },
      ],
    },
    {
      title: "Solve the stone puzzle",
      steps: [
        { text: "Go back to Drezel and ask him to bless you again (you must be blessed to use druid magic)." },
        { text: "Cast the Druidic spell on a rotting log in the swamp." },
        { text: "Pick the mushroom that grows on the log and bring it back to the grotto camp." },
        { text: "Make sure Filliman is standing in the centre of the three stones." },
        { text: "Use the mushroom on the light-brown stone." },
        { text: "Use the spent spell card on the grey stone." },
        { text: "Stand on the orange stone and tell Filliman you've solved the puzzle." },
      ],
    },
    {
      title: "Become Nature Spirit",
      steps: [
        { text: "Climb down the hole that opens under the tree." },
        { text: "Search the grotto in the centre of the cave." },
        { text: "Give Filliman your silver sickle so he can become the Nature Spirit." },
        { text: "He returns it as a Silver sickle (b) and gives you a druid pouch." },
      ],
    },
    {
      title: "Defeat the ghasts",
      steps: [
        {
          text: "In the swamp, find rotting plants and use the sickle's Bloom action to revive them.",
        },
        { text: "Pick the revived plants and use them on the druid pouch to fill it." },
        { text: "Use the filled druid pouch on a Ghast to make it attackable, then kill it." },
        { text: "Repeat until 3 Ghasts are dead." },
        { text: "Return to the Nature Grotto and click on it to finish." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "3,000 Crafting experience",
    "2,000 Defence experience",
    "2,000 Hitpoints experience",
    "Access to the Nature altar via the Nature Grotto",
    "Druid pouch and silver sickle (b) for fighting ghasts",
  ],
};
