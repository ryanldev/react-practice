# React Interview Prep Curriculum
> For developers coming from Svelte/SvelteKit

## Phase 1: React Fundamentals
*Standalone exercises — one route per concept*

### Exercise 1: JSX & Props (`/exercises/01-props`)
**Svelte equivalent:** `export let prop` and template syntax
- Build a `ProfileCard` component that accepts name, role, avatar URL
- Build a `ProfileList` that renders multiple `ProfileCard`s from an array
- Practice: spreading props, default props, destructuring, children prop
- **Key difference from Svelte:** JSX is JavaScript expressions, not a template language

### Exercise 2: useState & Events (`/exercises/02-state`)
**Svelte equivalent:** `let count = 0` (reactive by default)
- Build a `Counter` with increment/decrement/reset
- Build a `ToggleGroup` (like tabs) managing which item is active
- Practice: updater functions `setState(prev => prev + 1)`, object/array state
- **Key difference from Svelte:** State updates are explicit (setState), not implicit assignment

### Exercise 3: Conditional Rendering & Lists (`/exercises/03-lists`)
**Svelte equivalent:** `{#if}`, `{#each}`
- Build a `TodoList` with add/remove/toggle complete
- Conditional empty state, loading state, error state
- Practice: `.map()` with keys, ternaries, `&&` short-circuit rendering
- **Key difference from Svelte:** No template directives — it's all JS expressions

### Exercise 4: useEffect & Lifecycle (`/exercises/04-effects`)
**Svelte equivalent:** `onMount`, `$:` reactive statements
- Build a `Clock` that updates every second (setup + cleanup)
- Build a `WindowSize` tracker using resize listener
- Build a `DebounceSearch` that fetches after typing stops
- **Key difference from Svelte:** useEffect replaces onMount, onDestroy, AND reactive statements

### Exercise 5: useRef, forwardRef & Uncontrolled DOM (`/exercises/05-refs`)
**Svelte equivalent:** `bind:this`
- Build a `FocusInput` that auto-focuses on mount
- Build a `VideoPlayer` with play/pause via ref
- Build a `PreviousValue` hook using ref to store previous state
- Build a reusable `TextInput` that exposes its DOM node via `forwardRef`
- Practice: `useImperativeHandle` to expose a custom API (e.g., `focus()` and `clear()`) from a child
- **Key difference from Svelte:** Refs also persist values across renders without causing re-renders
- **Interview signal:** `forwardRef` is asked about frequently — it's how you pass refs through wrapper components

### Exercise 6: Forms & Controlled Components (`/exercises/06-forms`)
**Svelte equivalent:** `bind:value` (two-way binding)
- Build a multi-field form (name, email, message) with validation
- Controlled inputs with `value` + `onChange`
- Practice: form submission, validation patterns, derived state from form values
- **Key difference from Svelte:** React has NO two-way binding — you must wire value + onChange manually

---

## Phase 2: Intermediate Patterns
*Standalone exercises transitioning toward the capstone app*

### Exercise 7: Component Composition (`/exercises/07-composition`)
**Interview favorite — tests architectural thinking**
- Build a `Modal` using children prop + **React Portal** (`createPortal`) to render outside the DOM tree
- Build a `DataTable` using compound components pattern (Table, Table.Header, Table.Row, Table.Cell)
- Build a `Tabs` component using render props or compound pattern
- Build a polymorphic `Button` component with an `as` prop (renders as `<a>`, `<button>`, or `<Link>`)
- Concepts: children, cloneElement, compound components, render props, portals, polymorphic components
- **Interview signal:** Portals come up whenever modals/tooltips are discussed; polymorphic components test TypeScript generics

### Exercise 8: useContext & State Sharing (`/exercises/08-context`)
**Svelte equivalent:** `setContext`/`getContext`, Svelte stores
- Build a `ThemeProvider` with light/dark toggle accessible from any component
- Build a `NotificationProvider` that any component can push to
- Practice: creating context, provider pattern, consuming context
- **Key difference from Svelte:** No reactive stores — context + useState is the pattern

