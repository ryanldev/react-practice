"use client"
// http://localhost:3000/exercises/12-data-fetching

/*
 * EXERCISE 12: Data Fetching Patterns
 *
 * KEY CONCEPTS:
 * - Always handle loading, error, and success states
 * - AbortController cancels stale in-flight requests on cleanup
 * - Promise.all runs independent fetches in parallel
 * - Sequential fetches: await the first, use its data to trigger the second
 * - Polling: reschedule with setTimeout after each response, not setInterval
 * - Infinite scroll: IntersectionObserver + functional setState to append pages
 * - Caching with useRef: persists across renders without triggering re-renders
 *
 * DOCS: https://react.dev/learn/synchronizing-with-effects
 */

import { UserDirectory } from "./01-user-directory/UserDirectory";
import { SearchWithCache } from "./02-search-with-cache/SearchWithCache";
import { ParallelFetch } from "./03-parallel-fetch/ParallelFetch";
import { SequentialFetch } from "./04-sequential-fetch/SequentialFetch";
import { Polling } from "./05-polling/Polling";
import { InfiniteScroll } from "./06-infinite-scroll/InfiniteScroll";

const sectionStyle = { marginBottom: "3rem" };

export default function DataFetchingExercise() {
  return (
    <div>
      <h1>Exercise 12: Data Fetching Patterns</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>

      <section style={sectionStyle}>
        <h2>Task 1 — User Directory</h2>
        <p>Paginated fetch with prev/next navigation, loading/error states, and optimistic delete. See <code>01-user-directory/UserDirectory.tsx</code>.</p>
        <UserDirectory />
      </section>

      <section style={sectionStyle}>
        <h2>Task 2 — Search with Cache</h2>
        <p>Cache previous search results in a ref to avoid redundant fetches. See <code>02-search-with-cache/SearchWithCache.tsx</code>.</p>
        <SearchWithCache />
      </section>

      <section style={sectionStyle}>
        <h2>Task 3 — Parallel Fetch</h2>
        <p>Fetch a user and their posts simultaneously with Promise.all. See <code>03-parallel-fetch/ParallelFetch.tsx</code>.</p>
        <ParallelFetch />
      </section>

      <section style={sectionStyle}>
        <h2>Task 4 — Sequential Fetch</h2>
        <p>Fetch a post, then use its userId to fetch the author. See <code>04-sequential-fetch/SequentialFetch.tsx</code>.</p>
        <SequentialFetch />
      </section>

      <section style={sectionStyle}>
        <h2>Task 5 — Polling</h2>
        <p>Fetch fresh data every 5 seconds using setTimeout (not setInterval). See <code>05-polling/Polling.tsx</code>.</p>
        <Polling />
      </section>

      <section style={sectionStyle}>
        <h2>Task 6 — Infinite Scroll</h2>
        <p>Load the next page of results when the user scrolls to the bottom. See <code>06-infinite-scroll/InfiniteScroll.tsx</code>.</p>
        <InfiniteScroll />
      </section>
    </div>
  );
}
