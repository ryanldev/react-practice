"use client";
// http://localhost:3000/exercises/04-effects

/*
 * EXERCISE 4: useEffect & Lifecycle
 * Svelte equivalent: onMount, onDestroy, $: reactive statements
 *
 * KEY CONCEPTS:
 * - useEffect(fn, [deps]) — fn runs after render when deps change
 * - Empty deps [] = run once on mount (like onMount in Svelte)
 * - Return a cleanup function = run on unmount AND before re-running the effect
 * - COMMON MISTAKE: forgetting cleanup causes memory leaks (timers, listeners, subscriptions)
 * - ANTI-PATTERN: using useEffect for derived state — just compute it during render
 *
 * DOCS:
 * - useEffect: https://react.dev/reference/react/useEffect
 * - Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
 * - You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
 * - Lifecycle of Reactive Effects: https://react.dev/learn/lifecycle-of-reactive-effects
 * - useLayoutEffect: https://react.dev/reference/react/useLayoutEffect
 */

const sectionStyle = { marginBottom: "3rem" };

import { Clock } from "./01-clock/Clock";
import { WindowSize } from "./02-window-size/WindowSize";
import { MeasuredBox } from "./03-measured-box/MeasuredBox";
import { DebounceSearch } from "./04-debounce-search/DebounceSearch";

export default function EffectsExercise() {
  return (
    <div>
      <h1>Exercise 4: useEffect &amp; Lifecycle</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>

      <section style={sectionStyle}>
        <h2>Task 1 — Clock</h2>
        <p>Displays the current time, updating every second. See <code>clock/Clock.tsx</code>.</p>
        <Clock />
      </section>

      <section style={sectionStyle}>
        <h2>Task 2 — Window Size</h2>
        <p>Tracks and displays window width/height on resize. See <code>window-size/WindowSize.tsx</code>.</p>
        <WindowSize />
      </section>

      <section style={sectionStyle}>
        <h2>Task 3 — Measured Box</h2>
        <p>Measures a DOM element using useLayoutEffect. See <code>measured-box/MeasuredBox.tsx</code>.</p>
        <MeasuredBox />
      </section>

      <section style={sectionStyle}>
        <h2>Task 4 — Debounce Search</h2>
        <p>Fetches results after the user stops typing, with race condition handling. See <code>debounce-search/DebounceSearch.tsx</code>.</p>
        <DebounceSearch />
      </section>
    </div>
  );
}
