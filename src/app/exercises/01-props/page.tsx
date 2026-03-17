/*
 * EXERCISE 1: JSX & Props
 * Svelte equivalent: `export let prop` and template syntax
 *
 * TASKS:
 * 1. Build a <ProfileCard> component that accepts: name, role, avatarUrl
 *    - Render an image, name, and role
 *    - Use destructured props in the function signature
 *    - Add a default value for avatarUrl
 *
 * 2. Build a <ProfileList> that receives an array of profiles and renders <ProfileCard> for each
 *    - Use the spread operator to pass props: <ProfileCard {...profile} />
 *    - Remember: each item in a .map() needs a unique `key` prop
 *
 * 3. Add a <ProfileCard> variant that accepts `children` for custom content below the name/role
 *    - This is React's equivalent of Svelte's <slot />
 *
 * KEY CONCEPTS:
 * - JSX is JavaScript expressions inside XML-like syntax (not a template language)
 * - Props are read-only — never mutate them
 * - `children` is a special prop for nested content
 * - Spread props: <Component {...obj} /> is equivalent to passing each key as a prop
 *
 * SAMPLE DATA:
 * const profiles = [
 *   { id: 1, name: "Ada Lovelace", role: "Engineer", avatarUrl: "https://i.pravatar.cc/150?u=ada" },
 *   { id: 2, name: "Grace Hopper", role: "Scientist", avatarUrl: "https://i.pravatar.cc/150?u=grace" },
 *   { id: 3, name: "Margaret Hamilton", role: "Director", avatarUrl: "https://i.pravatar.cc/150?u=margaret" },
 * ];
 *
 * DOCS:
 * - Passing Props: https://react.dev/learn/passing-props-to-a-component
 * - JSX: https://react.dev/learn/writing-markup-with-jsx
 * - JavaScript in JSX: https://react.dev/learn/javascript-in-jsx-with-curly-braces
 */

export default function PropsExercise() {
  return (
    <div>
      <h1>Exercise 1: JSX &amp; Props</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      {/* START HERE */}
    </div>
  );
}
