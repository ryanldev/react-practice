// http://localhost:3000/exercises/13-error-boundary

/*
 * EXERCISE 13: Error Boundaries
 *
 * KEY CONCEPTS:
 * - Error boundaries must be class components — hooks cannot catch render errors
 * - getDerivedStateFromError: update state to show fallback UI
 * - componentDidCatch: log the error
 * - Wrap individual sections for granular error containment
 *
 * DOCS: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

import { ErrorBoundary } from "./01-error-boundary/ErrorBoundary";
import { BuggyComponent } from "./02-buggy-component/BuggyComponent";

const sectionStyle = { marginBottom: "3rem" };

export default function ErrorBoundaryExercise() {
  return (
    <div>
      <h1>Exercise 13: Error Boundaries</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Tasks 1, 2 & 4 — ErrorBoundary</h2>
        <p>Reusable class component with fallback prop. See <code>error-boundary/ErrorBoundary.tsx</code>.</p>
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — BuggyComponent</h2>
        <p>Throws during render to test the boundary. See <code>buggy-component/BuggyComponent.tsx</code>.</p>
        <ErrorBoundary fallback={<p>Something went wrong.</p>}>
          <BuggyComponent />
        </ErrorBoundary>
      </section>
    </div>
  );
}
