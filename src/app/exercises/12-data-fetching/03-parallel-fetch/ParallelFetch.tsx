/*
 * TASK 3 — Parallel Fetch
 *
 * Fetch a user and their posts at the same time using Promise.all.
 * Only render when both have resolved. Handle loading and error states.
 *
 * Gotcha: fetching sequentially (await user, then await posts) wastes time —
 * both requests are independent and can be made simultaneously.
 *
 * Hooks: useState, useEffect
 * APIs:
 *   https://jsonplaceholder.typicode.com/users/1
 *   https://jsonplaceholder.typicode.com/posts?userId=1
 *
 * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

export function ParallelFetch() {
  // Build your component here
  return null;
}
