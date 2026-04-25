/*
 * Q4 — Autocomplete with Debounce & Shared State (Hard)
 *
 * A search input that queries an API 300ms after the user stops typing.
 * The input and results panel are siblings — state lives in a shared Context.
 *
 * TASKS:
 * 1. Create a <SearchContext> that holds:
 *      - query: string
 *      - setQuery: (q: string) => void
 *      - results: Post[]
 *      - loading: boolean
 *      - error: string | null
 *    Expose it via a useSearch() custom hook that throws if used outside the provider.
 *
 * 2. Build a <SearchInput /> component that reads/writes query from context.
 *    It should NOT fetch directly — the context provider handles fetching.
 *
 * 3. Build a <SearchResults /> component that reads results/loading/error from
 *    context and renders accordingly.
 *
 * 4. In the provider, useEffect on [query]:
 *      - Debounce: only fire the fetch after 300ms of no changes.
 *        Use a cleanup function to cancel the timeout:
 *          return () => clearTimeout(id)
 *      - Race conditions: create a new AbortController for each fetch and abort
 *        the previous one in the cleanup:
 *          const controller = new AbortController()
 *          fetch(url, { signal: controller.signal })
 *          return () => controller.abort()
 *      - Skip the fetch entirely if query is empty.
 *
 * 5. Render both siblings inside the provider:
 *      <SearchProvider>
 *        <SearchInput />
 *        <SearchResults />
 *      </SearchProvider>
 *
 * API: https://jsonplaceholder.typicode.com/posts?q={query}
 *
 * KEY CONCEPTS:
 * - Context + custom hook pattern for shared sibling state
 * - Debouncing with setTimeout / clearTimeout in useEffect cleanup
 * - Race condition prevention with AbortController
 * - Separating concerns: input component vs results component vs fetch logic
 *
 * STRETCH:
 * - Add keyboard navigation (ArrowUp/Down to highlight, Enter to select)
 * - Cache previous results so repeated queries don't re-fetch
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
