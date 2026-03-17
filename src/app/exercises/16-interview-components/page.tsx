/*
 * EXERCISE 16: Common Interview Components
 * These are the "build X in 45 minutes" problems — practice until muscle memory
 *
 * TASKS:
 * 1. Build an <Autocomplete> / Typeahead
 *    - Input field with a dropdown of suggestions
 *    - Fetch suggestions from: https://jsonplaceholder.typicode.com/users?q={query}
 *    - Debounce the fetch (300ms)
 *    - Keyboard navigation: Arrow Up/Down to move selection, Enter to select, Escape to close
 *    - Click outside to close the dropdown (useClickOutside from Exercise 11)
 *    - Show loading indicator while fetching
 *    - Highlight matching text in suggestions
 *    - ARIA: role="combobox", aria-expanded, aria-activedescendant, role="listbox" on dropdown
 *
 * 2. Build an <InfiniteScroll> list
 *    - Load 20 items initially
 *    - When the user scrolls near the bottom, load 20 more
 *    - Use IntersectionObserver on a sentinel element at the bottom:
 *      useEffect(() => {
 *        const observer = new IntersectionObserver(([entry]) => {
 *          if (entry.isIntersecting) loadMore();
 *        });
 *        observer.observe(sentinelRef.current);
 *        return () => observer.disconnect();
 *      }, [])
 *    - Show a loading spinner at the bottom while fetching
 *    - Handle: no more items, error during fetch
 *    - API: https://jsonplaceholder.typicode.com/posts?_page={page}&_limit=20
 *
 * 3. Build a <Tooltip> / Popover
 *    - Appears on hover (tooltip) or click (popover)
 *    - Positioned relative to the trigger element (above, below, left, right)
 *    - Use getBoundingClientRect() to calculate position
 *    - Render via Portal (createPortal) to avoid overflow issues
 *    - Dismiss on: click outside, Escape key, scroll
 *    - Add a small arrow/caret pointing to the trigger
 *
 * 4. Build a <SortableList> with drag and drop
 *    - List of items that can be reordered by dragging
 *    - Use HTML drag and drop API: draggable, onDragStart, onDragOver, onDrop
 *    - Visual feedback: show insertion point while dragging
 *    - Update the list order on drop
 *    - Alternative: implement with pointer events for mobile support
 *
 * KEY CONCEPTS:
 * - These components combine multiple React concepts: state, effects, refs, events, a11y
 * - Focus on getting a working version first, then polish
 * - Interview tip: talk through your approach before coding, name the hooks you'll need
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Combobox Pattern (WAI-ARIA): https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 * - IntersectionObserver (MDN): https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 * - Drag and Drop API (MDN): https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 * - getBoundingClientRect (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */

export default function InterviewComponentsExercise() {
  return (
    <div>
      <h1>Exercise 16: Common Interview Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
