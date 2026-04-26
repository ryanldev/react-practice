/*
 * TASKS 2-4 — NotificationProvider
 *
 * Build a NotificationProvider and useNotifications() hook that manages a list
 * of notifications with auto-dismiss. For task 4, split the context into separate
 * state and dispatch contexts to prevent unnecessary re-renders.
 *
 * Hooks: createContext, useContext, useState, useEffect
 *
 * DOCS: https://react.dev/reference/react/useContext
 */

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  // Build your provider here
  return <>{children}</>;
}

export function useNotifications() {
  // Build your hook here
  throw new Error("useNotifications must be used within NotificationProvider");
}

export function NotificationDemo() {
  // Use useNotifications() to render a button that adds a notification
  // and a list that displays and auto-dismisses them
  return null;
}
