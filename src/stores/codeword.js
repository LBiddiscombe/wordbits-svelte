import { writable, derived } from 'svelte/store'
import { createCodeword } from '../api'
import { randomInt } from '../utils'

let gameInProgress = false

export const showErrors = writable(true)
export const game = writable({})
export const solution = createSolution()
export const selectedCode = writable(0)
export const gameGrid = derived([game, solution], ([$game, $solution]) => {
  const letterGrid = $game.letterGrid
  const codeGrid = $game.codeGrid

  if (letterGrid && letterGrid.length > 0) {
    return letterGrid.map((letter, i) => {
      const code = codeGrid[i]
      if ($solution[code]) return $solution[code]
      if (letter !== ' ') return code
      return ' '
    })
  }
})
export const solved = derived([game, gameGrid], ([$game, $cells]) => {
  const letterGrid = $game.letterGrid
  return JSON.stringify($cells) === JSON.stringify(letterGrid)
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
    solution.linkCodeLetter(code, key)
    if (get(solved)) {
      localStorage.removeItem('codeword_solution')
      localStorage.removeItem('codeword')
    }
  }
}

export async function newGame() {
  const res = await createCodeword()
  game.set({
    ...res,
  })

  if (!gameInProgress) {
    const { letterGrid, codeGrid, startingSolution } = res
    solution.set(startingSolution)
    const maxStarterLetters = 15
    let count = 0
    while (count < maxStarterLetters) {
      const id = randomInt(codeGrid.length)
      if (codeGrid[id] && !get(solution).includes(codeGrid[id])) {
        solution.linkCodeLetter(codeGrid[id], letterGrid[id])
        count++
      }
    }
  }
}

function createSolution() {
  const { subscribe, set, update } = writable(new Array(27).fill(''))
  const json = JSON.parse(localStorage.getItem('codeword_solution'))
  if (json) {
    set(json)
    gameInProgress = true
  }

  return {
    set,
    subscribe,
    linkCodeLetter: (code, letter) => {
      update((guess) => {
        // remove other guesses for this letter
        guess = guess.map((value) => (value === letter ? '' : value))
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
