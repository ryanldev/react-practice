/*
 * TASK 3 — BuggyComponent
 * Build a component that throws on purpose to test the ErrorBoundary.
 *
 * - Add a button that sets a state flag
 * - When the flag is true, throw an error during render
 * - Wrap it in <ErrorBoundary> to catch it gracefully
 *
 * NOTE: Errors thrown in event handlers are NOT caught by ErrorBoundary.
 * Only errors thrown during render, in lifecycle methods, or in constructors are caught.
 */
export function BuggyComponent() { return null; }
