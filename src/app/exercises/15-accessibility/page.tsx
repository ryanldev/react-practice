"use client"
// http://localhost:3000/exercises/15-accessibility

/*
 * EXERCISE 15: Accessibility
 *
 * KEY CONCEPTS:
 * - Use semantic HTML and ARIA roles to communicate structure to screen readers
 * - Keyboard navigation: Tab, Enter, Space, Arrow keys
 * - Focus management: trap focus in modals, restore on close
 * - useId: stable unique IDs for label/input associations
 * - aria-live: announce dynamic changes to screen readers
 *
 * DOCS:
 * - WAI-ARIA Patterns: https://www.w3.org/WAI/ARIA/apg/patterns/
 * - useId: https://react.dev/reference/react/useId
 */

import { Accordion } from "./01-accordion/Accordion";
import { AccessibleTabs } from "./02-tabs/AccessibleTabs";
import { AccessibleModal } from "./03-modal/AccessibleModal";
import { LiveRegion } from "./04-live-region/LiveRegion";

const sectionStyle = { marginBottom: "3rem" };

export default function AccessibilityExercise() {
  return (
    <div>
      <h1>Exercise 15: Accessibility</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — Accordion</h2>
        <p>Keyboard navigable accordion with correct ARIA attributes. See <code>accordion/Accordion.tsx</code>.</p>
        <Accordion />
      </section>
      <section style={sectionStyle}>
        <h2>Task 2 — Accessible Tabs</h2>
        <p>Tab component with role="tablist" and arrow key navigation. See <code>tabs/AccessibleTabs.tsx</code>.</p>
        <AccessibleTabs />
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — Focus Trap Modal</h2>
        <p>Modal that traps focus and restores it on close. See <code>modal/AccessibleModal.tsx</code>.</p>
        <AccessibleModal />
      </section>
      <section style={sectionStyle}>
        <h2>Tasks 4-5 — useId & LiveRegion</h2>
        <p>Stable IDs for form labels and aria-live announcements. See <code>live-region/LiveRegion.tsx</code>.</p>
        <LiveRegion />
      </section>
    </div>
  );
}
