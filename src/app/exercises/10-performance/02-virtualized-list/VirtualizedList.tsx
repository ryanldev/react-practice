/*
 * TASK 3 — VirtualizedList
 * Render a list of 10,000 items without freezing the browser.
 *
 * The problem: rendering 10,000 DOM nodes is slow regardless of React.
 * The solution: only render the items currently visible in the viewport.
 *
 * Implement basic windowing manually:
 * - Track scrollTop with a ref or state
 * - Calculate which items are in view based on item height and container height
 * - Only render those items, with padding top/bottom to simulate the full height
 *
 * Or use a library: react-window or react-virtual
 *
 * DOCS: https://react.dev/learn/render-and-commit
 */
export function VirtualizedList() { return null; }
