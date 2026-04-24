/*
 * Q3 — Dependent Dropdown Selects (Medium)
 *
 * Two chained selects: choosing a continent triggers a second fetch to
 * populate the countries dropdown.
 *
 * TASKS:
 * 1. Render a "Continent" select with these hardcoded options:
 *      ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
 *    Store the selected continent in state.
 *
 * 2. When the continent changes, fetch the matching countries from:
 *      https://restcountries.com/v3.1/region/{continent}
 *    Each country has a name.common field. Render them in the second select.
 *
 * 3. While the countries fetch is in-flight, disable the second select and
 *    show a "Loading countries..." option as a placeholder.
 *
 * 4. When the continent changes, reset the selected country to null before
 *    the new fetch resolves, so the second select never shows a stale value.
 *
 * KEY CONCEPTS:
 * - useEffect with a dependency: [selectedContinent]
 * - Independent loading state for the second select only
 * - Reset dependent state when the parent value changes
 * - Cleanup: return () => { cancelled = true } to ignore stale responses
 *
 * STRETCH:
 * - Show the selected country's flag emoji or population after selection
 * - Handle fetch errors on the second dropdown independently
 */

export function DependentDropdowns() {
  // Build your component here
  return null;
}
