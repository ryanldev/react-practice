"use client"
// http://localhost:3000/exercises/14-suspense

/*
 * EXERCISE 14: Suspense & Concurrent Features
 *
 * KEY CONCEPTS:
 * - React.lazy + Suspense: code-split components, load on demand
 * - useTransition: mark updates as non-urgent, keep UI responsive
 * - useDeferredValue: defer re-rendering a slow subtree
 *
 * DOCS:
 * - React.lazy: https://react.dev/reference/react/lazy
 * - useTransition: https://react.dev/reference/react/useTransition
 * - useDeferredValue: https://react.dev/reference/react/useDeferredValue
 */

import { LazyComponentDemo } from "./01-lazy-component/LazyComponent";
import { LazyTabs } from "./02-lazy-tabs/LazyTabs";
import { TransitionsDemo } from "./03-transitions/Transitions";

const sectionStyle = { marginBottom: "3rem" };

export default function SuspenseExercise() {
  return (
    <div>
      <h1>Exercise 14: Suspense &amp; Concurrent Features</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — Lazy Component</h2>
        <p>Code-split with React.lazy + Suspense. See <code>lazy-component/LazyComponent.tsx</code>.</p>
        <LazyComponentDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Task 2 — Lazy Tabs</h2>
        <p>Tab interface with lazily loaded panels. See <code>lazy-tabs/LazyTabs.tsx</code>.</p>
        <LazyTabs />
      </section>
      <section style={sectionStyle}>
        <h2>Tasks 3-4 — Transitions</h2>
        <p>useTransition and useDeferredValue for non-blocking updates. See <code>transitions/Transitions.tsx</code>.</p>
        <TransitionsDemo />
      </section>
    </div>
  );
}
