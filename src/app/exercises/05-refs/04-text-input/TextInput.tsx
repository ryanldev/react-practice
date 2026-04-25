/*
 * TASK 4 — TextInput with forwardRef
 *
 * Build a reusable text input component that exposes its underlying DOM node
 * to parent components via a forwarded ref.
 *
 * API: forwardRef
 *
 * DOCS: https://react.dev/reference/react/forwardRef
 */

import { forwardRef } from "react";

export const TextInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function TextInput(props, ref) {
    // Build your component here
    return null;
  }
);
