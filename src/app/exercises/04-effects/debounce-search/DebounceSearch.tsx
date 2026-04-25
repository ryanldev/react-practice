/*
 * TASK 4 — DebounceSearch
 *
 * Build a <DebounceSearch> that fetches results after the user stops typing.
 *
 * - Use useEffect with the search term as a dependency
 * - Set a timeout inside the effect, clear it on cleanup:
 *     useEffect(() => {
 *       const id = setTimeout(() => fetchResults(query), 300);
 *       return () => clearTimeout(id);
 *     }, [query])
 * - Fetch from: https://jsonplaceholder.typicode.com/users?q={searchTerm}
 * - Handle the race condition: if the user types again before the fetch completes,
 *   the previous fetch should be ignored. Use AbortController:
 *     const controller = new AbortController();
 *     fetch(url, { signal: controller.signal });
 *     return () => controller.abort();
 *
 * KEY CONCEPTS:
 * - Debouncing: delay the fetch until the user pauses typing
 * - Cleanup cancels both the pending timeout AND any in-flight fetch
 * - Race condition: a slow earlier response must not overwrite a faster later one
 *
 * DOCS:
 * - You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
 * - Lifecycle of Reactive Effects: https://react.dev/learn/lifecycle-of-reactive-effects
 */

export function DebounceSearch() {
  // Build your component here
  return null;
}