### Exercise 9: useReducer (`/exercises/09-reducer`)
**Svelte equivalent:** No direct equivalent (closest: custom store with update logic)
- Refactor the TodoList from Exercise 3 to use useReducer
- Build a multi-step form wizard with useReducer managing step + form data
- Practice: action types, dispatch, reducer composition
- When to use: complex state with multiple sub-values or when next state depends on previous

### Exercise 10: Performance — useMemo, useCallback, React.memo (`/exercises/10-performance`)
**Svelte equivalent:** Svelte handles this automatically
- Build an `ExpensiveList` that filters/sorts large data sets
- Demonstrate unnecessary re-renders, then fix with memo/useMemo
- Build a parent-child scenario where useCallback prevents child re-renders
- **Key interview topic:** Knowing WHEN to optimize (and when not to)

### Exercise 11: Custom Hooks (`/exercises/11-custom-hooks`)
**Svelte equivalent:** Reusable stores / utility functions
- Extract `useDebounce` from Exercise 4
- Build `useLocalStorage` — syncs state with localStorage
- Build `useFetch` — generic data fetching hook with loading/error states
- **Interview signal:** Shows you understand abstraction and separation of concerns

---

## Phase 3: Advanced & Interview-Specific
*Building toward the capstone*

### Exercise 12: Data Fetching Patterns (`/exercises/12-data-fetching`)
- Build a paginated list that fetches from a public API
- Implement loading states, error handling, retry logic
- Optimistic updates (update UI before server confirms)
- Practice: async in useEffect, race conditions, abort controllers

### Exercise 13: Error Boundaries (`/exercises/13-error-boundary`)
**React-specific — no Svelte equivalent**
- Build an ErrorBoundary class component (one of the few remaining uses for classes)
- Wrap different sections of the app with granular error boundaries
- Practice: componentDidCatch, fallback UI, error recovery

### Exercise 14: Suspense, Lazy Loading & Concurrent Features (`/exercises/14-suspense`)
**React 18+ — increasingly asked about**
- Use `React.lazy` + `Suspense` to code-split a heavy component
- Build a tab interface where each tab's content loads lazily with a fallback
- Practice: `useTransition` for non-urgent state updates (e.g., filtering a large list without blocking typing)
- Practice: `useDeferredValue` for deferring expensive re-renders
- **Interview signal:** Shows you understand React's concurrent rendering model

### Exercise 15: Accessibility (a11y) (`/exercises/15-accessibility`)
**Critical for senior roles — often a disqualifier if missing**
- Build an accessible `Accordion` with proper ARIA attributes (aria-expanded, aria-controls, role)
- Add keyboard navigation to the `Tabs` from Exercise 7 (arrow keys, Home/End)
- Build a focus trap for the `Modal` from Exercise 7 (Tab cycles within modal)
- Practice: semantic HTML, screen reader testing, focus management on route changes
- Concepts: ARIA roles/states/properties, keyboard interaction patterns, skip navigation links

### Exercise 16: Common Interview Components (`/exercises/16-interview-components`)
**These specific components come up repeatedly in live coding rounds**
- Build an `Autocomplete/Typeahead` — input with async suggestions, keyboard navigation, debounced fetch
- Build an `InfiniteScroll` list — loads more items on scroll using IntersectionObserver
- Build a `Tooltip/Popover` — positioned relative to trigger element, dismisses on outside click
- Build a `Drag & Drop` sortable list — reorder items with drag handles
- **Interview signal:** These are the "build X in 45 minutes" problems — practice them until they're muscle memory

### Exercise 17: React Patterns & Anti-Patterns (`/exercises/17-patterns`)
**High-value interview knowledge**
- Lifting state up vs. drilling down
- Extracting logic into custom hooks vs. utility functions
- Controlled vs. uncontrolled components (when to use each)
- Key prop for resetting component state
- Higher Order Components (HOCs) — legacy pattern but still asked about, know trade-offs vs. hooks
- Avoiding: useEffect for derived state, prop drilling, premature optimization

### Exercise 18: Testing React Components (`/exercises/18-testing`)
**Frequently tested — expect "how would you test this?" follow-ups**
- Test presentational components (render + assert visible output)
- Test user interactions with @testing-library/user-event
- Test forms with validation (type, submit, assert errors)
- Test async behavior with mocked fetch
- Test custom hooks with renderHook
- Test accessibility with jest-axe
- **Interview signal:** Query priority (getByRole > getByLabelText > getByText > getByTestId) shows you test like users interact

