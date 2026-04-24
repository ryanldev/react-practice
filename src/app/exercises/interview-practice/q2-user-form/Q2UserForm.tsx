/*
 * Q2 — Multi-Field Form with Validation & Optimistic Submit (Medium)
 *
 * Build a user profile form that manages object state, validates on submit,
 * and optimistically updates the UI before the API responds.
 *
 * TASKS:
 * 1. Build a <UserForm /> with three controlled inputs:
 *      - firstName (string, required)
 *      - lastName  (string, required)
 *      - email     (string, required, must contain "@")
 *    Store all three fields in a single state object:
 *      const [form, setForm] = useState({ firstName: '', lastName: '', email: '' })
 *    Use a single onChange handler that reads e.target.name to update the right field:
 *      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
 *
 * 2. On submit, validate all fields. If invalid, show an inline error below
 *    each failing field. Do NOT submit if there are validation errors.
 *
 * 3. OPTIMISTIC UI: On a valid submit —
 *      a. Immediately show the submitted data in a "Saved profile" preview below
 *         the form (as if it succeeded).
 *      b. POST to https://jsonplaceholder.typicode.com/users (fake API — always
 *         returns 201 but doesn't actually save anything).
 *      c. If the request fails (simulate by using a bad URL), roll back the
 *         preview and show a form-level error: "Save failed. Please try again."
 *
 * KEY CONCEPTS:
 * - Object state with immutable updates: { ...prev, [name]: value }
 * - Field-level validation errors stored as an object: { firstName: 'Required', ... }
 * - Optimistic update: apply UI change before awaiting the API
 * - Rollback: restore previous state if the API call rejects
 *
 * STRETCH:
 * - Disable the submit button while the request is in-flight
 * - Clear errors for a field as soon as the user starts typing in it
 */

export function UserForm() {
  // Build your component here
  return null;
}
