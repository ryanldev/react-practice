/*
 * PATTERN 1 — Lifting State Up
 * When two sibling components need to share state, lift it to their common parent.
 *
 * Demo: Two temperature inputs (Celsius, Fahrenheit) that stay in sync.
 * - State lives in the parent
 * - Each input receives the value and an onChange handler as props
 * - Converting between units happens in the parent
 *
 * ANTI-PATTERN: syncing two pieces of state with useEffect
 * CORRECT PATTERN: one source of truth, derived values computed during render
 *
 * DOCS: https://react.dev/learn/sharing-state-between-components
 */
export function LiftingStateDemo() { return null; }
