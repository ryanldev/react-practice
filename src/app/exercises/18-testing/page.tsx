/*
 * EXERCISE 18: Testing React Components
 * Frequently tested in senior interviews — expect "how would you test this?" follow-ups
 *
 * SETUP:
 * npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
 *
 * TASKS:
 * 1. Test a presentational component
 *    - Write tests for your <ProfileCard> from Exercise 1
 *    - Test: renders name and role, renders default avatar when none provided
 *    - render(<ProfileCard name="Ada" role="Engineer" />)
 *    - expect(screen.getByText("Ada")).toBeInTheDocument()
 *    - expect(screen.getByRole("img")).toHaveAttribute("src", expect.stringContaining("default"))
 *
 * 2. Test user interactions
 *    - Write tests for your <Counter> from Exercise 2
 *    - Use @testing-library/user-event (NOT fireEvent — user-event is more realistic)
 *    - await userEvent.click(screen.getByRole("button", { name: /increment/i }))
 *    - expect(screen.getByText("1")).toBeInTheDocument()
 *    - Test: increment, decrement, reset, boundary conditions
 *
 * 3. Test a form with validation
 *    - Write tests for your <ContactForm> from Exercise 6
 *    - Test: empty submission shows errors, valid submission calls onSubmit
 *    - await userEvent.type(screen.getByLabelText(/email/i), "invalid")
 *    - await userEvent.click(screen.getByRole("button", { name: /submit/i }))
 *    - expect(screen.getByText(/valid email/i)).toBeInTheDocument()
 *
 * 4. Test async behavior with mocked API
 *    - Write tests for a component that fetches data
 *    - Mock fetch: global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }))
 *    - Use findByText (async) instead of getByText: await screen.findByText("loaded data")
 *    - Test: loading state shows, data renders, error state on failure
 *    - Clean up mocks: afterEach(() => jest.restoreAllMocks())
 *
 * 5. Test a custom hook
 *    - Write tests for your useDebounce from Exercise 11
 *    - import { renderHook, act } from "@testing-library/react"
 *    - const { result } = renderHook(() => useDebounce("hello", 300))
 *    - act(() => jest.advanceTimersByTime(300))
 *    - expect(result.current).toBe("hello")
 *
 * 6. Test accessibility
 *    - Use jest-axe for automated a11y testing:
 *      npm install --save-dev jest-axe
 *    - const { container } = render(<Accordion items={items} />)
 *    - const results = await axe(container)
 *    - expect(results).toHaveNoViolations()
 *    - Verify keyboard interactions work in tests
 *
 * KEY CONCEPTS:
 * - Query priority: getByRole > getByLabelText > getByText > getByTestId
 *   (prefer accessible queries — tests should reflect how users interact with the UI)
 * - getBy* throws if not found, queryBy* returns null, findBy* is async (waits)
 * - NEVER test implementation details (state values, component instances, internal methods)
 * - Test BEHAVIOR: "when user clicks X, Y appears" — not "state.count equals 1"
 * - Arrange → Act → Assert pattern
 * - userEvent > fireEvent (userEvent simulates real browser behavior)
 * - Mock only what you must (network requests, timers) — don't mock React internals
 *
 * INTERVIEW TIP:
 * When asked "how would you test this?", structure your answer:
 * 1. What to test (happy path, edge cases, error states)
 * 2. How to query elements (by role, by label — accessible queries first)
 * 3. How to simulate user behavior (userEvent for clicks, types, etc.)
 * 4. What to assert (visible output, not internal state)
 *
 * DOCS:
 * - React Testing Library: https://testing-library.com/docs/react-testing-library/intro
 * - Queries priority: https://testing-library.com/docs/queries/about#priority
 * - user-event: https://testing-library.com/docs/user-event/intro
 * - renderHook: https://testing-library.com/docs/react-testing-library/api#renderhook
 * - jest-axe: https://github.com/nickcolley/jest-axe
 * - Common mistakes: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
 */

export default function TestingExercise() {
  return (
    <div>
      <h1>Exercise 18: Testing React Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your tests alongside the components from previous exercises.
        Read the comments at the top of this file for instructions.
      </p>
      {/* Tests go in separate .test.tsx files — see instructions above for setup */}
    </div>
  );
}
