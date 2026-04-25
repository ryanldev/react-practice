import Link from "next/link";
import styles from "./page.module.css";

const exercises = {
  "Phase 1: Fundamentals": [
    { href: "/exercises/01-props", label: "1. JSX & Props", desc: "ProfileCard, ProfileList, spreading props, children" },
    { href: "/exercises/02-state", label: "2. useState & Events", desc: "Counter, ToggleGroup, updater functions" },
    { href: "/exercises/03-lists", label: "3. Conditional Rendering & Lists", desc: "TodoList, .map() with keys, ternaries" },
    { href: "/exercises/04-effects", label: "4. useEffect & Lifecycle", desc: "Clock, WindowSize, useLayoutEffect, DebounceSearch" },
    { href: "/exercises/05-refs", label: "5. useRef & forwardRef", desc: "FocusInput, VideoPlayer, useImperativeHandle" },
    { href: "/exercises/06-forms", label: "6. Forms & Controlled Components", desc: "Multi-field form, validation, TS event types" },
  ],
  "Phase 2: Intermediate Patterns": [
    { href: "/exercises/07-composition", label: "7. Component Composition", desc: "Modal w/ Portal, DataTable, Tabs, polymorphic Button" },
    { href: "/exercises/08-context", label: "8. useContext & State Sharing", desc: "ThemeProvider, NotificationProvider, context optimization" },
    { href: "/exercises/09-reducer", label: "9. useReducer", desc: "TodoList refactor, multi-step form wizard" },
    { href: "/exercises/10-performance", label: "10. Performance", desc: "useMemo, useCallback, React.memo, virtualization" },
    { href: "/exercises/11-custom-hooks", label: "11. Custom Hooks", desc: "useDebounce, useLocalStorage, useFetch" },
  ],
  "Phase 3: Advanced & Interview-Specific": [
    { href: "/exercises/12-data-fetching", label: "12. Data Fetching Patterns", desc: "Pagination, loading/error states, abort controllers" },
    { href: "/exercises/13-error-boundary", label: "13. Error Boundaries", desc: "ErrorBoundary class component, fallback UI" },
    { href: "/exercises/14-suspense", label: "14. Suspense & Concurrent Features", desc: "React.lazy, useTransition, Server Components" },
    { href: "/exercises/15-accessibility", label: "15. Accessibility", desc: "Accordion, keyboard nav, focus trap, useId" },
    { href: "/exercises/16-interview-components", label: "16. Common Interview Components", desc: "Autocomplete, InfiniteScroll, Tooltip, Drag & Drop" },
    { href: "/exercises/17-patterns", label: "17. Patterns & Anti-Patterns", desc: "Lifting state, HOCs, key prop reset, controlled vs uncontrolled" },
  ],
  "Phase 3.5: Testing": [
    { href: "/exercises/18-testing", label: "18. Testing React Components", desc: "React Testing Library, user-event, mocking, a11y testing" },
  ],
  "Phase 4: Capstone": [
    { href: "/dashboard", label: "Project Dashboard", desc: "Full app combining all concepts" },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>React Interview Prep</h1>
      <p style={{ color: "var(--muted)", marginTop: 8, marginBottom: 32 }}>
        Hands-on exercises for senior front-end interview preparation.
      </p>
      <nav className={styles.nav}>
        {Object.entries(exercises).map(([phase, items]) => (
          <div key={phase} className={styles.phase}>
            <h2>{phase}</h2>
            {items.map((ex) => (
              <Link key={ex.href} href={ex.href} className={styles.exerciseLink}>
                <strong>{ex.label}</strong>
                <br />
                <span>{ex.desc}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
