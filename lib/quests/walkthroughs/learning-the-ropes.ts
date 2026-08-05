import type { QuestWalkthrough } from "../types";

export const learningTheRopes: QuestWalkthrough = {
  startPoint:
    "Talk to the Gielinor Guide in the first house on Tutorial Island — you spawn inside it when you create a new account, so there is no travel involved.",
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
          travel:
            "Leave the Gielinor Guide's house by the east door and follow the marked path south-east down to the fishing pond — the Survival Expert stands on the bank beside it.",
        },
        {
          text: "Master Chef (west): mix flour + water for bread dough, cook on a range.",
          travel:
            "From the pond, cross the wooden bridge to the east and enter the first building you reach — the kitchen with the range. The Master Chef is inside by the range.",
        },
        {
          text: "Quest Guide (north-west): open the Quest List interface.",
          travel:
            "Leave the kitchen by the north door and walk north-east to the next small building — the Quest Guide is inside, standing next to the ladder down.",
        },
        {
          text: "Mining Instructor (down ladder): mine tin and copper, smelt to bronze bar, smith bronze dagger.",
          travel:
            "Climb down the ladder in the Quest Guide's house into the mine. The Mining Instructor is at the bottom, beside the tin and copper rocks.",
        },
        {
          text: "Combat Instructor: equip the dagger, view stats, equip sword + shield, kill 1 giant rat with melee then 1 more with bow.",
          travel:
            "From the furnace/anvil area, go east through the door into the next cavern — the Combat Instructor is beside the gate into the fenced rat pen.",
        },
        {
          text: "Account Guide (up ladder): use bank booth (25gp inside), use poll booth, learn about Membership/Worlds/Bonds.",
          travel:
            "Leave the rat pen and climb the ladder up to the surface on the east side of the island — the bank building with the Account Guide is a few steps north of the ladder.",
        },
        {
          text: "Brother Brace: open Prayer interface, learn about activating Prayer.",
          travel:
            "Exit the bank and follow the path east into the chapel — Brother Brace is standing at the altar inside.",
        },
        {
          text: "Magic Instructor: cast Wind Strike on a chicken; cast Lumbridge Home Teleport.",
          travel:
            "Leave the chapel by the east door and continue to the far eastern tip of the island — the Magic Instructor waits by the chicken pen there.",
        },
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
