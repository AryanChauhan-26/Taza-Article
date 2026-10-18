/**
 * Cleanly slugify a string into a URL-friendly slug.
 * Removes special characters like '&', collapses dashes, and lowercases.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and') // replace & with and or remove
    .replace(/[\s\W-]+/g, '-') // replace spaces, non-word chars with single dash
    .replace(/^-+|-+$/g, ''); // trim leading/trailing dashes
}

/**
 * Standard category slug mappings to ensure consistent clean URLs
 */
const CATEGORY_SLUG_MAP: Record<string, string> = {
  'developer tools': 'dev-tools',
  'dev tools': 'dev-tools',
  'cloud & databases': 'cloud-hosting',
  'cloud and databases': 'cloud-hosting',
  'cloud & hosting': 'cloud-hosting',
  'student perks & packs': 'student-perks',
  'student perks and packs': 'student-perks',
  'student perks': 'student-perks',
  'learning & dsa': 'learning-resources',
  'learning and dsa': 'learning-resources',
  'project blueprints': 'project-ideas',
};

export function getCategorySlug(categoryName: string): string {
  const normalized = categoryName.toLowerCase().trim();
  if (CATEGORY_SLUG_MAP[normalized]) {
    return CATEGORY_SLUG_MAP[normalized];
  }
  return slugify(categoryName);
}
