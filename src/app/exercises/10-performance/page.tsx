/*
 * EXERCISE 10: Performance — useMemo, useCallback, React.memo
 * Svelte equivalent: Svelte handles this automatically
 *
 * TASKS:
 * 1. Build a <FilterableList> that demonstrates the re-render problem
 *    - Parent has: searchTerm state, a list of 1000 items, and an unrelated counter
 *    - <ExpensiveListItem> logs to console when it renders
 *    - Observe: clicking the counter re-renders ALL list items (even though they didn't change)
 *
 * 2. Fix it step by step:
 *    a. Wrap <ExpensiveListItem> in React.memo() — now it only re-renders if its props change
 *    b. The filter function still runs on every render — wrap with useMemo:
 *       const filtered = useMemo(() => items.filter(...), [items, searchTerm])
 *    c. If you pass an onClick handler to the child, it creates a new function each render,
 *       breaking React.memo. Fix with useCallback:
 *       const handleClick = useCallback((id: number) => { ... }, [])
 *
 * 3. Implement virtualization for a large list
 *    - Render a list of 10,000 items — observe how slow it is without virtualization
 *    - Implement basic windowing: only render items visible in the viewport + buffer
 *    - Track scroll position with onScroll, calculate which items are visible:
 *      const startIndex = Math.floor(scrollTop / itemHeight)
 *      const endIndex = startIndex + Math.ceil(containerHeight / itemHeight)
 *    - Render only items[startIndex..endIndex] with absolute positioning or transform
 *    - In production: use react-window or @tanstack/virtual — but knowing the principle matters
 *
 * 4. Build a demo showing WHEN NOT to optimize:
 *    - Wrap a simple <p> tag in React.memo — the overhead of memoization exceeds the savings
 *    - Show that premature optimization adds complexity without measurable benefit
 *
 * KEY CONCEPTS:
 * - React re-renders a component when its parent re-renders (even if props didn't change)
 * - React.memo: skip re-render if props are shallowly equal (like PureComponent)
 * - useMemo(fn, deps): cache a computed value, recalculate only when deps change
 * - useCallback(fn, deps): cache a function reference, recreate only when deps change
 * - useCallback is just useMemo(() => fn, deps) under the hood
 * - RULE OF THUMB: profile first, optimize second. Don't memo everything blindly.
 *
 * PROFILING TIP:
 * Install React DevTools browser extension — the Profiler tab shows exactly what re-rendered and why.
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useMemo: https://react.dev/reference/react/useMemo
 * - useCallback: https://react.dev/reference/react/useCallback
 * - memo: https://react.dev/reference/react/memo
 * - Render and Commit: https://react.dev/learn/render-and-commit
 */

export default function PerformanceExercise() {
  return (
    <div>
      <h1>Exercise 10: Performance</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
