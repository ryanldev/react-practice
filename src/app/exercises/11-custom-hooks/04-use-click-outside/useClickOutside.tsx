/*
 * TASK 4 — useClickOutside
 * Build a hook that calls a handler when a click occurs outside a ref'd element.
 *
 * function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void): void
 *
 * - Add a mousedown listener to the document
 * - If the click target is not inside ref.current, call handler
 * - Remove the listener on cleanup
 *
 * Usage:
 *   const ref = useRef(null)
 *   useClickOutside(ref, () => setOpen(false))
 *   return <div ref={ref}>...</div>
 */
import { RefObject } from "react";
export function useClickOutside(ref: RefObject<HTMLElement | null>, handler: () => void): void {}
export function UseClickOutsideDemo() { return null; }
