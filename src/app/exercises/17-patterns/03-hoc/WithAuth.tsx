/*
 * PATTERN 3 — Higher Order Components (HOCs)
 * A function that takes a component and returns a new component with added behaviour.
 *
 * Build withAuth(Component) — wraps any component with an auth check.
 * - If user is not authenticated, redirect or show a login prompt
 * - If authenticated, render the original component with all its props
 *
 * NOTE: HOCs are a legacy pattern from before hooks. Prefer custom hooks today.
 * You'll still encounter HOCs in older codebases — know how to read them.
 *
 * DOCS: https://react.dev/reference/react/Component (legacy)
 */
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) { return null; };
}
