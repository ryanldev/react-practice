"use client"
// http://localhost:3000/exercises/05-refs

/*
 * EXERCISE 5: useRef, forwardRef & Uncontrolled DOM
 * Svelte equivalent: bind:this
 *
 * KEY CONCEPTS:
 * - useRef stores a mutable value that persists across renders without causing re-renders
 * - ref.current is the escape hatch to the real DOM node
 * - forwardRef lets parent components access a child's DOM node
 * - useImperativeHandle lets you control what the parent can access via the ref
 *
 * DOCS:
 * - useRef: https://react.dev/reference/react/useRef
 * - forwardRef: https://react.dev/reference/react/forwardRef
 * - useImperativeHandle: https://react.dev/reference/react/useImperativeHandle
 */

import { FocusInput } from "./focus-input/FocusInput";
import { Stopwatch } from "./stopwatch/Stopwatch";
import { PreviousValueDemo } from "./previous-value/PreviousValue";
import { TextInput } from "./text-input/TextInput";
import { FancyInput } from "./fancy-input/FancyInput";

const sectionStyle = { marginBottom: "3rem" };

export default function RefsExercise() {
  return (
    <div>
      <h1>Exercise 5: useRef, forwardRef &amp; Uncontrolled DOM</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — FocusInput</h2>
        <p>Auto-focus an input on mount. See <code>focus-input/FocusInput.tsx</code>.</p>
        <FocusInput />
      </section>
      <section style={sectionStyle}>
        <h2>Task 2 — Stopwatch</h2>
        <p>Persist interval ID across renders with useRef. See <code>stopwatch/Stopwatch.tsx</code>.</p>
        <Stopwatch />
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — usePrevious</h2>
        <p>Custom hook returning the previous render's value. See <code>previous-value/PreviousValue.tsx</code>.</p>
        <PreviousValueDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Task 4 — TextInput with forwardRef</h2>
        <p>Forward a ref to an inner input element. See <code>text-input/TextInput.tsx</code>.</p>
        <TextInput placeholder="Forwarded ref input" />
      </section>
      <section style={sectionStyle}>
        <h2>Task 5 — FancyInput with useImperativeHandle</h2>
        <p>Expose a custom API via ref. See <code>fancy-input/FancyInput.tsx</code>.</p>
        <FancyInput />
      </section>
    </div>
  );
}
