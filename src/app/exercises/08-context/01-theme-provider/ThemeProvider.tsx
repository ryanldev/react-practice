/*
 * TASK 1 — ThemeProvider
 * Build a <ThemeProvider> and useTheme() custom hook.
 * - Context holds: theme ('light' | 'dark') and toggleTheme()
 * - useTheme() throws if used outside the provider
 * - Apply theme class to root element or use CSS variables
 *
 * DOCS: https://react.dev/reference/react/useContext
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function useTheme() { throw new Error("useTheme must be used within ThemeProvider"); }
