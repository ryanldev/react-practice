/*
 * TASK 3-4 — Transitions
 * Demonstrate useTransition and useDeferredValue for non-blocking updates.
 *
 * TASK 3 — useTransition:
 * - Mark a state update as non-urgent so React can interrupt it
 * - Use isPending to show a loading indicator without blocking the UI
 * - Good for: tab switches, page navigations, filtering large lists
 *
 * TASK 4 — useDeferredValue:
 * - Defer re-rendering a slow part of the UI
 * - The input stays responsive while the list re-renders in the background
 * - Alternative to useTransition when you don't control the state update
 *
 * DOCS:
 * - useTransition: https://react.dev/reference/react/useTransition
 * - useDeferredValue: https://react.dev/reference/react/useDeferredValue
 */
export function TransitionsDemo() { return null; }
