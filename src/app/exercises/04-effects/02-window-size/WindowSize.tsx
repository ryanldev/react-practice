/*
 * TASK 2 — WindowSize
 *
 * Build a <WindowSize> component that tracks and displays window width/height.
 *
 * - Add event listener on mount, remove on cleanup:
 *     useEffect(() => {
 *       window.addEventListener('resize', handler);
 *       return () => window.removeEventListener('resize', handler);
 *     }, [])
 *
 * KEY CONCEPTS:
 * - Empty deps [] = run once on mount, cleanup on unmount
 * - Always pair addEventListener with removeEventListener in cleanup
 * - Forgetting cleanup means the listener fires even after the component is gone
 *
 * DOCS:
 * - useEffect: https://react.dev/reference/react/useEffect
 * - Lifecycle of Reactive Effects: https://react.dev/learn/lifecycle-of-reactive-effects
 */

export function WindowSize() {
  // Build your component here
  return null;
}
