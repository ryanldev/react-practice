"use client"
// http://localhost:3000/exercises/11-custom-hooks

/*
 * EXERCISE 11: Custom Hooks
 *
 * KEY CONCEPTS:
 * - Custom hooks extract reusable stateful logic into a function
 * - Must start with "use" so React can enforce the rules of hooks
 * - Can call other hooks internally
 *
 * DOCS: https://react.dev/learn/reusing-logic-with-custom-hooks
 */

import { UseDebounceDemo } from "./01-use-debounce/useDebounce";
import { UseLocalStorageDemo } from "./02-use-local-storage/useLocalStorage";
import { UseFetchDemo } from "./03-use-fetch/useFetch";
import { UseClickOutsideDemo } from "./04-use-click-outside/useClickOutside";

const sectionStyle = { marginBottom: "3rem" };

export default function CustomHooksExercise() {
  return (
    <div>
      <h1>Exercise 11: Custom Hooks</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your hooks below. Each lives in its own file with a demo component.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — useDebounce</h2>
        <p>Delays updating a value until after a delay. See <code>use-debounce/useDebounce.tsx</code>.</p>
        <UseDebounceDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Task 2 — useLocalStorage</h2>
        <p>Syncs state with localStorage. See <code>use-local-storage/useLocalStorage.tsx</code>.</p>
        <UseLocalStorageDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — useFetch</h2>
        <p>Generic data fetching with loading/error/data states. See <code>use-fetch/useFetch.tsx</code>.</p>
        <UseFetchDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Task 4 — useClickOutside</h2>
        <p>Calls a handler when clicking outside a ref'd element. See <code>use-click-outside/useClickOutside.tsx</code>.</p>
        <UseClickOutsideDemo />
      </section>
    </div>
  );
}
