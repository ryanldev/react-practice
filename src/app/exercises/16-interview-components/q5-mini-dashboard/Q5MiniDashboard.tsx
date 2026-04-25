/*
 * Q5 — Mini Dashboard: Fetch + Multi-Component State (Hard)
 *
 * Build a small app with three sibling components that share state:
 *
 *   <Dashboard>
 *     <UserList />     — displays a list of users, clicking one selects it
 *     <PostList />     — fetches and displays posts for the selected user
 *     <StatsBar />     — displays the selected user's name and post count
 *   </Dashboard>
 *
 * Requirements:
 * - Fetch all users on mount: https://jsonplaceholder.typicode.com/users
 * - When a user is selected, fetch their posts: https://jsonplaceholder.typicode.com/posts?userId={id}
 * - PostList and StatsBar must both react to the selected user without being
 *   directly connected to each other — state lives in a shared parent or context
 * - Show loading and error states in PostList while the posts fetch
 * - Cancel the posts fetch if a different user is selected before it resolves
 *
 * Techniques:
 * - Lifting state up: selectedUser lives in Dashboard, passed down as props
 *   OR
 * - Context: DashboardContext holds selectedUser + setSelectedUser,
 *   consumed by any child without prop drilling
 *
 * Gotcha: PostList re-fetches whenever selectedUser changes — the fetch
 * effect depends on selectedUser. Don't forget AbortController cleanup.
 *
 * Gotcha: StatsBar needs the post count, which is fetched by PostList.
 * Think carefully about where that state lives — it can't stay inside PostList
 * if StatsBar also needs it.
 *
 * Hooks: useState, useEffect, useContext (optional), createContext (optional)
 * Browser API: AbortController
 *
 * STRETCH:
 * - Add a search input that filters the UserList client-side
 * - Cache post results by userId so switching back to a user doesn't re-fetch
 * - Move state into useReducer to handle selectedUser + posts + loading together
 */

export function Dashboard() {
  // Build your component here
  return null;
}
