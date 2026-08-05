// Audits the guide's core promise: if a step sends you somewhere you have not
// been in this quest, it should say how to get there.
//
// A step is only flagged when it BOTH uses a movement verb AND names a place or
// NPC that no earlier step in the same quest mentioned. Returning to somewhere
// you have already been, or acting in a room you are standing in, is fine
// without a route - so those don't count as gaps.
//
// Run with: node scripts/travel-coverage.mjs [--list]
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const walkthroughDir = path.join(process.cwd(), "lib", "quests", "walkthroughs");

const MOVEMENT =
  /\b(travel|go to|head|run|walk|return|enter|board|sail|teleport|visit|talk to|speak to|climb (?:down|up|the))\b/i;

// Capitalised words that start a sentence or are ordinary vocabulary, not names.
const NOT_A_NAME = new Set(
  ("a after again all and any as at back be before bring but buy by can climb collect defeat do drop " +
    "enter equip exit find finish follow for from get give go grab have head he her his how if in into is " +
    "it keep kill leave make no not of on once open or pick prepare put read repeat report return run " +
    "search she so speak start take talk tell that the their them then there they this to travel try up " +
    "use wait walk when which while with you your").split(" "),
);

function properNouns(text) {
  const names = new Set();
  for (const sentence of text.split(/(?<=[.!?:;])\s+/)) {
    // Skip each sentence's first word: these steps are imperatives, so it's a verb.
    for (const raw of sentence.trim().split(/\s+/).slice(1)) {
      const word = raw.replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, "");
      if (word.length < 3) continue;
      if (!/^[A-Z][A-Za-z'-]*$/.test(word)) continue;
      if (NOT_A_NAME.has(word.toLowerCase())) continue;
      names.add(word.toLowerCase());
    }
  }
  return names;
}

/** Splits a walkthrough file into per-step { text, travel } pairs. */
function readSteps(source) {
  const steps = [];
  const parts = source.split(/\n\s{8,}\{\s*\n?\s*text:/);
  for (const part of parts.slice(1)) {
    const body = part.split(/\n\s{8,}\},?\s*\n\s{8,}\{/)[0];
    const text = body
      .match(/^\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')/)
      ?.slice(1)
      .find(Boolean);
    if (!text) continue;
    steps.push({
      text: text.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\s+/g, " "),
      hasTravel: /\n\s*travel:/.test(body),
    });
  }
  return steps;
}

const files = fs
  .readdirSync(walkthroughDir)
  .filter((name) => name.endsWith(".ts") && name !== "index.ts")
  .sort();

let stepTotal = 0;
let travelTotal = 0;
const gaps = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(walkthroughDir, file), "utf8");
  const steps = readSteps(source);
  // The start point names where the quest begins, so those places count as
  // already known before step one.
  const seen = properNouns(source.match(/startPoint:\s*\n?\s*"([\s\S]*?)",\n/)?.[1] ?? "");

  for (const step of steps) {
    stepTotal += 1;
    if (step.hasTravel) travelTotal += 1;

    const names = properNouns(step.text);
    const fresh = [...names].filter((name) => !seen.has(name));
    for (const name of names) seen.add(name);

    if (!step.hasTravel && fresh.length > 0 && MOVEMENT.test(step.text)) {
      gaps.push({ file, text: step.text, fresh });
    }
  }
}

const byFile = new Map();
for (const gap of gaps) byFile.set(gap.file, (byFile.get(gap.file) ?? 0) + 1);

console.log(
  `${files.length} walkthroughs, ${stepTotal} steps, ${travelTotal} carry a route (${Math.round(
    (travelTotal / stepTotal) * 100,
  )}%).`,
);
console.log(
  `${gaps.length} steps move you to a place this quest hasn't mentioned yet and give no route.`,
);

if (byFile.size > 0) {
  console.log("\nWorst files:");
  for (const [file, count] of [...byFile].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
    console.log(`  ${String(count).padStart(3)}  ${file}`);
  }
}

if (process.argv.includes("--list")) {
  console.log("\nAll gaps:");
  for (const gap of gaps) {
    console.log(`  ${gap.file}\n     ${gap.text}\n     new: ${gap.fresh.join(", ")}`);
  }
}
