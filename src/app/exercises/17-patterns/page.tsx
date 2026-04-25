"use client"
// http://localhost:3000/exercises/17-patterns

/*
 * EXERCISE 17: Patterns & Anti-Patterns
 *
 * KEY CONCEPTS:
 * - Lift state to the nearest common ancestor when siblings need to share it
 * - Use the key prop to reset component state instead of syncing with useEffect
 * - HOCs are a legacy pattern — prefer custom hooks today
 * - Anti-patterns: derived state in useEffect, index as key, mutating state
 *
 * DOCS:
 * - Sharing State: https://react.dev/learn/sharing-state-between-components
 * - Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state
 */

import { LiftingStateDemo } from "./01-lifting-state/LiftingState";
import { KeyResetDemo } from "./02-key-reset/KeyReset";
import { withAuth } from "./03-hoc/WithAuth";

const sectionStyle = { marginBottom: "3rem" };

export default function PatternsExercise() {
  return (
    <div>
      <h1>Exercise 17: Patterns &amp; Anti-Patterns</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your demos below. Each pattern lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Pattern 1 — Lifting State Up</h2>
        <p>Synced Celsius/Fahrenheit inputs with one source of truth. See <code>lifting-state/LiftingState.tsx</code>.</p>
        <LiftingStateDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Pattern 2 — Key Prop Reset</h2>
        <p>Reset component state by changing the key prop. See <code>key-reset/KeyReset.tsx</code>.</p>
        <KeyResetDemo />
      </section>
      <section style={sectionStyle}>
        <h2>Pattern 3 — Higher Order Components</h2>
        <p>withAuth HOC — legacy pattern, know how to read it. See <code>hoc/WithAuth.tsx</code>.</p>
      </section>
    </div>
  );
}
