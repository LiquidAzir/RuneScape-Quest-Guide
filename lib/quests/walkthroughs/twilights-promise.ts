import type { QuestWalkthrough } from "../types";

export const twilightsPromise: QuestWalkthrough = {
  startPoint:
    "Talk to either Ennius Tullus or Furia Tullus (the Varlamore guards in red and gold) in the plaza in front of the Sunrise Palace in central Civitas illa Fortis. Rub a Pendant of Ates (kept from Children of the Sun) to land in the city; without one, travel overland through the Avium Savannah east of Mount Quidamortem and enter the city by its western gate.",
  itemsRequired: [
    "Items for two different combat classes (or a poisoned weapon for the slow path through the Colosseum trial)",
  ],
  recommended: ["Combat 40+", "Stamina potions", "Some food", "Pendant of Ates charges"],
  enemies: [
    "Knight of Varlamore (level 81) — Mezan's Colosseum trial",
    "8 Cultists (level 34) — final fight at Ralos' Rise",
  ],
  sections: [
    {
      title: "Friends like these",
      steps: [
        {
          text: "Travel to Civitas illa Fortis and walk to the Sunrise Palace in the city centre.",
          travel:
            "Rub a Pendant of Ates (from Children of the Sun) and choose Civitas illa Fortis — it drops you in the city. Without a pendant, take the overland route: get to Mount Quidamortem in south-west Kourend (Xeric's talisman to Xeric's Glade, then run south-west), follow the pass east into the Avium Savannah and keep going east to the city's west gate. The Sunrise Palace is the huge stepped building in the middle of the city, impossible to miss.",
        },
        {
          text: "Talk to Ennius Tullus or Furia Tullus standing in the plaza in front of the palace and answer Yes to start.",
        },
        {
          text: "Talk to Metzli at the entrance of the temple south of the Sunrise Palace plaza.",
          travel: "From the palace steps walk south across the plaza — the temple is the columned building on its south side.",
        },
        {
          text: "Descend the trapdoor into the crypt below the temple.",
        },
        {
          text: "In the crypt, talk to Prince Itzla and Servius (huddled beside a stone tomb).",
        },
        {
          text: "Climb back up and talk to Ennius or Furia outside the Sunrise Palace to receive the Varlamore crest.",
        },
      ],
    },
    {
      title: "Knight tasks (6 around Civitas illa Fortis)",
      steps: [
        {
          text: "Find the 6 knights scattered around the city — each gives a small task. Each is marked on the minimap with the Varlamore crest icon.",
        },
        {
          text: "Arrun and Claudia (south bazaar): pickpocket an amulet from a wandering citizen in the bazaar.",
          travel: "From the Sunrise Palace plaza head south-west into the open-air bazaar with the market stalls.",
        },
        {
          text: "Nel (harbour district): search the correct cargo crate at the south harbour for the contraband.",
          travel: "From the bazaar keep going south-west and downhill to the waterfront in the city's south-west corner.",
        },
        {
          text: "Mezan (Fortis Colosseum): fight the Colosseum entry trial and swap combat styles between rounds when prompted.",
          travel: "From the harbour run east and then north-east — the Colosseum is the huge circular arena on the city's south-east side.",
        },
        {
          text: "Velam and Azali (central plaza): lead the knight east to the fountain just east of the central pub.",
          travel: "Head back north-west to the main plaza in front of the Sunrise Palace.",
        },
        {
          text: "Search the chest inside the Kualti Headquarters — the cult-marked building west of the bazaar — for the incriminating letter.",
          travel: "From the bazaar walk west; the headquarters is the shuttered building with the cult symbol over its door.",
        },
        {
          text: "Return to Ennius or Furia in the Sunrise Palace plaza with all the evidence.",
        },
      ],
    },
    {
      title: "The Twilight Emissaries",
      steps: [
        {
          text: "Talk to Regulus Cento at his Quetzal Transport System stand south-east of the Sunrise Palace plaza.",
          travel: "From the palace steps walk south-east; Regulus and his giant quetzal Renu are on the raised landing platform.",
        },
        {
          text: "Feed Renu the quetzal the food Regulus asks for.",
        },
        {
          text: "Ride the quetzal to Ralos' Rise.",
          travel: "Talk to Regulus and pick Ralos' Rise from the quetzal destination list — the bird flies you straight to the temple plateau.",
        },
        {
          text: "Inside the Ralos' Rise temple, talk to Prince Itzla.",
        },
        {
          text: "Walk to the smaller building north of the temple and talk to Metzli inside.",
        },
        {
          text: "Defeat the 8 cultists (level 34) that ambush you outside.",
        },
        {
          text: "Watch the final cutscene.",
        },
        { text: "Quest complete." },
      ],
    },
  ],
  rewards: [
    "1 Quest Point",
    "Civitas illa Fortis Teleport spell unlock (standard spellbook)",
    "Quetzal Transport System access (fast travel between Varlamore cities)",
    "3,000 Thieving experience",
  ],
};
