"use client"
// http://localhost:3000/exercises/16-interview-components

/*
 * EXERCISE 16: Common Interview Components
 * These are the "build X in 45 minutes" problems — practice until muscle memory
 *
 * KEY CONCEPTS:
 * - These components combine multiple React concepts: state, effects, refs, events, a11y
 * - Focus on getting a working version first, then polish
 * - Interview tip: talk through your approach before coding, name the hooks you'll need
 *
 * DOCS:
 * - Combobox Pattern (WAI-ARIA): https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 * - IntersectionObserver (MDN): https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 * - Drag and Drop API (MDN): https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 * - getBoundingClientRect (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */

const sectionStyle = { marginBottom: "3rem" };

import { SearchFilterList } from "./q1-search-filter-list/Q1SearchFilterList";
import { UserForm } from "./q2-user-form/Q2UserForm";
import { DependentDropdowns } from "./q3-dependent-dropdowns/Q3DependentDropdowns";
import { SearchProvider, SearchInput, SearchResults } from "./q4-autocomplete/Q4Autocomplete";

export default function InterviewComponentsExercise() {
  return (
    <div>
      <h1>Exercise 16: Common Interview Components</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Four questions in increasing difficulty. Each maps to real problems asked
        in frontend interviews. Build each component in its own file.
      </p>

      {/* ─── Q 1 ────────────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2>Q1 — Search & Filter List (Easy)</h2>
        <p>
          Fetch 20 posts and render a filterable list with loading/error states.
          See <code>q1-search-filter-list/Q1SearchFilterList.tsx</code> for the full brief.
        </p>
        <SearchFilterList />
      </section>

      {/* ─── Q 2 ────────────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2>Q2 — Multi-Field Form with Validation & Optimistic Submit (Medium)</h2>
        <p>
          Build a user profile form with validation and optimistic UI.
          See <code>q2-user-form/Q2UserForm.tsx</code> for the full brief.
        </p>
        <UserForm />
      </section>

      {/* ─── Q 3 ────────────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2>Q3 — Dependent Dropdown Selects (Medium)</h2>
        <p>
          Two chained selects where choosing a continent triggers a second fetch.
          See <code>q3-dependent-dropdowns/Q3DependentDropdowns.tsx</code> for the full brief.
        </p>
        <DependentDropdowns />
      </section>

      {/* ─── Q 4 ────────────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2>Q4 — Autocomplete with Debounce & Shared State (Hard)</h2>
        <p>
          A debounced search input and results panel sharing state via Context.
          See <code>q4-autocomplete/Q4Autocomplete.tsx</code> for the full brief.
        </p>
        <SearchProvider>
          <SearchInput />
          <SearchResults />
        </SearchProvider>
      </section>
    </div>
  );
}
