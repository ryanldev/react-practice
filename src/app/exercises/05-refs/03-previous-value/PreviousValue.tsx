/*
 * TASK 3 — usePrevious
 *
 * Build a custom hook that returns the value from the previous render.
 * Demonstrate it with a counter that shows both the current and previous count.
 *
 * Hooks: useRef, useEffect
 *
 * DOCS: https://react.dev/reference/react/useRef
 */

import styles from './PreviousValue.module.css'
import { useEffect, useRef, useState } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const valueRef = useRef(value);
  
  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
}

export function PreviousValueDemo() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  
  return (
    <div className={styles.countContainer}>
      <div className={styles.count}>Current: {count} Previous: {previousCount}</div>
      <div className={styles.countButtonsContainer}>
        <button
          className={styles.countButton}
          onClick={increment}
        >+</button>
        <button
          className={styles.countButton}
          onClick={decrement}
        >-</button>
      </div>
    </div>
  );
}
