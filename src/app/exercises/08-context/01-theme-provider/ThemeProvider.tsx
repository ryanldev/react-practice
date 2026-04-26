/*
 * TASK 1 — ThemeProvider
 *
 * Build a ThemeProvider and a useTheme() custom hook that exposes the current
 * theme and a toggle function. The hook should throw if used outside the provider.
 *
 * Hooks: createContext, useContext, useState
 *
 * DOCS: https://react.dev/reference/react/useContext
 */

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Build your provider here
  return <>{children}</>;
}

export function useTheme() {
  // Build your hook here
  throw new Error("useTheme must be used within ThemeProvider");
}

export function ThemeDemo() {
  // Use useTheme() to read the current theme and render a toggle button
  return null;
}
