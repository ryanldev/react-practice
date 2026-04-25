/*
 * PATTERN 2 — Key Prop for Resetting State
 * Changing the key prop on a component forces React to unmount and remount it,
 * resetting all internal state.
 *
 * Demo: A <CommentBox> that should clear when you navigate to a different post.
 * - WRONG: useEffect(() => setComment(''), [postId])
 * - RIGHT: <CommentBox key={postId} />
 *
 * DOCS: https://react.dev/learn/preserving-and-resetting-state
 */
export function KeyResetDemo() { return null; }
