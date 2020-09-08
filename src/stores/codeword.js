import { writable, derived } from 'svelte/store'
import { createCodeword } from '../api'

export const game = writable({})
export const solution = createSolution()
export const selectedCode = writable(0)
export const cells = derived([game, solution], ([$game, $solution]) => {
  const letterGrid = $game.letterGrid
  const codeGrid = $game.codeGrid

  if (letterGrid?.length > 0) {
    return letterGrid.map((letter, i) => {
      const code = codeGrid[i]
      if ($solution[code]) return $solution[code]
      if (letter !== ' ') return code
      return ' '
    })
  }
})

export function selectCode(e) {
  const code = +e.target.dataset.code
  if (code === get(selectedCode)) selectedCode.set(0)
  else selectedCode.set(code)
}

export function selectKey(e) {
  let key = e.target.value
  if (key === 'DEL') key = ''
  const code = get(selectedCode)
  if (code) {
    solution.makeGuess(code, key)
    selectedCode.set(0)
  }
}

export async function newGame() {
  const res = await createCodeword()
  game.set({
    ...res,
  })
  console.log('newGame', res)
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
