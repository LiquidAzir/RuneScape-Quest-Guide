import type { QuestWalkthrough } from "../types";

export const theSlugMenace: QuestWalkthrough = {
  startPoint:
    "Talk to Sir Tiffy Cashien on the benches in Falador Park. Falador Teleport (37 Magic) or a Falador tablet to the central fountain, then run north-east — the park is the walled garden in the north-east of the city and Sir Tiffy is sitting near the middle of it.",
  itemsRequired: [
    "Commorb v2",
    "Swamp paste",
    "Dead sea slug",
    "5+ rune or pure essence",
    "Chisel",
    "Talismans (or Abyss access) for the air, water, earth, fire and mind altars",
  ],
  recommended: [
    "Combat 35+",
    "Stamina/energy potions",
    "Some food + melee weapon",
    "Prayer potions",
    "Ardougne, Falador, Varrock and Al Kharid teleports for the altar run",
  ],
  enemies: ["Slug Prince (level 62) — melee only, drains prayer"],
  sections: [
    {
      title: "Investigate Witchaven",
      steps: [
        {
          text: "Get the Commorb v2 from Sir Tiffy Cashien in Falador Park.",
          travel:
            "Falador Teleport (37 Magic) or a Falador tablet, then run north-east into the walled park; Sir Tiffy is on the benches near its centre.",
        },
        {
          text: "Meet Col. O'Niall on the dock at Witchaven, the fishing village on the east coast of Kandarin.",
          travel:
            "Ardougne Teleport (51 Magic) to East Ardougne market square, then run east out of the city and follow the road east/south-east past the Legends' Guild down to the coast. An Ardougne cloak teleport to the Ardougne Monastery also works — run south-east from there. Col. O'Niall waits on the wooden dock on the village's east shore.",
        },
        {
          text: "Interview Brother Maledict in the Witchaven chapel, Mayor Hobb in his house in the village centre, and Holgart on the shore north of the village.",
        },
        { text: "Report back to Col. O'Niall on the Witchaven dock." },
      ],
    },
    {
      title: "The Shrine",
      steps: [
        {
          text: "Enter the Old Ruins dungeon in the ruined stone building just west of Witchaven.",
          travel:
            "Walk west out of Witchaven village — the ruins are the broken walls on the rise just outside it. Climb down the stairs inside.",
        },
        { text: "Push the false wall in the dungeon to reach the Imposing Door." },
        { text: "Scan the door with the Commorb to transcribe the runic symbols." },
        { text: "Collect a dead sea slug from the shore back at Witchaven." },
        {
          text: "Show the transcription to Jorral at the Outpost for translation.",
          travel:
            "Spirit tree or royal seed pod to the Tree Gnome Stronghold, then leave by the southern gate and run south — the Outpost is the small walled camp on the road between the Stronghold and Ardougne, and Jorral stands outside its hut. Without gnome transport, run north-east out of East Ardougne and follow the road north.",
        },
      ],
    },
    {
      title: "The pages",
      steps: [
        {
          text: "Search the desk in Mayor Hobb's study upstairs in his Witchaven house for a page.",
          travel:
            "Back to Witchaven: Ardougne Teleport and run east past the Legends' Guild to the coast. The mayor's house is the largest building in the village — take the stairs to the study.",
        },
        { text: "Talk to Ezekial Lovecraft in his shop in Witchaven." },
        {
          text: "Sail to the Fishing Platform with Holgart.",
          travel:
            "Holgart stands on the shore just north of Witchaven, beside his boat. Talk to him and choose to travel — he rows you out to the Fishing Platform.",
        },
        { text: "Give the dead sea slug to Bailey on the Fishing Platform." },
        { text: "Use the sea slug glue on the page fragments and solve the jigsaw puzzle." },
      ],
    },
    {
      title: "Open the Imposing Door",
      steps: [
        { text: "Use a chisel on your essence to make blank air, water, fire, earth, and mind runes." },
        {
          text: "Take each blank rune to its matching altar to enchant it: air altar south-west of Falador, water altar in the south-west of Lumbridge Swamp, earth altar east of Varrock just south of the Lumber Yard, fire altar in the desert east of Al Kharid, and mind altar on top of Ice Mountain.",
          travel:
            "Air: Falador Teleport, then run out the south gate and south-west (a skills necklace to the Crafting Guild lands even closer). Water: Lumbridge Home Teleport, then run south-west through the swamp toward the coast. Earth: Varrock Teleport, out the east gate and south-east past the Lumber Yard. Fire: amulet of glory to Al Kharid, then run east into the desert past the arena. Mind: amulet of glory to Edgeville, then run west and climb Ice Mountain. If you have done Enter the Abyss, the Abyss (Mage of Zamorak in level 5 Wilderness north of Edgeville) reaches all five far faster.",
          notes: ["You need the matching talisman for each altar unless you use the Abyss."],
        },
        {
          text: "Use the completed runes on the Imposing Door in the Old Ruins dungeon west of Witchaven.",
          travel:
            "Ardougne Teleport, run east past the Legends' Guild to Witchaven, then west out of the village to the ruins and down the stairs; push the false wall again to reach the door.",
        },
        { text: "Defeat the Slug Prince (level 62) — bring food, he drains your prayer." },
        {
          text: "Report back to Sir Tiffy Cashien in Falador Park.",
          travel: "Falador Teleport (37 Magic) or a Falador tablet, then run north-east into the park.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "3,500 Crafting + Runecraft + Thieving experience each",
    "Proselyte rank — access to Proselyte armour (best Prayer-bonus melee armour at low Defence)",
  ],
};
