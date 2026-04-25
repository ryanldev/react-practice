/*
 * TASK 5 — Polling
 *
 * Fetch the latest "activity" every 5 seconds and display it.
 * Show a timestamp of the last successful fetch.
 * Stop polling when the component unmounts.
 *
 * Gotcha: don't use setInterval — it fires regardless of whether the
 * previous fetch has finished. Use setTimeout and reschedule after each
 * response to avoid overlapping requests.
 *
 * Gotcha: the cleanup must cancel both the pending timeout and any
 * in-flight fetch, otherwise a slow response can set state after unmount.
 *
 * Hooks: useState, useEffect, useRef
 * Browser APIs: setTimeout / clearTimeout, AbortController
 * API: https://worldtimeapi.org/api/timezone/America/New_York
 *      (returns real current time — datetime and unixtime fields change on every poll)
 *
 * DOCS: https://react.dev/learn/synchronizing-with-effects#fetching-data
 */

export function Polling() {
  // Build your component here
  return null;
}
