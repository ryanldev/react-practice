/*
 * TASK 3 — useFetch
 * Build a generic data fetching hook.
 *
 * function useFetch<T>(url: string): { data: T | null, loading: boolean, error: string | null }
 *
 * - Fetch on mount and whenever url changes
 * - Return loading/error/data states
 * - Cancel in-flight requests on cleanup with AbortController
 * - Re-fetch when url changes
 */
export function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
  return { data: null, loading: false, error: null };
}
export function UseFetchDemo() { return null; }
