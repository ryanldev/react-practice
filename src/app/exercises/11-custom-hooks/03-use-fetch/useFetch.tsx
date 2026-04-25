/*
 * TASK 3 — useFetch
 *
 * Build a generic hook that fetches data from a URL and returns loading, error,
 * and data states. Cancel stale requests when the URL changes or the component unmounts.
 *
 * Signature: useFetch<T>(url: string): { data: T | null, loading: boolean, error: string | null }
 *
 * Hooks: useState, useEffect
 * Browser API: AbortController
 */

export function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
  // Build your hook here
  return { data: null, loading: false, error: null };
}

export function UseFetchDemo() {
  // Build a demo component here
  return null;
}
