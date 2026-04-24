// http://localhost:3000/exercises/11-custom-hooks

/*
 * EXERCISE 11: Custom Hooks
 * Svelte equivalent: Reusable stores / utility functions
 *
 * TASKS:
 * 1. Build useDebounce(value, delay)
 *    - Returns a debounced version of the value
 *    - Internally: useState for debounced value, useEffect with setTimeout/clearTimeout
 *    - Usage: const debouncedSearch = useDebounce(searchTerm, 300)
 *    - Use it to improve the DebounceSearch from Exercise 4
 *
 * 2. Build useLocalStorage<T>(key, initialValue)
 *    - Works like useState but persists to localStorage
 *    - Read from localStorage on init (with JSON.parse), fall back to initialValue
 *    - Write to localStorage on every state change (via useEffect)
 *    - Handle: SSR safety (typeof window check), JSON parse errors, storage events
 *    - Usage: const [theme, setTheme] = useLocalStorage("theme", "light")
 *
 * 3. Build useFetch<T>(url)
 *    - Returns { data: T | null, loading: boolean, error: Error | null }
 *    - Fetch on mount and when url changes
 *    - Handle: loading state, error state, cleanup with AbortController
 *    - Usage: const { data, loading, error } = useFetch<User[]>("/api/users")
 *
 * 4. Build useClickOutside(ref, handler)
 *    - Calls handler when a click occurs outside the referenced element
 *    - Useful for: closing dropdowns, modals, popovers
 *    - Usage: useClickOutside(dropdownRef, () => setOpen(false))
 *
 * KEY CONCEPTS:
 * - Custom hooks are just functions that call other hooks — they MUST start with "use"
 * - They share LOGIC, not state — each component calling the hook gets its own state
 * - This is React's primary reuse mechanism (replaces mixins, HOCs, render props for logic)
 * - Test them by testing the components that use them, or use @testing-library/react-hooks
 *
 * FILE STRUCTURE HINT:
 * Create hooks in a shared location:
 *   /src/hooks/useDebounce.ts
 *   /src/hooks/useLocalStorage.ts
 *   /src/hooks/useFetch.ts
 *   /src/hooks/useClickOutside.ts
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Reusing Logic with Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks
 * - Rules of Hooks: https://react.dev/reference/rules/rules-of-hooks
 */

export default function CustomHooksExercise() {
  return (
    <div>
      <h1>Exercise 11: Custom Hooks</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
