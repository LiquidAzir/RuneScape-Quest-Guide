import type { QuestWalkthrough } from "../types";

export const learningTheRopes: QuestWalkthrough = {
  startPoint: "Talk to the Quest Guide on Tutorial Island (when you create a new account).",
  itemsRequired: [],
  recommended: [],
  enemies: ["2 Giant rats (level 3) on Tutorial Island"],
  sections: [
    {
      title: "Start your character",
      steps: [
        { text: "Customize your character's appearance using the Character Creator." },
        { text: "Indicate your familiarity with OSRS to unlock the Adventure Paths system." },
      ],
    },
    {
      title: "Tour the instructors",
      steps: [
        { text: "Talk to the Gielinor Guide; open the Settings interface; talk again." },
        {
          text: "Survival Expert (east): catch shrimp with a fishing net, open Skills, chop a tree, light a fire, cook the shrimp.",
        },
        {
          text: "Master Chef (west): mix flour + water for bread dough, cook on a range.",
        },
        { text: "Quest Guide (north-west): open the Quest List interface." },
        {
          text: "Mining Instructor (down ladder): mine tin and copper, smelt to bronze bar, smith bronze dagger.",
        },
        {
          text: "Combat Instructor: equip the dagger, view stats, equip sword + shield, kill 1 giant rat with melee then 1 more with bow.",
        },
        {
          text: "Account Guide (up ladder): use bank booth (25gp inside), use poll booth, learn about Membership/Worlds/Bonds.",
        },
        { text: "Brother Brace: open Prayer interface, learn about activating Prayer." },
        { text: "Magic Instructor: cast Wind Strike on a chicken; cast Lumbridge Home Teleport." },
        { text: "Quest complete — you're now in Lumbridge." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Access to mainland Gielinor",
    "Lumbridge Home Teleport spell",
    "Starting gear package",
    "25 coins in your bank",
  ],
};
