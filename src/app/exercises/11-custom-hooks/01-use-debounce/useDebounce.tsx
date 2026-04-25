/*
 * TASK 1 — useDebounce
 * Build a hook that delays updating a value until after a specified delay.
 *
 * function useDebounce<T>(value: T, delay: number): T
 *
 * - Store the debounced value in state
 * - useEffect: set a timeout to update it, clear on cleanup
 * - Return the debounced value — it only updates after the user stops changing it
 *
 * Usage: const debouncedQuery = useDebounce(query, 300)
 */
export function useDebounce<T>(value: T, delay: number): T { return value; }
export function UseDebounceDemo() { return null; }
