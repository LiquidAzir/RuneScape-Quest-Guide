import type { QuestWalkthrough } from "../types";

export const wanted: QuestWalkthrough = {
  startPoint:
    "Talk to Sir Tiffy Cashien on the bench in Falador Park. Cast Falador Teleport (or use an explorer's ring / ring of wealth to Falador) and run north-east — the park is the walled green in the north-east of the city, just east of the White Knights' Castle.",
  itemsRequired: [
    "10,000 coins (or Law rune + Enchanted gem + Molten glass to craft the Commorb)",
    "20 unnoted rune or pure essence (all the same type)",
    "Light source",
  ],
  recommended: ["Combat 15+", "Some food + armour", "Stamina/energy potions"],
  enemies: ["Black Knight (level 32-33)", "Solus Dellagar"],
  sections: [
    {
      title: "Become a recruit",
      steps: [
        {
          text: "Talk to Sir Tiffy Cashien on his bench in Falador Park.",
          travel:
            "Falador Teleport, then run north-east through the city to the walled park. Sir Tiffy sits on the bench in the middle of it. Without runes, run north from Port Sarim or west from Draynor Village to Falador's south gate.",
        },
        {
          text: "Talk to Sir Amik Varze on the 2nd floor of the White Knights' Castle.",
          travel:
            "From Falador Park run west to the White Knights' Castle (the huge fortress that dominates west Falador). Go in the front doors, then climb the staircases twice to the 2nd floor — Sir Amik is in the room at the top.",
        },
        { text: "Return to Sir Tiffy in Falador Park, then back to Sir Amik in the castle, then to Tiffy again." },
        { text: "Buy the Commorb from Sir Tiffy for 10,000 coins, or craft one with a law rune, an enchanted gem and molten glass." },
        { text: "Use the Commorb's contact option to receive your assignment." },
      ],
    },
    {
      title: "Daquarius",
      steps: [
        {
          text: "Travel to Taverley Dungeon and make your way to the Black Knights' Base.",
          travel:
            "Falador Teleport, run west out of Falador's west gate to Taverley, then south to the ladder down into Taverley Dungeon (it is in the fenced patch on the village's south side). Inside, follow the main tunnel west past the chaos druids and go through the guarded door into the Black Knights' Base.",
        },
        { text: "Talk to Lord Daquarius in the Black Knights' base inside Taverley Dungeon." },
        { text: "Defeat one of the Black Knights in the base." },
        { text: "Finish the dialogue with Lord Daquarius." },
      ],
    },
    {
      title: "Mage of Zamorak",
      steps: [
        {
          text: "Find the Mage of Zamorak at the Chaos altar in the south-east corner of Varrock.",
          travel:
            "Varrock Teleport into the square, then run south and east to the city's south-east corner — the chaos altar is inside the small temple by the wall there. Bring your 20 unnoted rune or pure essence with you.",
        },
        { text: "Hand over 20 rune or pure essence (all the same type)." },
      ],
    },
    {
      title: "Hunt Solus Dellagar",
      steps: [
        {
          text: "Travel to Canifis — Savant calls you on the Commorb as you arrive.",
          travel:
            "Fairy ring ALP drops you in the Haunted Woods east of Canifis — run west into town. Otherwise run east from Varrock along the road to the Paterdomus temple, cross the Salve bridge and follow the road east into Canifis. An Ectophial to Port Phasmatys and a run west also works.",
        },
        { text: "Scan with the Commorb near the Canifis bank to reveal Solus's location." },
        { text: "Follow the item clues Savant gives you to 7 locations around the world, scanning the Commorb at each." },
        { text: "Keep tracking Solus until you have collected 20 noted pure essence from him." },
        {
          text: "Travel to the Rune Essence mine via a teleporting mage.",
          travel:
            "Any essence-teleport mage works: Aubury behind his rune shop in south-east Varrock is the closest to most teleports; Sedridor in the Wizards' Tower basement south of Draynor, Wizard Cromperty in north-east Ardougne, Wizard Distentor in the Yanille magic guild and Brimstail in the Tree Gnome Stronghold all send you to the same mine.",
        },
        { text: "Defeat Solus Dellagar in the Rune Essence mine." },
        {
          text: "Return to Sir Amik Varze on the 2nd floor of the White Knights' Castle in Falador to report.",
          travel:
            "Mine exit puts you back where you teleported from. Falador Teleport, then run west to the White Knights' Castle and climb two flights of stairs.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "5,000 Slayer experience",
    "Access to the White Knights' armoury (white equipment)",
  ],
};
