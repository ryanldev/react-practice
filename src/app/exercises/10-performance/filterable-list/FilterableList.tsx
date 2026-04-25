/*
 * TASK 1-2 — FilterableList
 * Demonstrate the re-render problem and fix it step by step.
 *
 * STEP 1: Build a list with a search input where every keystroke re-renders
 *   all list items unnecessarily.
 * STEP 2: Fix with:
 *   - useMemo for the filtered list
 *   - useCallback for event handlers passed to children
 *   - React.memo on the list item component
 *
 * TASK 4 also lives here: add a sibling component that proves memoization
 * is NOT always needed (e.g. a counter that re-renders without issue).
 *
 * DOCS:
 * - useMemo: https://react.dev/reference/react/useMemo
 * - useCallback: https://react.dev/reference/react/useCallback
 * - React.memo: https://react.dev/reference/react/memo
 */
export function FilterableList() { return null; }
