/*
 * TASK 4 — TextInput with ref prop
 *
 * Build a reusable TextInput component that accepts a ref from a parent
 * and attaches it to the underlying input DOM node, so the parent can
 * call methods like .focus() directly on it.
 *
 * In React 19, forwardRef is no longer needed — pass ref as a regular prop.
 *
 * Hint: use ComponentProps<'input'> to inherit all native input props
 * (placeholder, value, onChange, etc.) automatically. Don't forget to
 * spread props onto the underlying input element.
 *
 * DOCS: https://react.dev/reference/react/forwardRef (see migration note)
 */

import { ComponentProps, useRef } from "react";

type TextInputProps = ComponentProps<'input'>;

export function TextInput({ ref, ...props }: TextInputProps) {
  return (
    <input ref={ref} {...props} />
  );
}

export function TextInputDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <TextInput ref={inputRef} placeholder="This is the placeholder" />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
}
  