import { writable } from 'svelte/store'
import { searchDictionary } from '../api'

function createSearch() {
  const { subscribe, set } = writable([])

  return {
    subscribe,
    execute: (query) => set(searchDictionary(query.replace('%2F', '/'))),
  }
}

export const search = createSearch()
