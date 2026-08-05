import type { QuestWalkthrough } from "../types";

export const theCurseOfArrav: QuestWalkthrough = {
  startPoint:
    "Talk to Elias White at the Uzer Oasis in the eastern Kharidian Desert. Fairy ring DLQ lands you at the oasis. No fairy rings: Desert amulet to Nardah (or magic carpet Shantay Pass to Pollnivneach to Nardah) then run north-east across the sand to Uzer — bring waterskins.",
  itemsRequired: [
    "3 Dwellberries",
    "Ring of life",
    "Pickaxe",
    "Crossbow (not love crossbow)",
    "Mith grapple",
    "Insulated boots",
  ],
  recommended: [
    "Combat 85+",
    "Combat gear, prayer + super combat + sharks",
    "Salve amulet",
    "Fairy ring access",
    "Trollheim teleport",
    "Anti-venom or Serpentine helm",
    "Lockpick",
  ],
  enemies: [
    "Golem guard (level 141)",
    "Arrav (level 339) — boss, dodge mechanics",
  ],
  sections: [
    {
      title: "Tomb raiding",
      steps: [
        {
          text: "Talk to Elias White at the Uzer Oasis.",
          travel:
            "Fairy ring DLQ drops you at the oasis. Otherwise Desert amulet to Nardah and run north-east over the dunes to the ruins of Uzer, with waterskins for the desert heat.",
        },
        {
          text: "Enter the Uzer Mastaba, the tomb entrance south of the oasis.",
          travel: "From Elias run a short way south — the mastaba is the stone tomb doorway in the sand between the oasis and the ruins of Uzer.",
        },
        { text: "Search the skeleton for the first mastaba key." },
        { text: "Find the second key north-west of the stone boat." },
        { text: "Disable the traps at the south and north ends." },
        { text: "Defeat the Golem guard, avoiding its prayer-pierce attack." },
        { text: "Cross the coloured tiles (blue/green or yellow/red)." },
        { text: "Retrieve the canopic jar from the burial chamber." },
        { text: "Inspect the southern mural in the Tumeken statue room." },
        { text: "Use 3 dwellberries then a ring of life on the canopic jar." },
      ],
    },
    {
      title: "Fort invasion",
      steps: [
        {
          text: "Travel to Trollheim and make your way north to the Trollweiss Mountain crevasse.",
          travel:
            "Trollheim Teleport (61 Magic) puts you on the mountain top. No spell: Burthorpe games necklace, then run east past Death Plateau and up the Trollheim climbing rocks (requires Death Plateau/Troll Stronghold routes). From Trollheim head north-west over the mountain path towards Trollweiss.",
        },
        { text: "Activate Protect from Melee before you drop into the crevasse." },
        { text: "Descend the crevasse and work through the caves to the Trollweiss summit." },
        { text: "Mine rubble piles to clear cave paths." },
        { text: "Talk to Arrav at the dungeon end." },
        { text: "Search the tapestry for base plans + base key." },
      ],
    },
    {
      title: "Hearty heist",
      steps: [
        {
          text: "Return to Elias at the Uzer Oasis with the base plans and key.",
          travel: "Fairy ring DLQ straight back to the oasis.",
        },
        {
          text: "Travel to Zemouregal's Base north of the Digsite.",
          travel:
            "Digsite pendant to the Digsite, then run north along the river to the hidden entrance. No pendant: Varrock Teleport and run east out of the city gate along the Digsite road, then north.",
        },
        { text: "Work through the dungeon to reach the base kitchen." },
        { text: "Wear insulated boots; enter the sewer via the pipe." },
        { text: "Retrieve decoder strips from the southern room table." },
        { text: "Open the chest for a code key; note the four-letter code." },
        { text: "Input the code using the decoder strips interface." },
        { text: "Climb metal bars with crossbow + mith grapple." },
        { text: "Take Arrav's heart to trigger the boss fight." },
        { text: "Defeat Arrav (level 339) — avoid axe swings + venom pools." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "40,000 Mining + Thieving + Agility experience each",
    "Access to Zemouregal's Fort",
  ],
};
