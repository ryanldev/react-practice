/*
 * TASK 2-3 — MultiStepForm
 * Build a multi-step form wizard using useReducer.
 *
 * Steps: Personal Info → Contact Info → Review → Submit
 * State: { step: number, data: { firstName, lastName, email, phone } }
 * Actions: { type: 'NEXT' }, { type: 'BACK' }, { type: 'UPDATE', field, value }
 *
 * Type the reducer with discriminated union actions:
 *   type Action =
 *     | { type: 'NEXT' }
 *     | { type: 'BACK' }
 *     | { type: 'UPDATE'; field: string; value: string }
 *
 * DOCS: https://react.dev/reference/react/useReducer
 */
export function MultiStepForm() { return null; }
