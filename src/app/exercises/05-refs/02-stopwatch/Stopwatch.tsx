/*
 * TASK 2 — Stopwatch
 *
 * Build a stopwatch with start, stop, and reset controls.
 * The interval ID should persist across renders without causing re-renders.
 *
 * Hooks: useRef, useState
 *
 * DOCS: https://react.dev/reference/react/useRef
 */

import styles from './Stopwatch.module.css';
import { useState, useRef } from 'react';

const TIMER_INTERVAL = 10;

export function Stopwatch() {
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState(0);
  const minutes = Math.floor(timer / 60000);
  const seconds = Math.floor(timer / 1000) % 60;
  const tenths = Math.floor(timer / 100) % 10;
  const hundreths = Math.floor(timer / 10) % 10;
  const display = [
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
    `${tenths}${hundreths}`
  ].join(':');

  function startInterval() {
    if (intervalId.current) return;

    intervalId.current = setInterval(() => {
      setTimer((prev) => prev + TIMER_INTERVAL);
    }, TIMER_INTERVAL);
  }

  function stopInterval() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  function resetInterval() {
    stopInterval();
    setTimer(0);
  }

  return (
    <div>
      <div className={styles.stopwatch}>{display}</div>
      <div className={styles.stopwatchButtonContainer}>
        <button className={styles.stopwatchButton} onClick={startInterval}>Start</button>
        <button className={styles.stopwatchButton} onClick={stopInterval}>Stop</button>
        <button className={styles.stopwatchButton} onClick={resetInterval}>Reset</button>
      </div>
    </div>
  );
}
