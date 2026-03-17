/*
 * EXERCISE 13: Error Boundaries
 * React-specific — no Svelte equivalent
 *
 * TASKS:
 * 1. Build an <ErrorBoundary> class component
 *    - This is one of the ONLY remaining use cases for class components
 *    - There is no hook equivalent — error boundaries MUST be classes
 *    - Implement:
 *      static getDerivedStateFromError(error) → returns { hasError: true, error }
 *      componentDidCatch(error, errorInfo) → log to console or error reporting service
 *    - Render: if hasError, show fallback UI; otherwise render children
 *
 * 2. Make it reusable with a fallback prop:
 *    - <ErrorBoundary fallback={<p>Something went wrong</p>}>
 *    - Or render prop: fallback={(error, reset) => <div><p>{error.message}</p><button onClick={reset}>Retry</button></div>}
 *    - Add a reset method that sets hasError back to false
 *
 * 3. Build a <BuggyComponent> that throws on purpose (e.g., on button click)
 *    - Wrap it in ErrorBoundary — observe the fallback
 *    - Put a second component OUTSIDE the boundary — observe it still works
 *    - Key insight: error boundaries are like try/catch for the render tree
 *
 * 4. Demonstrate granular error boundaries:
 *    - Wrap different sections independently so one section crashing doesn't take down the page
 *    - <ErrorBoundary fallback={<p>Widget failed</p>}>
 *        <UnstableWidget />
 *      </ErrorBoundary>
 *      <ErrorBoundary fallback={<p>Feed failed</p>}>
 *        <UnstableFeed />
 *      </ErrorBoundary>
 *
 * KEY CONCEPTS:
 * - Error boundaries catch errors during: rendering, lifecycle methods, constructors
 * - They do NOT catch: event handlers (use try/catch), async code, SSR, errors in the boundary itself
 * - For event handler errors: use regular try/catch + error state
 * - In production: pair with error reporting (Sentry, etc.)
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Error Boundaries (Legacy): https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 * - getDerivedStateFromError: https://react.dev/reference/react/Component#static-getderivedstatefromerror
 * - componentDidCatch: https://react.dev/reference/react/Component#componentdidcatch
 */

export default function ErrorBoundaryExercise() {
  return (
    <div>
      <h1>Exercise 13: Error Boundaries</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
