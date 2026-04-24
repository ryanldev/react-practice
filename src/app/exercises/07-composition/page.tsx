// http://localhost:3000/exercises/07-composition

/*
 * EXERCISE 7: Component Composition
 * Interview favorite — tests architectural thinking
 *
 * TASKS:
 * 1. Build a <Modal> using children prop + React Portal
 *    - import { createPortal } from "react-dom"
 *    - Render the modal into document.body using createPortal(jsx, document.body)
 *    - Accept: isOpen, onClose, title, children
 *    - Why portal? So the modal renders outside its parent's DOM hierarchy
 *      (avoids z-index/overflow issues)
 *    - Add a backdrop overlay that closes on click
 *
 * 2. Build a <DataTable> using the compound components pattern
 *    - Usage should look like:
 *      <DataTable data={users}>
 *        <DataTable.Column header="Name" accessor="name" />
 *        <DataTable.Column header="Email" accessor="email" />
 *        <DataTable.Column header="Role" accessor="role" />
 *      </DataTable>
 *    - Use React.Children and cloneElement, OR context to share data between parent and children
 *    - Attach sub-components: DataTable.Column = ColumnComponent
 *
 * 3. Build a <Tabs> component using compound pattern or render props
 *    - <Tabs defaultValue="tab1">
 *        <Tabs.List>
 *          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
 *          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
 *        </Tabs.List>
 *        <Tabs.Content value="tab1">Content 1</Tabs.Content>
 *        <Tabs.Content value="tab2">Content 2</Tabs.Content>
 *      </Tabs>
 *    - Manage active tab state internally using context
 *
 * 4. Build a polymorphic <Button> with an `as` prop
 *    - <Button as="a" href="/about">Link Button</Button>
 *    - <Button as="button" onClick={fn}>Click Me</Button>
 *    - Use TypeScript generics to infer the correct props based on `as`
 *    - type ButtonProps<T extends React.ElementType> = { as?: T } & React.ComponentPropsWithoutRef<T>
 *
 * KEY CONCEPTS:
 * - Portals: createPortal(child, container) — renders outside parent DOM
 * - Compound components: related components share implicit state via context
 * - Polymorphic components: one component renders as different HTML elements
 * - children prop is React's equivalent of Svelte's <slot />
 * - Fragments (<></> or <React.Fragment>) — group elements without adding a DOM node
 *   return <><Header /><Main /><Footer /></>  // no wrapper div
 *
 * STYLING APPROACHES (know the trade-offs for interviews):
 * - CSS Modules (.module.css): scoped by default, used in this project, zero runtime cost
 * - CSS-in-JS (styled-components, emotion): co-located styles, dynamic, but adds runtime overhead
 * - Tailwind CSS: utility classes, fast development, but less readable JSX
 * - Inline styles: use sparingly, can't do pseudo-selectors or media queries
 * - For interviews: CSS Modules or plain CSS are safest — no extra deps needed
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Passing JSX as Children: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 * - createPortal: https://react.dev/reference/react-dom/createPortal
 * - cloneElement: https://react.dev/reference/react/cloneElement
 * - Extracting State Logic into a Reducer: https://react.dev/learn/extracting-state-logic-into-a-reducer
 */

export default function CompositionExercise() {
  return (
    <div>
      <h1>Exercise 7: Component Composition</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
