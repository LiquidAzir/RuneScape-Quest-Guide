import type { QuestWalkthrough } from "../types";

export const rfdMountainDwarf: QuestWalkthrough = {
  startPoint:
    "Inspect the frozen Mountain Dwarf in the Lumbridge Castle dining room. Lumbridge Home Teleport to the castle courtyard, in through the north door to the kitchen (north-west room, ground floor), down the cellar staircase and through the dining-room doors.",
  itemsRequired: [
    "Bucket of milk",
    "Pot of flour",
    "Egg",
    "Bowl of water",
    "4 Asgarnian ales",
    "306 coins (200 for Emily, 100 for ales conversion)",
    "Ice gloves (or alternative — see below)",
  ],
  recommended: [
    "Falador, Lumbridge, Taverley teleports",
    "Telekinetic Grab runes (alternative to ice gloves)",
  ],
  enemies: ["Icefiend (level 13) — only if you don't have ice gloves"],
  sections: [
    {
      title: "Start and learn the recipe",
      steps: [
        {
          text: "Inspect the frozen dwarf in the Lumbridge Castle dining room to start.",
          travel:
            "Lumbridge Home Teleport, into the castle by the north door, left into the kitchen, down the cellar stairs and through the dining-room doors. The Culinaromancer's Chest here sells the milk, flour and egg, and there is a sink and bowl in the kitchen above for the bowl of water.",
        },
        {
          text: "Travel to the Rising Sun Inn in Falador and talk to a barmaid about dwarves and ale.",
          travel:
            "Falador Teleport lands you in Falador square between the two banks; run west and the Rising Sun Inn is the pub sitting right beside the west bank. No teleport: enter Falador by the east gate from the Barbarian Village road, or by the south gate from Port Sarim, and head north-west through the park.",
        },
        {
          text: "Pay Emily or Kaylee 200 coins to learn the Asgoldian ale recipe.",
          notes: [
            "Cheaper options: 150 coins wearing an activated ring of Charos (free if you pick the persuade option), 100 coins with a plain pizza, or 50 coins with a chocolate bar.",
          ],
        },
        {
          text: "Buy 4 Asgarnian ales at the bar and use a coin on each to convert them into Asgoldian ale.",
          notes: [
            "Bring 2 spare ales — Rohak sobers up if you're slow handing them over.",
            "Free alternative: pick up Asgarnian ales in The Toad and Chicken pub in Burthorpe.",
          ],
        },
      ],
    },
    {
      title: "Make the rock cake",
      steps: [
        {
          text: "Travel to the dwarves' bar in the White Wolf Tunnel beneath White Wolf Mountain.",
          travel:
            "Camelot Teleport, then run east from the castle along the foot of the mountain to the tunnel's west entrance, the cave mouth north-east of Catherby. From the Asgarnia side, a games necklace to Burthorpe then a run south-west through Taverley reaches the east entrance. The tunnel only opens after Fishing Contest; if you have started The Giant Dwarf you can also ride the Keldagrim minecart straight to the tunnel's station.",
        },
        {
          text: "Give Asgoldian ales to Rohak in the tunnel bar until he agrees to make a Dwarven rock cake.",
          notes: [
            "Hand them over quickly — if he sobers up you have to fetch more Asgoldian ale.",
            "He then charges 100 coins and wants the bucket of milk, egg, pot of flour, and bowl of water.",
          ],
        },
        { text: "Wait — the cake comes out hot, sitting on the table beside you." },
        {
          text: "Pick the cake up using ice gloves to cool it instantly.",
          notes: [
            "Picking it up bare-handed damages you and drops the cake; ordinary gloves are safe but don't cool it.",
            "No ice gloves? Carry the cake and kill an Icefiend, or bank it and wait several hours.",
          ],
        },
        {
          text: "No ice gloves: kill a level 13 Icefiend on Ice Mountain with the rock cake in your inventory.",
          travel:
            "Combat bracelet to the Edgeville Monastery, then run west up the slope onto Ice Mountain. No bracelet: Falador Teleport and run east out of the north-east gate along the road, or skull sceptre to Barbarian Village and run north-west.",
        },
      ],
    },
    {
      title: "Free the Mountain Dwarf",
      steps: [
        {
          text: "Return to the frozen dwarf in the Lumbridge Castle dining room and give him the cool dwarven rock cake.",
          travel:
            "Lumbridge Home Teleport to the castle courtyard, in the north door, left into the kitchen, down the cellar stairs and through the dining-room doors.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "1,000 Cooking experience",
    "1,000 Slayer experience",
    "Mountain Dwarf freed; Culinaromancer's Chest expanded",
    "Permanent ability to buy Dwarven rock cakes from Rohak",
  ],
};
