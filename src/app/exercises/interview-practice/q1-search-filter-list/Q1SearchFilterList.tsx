/*
 * Q1 — Search & Filter List (Easy)
 *
 * Fetch 20 posts from https://jsonplaceholder.typicode.com/posts?_limit=20
 * and render a filterable list.
 *
 * TASKS:
 * 1. On mount, fetch the 20 posts and store them in state.
 *    Handle all three async states:
 *      - Loading: show a spinner or "Loading..." text while the request is in-flight
 *      - Error: show an error message if the fetch fails
 *      - Success: render the list
 *
 * 2. Add a text input above the list. As the user types, filter posts whose
 *    title includes the search term (case-insensitive).
 *
 * 3. PERFORMANCE: derive the filtered list with useMemo rather than storing
 *    a second filtered array in state. The deps array should be [posts, query].
 *    Why? Storing a copy means two sources of truth and forces an extra render
 *    cycle. useMemo recomputes only when posts or query actually change.
 *
 * KEY CONCEPTS:
 * - useEffect for fetching on mount
 * - Three async states: loading | error | data
 * - Derived state: filteredPosts = useMemo(() => posts.filter(...), [posts, query])
 * - Controlled input: value={query} onChange={e => setQuery(e.target.value)}
 *
 * STRETCH:
 * - Add a "retry" button on the error state that re-triggers the fetch
 * - Highlight the matching substring in each title
 */

export function SearchFilterList() {
  // Build your component here
  return null;
}
