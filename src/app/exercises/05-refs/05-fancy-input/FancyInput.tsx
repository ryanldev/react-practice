/*
 * TASK 5 — FancyInput with useImperativeHandle
 *
 * Build an input component that exposes a custom API to parent components
 * rather than the raw DOM node. The parent should only be able to call
 * focus() and clear() — not access the full DOM node directly.
 *
 * Hooks: useImperativeHandle, useRef
 *
 * Hint: define a FancyInputHandle type for the custom API, then pass a ref
 * of that type from the parent. Inside FancyInput, use an internal ref to
 * access the DOM node and useImperativeHandle to expose only what you want.
 *
 * DOCS: https://react.dev/reference/react/useImperativeHandle
 */

import { useImperativeHandle, useRef, useState, RefObject } from 'react';

export type FancyInputHandle = {
  focus: () => void;
  clear: () => void;
}

type FancyInputProps = {
  ref?: RefObject<FancyInputHandle | null>;
  placeholder?: string;
}

export function FancyInput({ ref, placeholder }: FancyInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
      clear() {
        setInputValue('');
      }
    }
  }, []);

  return (
    <input
      ref={inputRef}
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export function FancyInputDemo() {
  const fancyInputRef = useRef<FancyInputHandle>(null);

  return (
    <div>
      <FancyInput ref={fancyInputRef} placeholder='Placeholder text'/>
      <button onClick={() => fancyInputRef.current?.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current?.clear()}>Clear</button>
    </div>
  );
}
