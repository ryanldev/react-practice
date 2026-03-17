/*
 * CAPSTONE: Project Dashboard
 * Combines all concepts from Exercises 1-17 into a single application.
 *
 * OVERVIEW:
 * Build a project management dashboard with the following features.
 * Each feature maps back to specific exercises — this is where you prove
 * you can compose everything together in a real app.
 *
 * FEATURES TO BUILD:
 *
 * 1. AUTH CONTEXT (Exercise 8)
 *    - Mock login: hardcoded users, no real auth
 *    - AuthProvider wraps the app, provides: user, login(), logout()
 *    - Show login form when unauthenticated, dashboard when authenticated
 *
 * 2. PROJECT LIST (Exercises 3, 6, 10, 12)
 *    - Fetch projects from mock data or JSONPlaceholder
 *    - Search bar with debounced filtering (useMemo for filtered list)
 *    - Paginated results
 *    - Each ProjectCard is memoized (React.memo)
 *
 * 3. PROJECT DETAIL (Exercises 9, 13)
 *    - Nested route: /dashboard/[projectId]
 *    - Task list managed with useReducer (add, toggle, delete, reorder)
 *    - Wrapped in an ErrorBoundary
 *
 * 4. ADD TASK MODAL (Exercises 6, 7, 15)
 *    - Compound component rendered via Portal
 *    - Controlled form with validation
 *    - Focus trap and keyboard dismiss (Escape)
 *    - Accessible: aria-modal, role="dialog", aria-labelledby
 *
 * 5. THEME TOGGLE (Exercises 8, 11)
 *    - ThemeProvider context with useLocalStorage persistence
 *    - Light/dark mode toggle in the header
 *
 * 6. NOTIFICATIONS (Exercises 4, 8)
 *    - NotificationProvider context
 *    - Auto-dismiss after timeout (useEffect cleanup)
 *    - aria-live="polite" for screen readers
 *
 * 7. PERFORMANCE (Exercise 10)
 *    - Memo the ProjectCard and TaskItem components
 *    - useCallback for handlers passed as props
 *    - useMemo for filtered/sorted lists
 *
 * SUGGESTED COMPONENT TREE:
 *
 *   Dashboard (layout)
 *   ├── Sidebar (navigation)
 *   ├── Header (user info from AuthContext, ThemeToggle)
 *   ├── ProjectList
 *   │   ├── SearchBar (controlled, debounced)
 *   │   ├── ProjectCard (memo'd)
 *   │   └── Pagination
 *   ├── ProjectDetail (nested route)
 *   │   ├── TaskList (useReducer)
 *   │   │   └── TaskItem (memo'd)
 *   │   ├── AddTaskModal (portal, compound, accessible)
 *   │   └── ErrorBoundary
 *   └── NotificationToast (from context, aria-live)
 *
 * SUGGESTED FILE STRUCTURE:
 *
 *   /dashboard
 *   ├── layout.tsx          — dashboard shell (sidebar, header, providers)
 *   ├── page.tsx            — project list view (this file)
 *   ├── [projectId]/
 *   │   └── page.tsx        — project detail view
 *   ├── components/
 *   │   ├── Sidebar.tsx
 *   │   ├── Header.tsx
 *   │   ├── ProjectCard.tsx
 *   │   ├── SearchBar.tsx
 *   │   ├── Pagination.tsx
 *   │   ├── TaskList.tsx
 *   │   ├── TaskItem.tsx
 *   │   ├── AddTaskModal.tsx
 *   │   └── NotificationToast.tsx
 *   ├── context/
 *   │   ├── AuthContext.tsx
 *   │   ├── ThemeContext.tsx
 *   │   └── NotificationContext.tsx
 *   └── hooks/
 *       └── (reuse hooks from /src/hooks/)
 *
 * IMPORTANT: This file needs "use client" at the top.
 */

export default function DashboardPage() {
  return (
    <div>
      <h1>Capstone: Project Dashboard</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Read the comments at the top of this file for the full spec.
        Build the dashboard piece by piece, starting with the component tree and providers.
      </p>
      {/* START HERE */}
    </div>
  );
}
