import { writable, derived, get } from 'svelte/store'
import { levels } from '../routes/Dingbats/Levels/levels'

export const answer = writable('')
export const guessArray = writable([])
export const resultArray = writable([])
export const guessIndex = writable(0)
export const currentLevel = writable(levels[+localStorage.getItem('dingbats_level') - 1] || levels[0])
export const progress = derived(currentLevel, ($currentLevel) => {
  const level = +localStorage.getItem('dingbats_level') || 1
  return `${level} of ${levels.length}`
})

export const solved = derived([answer, guessArray], ([$answer, $guessArray]) => {
  if (!$answer) return false
  const result = $answer.toUpperCase() === $guessArray.join('') && $guessArray.length > 0

  if (result) {
    console.log(+localStorage.getItem('dingbats_level'))
    let nextLevel = Math.max(+localStorage.getItem('dingbats_level'), 1) + 1
    if (nextLevel > levels.length) nextLevel = 1
    localStorage.setItem('dingbats_level', nextLevel)
  }

  return result
})

export function setAnswer(phrase) {
  answer.set(phrase)
  guessIndex.set(0)
  guessArray.set([...phrase].map((letter) => (letter === ' ' ? ' ' : '_')))
  resultArray.set([...phrase].map((letter) => (letter === ' ' ? ' ' : null)))
}

export function handleKey(e) {
  let key = e.target.value
  let currentGuess = get(guessArray)
  let currentIndex = get(guessIndex)
  let currentResult = get(resultArray)

  if (key === 'DEL') {
    const charsToRemove = currentGuess[currentIndex - 1] === ' ' ? 2 : 1
    currentIndex = Math.max(currentIndex - charsToRemove, 0)
    currentGuess[currentIndex] = '_'
    currentResult[currentIndex] = null
  } else {
    if (currentIndex < currentGuess.length) {
      currentGuess[currentIndex] = key
      currentResult[currentIndex] = key === get(answer).charAt(currentIndex).toUpperCase() ? true : false
      currentIndex = Math.min(currentIndex + 1, currentGuess.length)
    }
    if (currentGuess[currentIndex] === ' ') currentIndex++
  }
  guessIndex.set(currentIndex)
  guessArray.set(currentGuess)
  resultArray.set(currentResult)
}
