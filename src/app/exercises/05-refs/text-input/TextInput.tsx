/*
 * TASK 4 — TextInput with forwardRef
 * Build a reusable <TextInput> that forwards its ref to the underlying <input>.
 * - forwardRef((props, ref) => <input ref={ref} {...props} />)
 * - Allows parent components to call .focus(), .select() etc. on the input directly
 */
import { forwardRef } from "react";
export const TextInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function TextInput(props, ref) { return null; }
);
