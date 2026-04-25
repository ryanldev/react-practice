"use client"
// http://localhost:3000/exercises/07-composition

/*
 * EXERCISE 7: Component Composition
 *
 * KEY CONCEPTS:
 * - Portals: render outside the current DOM tree
 * - Compound components: parent shares state with children via context
 * - Render props: pass a function as a prop to share rendering logic
 * - Polymorphic components: render as any element via an `as` prop
 *
 * DOCS:
 * - createPortal: https://react.dev/reference/react-dom/createPortal
 * - Passing JSX as children: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 */

import { Modal } from "./modal/Modal";
import { DataTable } from "./data-table/DataTable";
import { Tabs } from "./tabs/Tabs";
import { Button } from "./button/Button";

const sectionStyle = { marginBottom: "3rem" };

export default function CompositionExercise() {
  return (
    <div>
      <h1>Exercise 7: Component Composition</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Each task lives in its own file.
      </p>
      <section style={sectionStyle}>
        <h2>Task 1 — Modal with Portal</h2>
        <p>Renders children outside the DOM tree via createPortal. See <code>modal/Modal.tsx</code>.</p>
        <Modal />
      </section>
      <section style={sectionStyle}>
        <h2>Task 2 — DataTable (Compound Components)</h2>
        <p>Parent shares state with children implicitly. See <code>data-table/DataTable.tsx</code>.</p>
        <DataTable />
      </section>
      <section style={sectionStyle}>
        <h2>Task 3 — Tabs</h2>
        <p>Compound components or render props pattern. See <code>tabs/Tabs.tsx</code>.</p>
        <Tabs />
      </section>
      <section style={sectionStyle}>
        <h2>Task 4 — Polymorphic Button</h2>
        <p>Renders as any element via an `as` prop. See <code>button/Button.tsx</code>.</p>
        <Button />
      </section>
    </div>
  );
}
