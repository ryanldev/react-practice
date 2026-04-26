/*
 * TASK 1 — FocusInput
 *
 * Build an input that automatically receives focus when the component mounts.
 *
 * Hooks: useRef, useEffect
 *
 * DOCS: https://react.dev/reference/react/useRef
 */

import styles from './FocusInput.module.css';
import { useEffect, useRef } from 'react';

export function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input className={styles.focusedInput} ref={inputRef} />
  );
}
