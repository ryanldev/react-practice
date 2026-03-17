/*
 * EXERCISE 12: Data Fetching Patterns
 *
 * TASKS:
 * 1. Build a <UserDirectory> that fetches and displays paginated data
 *    - API: https://jsonplaceholder.typicode.com/users (10 users)
 *    - Or for pagination: https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
 *    - Show loading skeleton/spinner while fetching
 *    - Show error state with a retry button
 *    - Previous/Next pagination buttons
 *
 * 2. Handle race conditions properly
 *    - If user clicks "Next" rapidly, multiple fetches fire simultaneously
 *    - Use AbortController to cancel the previous request:
 *      useEffect(() => {
 *        const controller = new AbortController();
 *        fetch(url, { signal: controller.signal }).then(...).catch(err => {
 *          if (err.name !== 'AbortError') setError(err);
 *        });
 *        return () => controller.abort();
 *      }, [page])
 *
 * 3. Implement optimistic updates
 *    - Add a "like" button to each post
 *    - On click: immediately update the UI (optimistic), then send the request
 *    - If the request fails: roll back the UI to the previous state
 *    - Pattern: save previous state → update optimistically → fetch → on error, restore
 *
 * 4. Build a <SearchWithCache> that caches previous search results
 *    - Use useRef to store a Map<string, Result[]> of previous results
 *    - On search: check cache first, only fetch if cache miss
 *    - Show cached results instantly, fetch in background for fresh data
 *
 * KEY CONCEPTS:
 * - NEVER do: useEffect(() => { fetch().then(data => setState(data)) }) without cleanup
 * - Always handle: loading, error, success states
 * - AbortController prevents setting state on unmounted components
 * - Race conditions are the #1 bug in React data fetching
 * - In production: use React Query, SWR, or Next.js Server Components instead of raw useEffect
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useEffect: https://react.dev/reference/react/useEffect
 * - You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
 * - AbortController (MDN): https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 * - Fetch API (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

export default function DataFetchingExercise() {
  return (
    <div>
      <h1>Exercise 12: Data Fetching Patterns</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
