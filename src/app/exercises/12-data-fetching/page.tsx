"use client"
// http://localhost:3000/exercises/12-data-fetching

/*
 * EXERCISE 12: Data Fetching Patterns
 *
 * KEY CONCEPTS:
 * - Always handle loading, error, and success states
 * - AbortController cancels stale in-flight requests on cleanup
 * - Optimistic updates: apply change immediately, roll back on failure
 * - Caching with useRef: persists across renders without triggering re-renders
 *
 * DOCS: https://react.dev/learn/synchronizing-with-effects
 */

import { UserDirectory } from "./01-user-directory/UserDirectory";
import { SearchWithCache } from "./02-search-with-cache/SearchWithCache";

const sectionStyle = { marginBottom: "3rem" };

export default function DataFetchingExercise() {
  return (
    <div>
      <h1>Exercise 12: Data Fetching Patterns</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Tasks 1-3 — UserDirectory</h2>
        <p>Paginated fetch, race condition handling, and optimistic deletes. See <code>user-directory/UserDirectory.tsx</code>.</p>
        <UserDirectory />
      </section>
      <section style={sectionStyle}>
        <h2>Task 4 — SearchWithCache</h2>
        <p>Cache previous search results to avoid redundant fetches. See <code>search-with-cache/SearchWithCache.tsx</code>.</p>
        <SearchWithCache />
      </section>
    </div>
  );
}
