/*
 * Q4 — Autocomplete with Debounce & Shared State (Hard)
 *
 * A search input and results panel as siblings sharing state via Context.
 * Fetch results after the user stops typing. Handle race conditions.
 *
 * Hooks: createContext, useContext, useEffect, useState
 * Browser APIs: setTimeout / clearTimeout, AbortController
 * API: https://itunes.apple.com/search?term={query}&limit=10
 * Response shape: { results: Array<{ trackName, artistName, collectionName, artworkUrl100 }> }
 *
 * STRETCH: keyboard navigation, result caching
 */

export function SearchProvider({ children }: { children: React.ReactNode }) {
  // Build your provider here
  return <>{children}</>;
}

export function SearchInput() {
  // Build your input here
  return null;
}

export function SearchResults() {
  // Build your results here
  return null;
}
