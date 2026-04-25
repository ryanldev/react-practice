/*
 * TASK 1 — Clock
 *
 * Build a <Clock> that displays the current time, updating every second.
 *
 * - Setup: setInterval in useEffect
 * - Cleanup: return () => clearInterval(id) — this is onDestroy in Svelte
 * - Note: React StrictMode runs effects twice in dev to test cleanup
 *
 * KEY CONCEPTS:
 * - useEffect with empty deps [] runs once on mount
 * - Cleanup function runs on unmount AND before re-running the effect
 * - Forgetting cleanup causes a memory leak (timer keeps firing after unmount)
 *
 * DOCS:
 * - useEffect: https://react.dev/reference/react/useEffect
 * - Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects
 */

import styles from './Clock.module.css';
import { useEffect, useState } from 'react';

export function Clock() {
  const [ currentTime, setCurrentTime ] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}>{currentTime.toLocaleTimeString()}</div>
  )
}
