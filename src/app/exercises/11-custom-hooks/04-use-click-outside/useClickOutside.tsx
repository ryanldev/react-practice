/*
 * TASK 4 — useClickOutside
 *
 * Build a hook that fires a callback when the user clicks outside a given element.
 *
 * Signature: useClickOutside(ref: RefObject<HTMLElement>, handler: () => void): void
 *
 * Hooks: useEffect
 * Browser API: document.addEventListener / removeEventListener
 */

import { RefObject } from "react";

export function useClickOutside(ref: RefObject<HTMLElement | null>, handler: () => void): void {
  // Build your hook here
}

export function UseClickOutsideDemo() {
  // Build a demo component here
  return null;
}
