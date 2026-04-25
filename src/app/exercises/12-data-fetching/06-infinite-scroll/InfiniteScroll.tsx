/*
 * TASK 6 — Infinite Scroll
 *
 * Fetch the first page of posts on mount. When the user scrolls to the
 * bottom of the list, fetch the next page and append it to the existing results.
 * Show a loading indicator while fetching and a "no more results" message
 * when all pages have been loaded.
 *
 * Gotcha: appending state must use the functional form of setState
 * (setItems(prev => [...prev, ...newItems])) to avoid stale closure bugs.
 *
 * Gotcha: IntersectionObserver is the right tool for detecting scroll-to-bottom —
 * avoid scroll event listeners, which fire too frequently and require manual
 * debouncing.
 *
 * Hooks: useState, useEffect, useRef
 * Browser API: IntersectionObserver
 * API: https://jsonplaceholder.typicode.com/posts?_page={page}&_limit=10
 *      (supports _page and _limit query params)
 *
 * DOCS:
 * - IntersectionObserver: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 * - Functional state update: https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
 */

export function InfiniteScroll() {
  // Build your component here
  return null;
}
