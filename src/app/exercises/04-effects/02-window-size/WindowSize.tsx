/*
 * TASK 2 — WindowSize
 *
 * Build a component that tracks and displays the current window width and height,
 * updating in real time as the window is resized.
 *
 * Hooks: useEffect, useState
 * Browser API: window.addEventListener / removeEventListener
 *
 * DOCS: https://react.dev/reference/react/useEffect
 */

import styles from './WindowSize.module.css';
import { useEffect, useState } from 'react';

type WindowState = {
  height: number;
  width: number;
}

export function WindowSize() {
  const [ windowState, setWindowState ] = useState<WindowState>({ height: 0, width: 0});

  function handleResize() {
    setWindowState({ height: window.innerHeight, width: window.innerWidth });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWindowState({ height: window.innerHeight, width: window.innerWidth });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.windowTracker}>Height: {windowState.height} Width: {windowState.width}</div>
  )
}
