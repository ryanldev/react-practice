/*
 * TASK 3 — usePrevious
 * Build a custom hook that returns the previous value of any state.
 * - useRef stores the value across renders without triggering a re-render
 * - useEffect runs after render — use it to update the ref to the current value
 * - On the next render, ref.current holds the value from the previous render
 */
export function usePrevious<T>(value: T): T | undefined { return undefined; }
export function PreviousValueDemo() { return null; }
