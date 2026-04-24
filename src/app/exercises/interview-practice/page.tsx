/*
 * INTERVIEW PRACTICE: Frontend Coding Round (CODE-FE)
 *
 * These questions mirror the structure of a real frontend coding interview.
 * Each question is self-contained and designed to be completed in ~15 minutes.
 * Together they cover every concept tested in a typical CODE-FE round.
 *
 * CONCEPTS COVERED:
 * - Async fetch with loading / error / success states
 * - Derived state (never store what you can compute)
 * - Performance: useMemo to avoid recomputing on every render
 * - Controlled inputs and form validation
 * - Immutable state updates for object state
 * - Optimistic UI with rollback on failure
 * - Lifting state and Context to share across siblings
 * - Custom hooks to encapsulate logic
 * - useEffect dependencies and cleanup
 * - Conditional / chained fetching
 * - Debouncing and race condition handling with AbortController
 *
 * API: https://jsonplaceholder.typicode.com (free, no auth required)
 */

import { SearchFilterList } from "./q1-search-filter-list/Q1SearchFilterList";
import { UserForm } from "./q2-user-form/Q2UserForm";
import { DependentDropdowns } from "./q3-dependent-dropdowns/Q3DependentDropdowns";
import { SearchProvider, SearchInput, SearchResults } from "./q4-autocomplete/Q4Autocomplete";

export default function InterviewPracticePage() {
  return (
    <div>
      <h1>Interview Practice: Frontend Coding Round</h1>
      <p>
        Four questions in increasing difficulty. Each maps to real problems asked
        in frontend interviews. Build each component in its own file.
      </p>

      {/* ─── QUESTION 1 ────────────────────────────────────────────────────── */}
      <section>
        <h2>Q1 — Search & Filter List (Easy)</h2>
        <p>
          Fetch 20 posts from <code>https://jsonplaceholder.typicode.com/posts?_limit=20</code>{" "}
          and render a filterable list. See <code>Q1SearchFilterList.tsx</code> for the full brief.
        </p>
        <SearchFilterList />
      </section>

      {/* ─── QUESTION 2 ────────────────────────────────────────────────────── */}
      <section>
        <h2>Q2 — Multi-Field Form with Validation & Optimistic Submit (Medium)</h2>
        <p>
          Build a user profile form with validation and optimistic UI.
          See <code>Q2UserForm.tsx</code> for the full brief.
        </p>
        <UserForm />
      </section>

      {/* ─── QUESTION 3 ────────────────────────────────────────────────────── */}
      <section>
        <h2>Q3 — Dependent Dropdown Selects (Medium)</h2>
        <p>
          Two chained selects where choosing a continent triggers a second fetch.
          See <code>Q3DependentDropdowns.tsx</code> for the full brief.
        </p>
        <DependentDropdowns />
      </section>

      {/* ─── QUESTION 4 ────────────────────────────────────────────────────── */}
      <section>
        <h2>Q4 — Autocomplete with Debounce & Shared State (Hard)</h2>
        <p>
          A debounced search input and results panel sharing state via Context.
          See <code>Q4Autocomplete.tsx</code> for the full brief.
        </p>
        <SearchProvider>
          <SearchInput />
          <SearchResults />
        </SearchProvider>
      </section>
    </div>
  );
}
