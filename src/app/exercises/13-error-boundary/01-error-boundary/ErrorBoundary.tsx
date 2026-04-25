/*
 * TASK 1-2 — ErrorBoundary
 * Build an <ErrorBoundary> class component.
 *
 * - Must be a class component — hooks cannot catch render errors
 * - Implement getDerivedStateFromError to update state when an error is caught
 * - Implement componentDidCatch for logging
 * - Accept a fallback prop: fallback={<p>Something went wrong</p>}
 * - TASK 4: Wrap individual sections to contain failures granularly
 *
 * DOCS: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
import { Component, ReactNode } from "react";
export class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }> {
  render() { return this.props.children; }
}
