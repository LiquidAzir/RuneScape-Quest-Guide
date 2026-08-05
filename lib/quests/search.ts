import type { QuestWalkthrough } from "./types";

/**
 * Words that start an imperative step ("Talk to...", "Search the...") and so
 * get capitalised without being a name. The first word of every sentence is
 * dropped before proper nouns are extracted, but these also show up mid-string.
 */
const NOT_A_NAME = new Set([
  "a",
  "after",
  "all",
  "and",
  "any",
  "as",
  "at",
  "back",
  "be",
  "before",
  "bring",
  "but",
  "buy",
  "by",
  "can",
  "climb",
  "collect",
  "defeat",
  "do",
  "don",
  "drop",
  "enter",
  "equip",
  "exit",
  "find",
  "finish",
  "follow",
  "for",
  "from",
  "get",
  "give",
  "go",
  "grab",
  "have",
  "head",
  "he",
  "his",
  "how",
  "if",
  "in",
  "into",
  "is",
  "it",
  "keep",
  "kill",
  "leave",
  "make",
  "no",
  "not",
  "of",
  "on",
  "once",
  "open",
  "or",
  "pick",
  "prepare",
  "put",
  "read",
  "repeat",
  "report",
  "return",
  "run",
  "search",
  "she",
  "so",
  "speak",
  "start",
  "take",
  "talk",
  "tell",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "they",
  "this",
  "to",
  "travel",
  "trek",
  "try",
  "up",
  "use",
  "wait",
  "walk",
  "when",
  "which",
  "while",
  "with",
  "you",
  "your",
]);

const WORD_SPLIT = /[^a-z0-9']+/;

/**
 * Pull the proper nouns out of a walkthrough - NPC names, towns, dungeons,
 * named items. Used so searching "Gillie Groats" or "Draynor" surfaces the
 * quest that sends you there.
 */
export function extractKeywords(walkthrough: QuestWalkthrough): string[] {
  const sources: string[] = [];
  if (walkthrough.startPoint) sources.push(walkthrough.startPoint);
  for (const section of walkthrough.sections) {
    sources.push(section.title);
    for (const step of section.steps) {
      sources.push(step.text);
      if (step.travel) sources.push(step.travel);
      if (step.notes) sources.push(...step.notes);
    }
  }

  const found = new Map<string, string>();
  for (const source of sources) {
    // Each sentence's first word is an imperative verb, never a name.
    for (const sentence of source.split(/(?<=[.!?:;])\s+|\s+-\s+|\n/)) {
      const words = sentence.trim().split(/\s+/).slice(1);
      let run: string[] = [];
      const flush = () => {
        if (run.length === 0) return;
        const phrase = run.join(" ").replace(/[^A-Za-z0-9' -]+$/, "");
        run = [];
        if (phrase.length < 3) return;
        const key = phrase.toLowerCase();
        if (NOT_A_NAME.has(key)) return;
        if (!found.has(key)) found.set(key, phrase);
      };
      for (const raw of words) {
        const word = raw.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9')]+$/g, "");
        const isName =
          /^[A-Z][A-Za-z'-]*$/.test(word) && !NOT_A_NAME.has(word.toLowerCase());
        if (isName) {
          run.push(word);
        } else {
          flush();
        }
      }
      flush();
    }
  }

  // Longer phrases subsume shorter ones: keeping "Gillie", "Gillie Groats" and
  // "Groats" all as separate hits is noise in the result list and payload.
  const phrases = [...found.values()].sort((a, b) => b.length - a.length);
  const kept: string[] = [];
  for (const phrase of phrases) {
    const lower = phrase.toLowerCase();
    if (kept.some((existing) => existing.toLowerCase().includes(lower))) continue;
    kept.push(phrase);
  }

  return kept.sort((a, b) => a.localeCompare(b));
}

/**
 * The deduplicated set of meaningful words in a walkthrough, so free-text
 * searches ("cow", "sewer") match too.
 */
export function buildWordSet(
  walkthrough: QuestWalkthrough | undefined,
  extra: string[] = [],
): Set<string> {
  const words = new Set<string>();
  const add = (value: string) => {
    for (const word of value.toLowerCase().split(WORD_SPLIT)) {
      if (word.length >= 3) words.add(word);
    }
  };

  extra.forEach(add);
  if (walkthrough) {
    if (walkthrough.startPoint) add(walkthrough.startPoint);
    walkthrough.itemsRequired?.forEach(add);
    walkthrough.enemies?.forEach(add);
    for (const section of walkthrough.sections) {
      add(section.title);
      for (const step of section.steps) {
        add(step.text);
        if (step.travel) add(step.travel);
        step.notes?.forEach(add);
      }
    }
  }

  return words;
}

/**
 * Words present in most quests ("north", "talk", "bank") can't narrow a search
 * down, and shipping them to every phone costs more than they're worth. Drop
 * them so the search index that rides along with the quest list stays small.
 */
export function toSearchTexts(
  wordSets: Set<string>[],
  maxDocumentFrequency = 0.3,
): { searchTexts: string[]; commonWords: string[] } {
  const documentFrequency = new Map<string, number>();
  for (const words of wordSets) {
    for (const word of words) {
      documentFrequency.set(word, (documentFrequency.get(word) ?? 0) + 1);
    }
  }

  const ceiling = Math.max(2, Math.floor(wordSets.length * maxDocumentFrequency));
  const isCommon = (word: string) => (documentFrequency.get(word) ?? 0) > ceiling;

  return {
    searchTexts: wordSets.map((words) =>
      [...words]
        .filter((word) => !isCommon(word))
        .sort()
        .join(" "),
    ),
    // Shipped alongside the index so the client can tell "this word was pruned
    // for being everywhere" apart from "this word appears in no quest", and not
    // wrongly reject a search like "draynor bank".
    commonWords: [...documentFrequency.keys()].filter(isCommon).sort(),
  };
}
