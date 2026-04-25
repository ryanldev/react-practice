"use client"
// http://localhost:3000/exercises/10-performance

/*
 * EXERCISE 10: Performance
 *
 * KEY CONCEPTS:
 * - useMemo: cache a computed value until deps change
 * - useCallback: cache a function until deps change
 * - React.memo: skip re-rendering a child if its props haven't changed
 * - Virtualization: only render items visible in the viewport
 * - RULE: only optimize when something checks === on a value
 *
 * DOCS:
 * - useMemo: https://react.dev/reference/react/useMemo
 * - useCallback: https://react.dev/reference/react/useCallback
 * - React.memo: https://react.dev/reference/react/memo
 */

import { FilterableList } from "./01-filterable-list/FilterableList";
import { VirtualizedList } from "./02-virtualized-list/VirtualizedList";

const sectionStyle = { marginBottom: "3rem" };

export default function PerformanceExercise() {
  return (
    <div>
      <h1>Exercise 10: Performance</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Tasks 1, 2 & 4 — FilterableList</h2>
        <p>Demonstrate re-render problem, fix with useMemo/useCallback/memo, and show when NOT to optimize. See <code>filterable-list/FilterableList.tsx</code>.</p>
        <FilterableList />
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — VirtualizedList</h2>
        <p>Render 10,000 items without freezing the browser. See <code>virtualized-list/VirtualizedList.tsx</code>.</p>
        <VirtualizedList />
      </section>
    </div>
  );
}
