/*
 * TASK 2 — useLocalStorage
 * Build a hook that syncs state with localStorage.
 *
 * function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void]
 *
 * - Initialize state from localStorage.getItem(key) if it exists
 * - Wrap the setter to also call localStorage.setItem
 * - Handle JSON serialization/deserialization
 * - Handle SSR (localStorage is not available on the server)
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  return [initialValue, () => {}];
}
export function UseLocalStorageDemo() { return null; }
