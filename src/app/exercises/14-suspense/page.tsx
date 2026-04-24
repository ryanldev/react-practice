// http://localhost:3000/exercises/14-suspense

/*
 * EXERCISE 14: Suspense, Lazy Loading & Concurrent Features
 * React 18+ — increasingly asked about in interviews
 *
 * TASKS:
 * 1. Code-split a heavy component with React.lazy + Suspense
 *    - Create a <HeavyChart> component in a separate file (simulate with a large component)
 *    - const HeavyChart = lazy(() => import("./HeavyChart"))
 *    - <Suspense fallback={<div>Loading chart...</div>}>
 *        <HeavyChart />
 *      </Suspense>
 *    - The component only downloads when first rendered
 *
 * 2. Build a tab interface with lazy-loaded tab content
 *    - Each tab's content is a separate lazy-loaded component
 *    - Switching tabs shows the Suspense fallback while loading
 *    - After loading once, switching back is instant (cached)
 *
 * 3. Use useTransition for non-blocking state updates
 *    - Build a list of 10,000 items with a search filter
 *    - Without transition: typing in the search box is laggy
 *    - With transition:
 *      const [isPending, startTransition] = useTransition()
 *      startTransition(() => setFilter(value))  // marks this update as low priority
 *    - The input stays responsive, the list update is deferred
 *    - Show isPending state (e.g., dim the list while filtering)
 *
 * 4. Use useDeferredValue as an alternative
 *    - const deferredFilter = useDeferredValue(filter)
 *    - Use deferredFilter for the expensive filtering, filter for the input value
 *    - Similar result to useTransition but different API — value-based vs callback-based
 *
 * 5. Understand Server Components vs Client Components (Next.js)
 *    - In Next.js, ALL components are Server Components by default
 *    - Server Components: render on the server, can access DB/filesystem, zero JS sent to client
 *    - Client Components: add "use client" at top, needed for useState/useEffect/event handlers
 *    - Rule: push "use client" as deep as possible — keep most of your tree as Server Components
 *    - Example: a page can be a Server Component that fetches data, passing it as props
 *      to a Client Component that handles interactivity
 *    - You CANNOT import a Server Component into a Client Component
 *    - You CAN pass Server Components as children to Client Components
 *    - Server Actions: async functions that run on the server, called from Client Components
 *      "use server" directive, used for form submissions and mutations
 *
 * KEY CONCEPTS:
 * - Suspense: declarative loading states for async operations
 * - React.lazy: code-splitting at the component level (client-side only)
 * - useTransition: mark a state update as non-urgent (keep UI responsive)
 * - useDeferredValue: defer re-rendering with a stale value until urgent work completes
 * - These are React's "concurrent features" — they let React interrupt rendering
 * - Server Components are a DIFFERENT concept from SSR — they never hydrate on the client
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Suspense: https://react.dev/reference/react/Suspense
 * - lazy: https://react.dev/reference/react/lazy
 * - useTransition: https://react.dev/reference/react/useTransition
 * - useDeferredValue: https://react.dev/reference/react/useDeferredValue
 * - Server Components: https://react.dev/reference/rsc/server-components
 * - Server Actions ("use server"): https://react.dev/reference/rsc/server-actions
 * - Client Components ("use client"): https://react.dev/reference/rsc/use-client
 */

export default function SuspenseExercise() {
  return (
    <div>
      <h1>Exercise 14: Suspense &amp; Concurrent Features</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
