/*
 * TASK 4 — Sequential / Dependent Fetch
 *
 * Fetch a random post, then use its userId to fetch the author.
 * The second fetch depends on data from the first — it cannot be parallelised.
 *
 * Gotcha: both fetches share one loading/error state. Think about when
 * to set loading to false — after both resolve, not just the first.
 *
 * Gotcha: if the component unmounts mid-flight, both fetches need to be
 * cancelled. One AbortController signal can be shared across both fetches.
 *
 * Hooks: useState, useEffect
 * Browser API: AbortController
 * APIs:
 *   https://jsonplaceholder.typicode.com/posts/1        (has userId field)
 *   https://jsonplaceholder.typicode.com/users/{userId}
 *
 * DOCS: https://react.dev/learn/synchronizing-with-effects
 */

export function SequentialFetch() {
  // Build your component here
  return null;
}
