import { writable, derived, get } from 'svelte/store'

export const answer = writable('')
export const guessArray = writable([])
export const resultArray = writable([])
export const guessIndex = writable(0)
export const currentLevel = writable(localStorage.getItem('dingbats_level') || '1')

export const solved = derived([answer, guessArray], ([$answer, $guessArray]) => {
  const result = $answer.toUpperCase() === $guessArray.join('') && $guessArray.length > 0

  if (result) localStorage.setItem('dingbats_level', +get(currentLevel) + 1)

  return result
})

export function handleKey(e) {
  let key = e.target.value
  let currentGuess = get(guessArray)
  let currentIndex = get(guessIndex)
  let currentResult = get(resultArray)

  if (key === 'DEL') {
    const charsToRemove = currentGuess[currentIndex - 1] === ' ' ? 2 : 1
    currentIndex = Math.max(currentIndex - charsToRemove, 0)
    currentGuess[currentIndex] = '_'
    currentResult[currentIndex] = '0'
  } else {
    if (currentIndex < currentGuess.length) {
      currentGuess[currentIndex] = key
      currentResult[currentIndex] = key === get(answer).charAt(currentIndex).toUpperCase() ? '1' : '2'
      currentIndex = Math.min(currentIndex + 1, currentGuess.length)
    }
    if (currentGuess[currentIndex] === ' ') currentIndex++
  }
  guessIndex.set(currentIndex)
  guessArray.set(currentGuess)
  resultArray.set(currentResult)
}
