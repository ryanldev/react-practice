# React Interview Prep

Hands-on exercises for senior front-end interview preparation. Built with Next.js 15 and TypeScript.

Designed for developers coming from Svelte/SvelteKit — each exercise maps React concepts to their Svelte equivalents.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the exercise index.

## Curriculum

### Phase 1: Fundamentals 
| # | Exercise | Route | Concepts |
|---|----------|-------|----------|
| 1 | JSX & Props | `/exercises/01-props` | Props, spreading, children, destructuring |
| 2 | useState & Events | `/exercises/02-state` | State, updater functions, event handlers |
| 3 | Conditional Rendering & Lists | `/exercises/03-lists` | .map() with keys, ternaries, derived state |
| 4 | useEffect & Lifecycle | `/exercises/04-effects` | Effects, cleanup, useLayoutEffect |
| 5 | useRef & forwardRef | `/exercises/05-refs` | Refs, forwardRef, useImperativeHandle |
| 6 | Forms & Controlled Components | `/exercises/06-forms` | Controlled inputs, validation, TS event types |

### Phase 2: Intermediate Patterns 
| # | Exercise | Route | Concepts |
|---|----------|-------|----------|
| 7 | Component Composition | `/exercises/07-composition` | Portals, compound components, polymorphic components |
| 8 | useContext & State Sharing | `/exercises/08-context` | Context, provider pattern, context optimization |
| 9 | useReducer | `/exercises/09-reducer` | Reducers, dispatch, discriminated unions |
| 10 | Performance | `/exercises/10-performance` | useMemo, useCallback, React.memo, virtualization |
| 11 | Custom Hooks | `/exercises/11-custom-hooks` | useDebounce, useLocalStorage, useFetch |

### Phase 3: Advanced & Interview-Specific 
| # | Exercise | Route | Concepts |
|---|----------|-------|----------|
| 12 | Data Fetching Patterns | `/exercises/12-data-fetching` | Pagination, AbortController, optimistic updates |
| 13 | Error Boundaries | `/exercises/13-error-boundary` | Class components, componentDidCatch, fallback UI |
| 14 | Suspense & Concurrent Features | `/exercises/14-suspense` | React.lazy, useTransition, Server Components |
| 15 | Accessibility | `/exercises/15-accessibility` | ARIA, keyboard nav, focus trap, useId |
| 16 | Common Interview Components | `/exercises/16-interview-components` | Autocomplete, InfiniteScroll, Tooltip, Drag & Drop |
| 17 | Patterns & Anti-Patterns | `/exercises/17-patterns` | Lifting state, HOCs, key prop reset |
| 18 | Testing | `/exercises/18-testing` | React Testing Library, user-event, jest-axe |

### Phase 4: Capstone 
A project dashboard app at `/dashboard` that combines all concepts into a single application.

## How to Use

Each exercise page contains detailed instructions in comments at the top of the file, including:

- Step-by-step tasks to complete
- Svelte-to-React concept mappings
- Code hints and API signatures
- Links to official React documentation
- Key concepts and common mistakes

Open the exercise file, read the comments, and build below the `{/* START HERE */}` marker.

See [CURRICULUM.md](./CURRICULUM.md) for the full curriculum with cheat sheet.
