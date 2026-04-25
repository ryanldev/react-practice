/*
 * TASK 3 — MeasuredBox
 *
 * Build a <MeasuredBox> using useLayoutEffect.
 *
 * - Render a box with dynamic content, measure its height with getBoundingClientRect()
 * - useLayoutEffect runs synchronously AFTER DOM mutation but BEFORE the browser paints
 * - Use case: measuring DOM elements to position tooltips, adjust layout, prevent visual flicker
 *
 * WHY NOT useEffect?
 * - useEffect would cause a visible flash: render → paint → measure → re-render
 * - useLayoutEffect prevents it:         render → measure → re-render → paint
 *
 * RULE: use useEffect by default. Only reach for useLayoutEffect when you need
 * to measure or mutate the DOM before the browser paints.
 *
 * DOCS:
 * - useLayoutEffect: https://react.dev/reference/react/useLayoutEffect
 */

export function MeasuredBox() {
  // Build your component here
  return null;
}
