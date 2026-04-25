/*
 * TASK 2-4 — NotificationProvider
 * Build a <NotificationProvider> and useNotifications() hook.
 * - Context holds: notifications[], addNotification(), removeNotification()
 * - Notifications auto-dismiss after a timeout
 * - TASK 4: Optimize to prevent unnecessary re-renders by splitting
 *   the context into a state context and a dispatch context
 *
 * DOCS: https://react.dev/reference/react/useContext
 */
export function NotificationProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function useNotifications() { throw new Error("useNotifications must be used within NotificationProvider"); }
