"use client"
// http://localhost:3000/exercises/06-forms

/*
 * EXERCISE 6: Forms & Controlled Components
 *
 * KEY CONCEPTS:
 * - Controlled inputs: value + onChange owned by React state
 * - Single onChange handler using e.target.name
 * - Field-level validation errors as a state object
 * - Derive isFormValid during render — never useEffect for this
 *
 * DOCS: https://react.dev/reference/react-dom/components/input
 */

import { ContactForm } from "./01-contact-form/ContactForm";

const sectionStyle = { marginBottom: "3rem" };

export default function FormsExercise() {
  return (
    <div>
      <h1>Exercise 6: Forms &amp; Controlled Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Tasks 1-5 — ContactForm</h2>
        <p>Multi-field form with validation, select, checkbox, and TypeScript event types. See <code>contact-form/ContactForm.tsx</code>.</p>
        <ContactForm />
      </section>
    </div>
  );
}
