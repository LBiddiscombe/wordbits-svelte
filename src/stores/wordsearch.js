import { derived, readable, writable } from 'svelte/store'
import { createGame } from '../api'
import { generateHslColors } from '../utils'

export const game = writable({})
export const solved = writable(JSON.parse(localStorage.getItem('solved')) || [])
export const completed = derived([game, solved], ([$game, $solved], set) => {
  if ($game.words && $solved) set($game.words.length === $solved.length)
})

export async function newGame() {
  const res = await createGame()
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

export function tryWord(event) {
  const { i1, i2 } = event.detail
  const { words, wordMap } = get(game)
  const solvedWords = get(solved)

  // see if the start and end cells match a word in the game
  let word = null
  for (let [key, value] of wordMap) {
    if (value.i1 === i1 && value.i2 === i2) {
      word = key
      break
    }
  }

  // update the solved store and persist
  if (word && solvedWords.findIndex((done) => done.word === word) === -1) {
    solved.update((solved) => [...solved, { word, ...event.detail }])
    localStorage.setItem('solved', JSON.stringify(get(solved)))
  }

  if (get(solved)) {
    localStorage.removeItem('game')
    localStorage.removeItem('solved')
  }
}
