/*
 * EXERCISE 15: Accessibility (a11y)
 * Critical for senior roles — often a disqualifier if missing
 *
 * TASKS:
 * 1. Build an accessible <Accordion>
 *    - Each item has a header (trigger) and content (panel)
 *    - ARIA requirements:
 *      - Trigger: role="button", aria-expanded="true/false", aria-controls="panel-id"
 *      - Panel: role="region", aria-labelledby="trigger-id", hidden when collapsed
 *    - Keyboard: Enter/Space to toggle, focus is visible
 *
 * 2. Add keyboard navigation to a <Tabs> component
 *    - Tab triggers have role="tab", tab panels have role="tabpanel"
 *    - Container has role="tablist"
 *    - Arrow Left/Right: move focus between tabs
 *    - Home/End: jump to first/last tab
 *    - aria-selected="true" on active tab
 *    - tabIndex={0} on active tab, tabIndex={-1} on others (roving tabindex pattern)
 *
 * 3. Build a focus trap for a <Modal>
 *    - When modal opens: focus the first focusable element inside
 *    - Tab/Shift+Tab cycles through focusable elements WITHIN the modal only
 *    - Escape closes the modal
 *    - When modal closes: return focus to the element that opened it
 *    - aria-modal="true", role="dialog", aria-labelledby="modal-title"
 *
 * 4. Use useId for accessible form labels
 *    - const id = useId()  // generates a stable unique ID like ":r1:"
 *    - <label htmlFor={`${id}-email`}>Email</label>
 *    - <input id={`${id}-email`} />
 *    - Why? Hardcoded IDs break when components render multiple times on a page
 *    - useId guarantees uniqueness even with server rendering (hydration-safe)
 *    - Use for: form labels, aria-describedby, aria-labelledby, any id/htmlFor pairing
 *
 * 5. Build a <LiveRegion> notification area
 *    - Use aria-live="polite" for non-urgent updates (toast notifications)
 *    - Use aria-live="assertive" for urgent updates (error messages)
 *    - Screen readers announce content changes in live regions automatically
 *
 * KEY CONCEPTS:
 * - Semantic HTML first: <button>, <nav>, <main>, <h1>-<h6> — these have built-in a11y
 * - ARIA is a supplement, not a replacement for semantic HTML
 * - Keyboard navigation: everything clickable must be keyboard accessible
 * - Focus management: modals, route changes, dynamic content
 * - Color contrast: 4.5:1 for normal text, 3:1 for large text (WCAG AA)
 * - Test with: screen reader (VoiceOver on Mac: Cmd+F5), keyboard only, axe DevTools
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Accessibility (React): https://legacy.reactjs.org/docs/accessibility.html
 * - WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns/
 * - Accordion Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 * - Tabs Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 * - Dialog Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
 * - useId: https://react.dev/reference/react/useId
 */

export default function AccessibilityExercise() {
  return (
    <div>
      <h1>Exercise 15: Accessibility</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
