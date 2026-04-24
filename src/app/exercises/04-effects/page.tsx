// http://localhost:3000/exercises/04-effects

/*
 * EXERCISE 4: useEffect & Lifecycle
 * Svelte equivalent: onMount, onDestroy, $: reactive statements
 *
 * TASKS:
 * 1. Build a <Clock> that displays the current time, updating every second
 *    - Setup: setInterval in useEffect
 *    - Cleanup: return () => clearInterval(id) — this is onDestroy in Svelte
 *    - Note: React StrictMode runs effects twice in dev to test cleanup
 *
 * 2. Build a <WindowSize> component that tracks and displays window width/height
 *    - Add event listener on mount, remove on cleanup
 *    - useEffect(() => { window.addEventListener(...); return () => window.removeEventListener(...); }, [])
 *
 * 3. Build a <MeasuredBox> using useLayoutEffect
 *    - Render a box with dynamic content, measure its height with getBoundingClientRect()
 *    - useLayoutEffect runs synchronously AFTER DOM mutation but BEFORE the browser paints
 *    - Use case: measuring DOM elements to position tooltips, adjust layout, prevent visual flicker
 *    - useEffect would cause a visible flash (render → paint → measure → re-render)
 *    - useLayoutEffect prevents it (render → measure → re-render → paint)
 *    - RULE: use useEffect by default, useLayoutEffect only when you need to measure/mutate DOM before paint
 *
 * 4. Build a <DebounceSearch> that fetches results after the user stops typing
 *    - Use useEffect with the search term as a dependency
 *    - Set a timeout inside the effect, clear it on cleanup
 *    - Fetch from: https://jsonplaceholder.typicode.com/users?q={searchTerm}
 *    - Handle the race condition: if the user types again before fetch completes,
 *      use an AbortController or a boolean flag to ignore stale results
 *
 * KEY CONCEPTS:
 * - useEffect(fn, [deps]) — fn runs after render when deps change
 * - Empty deps [] = run once on mount (like onMount in Svelte)
 * - Return a cleanup function = run on unmount AND before re-running the effect
 * - COMMON MISTAKE: forgetting cleanup causes memory leaks (timers, listeners, subscriptions)
 * - ANTI-PATTERN: using useEffect for derived state — just compute it during render
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useEffect: https://react.dev/reference/react/useEffect
 * - Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
 * - You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
 * - Lifecycle of Reactive Effects: https://react.dev/learn/lifecycle-of-reactive-effects
 * - useLayoutEffect: https://react.dev/reference/react/useLayoutEffect
 */

export default function EffectsExercise() {
  return (
    <div>
      <h1>Exercise 4: useEffect &amp; Lifecycle</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
