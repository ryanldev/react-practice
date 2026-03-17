/*
 * EXERCISE 6: Forms & Controlled Components
 * Svelte equivalent: bind:value (two-way binding)
 *
 * TASKS:
 * 1. Build a <ContactForm> with fields: name, email, message
 *    - Each input must be "controlled": value={state} onChange={handler}
 *    - This is the biggest difference from Svelte — no two-way binding
 *    - Handle form submission with onSubmit, prevent default
 *
 * 2. Add validation:
 *    - Name: required, min 2 characters
 *    - Email: required, basic email format
 *    - Message: required, min 10 characters
 *    - Show error messages inline below each field
 *    - Validate on blur (not on every keystroke) for better UX
 *    - Disable submit button if form is invalid
 *
 * 3. Build a <Select> dropdown and a <Checkbox> group
 *    - Controlled select: value={selected} onChange={e => setSelected(e.target.value)}
 *    - Checkbox group: manage an array of selected values
 *    - Practice: different input types all follow the same controlled pattern
 *
 * 4. Derive form state without useEffect:
 *    - const isValid = name.length >= 2 && emailRegex.test(email) && message.length >= 10
 *    - This is computed during render — NOT in a useEffect
 *
 * 5. Type your event handlers properly with TypeScript
 *    - onChange handler: (e: React.ChangeEvent<HTMLInputElement>) => void
 *    - onSubmit handler: (e: React.FormEvent<HTMLFormElement>) => void
 *    - onClick handler: (e: React.MouseEvent<HTMLButtonElement>) => void
 *    - onKeyDown handler: (e: React.KeyboardEvent<HTMLInputElement>) => void
 *    - Generic pattern: React.[EventType]Event<HTMLElementType>
 *    - Know these — interviewers notice when you use `any` for event types
 *
 * KEY CONCEPTS:
 * - Controlled: React state is the source of truth, input reflects it
 * - Uncontrolled: DOM is the source of truth, read via ref (rare, but know when)
 * - onChange fires on every keystroke (not on blur like Svelte's bind:value)
 * - e.target.value for inputs, e.target.checked for checkboxes
 *
 * TYPESCRIPT ESSENTIALS FOR REACT:
 * - React.ComponentProps<"button"> — extracts props of an HTML element or component
 * - React.PropsWithChildren<MyProps> — adds children to your props type
 * - React.ReactNode — type for anything renderable (string, number, JSX, null, array)
 * - React.ElementType — type for component or HTML tag string ("div", MyComponent)
 * - Avoid React.FC — it's controversial, prefer typing props directly:
 *   function MyComponent({ name }: { name: string }) { ... }
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Reacting to Input with State: https://react.dev/learn/reacting-to-input-with-state
 * - Sharing State Between Components: https://react.dev/learn/sharing-state-between-components
 * - form (React DOM): https://react.dev/reference/react-dom/components/form
 */

export default function FormsExercise() {
  return (
    <div>
      <h1>Exercise 6: Forms &amp; Controlled Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
