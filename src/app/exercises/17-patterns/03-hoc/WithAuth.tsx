/*
 * PATTERN 3 — Higher Order Components (HOCs)
 *
 * Build a withAuth HOC that wraps any component with an authentication check,
 * rendering a login prompt if the user is not authenticated.
 *
 * Pattern: HOC (legacy — prefer custom hooks in new code)
 * TypeScript: generics
 *
 * DOCS: https://react.dev/reference/react/Component (legacy)
 */

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    // Build your HOC here
    return null;
  };
}
