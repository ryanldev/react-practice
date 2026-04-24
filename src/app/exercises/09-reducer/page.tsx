// http://localhost:3000/exercises/09-reducer

/*
 * EXERCISE 9: useReducer
 * Svelte equivalent: No direct equivalent (closest: custom store with update logic)
 *
 * TASKS:
 * 1. Refactor the TodoList from Exercise 3 to use useReducer
 *    - Define a reducer: (state, action) => newState
 *    - Action types: ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER
 *    - State shape: { todos: Todo[], filter: "all" | "active" | "completed" }
 *    - Use dispatch({ type: "ADD_TODO", payload: { text } }) instead of setState
 *
 * 2. Build a <MultiStepForm> wizard with useReducer
 *    - 3 steps: Personal Info → Preferences → Review & Submit
 *    - State: { step: number, data: { name, email, plan, newsletter }, errors: {} }
 *    - Actions: NEXT_STEP, PREV_STEP, UPDATE_FIELD, SET_ERRORS, RESET
 *    - Show a progress indicator and Back/Next buttons
 *    - Review step shows all collected data
 *
 * 3. Type the reducer properly with TypeScript:
 *    - type Action = { type: "ADD_TODO"; payload: { text: string } } | { type: "TOGGLE_TODO"; payload: { id: number } } | ...
 *    - This gives you exhaustive checking in the switch statement
 *    - Use discriminated unions — the TypeScript compiler ensures you handle all cases
 *
 * KEY CONCEPTS:
 * - useReducer(reducer, initialState) returns [state, dispatch]
 * - Reducer must be pure: no side effects, no mutations, return new state
 * - When to use useReducer vs useState:
 *   - Multiple related state values that update together
 *   - Next state depends on previous state in complex ways
 *   - You want to centralize update logic
 * - dispatch is stable (doesn't change between renders) — safe to pass as prop without useCallback
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useReducer: https://react.dev/reference/react/useReducer
 * - Extracting State Logic into a Reducer: https://react.dev/learn/extracting-state-logic-into-a-reducer
 * - Scaling Up with Reducer and Context: https://react.dev/learn/scaling-up-with-reducer-and-context
 */

export default function ReducerExercise() {
  return (
    <div>
      <h1>Exercise 9: useReducer</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
