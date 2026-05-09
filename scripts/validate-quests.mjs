import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const dataPath = path.join(root, "lib", "quests", "data.ts");
const walkthroughDir = path.join(root, "lib", "quests", "walkthroughs");
const walkthroughIndexPath = path.join(walkthroughDir, "index.ts");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function matchAll(source, regex) {
  return Array.from(source.matchAll(regex));
}

function findDuplicates(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}

const errors = [];
const dataSource = read(dataPath);
const indexSource = read(walkthroughIndexPath);

const questSlugs = matchAll(dataSource, /q\(\{([\s\S]*?)\}\)/g).map(([, body]) => {
  const name = body.match(/name:\s*"([^"]+)"/)?.[1];
  const explicitSlug = body.match(/slug:\s*"([^"]+)"/)?.[1];
  if (!name) {
    errors.push("Found a quest metadata entry without a name.");
    return undefined;
  }
  return explicitSlug ?? toSlug(name);
}).filter(Boolean);

const questSlugSet = new Set(questSlugs);
const duplicateQuestSlugs = findDuplicates(questSlugs);
for (const slug of duplicateQuestSlugs) {
  errors.push(`Duplicate quest slug in data.ts: ${slug}`);
}

const registeredSlugs = matchAll(indexSource, /^\s*"([^"]+)":\s*[A-Za-z0-9_]+,/gm)
  .map(([, slug]) => slug)
  .sort();
const registeredSlugSet = new Set(registeredSlugs);

const duplicateRegisteredSlugs = findDuplicates(registeredSlugs);
for (const slug of duplicateRegisteredSlugs) {
  errors.push(`Duplicate walkthrough registration in index.ts: ${slug}`);
}

for (const slug of registeredSlugs) {
  if (!questSlugSet.has(slug)) {
    errors.push(`Walkthrough registered for unknown quest slug: ${slug}`);
  }
}

const walkthroughFiles = fs.readdirSync(walkthroughDir)
  .filter((fileName) => fileName.endsWith(".ts") && fileName !== "index.ts")
  .sort();

for (const fileName of walkthroughFiles) {
  const slug = fileName.replace(/\.ts$/, "");
  const source = read(path.join(walkthroughDir, fileName));

  if (!registeredSlugSet.has(slug)) {
    errors.push(`Walkthrough file is not registered in index.ts: ${fileName}`);
  }

  if (!questSlugSet.has(slug)) {
    errors.push(`Walkthrough file has no matching quest metadata slug: ${fileName}`);
  }

  if (!/export\s+const\s+[A-Za-z0-9_]+\s*:\s*QuestWalkthrough\s*=/.test(source)) {
    errors.push(`Walkthrough file does not export a QuestWalkthrough const: ${fileName}`);
  }

  if (!/sections:\s*\[/.test(source)) {
    errors.push(`Walkthrough file has no sections array: ${fileName}`);
  }

  if (!/steps:\s*\[/.test(source)) {
    errors.push(`Walkthrough file has no steps array: ${fileName}`);
  }
}

for (const slug of registeredSlugs) {
  const expectedFile = `${slug}.ts`;
  if (!walkthroughFiles.includes(expectedFile)) {
    errors.push(`Walkthrough registration has no matching file: ${expectedFile}`);
  }
}

if (errors.length > 0) {
  console.error("Quest data validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Quest data validation passed: ${questSlugs.length} quests, ${registeredSlugs.length} walkthroughs.`);
