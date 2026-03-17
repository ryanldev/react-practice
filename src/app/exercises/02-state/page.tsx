/*
 * EXERCISE 2: useState & Events
 * Svelte equivalent: `let count = 0` (reactive by default)
 *
 * TASKS:
 * 1. Build a <Counter> with increment, decrement, and reset buttons
 *    - Use useState to manage the count
 *    - Use the updater function form: setCount(prev => prev + 1)
 *    - Why updater form? Avoids stale closure bugs when multiple updates batch together
 *
 * 2. Build a <ToggleGroup> component (like tabs)
 *    - Accepts an array of options and tracks which one is active
 *    - Clicking an option sets it as active (highlighted)
 *    - Practice: passing event handlers as props, conditional className
 *
 * 3. Build a <UserForm> that manages an object in state: { firstName, lastName, age }
 *    - Practice: updating a single field in an object without mutating
 *    - setUser(prev => ({ ...prev, firstName: "new" }))
 *    - In Svelte you'd just do `user.firstName = "new"` — React requires immutable updates
 *
 * KEY CONCEPTS:
 * - State updates are asynchronous and batched (React 18+)
 * - Never mutate state directly — always create new references
 * - Updater functions (prev => next) prevent stale closures
 * - onClick={handler} not on:click={handler}
 *
 * IMPORTANT: This file needs "use client" at the top since useState is a client-side hook.
 *
 * DOCS:
 * - useState: https://react.dev/reference/react/useState
 * - State as a Snapshot: https://react.dev/learn/state-as-a-snapshot
 * - Queueing State Updates: https://react.dev/learn/queueing-a-series-of-state-updates
 * - Responding to Events: https://react.dev/learn/responding-to-events
 */

export default function StateExercise() {
  return (
    <div>
      <h1>Exercise 2: useState &amp; Events</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
