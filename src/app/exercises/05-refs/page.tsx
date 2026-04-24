// http://localhost:3000/exercises/05-refs

/*
 * EXERCISE 5: useRef, forwardRef & Uncontrolled DOM
 * Svelte equivalent: bind:this
 *
 * TASKS:
 * 1. Build a <FocusInput> that auto-focuses an input on mount
 *    - const inputRef = useRef<HTMLInputElement>(null)
 *    - useEffect(() => { inputRef.current?.focus() }, [])
 *    - Attach with: <input ref={inputRef} />
 *
 * 2. Build a <Stopwatch> using useRef to persist the interval ID
 *    - useRef for the interval ID (doesn't cause re-render when changed)
 *    - useState for the displayed time (does cause re-render)
 *    - Start/Stop/Reset buttons
 *    - Key insight: useRef persists values across renders WITHOUT triggering re-renders
 *
 * 3. Build a <PreviousValue> custom hook: usePrevious(value)
 *    - Returns the value from the previous render
 *    - Uses useRef + useEffect to store the previous value after render
 *
 * 4. Build a reusable <TextInput> component using forwardRef
 *    - The parent should be able to call inputRef.current.focus() on your TextInput
 *    - const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => { ... })
 *
 * 5. Build a <FancyInput> using useImperativeHandle
 *    - Expose a custom API: { focus: () => void, clear: () => void, getValue: () => string }
 *    - The parent gets this custom API instead of the raw DOM node
 *    - useImperativeHandle(ref, () => ({ focus() { ... }, clear() { ... } }))
 *
 * KEY CONCEPTS:
 * - useRef returns { current: value } that persists across renders
 * - Changing ref.current does NOT trigger a re-render (unlike useState)
 * - forwardRef lets parent components access a child's DOM node
 * - useImperativeHandle customizes what the parent sees through the ref
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useRef: https://react.dev/reference/react/useRef
 * - forwardRef: https://react.dev/reference/react/forwardRef
 * - useImperativeHandle: https://react.dev/reference/react/useImperativeHandle
 * - Manipulating the DOM with Refs: https://react.dev/learn/manipulating-the-dom-with-refs
 */

export default function RefsExercise() {
  return (
    <div>
      <h1>Exercise 5: useRef &amp; forwardRef</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
