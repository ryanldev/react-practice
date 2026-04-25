/*
 * TASK 1 — TodoList with useReducer
 * Refactor the TodoList from Exercise 3 to use useReducer instead of useState.
 *
 * Actions to handle:
 *   { type: 'ADD', text: string }
 *   { type: 'DELETE', id: number }
 *   { type: 'TOGGLE', id: number }
 *   { type: 'SET_FILTER', filter: TodoFilter }
 *
 * WHY useReducer over useState?
 * - State transitions are explicit and named
 * - Easier to test the reducer function in isolation
 * - Scales better when state updates involve multiple sub-values
 *
 * DOCS: https://react.dev/reference/react/useReducer
 */
export function TodoListReducer() { return null; }
