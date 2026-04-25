"use client"
// http://localhost:3000/exercises/09-reducer

/*
 * EXERCISE 9: useReducer
 *
 * KEY CONCEPTS:
 * - useReducer is preferable to useState when state transitions are complex
 * - Actions are explicit and named — easier to reason about and test
 * - Discriminated union types make the reducer exhaustive and type-safe
 *
 * DOCS: https://react.dev/reference/react/useReducer
 */

import { TodoListReducer } from "./todo-list/TodoListReducer";
import { MultiStepForm } from "./multi-step-form/MultiStepForm";

const sectionStyle = { marginBottom: "3rem" };

export default function ReducerExercise() {
  return (
    <div>
      <h1>Exercise 9: useReducer</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — TodoList with useReducer</h2>
        <p>Refactor Exercise 3's TodoList to use useReducer. See <code>todo-list/TodoListReducer.tsx</code>.</p>
        <TodoListReducer />
      </section>
      <section style={sectionStyle}>
        <h2>Tasks 2-3 — MultiStepForm</h2>
        <p>Multi-step form wizard with typed discriminated union actions. See <code>multi-step-form/MultiStepForm.tsx</code>.</p>
        <MultiStepForm />
      </section>
    </div>
  );
}
