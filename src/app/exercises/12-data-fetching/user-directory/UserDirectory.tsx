/*
 * TASK 1-3 — UserDirectory
 * Fetch and display paginated users with race condition handling and optimistic updates.
 *
 * TASK 1: Paginated fetch from https://jsonplaceholder.typicode.com/users
 *   - Prev/Next buttons, disable at boundaries
 *   - Loading and error states
 *
 * TASK 2: Handle race conditions
 *   - Use AbortController to cancel stale requests when page changes quickly
 *
 * TASK 3: Optimistic updates
 *   - Add a "delete" button that removes the user immediately
 *   - If the DELETE request fails, restore the user and show an error
 *
 * DOCS: https://react.dev/learn/synchronizing-with-effects
 */
export function UserDirectory() { return null; }
