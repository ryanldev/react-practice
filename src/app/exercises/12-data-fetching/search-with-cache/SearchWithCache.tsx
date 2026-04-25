/*
 * TASK 4 — SearchWithCache
 * Build a search component that caches previous results to avoid redundant fetches.
 *
 * - Store results in a useRef cache: Map<string, Result[]>
 * - On each search, check the cache before fetching
 * - If cached, render immediately with no loading state
 * - If not cached, fetch, then store in the cache
 *
 * WHY useRef for the cache?
 * - The cache should persist across renders but NOT trigger re-renders when updated
 * - That's exactly what refs are for
 *
 * API: https://jsonplaceholder.typicode.com/posts?q={query}
 */
export function SearchWithCache() { return null; }
