import { writable } from 'svelte/store'
import { createCodeword } from '../api'
import { generateHslColors } from '../utils'

export const game = writable({})

export async function newGame() {
  const res = await createCodeword()
  game.set({
    ...res,
    wordColors: generateHslColors(100, 60, res.words.length),
  })
}

// wrapper around the store to simplify reads from within this store
function get(store) {
  let value
  const unsubscribe = store.subscribe((s) => (value = s))
  unsubscribe()
  return value
}
