import { writable } from 'svelte/store'
import { createCodeword } from '../api'

export const game = writable({})
export const solution = createSolution()
export const guessLetter = writable('')
export const guessCode = writable(0)

export async function newGame() {
  const res = await createCodeword()
  game.set({
    ...res,
  })
}

function createSolution() {
  const { subscribe, set, update } = writable(new Array(27).fill(''))
  const json = JSON.parse(localStorage.getItem('codeword_solution'))
  if (json) {
    set(json)
  }

  return {
    subscribe,
    makeGuess: (code, letter) => {
      update((guess) => {
        guess[code] = letter
        localStorage.setItem('codeword_solution', JSON.stringify(guess))
        return guess
      })
    },
    reset: () => set([]),
  }
}

// wrapper around the store to simplify reads from within this store
function get(store) {
  let value
  const unsubscribe = store.subscribe((s) => (value = s))
  unsubscribe()
  return value
}
