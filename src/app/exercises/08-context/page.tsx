"use client"
// http://localhost:3000/exercises/08-context

/*
 * EXERCISE 8: useContext & State Sharing
 *
 * KEY CONCEPTS:
 * - Context avoids prop drilling for truly global state
 * - Custom hooks (useTheme, useNotifications) encapsulate context access
 * - Split context into state + dispatch to prevent unnecessary re-renders
 *
 * DOCS: https://react.dev/reference/react/useContext
 */

import { ThemeProvider, useTheme } from "./theme-provider/ThemeProvider";
import { NotificationProvider, useNotifications } from "./notification-provider/NotificationProvider";

const sectionStyle = { marginBottom: "3rem" };

export default function ContextExercise() {
  return (
    <div>
      <h1>Exercise 8: useContext &amp; State Sharing</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Tasks 1 & 3 — ThemeProvider</h2>
        <p>Global theme state with a custom useTheme hook. See <code>theme-provider/ThemeProvider.tsx</code>.</p>
        <ThemeProvider>
          {/* Build a demo component here that calls useTheme() */}
        </ThemeProvider>
      </section>
      <section style={sectionStyle}>
        <h2>Tasks 2, 3 & 4 — NotificationProvider</h2>
        <p>Notifications with auto-dismiss and optimized context. See <code>notification-provider/NotificationProvider.tsx</code>.</p>
        <NotificationProvider>
          {/* Build a demo component here that calls useNotifications() */}
        </NotificationProvider>
      </section>
    </div>
  );
}
