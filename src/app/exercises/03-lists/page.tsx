"use client"
// http://localhost:3000/exercises/03-lists

/*
 * EXERCISE 3: Conditional Rendering & Lists
 * Svelte equivalent: {#if}, {#each}
 *
 * TASKS:
 * 1. Build a <TodoList> with:
 *    - An input + button to add todos
 *    - Render each todo with a checkbox (toggle complete) and delete button
 *    - Use .map() with a unique key for each item
 *    - Store todos as: { id: number, text: string, completed: boolean }
 *
 * 2. Add conditional rendering for different states:
 *    - Empty state: "No todos yet. Add one above!"
 *    - Show a count of completed vs total: "3 of 5 completed"
 *    - Use ternary (condition ? a : b) and && short-circuit (condition && <JSX>)
 *
 * 3. Add a filter: All / Active / Completed
 *    - Derive the filtered list from state (don't store filtered list separately)
 *    - This is "derived state" — compute it during render, don't useEffect for it
 *
 * KEY CONCEPTS:
 * - Keys must be stable, unique identifiers (not array index for dynamic lists)
 * - Conditional rendering patterns: ternary, &&, early return
 * - Derived state: compute from existing state during render, no useEffect needed
 * - Immutable array operations: filter, map, spread — never push/splice
 *
 * IMPORTANT: This file needs "use client" at the top.
 *
 * DOCS:
 * - Conditional Rendering: https://react.dev/learn/conditional-rendering
 * - Rendering Lists: https://react.dev/learn/rendering-lists
 * - Keeping Components Pure: https://react.dev/learn/keeping-components-pure
 */

import styles from './page.module.css';
import { useState, MouseEventHandler, ChangeEventHandler } from 'react';

export default function ListsExercise() {
  return (
    <div>
      <h1>Exercise 3: Conditional Rendering &amp; Lists</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        Build your components below. Read the comments at the top of this file for instructions.
      </p>
      <TodoList />
    </div>
  );
}

type Todo = {
  id: number;
  text: string;
  status: 'active' | 'completed';
}

type TodoFilter = 'all' | 'active' | 'completed';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInputValue, setTodoInputValue] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<TodoFilter>('all');

  const completedCount = todos.filter(t => t.status === 'completed').length;
  const filteredTodos = todos.filter(t => activeFilter === 'all' || t.status === activeFilter);

  function handleAdd() {
    if (!todoInputValue.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: todoInputValue, status: 'active' }]);
    setTodoInputValue('');
  }

  function handleDelete(id: number) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  function handleToggle(id: number) {
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, status: t.status === 'active' ? 'completed' : 'active' } : t
    ));
  }

  return (
    <div className={styles.todoListContainer}>
      <h2>Todo List:</h2>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAdd();
          }}
        />
        <button className={styles.resetButton} onClick={handleAdd}>+</button>
      </div>
      <div className={styles.todoList}>
        {todos.length === 0 && <p>No todos yet. Add one above!</p>}
        {filteredTodos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            onToggle={() => handleToggle(todo.id)}
          />
        )}
      </div>
      <div className={styles.todoFooter}>
        <div
          className={styles.todoStatus}
          hidden={todos.length === 0}
        >
          {completedCount} of {todos.length} completed
        </div>
        <div className={styles.todoFilterContainer}>
          <button className={styles.resetButton} onClick={() => setActiveFilter('all')}>All</button>
          <button className={styles.resetButton} onClick={() => setActiveFilter('active')}>Active</button>
          <button className={styles.resetButton} onClick={() => setActiveFilter('completed')}>Completed</button>
        </div>
      </div>
    </div>
  );
}

function Todo({ todo, onDelete, onToggle }: { todo: Todo, onDelete: MouseEventHandler<HTMLButtonElement>, onToggle: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <div className={styles.todoContainer}>
      <input
        type="checkbox"
        id={String(todo.id)}
        checked={todo.status === 'completed'}
        onChange={onToggle}
      />
      <label
        htmlFor={String(todo.id)}
        className={todo.status === 'completed' ? styles.completed : ''}
      >
        {todo.text}
      </label>
      <button className={styles.resetButton} onClick={onDelete}>X</button>
    </div>
  );
}
