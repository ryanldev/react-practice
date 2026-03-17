/*
 * EXERCISE 8: useContext & State Sharing
 * Svelte equivalent: setContext/getContext, Svelte stores
 *
 * TASKS:
 * 1. Build a <ThemeProvider> and useTheme hook
 *    - Create ThemeContext with createContext<{ theme: string; toggle: () => void }>()
 *    - ThemeProvider manages "light" | "dark" state, provides value + toggle
 *    - useTheme() custom hook wraps useContext(ThemeContext) with an error check
 *    - Build a <ThemeToggle> button that consumes the context
 *    - Build a <ThemedCard> that styles itself based on the theme
 *
 * 2. Build a <NotificationProvider> and useNotifications hook
 *    - Manage an array of notifications: { id, message, type: "info" | "error" | "success" }
 *    - Provide: notifications, addNotification(msg, type), removeNotification(id)
 *    - Build a <NotificationList> that renders all active notifications
 *    - Auto-dismiss notifications after 3 seconds using useEffect
 *
 * 3. Compose both providers in this page:
 *    - <ThemeProvider>
 *        <NotificationProvider>
 *          { your demo components }
 *        </NotificationProvider>
 *      </ThemeProvider>
 *    - This is how you'd do it in layout.tsx for a real app
 *
 * 4. Optimize context to prevent unnecessary re-renders
 *    - Problem: every consumer re-renders when ANY part of context value changes
 *    - Demo this: add an unrelated counter to ThemeProvider, observe all consumers re-render
 *    - Fix 1: Split into separate contexts (ThemeContext + ThemeDispatchContext)
 *    - Fix 2: Memoize the value object:
 *      const value = useMemo(() => ({ theme, toggle }), [theme])
 *    - Fix 3: For complex state, combine useReducer + context (dispatch never changes):
 *      <StateContext.Provider value={state}>
 *        <DispatchContext.Provider value={dispatch}>
 *    - This is the pattern React docs recommend for scaling context
 *
 * KEY CONCEPTS:
 * - createContext + Provider + useContext = React's state sharing
 * - Always wrap useContext in a custom hook with an error guard
 * - Context causes ALL consumers to re-render when value changes
 * - To avoid this: split context (one for state, one for dispatch) or use useMemo
 * - Unlike Svelte stores, context doesn't have built-in reactivity — it relies on useState
 *
 * FILE STRUCTURE HINT:
 * Create these as separate files in this folder:
 *   /exercises/context/ThemeContext.tsx
 *   /exercises/context/NotificationContext.tsx
 *   /exercises/context/page.tsx (this file)
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - useContext: https://react.dev/reference/react/useContext
 * - createContext: https://react.dev/reference/react/createContext
 * - Passing Data Deeply with Context: https://react.dev/learn/passing-data-deeply-with-context
 * - Scaling Up with Reducer and Context: https://react.dev/learn/scaling-up-with-reducer-and-context
 */

export default function ContextExercise() {
  return (
    <div>
      <h1>Exercise 8: useContext &amp; State Sharing</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
