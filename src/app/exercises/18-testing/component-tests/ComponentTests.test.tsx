/*
 * TESTS 1-4 — Component & Async Tests
 *
 * TEST 1: Presentational component
 * - Render a <ProfileCard> and assert name, role, avatar are visible
 * - Query by role/label (accessible queries first)
 *
 * TEST 2: User interactions
 * - Render a <Counter> and use userEvent to click increment/decrement
 * - Assert the displayed count updates correctly
 *
 * TEST 3: Form with validation
 * - Submit an empty <ContactForm> and assert error messages appear
 * - Fill in valid data, submit, and assert success state
 *
 * TEST 4: Async behavior
 * - Mock fetch with jest.fn() or msw
 * - Render a data-fetching component and await the results to appear
 * - Test the error state by making the mock reject
 *
 * DOCS:
 * - React Testing Library: https://testing-library.com/docs/react-testing-library/intro
 * - user-event: https://testing-library.com/docs/user-event/intro
 */
