/*
 * TASK 2 — useLocalStorage
 *
 * Build a hook that works like useState but persists the value to localStorage.
 * Handle JSON serialization and the case where localStorage is unavailable (SSR).
 *
 * Signature: useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void]
 *
 * Hooks: useState
 */

export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  // Build your hook here
  return [initialValue, () => {}];
}

export function UseLocalStorageDemo() {
  // Build a demo component here
  return null;
}
