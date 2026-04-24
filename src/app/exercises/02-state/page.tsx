"use client"

/*
 * EXERCISE 2: useState & Events
 * Svelte equivalent: `let count = 0` (reactive by default)
 *
 * TASKS:
 * 1. Build a <Counter> with increment, decrement, and reset buttons
 *    - Use useState to manage the count
 *    - Use the updater function form: setCount(prev => prev + 1)
 *    - Why updater form? Avoids stale closure bugs when multiple updates batch together
 *
 * 2. Build a <ToggleGroup> component (like tabs)
 *    - Accepts an array of options and tracks which one is active
 *    - Clicking an option sets it as active (highlighted)
 *    - Practice: passing event handlers as props, conditional className
 *
 * 3. Build a <UserForm> that manages an object in state: { firstName, lastName, age }
 *    - Practice: updating a single field in an object without mutating
 *    - setUser(prev => ({ ...prev, firstName: "new" }))
 *    - In Svelte you'd just do `user.firstName = "new"` — React requires immutable updates
 *
 * KEY CONCEPTS:
 * - State updates are asynchronous and batched (React 18+)
 * - Never mutate state directly — always create new references
 * - Updater functions (prev => next) prevent stale closures
 * - onClick={handler} not on:click={handler}
 *
 * IMPORTANT: This file needs "use client" at the top since useState is a client-side hook.
 *
 * DOCS:
 * - useState: https://react.dev/reference/react/useState
 * - State as a Snapshot: https://react.dev/learn/state-as-a-snapshot
 * - Queueing State Updates: https://react.dev/learn/queueing-a-series-of-state-updates
 * - Responding to Events: https://react.dev/learn/responding-to-events
 */

import { useState, Dispatch, SetStateAction } from "react";
import styles from './page.module.css';

export default function StateExercise() {
  return (
    <div>
      <h1>Exercise 2: useState &amp; Events</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      <div className={styles.container}>
        <Counter />
        <ToggleGroup options={[{id: 1, value: 'button-1'}, {id: 2, value: 'button-2'}, {id: 3, value: 'button-3'}]} />
        <UserForm></UserForm>
      </div>
    </div>
  );
}

// Task 1
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.Counter}>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => setCount(prev => prev + 1)}>+</button>
        <button className={styles.button} onClick={() => setCount(prev => Math.max(prev - 1, 0))}>-</button>
        <button className={styles.button} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

// Task 2
function ToggleGroup({options}: {options: {id: number, value: string}[]}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={styles.buttonGroup}>
      {options.map((option) =>
        <Toggle key={option.id} value={option.value} active={active} setActive={setActive}></Toggle>
      )}
    </div>
  )
}

function Toggle({value, active, setActive}: {value: string, active: string | null, setActive: Dispatch<SetStateAction<string | null>>}) {
  return (
    <button className={`${styles.button} ${active === value ? styles.active : ''}`} onClick={() => setActive(value)}>
      {value}
    </button>
  )
}

// Task 3
type User= {
  firstName: string,
  lastName: string,
  age: number
}

function UserForm() {
  const [user, setUser] = useState<User>({ firstName: '', lastName: '', age: 0 });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser(prev => ({ ...(prev ?? {}), [name]: value }));
  }

  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <label>Form Title</label>
      <input name="firstName" value={user?.firstName} onChange={handleChange} />
      <input name="lastName" value={user?.lastName} onChange={handleChange} />
      <input name="age" value={user?.age} onChange={handleChange} />
      <div className={styles.formValueGroup}>
        <span>First name: {user?.firstName}</span>
        <span>Last name: {user?.lastName}</span>
        <span>Age: {user?.age}</span>
      </div>
    </form>
  )
}
