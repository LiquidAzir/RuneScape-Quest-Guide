import type { QuestWalkthrough } from "../types";

export const landOfTheGoblins: QuestWalkthrough = {
  startPoint:
    "Talk to Grubfoot in the Lumbridge Swamp Caves, just outside the Dorgesh-Kaan city gate. Lumbridge Home Teleport, run south into the swamp, climb down the hole at the swamp's western cave entrance (light source required), then follow the tunnel east to the city gates.",
  itemsRequired: [
    "Light source",
    "Toadflax potion (unfinished)",
    "6 goblin mail",
    "Yellow, blue, orange, purple, black dyes",
    "Fishing rod",
    "Raw slimy eel",
    "5 coins",
  ],
  recommended: [
    "Combat 65+",
    "Tinderbox",
    "2+ Dorgesh-Kaan spheres",
    "Dramen / lunar staff for fairy rings",
    "Skills necklace, Combat bracelet",
  ],
  enemies: [
    "Snothead (level 32)",
    "Snailfeet (level 56)",
    "Mosschin (level 88)",
    "Redeyes (level 121)",
    "Strongbones (level 184)",
  ],
  sections: [
    {
      title: "Grubfoot's dream",
      steps: [
        {
          text: "Talk to Grubfoot in the tunnel outside the Dorgesh-Kaan city gate.",
          travel:
            "Lumbridge Home Teleport, run south past the swamp's wheat field to the cave entrance on the west side of Lumbridge Swamp, climb down (you must have a lit light source equipped), then follow the tunnel east/north-east to the big Dorgesh-Kaan doors. A Dorgesh-Kaan sphere teleports you straight into the city if you have one.",
        },
        { text: "Enter the city and head down to Oldak's laboratory on the lower level." },
        { text: "Talk to Zanik beside Oldak about Grubfoot's dream." },
      ],
    },
    {
      title: "Become a high priest",
      steps: [
        {
          text: "Travel to the Goblin Cave north of Ardougne and find the temple entrance blocked by goblin guards.",
          travel:
            "Ardougne Teleport, then run north out of the city along the coast road toward the Fishing Guild — the Goblin Cave entrance is in the hillside just south of the guild. Camelot Teleport and running west also works.",
        },
        { text: "Pick a black mushroom inside the cave if you still need black dye." },
        {
          text: "Talk to the Makeover Mage in his house south-west of Falador to change your appearance.",
          travel:
            "Falador Teleport, leave by the south gate and follow the road south-west toward Port Sarim — his small house sits on the west side of that road, before the Crafting Guild turn-off.",
        },
        { text: "Pick pharmakos berries from the bushes by the Goblin Cave temple entrance and add them to the unfinished toadflax potion." },
      ],
    },
    {
      title: "Temple of Tribes",
      steps: [
        {
          text: "Return to the Goblin Cave temple entrance north of Ardougne.",
          travel:
            "Ardougne Teleport and run north toward the Fishing Guild, or Camelot Teleport and run west — the cave mouth is in the hillside just south of the Fishing Guild wall.",
        },
        { text: "Drink the goblin potion in front of the guards to disguise yourself." },
        { text: "Dye a goblin mail black and wear it." },
        { text: "Search crates inside the temple for additional goblin mails." },
        { text: "Free Zanik using a Dorgesh-Kaan sphere." },
        { text: "Take High Priest Bighead's test." },
        { text: "Pickpocket the priest for a Huzamogaarb key." },
      ],
    },
    {
      title: "Keys to the crypt",
      steps: [
        {
          text: "Talk to Aggie the witch in her hut in Draynor Village.",
          travel:
            "Amulet of glory to Draynor Village, or run west from Lumbridge along the south river road. Aggie's hut is on the west side of the village, north of Ned's house and just west of the market square.",
        },
        {
          text: "Catch whitefish at the Hemenster fishing spot with your fishing rod and raw slimy eel.",
          travel:
            "From Draynor, Camelot Teleport and run west, or Ardougne Teleport and run north. The pond is at Hemenster, immediately east of the Fishing Guild wall.",
        },
        { text: "Return to Aggie in her Draynor Village hut for white goblin mail." },
        { text: "Steal the remaining keys from the priests in the other temple rooms." },
        { text: "Dye your mails yellow, purple, orange and blue accordingly." },
        { text: "Unlock the crypt door with all 6 keys." },
      ],
    },
    {
      title: "High priests of ages past",
      steps: [
        { text: "Enter the crypt and fight the 5 goblin high priests one at a time." },
        { text: "Use the 'Say-name' option on each grave." },
        { text: "Talk to the defeated goblin priests inside the crypt, asking about their predecessors." },
        { text: "For Strongbones (level 184): use Protect from Magic, then ask his location." },
      ],
    },
    {
      title: "Path to Yu'biusk",
      steps: [
        {
          text: "Return to Dorgesh-Kaan and talk to Zanik near Oldak on the lower level.",
          travel:
            "Use a Dorgesh-Kaan sphere, or Lumbridge Home Teleport and run south into the swamp, down the western cave entrance and east along the tunnel to the city gate.",
        },
        {
          text: "Meet Oldak in the Dorgesh-Kaan South Dungeon.",
          travel:
            "Fairy ring AJQ drops you in the dark cave south of Dorgesh-Kaan. Without a fairy ring, walk south through the city's lower level and out into the south tunnels — bring a light source.",
        },
        { text: "Use the machine combination 9-4-1." },
        { text: "Open the strange box in north-west Yu'biusk." },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "2 Quest Points",
    "8,000 Agility + Fishing + Thieving + Herblore experience each",
    "Access to the Goblin Temple",
    "Access to Yu'biusk via fairy ring BLQ",
    "Ability to buy plain of mud spheres + make goblin potions",
  ],
};
