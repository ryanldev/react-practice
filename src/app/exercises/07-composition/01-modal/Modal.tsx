/*
 * TASK 1 — Modal with Portal
 *
 * Build a modal that renders its children outside the current DOM tree.
 * It should accept an isOpen prop and an onClose callback, and close on
 * backdrop click or Escape key.
 *
 * API: ReactDOM.createPortal
 * Hooks: useEffect (for keyboard listener)
 *
 * DOCS: https://react.dev/reference/react-dom/createPortal
 */

import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  // Build your component here.
  // Render the modal using createPortal into document.body.
  // Close on backdrop click and Escape key (useEffect for the key listener).
  return null;
}

export function ModalDemo() {
  // Wire up a button to open the modal and pass onClose to close it.
  return null;
}
