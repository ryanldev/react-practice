/*
 * TASK 4 — DebounceSearch
 *
 * Build a search input that fetches results only after the user pauses typing.
 * Handle the case where a slow earlier response arrives after a faster later one.
 *
 * Hooks: useEffect, useState
 * Browser APIs: setTimeout / clearTimeout, AbortController
 * API: https://itunes.apple.com/search?term={searchTerm}&limit=10
 * Response shape: { results: Array<{ trackName, artistName, collectionName, artworkUrl100 }> }
 *
 * DOCS: https://react.dev/learn/lifecycle-of-reactive-effects
 */

import styles from './DebounceSearch.module.css';
import { useEffect, useState } from 'react';

type SearchResult = {
    trackName: string;
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
}

const API_URL = 'https://itunes.apple.com/search';
const SEARCH_LIMIT = 10;

function buildSearchUrl(searchTerm: string) {
  return `${API_URL}?term=${searchTerm}&limit=${SEARCH_LIMIT}`
}

export function DebounceSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  useEffect(() => {
    if (!searchInputValue) return;

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      fetch(buildSearchUrl(searchInputValue), { signal: controller.signal})
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results))
        .catch((e) => {
          if (e.name !== 'AbortError') console.error(e)
        });
    }, 1000);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    }
  }, [searchInputValue]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      ></input>
      <div className={styles.searchResultsContainer}>
        {searchResults.map((result: SearchResult, index)=> (
          <div key={index} className={styles.searchResult}>
            {result.artistName}
          </div>
        ))}
      </div>
    </div>
  );
}
