// http://localhost:3000/exercises/18-testing

/*
 * EXERCISE 18: Testing React Components
 *
 * KEY CONCEPTS:
 * - Query by role/label first (accessible queries)
 * - Use userEvent over fireEvent for realistic interactions
 * - Mock at the network boundary, not the module boundary
 * - Test behaviour, not implementation details
 *
 * DOCS:
 * - React Testing Library: https://testing-library.com/docs/react-testing-library/intro
 * - user-event: https://testing-library.com/docs/user-event/intro
 * - jest-axe: https://github.com/nickcolley/jest-axe
 */

export default function TestingExercise() {
  return (
    <div>
      <h1>Exercise 18: Testing React Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Tests live in <code>component-tests/ComponentTests.test.tsx</code> and{" "}
        <code>hook-tests/HookTests.test.tsx</code>. Run them with <code>npm test</code>.
      </p>
      <section style={{ marginBottom: "3rem" }}>
        <h2>Tests 1-4 — Component & Async Tests</h2>
        <p>Presentational, interaction, form validation, and async fetch tests.</p>
      </section>
      <section style={{ marginBottom: "3rem" }}>
        <h2>Tests 5-6 — Hook & Accessibility Tests</h2>
        <p>renderHook for custom hooks, jest-axe for accessibility audits.</p>
      </section>
    </div>
  );
}