---

## Phase 4: Capstone App
*Combines everything into one project*

### Capstone: Project Dashboard (`/dashboard`)
A project management mini-app that uses every concept:

**Features to build:**
1. **Auth context** — mock login with useContext providing user state globally
2. **Project list** — fetched data, search/filter with useMemo, paginated
3. **Project detail** — nested route, task list with useReducer
4. **Task modal** — compound component, controlled form, validation
5. **Theme toggle** — context-based, persisted to localStorage via custom hook
6. **Notifications** — context provider, auto-dismiss with useEffect cleanup
7. **Error boundaries** — wrap each section independently
8. **Performance** — memo the task list, useCallback for handlers passed to children

**Component tree to practice decomposition:**
```
Dashboard (layout)
├── Sidebar (navigation)
├── Header (user info from context, theme toggle)
├── ProjectList
│   ├── SearchBar (controlled input, debounced)
│   ├── ProjectCard (memo'd, receives callback props)
│   └── Pagination
├── ProjectDetail
│   ├── TaskList (useReducer)
│   │   └── TaskItem (memo'd)
│   ├── AddTaskModal (compound component)
│   └── ErrorBoundary (wraps task section)
└── NotificationToast (from context)
```

---

## Interview Cheat Sheet — Concepts to Nail

### React Core
- **Reconciliation & keys:** Why React needs keys, what happens without them
- **Batching:** React 18+ batches all state updates (not just event handlers)
- **Closures in hooks:** Stale closure problem, why updater functions exist
- **Server vs. Client Components:** When to use "use client" in Next.js (Exercise 14)
- **Server Actions:** "use server" for form submissions and mutations (Exercise 14)
- **Rendering vs. committing:** React renders (creates vDOM) then commits (updates real DOM)
- **Strict Mode:** Why useEffect runs twice in dev (testing cleanup)
- **Controlled vs. uncontrolled:** Trade-offs, when each is appropriate
- **React Compiler:** What it does, rules it requires (pure components, no mutation)
- **Suspense & concurrent rendering:** How useTransition/useDeferredValue improve UX
- **Portals:** When and why to render outside the component tree
- **forwardRef + useImperativeHandle:** Exposing imperative APIs from child components
- **useLayoutEffect vs useEffect:** Synchronous after DOM mutation vs async after paint (Exercise 4)
- **useId:** Generating stable unique IDs for accessibility (Exercise 15)
- **Fragments:** `<></>` for grouping without wrapper divs (Exercise 7)

### TypeScript with React
- **Event types:** React.ChangeEvent, React.FormEvent, React.MouseEvent, React.KeyboardEvent (Exercise 6)
- **Utility types:** React.ComponentProps, React.PropsWithChildren, React.ReactNode, React.ElementType (Exercise 6)
- **Generic components:** Polymorphic Button, Select<T> (Exercise 7)
- **Discriminated unions:** Typed reducer actions (Exercise 9)
- **Avoid React.FC:** Type props directly in function signature instead

### Front-End Design Fundamentals
- **Accessibility:** ARIA, keyboard navigation, focus management, semantic HTML — non-negotiable for senior roles
- **Component API design:** Props interface should be minimal, composable, and predictable
- **Separation of concerns:** UI vs. logic (custom hooks), presentational vs. container thinking
- **CSS architecture:** CSS Modules (scoped, zero runtime), CSS-in-JS (dynamic, runtime cost), Tailwind (utility classes) (Exercise 7)
- **Performance awareness:** Virtualization for large lists, lazy loading, bundle splitting (Exercise 10)
- **TypeScript generics:** Generic component props (e.g., `<Select<T>>` where T is the option type)
- **Event delegation & bubbling:** How React's synthetic event system works
- **Debounce/throttle:** When to use each, implementing without libraries
- **Testing:** React Testing Library, query priority, testing behavior not implementation (Exercise 18)
- **Context optimization:** Split state/dispatch contexts, memoize provider values (Exercise 8)
