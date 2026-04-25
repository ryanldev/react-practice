/*
 * TASKS 1, 2 & 4 — ErrorBoundary
 *
 * Build a reusable ErrorBoundary class component that accepts a fallback prop.
 * Use it to wrap individual sections of the UI for granular error containment.
 *
 * Pattern: class component (required — hooks cannot catch render errors)
 * Lifecycle methods: getDerivedStateFromError, componentDidCatch
 *
 * DOCS: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

import { Component, ReactNode } from "react";

export class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }> {
  // Build your error boundary here
  render() { return this.props.children; }
}
