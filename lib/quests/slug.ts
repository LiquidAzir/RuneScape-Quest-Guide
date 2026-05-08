export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function wikiUrl(name: string): string {
  // OSRS Wiki uses underscores between words; preserves the rest of the title.
  const title = name.replace(/ /g, "_");
  return `https://oldschool.runescape.wiki/w/${encodeURI(title)}`;
}
