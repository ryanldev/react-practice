/*
 * EXERCISE 17: React Patterns & Anti-Patterns
 * High-value interview knowledge — more conceptual, less building
 *
 * TASKS:
 * Build small demos that illustrate each pattern. The goal is to understand
 * WHEN and WHY to use each, not just how.
 *
 * 1. LIFTING STATE UP
 *    - Build two sibling <TemperatureInput> components (Celsius + Fahrenheit)
 *    - They need to stay in sync — when one changes, the other updates
 *    - Lift the shared temperature state to their common parent
 *    - Parent passes value + onChange down to each child
 *    - This is React's answer to Svelte's two-way binding between siblings
 *
 * 2. KEY PROP FOR RESETTING STATE
 *    - Build a <Chat> component that takes a contactId prop
 *    - It has internal state: message draft, scroll position
 *    - Problem: switching contacts doesn't reset the draft (React reuses the component)
 *    - Fix: <Chat key={contactId} contactId={contactId} />
 *    - The key change forces React to unmount/remount, resetting all internal state
 *
 * 3. HIGHER ORDER COMPONENTS (HOCs) — legacy pattern
 *    - Build withLogger(Component): wraps a component and logs when it renders
 *    - function withLogger<P>(Component: React.ComponentType<P>) {
 *        return function LoggedComponent(props: P) {
 *          console.log(`${Component.name} rendered`, props);
 *          return <Component {...props} />;
 *        }
 *      }
 *    - Know trade-offs: HOCs compose poorly, don't work with hooks, create wrapper hell
 *    - Modern alternative: custom hooks for logic reuse
 *
 * 4. ANTI-PATTERNS TO AVOID:
 *    a. useEffect for derived state (just compute it during render)
 *       BAD:  useEffect(() => { setFullName(first + " " + last) }, [first, last])
 *       GOOD: const fullName = first + " " + last
 *
 *    b. Copying props into state
 *       BAD:  const [color, setColor] = useState(props.initialColor) // stale!
 *       GOOD: Use the prop directly, or use key prop to reset
 *
 *    c. Unnecessary useEffect for event-driven logic
 *       BAD:  useEffect(() => { if (submitted) sendData() }, [submitted])
 *       GOOD: Call sendData() directly in the submit handler
 *
 *    d. Prop drilling through many layers
 *       Signs: passing props 3+ levels deep that intermediate components don't use
 *       Fix: useContext, component composition (pass components as props), or state management
 *
 * KEY CONCEPTS:
 * - These patterns are about ARCHITECTURE, not API knowledge
 * - Interviewers use these to gauge seniority — juniors know hooks, seniors know when to use them
 * - "You Might Not Need an Effect" (React docs) is essential reading
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Thinking in React: https://react.dev/learn/thinking-in-react
 * - Sharing State Between Components: https://react.dev/learn/sharing-state-between-components
 * - You Might Not Need an Effect: https://react.dev/learn/you-might-not-need-an-effect
 * - Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state
 * - Choosing the State Structure: https://react.dev/learn/choosing-the-state-structure
 */

export default function PatternsExercise() {
  return (
    <div>
      <h1>Exercise 17: Patterns &amp; Anti-Patterns</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
