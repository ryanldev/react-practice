// http://localhost:3000/exercises/03-lists

/*
 * EXERCISE 3: Conditional Rendering & Lists
 * Svelte equivalent: {#if}, {#each}
 *
 * TASKS:
 * 1. Build a <TodoList> with:
 *    - An input + button to add todos
 *    - Render each todo with a checkbox (toggle complete) and delete button
 *    - Use .map() with a unique key for each item
 *    - Store todos as: { id: number, text: string, completed: boolean }
 *
 * 2. Add conditional rendering for different states:
 *    - Empty state: "No todos yet. Add one above!"
 *    - Show a count of completed vs total: "3 of 5 completed"
 *    - Use ternary (condition ? a : b) and && short-circuit (condition && <JSX>)
 *
 * 3. Add a filter: All / Active / Completed
 *    - Derive the filtered list from state (don't store filtered list separately)
 *    - This is "derived state" — compute it during render, don't useEffect for it
 *
 * KEY CONCEPTS:
 * - Keys must be stable, unique identifiers (not array index for dynamic lists)
 * - Conditional rendering patterns: ternary, &&, early return
 * - Derived state: compute from existing state during render, no useEffect needed
 * - Immutable array operations: filter, map, spread — never push/splice
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Conditional Rendering: https://react.dev/learn/conditional-rendering
 * - Rendering Lists: https://react.dev/learn/rendering-lists
 * - Keeping Components Pure: https://react.dev/learn/keeping-components-pure
 */

export default function ListsExercise() {
  return (
    <div>
      <h1>Exercise 3: Conditional Rendering &amp; Lists</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
